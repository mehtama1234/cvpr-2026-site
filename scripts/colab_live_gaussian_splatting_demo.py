import json
import math
import time
from pathlib import Path

import torch


CASES = [
    {"id": "dense-novel-view", "title": "Dense novel-view rendering", "controls": {"viewCount": 86, "splatDensity": 78, "semanticEntropy": 24, "provenanceVisibility": 70}},
    {"id": "semantic-edit", "title": "Semantic edit selection", "controls": {"viewCount": 74, "splatDensity": 72, "semanticEntropy": 34, "provenanceVisibility": 76}},
    {"id": "provenance-transfer", "title": "Provenance transfer after edits", "controls": {"viewCount": 68, "splatDensity": 70, "semanticEntropy": 42, "provenanceVisibility": 84}},
    {"id": "sparse-capture", "title": "Sparse capture with thin geometry", "controls": {"viewCount": 62, "splatDensity": 66, "semanticEntropy": 46, "provenanceVisibility": 72}},
]


def clamp(value, lo=0.0, hi=100.0):
    return max(lo, min(hi, float(value)))


def make_splats(case, device):
    controls = case["controls"]
    n = int(96 + controls["splatDensity"] * 3.1)
    g = torch.Generator(device=device).manual_seed(sum(ord(ch) for ch in case["id"]))
    xyz = torch.rand((n, 3), generator=g, device=device) * 2 - 1
    xyz[:, 2] = xyz[:, 2] * 0.35 + 2.4
    prototypes = torch.tensor(
        [
            [-0.55, -0.20, 2.35],
            [0.52, -0.08, 2.45],
            [-0.08, 0.48, 2.30],
            [0.28, 0.22, 2.55],
        ],
        device=device,
    )
    dist2 = ((xyz[:, None, :] - prototypes[None, :, :]) ** 2).sum(dim=2)
    entropy_scale = controls["semanticEntropy"] / 100
    semantic_logits = -dist2 * (7.5 - entropy_scale * 3.2)
    semantic_logits = semantic_logits + torch.randn((n, 4), generator=g, device=device) * (0.10 + entropy_scale * 0.55)
    semantic = (semantic_logits / (0.55 + entropy_scale * 1.10)).softmax(dim=1)
    palette = torch.tensor(
        [
            [0.22, 0.69, 0.78],
            [0.90, 0.42, 0.24],
            [0.36, 0.74, 0.42],
            [0.66, 0.48, 0.86],
        ],
        device=device,
    )
    colors = semantic @ palette
    colors = (colors + torch.randn((n, 3), generator=g, device=device) * 0.035).clamp(0, 1)
    sigma = 0.035 + (100 - controls["splatDensity"]) / 1800
    alpha = (0.35 + controls["provenanceVisibility"] / 180) * torch.ones((n, 1), device=device)
    return {"xyz": xyz, "colors": colors, "semantic": semantic, "sigma": sigma, "alpha": alpha}


def render(splats, angle, edit_label=None, size=96):
    device = splats["xyz"].device
    ca = math.cos(angle)
    sa = math.sin(angle)
    rot = torch.tensor([[ca, 0.0, sa], [0.0, 1.0, 0.0], [-sa, 0.0, ca]], device=device)
    pts = splats["xyz"] @ rot.T
    uv = pts[:, :2] / pts[:, 2:].clamp_min(0.1)
    grid_y, grid_x = torch.meshgrid(
        torch.linspace(-0.75, 0.75, size, device=device),
        torch.linspace(-0.75, 0.75, size, device=device),
        indexing="ij",
    )
    dx = grid_x.unsqueeze(0) - uv[:, 0].view(-1, 1, 1)
    dy = grid_y.unsqueeze(0) - uv[:, 1].view(-1, 1, 1)
    weight = torch.exp(-(dx**2 + dy**2) / (2 * splats["sigma"] ** 2)) * splats["alpha"].view(-1, 1, 1)
    colors = splats["colors"]
    if edit_label is not None:
        mask = splats["semantic"][:, edit_label].pow(1.7).view(-1, 1)
        edit_color = torch.tensor([0.95, 0.20, 0.18], device=device).view(1, 3)
        colors = colors * (1 - mask * 0.72) + edit_color * mask * 0.72
    rgb = (weight.unsqueeze(1) * colors.view(-1, 3, 1, 1)).sum(dim=0) / weight.sum(dim=0).clamp_min(1e-4).unsqueeze(0)
    sem = (weight.unsqueeze(1) * splats["semantic"].view(-1, 4, 1, 1)).sum(dim=0) / weight.sum(dim=0).clamp_min(1e-4).unsqueeze(0)
    return rgb.clamp(0, 1), sem


def run_case(case, device):
    controls = case["controls"]
    splats = make_splats(case, device)
    angles = torch.linspace(-0.34, 0.34, 5).tolist()
    torch.cuda.synchronize()
    start = torch.cuda.Event(enable_timing=True)
    end = torch.cuda.Event(enable_timing=True)
    start.record()
    renders = [render(splats, angle) for angle in angles]
    edited = [render(splats, angle, edit_label=1) for angle in angles]
    end.record()
    torch.cuda.synchronize()
    elapsed_ms = start.elapsed_time(end)

    rgbs = torch.stack([item[0] for item in renders])
    sems = torch.stack([item[1] for item in renders])
    edited_rgbs = torch.stack([item[0] for item in edited])
    adjacent_delta = torch.abs(rgbs[1:] - rgbs[:-1]).mean()
    semantic_confidence = sems.max(dim=1).values.mean()
    semantic_margin = (torch.topk(sems, k=2, dim=1).values[:, 0] - torch.topk(sems, k=2, dim=1).values[:, 1]).mean()
    delta_map = torch.abs(edited_rgbs - rgbs).mean(dim=1)
    target_mask = sems[:, 1]
    background_mask = (1 - target_mask).clamp(0, 1)
    target_delta = (delta_map * target_mask).sum(dim=(1, 2)) / target_mask.sum(dim=(1, 2)).clamp_min(1e-4)
    background_delta = (delta_map * background_mask).sum(dim=(1, 2)) / background_mask.sum(dim=(1, 2)).clamp_min(1e-4)
    leakage = float((background_delta.mean() / target_delta.mean().clamp_min(1e-4)).detach().cpu())
    edit_locality = max(0.0, min(1.0, 1.0 - leakage))
    render_stability = float((1 - adjacent_delta).clamp(0, 1).detach().cpu())
    semantic_attachment = float((semantic_confidence * 0.72 + semantic_margin * 0.28).detach().cpu())
    watermark = controls["provenanceVisibility"] / 100

    render_fidelity = clamp(render_stability * 78 + controls["viewCount"] * 0.14 + controls["splatDensity"] * 0.08)
    semantic_metric = clamp(semantic_attachment * 100 * 0.72 + edit_locality * 100 * 0.16 + (100 - controls["semanticEntropy"]) * 0.12)
    provenance_trace = clamp(watermark * 72 + render_stability * 13 + semantic_attachment * 12)
    view_instability = clamp((1 - render_stability) * 90 + (100 - controls["viewCount"]) * 0.12)
    edit_leakage_risk = clamp((1 - edit_locality) * 64 + controls["semanticEntropy"] * 0.14 + (100 - provenance_trace) * 0.10)
    readiness = clamp(render_fidelity * 0.28 + semantic_metric * 0.26 + provenance_trace * 0.24 + (100 - max(view_instability, edit_leakage_risk)) * 0.22)

    metrics = {
        "renderFidelity": round(render_fidelity, 1),
        "semanticAttachment": round(semantic_metric, 1),
        "provenanceTrace": round(provenance_trace, 1),
        "viewInstability": round(view_instability, 1),
        "editLeakageRisk": round(edit_leakage_risk, 1),
        "readiness": round(readiness, 1),
    }
    outputs = {
        "renderProfile": {
            "splats": int(splats["xyz"].shape[0]),
            "views": len(angles),
            "elapsedMs": round(elapsed_ms, 2),
            "adjacentFrameDelta": round(float(adjacent_delta.detach().cpu()), 5),
        },
        "semanticProbe": {
            "meanConfidence": round(float(semantic_confidence.detach().cpu()), 5),
            "margin": round(float(semantic_margin.detach().cpu()), 5),
            "editLeakageRatio": round(leakage, 5),
            "editLocality": round(edit_locality, 5),
        },
        "provenanceProbe": {"visibility": controls["provenanceVisibility"], "trace": metrics["provenanceTrace"]},
    }
    return metrics, outputs


def main():
    if not torch.cuda.is_available():
        raise SystemExit("No CUDA device available")
    device = torch.device("cuda")
    accelerator = torch.cuda.get_device_name(0)
    results = []
    for case in CASES:
        metrics, outputs = run_case(case, device)
        results.append(
            {
                "jobId": "gaussian-splatting",
                "caseId": case["id"],
                "mode": "live-colab",
                "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "model": {"renderer": "torch-cuda-gaussian-splat-compositor", "semanticProbe": "splat-label-edit-probe"},
                "inputs": {"splatControls": case["controls"], "asset": f"synthetic://splat/{case['id']}.ply"},
                "outputs": outputs,
                "metrics": metrics,
                "provenance": {
                    "runtime": "google-colab-pro-plus",
                    "accelerator": accelerator,
                    "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                    "sourceBench": "cvpr-gaussian-splatting-bench",
                    "execution": "torch-cuda-gaussian-splatting-live-demo",
                },
            }
        )
    summary = {
        "demo": "cvpr-live-gaussian-splatting-colab-demo",
        "jobId": "gaussian-splatting",
        "runtime": "google-colab-pro-plus",
        "accelerator": accelerator,
        "results": len(results),
        "minReadiness": min(row["metrics"]["readiness"] for row in results),
        "maxEditLeakageRisk": max(row["metrics"]["editLeakageRisk"] for row in results),
        "status": "valid",
    }
    Path("/content/cvpr_gaussian_splatting_live_results.json").write_text(json.dumps(results, indent=2) + "\n")
    Path("/content/cvpr_gaussian_splatting_live_summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    payload = {"summary": summary, "results": results}
    print("===CVPR_LIVE_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_LIVE_JSON_END===")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()

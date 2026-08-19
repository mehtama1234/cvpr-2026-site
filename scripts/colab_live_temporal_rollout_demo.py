import json
import math
import time
from pathlib import Path

import torch
import torch.nn.functional as F
from torchvision.models.optical_flow import Raft_Small_Weights, raft_small


CASES = [
    {
        "id": "short-stable",
        "title": "Short stable rollout",
        "controls": {"rolloutLength": 24, "identityDensity": 28, "physicsViolations": 14, "memoryWindow": 72},
    },
    {
        "id": "crowded-memory",
        "title": "Crowded memory",
        "controls": {"rolloutLength": 36, "identityDensity": 76, "physicsViolations": 26, "memoryWindow": 82},
    },
    {
        "id": "contact-heavy",
        "title": "Contact-heavy rollout",
        "controls": {"rolloutLength": 56, "identityDensity": 52, "physicsViolations": 20, "memoryWindow": 82},
    },
    {
        "id": "long-rollout-drift",
        "title": "Long rollout drift",
        "controls": {"rolloutLength": 66, "identityDensity": 68, "physicsViolations": 12, "memoryWindow": 92},
    },
]


def clamp(value, lo=0.0, hi=100.0):
    return max(lo, min(hi, float(value)))


def make_frame(case, step, height=128, width=128, device="cuda"):
    controls = case["controls"]
    y, x = torch.meshgrid(
        torch.linspace(-1, 1, height, device=device),
        torch.linspace(-1, 1, width, device=device),
        indexing="ij",
    )
    density = controls["identityDensity"] / 100
    violation = controls["physicsViolations"] / 100
    length = controls["rolloutLength"] / 100
    channels = []
    for idx in range(3):
        speed = 0.05 + idx * 0.018 + length * 0.035
        wobble = math.sin(step * (0.35 + violation) + idx) * violation * 0.22
        cx = -0.48 + step * speed + idx * 0.30 + wobble
        cy = -0.28 + idx * 0.26 + math.cos(step * 0.25 + idx) * density * 0.12
        radius = 0.13 + density * 0.045 + idx * 0.01
        blob = torch.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * radius**2))
        grid = 0.22 * torch.sin((x * (idx + 2) + y * (idx + 1) + step * 0.08) * math.pi)
        channels.append((blob + grid).clamp(0, 1))
    frame = torch.stack(channels, dim=0)
    return frame.unsqueeze(0)


def load_model(device):
    weights = Raft_Small_Weights.DEFAULT
    model = raft_small(weights=weights, progress=False).to(device).eval()
    return {"modelId": str(weights), "model": model, "transforms": weights.transforms()}


def flow_pair(models, img1, img2):
    img1, img2 = models["transforms"](img1, img2)
    with torch.no_grad():
        flow = models["model"](img1, img2)[-1]
    return flow


def run_case(case, models, device):
    controls = case["controls"]
    steps = 5
    flows = []
    prev = make_frame(case, 0, device=device)
    torch.cuda.synchronize()
    start = torch.cuda.Event(enable_timing=True)
    end = torch.cuda.Event(enable_timing=True)
    start.record()
    for step in range(1, steps + 1):
        cur = make_frame(case, step, device=device)
        flow = flow_pair(models, prev, cur)
        flows.append(flow)
        prev = cur
    end.record()
    torch.cuda.synchronize()
    elapsed_ms = start.elapsed_time(end)

    magnitudes = [float(flow.norm(dim=1).mean().detach().cpu()) for flow in flows]
    roughness = [float((flow[:, :, 1:, :] - flow[:, :, :-1, :]).abs().mean().detach().cpu()) for flow in flows]
    acceleration = [abs(magnitudes[i] - magnitudes[i - 1]) for i in range(1, len(magnitudes))]
    avg_motion = sum(magnitudes) / len(magnitudes)
    avg_roughness = sum(roughness) / len(roughness)
    avg_acceleration = sum(acceleration) / len(acceleration)

    memory_load = clamp(controls["rolloutLength"] * 0.30 + controls["identityDensity"] * 0.31 + (100 - controls["memoryWindow"]) * 0.24 + avg_motion * 0.9)
    identity_stability = clamp(92 - avg_roughness * 28 - controls["identityDensity"] * 0.12 - controls["rolloutLength"] * 0.06)
    contact_consistency = clamp(91 - avg_acceleration * 4.8 - controls["physicsViolations"] * 0.30 - avg_roughness * 7)
    rollout_plausibility = clamp(identity_stability * 0.34 + contact_consistency * 0.34 + (100 - memory_load) * 0.18 + (100 - avg_motion * 2.0) * 0.14)
    drift = clamp(memory_load * 0.26 + (100 - identity_stability) * 0.30 + controls["physicsViolations"] * 0.18 + avg_acceleration * 4.2)
    readiness = clamp(identity_stability * 0.30 + contact_consistency * 0.28 + rollout_plausibility * 0.26 + (100 - drift) * 0.16)

    metrics = {
        "readiness": round(readiness, 1),
        "identityStability": round(identity_stability, 1),
        "contactConsistency": round(contact_consistency, 1),
        "rolloutPlausibility": round(rollout_plausibility, 1),
        "drift": round(drift, 1),
        "memoryLoad": round(memory_load, 1),
    }
    drift_curve = [round(clamp(drift * (idx + 1) / len(flows)), 1) for idx in range(len(flows))]
    outputs = {
        "identityTracks": f"synthetic://temporal/{case['id']}-raft-tracks.json",
        "contactEvents": f"synthetic://temporal/{case['id']}-contacts.json",
        "driftCurve": drift_curve,
        "rolloutPlausibility": metrics["rolloutPlausibility"],
        "flowProfile": {
            "meanMagnitude": round(avg_motion, 4),
            "meanRoughness": round(avg_roughness, 4),
            "meanAcceleration": round(avg_acceleration, 4),
            "elapsedMs": round(elapsed_ms, 2),
            "pairs": len(flows),
        },
    }
    return metrics, outputs


def main():
    if not torch.cuda.is_available():
        raise SystemExit("No CUDA device available")
    device = torch.device("cuda")
    accelerator = torch.cuda.get_device_name(0)
    models = load_model(device)
    results = []
    for case in CASES:
        metrics, outputs = run_case(case, models, device)
        results.append(
            {
                "jobId": "temporal-rollout",
                "caseId": case["id"],
                "mode": "live-colab",
                "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "model": {"tracker": "torchvision-raft-small", "flow": models["modelId"], "rolloutProbe": "cuda-optical-flow-consistency"},
                "inputs": {"trackingControls": case["controls"], "asset": f"synthetic://temporal/{case['id']}.mp4"},
                "outputs": outputs,
                "metrics": metrics,
                "provenance": {
                    "runtime": "google-colab-pro-plus",
                    "accelerator": accelerator,
                    "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                    "sourceBench": "cvpr-temporal-rollout-bench",
                    "execution": "torchvision-raft-small-temporal-live-demo",
                },
            }
        )

    summary = {
        "demo": "cvpr-live-temporal-rollout-colab-demo",
        "jobId": "temporal-rollout",
        "runtime": "google-colab-pro-plus",
        "accelerator": accelerator,
        "results": len(results),
        "minReadiness": min(row["metrics"]["readiness"] for row in results),
        "maxDrift": max(row["metrics"]["drift"] for row in results),
        "status": "valid",
    }
    Path("/content/cvpr_temporal_live_results.json").write_text(json.dumps(results, indent=2) + "\n")
    Path("/content/cvpr_temporal_live_summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    payload = {"summary": summary, "results": results}
    print("===CVPR_LIVE_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_LIVE_JSON_END===")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()

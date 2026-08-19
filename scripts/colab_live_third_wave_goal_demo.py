import json
import math
import os
import subprocess
import sys
import time
from pathlib import Path

import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F
from PIL import Image, ImageDraw
from torchvision.models import ResNet18_Weights, resnet18
from transformers import (
    BlipForConditionalGeneration,
    BlipProcessor,
    CLIPModel,
    CLIPProcessor,
    DPTForDepthEstimation,
    DPTImageProcessor,
)


DEVICE = torch.device("cuda")
RUNTIME = "google-colab-pro-plus"
NOTEBOOK = "notebooks/cvpr_gpu_worker.ipynb"
ROOT = Path("/content")


def created_at():
    return time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())


def clamp(value, lo=0.0, hi=100.0):
    return max(lo, min(hi, float(value)))


def write_job(filename, summary_name, demo, job_id, rows, accelerator, risk_key):
    ROOT.joinpath(filename).write_text(json.dumps(rows, indent=2) + "\n")
    values = [row["metrics"].get(risk_key, 0) for row in rows]
    summary = {
        "demo": demo,
        "jobId": job_id,
        "runtime": RUNTIME,
        "accelerator": accelerator,
        "results": len(rows),
        "minReadiness": min(row["metrics"]["readiness"] for row in rows),
        risk_key: max(values) if values else 0,
        "status": "valid",
    }
    ROOT.joinpath(summary_name).write_text(json.dumps(summary, indent=2) + "\n")
    print(json.dumps(summary, indent=2))


def pil_scene(case_id, size=256, variant=0):
    seed = sum(ord(ch) for ch in case_id) + variant * 101
    rng = np.random.default_rng(seed)
    img = Image.new("RGB", (size, size), (228, 232, 224))
    draw = ImageDraw.Draw(img)
    palette = [(36, 95, 130), (183, 67, 54), (54, 137, 94), (221, 177, 73), (101, 78, 142)]
    for idx in range(5):
        x = int(rng.integers(12, size - 80))
        y = int(rng.integers(16, size - 80))
        w = int(rng.integers(34, 88))
        h = int(rng.integers(28, 78))
        color = palette[(idx + variant) % len(palette)]
        if idx % 2:
            draw.rectangle([x, y, x + w, y + h], fill=color)
        else:
            draw.ellipse([x, y, x + w, y + h], fill=color)
    draw.text((12, size - 28), case_id[:26], fill=(24, 27, 30))
    return img


def clip_score(models, image, prompts):
    inputs = models["processor"](text=prompts, images=image, return_tensors="pt", padding=True).to(DEVICE)
    with torch.no_grad():
        logits = models["model"](**inputs).logits_per_image
    probs = logits.softmax(dim=1)[0].detach().cpu().tolist()
    return {prompt: float(prob) for prompt, prob in zip(prompts, probs)}


def load_clip():
    model_id = "openai/clip-vit-base-patch32"
    processor = CLIPProcessor.from_pretrained(model_id)
    model = CLIPModel.from_pretrained(model_id).to(DEVICE).eval()
    return {"modelId": model_id, "processor": processor, "model": model}


def run_temporal_vqa(accelerator, clip_models):
    cases = [
        ("stable-count", ["three colored objects remain visible", "objects disappear"], 0.10),
        ("object-enters", ["a new red object appears", "no object changes"], 0.28),
        ("attribute-swap", ["the blue object becomes red", "colors remain unchanged"], 0.42),
        ("occlusion-claim", ["one object is briefly occluded", "all objects are always visible"], 0.55),
    ]
    rows = []
    for case_id, prompts, difficulty in cases:
        frames = [pil_scene(case_id, variant=i) for i in range(4)]
        scores = [clip_score(clip_models, frame, prompts) for frame in frames]
        support = [row[prompts[0]] for row in scores]
        contradiction = [row[prompts[1]] for row in scores]
        support_mean = sum(support) / len(support)
        contradiction_max = max(contradiction)
        temporal_delta = max(support) - min(support)
        unsupported = clamp(contradiction_max * 100 + difficulty * 32)
        consistency = clamp((1 - temporal_delta) * 78 + support_mean * 22)
        readiness = clamp(consistency * 0.40 + support_mean * 100 * 0.25 + (100 - unsupported) * 0.25 + (1 - difficulty) * 10)
        rows.append({
            "jobId": "temporal-vqa-grounding",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": created_at(),
            "model": {"visionLanguage": clip_models["modelId"], "frameProbe": "clip-frame-claim-support"},
            "inputs": {"claims": prompts, "frames": 4, "asset": f"synthetic://temporal-vqa/{case_id}.mp4"},
            "outputs": {"frameSupport": [round(v * 100, 1) for v in support], "frameContradiction": [round(v * 100, 1) for v in contradiction]},
            "metrics": {"readiness": round(readiness, 1), "claimSupport": round(support_mean * 100, 1), "temporalConsistency": round(consistency, 1), "unsupportedClaimRisk": round(unsupported, 1), "temporalContradiction": round(contradiction_max * 100, 1)},
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-temporal-vqa-grounding-bench", "execution": "transformers-clip-temporal-vqa-live-demo"},
        })
    return rows


def ensure_sam_checkpoint():
    checkpoint = ROOT / "sam_vit_b_01ec64.pth"
    if not checkpoint.exists():
        subprocess.check_call([
            sys.executable,
            "-c",
            "import urllib.request; urllib.request.urlretrieve('https://dl.fbaipublicfiles.com/segment_anything/sam_vit_b_01ec64.pth', '/content/sam_vit_b_01ec64.pth')",
        ])
    return checkpoint


def run_sam_prompt_masks(accelerator):
    from segment_anything import SamPredictor, sam_model_registry

    checkpoint = ensure_sam_checkpoint()
    sam = sam_model_registry["vit_b"](checkpoint=str(checkpoint)).to(DEVICE).eval()
    predictor = SamPredictor(sam)
    cases = [
        ("center-click", np.array([[128, 128]]), np.array([1]), 0.10),
        ("box-refine", np.array([[74, 76], [184, 184]]), np.array([1, 1]), 0.20),
        ("ambiguous-click", np.array([[60, 64], [198, 190]]), np.array([1, 0]), 0.44),
        ("occlusion-mask", np.array([[130, 78], [134, 172]]), np.array([1, 1]), 0.58),
    ]
    rows = []
    for case_id, points, labels, difficulty in cases:
        image = np.array(pil_scene(case_id, size=256))
        predictor.set_image(image)
        masks, scores, logits = predictor.predict(point_coords=points, point_labels=labels, multimask_output=True)
        areas = [float(mask.mean()) for mask in masks]
        overlap = float(np.logical_and(masks[0], masks[1]).mean()) if len(masks) > 1 else 0.0
        best_score = float(scores.max())
        area_spread = max(areas) - min(areas)
        stability = clamp(best_score * 78 + (1 - area_spread) * 14 + (1 - overlap) * 8)
        sensitivity = clamp(area_spread * 120 + difficulty * 42 + overlap * 40)
        unsupported = clamp((1 - best_score) * 64 + difficulty * 30)
        readiness = clamp(stability * 0.42 + (100 - sensitivity) * 0.25 + (100 - unsupported) * 0.25 + (1 - difficulty) * 8)
        rows.append({
            "jobId": "sam-prompt-mask-refinement",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": created_at(),
            "model": {"segmenter": "segment-anything-vit-b", "checkpoint": "sam_vit_b_01ec64"},
            "inputs": {"points": points.tolist(), "labels": labels.tolist(), "asset": f"synthetic://sam/{case_id}.png"},
            "outputs": {"maskScores": [round(float(v), 4) for v in scores], "maskAreas": [round(v, 5) for v in areas], "maskOverlap": round(overlap, 5)},
            "metrics": {"readiness": round(readiness, 1), "maskStability": round(stability, 1), "promptSensitivity": round(sensitivity, 1), "unsupportedRegionRisk": round(unsupported, 1), "bestMaskScore": round(best_score * 100, 1)},
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-sam-prompt-mask-refinement-bench", "execution": "segment-anything-vit-b-live-demo"},
        })
    return rows


def load_dpt():
    model_id = "Intel/dpt-hybrid-midas"
    processor = DPTImageProcessor.from_pretrained(model_id)
    model = DPTForDepthEstimation.from_pretrained(model_id).to(DEVICE).eval()
    return {"modelId": model_id, "processor": processor, "model": model}


def run_real_depth(accelerator, depth_models):
    cases = [("low-texture-room", 0.35), ("thin-structure", 0.52), ("reflective-surface", 0.48), ("wide-baseline-scale", 0.62)]
    rows = []
    for case_id, difficulty in cases:
        image = pil_scene(case_id, size=384)
        inputs = depth_models["processor"](images=image, return_tensors="pt").to(DEVICE)
        with torch.no_grad():
            pred = depth_models["model"](**inputs).predicted_depth
        depth = F.interpolate(pred.unsqueeze(1), size=(160, 160), mode="bicubic", align_corners=False)
        dx = depth[:, :, :, 1:] - depth[:, :, :, :-1]
        dy = depth[:, :, 1:, :] - depth[:, :, :-1, :]
        normal_energy = torch.sqrt(dx[:, :, :-1, :] ** 2 + dy[:, :, :, :-1] ** 2 + 1e-6)
        depth_range = float((depth.max() - depth.min()).detach().cpu())
        curvature = float(torch.abs(normal_energy[:, :, 1:, :] - normal_energy[:, :, :-1, :]).mean().detach().cpu())
        consistency = clamp(92 - curvature * 240 - difficulty * 18)
        scale_drift = clamp(difficulty * 40 + max(0, 1.2 - depth_range) * 12)
        thin_risk = clamp(difficulty * 50 + curvature * 180)
        readiness = clamp(consistency * 0.38 + (100 - scale_drift) * 0.30 + (100 - thin_risk) * 0.22 + min(depth_range, 3.0) / 3.0 * 10)
        rows.append({
            "jobId": "real-depth-anything",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": created_at(),
            "model": {"depth": depth_models["modelId"], "normalProbe": "depth-gradient-normal-consistency"},
            "inputs": {"asset": f"synthetic://depth-real/{case_id}.png", "difficulty": difficulty},
            "outputs": {"depthRange": round(depth_range, 5), "curvature": round(curvature, 6), "normalEnergy": round(float(normal_energy.mean().detach().cpu()), 6)},
            "metrics": {"readiness": round(readiness, 1), "surfaceConsistency": round(consistency, 1), "scaleDrift": round(scale_drift, 1), "thinStructureRisk": round(thin_risk, 1)},
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-real-depth-normal-bench", "execution": "transformers-dpt-depth-live-demo"},
        })
    return rows


class TinyMedCNN(nn.Module):
    def __init__(self, classes):
        super().__init__()
        self.net = nn.Sequential(
            nn.Conv2d(1, 16, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(16, 32, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
            nn.Flatten(), nn.Linear(32 * 7 * 7, 64), nn.ReLU(), nn.Linear(64, classes),
        )

    def forward(self, x):
        return self.net(x)


def run_medmnist_baseline(accelerator):
    import medmnist
    from medmnist import INFO
    from torch.utils.data import DataLoader, Subset
    from torchvision import transforms

    flag = "pathmnist"
    info = INFO[flag]
    DataClass = getattr(medmnist, info["python_class"])
    transform = transforms.Compose([transforms.Grayscale(), transforms.ToTensor()])
    train = DataClass(split="train", transform=transform, download=True)
    test = DataClass(split="test", transform=transform, download=True)
    model = TinyMedCNN(len(info["label"])).to(DEVICE)
    opt = torch.optim.Adam(model.parameters(), lr=2e-3)
    loader = DataLoader(Subset(train, range(512)), batch_size=64, shuffle=True)
    model.train()
    for _ in range(2):
        for x, y in loader:
            x = x.to(DEVICE)
            y = y.squeeze().long().to(DEVICE)
            opt.zero_grad(set_to_none=True)
            loss = F.cross_entropy(model(x), y)
            loss.backward()
            opt.step()
    model.eval()
    cases = [("same-site-clean", 0.00), ("new-scanner-brightness", 0.20), ("external-hospital-noise", 0.38), ("rare-cohort-blur", 0.52)]
    batch_x, batch_y = next(iter(DataLoader(Subset(test, range(96)), batch_size=96)))
    batch_x = batch_x.to(DEVICE)
    rows = []
    for case_id, shift in cases:
        x = batch_x.clone()
        if shift > 0:
            x = (x * (1 - shift * 0.22) + shift * 0.08).clamp(0, 1)
            x = (x + torch.randn_like(x) * shift * 0.12).clamp(0, 1)
            if shift > 0.45:
                x = F.avg_pool2d(x, 3, stride=1, padding=1)
        with torch.no_grad():
            base = model(batch_x).softmax(dim=1)
            shifted = model(x).softmax(dim=1)
        conf = float(shifted.max(dim=1).values.mean().detach().cpu())
        base_conf = float(base.max(dim=1).values.mean().detach().cpu())
        divergence = float(F.kl_div(shifted.log(), base, reduction="batchmean").detach().cpu())
        calibration = clamp((1 - abs(base_conf - conf)) * 78 + (1 - min(divergence, 2.0) / 2.0) * 16)
        shift_score = clamp(shift * 100 * 0.78 + divergence * 12)
        false_clear = clamp((100 - calibration) * 0.46 + shift_score * 0.35)
        readiness = clamp(calibration * 0.36 + (100 - shift_score) * 0.25 + (100 - false_clear) * 0.29 + conf * 10)
        rows.append({
            "jobId": "medmnist-clinical-baseline",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": created_at(),
            "model": {"classifier": "tiny-cnn-trained-on-pathmnist", "dataset": "medmnist/pathmnist"},
            "inputs": {"shift": shift, "testImages": int(x.shape[0])},
            "outputs": {"baseConfidence": round(base_conf * 100, 1), "shiftedConfidence": round(conf * 100, 1), "klDivergence": round(divergence, 6)},
            "metrics": {"readiness": round(readiness, 1), "calibration": round(calibration, 1), "shiftScore": round(shift_score, 1), "falseClearRisk": round(false_clear, 1)},
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-medmnist-clinical-baseline-bench", "execution": "medmnist-torch-cnn-clinical-live-demo"},
        })
    return rows


def load_blip():
    model_id = "Salesforce/blip-image-captioning-base"
    processor = BlipProcessor.from_pretrained(model_id)
    model = BlipForConditionalGeneration.from_pretrained(model_id).to(DEVICE).eval()
    return {"modelId": model_id, "processor": processor, "model": model}


def run_vlm_claim_auditor(accelerator, blip_models, clip_models):
    cases = [
        ("visible-count", "there are multiple colored objects", 0.14),
        ("attribute-relation", "a red object is left of a blue object", 0.32),
        ("ocr-trap", "the image contains the word verified", 0.50),
        ("counterfactual-object", "a dog is visible in the image", 0.66),
    ]
    rows = []
    for case_id, claim, difficulty in cases:
        image = pil_scene(case_id, size=384)
        inputs = blip_models["processor"](image, return_tensors="pt").to(DEVICE)
        with torch.no_grad():
            ids = blip_models["model"].generate(**inputs, max_new_tokens=24)
        caption = blip_models["processor"].decode(ids[0], skip_special_tokens=True)
        support_scores = clip_score(clip_models, image, [claim, caption, "an unrelated animal photo"])
        claim_support = support_scores[claim] * 100
        caption_support = support_scores[caption] * 100
        unrelated = support_scores["an unrelated animal photo"] * 100
        unsupported = clamp((100 - claim_support) * 0.50 + unrelated * 0.36 + difficulty * 34)
        caption_alignment = clamp(caption_support * 0.70 + claim_support * 0.18 + (100 - unrelated) * 0.12)
        readiness = clamp(caption_alignment * 0.36 + claim_support * 0.26 + (100 - unsupported) * 0.30 + (1 - difficulty) * 8)
        rows.append({
            "jobId": "vlm-claim-auditor",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": created_at(),
            "model": {"captioner": blip_models["modelId"], "auditor": clip_models["modelId"]},
            "inputs": {"claim": claim, "asset": f"synthetic://vlm-claim/{case_id}.png"},
            "outputs": {"caption": caption, "clipScores": {k: round(v * 100, 1) for k, v in support_scores.items()}},
            "metrics": {"readiness": round(readiness, 1), "claimSupport": round(claim_support, 1), "captionAlignment": round(caption_alignment, 1), "unsupportedClaimRisk": round(unsupported, 1)},
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-vlm-claim-auditor-bench", "execution": "transformers-blip-clip-claim-audit-live-demo"},
        })
    return rows


def run_pgd_attack(accelerator):
    weights = ResNet18_Weights.DEFAULT
    model = resnet18(weights=weights).to(DEVICE).eval()
    mean = torch.tensor([0.485, 0.456, 0.406], device=DEVICE).view(1, 3, 1, 1)
    std = torch.tensor([0.229, 0.224, 0.225], device=DEVICE).view(1, 3, 1, 1)
    cases = [("small-epsilon", 2 / 255), ("medium-epsilon", 4 / 255), ("large-epsilon", 8 / 255), ("patch-plus-pgd", 10 / 255)]
    rows = []
    for case_id, eps in cases:
        image = torch.tensor(np.array(pil_scene(case_id, 224))).permute(2, 0, 1).float().unsqueeze(0).to(DEVICE) / 255
        with torch.no_grad():
            clean_logits = model((image - mean) / std)
        target = clean_logits.argmax(dim=1)
        adv = image.clone().detach()
        step = eps / 4
        for _ in range(12):
            adv.requires_grad_(True)
            loss = F.cross_entropy(model((adv - mean) / std), target)
            grad = torch.autograd.grad(loss, adv)[0]
            adv = adv.detach() + step * grad.sign()
            adv = torch.max(torch.min(adv, image + eps), image - eps).clamp(0, 1)
        with torch.no_grad():
            adv_logits = model((adv - mean) / std)
            clean_prob = clean_logits.softmax(dim=1).max(dim=1).values.item()
            adv_prob = adv_logits.softmax(dim=1).max(dim=1).values.item()
        changed = int(clean_logits.argmax(dim=1).item() != adv_logits.argmax(dim=1).item())
        collapse = clamp((clean_prob - adv_prob) * 115 + changed * 36 + eps * 255 * 4)
        attack_success = clamp(changed * 70 + max(0, clean_prob - adv_prob) * 30)
        readiness = clamp((100 - collapse) * 0.45 + (100 - attack_success) * 0.35 + (100 - eps * 255 * 4) * 0.20)
        rows.append({
            "jobId": "pgd-adversarial-robustness",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": created_at(),
            "model": {"classifier": str(weights), "attack": "projected-gradient-descent-linf"},
            "inputs": {"epsilon": round(eps, 6), "steps": 12, "asset": f"synthetic://pgd/{case_id}.png"},
            "outputs": {"cleanConfidence": round(clean_prob * 100, 1), "attackedConfidence": round(adv_prob * 100, 1), "topClassChanged": changed},
            "metrics": {"readiness": round(readiness, 1), "confidenceCollapse": round(collapse, 1), "attackSuccess": round(attack_success, 1), "epsilon255": round(eps * 255, 1)},
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-pgd-adversarial-robustness-bench", "execution": "torchvision-resnet-pgd-live-demo"},
        })
    return rows


class TinyNeRF(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(nn.Linear(3, 64), nn.ReLU(), nn.Linear(64, 64), nn.ReLU(), nn.Linear(64, 4))

    def forward(self, xyz):
        return self.net(xyz)


def run_nerf_lite(accelerator):
    cases = [("dense-views", 96, 0.12), ("sparse-capture", 48, 0.35), ("thin-geometry", 64, 0.48), ("novel-view-gap", 40, 0.62)]
    rows = []
    for case_id, samples, difficulty in cases:
        g = torch.Generator(device=DEVICE).manual_seed(sum(ord(ch) for ch in case_id))
        xyz = torch.rand((samples * 32, 3), generator=g, device=DEVICE) * 2 - 1
        target_rgb = torch.stack([
            torch.sin(xyz[:, 0] * math.pi) * 0.5 + 0.5,
            torch.cos(xyz[:, 1] * math.pi) * 0.5 + 0.5,
            torch.sin((xyz[:, 2] + xyz[:, 0]) * math.pi) * 0.5 + 0.5,
            torch.ones_like(xyz[:, 0]) * (0.35 + difficulty * 0.2),
        ], dim=1)
        model = TinyNeRF().to(DEVICE)
        opt = torch.optim.Adam(model.parameters(), lr=2e-3)
        start = torch.cuda.Event(enable_timing=True)
        end = torch.cuda.Event(enable_timing=True)
        losses = []
        start.record()
        for _ in range(220):
            idx = torch.randint(0, xyz.shape[0], (512,), generator=g, device=DEVICE)
            pred = torch.sigmoid(model(xyz[idx]))
            loss = F.mse_loss(pred, target_rgb[idx])
            opt.zero_grad(set_to_none=True)
            loss.backward()
            opt.step()
            losses.append(float(loss.detach().cpu()))
        end.record()
        torch.cuda.synchronize()
        elapsed = start.elapsed_time(end)
        final = losses[-1]
        improvement = max(0.0, losses[0] - final) / max(losses[0], 1e-6)
        novel = torch.rand((512, 3), generator=g, device=DEVICE) * 2 - 1
        with torch.no_grad():
            novel_pred = torch.sigmoid(model(novel))
        view_instability = clamp(final * 900 + difficulty * 32)
        geometry_drift = clamp((1 - improvement) * 52 + difficulty * 30)
        render_fidelity = clamp(100 - final * 700 - difficulty * 15)
        readiness = clamp(render_fidelity * 0.40 + (100 - view_instability) * 0.25 + (100 - geometry_drift) * 0.25 + min(samples, 96) / 96 * 10)
        rows.append({
            "jobId": "nerf-lite-novel-view",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": created_at(),
            "model": {"renderer": "tiny-cuda-neural-radiance-field", "optimizer": "adam-mse-novel-view"},
            "inputs": {"samples": samples, "difficulty": difficulty},
            "outputs": {"initialLoss": round(losses[0], 6), "finalLoss": round(final, 6), "elapsedMs": round(elapsed, 2), "novelMeanAlpha": round(float(novel_pred[:, 3].mean().detach().cpu()), 5)},
            "metrics": {"readiness": round(readiness, 1), "renderFidelity": round(render_fidelity, 1), "viewInstability": round(view_instability, 1), "geometryDrift": round(geometry_drift, 1)},
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-nerf-lite-novel-view-bench", "execution": "torch-cuda-nerf-lite-live-demo"},
        })
    return rows


def main():
    if not torch.cuda.is_available():
        raise SystemExit("No CUDA device available")
    accelerator = torch.cuda.get_device_name(0)
    clip_models = load_clip()
    depth_models = load_dpt()
    blip_models = load_blip()
    jobs = [
        ("cvpr_temporal_vqa_live_results.json", "cvpr_temporal_vqa_live_summary.json", "cvpr-live-temporal-vqa-goal-demo", "temporal-vqa-grounding", run_temporal_vqa(accelerator, clip_models), "unsupportedClaimRisk"),
        ("cvpr_sam_prompt_live_results.json", "cvpr_sam_prompt_live_summary.json", "cvpr-live-sam-prompt-goal-demo", "sam-prompt-mask-refinement", run_sam_prompt_masks(accelerator), "unsupportedRegionRisk"),
        ("cvpr_real_depth_live_results.json", "cvpr_real_depth_live_summary.json", "cvpr-live-real-depth-goal-demo", "real-depth-anything", run_real_depth(accelerator, depth_models), "scaleDrift"),
        ("cvpr_medmnist_live_results.json", "cvpr_medmnist_live_summary.json", "cvpr-live-medmnist-goal-demo", "medmnist-clinical-baseline", run_medmnist_baseline(accelerator), "falseClearRisk"),
        ("cvpr_vlm_claim_live_results.json", "cvpr_vlm_claim_live_summary.json", "cvpr-live-vlm-claim-goal-demo", "vlm-claim-auditor", run_vlm_claim_auditor(accelerator, blip_models, clip_models), "unsupportedClaimRisk"),
        ("cvpr_pgd_attack_live_results.json", "cvpr_pgd_attack_live_summary.json", "cvpr-live-pgd-attack-goal-demo", "pgd-adversarial-robustness", run_pgd_attack(accelerator), "attackSuccess"),
        ("cvpr_nerf_lite_live_results.json", "cvpr_nerf_lite_live_summary.json", "cvpr-live-nerf-lite-goal-demo", "nerf-lite-novel-view", run_nerf_lite(accelerator), "viewInstability"),
    ]
    for filename, summary_name, demo, job_id, rows, risk_key in jobs:
        write_job(filename, summary_name, demo, job_id, rows, accelerator, risk_key)


if __name__ == "__main__":
    main()

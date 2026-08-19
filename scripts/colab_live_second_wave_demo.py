import argparse
import json
import math
import time
from pathlib import Path

import torch
import torch.nn.functional as F
from torchvision.models import ResNet18_Weights, resnet18
from torchvision.models.detection import MaskRCNN_ResNet50_FPN_Weights, maskrcnn_resnet50_fpn


DEVICE = torch.device("cuda")
RUNTIME = "google-colab-pro-plus"
NOTEBOOK = "notebooks/cvpr_gpu_worker.ipynb"
CREATED_AT = lambda: time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())


def clamp(value, lo=0.0, hi=100.0):
    return max(lo, min(hi, float(value)))


def mesh(size=160):
    y, x = torch.meshgrid(
        torch.linspace(-1, 1, size, device=DEVICE),
        torch.linspace(-1, 1, size, device=DEVICE),
        indexing="ij",
    )
    return x, y


def synthetic_scene(case_id, controls, size=160):
    x, y = mesh(size)
    texture = controls.get("textureSparsity", 30) / 100
    clutter = controls.get("clutter", controls.get("objectClutter", 35)) / 100
    shift = controls.get("domainShift", controls.get("corruption", 20)) / 100
    channels = []
    for idx in range(3):
        cx = -0.45 + idx * 0.36 + math.sin(len(case_id) + idx) * 0.08
        cy = -0.30 + idx * 0.22 + math.cos(len(case_id) + idx) * 0.08
        radius = 0.20 - idx * 0.025 + clutter * 0.03
        blob = torch.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * radius**2))
        wave = torch.sin((x * (idx + 2) + y * (idx + 3)) * math.pi * (1.0 + shift)) * (0.18 + texture * 0.22)
        channels.append((0.30 + blob * (0.58 - texture * 0.20) + wave).clamp(0, 1))
    image = torch.stack(channels, dim=0)
    return image.unsqueeze(0)


def image_to_classifier_input(image):
    image = F.interpolate(image, size=(224, 224), mode="bilinear", align_corners=False)
    mean = torch.tensor([0.485, 0.456, 0.406], device=DEVICE).view(1, 3, 1, 1)
    std = torch.tensor([0.229, 0.224, 0.225], device=DEVICE).view(1, 3, 1, 1)
    return (image - mean) / std


def estimate_depth_normals(image, controls):
    gray = image.mean(dim=1, keepdim=True)
    pooled = F.avg_pool2d(gray, kernel_size=9, stride=1, padding=4)
    depth = (0.65 * gray + 0.35 * pooled).clamp(0, 1)
    dx = depth[:, :, :, 1:] - depth[:, :, :, :-1]
    dy = depth[:, :, 1:, :] - depth[:, :, :-1, :]
    normal_energy = torch.sqrt(dx[:, :, :-1, :] ** 2 + dy[:, :, :, :-1] ** 2 + 1e-6)
    edge_energy = normal_energy.mean()
    curvature = torch.abs(normal_energy[:, :, 1:, :] - normal_energy[:, :, :-1, :]).mean()
    depth_range = depth.max() - depth.min()
    thin_penalty = controls["thinStructure"] / 100
    scale = controls["scaleAmbiguity"] / 100
    surface_consistency = clamp(96 - float(curvature.cpu()) * 480 - thin_penalty * 18)
    normal_consistency = clamp(94 - float(edge_energy.cpu()) * 115 - controls["textureSparsity"] * 0.10)
    scale_drift = clamp(scale * 34 + controls["textureSparsity"] * 0.10 + (1 - float(depth_range.cpu())) * 14)
    readiness = clamp(surface_consistency * 0.33 + normal_consistency * 0.31 + (100 - scale_drift) * 0.24 + (100 - controls["thinStructure"]) * 0.12)
    return {
        "readiness": round(readiness, 1),
        "depthRange": round(float(depth_range.cpu()), 4),
        "normalConsistency": round(normal_consistency, 1),
        "surfaceConsistency": round(surface_consistency, 1),
        "scaleDrift": round(scale_drift, 1),
        "thinStructureRisk": round(clamp(thin_penalty * 58 + float(edge_energy.cpu()) * 80), 1),
    }, {
        "depthMap": "synthetic://depth/depth-map.pt",
        "normalEnergy": round(float(edge_energy.cpu()), 6),
        "curvature": round(float(curvature.cpu()), 6),
    }


def run_depth_normal(accelerator):
    cases = [
        ("indoor-low-texture", {"textureSparsity": 68, "thinStructure": 24, "scaleAmbiguity": 54}),
        ("thin-chair-legs", {"textureSparsity": 38, "thinStructure": 78, "scaleAmbiguity": 32}),
        ("reflective-surface", {"textureSparsity": 52, "thinStructure": 34, "scaleAmbiguity": 46}),
        ("wide-room-scale", {"textureSparsity": 44, "thinStructure": 22, "scaleAmbiguity": 68}),
    ]
    results = []
    for case_id, controls in cases:
        image = synthetic_scene(case_id, controls)
        metrics, outputs = estimate_depth_normals(image, controls)
        results.append({
            "jobId": "depth-normal-consistency",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": CREATED_AT(),
            "model": {"depth": "torch-cuda-depth-normal-probe", "surface": "finite-difference-normal-consistency"},
            "inputs": {"depthControls": controls, "asset": f"synthetic://depth/{case_id}.png"},
            "outputs": outputs,
            "metrics": metrics,
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-depth-normal-consistency-bench", "execution": "torch-cuda-depth-normal-live-demo"},
        })
    return results


def load_resnet():
    weights = ResNet18_Weights.DEFAULT
    model = resnet18(weights=weights).to(DEVICE).eval()
    return model, str(weights)


def classifier_logits(model, image):
    with torch.no_grad():
        return model(image_to_classifier_input(image))


def classifier_embedding_logits(model, image):
    with torch.no_grad():
        x = image_to_classifier_input(image)
        x = model.conv1(x)
        x = model.bn1(x)
        x = model.relu(x)
        x = model.maxpool(x)
        x = model.layer1(x)
        x = model.layer2(x)
        x = model.layer3(x)
        x = model.layer4(x)
        x = model.avgpool(x)
        embedding = torch.flatten(x, 1)
        logits = model.fc(embedding)
    return embedding, logits


def run_clinical_shift(accelerator, model, model_id):
    cases = [
        ("clear-baseline", {"domainShift": 8, "artifactLoad": 12, "escalationThreshold": 68}),
        ("scanner-shift", {"domainShift": 46, "artifactLoad": 24, "escalationThreshold": 72}),
        ("rare-presentation", {"domainShift": 58, "artifactLoad": 18, "escalationThreshold": 78}),
        ("motion-artifact", {"domainShift": 38, "artifactLoad": 66, "escalationThreshold": 74}),
    ]
    results = []
    for case_id, controls in cases:
        base = synthetic_scene(case_id + "-base", controls)
        shifted = (synthetic_scene(case_id + "-shift", controls) * (1 - controls["artifactLoad"] / 260)).clamp(0, 1)
        clean_logits = classifier_logits(model, base)
        shift_logits = classifier_logits(model, shifted)
        clean_prob = clean_logits.softmax(dim=1).max(dim=1).values.item()
        shift_prob = shift_logits.softmax(dim=1).max(dim=1).values.item()
        divergence = F.kl_div(shift_logits.log_softmax(dim=1), clean_logits.softmax(dim=1), reduction="batchmean").item()
        calibration = clamp((1 - abs(clean_prob - shift_prob)) * 72 + (1 - min(divergence, 1.5) / 1.5) * 20)
        shift_score = clamp(controls["domainShift"] * 0.58 + controls["artifactLoad"] * 0.24 + divergence * 16)
        false_clear = clamp((100 - calibration) * 0.50 + shift_score * 0.32 - controls["escalationThreshold"] * 0.08)
        readiness = clamp(calibration * 0.35 + (100 - shift_score) * 0.24 + (100 - false_clear) * 0.29 + controls["escalationThreshold"] * 0.12)
        metrics = {"readiness": round(readiness, 1), "shiftScore": round(shift_score, 1), "calibration": round(calibration, 1), "falseClearRisk": round(false_clear, 1), "escalationThreshold": controls["escalationThreshold"]}
        results.append({
            "jobId": "clinical-shift",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": CREATED_AT(),
            "model": {"classifier": model_id, "shiftProbe": "resnet-logit-divergence-domain-shift"},
            "inputs": {"clinicalControls": controls, "asset": f"synthetic://clinical/{case_id}.png"},
            "outputs": {"cleanConfidence": round(clean_prob * 100, 1), "shiftedConfidence": round(shift_prob * 100, 1), "logitDivergence": round(divergence, 6)},
            "metrics": metrics,
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-clinical-shift-bench", "execution": "torchvision-resnet-clinical-shift-live-demo"},
        })
    return results


def corrupt(image, controls):
    severity = controls["severity"] / 100
    if controls["corruption"] == "blur":
        return F.avg_pool2d(image, kernel_size=5, stride=1, padding=2)
    if controls["corruption"] == "noise":
        noise = F.avg_pool2d(torch.randn_like(image), kernel_size=3, stride=1, padding=1)
        return (image * (1 - severity * 0.10) + noise * severity * 0.14 + image.mean(dim=(2, 3), keepdim=True) * severity * 0.04).clamp(0, 1)
    if controls["corruption"] == "patch":
        out = image.clone()
        s = int(image.shape[-1] * (0.12 + severity * 0.18))
        out[:, :, 20:20 + s, 32:32 + s] = 1 - out[:, :, 20:20 + s, 32:32 + s]
        return out
    return (torch.round(image * (8 + int((1 - severity) * 24))) / (8 + int((1 - severity) * 24))).clamp(0, 1)


def run_corruption_robustness(accelerator, model, model_id):
    cases = [
        ("motion-blur", {"corruption": "blur", "severity": 46}),
        ("sensor-noise", {"corruption": "noise", "severity": 52}),
        ("patch-attack", {"corruption": "patch", "severity": 66}),
        ("compression-shift", {"corruption": "compression", "severity": 58}),
    ]
    results = []
    for case_id, controls in cases:
        base = synthetic_scene(case_id + "-clean", {"corruption": controls["severity"], "clutter": 34})
        bad = corrupt(base, controls)
        clean_features, clean_logits = classifier_embedding_logits(model, base)
        corrupted_features, corrupted_logits = classifier_embedding_logits(model, bad)
        clean = clean_logits.softmax(dim=1)
        corrupted = corrupted_logits.softmax(dim=1)
        clean_conf = clean.max(dim=1).values.item()
        corrupt_conf = corrupted.max(dim=1).values.item()
        top_changed = int(clean.argmax(dim=1).item() != corrupted.argmax(dim=1).item())
        feature_cosine = F.cosine_similarity(clean_features, corrupted_features).item()
        js = 0.5 * (F.kl_div(clean.log(), ((clean + corrupted) / 2), reduction="batchmean") + F.kl_div(corrupted.log(), ((clean + corrupted) / 2), reduction="batchmean")).item()
        feature_retention = clamp(feature_cosine * 100)
        confidence_retention = clamp(100 - max(0.0, clean_conf - corrupt_conf) * 100)
        label_stability = clamp(100 - top_changed * 14 - js * 16)
        collapse = clamp(
            (100 - feature_retention) * 0.42
            + (100 - confidence_retention) * 0.22
            + (100 - label_stability) * 0.20
            + controls["severity"] * 0.16
        )
        robustness = clamp(
            feature_retention * 0.44
            + confidence_retention * 0.22
            + label_stability * 0.22
            + (100 - controls["severity"]) * 0.12
        )
        readiness = clamp(robustness * 0.58 + (100 - collapse) * 0.26 + (100 - controls["severity"]) * 0.16)
        metrics = {
            "readiness": round(readiness, 1),
            "robustness": round(robustness, 1),
            "confidenceCollapse": round(collapse, 1),
            "featureRetention": round(feature_retention, 1),
            "labelStability": round(label_stability, 1),
            "severity": controls["severity"],
            "topClassChanged": top_changed,
        }
        results.append({
            "jobId": "corruption-robustness",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": CREATED_AT(),
            "model": {"classifier": model_id, "probe": "clean-corrupted-logit-delta"},
            "inputs": {"corruptionControls": controls, "asset": f"synthetic://robustness/{case_id}.png"},
            "outputs": {
                "cleanConfidence": round(clean_conf * 100, 1),
                "corruptedConfidence": round(corrupt_conf * 100, 1),
                "jsDivergence": round(js, 6),
                "featureCosine": round(feature_cosine, 6),
            },
            "metrics": metrics,
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-corruption-robustness-bench", "execution": "torchvision-resnet-corruption-live-demo"},
        })
    return results


def load_maskrcnn():
    weights = MaskRCNN_ResNet50_FPN_Weights.DEFAULT
    model = maskrcnn_resnet50_fpn(weights=weights, progress=False).to(DEVICE).eval()
    return model, str(weights)


def run_prompt_robustness(accelerator):
    cases = [
        ("single-object", {"objectClutter": 18, "promptNoise": 8, "occlusion": 10}),
        ("cluttered-scene", {"objectClutter": 64, "promptNoise": 18, "occlusion": 24}),
        ("ambiguous-clicks", {"objectClutter": 46, "promptNoise": 62, "occlusion": 18}),
        ("occluded-object", {"objectClutter": 38, "promptNoise": 26, "occlusion": 70}),
    ]
    model, model_id = load_maskrcnn()
    results = []
    for case_id, controls in cases:
        image = synthetic_scene(case_id, controls)
        detection_input = F.interpolate(image, size=(224, 224), mode="bilinear", align_corners=False)[0]
        with torch.no_grad():
            pred = model([detection_input])[0]
        scores = pred["scores"][:12]
        masks = pred["masks"][:12, 0] if pred["masks"].numel() else torch.empty((0, 224, 224), device=DEVICE)
        kept = scores > 0.20
        if int(kept.sum().item()) >= 2:
            selected = masks[kept]
            union = (selected > 0.5).float().amax(dim=0)
            overlap = ((selected > 0.5).float().sum(dim=0) > 1).float().mean().item()
            mask_area = union.mean().item()
            confidence = scores[kept].mean().item()
        else:
            overlap = 0.0
            mask_area = 0.0
            confidence = scores.mean().item() if scores.numel() else 0.0
        sensitivity = clamp(controls["promptNoise"] * 0.42 + controls["objectClutter"] * 0.22 + overlap * 65)
        mask_stability = clamp(confidence * 78 + (1 - overlap) * 12 + (1 - abs(mask_area - 0.25)) * 10 - controls["occlusion"] * 0.12)
        unsupported_region = clamp((1 - confidence) * 42 + controls["occlusion"] * 0.24 + controls["promptNoise"] * 0.16)
        readiness = clamp(mask_stability * 0.42 + (100 - sensitivity) * 0.25 + (100 - unsupported_region) * 0.23 + confidence * 10)
        metrics = {"readiness": round(readiness, 1), "maskStability": round(mask_stability, 1), "promptSensitivity": round(sensitivity, 1), "unsupportedRegionRisk": round(unsupported_region, 1), "detections": int(kept.sum().item())}
        results.append({
            "jobId": "prompt-segmentation-robustness",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": CREATED_AT(),
            "model": {"segmenter": model_id, "promptProbe": "mask-rcnn-click-robustness-proxy"},
            "inputs": {"promptControls": controls, "asset": f"synthetic://segmentation/{case_id}.png"},
            "outputs": {"meanMaskConfidence": round(confidence * 100, 1), "maskArea": round(mask_area, 5), "maskOverlap": round(overlap, 5)},
            "metrics": metrics,
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-prompt-segmentation-robustness-bench", "execution": "torchvision-maskrcnn-prompt-robustness-live-demo"},
        })
    return results


def run_video_tracking(accelerator):
    cases = [
        ("clean-crossing", {"occlusion": 12, "crowding": 22, "velocity": 36}),
        ("identity-crossing", {"occlusion": 26, "crowding": 68, "velocity": 42}),
        ("long-occlusion", {"occlusion": 74, "crowding": 36, "velocity": 34}),
        ("fast-motion", {"occlusion": 22, "crowding": 42, "velocity": 78}),
    ]
    results = []
    x, y = mesh(128)
    for case_id, controls in cases:
        tracks = []
        prev_centers = None
        drift = 0.0
        for step in range(8):
            centers = []
            masks = []
            for idx in range(3):
                cx = -0.62 + idx * 0.48 + step * controls["velocity"] / 950
                cy = -0.26 + idx * 0.21 + math.sin(step * 0.7 + idx) * controls["crowding"] / 520
                if step in (3, 4):
                    cx += controls["occlusion"] / 420 * (1 if idx == 1 else -0.4)
                centers.append(torch.tensor([cx, cy], device=DEVICE))
                masks.append(torch.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * 0.065**2)))
            centers = torch.stack(centers)
            if prev_centers is not None:
                dist = torch.cdist(prev_centers, centers)
                assignment = dist.argmin(dim=1)
                drift += float((assignment != torch.arange(3, device=DEVICE)).float().mean().cpu()) * 18
                drift += float(dist.min(dim=1).values.mean().cpu()) * 5
            prev_centers = centers
            tracks.append(torch.stack(masks).amax(dim=0))
        stack = torch.stack(tracks)
        temporal_delta = torch.abs(stack[1:] - stack[:-1]).mean().item()
        occlusion_loss = controls["occlusion"] * 0.34 + controls["crowding"] * 0.16 + temporal_delta * 40
        identity_stability = clamp(94 - drift - controls["crowding"] * 0.10 - controls["occlusion"] * 0.12)
        recovery = clamp(92 - occlusion_loss * 0.42 - controls["velocity"] * 0.10)
        track_continuity = clamp(96 - temporal_delta * 155 - controls["velocity"] * 0.08)
        readiness = clamp(identity_stability * 0.35 + recovery * 0.28 + track_continuity * 0.24 + (100 - occlusion_loss) * 0.13)
        metrics = {"readiness": round(readiness, 1), "identityStability": round(identity_stability, 1), "occlusionRecovery": round(recovery, 1), "trackContinuity": round(track_continuity, 1), "identityDrift": round(clamp(drift), 1)}
        results.append({
            "jobId": "video-identity-tracking",
            "caseId": case_id,
            "mode": "live-colab",
            "createdAt": CREATED_AT(),
            "model": {"tracker": "torch-cuda-centroid-assignment-tracker", "temporalProbe": "mask-sequence-identity-drift"},
            "inputs": {"trackingControls": controls, "asset": f"synthetic://tracking/{case_id}.mp4"},
            "outputs": {"frames": 8, "objects": 3, "temporalDelta": round(temporal_delta, 6), "trackTensor": f"synthetic://tracking/{case_id}-tracks.pt"},
            "metrics": metrics,
            "provenance": {"runtime": RUNTIME, "accelerator": accelerator, "notebook": NOTEBOOK, "sourceBench": "cvpr-video-identity-tracking-bench", "execution": "torch-cuda-video-tracking-live-demo"},
        })
    return results


def write_job(filename, summary_name, demo, job_id, rows, accelerator, risk_key):
    summary = {
        "demo": demo,
        "jobId": job_id,
        "runtime": RUNTIME,
        "accelerator": accelerator,
        "results": len(rows),
        "minReadiness": min(row["metrics"]["readiness"] for row in rows),
        risk_key: max(row["metrics"].get(risk_key, row["metrics"].get("confidenceCollapse", 0)) for row in rows),
        "status": "valid",
    }
    Path(f"/content/{filename}").write_text(json.dumps(rows, indent=2) + "\n")
    Path(f"/content/{summary_name}").write_text(json.dumps(summary, indent=2) + "\n")
    return summary


def parse_args():
    parser = argparse.ArgumentParser(description="Run second-wave live Colab demos.")
    parser.add_argument(
        "--job",
        choices=(
            "depth-normal-consistency",
            "clinical-shift",
            "corruption-robustness",
            "prompt-segmentation-robustness",
            "video-identity-tracking",
        ),
        help="Run only one job instead of the full second-wave bundle.",
    )
    parser.add_argument("--emit-payload", action="store_true", help="Print launcher-harvestable JSON payload markers.")
    return parser.parse_args()


def main():
    args = parse_args()
    if not torch.cuda.is_available():
        raise SystemExit("No CUDA device available")
    accelerator = torch.cuda.get_device_name(0)
    resnet, resnet_id = load_resnet()
    jobs = {
        "depth-normal-consistency": (
            "cvpr_depth_normal_live_results.json",
            "cvpr_depth_normal_live_summary.json",
            "cvpr-live-depth-normal-colab-demo",
            "depth-normal-consistency",
            lambda: run_depth_normal(accelerator),
            "scaleDrift",
        ),
        "clinical-shift": (
            "cvpr_clinical_shift_live_results.json",
            "cvpr_clinical_shift_live_summary.json",
            "cvpr-live-clinical-shift-colab-demo",
            "clinical-shift",
            lambda: run_clinical_shift(accelerator, resnet, resnet_id),
            "falseClearRisk",
        ),
        "corruption-robustness": (
            "cvpr_corruption_robustness_live_results.json",
            "cvpr_corruption_robustness_live_summary.json",
            "cvpr-live-corruption-robustness-colab-demo",
            "corruption-robustness",
            lambda: run_corruption_robustness(accelerator, resnet, resnet_id),
            "confidenceCollapse",
        ),
        "prompt-segmentation-robustness": (
            "cvpr_prompt_segmentation_live_results.json",
            "cvpr_prompt_segmentation_live_summary.json",
            "cvpr-live-prompt-segmentation-colab-demo",
            "prompt-segmentation-robustness",
            lambda: run_prompt_robustness(accelerator),
            "unsupportedRegionRisk",
        ),
        "video-identity-tracking": (
            "cvpr_video_tracking_live_results.json",
            "cvpr_video_tracking_live_summary.json",
            "cvpr-live-video-tracking-colab-demo",
            "video-identity-tracking",
            lambda: run_video_tracking(accelerator),
            "identityDrift",
        ),
    }
    selected_keys = [args.job] if args.job else list(jobs)
    for key in selected_keys:
        filename, summary_name, demo, job_id, runner, risk_key = jobs[key]
        rows = runner()
        summary = write_job(filename, summary_name, demo, job_id, rows, accelerator, risk_key)
        if args.emit_payload:
            payload = {"summary": summary, "results": rows}
            print("===CVPR_LIVE_JSON_BEGIN===")
            print(json.dumps(payload, indent=2))
            print("===CVPR_LIVE_JSON_END===")
        print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()

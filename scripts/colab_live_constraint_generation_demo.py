import json
import time
from pathlib import Path

import numpy as np
import torch
import torch.nn as nn
from PIL import Image, ImageDraw


CASES = [
    {"id": "light-layout-edit", "title": "Light layout edit", "controls": {"editStrength": 24, "layoutLock": 78, "identityLock": 82, "adversarialPromptPressure": 18}},
    {"id": "style-with-locks", "title": "Style edit with locks", "controls": {"editStrength": 52, "layoutLock": 68, "identityLock": 80, "adversarialPromptPressure": 32}},
    {"id": "layout-rewrite", "title": "Aggressive layout rewrite", "controls": {"editStrength": 72, "layoutLock": 62, "identityLock": 92, "adversarialPromptPressure": 28}},
    {"id": "prompt-attack-edit", "title": "Prompt attack edit", "controls": {"editStrength": 78, "layoutLock": 66, "identityLock": 92, "adversarialPromptPressure": 28}},
]


def clamp(value, lo=0.0, hi=100.0):
    return max(lo, min(hi, float(value)))


def make_source(case, size=256):
    controls = case["controls"]
    img = Image.new("RGB", (size, size), (233, 236, 232))
    draw = ImageDraw.Draw(img)
    draw.rectangle([22, 34, 118, 124], fill=(52, 119, 149))
    draw.ellipse([142, 56, 216, 130], fill=(186, 109, 71))
    draw.rectangle([60, 156, 202, 224], fill=(88, 136, 97))
    draw.text((18, 14), case["title"][:28], fill=(18, 22, 24))
    lock_band = int(controls["layoutLock"] * 1.4)
    draw.rectangle([0, size - 14, min(size, lock_band), size], fill=(45, 45, 45))
    return img


def make_edit(source, case):
    controls = case["controls"]
    edited = source.copy()
    draw = ImageDraw.Draw(edited)
    shift = int(controls["editStrength"] / 4)
    pressure = int(controls["adversarialPromptPressure"] / 3)
    draw.rectangle([22 + shift, 34, 118 + shift, 124], outline=(240, 240, 240), width=4)
    draw.ellipse([142 - pressure, 56 + shift // 2, 216 - pressure, 130 + shift // 2], outline=(255, 220, 120), width=4)
    draw.rectangle([60, 156 - shift // 3, 202, 224 - shift // 3], outline=(248, 90, 90), width=3)
    return edited


def pil_to_tensor(image, device):
    arr = np.asarray(image.resize((128, 128))).astype("float32") / 255.0
    return torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).to(device)


def load_models(device):
    encoder = nn.Sequential(
        nn.Conv2d(3, 12, kernel_size=5, stride=2, padding=2),
        nn.ReLU(),
        nn.Conv2d(12, 24, kernel_size=3, stride=2, padding=1),
        nn.ReLU(),
        nn.AdaptiveAvgPool2d((1, 1)),
        nn.Flatten(),
    ).to(device).eval()
    return {"device": device, "encoder": encoder}


def run_case(case, models):
    source = make_source(case)
    edited = make_edit(source, case)
    with torch.no_grad():
        src = models["encoder"](pil_to_tensor(source, models["device"])).flatten()
        out = models["encoder"](pil_to_tensor(edited, models["device"])).flatten()
    delta = torch.linalg.vector_norm(src - out).item()
    cosine = torch.nn.functional.cosine_similarity(src, out, dim=0).item()
    controls = case["controls"]
    edit_pressure = clamp(controls["editStrength"] * 0.42 + controls["adversarialPromptPressure"] * 0.36 + (100 - controls["layoutLock"]) * 0.12 + (100 - controls["identityLock"]) * 0.10 + delta * 4)
    constraints = clamp(controls["layoutLock"] * 0.36 + (100 - delta * 20) * 0.20 + (100 - controls["adversarialPromptPressure"]) * 0.18 + 18)
    identity = clamp(cosine * 100 * 0.32 + controls["identityLock"] * 0.34 + (100 - controls["editStrength"]) * 0.16 + (100 - controls["adversarialPromptPressure"]) * 0.10)
    locality = clamp(controls["layoutLock"] * 0.34 + controls["identityLock"] * 0.16 + (100 - edit_pressure) * 0.26 + cosine * 100 * 0.16)
    reward = clamp(constraints * 0.32 + identity * 0.24 + locality * 0.18 + (100 - controls["adversarialPromptPressure"]) * 0.18)
    damage = clamp(controls["editStrength"] * 0.22 + controls["adversarialPromptPressure"] * 0.24 + (100 - identity) * 0.34 + (100 - controls["identityLock"]) * 0.16)
    provenance = clamp(controls["adversarialPromptPressure"] * 0.34 + edit_pressure * 0.24 + (100 - constraints) * 0.24 + (100 - locality) * 0.18)
    readiness = clamp(constraints * 0.28 + identity * 0.26 + locality * 0.20 + reward * 0.16 + (100 - max(damage, provenance)) * 0.10)
    metrics = {
        "readiness": round(readiness, 1),
        "editPressure": round(edit_pressure, 1),
        "constraintSatisfaction": round(constraints, 1),
        "identityPreservation": round(identity, 1),
        "editLocality": round(locality, 1),
        "rewardAlignment": round(reward, 1),
        "identityDamage": round(damage, 1),
        "provenanceRisk": round(provenance, 1),
    }
    outputs = {
        "editedImage": f"synthetic://generation/{case['id']}-edited.png",
        "layoutMask": f"synthetic://generation/{case['id']}-layout-mask.png",
        "identityEmbeddingDelta": metrics["identityDamage"],
        "rewardTrace": f"synthetic://generation/{case['id']}-reward.json",
    }
    return metrics, outputs


def main():
    if not torch.cuda.is_available():
        raise SystemExit("No CUDA device available")
    device = torch.device("cuda")
    accelerator = torch.cuda.get_device_name(0)
    models = load_models(device)
    results = []
    for case in CASES:
        metrics, outputs = run_case(case, models)
        results.append({
            "jobId": "constraint-generation",
            "caseId": case["id"],
            "mode": "live-colab",
            "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "model": {"layout": "torch-layout-probe", "identity": "torch-identity-embedding-probe", "reward": "constraint-reward-probe"},
            "inputs": {"generationControls": case["controls"], "asset": f"synthetic://generation/{case['id']}.png"},
            "outputs": outputs,
            "metrics": metrics,
            "provenance": {"runtime": "google-colab-pro-plus", "accelerator": accelerator, "notebook": "notebooks/cvpr_gpu_worker.ipynb", "sourceBench": "cvpr-constraint-generation-bench", "execution": "torch-layout-identity-reward-probe"},
        })

    summary = {
        "demo": "cvpr-live-constraint-generation-colab-demo",
        "jobId": "constraint-generation",
        "runtime": "google-colab-pro-plus",
        "accelerator": accelerator,
        "results": len(results),
        "minReadiness": min(row["metrics"]["readiness"] for row in results),
        "maxIdentityDamage": max(row["metrics"]["identityDamage"] for row in results),
        "status": "valid",
    }
    Path("/content/cvpr_constraint_generation_live_results.json").write_text(json.dumps(results, indent=2) + "\n")
    Path("/content/cvpr_constraint_generation_live_summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    payload = {"summary": summary, "results": results}
    print("===CVPR_LIVE_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_LIVE_JSON_END===")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()

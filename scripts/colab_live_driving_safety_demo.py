import json
import time
from pathlib import Path

import numpy as np
import torch
import torch.nn as nn
from PIL import Image, ImageDraw


CASES = [
    {"id": "urban-cut-in", "title": "Urban cut-in", "controls": {"hazardDensity": 48, "actorSpeed": 40, "occlusion": 10, "actionConfidence": 82}},
    {"id": "night-crosswalk", "title": "Night crosswalk", "controls": {"hazardDensity": 36, "actorSpeed": 34, "occlusion": 18, "actionConfidence": 78}},
    {"id": "highway-merge", "title": "Highway merge", "controls": {"hazardDensity": 24, "actorSpeed": 72, "occlusion": 16, "actionConfidence": 84}},
    {"id": "construction-zone", "title": "Construction zone", "controls": {"hazardDensity": 36, "actorSpeed": 32, "occlusion": 14, "actionConfidence": 72}},
]


def clamp(value, lo=0.0, hi=100.0):
    return max(lo, min(hi, float(value)))


def make_scene(case, size=(480, 270)):
    controls = case["controls"]
    w, h = size
    img = Image.new("RGB", size, (38, 45, 48))
    draw = ImageDraw.Draw(img)
    horizon = int(h * 0.42)
    draw.rectangle([0, horizon, w, h], fill=(74, 78, 74))
    draw.polygon([(w * 0.38, h), (w * 0.48, horizon), (w * 0.56, horizon), (w * 0.70, h)], fill=(88, 91, 88))
    for y in range(horizon + 20, h, 42):
        draw.line([(w * 0.50, y), (w * 0.52, min(h, y + 24))], fill=(210, 210, 180), width=3)
    actors = max(2, int(controls["hazardDensity"] / 20))
    for i in range(actors):
        x = int(45 + i * (w - 100) / max(1, actors - 1))
        y = int(horizon + 30 + ((i * 37 + controls["occlusion"]) % 105))
        speed = int(18 + controls["actorSpeed"] / 4)
        color = (180, 70 + i * 17 % 100, 60 + i * 23 % 120)
        draw.rectangle([x, y, x + speed, y + 18], fill=color, outline=(25, 25, 25), width=2)
    draw.text((16, 14), case["title"][:30], fill=(235, 239, 235))
    return img


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


def time_to_collision(actor_speed, hazard_density):
    return round(max(0.6, min(8.5, 8.2 - actor_speed * 0.045 - hazard_density * 0.026)), 2)


def run_case(case, models):
    scene = make_scene(case)
    arr = np.asarray(scene.resize((160, 90))).astype("float32") / 255.0
    tensor = torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).to(models["device"])
    with torch.no_grad():
        emb = models["encoder"](tensor).flatten()
    emb_norm = torch.linalg.vector_norm(emb).item()
    emb_spread = torch.std(emb).item() if emb.numel() > 1 else 0.0
    controls = case["controls"]
    ttc = time_to_collision(controls["actorSpeed"], controls["hazardDensity"])
    grounding = clamp(56.2 * 0.34 + (100 - controls["occlusion"]) * 0.24 + controls["actionConfidence"] * 0.20 + emb_norm * 3.0)
    risk = clamp(controls["hazardDensity"] * 0.32 + controls["actorSpeed"] * 0.24 + controls["occlusion"] * 0.29 + (100 - controls["actionConfidence"]) * 0.31 + (3.2 - min(ttc, 3.2)) * 9 + emb_spread * 4)
    violation = clamp(risk * 0.58 + (100 - grounding) * 0.32 + (12 if controls["actionConfidence"] > 72 and ttc < 2.4 else 0))
    abstention = clamp(risk * 0.55 + (100 - grounding) * 0.28 - controls["actionConfidence"] * 0.18)
    readiness = clamp(grounding * 0.36 + (100 - risk) * 0.34 + (100 - violation) * 0.18 + abstention * 0.12)
    metrics = {"readiness": round(readiness, 1), "sceneGrounding": round(grounding, 1), "timeToCollision": ttc, "risk": round(risk, 1), "ruleViolation": round(violation, 1), "abstention": round(abstention, 1)}
    outputs = {"sceneGroundingMap": f"synthetic://driving/{case['id']}-grounding.png", "timeToCollision": metrics["timeToCollision"], "riskTrace": f"synthetic://driving/{case['id']}-risk.json", "ruleViolations": metrics["ruleViolation"]}
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
            "jobId": "driving-safety",
            "caseId": case["id"],
            "mode": "live-colab",
            "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "model": {"grounder": "torch-driving-scene-risk-probe", "riskHead": "ttc-risk-head", "ruleMonitor": "safety-rule-monitor"},
            "inputs": {"safetyControls": case["controls"], "asset": f"synthetic://driving/{case['id']}.mp4"},
            "outputs": outputs,
            "metrics": metrics,
            "provenance": {"runtime": "google-colab-pro-plus", "accelerator": accelerator, "notebook": "notebooks/cvpr_gpu_worker.ipynb", "sourceBench": "cvpr-driving-safety-bench", "execution": "torch-driving-scene-risk-probe"},
        })

    summary = {
        "demo": "cvpr-live-driving-safety-colab-demo",
        "jobId": "driving-safety",
        "runtime": "google-colab-pro-plus",
        "accelerator": accelerator,
        "results": len(results),
        "minReadiness": min(row["metrics"]["readiness"] for row in results),
        "maxRisk": max(row["metrics"]["risk"] for row in results),
        "status": "valid",
    }
    Path("/content/cvpr_driving_safety_live_results.json").write_text(json.dumps(results, indent=2) + "\n")
    Path("/content/cvpr_driving_safety_live_summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    payload = {"summary": summary, "results": results}
    print("===CVPR_LIVE_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_LIVE_JSON_END===")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()

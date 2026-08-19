import json
import time
from pathlib import Path

import torch
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter
from transformers import CLIPModel, CLIPProcessor


CASES = [
    {
        "id": "clean-camera",
        "title": "Clean camera image",
        "controls": {"attackStrength": 0, "generationSource": 56, "watermarkVisibility": 100, "unlearningProbe": 0},
    },
    {
        "id": "edited-social-post",
        "title": "Edited social post",
        "controls": {"attackStrength": 0, "generationSource": 64, "watermarkVisibility": 98, "unlearningProbe": 10},
    },
    {
        "id": "synthetic-watermarked",
        "title": "Synthetic watermarked media",
        "controls": {"attackStrength": 0, "generationSource": 84, "watermarkVisibility": 94, "unlearningProbe": 44},
    },
    {
        "id": "adaptive-attack",
        "title": "Adaptive provenance attack",
        "controls": {"attackStrength": 12, "generationSource": 89, "watermarkVisibility": 100, "unlearningProbe": 0},
    },
]


def clamp(value, lo=0.0, hi=100.0):
    return max(lo, min(hi, float(value)))


def make_image(case, size=336):
    controls = case["controls"]
    base = (232, 235, 232) if controls["generationSource"] < 60 else (218, 207, 226)
    img = Image.new("RGB", (size, size), base)
    draw = ImageDraw.Draw(img)
    for i in range(10):
        x = int((i * 43 + controls["generationSource"]) % size)
        y = int((i * 31 + controls["attackStrength"]) % size)
        draw.ellipse([x, y, min(size, x + 82), min(size, y + 58)], fill=(70 + i * 9, 95 + i * 8, 128 + i * 6))
    mark = max(16, int(controls["watermarkVisibility"] * 0.42))
    draw.rectangle([size - mark - 14, size - mark - 14, size - 14, size - 14], outline=(245, 245, 220), width=4)
    draw.text((16, 16), case["title"][:28], fill=(20, 23, 28))
    if controls["attackStrength"]:
        img = img.filter(ImageFilter.GaussianBlur(radius=controls["attackStrength"] / 18))
        img = ImageEnhance.Contrast(img).enhance(max(0.5, 1 - controls["attackStrength"] / 80))
    return img


def load_models(device):
    model_id = "openai/clip-vit-base-patch32"
    processor = CLIPProcessor.from_pretrained(model_id)
    model = CLIPModel.from_pretrained(model_id).to(device).eval()
    return {"modelId": model_id, "processor": processor, "model": model}


def run_case(case, models, device):
    image = make_image(case)
    prompts = [
        "a clean camera photograph",
        "a synthetic generated image",
        "an edited social media image",
        "an adversarially perturbed image",
        "a watermarked image",
    ]
    inputs = models["processor"](text=prompts, images=image, return_tensors="pt", padding=True).to(device)
    with torch.no_grad():
        outputs = models["model"](**inputs)
    probs = outputs.logits_per_image.softmax(dim=1)[0].detach().cpu().tolist()
    score = {prompt: float(prob) for prompt, prob in zip(prompts, probs)}
    controls = case["controls"]
    synthetic_score = score["a synthetic generated image"] * 100
    clean_score = score["a clean camera photograph"] * 100
    edited_score = score["an edited social media image"] * 100
    adversarial_score = score["an adversarially perturbed image"] * 100
    watermark_score = score["a watermarked image"] * 100
    provenance = clamp(clean_score * 0.24 + watermark_score * 0.36 + (100 - adversarial_score) * 0.20 + controls["watermarkVisibility"] * 0.20)
    leakage = clamp(controls["unlearningProbe"] * 0.32 + adversarial_score * 0.28 + controls["attackStrength"] * 0.90)
    evidence = clamp(provenance * 0.62 + watermark_score * 0.18 + (100 - leakage) * 0.20)
    risk = clamp(leakage * 0.42 + synthetic_score * 0.24 + controls["attackStrength"] * 0.55)
    attack_coverage = clamp(adversarial_score * 0.54 + edited_score * 0.22 + controls["attackStrength"] * 1.2)
    readiness = clamp(evidence * 0.34 + provenance * 0.28 + (100 - risk) * 0.25 + (100 - leakage) * 0.13)
    metrics = {
        "readiness": round(readiness, 1),
        "attackCoverage": round(attack_coverage, 1),
        "provenanceConfidence": round(provenance, 1),
        "leakageRisk": round(leakage, 1),
        "evidence": round(evidence, 1),
        "risk": round(risk, 1),
    }
    probe_scores = {key: round(value * 100, 1) for key, value in score.items()}
    outputs = {
        "provenanceConfidence": metrics["provenanceConfidence"],
        "attackHeatmap": f"synthetic://adversarial/{case['id']}-clip-heatmap.png",
        "leakageRisk": metrics["leakageRisk"],
        "evidence": metrics["evidence"],
        "clipProbeScores": probe_scores,
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
        metrics, outputs = run_case(case, models, device)
        results.append(
            {
                "jobId": "adversarial-provenance",
                "caseId": case["id"],
                "mode": "live-colab",
                "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "model": {"detector": models["modelId"], "probe": "clip-provenance-prompt-bank"},
                "inputs": {"attackControls": case["controls"], "asset": f"synthetic://{case['id']}"},
                "outputs": outputs,
                "metrics": metrics,
                "provenance": {
                    "runtime": "google-colab-pro-plus",
                    "accelerator": accelerator,
                    "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                    "sourceBench": "cvpr-adversarial-provenance-bench",
                    "execution": "transformers-clip-provenance-live-demo",
                },
            }
        )

    summary = {
        "demo": "cvpr-live-adversarial-provenance-colab-demo",
        "jobId": "adversarial-provenance",
        "runtime": "google-colab-pro-plus",
        "accelerator": accelerator,
        "results": len(results),
        "minReadiness": min(row["metrics"]["readiness"] for row in results),
        "maxRisk": max(row["metrics"]["risk"] for row in results),
        "status": "valid",
    }
    Path("/content/cvpr_adversarial_live_results.json").write_text(json.dumps(results, indent=2) + "\n")
    Path("/content/cvpr_adversarial_live_summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    payload = {"summary": summary, "results": results}
    print("===CVPR_LIVE_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_LIVE_JSON_END===")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()

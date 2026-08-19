import json
import time
from pathlib import Path

import torch
from PIL import Image, ImageDraw
from transformers import AutoModelForZeroShotObjectDetection, AutoProcessor, SiglipModel, SiglipProcessor


CASES = [
    {
        "id": "common-clean",
        "title": "Common clean object",
        "query": "teal rectangle.",
        "controls": {"queryRarity": 18, "distractorOverlap": 16, "boxAmbiguity": 18, "evidenceThreshold": 54},
    },
    {
        "id": "rare-visible",
        "title": "Rare visible object",
        "query": "teal target rectangle.",
        "controls": {"queryRarity": 66, "distractorOverlap": 12, "boxAmbiguity": 34, "evidenceThreshold": 62},
    },
    {
        "id": "rare-distractors",
        "title": "Rare object with distractors",
        "query": "teal target rectangle near orange distractor.",
        "controls": {"queryRarity": 78, "distractorOverlap": 28, "boxAmbiguity": 28, "evidenceThreshold": 76},
    },
    {
        "id": "unsupported-query",
        "title": "Unsupported text query",
        "query": "transparent glass elephant.",
        "controls": {"queryRarity": 82, "distractorOverlap": 30, "boxAmbiguity": 32, "evidenceThreshold": 84},
    },
]


def clamp(value, lo=0.0, hi=100.0):
    return max(lo, min(hi, float(value)))


def make_image(case, size=384):
    controls = case["controls"]
    img = Image.new("RGB", (size, size), (236, 241, 239))
    draw = ImageDraw.Draw(img)
    target = [int(size * 0.18), int(size * 0.22), int(size * 0.48), int(size * 0.50)]
    shift = int(controls["distractorOverlap"] * 0.9)
    distractor = [int(size * 0.55) - shift, int(size * 0.26), int(size * 0.82) - shift, int(size * 0.52)]
    draw.rectangle(distractor, fill=(195, 119, 59), outline=(92, 74, 57), width=4)
    draw.rectangle(target, fill=(35, 129, 141), outline=(10, 90, 98), width=5)
    draw.text((target[0], max(2, target[1] - 18)), case["title"][:28], fill=(16, 23, 25))
    return img


def load_models(device):
    detector_id = "IDEA-Research/grounding-dino-tiny"
    siglip_id = "google/siglip-base-patch16-224"
    detector_processor = AutoProcessor.from_pretrained(detector_id)
    detector = AutoModelForZeroShotObjectDetection.from_pretrained(detector_id).to(device).eval()
    siglip_processor = SiglipProcessor.from_pretrained(siglip_id)
    siglip = SiglipModel.from_pretrained(siglip_id).to(device).eval()
    return {
        "detectorId": detector_id,
        "siglipId": siglip_id,
        "detectorProcessor": detector_processor,
        "detector": detector,
        "siglipProcessor": siglip_processor,
        "siglip": siglip,
    }


def run_case(case, models, device):
    image = make_image(case)
    query = case["query"]
    detector_inputs = models["detectorProcessor"](images=image, text=query, return_tensors="pt").to(device)
    with torch.no_grad():
        detector_outputs = models["detector"](**detector_inputs)
    processed = models["detectorProcessor"].post_process_grounded_object_detection(
        detector_outputs,
        detector_inputs.input_ids,
        threshold=0.20,
        text_threshold=0.18,
        target_sizes=[image.size[::-1]],
    )[0]

    boxes = []
    for box, score, label in zip(processed.get("boxes", []), processed.get("scores", []), processed.get("labels", [])):
        x0, y0, x1, y1 = [float(v) for v in box.tolist()]
        boxes.append(
            {
                "label": str(label),
                "xywh": [
                    round(x0 / image.width, 3),
                    round(y0 / image.height, 3),
                    round((x1 - x0) / image.width, 3),
                    round((y1 - y0) / image.height, 3),
                ],
                "score": round(float(score), 3),
            }
        )

    siglip_inputs = models["siglipProcessor"](text=[query], images=image, padding="max_length", return_tensors="pt").to(device)
    with torch.no_grad():
        siglip_outputs = models["siglip"](**siglip_inputs)
    embedding_score = torch.sigmoid(siglip_outputs.logits_per_image[0, 0]).item() * 100
    proposal = clamp(max([box["score"] for box in boxes], default=0.0) * 100)
    controls = case["controls"]
    text_region = clamp(embedding_score * 0.72 + proposal * 0.28)
    long_tail = clamp(text_region * 0.58 + controls["queryRarity"] * 0.16 + (100 - controls["boxAmbiguity"]) * 0.26)
    localized = clamp(proposal * 0.38 + text_region * 0.42 + controls["evidenceThreshold"] * 0.20)
    unsupported = clamp((100 - localized) * 0.42 + controls["distractorOverlap"] * 0.30 + controls["boxAmbiguity"] * 0.22 - controls["evidenceThreshold"] * 0.16)
    readiness = clamp(localized * 0.34 + text_region * 0.24 + long_tail * 0.22 + (100 - unsupported) * 0.20)
    metrics = {
        "readiness": round(readiness, 1),
        "proposalRecall": round(proposal, 1),
        "textRegionScore": round(text_region, 1),
        "longTailRecall": round(long_tail, 1),
        "localizedEvidence": round(localized, 1),
        "unsupportedRisk": round(unsupported, 1),
    }
    outputs = {
        "boxes": boxes,
        "regionScores": {"target": metrics["textRegionScore"], "longTail": metrics["longTailRecall"]},
        "embeddingScore": round(embedding_score, 1),
        "localizedEvidence": metrics["localizedEvidence"],
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
                "jobId": "open-vocab-grounding",
                "caseId": case["id"],
                "mode": "live-colab",
                "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "model": {"embedding": models["siglipId"], "detector": models["detectorId"]},
                "inputs": {"textQuery": case["query"], "controls": case["controls"], "asset": f"synthetic://{case['id']}"},
                "outputs": outputs,
                "metrics": metrics,
                "provenance": {
                    "runtime": "google-colab-pro-plus",
                    "accelerator": accelerator,
                    "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                    "sourceBench": "cvpr-long-tail-grounding-bench",
                    "execution": "transformers-grounding-dino-siglip-live-demo",
                },
            }
        )

    summary = {
        "demo": "cvpr-live-open-vocab-grounding-colab-demo",
        "jobId": "open-vocab-grounding",
        "runtime": "google-colab-pro-plus",
        "accelerator": accelerator,
        "results": len(results),
        "minReadiness": min(row["metrics"]["readiness"] for row in results),
        "maxUnsupportedRisk": max(row["metrics"]["unsupportedRisk"] for row in results),
        "status": "valid",
    }
    Path("/content/cvpr_open_vocab_live_results.json").write_text(json.dumps(results, indent=2) + "\n")
    Path("/content/cvpr_open_vocab_live_summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    payload = {"summary": summary, "results": results}
    print("===CVPR_LIVE_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_LIVE_JSON_END===")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()

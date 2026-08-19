"""Assemble a live Colab export from harvested analysis artifacts."""
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
OUTPUT = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json"
REPORT = ROOT / "analysis/cvpr_colab_live_intake/assembled_live_export.json"

SOURCES = {
    "open-vocab-grounding": ROOT / "analysis/cvpr_live_open_vocab_grounding_colab_demo/cvpr_open_vocab_live_results.json",
    "restoration-fidelity": ROOT / "analysis/cvpr_live_restoration_fidelity_colab_demo/cvpr_restoration_live_results.json",
    "adversarial-provenance": ROOT / "analysis/cvpr_live_adversarial_provenance_colab_demo/cvpr_adversarial_live_results.json",
    "temporal-rollout": ROOT / "analysis/cvpr_live_temporal_rollout_colab_demo/cvpr_temporal_live_results.json",
    "clinical-shift": ROOT / "analysis/cvpr_live_clinical_shift_colab_demo/cvpr_clinical_shift_live_results.json",
    "compute-serving": ROOT / "analysis/cvpr_live_compute_serving_colab_demo/cvpr_compute_serving_live_results.json",
    "constraint-generation": ROOT / "analysis/cvpr_live_constraint_generation_colab_demo/cvpr_constraint_generation_live_results.json",
    "driving-safety": ROOT / "analysis/cvpr_live_driving_safety_colab_demo/cvpr_driving_safety_live_results.json",
    "depth-normal-consistency": ROOT / "analysis/cvpr_live_depth_normal_colab_demo/cvpr_depth_normal_live_results.json",
    "corruption-robustness": ROOT / "analysis/cvpr_live_corruption_robustness_colab_demo/cvpr_corruption_robustness_live_results.json",
    "prompt-segmentation-robustness": ROOT / "analysis/cvpr_live_prompt_segmentation_colab_demo/cvpr_prompt_segmentation_live_results.json",
    "video-identity-tracking": ROOT / "analysis/cvpr_live_video_tracking_colab_demo/cvpr_video_tracking_live_results.json",
    "metric-geometry": ROOT / "analysis/cvpr_live_metric_geometry_colab_demo/cvpr_metric_geometry_live_results.json",
    "gaussian-splatting": ROOT / "analysis/cvpr_live_gaussian_splatting_colab_demo/cvpr_gaussian_splatting_live_results.json",
}


def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def main():
    manifest = load_json(MANIFEST)
    expected_jobs = [job["jobId"] for job in manifest["jobs"]]
    assembled = []
    found = []
    missing = []
    for job_id in expected_jobs:
        source = SOURCES.get(job_id)
        if source and source.exists():
            rows = load_json(source)
            assembled.extend(rows)
            found.append(
                {
                    "jobId": job_id,
                    "source": str(source.relative_to(ROOT)),
                    "cases": len(rows),
                    "accelerators": sorted({row.get("provenance", {}).get("accelerator", "unknown") for row in rows}),
                    "createdAt": sorted({row.get("createdAt", "") for row in rows})[:2],
                }
            )
        else:
            missing.append(job_id)

    write(OUTPUT, json.dumps(assembled, indent=2) + "\n")
    report = {
        "summary": {
            "export": str(OUTPUT.relative_to(ROOT)),
            "jobsExpected": len(expected_jobs),
            "jobsFound": len(found),
            "jobsMissing": len(missing),
            "results": len(assembled),
            "status": "partial" if missing else "complete",
        },
        "foundJobs": found,
        "missingJobs": missing,
    }
    write(REPORT, json.dumps(report, indent=2) + "\n")
    print(
        "assembled CVPR live Colab export from analysis:",
        f"{report['summary']['jobsFound']} jobs,",
        f"{report['summary']['results']} results,",
        f"missing {report['summary']['jobsMissing']}",
    )


if __name__ == "__main__":
    main()

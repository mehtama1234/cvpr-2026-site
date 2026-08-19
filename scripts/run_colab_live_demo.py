import argparse
import json
import re
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent

JOBS = {
    "open-vocab-grounding": {
        "worker": ROOT / "scripts/colab_live_open_vocab_grounding_demo.py",
        "gpus": ["T4"],
        "analysis": ROOT / "analysis/cvpr_live_open_vocab_grounding_colab_demo",
        "results": "cvpr_open_vocab_live_results.json",
    },
    "restoration-fidelity": {
        "worker": ROOT / "scripts/colab_live_restoration_fidelity_demo.py",
        "gpus": ["T4"],
        "analysis": ROOT / "analysis/cvpr_live_restoration_fidelity_colab_demo",
        "results": "cvpr_restoration_live_results.json",
    },
    "adversarial-provenance": {
        "worker": ROOT / "scripts/colab_live_adversarial_provenance_demo.py",
        "gpus": ["T4"],
        "analysis": ROOT / "analysis/cvpr_live_adversarial_provenance_colab_demo",
        "results": "cvpr_adversarial_live_results.json",
    },
    "temporal-rollout": {
        "worker": ROOT / "scripts/colab_live_temporal_rollout_demo.py",
        "gpus": ["L4", "T4", "A100"],
        "analysis": ROOT / "analysis/cvpr_live_temporal_rollout_colab_demo",
        "results": "cvpr_temporal_live_results.json",
    },
    "metric-geometry": {
        "worker": ROOT / "scripts/colab_live_metric_geometry_demo.py",
        "gpus": ["L4", "T4", "A100"],
        "analysis": ROOT / "analysis/cvpr_live_metric_geometry_colab_demo",
        "results": "cvpr_metric_geometry_live_results.json",
    },
    "gaussian-splatting": {
        "worker": ROOT / "scripts/colab_live_gaussian_splatting_demo.py",
        "gpus": ["L4", "T4", "A100"],
        "analysis": ROOT / "analysis/cvpr_live_gaussian_splatting_colab_demo",
        "results": "cvpr_gaussian_splatting_live_results.json",
    },
    "compute-serving": {
        "worker": ROOT / "scripts/colab_live_compute_serving_demo.py",
        "gpus": ["T4"],
        "analysis": ROOT / "analysis/cvpr_live_compute_serving_colab_demo",
        "results": "cvpr_compute_serving_live_results.json",
    },
    "constraint-generation": {
        "worker": ROOT / "scripts/colab_live_constraint_generation_demo.py",
        "gpus": ["L4", "T4", "A100"],
        "analysis": ROOT / "analysis/cvpr_live_constraint_generation_colab_demo",
        "results": "cvpr_constraint_generation_live_results.json",
    },
    "driving-safety": {
        "worker": ROOT / "scripts/colab_live_driving_safety_demo.py",
        "gpus": ["L4", "T4", "A100"],
        "analysis": ROOT / "analysis/cvpr_live_driving_safety_colab_demo",
        "results": "cvpr_driving_safety_live_results.json",
    },
    "clinical-shift": {
        "worker": ROOT / "scripts/colab_live_second_wave_demo.py",
        "args": ["--job", "clinical-shift", "--emit-payload"],
        "gpus": ["T4"],
        "analysis": ROOT / "analysis/cvpr_live_clinical_shift_colab_demo",
        "results": "cvpr_clinical_shift_live_results.json",
    },
    "depth-normal-consistency": {
        "worker": ROOT / "scripts/colab_live_second_wave_demo.py",
        "args": ["--job", "depth-normal-consistency", "--emit-payload"],
        "gpus": ["T4"],
        "analysis": ROOT / "analysis/cvpr_live_depth_normal_colab_demo",
        "results": "cvpr_depth_normal_live_results.json",
    },
    "corruption-robustness": {
        "worker": ROOT / "scripts/colab_live_second_wave_demo.py",
        "args": ["--job", "corruption-robustness", "--emit-payload"],
        "gpus": ["T4"],
        "analysis": ROOT / "analysis/cvpr_live_corruption_robustness_colab_demo",
        "results": "cvpr_corruption_robustness_live_results.json",
    },
    "prompt-segmentation-robustness": {
        "worker": ROOT / "scripts/colab_live_second_wave_demo.py",
        "args": ["--job", "prompt-segmentation-robustness", "--emit-payload"],
        "gpus": ["T4"],
        "analysis": ROOT / "analysis/cvpr_live_prompt_segmentation_colab_demo",
        "results": "cvpr_prompt_segmentation_live_results.json",
    },
    "video-identity-tracking": {
        "worker": ROOT / "scripts/colab_live_second_wave_demo.py",
        "args": ["--job", "video-identity-tracking", "--emit-payload"],
        "gpus": ["T4"],
        "analysis": ROOT / "analysis/cvpr_live_video_tracking_colab_demo",
        "results": "cvpr_video_tracking_live_results.json",
    },
}


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def parse_args():
    parser = argparse.ArgumentParser(description="Launch a live CVPR Colab GPU demo and harvest its results.")
    parser.add_argument("job", choices=sorted(JOBS))
    parser.add_argument("--timeout", type=int, default=1800)
    return parser.parse_args()


def extract_payload(stdout_text: str):
    match = re.search(
        r"===CVPR_LIVE_JSON_BEGIN===\s*(\{.*\})\s*===CVPR_LIVE_JSON_END===",
        stdout_text,
        re.DOTALL,
    )
    if not match:
        raise RuntimeError("did not find live Colab JSON payload in stdout")
    return json.loads(match.group(1))


def main():
    args = parse_args()
    config = JOBS[args.job]
    analysis_dir = config["analysis"]
    stdout_path = analysis_dir / "colab_stdout.txt"
    stderr_path = analysis_dir / "colab_stderr.txt"
    attempted = []
    completed = None
    selected_gpu = None
    for gpu in config["gpus"]:
        command = [
            "colab",
            "run",
            "--gpu",
            gpu,
            "--timeout",
            str(args.timeout),
            str(config["worker"]),
        ]
        command.extend(config.get("args", []))
        completed = subprocess.run(command, text=True, capture_output=True, cwd=ROOT)
        attempted.append(
            {
                "gpu": gpu,
                "returncode": completed.returncode,
                "stderr": completed.stderr,
            }
        )
        if completed.returncode == 0:
            selected_gpu = gpu
            break
        if "Backend rejected accelerator" not in completed.stderr:
            break
    write(stdout_path, completed.stdout if completed else "")
    write(stderr_path, (completed.stderr if completed else "") + ("\n\n[fallback-attempts]\n" + json.dumps(attempted, indent=2) if attempted else ""))
    if completed is None or completed.returncode != 0:
        raise SystemExit(completed.returncode if completed else 1)

    payload = extract_payload(completed.stdout)
    results = payload["results"]
    summary = payload["summary"]
    results_path = analysis_dir / config["results"]
    registry_path = analysis_dir / "registry.json"

    write(results_path, json.dumps(results, indent=2) + "\n")
    registry = {
        "summary": {
            **summary,
            "requestedGpuOrder": config["gpus"],
            "launcherSelectedGpu": selected_gpu,
            "analysis": analysis_dir.name,
            "resultArtifact": str(results_path.relative_to(ROOT)),
            "stdoutArtifact": str(stdout_path.relative_to(ROOT)),
            "stderrArtifact": str(stderr_path.relative_to(ROOT)),
            "launcher": "python3 scripts/run_colab_live_demo.py",
            "worker": str(config["worker"].relative_to(ROOT)),
        },
        "results": results,
    }
    write(registry_path, json.dumps(registry, indent=2) + "\n")
    print(
        f"wrote {analysis_dir.name}:",
        f"{summary['results']} rows,",
        f"accelerator {summary['accelerator']},",
        f"status {summary['status']}",
    )


if __name__ == "__main__":
    main()

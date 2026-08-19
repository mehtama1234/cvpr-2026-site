"""Run the safety deployment demo family through the live Colab promotion path."""
import argparse
import json
import subprocess
import time
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_safety_deployment_flow"
DEFAULT_EXPORT = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json"
JOBS = ("clinical-shift", "driving-safety")


def run_step(label, command):
    started = time.time()
    completed = subprocess.run(command, cwd=ROOT, text=True, capture_output=True)
    duration = round(time.time() - started, 2)
    return {
        "label": label,
        "command": " ".join(command),
        "returncode": completed.returncode,
        "durationSeconds": duration,
        "stdout": completed.stdout,
        "stderr": completed.stderr,
    }


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def parse_args():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--launch-live", action="store_true", help="Launch the two live Colab jobs before assembling and promoting.")
    parser.add_argument("--export", default=str(DEFAULT_EXPORT), help="Live export JSON to stage and promote.")
    parser.add_argument("--skip-verify", action="store_true", help="Skip post-build verifier commands.")
    parser.add_argument("--require-full-stack", action="store_true", help="Fail the flow if the repo-wide full-stack validator is red.")
    return parser.parse_args()


def main():
    args = parse_args()
    export_path = Path(args.export)
    steps = []

    if args.launch_live:
        for job in JOBS:
            steps.append(run_step(f"launch-{job}", ["python3", "scripts/run_colab_live_demo.py", job]))
            if steps[-1]["returncode"] != 0:
                break

    if not steps or steps[-1]["returncode"] == 0:
        if export_path == DEFAULT_EXPORT:
            steps.append(run_step("assemble-live-export", ["python3", "scripts/build_cvpr_live_colab_export_from_analysis.py"]))

    if not steps or steps[-1]["returncode"] == 0:
        for job in JOBS:
            steps.append(
                run_step(
                    f"promote-{job}",
                    [
                        "python3",
                        "scripts/stage_cvpr_live_colab_export.py",
                        "--export",
                        str(export_path),
                        "--job",
                        job,
                        "--promote",
                    ],
                )
            )
            if steps[-1]["returncode"] != 0:
                break

    build_commands = (
        ("build-clinical-bench", ["python3", "scripts/build_cvpr_clinical_shift_bench.py"]),
        ("build-driving-bench", ["python3", "scripts/build_cvpr_driving_safety_bench.py"]),
        ("build-simulator", ["python3", "scripts/build_cvpr_safety_deployment_simulator.py"]),
        ("build-playbook", ["python3", "scripts/build_cvpr_clinical_safety_escalation_playbook.py"]),
    )
    if not steps or steps[-1]["returncode"] == 0:
        for label, command in build_commands:
            steps.append(run_step(label, command))
            if steps[-1]["returncode"] != 0:
                break

    verify_commands = (
        ("verify-clinical-bench", ["python3", "scripts/verify_cvpr_clinical_shift_bench.py"]),
        ("verify-driving-bench", ["python3", "scripts/verify_cvpr_driving_safety_bench.py"]),
        ("verify-simulator", ["python3", "scripts/verify_cvpr_safety_deployment_simulator.py"]),
        ("verify-playbook", ["python3", "scripts/verify_cvpr_clinical_safety_escalation_playbook.py"]),
        ("validate-full-stack", ["python3", "scripts/validate_cvpr_full_stack.py"]),
    )
    if not args.skip_verify and (not steps or steps[-1]["returncode"] == 0):
        for label, command in verify_commands:
            steps.append(run_step(label, command))
            if steps[-1]["returncode"] != 0:
                break

    family_failed_step = next(
        (
            step["label"]
            for step in steps
            if step["returncode"] != 0 and step["label"] != "validate-full-stack"
        ),
        None,
    )
    full_stack_step = next((step for step in steps if step["label"] == "validate-full-stack"), None)
    full_stack_ok = full_stack_step is None or full_stack_step["returncode"] == 0
    family_ok = family_failed_step is None
    success = family_ok and (full_stack_ok or not args.require_full_stack)
    summary = {
        "flow": "cvpr-safety-deployment-flow",
        "status": "ready" if success else "block",
        "familyStatus": "ready" if family_ok else "block",
        "fullStackStatus": "valid" if full_stack_ok else "invalid",
        "jobs": list(JOBS),
        "launchLive": args.launch_live,
        "requireFullStack": args.require_full_stack,
        "export": str(export_path.relative_to(ROOT) if export_path.is_absolute() and export_path.is_relative_to(ROOT) else export_path),
        "steps": len(steps),
        "successfulSteps": sum(1 for step in steps if step["returncode"] == 0),
        "failedStep": family_failed_step or (None if full_stack_ok or not args.require_full_stack else "validate-full-stack"),
        "runner": "python3 scripts/run_cvpr_safety_deployment_flow.py",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "steps": steps}, indent=2) + "\n")
    print(
        "ran CVPR safety deployment flow:",
        f"{summary['successfulSteps']}/{summary['steps']} steps,",
        f"status {summary['status']}",
    )
    raise SystemExit(0 if success else 1)


if __name__ == "__main__":
    main()

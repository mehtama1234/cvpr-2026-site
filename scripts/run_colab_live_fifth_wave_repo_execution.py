import argparse
import json
import re
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
WORKER = ROOT / "scripts/colab_live_fifth_wave_repo_execution_demo.py"
ANALYSIS = ROOT / "analysis/cvpr_live_repo_execution_wave5"
RESULTS = ANALYSIS / "cvpr_repo_execution_wave5_results.json"
STDOUT = ANALYSIS / "colab_stdout.txt"
STDERR = ANALYSIS / "colab_stderr.txt"
REGISTRY = ANALYSIS / "registry.json"


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def extract_payload(stdout_text):
    match = re.search(
        r"===CVPR_WAVE5_JSON_BEGIN===\s*(\{.*\})\s*===CVPR_WAVE5_JSON_END===",
        stdout_text,
        re.DOTALL,
    )
    if not match:
        raise RuntimeError("did not find wave-5 JSON payload in Colab stdout")
    return json.loads(match.group(1))


def parse_args():
    parser = argparse.ArgumentParser(description="Launch the wave-5 live repo execution worker on Colab.")
    parser.add_argument("--only", action="append", default=[], help="Specific caseId/jobId entries to run.")
    return parser.parse_args()


def main():
    args = parse_args()
    command = [
        "colab",
        "run",
        "--gpu",
        "T4",
        "--timeout",
        "1800",
        str(WORKER),
    ]
    for item in args.only:
        command.extend(["--only", item])
    completed = subprocess.run(command, text=True, capture_output=True, cwd=ROOT)
    write(STDOUT, completed.stdout)
    write(STDERR, completed.stderr)
    if completed.returncode != 0:
        raise SystemExit(completed.returncode)
    payload = extract_payload(completed.stdout)
    write(RESULTS, json.dumps(payload["results"], indent=2) + "\n")
    summary = payload["summary"]
    registry = {
        "summary": {
            **summary,
            "analysis": "cvpr_live_repo_execution_wave5",
            "resultArtifact": "analysis/cvpr_live_repo_execution_wave5/cvpr_repo_execution_wave5_results.json",
            "stdoutArtifact": "analysis/cvpr_live_repo_execution_wave5/colab_stdout.txt",
            "stderrArtifact": "analysis/cvpr_live_repo_execution_wave5/colab_stderr.txt",
            "launcher": "python3 scripts/run_colab_live_fifth_wave_repo_execution.py",
            "worker": "scripts/colab_live_fifth_wave_repo_execution_demo.py",
        },
        "results": payload["results"],
    }
    write(REGISTRY, json.dumps(registry, indent=2) + "\n")
    print(
        "wrote cvpr_live_repo_execution_wave5:",
        f"{summary['results']} rows,",
        f"{summary['successfulCommands']} successful commands,",
        f"accelerator {summary['accelerator']}",
    )


if __name__ == "__main__":
    main()

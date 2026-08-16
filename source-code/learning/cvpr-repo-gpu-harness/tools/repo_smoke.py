#!/usr/bin/env python3
import argparse
import json
import subprocess
import time
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("--repo", required=True)
parser.add_argument("--job", required=True)
args = parser.parse_args()
started = time.time()
repo = Path(args.repo)
commit = "unknown"
if repo.exists():
    result = subprocess.run(["git", "rev-parse", "HEAD"], cwd=repo, text=True, capture_output=True)
    if result.returncode == 0:
        commit = result.stdout.strip()
payload = {
    "jobId": args.job,
    "clone_status": "present" if repo.exists() else "missing",
    "commit_sha": commit,
    "environment": "google-colab-pro-plus",
    "import_scan": sorted([p.name for p in repo.glob("*.py")])[:12] if repo.exists() else [],
    "sample_artifact": f"{args.job}-smoke.json",
    "runtime_seconds": round(time.time() - started, 3),
}
print(json.dumps(payload, indent=2))

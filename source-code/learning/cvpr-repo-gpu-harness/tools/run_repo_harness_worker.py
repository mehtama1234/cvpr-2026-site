#!/usr/bin/env python3
import argparse
import json
import os
import subprocess
import time
from pathlib import Path


def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8"))


def accelerator():
    try:
        out = subprocess.run(["nvidia-smi", "--query-gpu=name", "--format=csv,noheader"], text=True, capture_output=True, timeout=10)
        if out.returncode == 0 and out.stdout.strip():
            return out.stdout.strip().splitlines()[0]
    except Exception:
        pass
    return os.environ.get("COLAB_GPU", "unknown")


def clone_repo(job, repo_dir, dry_run):
    if dry_run:
        repo_dir.mkdir(parents=True, exist_ok=True)
        return "dry-run", "replace-with-live-commit"
    if repo_dir.exists() and (repo_dir / ".git").exists():
        status = "present"
    else:
        repo_dir.parent.mkdir(parents=True, exist_ok=True)
        result = subprocess.run(["git", "clone", "--depth", "1", job["repo"], str(repo_dir)], text=True, capture_output=True, timeout=900)
        status = "cloned" if result.returncode == 0 else "clone-failed"
    commit = "unknown"
    if (repo_dir / ".git").exists():
        rev = subprocess.run(["git", "rev-parse", "HEAD"], cwd=repo_dir, text=True, capture_output=True, timeout=30)
        if rev.returncode == 0:
            commit = rev.stdout.strip()
    return status, commit


def smoke(job, repo_dir, dry_run):
    if dry_run:
        return {"clone_status": "dry-run", "import_scan": [], "runtime_seconds": 0.0}, True
    command = ["python3", "source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py", "--repo", str(repo_dir), "--job", job["jobId"]]
    result = subprocess.run(command, text=True, capture_output=True, timeout=180, cwd=Path.cwd())
    ok = result.returncode == 0
    try:
        payload = json.loads(result.stdout)
    except Exception:
        payload = {"stdout": result.stdout[-2000:], "stderr": result.stderr[-2000:], "runtime_seconds": 0.0}
    return payload, ok


def run_job(job, repo_root, dry_run):
    started = time.time()
    repo_dir = repo_root / job["repo"].replace("https://", "").replace("http://", "").replace("/", "-")
    clone_status, commit = clone_repo(job, repo_dir, dry_run)
    smoke_payload, smoke_ok = smoke(job, repo_dir, dry_run)
    readiness = max(0, min(100, int(job.get("readiness", 50))))
    if clone_status == "clone-failed":
        readiness = min(readiness, 25)
    if not smoke_ok:
        readiness = min(readiness, 35)
    artifact = job.get("evidenceArtifact") or f"source-code/learning/cvpr-repo-gpu-harness/_results/{job['jobId']}.json"
    return {
        "jobId": job["jobId"],
        "mode": "live-colab",
        "repo": job["repo"],
        "commitSha": commit,
        "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "environment": {
            "python": os.sys.version.split()[0],
            "torch": "not-imported",
            "cuda": accelerator(),
        },
        "metrics": {
            "readiness": readiness,
            "smokePassed": bool(smoke_ok),
            "runtimeSeconds": round(time.time() - started, 3),
            "filesScanned": len(smoke_payload.get("import_scan", [])),
        },
        "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": accelerator(),
            "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
            "source": "repo-harness-worker",
            "cloneStatus": clone_status,
        },
        "artifacts": {
            "smokeJson": artifact,
            "log": artifact.replace(".json", ".log"),
            "repoSnapshot": artifact.replace(".json", ".snapshot.json"),
        },
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", default="source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json")
    parser.add_argument("--output", default="source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json")
    parser.add_argument("--repo-root", default="repos")
    parser.add_argument("--start", type=int, default=0)
    parser.add_argument("--limit", type=int, default=5)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    manifest = load_json(args.manifest)
    jobs = manifest["jobs"][args.start: args.start + args.limit]
    results = [run_job(job, Path(args.repo_root), args.dry_run) for job in jobs]
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(results, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {output}: {len(results)} repo harness results")


if __name__ == "__main__":
    main()

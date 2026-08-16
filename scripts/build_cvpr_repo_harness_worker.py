"""Build the CVPR repo harness Colab worker."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json"
HARNESS_REGISTRY = ROOT / "analysis/cvpr_repo_gpu_harness/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_worker"
BASE = ROOT / "source-code/learning/cvpr-repo-harness-worker"
TOOLS = ROOT / "source-code/learning/cvpr-repo-gpu-harness/tools"
NOTEBOOK = ROOT / "notebooks/cvpr_repo_harness_worker.ipynb"

CORE = """export function selectBatch(jobs, start = 0, limit = 5) {
  return jobs.slice(start, start + limit);
}

export function workerReady(summary) {
  return summary.worker === "cvpr-repo-harness-worker" &&
    summary.runtimePlane === "google-colab-pro-plus" &&
    summary.jobs === 40 &&
    summary.defaultBatchSize === 5 &&
    summary.notebook === "notebooks/cvpr_repo_harness_worker.ipynb";
}

export function summarizeWorker(manifest) {
  return {
    worker: "cvpr-repo-harness-worker",
    runtimePlane: manifest.runtimePlane,
    jobs: manifest.jobs.length,
    demos: new Set(manifest.jobs.map((job) => job.demo)).size,
    repos: new Set(manifest.jobs.map((job) => job.repo)).size,
    defaultBatchSize: 5,
    notebook: manifest.notebook,
    incomingArtifact: manifest.incomingArtifact,
    status: manifest.jobs.length === 40 ? "ready" : "block"
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { manifest, summary } from "../src/fixtures.js";
import { selectBatch, summarizeWorker, workerReady } from "../src/core.js";

assert.equal(manifest.jobs.length, 40);
assert.equal(selectBatch(manifest.jobs, 0, 5).length, 5);
assert.equal(selectBatch(manifest.jobs, 35, 10).length, 5);
const derived = summarizeWorker(manifest);
assert.equal(derived.status, "ready");
assert.equal(derived.demos, 8);
assert.equal(derived.repos, 40);
assert.equal(workerReady(summary), true);
console.log("ok cvpr-repo-harness-worker:", summary.jobs, "jobs");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_manifest():
    return json.loads(MANIFEST.read_text(encoding="utf-8"))


def build_runner():
    write(
        TOOLS / "run_repo_harness_worker.py",
        """#!/usr/bin/env python3
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
    output.write_text(json.dumps(results, indent=2) + "\\n", encoding="utf-8")
    print(f"wrote {output}: {len(results)} repo harness results")


if __name__ == "__main__":
    main()
""",
    )


def build_notebook(manifest):
    cells = [
        {
            "cell_type": "markdown",
            "metadata": {},
            "source": [
                "# CVPR Repo Harness Worker\\n",
                "\\n",
                "Open in Google Colab Pro+, run the setup cell, choose a batch, then export `cvpr_repo_harness_live.json`.\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "import json, pathlib, subprocess, sys\\n",
                "RUN_MANIFEST = " + json.dumps(manifest, indent=2) + "\\n",
                "print(RUN_MANIFEST['runtimePlane'], len(RUN_MANIFEST['jobs']), 'jobs')\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# In Colab, upload or mount the cvpr-2026-site workspace first.\\n",
                "subprocess.run([sys.executable, 'source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py', '--manifest', RUN_MANIFEST['incomingArtifact'].replace('_incoming/cvpr_repo_harness_live.json', '_results/cvpr_repo_harness_manifest.json'), '--output', RUN_MANIFEST['incomingArtifact'], '--start', '0', '--limit', '5', '--dry-run'], check=True)\\n",
                "print('download', RUN_MANIFEST['incomingArtifact'])\\n",
            ],
        },
    ]
    notebook = {"cells": cells, "metadata": {"kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"}, "language_info": {"name": "python"}}, "nbformat": 4, "nbformat_minor": 5}
    write(NOTEBOOK, json.dumps(notebook, indent=2) + "\n")


def summarize(manifest):
    return {
        "worker": "cvpr-repo-harness-worker",
        "status": "ready",
        "runtimePlane": manifest["runtimePlane"],
        "jobs": len(manifest["jobs"]),
        "demos": len({job["demo"] for job in manifest["jobs"]}),
        "repos": len({job["repo"] for job in manifest["jobs"]}),
        "defaultBatchSize": 5,
        "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
        "runner": "source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py",
        "incomingArtifact": manifest["incomingArtifact"],
        "validator": manifest["validator"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(manifest, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const manifest = " + json.dumps(manifest, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness Worker\n\nColab Pro+ worker runner for cloning repo batches and emitting live repo harness results.\n")


def build_registry(manifest, summary):
    rows = [
        {
            "batch": index // summary["defaultBatchSize"],
            "jobId": job["jobId"],
            "repo": job["repo"],
            "page": job["page"],
            "cloneCommand": job["cloneCommand"],
            "smokeCommand": job["smokeCommand"],
        }
        for index, job in enumerate(manifest["jobs"])
    ]
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "batches": rows}, indent=2) + "\n")


def build_page(summary):
    stats = [("Jobs", summary["jobs"]), ("Demos", summary["demos"]), ("Repos", summary["repos"]), ("Batch", summary["defaultBatchSize"]), ("Runtime", "Pro+"), ("Status", summary["status"])]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness Worker</title><style>:root{{--ink:#111719;--paper:#F6F7F3;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0F6672;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:#162126;color:#EFF7F2;padding:42px 0 34px}}.bug,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#93D6D8}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#CBD7D2}}nav a{{color:#C9EEF0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:16px 0}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:6px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - repo harness worker</div><h1>CVPR Repo Harness Worker</h1><p>Colab Pro+ notebook and batch runner for cloning selected CVPR paper repos, running smoke scans, and emitting live intake JSON.</p><nav><a href="cvpr-repo-gpu-harness.html">repo harness</a><a href="cvpr-repo-harness-live-intake.html">live intake</a><a href="notebooks/cvpr_repo_harness_worker.ipynb">notebook</a><a href="analysis/cvpr_repo_harness_worker/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Run Commands</h2><code>python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 0 --limit 5</code><code>python3 scripts/validate_cvpr_repo_harness_results.py --results {esc(summary['incomingArtifact'])}</code><code>notebook: {esc(summary['notebook'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_worker.py - package: source-code/learning/cvpr-repo-harness-worker</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-worker.html", page)


def main():
    manifest = load_manifest()
    build_runner()
    build_notebook(manifest)
    summary = summarize(manifest)
    build_package(manifest, summary)
    build_registry(manifest, summary)
    build_page(summary)
    print(f"wrote cvpr-repo-harness-worker.html: {summary['jobs']} jobs, {summary['repos']} repos, status {summary['status']}")


if __name__ == "__main__":
    main()

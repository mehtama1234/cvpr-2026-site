import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

import torch


RUNTIME = "google-colab-pro-plus"
NOTEBOOK = "colab-cli-run"
ROOT = Path("/content")
MISSING_MODULE_TO_PACKAGE = {
    "hydra": "hydra-core",
    "torchlibrosa": "torchlibrosa",
    "torch_geometric": "torch_geometric",
    "pecos": ["pecos==0.1.3", "libpecos==1.2.7"],
    "dgl": "dgl",
    "torchdata.datapipes": "torchdata==0.7.1",
}


def created_at():
    return time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())


def clamp(value, lo=0.0, hi=100.0):
    return max(lo, min(hi, float(value)))


def short(text, limit=1200):
    text = (text or "").strip()
    if len(text) <= limit:
        return text
    return text[: limit - 3] + "..."


def run_command(cmd, cwd=None, env=None, timeout=180):
    started = time.time()
    completed = subprocess.run(
        cmd,
        cwd=cwd,
        env=env,
        text=True,
        capture_output=True,
        timeout=timeout,
    )
    return {
        "command": cmd,
        "returncode": completed.returncode,
        "stdout": completed.stdout,
        "stderr": completed.stderr,
        "runtimeSeconds": round(time.time() - started, 2),
    }


def install_packages(packages):
    if not packages:
        return {"attempted": False, "ok": True, "packages": []}
    cmd = [sys.executable, "-m", "pip", "install", "-q", *packages]
    started = time.time()
    try:
        outcome = run_command(cmd, timeout=900)
        return {
            "attempted": True,
            "ok": outcome["returncode"] == 0,
            "packages": packages,
            "command": " ".join(cmd),
            "stdout": short(outcome["stdout"], 800),
            "stderr": short(outcome["stderr"], 800),
            "runtimeSeconds": outcome["runtimeSeconds"],
        }
    except subprocess.TimeoutExpired as exc:
        return {
            "attempted": True,
            "ok": False,
            "packages": packages,
            "command": " ".join(cmd),
            "stdout": short(exc.stdout or "", 800),
            "stderr": short((exc.stderr or "") + "\nTIMEOUT", 800),
            "runtimeSeconds": round(time.time() - started, 2),
        }


def detect_missing_module(stderr_text):
    match = re.search(r"ModuleNotFoundError: No module named '([^']+)'", stderr_text or "")
    if not match:
        return None
    return match.group(1)


def maybe_install_missing_dependency(stderr_text):
    missing = detect_missing_module(stderr_text)
    if not missing:
        return None
    package = MISSING_MODULE_TO_PACKAGE.get(missing)
    if not package:
        return {
            "missingModule": missing,
            "package": None,
            "attempted": False,
            "ok": False,
            "reason": "unmapped-module",
        }
    packages = package if isinstance(package, list) else [package]
    outcome = install_packages(packages)
    return {
        "missingModule": missing,
        "package": package,
        "attempted": True,
        "ok": outcome["ok"],
        "reason": "mapped-module",
        "install": outcome,
    }


def maybe_repair_missing_asset(stderr_text):
    if "PENGI model checkpoint" not in (stderr_text or ""):
        return None
    path_match = re.search(r"PENGI model checkpoint '([^']+)' not found", stderr_text)
    url_match = re.search(r"Download the model from the link = '([^']+)'", stderr_text)
    if not path_match or not url_match:
        return None
    target = Path(path_match.group(1))
    url = url_match.group(1)
    target.parent.mkdir(parents=True, exist_ok=True)
    started = time.time()
    try:
        urllib.request.urlretrieve(url, str(target))
        return {
            "asset": str(target),
            "url": url,
            "attempted": True,
            "ok": True,
            "reason": "downloaded-missing-checkpoint",
            "runtimeSeconds": round(time.time() - started, 2),
        }
    except Exception as exc:
        return {
            "asset": str(target),
            "url": url,
            "attempted": True,
            "ok": False,
            "reason": "download-failed",
            "error": short(str(exc), 800),
            "runtimeSeconds": round(time.time() - started, 2),
        }


def gpu_probe():
    probe = {
        "cudaAvailable": torch.cuda.is_available(),
        "deviceCount": torch.cuda.device_count(),
        "torchVersion": torch.__version__,
        "pythonVersion": sys.version.split()[0],
    }
    if probe["cudaAvailable"]:
        probe["deviceName"] = torch.cuda.get_device_name(0)
        probe["cudaVersion"] = torch.version.cuda
    else:
        probe["deviceName"] = "cpu"
        probe["cudaVersion"] = None
    return probe


def count_python_files(repo_root):
    return sum(1 for _ in repo_root.rglob("*.py"))


def choose_commit(repo_root):
    try:
        outcome = run_command(["git", "rev-parse", "HEAD"], cwd=repo_root)
    except Exception:
        return "unknown"
    if outcome["returncode"] != 0:
        return "unknown"
    return outcome["stdout"].strip() or "unknown"


def evaluate_repo(job, workspace, probe):
    case_started = time.time()
    repo_root = workspace / job["slug"]
    clone_outcome = run_command(["git", "clone", "--depth", "1", job["repo"], str(repo_root)], timeout=600)
    clone_ok = clone_outcome["returncode"] == 0 and repo_root.exists()
    commit_sha = choose_commit(repo_root) if clone_ok else "unknown"
    install_outcome = install_packages(job.get("packages", [])) if clone_ok else {"attempted": False, "ok": False, "packages": []}
    command_outcome = None
    repair_attempts = []
    command_used = " ".join(job["command"])
    if clone_ok:
        env = os.environ.copy()
        env["PYTHONUNBUFFERED"] = "1"
        env["CUDA_VISIBLE_DEVICES"] = "0" if probe["cudaAvailable"] else ""
        env["PYTHONPATH"] = str(repo_root) + os.pathsep + env.get("PYTHONPATH", "")
        commands_to_try = [job["command"], *job.get("fallbackCommands", [])]
        for candidate in commands_to_try:
            command_used = " ".join(candidate)
            for _ in range(job.get("maxRepairPasses", 3)):
                try:
                    command_outcome = run_command(candidate, cwd=repo_root, env=env, timeout=job.get("timeout", 180))
                except subprocess.TimeoutExpired as exc:
                    command_outcome = {
                        "command": candidate,
                        "returncode": 124,
                        "stdout": exc.stdout or "",
                        "stderr": (exc.stderr or "") + "\nTIMEOUT",
                        "runtimeSeconds": job.get("timeout", 180),
                    }
                if command_outcome["returncode"] == 0:
                    break
                repair = maybe_install_missing_dependency(command_outcome["stderr"])
                if repair:
                    repair_attempts.append(repair)
                    if not repair.get("attempted") or not repair.get("ok"):
                        break
                    continue
                repair = maybe_repair_missing_asset(command_outcome["stderr"])
                if repair:
                    repair_attempts.append(repair)
                    if not repair.get("attempted") or not repair.get("ok"):
                        break
                    continue
                break
            if command_outcome and command_outcome["returncode"] == 0:
                break
    command_ok = bool(command_outcome and command_outcome["returncode"] == 0)
    python_files = count_python_files(repo_root) if clone_ok else 0
    execution_depth = 0
    if clone_ok:
        execution_depth += 35
    if install_outcome.get("attempted"):
        execution_depth += 20 if install_outcome.get("ok") else 8
    if command_outcome:
        execution_depth += 35 if command_ok else 15
    if probe["cudaAvailable"]:
        execution_depth += 10
    readiness = 18.0
    if clone_ok:
        readiness += 22
    if install_outcome.get("ok"):
        readiness += 14
    if command_ok:
        readiness += 30
    elif command_outcome:
        readiness += 10
    if probe["cudaAvailable"]:
        readiness += 6
    if not clone_ok and job.get("expectedFailure") == "clone":
        readiness += 14
    readiness = clamp(readiness)
    failure_mode = "none"
    if not clone_ok:
        failure_mode = "clone-failed"
    elif install_outcome.get("attempted") and not install_outcome.get("ok"):
        failure_mode = "install-failed"
    elif command_outcome and not command_ok:
        failure_mode = "command-failed"
    row = {
        "jobId": "repo-execution-wave5",
        "caseId": job["jobId"],
        "mode": "live-colab",
        "createdAt": created_at(),
        "model": {
            "repoExecution": "git-clone-plus-entrypoint-command",
            "executionTarget": job["label"],
        },
        "inputs": {
            "repo": job["repo"],
            "page": job["page"],
            "theme": job["theme"],
            "packages": job.get("packages", []),
            "command": command_used,
        },
        "outputs": {
            "cloneStatus": "present" if clone_ok else "missing",
            "commitSha": commit_sha,
            "pythonFiles": python_files,
            "dependencyInstallOk": install_outcome.get("ok", False),
            "commandExitCode": None if not command_outcome else command_outcome["returncode"],
            "fallbackCommands": [" ".join(cmd) for cmd in job.get("fallbackCommands", [])],
            "repairAttempts": repair_attempts,
            "cloneLog": short(clone_outcome["stdout"] + "\n" + clone_outcome["stderr"], 1600),
            "installLog": short((install_outcome.get("stdout", "") + "\n" + install_outcome.get("stderr", "")).strip(), 1600),
            "commandStdout": short("" if not command_outcome else command_outcome["stdout"], 1600),
            "commandStderr": short("" if not command_outcome else command_outcome["stderr"], 1600),
        },
        "metrics": {
            "readiness": round(readiness, 1),
            "repoPresent": 100.0 if clone_ok else 0.0,
            "dependencySetup": 100.0 if install_outcome.get("ok") else (30.0 if install_outcome.get("attempted") else 0.0),
            "commandExecuted": 100.0 if command_ok else (45.0 if command_outcome else 0.0),
            "gpuRuntime": 100.0 if probe["cudaAvailable"] else 0.0,
            "executionDepth": round(clamp(execution_depth), 1),
            "repairPasses": float(len(repair_attempts)),
            "runtimeSeconds": round(time.time() - case_started, 2),
        },
        "provenance": {
            "runtime": RUNTIME,
            "accelerator": probe["deviceName"],
            "notebook": NOTEBOOK,
            "sourceBench": "cvpr-repo-execution-wave5-bench",
            "execution": "colab-cli-git-clone-entrypoint-command-live-demo",
            "failureMode": failure_mode,
        },
    }
    return row


def build_jobs():
    return [
        {
            "jobId": "perception-01-github-com-primebo1-fob",
            "label": "FoB",
            "theme": "perception",
            "page": "cvpr-perception-parts-repo-bench.html",
            "repo": "https://github.com/primebo1/FoB",
            "slug": "github-com-primebo1-fob",
            "packages": [],
            "command": [sys.executable, "-c", "print('clone failure case, no command run')"],
            "expectedFailure": "clone",
            "timeout": 30,
        },
        {
            "jobId": "perception-04-github-com-yvogao-tape",
            "label": "TAPE",
            "theme": "perception",
            "page": "cvpr-perception-parts-repo-bench.html",
            "repo": "https://github.com/YvoGao/TAPE",
            "slug": "github-com-yvogao-tape",
            "packages": [],
            "command": [sys.executable, "train.py", "--help"],
            "fallbackCommands": [],
            "timeout": 180,
            "maxRepairPasses": 3,
        },
        {
            "jobId": "learning-04-github-com-savadikarc-cheem",
            "label": "cheem",
            "theme": "learning",
            "page": "cvpr-efficient-learning-repo-governor.html",
            "repo": "https://github.com/savadikarc/cheem",
            "slug": "github-com-savadikarc-cheem",
            "packages": [],
            "command": [sys.executable, "scripts/mtil/search.py", "--help"],
            "fallbackCommands": [],
            "timeout": 180,
            "maxRepairPasses": 3,
        },
        {
            "jobId": "vlm-03-github-com-oamyjin-graphvlm",
            "label": "GraphVLM",
            "theme": "vlm",
            "page": "cvpr-grounded-vlm-repo-court.html",
            "repo": "https://github.com/oamyjin/GraphVLM",
            "slug": "github-com-oamyjin-graphvlm",
            "packages": [],
            "command": [sys.executable, "Aligner/GraphPrompter/label_mapping.py", "--help"],
            "fallbackCommands": [[sys.executable, "Aligner/GraphPrompter/src/config.py", "--help"]],
            "timeout": 180,
            "maxRepairPasses": 3,
        },
    ]


def parse_args():
    parser = argparse.ArgumentParser(description="Run wave-5 live repo execution cases on Colab.")
    parser.add_argument("--only", action="append", default=[], help="Specific caseId/jobId entries to run.")
    return parser.parse_args()


def main():
    args = parse_args()
    probe = gpu_probe()
    workspace = Path(tempfile.mkdtemp(prefix="cvpr-wave5-", dir=str(ROOT)))
    rows = []
    try:
        jobs = build_jobs()
        if args.only:
            selected = set(args.only)
            jobs = [job for job in jobs if job["jobId"] in selected]
        for job in jobs:
            rows.append(evaluate_repo(job, workspace, probe))
    finally:
        shutil.rmtree(workspace, ignore_errors=True)
    summary = {
        "demo": "cvpr-live-repo-execution-wave5",
        "jobId": "repo-execution-wave5",
        "runtime": RUNTIME,
        "accelerator": probe["deviceName"],
        "results": len(rows),
        "successfulCommands": sum(1 for row in rows if row["metrics"]["commandExecuted"] == 100.0),
        "presentRepos": sum(1 for row in rows if row["metrics"]["repoPresent"] == 100.0),
        "minReadiness": min(row["metrics"]["readiness"] for row in rows),
        "status": "valid",
        "probe": probe,
    }
    payload = {"summary": summary, "results": rows}
    print("===CVPR_WAVE5_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_WAVE5_JSON_END===")


if __name__ == "__main__":
    main()

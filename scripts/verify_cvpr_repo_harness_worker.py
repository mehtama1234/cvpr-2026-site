"""Verify the CVPR repo harness worker."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_harness_worker/registry.json"
NOTEBOOK = ROOT / "notebooks/cvpr_repo_harness_worker.ipynb"
RUNNER = ROOT / "source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-worker"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["worker"] == "cvpr-repo-harness-worker"
    assert summary["status"] == "ready"
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["jobs"] == 40
    assert summary["demos"] == 8
    assert summary["repos"] == 40
    assert summary["defaultBatchSize"] == 5
    assert summary["notebook"] == "notebooks/cvpr_repo_harness_worker.ipynb"
    assert summary["runner"] == "source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py"
    assert summary["incomingArtifact"] == "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(data["batches"]) == 40
    assert len({row["batch"] for row in data["batches"]}) == 8
    assert all(row["cloneCommand"].startswith("git clone --depth 1 http") for row in data["batches"])
    assert all("repo_smoke.py" in row["smokeCommand"] for row in data["batches"])
    notebook = json.loads(NOTEBOOK.read_text(encoding="utf-8"))
    assert notebook["nbformat"] == 4
    source = "\n".join("".join(cell.get("source", [])) for cell in notebook["cells"])
    for token in (
        "CVPR Repo Harness Worker",
        "RUN_MANIFEST",
        "google-colab-pro-plus",
        "run_repo_harness_worker.py",
        "cvpr_repo_harness_live.json",
    ):
        assert token in source
    runner = RUNNER.read_text(encoding="utf-8")
    for token in (
        "git",
        "clone",
        "repo_smoke.py",
        "live-colab",
        "google-colab-pro-plus",
        "nvidia-smi",
    ):
        assert token in runner
    page = (ROOT / "cvpr-repo-harness-worker.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Repo Harness Worker",
        "notebooks/cvpr_repo_harness_worker.ipynb",
        "run_repo_harness_worker.py",
        "cvpr-repo-harness-live-intake.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR repo harness worker: {summary['jobs']} jobs, {summary['repos']} repos")


if __name__ == "__main__":
    main()

"""Verify the CVPR repo harness first-batch receipt."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_harness_first_batch_receipt/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-first-batch-receipt"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["firstBatch"]
    assert summary["receipt"] == "cvpr-repo-harness-first-batch-receipt"
    assert summary["status"] == "ready"
    assert summary["batchStart"] == 0
    assert summary["batchLimit"] == 5
    assert summary["batchJobs"] == 5
    assert summary["theme"] == "frontier"
    assert summary["repos"] == 5
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["worker"] == "cvpr-repo-harness-worker"
    assert summary["notebook"] == "notebooks/cvpr_repo_harness_worker.ipynb"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert "--start 0 --limit 5" in summary["runCommand"]
    assert "--dry-run" in summary["dryRunCommand"]
    assert "validate_cvpr_repo_harness_results.py" in summary["validationCommand"]
    assert len(rows) == 5
    assert {row["theme"] for row in rows} == {"frontier"}
    assert all(row["repo"].startswith("http") for row in rows)
    assert all(row["cloneCommand"].startswith("git clone --depth 1 http") for row in rows)
    assert all("repo_smoke.py" in row["smokeCommand"] for row in rows)
    page = (ROOT / "cvpr-repo-harness-first-batch-receipt.html").read_text(encoding="utf-8")
    for token in (
        "Repo Harness First Batch Receipt",
        "frontier sensor",
        "run_repo_harness_worker.py",
        "--start 0 --limit 5",
        "validate_cvpr_repo_harness_results.py",
        "cvpr-repo-harness-worker.html",
        "cvpr-repo-harness-live-intake.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR repo harness first batch receipt: {summary['batchJobs']} jobs")


if __name__ == "__main__":
    main()

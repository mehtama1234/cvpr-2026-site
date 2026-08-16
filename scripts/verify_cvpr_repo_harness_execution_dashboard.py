"""Verify the CVPR repo harness execution dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_harness_execution_dashboard/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-execution-dashboard"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["executionRows"]
    assert summary["dashboard"] == "cvpr-repo-harness-execution-dashboard"
    assert summary["status"] == "ready"
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["jobs"] == 40
    assert summary["repos"] == 40
    assert summary["waves"] == 8
    assert summary["readyWaves"] == 8
    assert summary["queued"] == 7
    assert summary["receiptReady"] == 1
    assert summary["intakeStatus"] == "valid"
    assert summary["intakeIssues"] == 0
    assert summary["handoffStatus"] == "ready"
    assert summary["workerStatus"] == "ready"
    assert summary["zipPath"] == "analysis/cvpr_repo_harness_handoff_package/cvpr_repo_harness_handoff_package.zip"
    assert summary["notebook"] == "notebooks/cvpr_repo_harness_worker.ipynb"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 8
    assert rows[0]["state"] == "receipt-ready"
    assert all(row["state"] == "queued" for row in rows[1:])
    assert [row["theme"] for row in rows] == ["frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"]
    assert all(row["jobs"] == 5 for row in rows)
    assert all(row["repos"] == 5 for row in rows)
    page = (ROOT / "cvpr-repo-harness-execution-dashboard.html").read_text(encoding="utf-8")
    for token in (
        "Repo Harness Execution Dashboard",
        "Promotion State",
        "receipt-ready",
        "queued",
        "cvpr-repo-harness-handoff-package.html",
        "cvpr-repo-harness-wave-planner.html",
        "cvpr-repo-harness-live-intake.html",
        "--start 35 --limit 5",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR repo harness execution dashboard: {summary['waves']} waves, {summary['jobs']} jobs")


if __name__ == "__main__":
    main()

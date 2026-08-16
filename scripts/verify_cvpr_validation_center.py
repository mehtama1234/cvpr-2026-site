"""Verify the CVPR validation center dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_validation_center/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["dashboard"] == "cvpr-validation-center"
    assert summary["fullStackStatus"] == "valid"
    assert summary["steps"] >= 41
    assert summary["packageTests"] >= 26
    assert summary["workerJobs"] == 10
    assert summary["promotedRunners"] == 10
    assert summary["cachedResults"] == 40
    assert summary["importIssues"] == 0
    assert summary["promotionDeltaStatus"] == "release"
    assert summary["promotionRegressions"] == 0
    assert summary["maxReadinessDrop"] == 0
    assert summary["validImportJobs"] == 10
    assert summary["implementedBenches"] == 11
    assert summary["benchCases"] == 44
    assert summary["releaseGate"] is True
    assert summary["gateStatus"] == "release"
    assert len(data["slowest"]) == 5
    assert len(data["runnerCoverage"]) == 10
    page = (ROOT / "cvpr-validation-center.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Validation Center",
        "Operator Gate",
        "promoted runners",
        "promotion delta",
        "Full Stack Gate",
        "validate_cvpr_full_stack.py",
        "validate_cvpr_colab_results.py",
        "Slowest Validation Steps",
        "cvpr-colab-gpu-worker.html",
        "cvpr-colab-promotion-delta.html",
        "cvpr-colab-release-bundle.html",
        "cvpr-colab-run-receipt.html",
        "cvpr-theme-release-matrix.html",
        "cvpr-remediation-board.html",
        "cvpr-remediation-sprint-plan.html",
        "cvpr-colab-operations-dashboard.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-validation-center/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-validation-center/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-validation-center/tests/core.test.js").exists()
    print(
        f"verified CVPR validation center: {summary['steps']} steps, "
        f"{summary['packageTests']} package tests"
    )


if __name__ == "__main__":
    main()

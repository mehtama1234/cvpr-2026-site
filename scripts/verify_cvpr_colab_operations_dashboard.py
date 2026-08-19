"""Verify the CVPR Colab operations dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_colab_operations_dashboard/registry.json"
PAGE = ROOT / "cvpr-colab-operations-dashboard.html"
PACKAGE = ROOT / "source-code/learning/cvpr-colab-operations-dashboard"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["dashboard"] == "cvpr-colab-operations-dashboard"
    assert summary["status"] == "ready"
    assert summary["jobs"] > 0
    assert summary["runners"] > 0
    assert summary["cachedResults"] > 0
    assert summary["liveIntakeResults"] > 0
    assert summary["promotionResults"] > 0
    assert summary["deltaStatus"] == "release"
    assert summary["deltaRegressions"] == 0
    assert summary["maxReadinessDrop"] == 0
    assert summary["importIssues"] == 0
    assert summary["releaseStatus"] == "release"
    assert summary["ledgerStatus"] == "release"
    assert summary["receiptStatus"] == "ready"
    assert summary["receiptArtifacts"] == 7
    assert summary["themeMatrixStatus"] == "release"
    assert summary["coveredThemes"] == 8
    assert summary["remediationStatus"] == "ready"
    assert summary["blockTasks"] == summary["sourceBlockTasks"]
    assert summary["sprintPlanStatus"] == "ready"
    assert summary["sprintTasks"] == summary["blockTasks"]
    assert summary["validationGate"] == "release"
    assert summary["fullStackStatus"] == "valid"
    assert summary["notebook"] == "notebooks/cvpr_gpu_worker.ipynb"
    assert summary["liveExportArtifact"] == "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json"
    assert summary["intakeGate"] == "scripts/stage_cvpr_live_colab_export.py"
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Operations Dashboard",
        "Run Path",
        "Operator Commands",
        "cvpr-colab-handoff-package.html",
        "cvpr-colab-gpu-worker.html",
        "cvpr-colab-live-intake.html",
        "cvpr-colab-promotion-delta.html",
        "cvpr-colab-evidence-ledger.html",
        "cvpr-colab-run-receipt.html",
        "cvpr-theme-release-matrix.html",
        "cvpr-remediation-board.html",
        "cvpr-remediation-sprint-plan.html",
        "cvpr-colab-release-bundle.html",
        "cvpr-validation-center.html",
        "stage_cvpr_live_colab_export.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR Colab operations dashboard: {summary['jobs']} jobs, {summary['steps']} steps")


if __name__ == "__main__":
    main()

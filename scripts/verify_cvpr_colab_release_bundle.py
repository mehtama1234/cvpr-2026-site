"""Verify the CVPR Colab Pro+ release bundle."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_colab_release_bundle/registry.json"
PAGE = ROOT / "cvpr-colab-release-bundle.html"
PACKAGE = ROOT / "source-code/learning/cvpr-colab-release-bundle"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bundle"] == "cvpr-colab-release-bundle"
    assert summary["status"] in {"release", "block"}
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["workerJobs"] > 0
    assert summary["promotedRunners"] > 0
    assert summary["runnerRows"] > 0
    assert summary["cachedResults"] > 0
    assert summary["importIssues"] == 0
    assert summary["fullStackStatus"] in {"valid", "invalid"}
    assert summary["validationGate"] in {"release", "block"}
    assert summary["liveIntakeStatus"] == "valid"
    assert summary["liveIntakeResults"] > 0
    assert summary["liveIntakePromoted"] is True
    assert summary["promotionDeltaStatus"] == "release"
    assert summary["promotionRegressions"] == 0
    assert summary["maxReadinessDrop"] == 0
    assert len(data["runnerCoverage"]) == 14
    assert summary["status"] == (
        "release"
        if summary["fullStackStatus"] == "valid" and summary["validationGate"] == "release"
        else "block"
    )

    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Release Bundle",
        "Runner Coverage",
        "cvpr-colab-gpu-worker.html",
        "cvpr-validation-center.html",
        "cvpr-colab-live-intake.html",
        "cvpr-colab-promotion-delta.html",
        "COLAB_PRO_PLUS_RUNBOOK.md",
        "stage_cvpr_live_colab_export.py",
        "validate_cvpr_colab_results.py",
        "validate_cvpr_full_stack.py",
    ):
        assert token in page

    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR Colab release bundle: {summary['runnerRows']} runners, "
        f"{summary['cachedResults']} cached results"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR live evidence release brief."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_live_evidence_release_brief/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-live-evidence-release-brief"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["brief"] == "cvpr-live-evidence-release-brief"
    assert summary["status"] == "release-ready"
    assert summary["portfolioStatus"] == "portfolio-ready"
    assert summary["commandStatus"] == "operator-ready"
    assert summary["replacementStatus"] == "ready"
    assert summary["deltaStatus"] == "ready"
    assert summary["surfaces"] == 8
    assert summary["readySurfaces"] == 8
    assert summary["rows"] == 40
    assert summary["liveRows"] == 40
    assert summary["smokePassed"] == 40
    assert summary["artifacts"] == 40
    assert summary["holdDemo"] == 0
    assert summary["promotedRows"] == 40
    assert summary["rollbackRows"] == 40
    assert summary["deltaReadyRows"] == 40
    assert summary["promotedArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["rollbackArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    page = (ROOT / "cvpr-live-evidence-release-brief.html").read_text(encoding="utf-8")
    for token in (
        "Live Evidence Release Brief",
        "cvpr-live-evidence-portfolio.html",
        "cvpr-repo-harness-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "cvpr_repo_harness_results.rollback.json",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR live evidence release brief: {summary['rows']} rows, {summary['status']}")


if __name__ == "__main__":
    main()

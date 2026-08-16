"""Verify the CVPR live evidence command center."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_live_evidence_command_center/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-live-evidence-command-center"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["surfaceRows"]
    assert summary["commandCenter"] == "cvpr-live-evidence-command-center"
    assert summary["status"] == "operator-ready"
    assert summary["surfaces"] == 4
    assert summary["readySurfaces"] == 4
    assert summary["rows"] == 40
    assert summary["liveRows"] == 40
    assert summary["smokePassed"] == 40
    assert summary["artifacts"] == 40
    assert summary["holdDemo"] == 0
    assert summary["missingArtifacts"] == 0
    assert summary["releaseBriefStatus"] == "release-ready"
    assert summary["manifestStatus"] == "manifest-ready"
    assert summary["coverageStatus"] == "coverage-complete"
    assert summary["portfolioStatus"] == "portfolio-ready"
    assert summary["promotedArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["rollbackArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json"
    assert len(rows) == 4
    assert all(row["actual"] == row["expected"] for row in rows)
    assert all((ROOT / row["page"]).exists() for row in rows)
    assert all((ROOT / row["evidence"]).exists() for row in rows)
    assert all((ROOT / row["command"].split()[1]).exists() for row in rows)
    page = (ROOT / "cvpr-live-evidence-command-center.html").read_text(encoding="utf-8")
    for token in (
        "Live Evidence Command Center",
        "cvpr-live-evidence-release-brief.html",
        "cvpr-live-evidence-coverage-audit.html",
        "cvpr_repo_harness_results.promoted.json",
        "cvpr_repo_harness_results.rollback.json",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR live evidence command center: {summary['readySurfaces']} surfaces, {summary['rows']} rows")


if __name__ == "__main__":
    main()

"""Verify the CVPR live evidence portfolio closeout."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_live_evidence_portfolio/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-live-evidence-portfolio"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["surfaceRows"]
    assert summary["portfolio"] == "cvpr-live-evidence-portfolio"
    assert summary["status"] == "portfolio-ready"
    assert summary["surfaces"] == 8
    assert summary["readySurfaces"] == 8
    assert summary["rows"] == 40
    assert summary["liveRows"] == 40
    assert summary["smokePassed"] == 40
    assert summary["artifacts"] == 40
    assert summary["holdDemo"] == 0
    assert summary["promoteDemo"] == 24
    assert summary["reviewRows"] == 9
    assert summary["policyShadow"] == 5
    assert summary["canaryDemo"] == 2
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert len(rows) == 8
    assert all(row["status"] == "ready" for row in rows)
    assert all(row["rows"] == 5 and row["actualRows"] == 5 for row in rows)
    assert all(row["liveRows"] == 5 and row["smokePassed"] == 5 and row["artifacts"] == 5 for row in rows)
    assert all(row["holdDemo"] == 0 for row in rows)
    assert len({row["theme"] for row in rows}) == 8
    page = (ROOT / "cvpr-live-evidence-portfolio.html").read_text(encoding="utf-8")
    for token in (
        "Live Evidence Portfolio",
        "cvpr-repo-harness-command-center.html",
        "cvpr-efficient-learning-live-evidence-governor.html",
        "cvpr-frontier-live-evidence-drill.html",
        "cvpr_repo_harness_results.promoted.json",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR live evidence portfolio: {summary['surfaces']} surfaces, {summary['rows']} rows")


if __name__ == "__main__":
    main()

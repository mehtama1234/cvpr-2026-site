"""Verify the CVPR top paper repo demo matrix."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_top_paper_repo_demo_matrix/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-top-paper-repo-demo-matrix"
PAGE = ROOT / "cvpr-top-paper-repo-demo-matrix.html"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["matrixRows"]
    assert summary["matrix"] == "cvpr-top-paper-repo-demo-matrix"
    assert summary["status"] == "matrix-ready"
    assert summary["sourceForge"] == "analysis/cvpr_paper_repo_demo_forge/registry.json"
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["sourceInteractiveCoverage"] == "analysis/cvpr_interactive_coverage_portfolio/registry.json"
    assert summary["sourceDeepViewers"] == "analysis/cvpr_deep_viewer_portfolio/registry.json"
    assert summary["topPaperRepos"] == 40
    assert summary["readyRows"] == 40
    assert summary["themes"] == 8
    assert summary["blueprints"] == 8
    assert summary["subthemeTags"] >= 200
    assert summary["promotedEvidenceRows"] == 40
    assert summary["interactiveRows"] == 40
    assert summary["deepViewerRows"] == 8
    assert summary["artifacts"] == 120
    assert summary["controls"] == 200
    assert summary["coverageDemos"] == 40
    assert summary["coverageWaves"] == 5
    assert summary["deepViewerPortfolioRows"] == 8
    assert summary["holds"] == 0
    assert len(rows) == 40
    assert len({row["theme"] for row in rows}) == 8
    assert all(row["status"] == "demo-linked" for row in rows)
    assert all(row["promotedEvidence"] for row in rows)
    assert all(row["interactiveReady"] for row in rows)
    assert all(row["controls"] == 5 for row in rows)
    assert all(row["artifactCount"] == 3 for row in rows)
    assert len([row for row in rows if row["deepViewerReady"]]) == 8
    assert all(len(row["subthemes"]) >= 5 for row in rows)
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Top Paper Repo Demo Matrix",
        "Matrix Gate",
        "cvpr-paper-repo-demo-forge.html",
        "cvpr-interactive-coverage-portfolio.html",
        "cvpr-deep-viewer-portfolio.html",
        "MOS",
        "SegEarth-R2",
        "EmbedLens",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR top paper repo demo matrix: {summary['topPaperRepos']} repos, {summary['status']}")


if __name__ == "__main__":
    main()

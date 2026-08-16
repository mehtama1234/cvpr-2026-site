"""Verify the CVPR subtheme coverage drilldown."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_subtheme_coverage_drilldown/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-subtheme-coverage-drilldown"
PAGE = ROOT / "cvpr-subtheme-coverage-drilldown.html"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    theme_rows = data["themeRows"]
    lane_rows = data["laneRows"]
    assert summary["drilldown"] == "cvpr-subtheme-coverage-drilldown"
    assert summary["status"] == "subtheme-drilldown-ready"
    assert summary["sourceMatrix"] == "analysis/cvpr_top_paper_repo_demo_matrix/registry.json"
    assert summary["topPaperRepos"] == 40
    assert summary["themes"] == 8
    assert summary["themeRows"] == 8
    assert summary["subthemeAssignments"] == 237
    assert summary["uniqueSubthemes"] >= 200
    assert summary["readyLanes"] == summary["uniqueSubthemes"]
    assert summary["repoLaneLinks"] == 237
    assert summary["demoPageLinks"] >= 200
    assert summary["deepViewerLanes"] >= 40
    assert summary["artifacts"] == 711
    assert summary["controls"] == 1185
    assert summary["holds"] == 0
    assert len(theme_rows) == 8
    assert len(lane_rows) == summary["uniqueSubthemes"]
    assert len({row["theme"] for row in lane_rows}) == 8
    assert all(row["status"] == "covered" for row in theme_rows)
    assert all(row["status"] == "covered" for row in lane_rows)
    assert all(row["repoCount"] >= 1 for row in lane_rows)
    assert all(row["demoPages"] for row in lane_rows)
    assert all(row["artifacts"] >= 3 for row in lane_rows)
    assert all(row["controls"] >= 5 for row in lane_rows)
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Subtheme Coverage Drilldown",
        "Drilldown Gate",
        "Theme Lanes",
        "Subtheme Lanes",
        "cvpr-top-paper-repo-demo-matrix.html",
        "remote sensing",
        "gaussian-splatting",
        "EmbedLens",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR subtheme coverage drilldown: {summary['uniqueSubthemes']} subthemes, {summary['status']}")


if __name__ == "__main__":
    main()

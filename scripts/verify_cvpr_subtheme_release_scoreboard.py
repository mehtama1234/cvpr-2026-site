"""Verify the CVPR subtheme release scoreboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_subtheme_release_scoreboard/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-subtheme-release-scoreboard"
PAGE = ROOT / "cvpr-subtheme-release-scoreboard.html"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    theme_rows = data["themeRows"]
    assert summary["scoreboard"] == "cvpr-subtheme-release-scoreboard"
    assert summary["status"] == "scoreboard-ready"
    assert summary["sourceScenarioLab"] == "analysis/cvpr_subtheme_scenario_lab/registry.json"
    assert summary["themes"] == 8
    assert summary["readyThemes"] == 8
    assert summary["sourceLanes"] == 212
    assert summary["topPaperRepos"] == 40
    assert summary["scenarios"] == 636
    assert summary["readyScenarios"] == 636
    assert summary["evidenceProbes"] == 212
    assert summary["failureProbes"] == 212
    assert summary["releaseProbes"] == 212
    assert summary["riskFamilies"] == 3
    assert summary["repoLaneLinks"] == 237
    assert summary["demoPageLinks"] == 222
    assert summary["deepViewerLanes"] == 46
    assert summary["artifacts"] == 711
    assert summary["controls"] == 1185
    assert summary["holds"] == 0
    assert len(theme_rows) == 8
    assert all(row["status"] == "release-ready" for row in theme_rows)
    assert all(row["scenarios"] == row["readyScenarios"] for row in theme_rows)
    assert all(row["evidenceProbes"] == row["lanes"] for row in theme_rows)
    assert all(row["failureProbes"] == row["lanes"] for row in theme_rows)
    assert all(row["releaseProbes"] == row["lanes"] for row in theme_rows)
    assert all(row["riskFamilies"] == 3 for row in theme_rows)
    assert sum(row["scenarios"] for row in theme_rows) == 636
    assert sum(row["lanes"] for row in theme_rows) == 212
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Subtheme Release Scoreboard",
        "Scoreboard Gate",
        "Theme Promotion Rows",
        "unsupported-evidence",
        "silent-regression",
        "release-drift",
        "cvpr-subtheme-scenario-lab.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR subtheme release scoreboard: {summary['themes']} themes, {summary['status']}")


if __name__ == "__main__":
    main()

"""Verify the CVPR subtheme scenario lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_subtheme_scenario_lab/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-subtheme-scenario-lab"
PAGE = ROOT / "cvpr-subtheme-scenario-lab.html"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    theme_rows = data["themeRows"]
    scenario_rows = data["scenarioRows"]
    assert summary["lab"] == "cvpr-subtheme-scenario-lab"
    assert summary["status"] == "scenario-lab-ready"
    assert summary["sourceDrilldown"] == "analysis/cvpr_subtheme_coverage_drilldown/registry.json"
    assert summary["sourceLanes"] == 212
    assert summary["topPaperRepos"] == 40
    assert summary["themes"] == 8
    assert summary["scenarios"] == 636
    assert summary["readyScenarios"] == 636
    assert summary["evidenceProbes"] == 212
    assert summary["failureProbes"] == 212
    assert summary["releaseProbes"] == 212
    assert summary["repoLaneLinks"] == 237
    assert summary["demoPageLinks"] == 222
    assert summary["deepViewerLanes"] == 46
    assert summary["artifacts"] == 711
    assert summary["controls"] == 1185
    assert summary["holds"] == 0
    assert len(theme_rows) == 8
    assert len(scenario_rows) == 636
    assert len({row["theme"] for row in scenario_rows}) == 8
    assert len({row["laneKey"] for row in scenario_rows}) == 212
    assert len([row for row in scenario_rows if row["probeKind"] == "evidence"]) == 212
    assert len([row for row in scenario_rows if row["probeKind"] == "failure"]) == 212
    assert len([row for row in scenario_rows if row["probeKind"] == "release"]) == 212
    assert all(row["status"] == "scenario-ready" for row in scenario_rows)
    assert all(row["demoPage"] for row in scenario_rows)
    assert all(row["repoCount"] >= 1 for row in scenario_rows)
    assert all(row["artifacts"] >= 3 for row in scenario_rows)
    assert all(row["controls"] >= 5 for row in scenario_rows)
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Subtheme Scenario Lab",
        "Scenario Gate",
        "Theme Scenario Totals",
        "Scenario Probes",
        "Evidence inspection",
        "Failure stress",
        "Release gate",
        "cvpr-subtheme-coverage-drilldown.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR subtheme scenario lab: {summary['scenarios']} scenarios, {summary['status']}")


if __name__ == "__main__":
    main()

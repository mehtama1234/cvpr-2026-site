"""Verify the CVPR interactive scenario triage board."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_triage_board/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-triage-board"
THEMES = {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}
WAVES = {"first", "second", "third", "fourth", "fifth"}
RISKS = {"panel-state", "missing-artifact", "runtime-drift"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["decisionRows"]
    assert summary["board"] == "cvpr-interactive-triage-board"
    assert summary["status"] == "triage-ready"
    assert summary["sourceRunner"] == "analysis/cvpr_interactive_scenario_runner/registry.json"
    assert summary["sourceCases"] == 120
    assert summary["decisions"] == 40
    assert summary["themes"] == 8
    assert summary["waves"] == 5
    assert summary["promote"] == 40
    assert summary["monitor"] == 0
    assert summary["retest"] == 0
    assert summary["passingCases"] == 120
    assert summary["blockedCases"] == 0
    assert summary["riskTypes"] == 3
    assert len(rows) == 40
    assert len({row["jobId"] for row in rows}) == 40
    assert {row["theme"] for row in rows} == THEMES
    assert {row["wave"] for row in rows} == WAVES
    assert {risk for row in rows for risk in row["risks"]} == RISKS
    assert all(row["decision"] == "promote" for row in rows)
    assert all(row["action"] == "ship-interactive-demo" for row in rows)
    assert all(row["caseCount"] == 3 for row in rows)
    assert all(row["passCount"] == 3 for row in rows)
    assert all(row["blockCount"] == 0 for row in rows)
    assert all(row["localArtifacts"] == 3 for row in rows)
    assert all(row["controls"] == 5 for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all((ROOT / row["page"]).exists() for row in rows)
    assert all((ROOT / row["wavePage"]).exists() for row in rows)
    assert all((ROOT / row["sourceRegistry"]).exists() for row in rows)
    assert all((ROOT / artifact).exists() for row in rows for artifact in row["artifactPaths"])
    page = (ROOT / "cvpr-interactive-triage-board.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Triage Board",
        "Triage Gate",
        "ship-interactive-demo",
        "BPFedCTTA",
        "GeoVis",
        "panel-state",
        "missing-artifact",
        "runtime-drift",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive triage board: {summary['decisions']} decisions, {summary['status']}")


if __name__ == "__main__":
    main()

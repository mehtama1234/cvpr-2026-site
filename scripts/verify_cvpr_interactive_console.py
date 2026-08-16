"""Verify the unified CVPR interactive demo console."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_console/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-console"
THEMES = {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}
WAVES = {"first", "second", "third", "fourth", "fifth"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["consoleRows"]
    assert summary["console"] == "cvpr-interactive-console"
    assert summary["status"] == "console-ready"
    assert summary["sourcePortfolio"] == "analysis/cvpr_interactive_coverage_portfolio/registry.json"
    assert summary["demos"] == 40
    assert summary["themes"] == 8
    assert summary["waves"] == 5
    assert summary["localArtifacts"] == 120
    assert summary["controls"] == 200
    assert summary["readyRows"] == 40
    assert summary["holds"] == 0
    assert summary["filterControls"] == ["theme", "wave", "query"]
    assert summary["panelControls"] == ["input", "output", "failure", "artifacts", "replay"]
    assert len(rows) == 40
    assert len({row["jobId"] for row in rows}) == 40
    assert {row["theme"] for row in rows} == THEMES
    assert {row["wave"] for row in rows} == WAVES
    assert all(row["status"] == "interactive-ready" for row in rows)
    assert all(row["controls"] == 5 for row in rows)
    assert all(row["controlPanels"] == ["input", "output", "failure", "artifacts", "replay"] for row in rows)
    assert all(row["localArtifacts"] == 3 for row in rows)
    assert all(row["runtimeController"] is True for row in rows)
    assert all(row["releaseAction"] == "promote-interactive-demo" for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all((ROOT / row["page"]).exists() for row in rows)
    assert all((ROOT / row["wavePage"]).exists() for row in rows)
    assert all((ROOT / row["sourceRegistry"]).exists() for row in rows)
    assert all((ROOT / artifact).exists() for row in rows for artifact in row["artifactPaths"])
    page = (ROOT / "cvpr-interactive-console.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Demo Console",
        "themeFilter",
        "waveFilter",
        "queryFilter",
        "panelButtons",
        "panelOutput",
        "CONSOLE_ROWS",
        "BPFedCTTA",
        "GeoVis",
        "Console Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive console: {summary['demos']} demos, {summary['status']}")


if __name__ == "__main__":
    main()

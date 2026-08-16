"""Verify the consolidated CVPR interactive coverage portfolio."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_coverage_portfolio/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-coverage-portfolio"
THEMES = {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["portfolioRows"]
    assert summary["portfolio"] == "cvpr-interactive-coverage-portfolio"
    assert summary["status"] == "coverage-ready"
    assert summary["waves"] == 5
    assert summary["totalDemos"] == 40
    assert summary["themes"] == 8
    assert summary["localArtifacts"] == 120
    assert summary["controls"] == 200
    assert summary["runtimeControllers"] == 40
    assert summary["promoteInteractive"] == 40
    assert summary["holdInteractive"] == 0
    assert summary["duplicateJobs"] == 0
    assert summary["sourceRegistries"] == 5
    assert len(rows) == 40
    assert len({row["jobId"] for row in rows}) == 40
    assert {row["theme"] for row in rows} == THEMES
    assert {row["wave"] for row in rows} == {"first", "second", "third", "fourth", "fifth"}
    assert all(row["status"] == "interactive-ready" for row in rows)
    assert all(row["controls"] == 5 for row in rows)
    assert all(row["localArtifacts"] == 3 for row in rows)
    assert all(row["runtimeController"] is True for row in rows)
    assert all(row["releaseAction"] == "promote-interactive-demo" for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all((ROOT / row["sourceRegistry"]).exists() for row in rows)
    assert all((ROOT / row["wavePage"]).exists() for row in rows)
    assert all((ROOT / path).exists() for row in rows for path in row["artifactPaths"])
    page = (ROOT / "cvpr-interactive-coverage-portfolio.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Coverage Portfolio",
        "cvpr-interactive-demo-workbench.html",
        "cvpr-interactive-fifth-wave.html",
        "GeoVis",
        "BPFedCTTA",
        "Coverage Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive coverage portfolio: {summary['totalDemos']} demos, {summary['status']}")


if __name__ == "__main__":
    main()

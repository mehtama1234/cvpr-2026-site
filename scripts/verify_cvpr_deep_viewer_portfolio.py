"""Verify the CVPR deep viewer portfolio."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_deep_viewer_portfolio/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-deep-viewer-portfolio"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["portfolioRows"]
    viewers = data["deepViewers"]
    assert summary["portfolio"] == "cvpr-deep-viewer-portfolio"
    assert summary["status"] == "portfolio-ready"
    assert summary["deepViewers"] == 8
    assert summary["readyDeepViewers"] == 8
    assert summary["themes"] == 8
    assert summary["pages"] == 8
    assert summary["panels"] == 40
    assert summary["readyPanels"] == 40
    assert summary["artifacts"] == 24
    assert summary["artifactLocalPaths"] == 24
    assert summary["artifactMissingPaths"] == 0
    assert summary["holdViewers"] == 0
    assert len(rows) == 8
    assert len(viewers) == 8
    assert {row["theme"] for row in rows} == {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}
    assert all(row["status"] == "deep-viewer-ready" for row in rows)
    assert all(row["page"].endswith(".html") for row in rows)
    assert all((ROOT / row["page"]).exists() for row in rows)
    assert all(viewer["promotedEvidence"]["jobId"] == viewer["jobId"] for viewer in viewers)
    assert all(len(viewer["panels"]) == 5 for viewer in viewers)
    assert all(len(viewer["artifacts"]) == 3 for viewer in viewers)
    assert all(artifact["status"] == "available" for viewer in viewers for artifact in viewer["artifacts"])
    assert all((ROOT / artifact["path"]).exists() for viewer in viewers for artifact in viewer["artifacts"])
    page = (ROOT / "cvpr-deep-viewer-portfolio.html").read_text(encoding="utf-8")
    for token in (
        "Deep Viewer Portfolio",
        "cvpr-reproduction-viewer-gallery.html",
        "MOS",
        "insightface",
        "safe-driving-drl",
        "EmbedLens",
        "Portfolio Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR deep viewer portfolio: {summary['deepViewers']} viewers, {summary['status']}")


if __name__ == "__main__":
    main()

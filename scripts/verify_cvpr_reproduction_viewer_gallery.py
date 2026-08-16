"""Verify the CVPR reproduction viewer gallery."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_reproduction_viewer_gallery/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-reproduction-viewer-gallery"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["viewerRows"]
    assert summary["gallery"] == "cvpr-reproduction-viewer-gallery"
    assert summary["status"] == "gallery-ready"
    assert summary["trackStatus"] == "track-ready"
    assert summary["viewers"] == 8
    assert summary["readyViewers"] == 8
    assert summary["themes"] == 8
    assert summary["artifactLinks"] == 24
    assert summary["shipViewer"] == 8
    assert summary["holdViewer"] == 0
    assert len(rows) == 8
    assert {row["theme"] for row in rows} == {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}
    assert all(row["viewerMode"] == "interactive-cached" for row in rows)
    assert all(row["decision"] == "ship-viewer" for row in rows)
    assert all(row["artifactLinks"] and len(row["artifactLinks"]) == 3 for row in rows)
    assert all(row["viewerState"]["selectedPanel"] == "output" for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    page = (ROOT / "cvpr-reproduction-viewer-gallery.html").read_text(encoding="utf-8")
    for token in (
        "Reproduction Viewer Gallery",
        "cvpr-paper-reproduction-track.html",
        "cvpr-live-evidence-command-center.html",
        "interactive-cached",
        "Gallery Gate",
        "safe-driving-drl",
        "EmbedLens",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR reproduction viewer gallery: {summary['viewers']} viewers, {summary['status']}")


if __name__ == "__main__":
    main()

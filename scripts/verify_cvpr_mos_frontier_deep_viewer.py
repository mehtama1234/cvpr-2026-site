"""Verify the MOS frontier per-repo deep viewer."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_mos_frontier_deep_viewer/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-mos-frontier-deep-viewer"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    viewer = data["deepViewer"]
    assert summary["viewer"] == "cvpr-mos-frontier-deep-viewer"
    assert summary["status"] == "deep-viewer-ready"
    assert summary["repo"] == "MOS"
    assert summary["jobId"] == "frontier-01-github-com-yjzhao1019-mos"
    assert summary["theme"] == "frontier"
    assert summary["panels"] == 5
    assert summary["readyPanels"] == 5
    assert summary["selectedPanel"] == "output"
    assert summary["promotedEvidenceRows"] == 1
    assert summary["artifacts"] == 3
    assert summary["artifactLocalPaths"] == 3
    assert summary["artifactMissingPaths"] == 0
    assert summary["smokePassed"] is True
    assert summary["accelerator"] == "A100"
    assert viewer["promotedEvidence"]["jobId"] == viewer["jobId"]
    assert viewer["promotedEvidence"]["promotion"]["promotionDecision"] == "promote"
    assert all(panel["status"] == "ready" for panel in viewer["panels"])
    assert {panel["id"] for panel in viewer["panels"]} == {"input", "output", "failure", "artifacts", "replay"}
    assert all(artifact["sourceOfTruth"] == "promoted-results-json" for artifact in viewer["artifacts"])
    assert all(artifact["status"] == "available" for artifact in viewer["artifacts"])
    assert all((ROOT / artifact["path"]).exists() for artifact in viewer["artifacts"])
    assert viewer["jobId"] in viewer["replayCommand"]
    page = (ROOT / "cvpr-mos-frontier-deep-viewer.html").read_text(encoding="utf-8")
    for token in (
        "MOS Frontier Deep Viewer",
        "cvpr-reproduction-viewer-gallery.html",
        "available",
        "promoted-results-json",
        "frontier-01-github-com-yjzhao1019-mos",
        "google-colab-pro-plus",
        "A100",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR MOS frontier deep viewer: {summary['repo']} {summary['status']}")


if __name__ == "__main__":
    main()

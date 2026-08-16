"""Verify the CVPR paper reproduction demo track."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_paper_reproduction_track/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-paper-reproduction-track"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["reproductionRows"]
    assert summary["track"] == "cvpr-paper-reproduction-track"
    assert summary["status"] == "track-ready"
    assert summary["commandStatus"] == "operator-ready"
    assert summary["manifestStatus"] == "manifest-ready"
    assert summary["reproductions"] == 8
    assert summary["themes"] == 8
    assert summary["liveRows"] == 8
    assert summary["smokePassed"] == 8
    assert summary["artifactsComplete"] == 8
    assert summary["hold"] == 0
    assert summary["minReproductionScore"] >= 72
    assert len(rows) == 8
    assert {row["theme"] for row in rows} == {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["mode"] == "live-colab" for row in rows)
    assert all(row["smokePassed"] is True for row in rows)
    assert all(row["artifactsComplete"] is True for row in rows)
    assert all(row["evidenceArtifact"].endswith(".json") for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all(row["decision"] in {"build-interactive-demo", "build-cached-demo", "needs-repro-pass"} for row in rows)
    page = (ROOT / "cvpr-paper-reproduction-track.html").read_text(encoding="utf-8")
    for token in (
        "Paper Reproduction Track",
        "Frontier Sensor Fusion Reproduction",
        "3D World Reconstruction Reproduction",
        "Embodied Control Reproduction",
        "cvpr-paper-repo-demo-forge.html",
        "cvpr-live-evidence-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR paper reproduction track: {summary['reproductions']} reproductions, {summary['status']}")


if __name__ == "__main__":
    main()

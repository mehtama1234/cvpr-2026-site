"""Verify the CVPR production release brief."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_production_release_brief/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["gate"] == "release"
    assert summary["posture"] == "all-clear"
    assert summary["themes"] == 8
    assert summary["systems"] == 11
    assert summary["stages"] == 33
    assert summary["demos"] == 41
    assert summary["arenaPairings"] == 328
    assert summary["arenaRelease"] == 328
    assert summary["arenaReview"] == 0
    assert summary["arenaBlock"] == 0
    assert summary["benchCases"] == 44
    assert summary["benchRelease"] == 44
    assert summary["benchReview"] == 0
    assert summary["benchBlock"] == 0
    assert summary["failureSeverity"] == 0
    assert summary["openThemes"] == 0
    assert summary["workerJobs"] > 0
    assert summary["cachedResults"] > 0
    assert summary["liveIntakeResults"] == summary["cachedResults"]
    assert summary["evidenceArtifacts"] == 7
    assert summary["importIssues"] == 0
    assert summary["packageTests"] >= 36
    assert summary["fullStackStatus"] == "valid"
    assert len(data["evidence"]) == 7
    page = (ROOT / "cvpr-production-release-brief.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Production Release Brief",
        "Release Position",
        "Risk Posture",
        "Evidence Chain",
        "cvpr-mission-control.html",
        "cvpr-theme-release-matrix.html",
        "cvpr-colab-release-bundle.html",
        "cvpr-validation-center.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-production-release-brief/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-production-release-brief/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-production-release-brief/tests/core.test.js").exists()
    print(
        f"verified CVPR production release brief: {summary['gate']} gate, "
        f"{summary['arenaRelease']} arena releases"
    )


if __name__ == "__main__":
    main()

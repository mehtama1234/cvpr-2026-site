"""Verify the CVPR launch readiness pack."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_launch_readiness_pack/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] == "launch-ready"
    assert summary["releaseGate"] == "release"
    assert summary["sloStatus"] == "release"
    assert summary["drillbookStatus"] == "ready"
    assert summary["operationsStatus"] == "ready"
    assert summary["validationGate"] == "release"
    assert summary["fullStackStatus"] == "valid"
    assert summary["systems"] == 11
    assert summary["stages"] == 33
    assert summary["demos"] == 41
    assert summary["benchRelease"] == summary["benchCases"] == 44
    assert summary["arenaRelease"] == summary["arenaPairings"] == 328
    assert summary["workerJobs"] == 10
    assert summary["cachedResults"] == 40
    assert summary["liveIntakeResults"] == 40
    assert summary["packageTests"] >= 46
    assert summary["criticalFailures"] == 0
    assert summary["importIssues"] == 0
    assert len(data["launchSteps"]) == 8
    assert all(row["surface"] for row in data["launchSteps"])
    assert all(row["command"] for row in data["launchSteps"])
    assert all(row["evidence"] for row in data["launchSteps"])
    assert any(row["command"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["launchSteps"])
    page = (ROOT / "cvpr-launch-readiness-pack.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Launch Readiness Pack",
        "Launch Handoff",
        "cvpr-production-release-brief.html",
        "cvpr-release-slo-dashboard.html",
        "cvpr-release-regression-drillbook.html",
        "python3 scripts/validate_cvpr_full_stack.py",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-launch-readiness-pack/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-launch-readiness-pack/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-launch-readiness-pack/tests/core.test.js").exists()
    print(
        f"verified CVPR launch readiness pack: {summary['status']}, "
        f"{summary['packageTests']} package tests"
    )


if __name__ == "__main__":
    main()

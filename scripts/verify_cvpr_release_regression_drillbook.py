"""Verify the CVPR release regression drillbook."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_release_regression_drillbook/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] in {"ready", "block"}
    assert summary["drills"] == 10
    assert summary["readyDrills"] == 10
    assert summary["activeCriticalFailures"] >= 0
    assert 0 <= summary["passingSlos"] <= 10
    assert summary["operationsStatus"] == "ready"
    assert summary["validationGate"] == "release"
    assert summary["remediationStatus"] == "ready"
    assert summary["fullStackValidator"] == "scripts/validate_cvpr_full_stack.py"
    assert len(data["drills"]) == 10
    assert all(row["severity"] == "critical" for row in data["drills"])
    assert all(row["currentStatus"] in {"pass", "fail"} for row in data["drills"])
    assert all(row["status"] == "ready" for row in data["drills"])
    assert all(row["ownerSurface"].endswith(".html") for row in data["drills"])
    assert all(row["evidence"].startswith("analysis/") for row in data["drills"])
    assert all(row["rebuildCommand"].startswith("python3 scripts/") for row in data["drills"])
    assert all(row["verifyCommand"].startswith("python3 scripts/") for row in data["drills"])
    assert all(row["validationCommand"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["drills"])
    assert sum(1 for row in data["drills"] if row["currentStatus"] == "fail") == summary["activeCriticalFailures"]
    assert sum(1 for row in data["drills"] if row["currentStatus"] == "pass") == summary["passingSlos"]
    expected_status = (
        "ready"
        if summary["activeCriticalFailures"] == 0
        and summary["operationsStatus"] == "ready"
        and summary["validationGate"] == "release"
        and summary["remediationStatus"] == "ready"
        else "block"
    )
    assert summary["status"] == expected_status
    page = (ROOT / "cvpr-release-regression-drillbook.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Release Regression Drillbook",
        "Critical Regression Drills",
        "theme-system-coverage",
        "pro-plus-result-validity",
        "readiness-floor",
        "python3 scripts/validate_cvpr_full_stack.py",
        "cvpr-release-slo-dashboard.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-release-regression-drillbook/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-regression-drillbook/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-regression-drillbook/tests/core.test.js").exists()
    print(
        f"verified CVPR release regression drillbook: {summary['readyDrills']}/{summary['drills']} drills"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR post-launch monitoring dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_post_launch_monitoring/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] in {"watching", "block"}
    assert summary["monitors"] == 9
    assert 0 <= summary["passingMonitors"] <= 9
    assert summary["alerts"] == summary["monitors"] - summary["passingMonitors"]
    assert summary["releaseGate"] == "release"
    assert summary["fullStackStatus"] in {"valid", "invalid"}
    assert summary["readinessFloor"] >= 0
    assert summary["manifestStatus"] in {"sealed", "block"}
    assert summary["changeControlStatus"] in {"controlled", "block"}
    assert summary["packageTests"] >= 50
    assert len(data["monitorRows"]) == 9
    passed = []
    for row in data["monitorRows"]:
        assert row["evidence"].startswith("analysis/")
        assert row["responseCommand"].startswith("python3 ")
        if row["direction"] == "eq":
            passed.append(row["actual"] == row["target"])
        elif row["direction"] == "gte":
            passed.append(row["actual"] >= row["target"])
        elif row["direction"] == "lte":
            passed.append(row["actual"] <= row["target"])
        else:
            passed.append(False)
    assert sum(1 for item in passed if item) == summary["passingMonitors"]
    expected_status = (
        "watching"
        if summary["monitors"] == 9
        and summary["passingMonitors"] == 9
        and summary["alerts"] == 0
        and summary["releaseGate"] == "release"
        and summary["fullStackStatus"] == "valid"
        else "block"
    )
    assert summary["status"] == expected_status
    page = (ROOT / "cvpr-post-launch-monitoring.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Post-Launch Monitoring",
        "Monitors",
        "critical-slo-alerts",
        "pro-plus-result-validity",
        "full-stack-valid",
        "cvpr-release-slo-dashboard.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-post-launch-monitoring/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-post-launch-monitoring/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-post-launch-monitoring/tests/core.test.js").exists()
    print(
        f"verified CVPR post-launch monitoring: {summary['passingMonitors']}/{summary['monitors']} monitors"
    )


if __name__ == "__main__":
    main()

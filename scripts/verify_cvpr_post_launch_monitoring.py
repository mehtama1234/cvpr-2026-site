"""Verify the CVPR post-launch monitoring dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_post_launch_monitoring/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] == "watching"
    assert summary["monitors"] == 9
    assert summary["passingMonitors"] == 9
    assert summary["alerts"] == 0
    assert summary["releaseGate"] == "release"
    assert summary["fullStackStatus"] == "valid"
    assert summary["readinessFloor"] == 68.1
    assert summary["manifestStatus"] == "sealed"
    assert summary["changeControlStatus"] == "controlled"
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
    assert all(passed)
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

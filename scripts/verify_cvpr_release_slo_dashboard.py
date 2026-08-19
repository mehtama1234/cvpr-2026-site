"""Verify the CVPR release SLO dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_release_slo_dashboard/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] in {"release", "block"}
    assert summary["slos"] == 10
    assert 0 <= summary["passingSlos"] <= summary["slos"]
    assert summary["criticalFailures"] >= 0
    assert summary["readinessFloor"] >= 0
    assert summary["avgReadiness"] >= 0
    assert summary["benchAcceptanceRate"] == 100.0
    assert summary["releaseGate"] == "release"
    assert summary["fullStackStatus"] in {"valid", "invalid"}
    assert summary["packageTests"] >= 44
    assert len(data["sloRows"]) == 10
    assert all(row["severity"] == "critical" for row in data["sloRows"])
    assert all(row["evidence"].startswith("analysis/") for row in data["sloRows"])
    passed = []
    for row in data["sloRows"]:
        if row["direction"] == "eq":
            passed.append(row["actual"] == row["target"])
        elif row["direction"] == "gte":
            passed.append(row["actual"] >= row["target"])
        elif row["direction"] == "lte":
            passed.append(row["actual"] <= row["target"])
        else:
            passed.append(False)
    assert sum(passed) == summary["passingSlos"]
    assert summary["criticalFailures"] == len(
        [row for row, ok in zip(data["sloRows"], passed) if row["severity"] == "critical" and not ok]
    )
    assert summary["status"] == ("release" if all(passed) else "block")
    page = (ROOT / "cvpr-release-slo-dashboard.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Release SLO Dashboard",
        "Critical SLOs",
        "readiness-floor",
        "pro-plus-result-validity",
        "cvpr-colab-result-replay.html",
        "cvpr-production-release-brief.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-release-slo-dashboard/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-slo-dashboard/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-slo-dashboard/tests/core.test.js").exists()
    print(
        f"verified CVPR release SLO dashboard: {summary['passingSlos']}/{summary['slos']} SLOs, "
        f"readiness floor {summary['readinessFloor']}"
    )


if __name__ == "__main__":
    main()

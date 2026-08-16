"""Verify the CVPR Demo Arena."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_demo_arena/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    demos = json.loads((ROOT / "analysis/cvpr_demos/registry.json").read_text(encoding="utf-8"))
    systems = json.loads((ROOT / "analysis/cvpr_systems/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demos"] >= demos["summary"]["totalDemos"]
    assert summary["scenarios"] == 8
    assert summary["pairings"] == summary["demos"] * summary["scenarios"]
    assert summary["clustersCovered"] >= systems["summary"]["totalClusters"]
    assert summary["systemsCovered"] >= systems["summary"]["systems"]
    assert summary["visualModes"] >= demos["summary"]["visualModes"]
    assert summary["release"] + summary["review"] + summary["block"] == summary["pairings"]
    assert len(data["leaders"]) == summary["scenarios"]
    assert len(data["evaluations"]) == summary["pairings"]
    assert len(data["matrix"]) == summary["clustersCovered"]
    assert len(data["recommendations"]) >= 8
    assert all(len(row["cells"]) == summary["scenarios"] for row in data["matrix"])
    assert all(0 <= row["averageReadiness"] <= 100 for row in data["matrix"])
    assert all(0 <= cell["readiness"] <= 100 for row in data["matrix"] for cell in row["cells"])
    assert all(row["nextBuild"] for row in data["recommendations"])
    assert {row["scenario"] for row in data["evaluations"]} == {row["id"] for row in data["scenarios"]}
    assert {row["visualMode"] for row in data["evaluations"]} >= {row["visualMode"] for row in demos["records"]}
    page = (ROOT / "cvpr-demo-arena.html").read_text(encoding="utf-8")
    for token in (
        "Stress-test every demo across deployment scenarios",
        "Scenario Leaders",
        "Cluster Scenario Matrix",
        "Next Builds",
        "cvpr-demo-playbook.html",
        "Live Ranking",
        "Hardest Failures At Default Settings",
        "rankScenario",
        "readiness distribution by visual mode",
    ):
        assert token in page
    assert page.count("<option") == 0
    assert "cvpr-demo-arena.html" in (ROOT / "index.html").read_text(encoding="utf-8")
    assert (ROOT / "source-code/learning/cvpr-demo-arena/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-demo-arena/src/scenarios.js").exists()
    assert (ROOT / "source-code/learning/cvpr-demo-arena/tests/core.test.js").exists()
    print(
        f"verified CVPR demo arena: {summary['demos']} demos, "
        f"{summary['scenarios']} scenarios, {summary['pairings']} evaluations"
    )


if __name__ == "__main__":
    main()

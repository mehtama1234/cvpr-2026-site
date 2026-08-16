"""Verify the CVPR next-demo roadmap."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_next_demo_roadmap/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] == "ready"
    assert summary["goals"] == 8
    assert summary["themes"] == 8
    assert summary["linkedSystems"] == 11
    assert summary["proPlusGoals"] == 7
    assert summary["cachedEvidenceGoals"] == 1
    assert summary["missingEvidence"] == 0
    assert summary["operatorStatus"] == "operator-ready"
    assert summary["packageTests"] >= 54
    assert len(data["roadmapGoals"]) == 8
    assert sum(len(goal["systems"]) for goal in data["roadmapGoals"]) == 11
    assert all(goal["status"] == "ready" for goal in data["roadmapGoals"])
    assert all(goal["command"] == "python3 scripts/validate_cvpr_full_stack.py" for goal in data["roadmapGoals"])
    page = (ROOT / "cvpr-next-demo-roadmap.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Next Demo Roadmap",
        "Roadmap Goals",
        "cvpr-theme-portfolio-map.html",
        "cvpr-release-command-center.html",
        "python3 scripts/validate_cvpr_full_stack.py",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-next-demo-roadmap/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-next-demo-roadmap/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-next-demo-roadmap/tests/core.test.js").exists()
    print(
        f"verified CVPR next-demo roadmap: {summary['goals']} goals, {summary['linkedSystems']} systems"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR second-round demo roadmap."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_second_round_demo_roadmap/registry.json"
PAGE = ROOT / "cvpr-second-round-demo-roadmap.html"
PACKAGE = ROOT / "source-code/learning/cvpr-second-round-demo-roadmap"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-second-round-demo-roadmap"
    assert summary["status"] == "block"
    assert summary["goals"] == 6
    assert summary["readyGoals"] == 6
    assert summary["sourceGate"] == "block"
    assert summary["closeoutStatus"] == "block"
    assert summary["operatorStatus"] == "block"
    assert summary["fullStackStatus"] == "valid"
    assert len(data["roadmapGoals"]) == 6
    assert all(goal["status"] == "ready" for goal in data["roadmapGoals"])
    assert all(goal["command"] == "python3 scripts/validate_cvpr_full_stack.py" for goal in data["roadmapGoals"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Second-Round Demo Roadmap",
        "Live Pro+ evidence refresh",
        "Visual QA and interaction sweep",
        "Scenario expansion pack",
        "cvpr-remediation-closeout-pack.html",
        "Roadmap Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR second-round demo roadmap: {summary['goals']} goals, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Verify the CVPR interactive rollback drillbook."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_rollback_drillbook/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-rollback-drillbook"
CATEGORIES = {"command-vs-health", "command-vs-release", "release-vs-ledger", "health-monitor", "triage-board", "full-stack"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    drills = data["rollbackDrills"]
    assert summary["drillbook"] == "cvpr-interactive-rollback-drillbook"
    assert summary["status"] == "drillbook-ready"
    assert summary["drills"] == 6
    assert summary["armedDrills"] == 6
    assert summary["driftChecks"] == 18
    assert summary["blockedChecks"] == 0
    assert summary["healthBlocked"] == 0
    assert summary["triageRetest"] == 0
    assert summary["demos"] == 40
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["holds"] == 0
    assert len(drills) == 6
    assert {drill["category"] for drill in drills} == CATEGORIES
    assert all(drill["status"] == "armed" for drill in drills)
    assert all(drill["expectedHold"] == 0 for drill in drills)
    assert all(drill["command"] == "python3 scripts/validate_cvpr_full_stack.py" for drill in drills)
    assert all(drill["owner"] == "interactive-release-operator" for drill in drills)
    page = (ROOT / "cvpr-interactive-rollback-drillbook.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Rollback Drillbook",
        "Rollback Gate",
        "command-vs-health",
        "command-vs-release",
        "release-vs-ledger",
        "validation-regression",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive rollback drillbook: {summary['drills']} drills, {summary['status']}")


if __name__ == "__main__":
    main()

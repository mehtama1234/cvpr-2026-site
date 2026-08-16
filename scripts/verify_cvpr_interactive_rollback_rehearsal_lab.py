"""Verify the CVPR interactive rollback rehearsal lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_rollback_rehearsal_lab/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-rollback-rehearsal-lab"
CATEGORIES = {"command-vs-health", "command-vs-release", "release-vs-ledger", "health-monitor", "triage-board", "full-stack"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["rehearsalRows"]
    assert summary["lab"] == "cvpr-interactive-rollback-rehearsal-lab"
    assert summary["status"] == "rehearsal-ready"
    assert summary["sourceDrillbook"] == "analysis/cvpr_interactive_rollback_drillbook/registry.json"
    assert summary["rehearsals"] == 6
    assert summary["clearRehearsals"] == 6
    assert summary["blockedRehearsals"] == 0
    assert summary["armedDrills"] == 6
    assert summary["driftChecks"] == 18
    assert summary["blockedChecks"] == 0
    assert summary["healthBlocked"] == 0
    assert summary["triageRetest"] == 0
    assert summary["demos"] == 40
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["holds"] == 0
    assert len(rows) == 6
    assert {row["category"] for row in rows} == CATEGORIES
    assert all(row["status"] == "clear" for row in rows)
    assert all(row["drillStatus"] == "armed" for row in rows)
    assert all(row["durationMin"] <= row["budgetMin"] for row in rows)
    assert all(row["expectedHold"] == 0 for row in rows)
    assert all(row["recoveryCommand"] == "python3 scripts/validate_cvpr_full_stack.py" for row in rows)
    assert all((ROOT / evidence).exists() for row in rows for evidence in row["evidence"])
    page = (ROOT / "cvpr-interactive-rollback-rehearsal-lab.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Rollback Rehearsal Lab",
        "Rehearsal Gate",
        "interactive-rehearsal-01",
        "interactive-rehearsal-06",
        "command-vs-health",
        "full-stack",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive rollback rehearsal lab: {summary['rehearsals']} rehearsals, {summary['status']}")


if __name__ == "__main__":
    main()

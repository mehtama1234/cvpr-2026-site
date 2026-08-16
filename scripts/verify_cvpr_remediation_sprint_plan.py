"""Verify the CVPR remediation sprint plan."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_sprint_plan/registry.json"
PAGE = ROOT / "cvpr-remediation-sprint-plan.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-sprint-plan"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["plan"] == "cvpr-remediation-sprint-plan"
    assert summary["status"] == "ready"
    assert summary["sprints"] == 3
    assert summary["tasks"] == summary["sourceBlockTasks"]
    assert summary["assignedTasks"] == summary["tasks"]
    assert summary["criticalTasks"] == summary["boardCriticalTasks"]
    assert summary["highTasks"] == summary["boardHighTasks"]
    assert summary["focusedTasks"] == summary["boardFocusedTasks"]
    assert summary["acceptanceChecks"] == summary["tasks"]
    assert summary["operationsStatus"] == "ready"
    assert len(data["sprints"]) == 3
    assert sum(len(sprint["tasks"]) for sprint in data["sprints"]) == summary["tasks"]
    for sprint in data["sprints"]:
        assert len(sprint["exitCriteria"]) >= 3
        for task in sprint["tasks"]:
            assert task["acceptanceCheck"]
            assert task["validationCommand"].startswith("python3 scripts/verify_")
            assert task["page"].endswith(".html")
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Remediation Sprint Plan",
        "Critical containment",
        "High-risk evidence repair",
        "Focused release polish",
        "cvpr-remediation-board.html",
        "cvpr-colab-operations-dashboard.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR remediation sprint plan: {summary['sprints']} sprints, {summary['tasks']} tasks")


if __name__ == "__main__":
    main()

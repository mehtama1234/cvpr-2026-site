"""Verify the CVPR demo build backlog."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_demo_build_backlog/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    tasks = data["backlogTasks"]
    assert summary["status"] in {"ready", "block"}
    assert summary["goals"] == 8
    assert summary["tasks"] == 24
    assert summary["themes"] == 8
    assert summary["linkedSystems"] == 11
    assert summary["proPlusTasks"] == 21
    assert summary["cachedEvidenceTasks"] == 3
    assert summary["missingEvidence"] == 0
    assert summary["operatorStatus"] in {"operator-ready", "block"}
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert summary["packageTests"] >= 55
    assert len(tasks) == 24
    assert len({task["theme"] for task in tasks}) == 8
    assert len({task["goalId"] for task in tasks}) == 8
    assert all(task["status"] == "ready" for task in tasks)
    assert all(task["command"] == summary["fullStackCommand"] for task in tasks)
    assert all(task["acceptance"] and task["evidencePage"] and task["targetFile"] for task in tasks)
    assert all(task["runtimeEvidence"] in {"colab-pro-plus", "cached-system-evidence"} for task in tasks)
    expected_status = (
        "ready"
        if summary["goals"] == 8
        and summary["tasks"] == 24
        and summary["themes"] == 8
        and summary["linkedSystems"] == 11
        and summary["proPlusTasks"] == 21
        and summary["cachedEvidenceTasks"] == 3
        and summary["missingEvidence"] == 0
        and summary["operatorStatus"] == "operator-ready"
        else "block"
    )
    assert summary["status"] == expected_status
    page = (ROOT / "cvpr-demo-build-backlog.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Demo Build Backlog",
        "Build Tasks",
        "cvpr-next-demo-roadmap.html",
        "cvpr-theme-portfolio-map.html",
        "python3 scripts/validate_cvpr_full_stack.py",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-demo-build-backlog/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-demo-build-backlog/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-demo-build-backlog/tests/core.test.js").exists()
    print(
        f"verified CVPR demo build backlog: {summary['goals']} goals, {summary['tasks']} tasks"
    )


if __name__ == "__main__":
    main()

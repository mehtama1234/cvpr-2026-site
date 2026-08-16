"""Verify the CVPR remediation board."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_board/registry.json"
PAGE = ROOT / "cvpr-remediation-board.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-board"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    atlas = json.loads((ROOT / "analysis/cvpr_failure_atlas/registry.json").read_text(encoding="utf-8"))
    block_failures = [row for row in atlas["rankedFailures"] if row["decision"] == "block"]
    summary = data["summary"]
    assert summary["board"] == "cvpr-remediation-board"
    assert summary["status"] == "ready"
    assert summary["blockTasks"] == summary["sourceBlockTasks"]
    assert summary["unownedTasks"] == 0
    assert summary["controlledTasks"] == summary["blockTasks"]
    assert summary["criticalTasks"] >= 0
    assert summary["families"] == len({row["family"] for row in block_failures})
    assert summary["systems"] == len({row["system"] for row in block_failures})
    assert summary["playbookPlays"] == 8
    assert summary["coveredThemes"] == 8
    assert summary["receiptStatus"] == "ready"
    assert summary["receiptArtifacts"] == 7
    assert len(data["tasks"]) == summary["blockTasks"]
    for task in data["tasks"]:
        assert task["decision"] == "block"
        assert task["owner"]
        assert task["page"].endswith(".html")
        assert task["registry"].startswith("analysis/")
        assert task["controls"]
        assert task["acceptanceAction"]
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Remediation Board",
        "Blocked Case Queue",
        "cvpr-failure-atlas.html",
        "cvpr-demo-playbook.html",
        "cvpr-theme-release-matrix.html",
        "cvpr-colab-run-receipt.html",
        "cvpr-remediation-sprint-plan.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR remediation board: {summary['blockTasks']} block tasks")


if __name__ == "__main__":
    main()

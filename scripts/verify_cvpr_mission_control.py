"""Verify the CVPR mission control dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_mission_control/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["systems"] == 11
    assert summary["stages"] == 33
    assert summary["demos"] == 41
    assert summary["arenaPairings"] == 328
    assert summary["playbookPlays"] == 8
    assert summary["implementedBenches"] == 11
    assert summary["missingImplementations"] == 0
    assert summary["benchCases"] == 44
    assert summary["benchBlock"] == 0
    assert summary["status"] == "interactive"
    assert len(data["actions"]) == 8
    assert len(data["benches"]) == 11
    assert all(row["implementationPage"] for row in data["actions"])
    assert all(row["status"] == "interactive" for row in data["benches"])
    page = (ROOT / "cvpr-mission-control.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Mission Control",
        "Operator dashboard",
        "Next Operator Actions",
        "Bench Fleet",
        "cvpr-production-release-brief.html",
        "cvpr-demo-arena.html",
        "cvpr-demo-playbook.html",
        "cvpr-theme-release-matrix.html",
        "cvpr-remediation-board.html",
        "cvpr-remediation-sprint-plan.html",
        "cvpr-constraint-generation-bench.html",
        "cvpr-vlm-answer-verification-bench.html",
        "cvpr-metric-geometry-bench.html",
        "cvpr-gaussian-splatting-bench.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-mission-control/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-mission-control/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-mission-control/tests/core.test.js").exists()
    print(
        f"verified CVPR mission control: {summary['systems']} systems, "
        f"{summary['implementedBenches']} benches, {summary['benchCases']} cases"
    )


if __name__ == "__main__":
    main()

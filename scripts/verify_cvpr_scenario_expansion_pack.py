"""Verify the CVPR scenario expansion pack."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_scenario_expansion_pack/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-scenario-expansion-pack"
    assert summary["status"] == "ready"
    assert summary["scenarios"] == 12
    assert summary["families"] == 6
    assert summary["systems"] == 2
    assert summary["themes"] == 2
    assert summary["ship"] + summary["retest"] + summary["block"] == 12
    assert summary["block"] <= 2
    assert summary["gauntletStatus"] == "release"
    assert summary["roadmapStatus"] == "ready"
    assert summary["visualQaStatus"] == "ready"
    assert summary["fullStackStatus"] == "valid"
    assert len(data["scenarioRows"]) == 12
    assert {row["family"] for row in data["scenarioRows"]} == {
        "rare-object",
        "adversarial-text",
        "unsupported-query",
        "spatial-ambiguity",
        "temporal-mismatch",
        "provenance-conflict",
    }
    assert {row["system"] for row in data["scenarioRows"]} == {"open-vocab", "grounded-answer"}
    assert all(row["sourceGauntletRow"] for row in data["scenarioRows"])
    assert all(row["command"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["scenarioRows"])
    page = (ROOT / "cvpr-scenario-expansion-pack.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Scenario Expansion Pack",
        "Scenario Rows",
        "Scenario Expansion Gate",
        "rare-object",
        "adversarial-text",
        "unsupported-query",
        "cvpr-cross-theme-incident-gauntlet.html",
        "cvpr-grounded-answer-courtroom.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-scenario-expansion-pack/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-scenario-expansion-pack/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-scenario-expansion-pack/tests/core.test.js").exists()
    print(f"verified CVPR scenario expansion pack: {summary['scenarios']} scenarios, status {summary['status']}")


if __name__ == "__main__":
    main()

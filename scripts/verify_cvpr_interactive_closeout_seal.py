"""Verify the CVPR interactive closeout seal."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_closeout_seal/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-closeout-seal"
LAYERS = {
    "coverage",
    "console",
    "scenario-runner",
    "triage-board",
    "release-pack",
    "audit-ledger",
    "command-center",
    "health-monitor",
    "drift-sentinel",
    "rollback-drillbook",
    "rollback-rehearsal",
}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["closeoutLayers"]
    assert summary["seal"] == "cvpr-interactive-closeout-seal"
    assert summary["status"] == "closeout-ready"
    assert summary["layers"] == 11
    assert summary["sealedLayers"] == 11
    assert summary["pages"] == 11
    assert summary["registries"] == 11
    assert summary["packages"] == 11
    assert summary["validators"] == 11
    assert summary["packageTests"] == 11
    assert summary["demos"] == 40
    assert summary["themes"] == 8
    assert summary["waves"] == 5
    assert summary["artifacts"] == 120
    assert summary["controls"] == 200
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["driftChecks"] == 18
    assert summary["blockedChecks"] == 0
    assert summary["rollbackDrills"] == 6
    assert summary["rollbackRehearsals"] == 6
    assert summary["holds"] == 0
    assert len(rows) == 11
    assert {row["layer"] for row in rows} == LAYERS
    assert all(row["status"] == row["readyStatus"] for row in rows)
    assert all(row["pageExists"] for row in rows)
    assert all(row["registryExists"] for row in rows)
    assert all(row["packageExists"] for row in rows)
    assert all(row["validatorExists"] for row in rows)
    assert all(row["packageTestExists"] for row in rows)
    assert all((ROOT / row["page"]).exists() for row in rows)
    assert all((ROOT / row["registry"]).exists() for row in rows)
    assert all((ROOT / row["package"]).exists() for row in rows)
    assert all((ROOT / row["validator"]).exists() for row in rows)
    assert all((ROOT / row["package"] / "tests/core.test.js").exists() for row in rows)
    page = (ROOT / "cvpr-interactive-closeout-seal.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Closeout Seal",
        "Closeout Gate",
        "coverage",
        "rollback-rehearsal",
        "cvpr-interactive-rollback-rehearsal-lab.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive closeout seal: {summary['layers']} layers, {summary['status']}")


if __name__ == "__main__":
    main()

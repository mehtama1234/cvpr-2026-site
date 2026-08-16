"""Verify the CVPR 3D and temporal rollback stress lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_3d_temporal_rollback_stress_lab/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-3d-temporal-rollback-stress-lab"
    assert summary["status"] == "ready"
    assert summary["stressRows"] == 6
    assert summary["systems"] == 2
    assert summary["rollbackMisses"] == 0
    assert summary["block"] == 0
    assert summary["rehearsalStatus"] == "release"
    assert summary["scenarioStatus"] == "ready"
    assert summary["fullStackStatus"] == "valid"
    assert len(data["stressRows"]) == 6
    assert {row["system"] for row in data["stressRows"]} == {"3d", "temporal"}
    assert all(row["rollback"]["elapsedMinutes"] <= row["rollback"]["targetMinutes"] for row in data["stressRows"])
    assert all(row["decision"] in {"watch", "rehearse"} for row in data["stressRows"])
    assert all(row["command"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["stressRows"])
    page = (ROOT / "cvpr-3d-temporal-rollback-stress-lab.html").read_text(encoding="utf-8")
    for token in (
        "CVPR 3D Temporal Rollback Stress Lab",
        "Rollback Stress Rows",
        "Rollback Stress Gate",
        "cvpr-3d-edit-provenance-room.html",
        "cvpr-temporal-counterfactual-lab.html",
        "cvpr-remediation-rollback-rehearsal-lab.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-3d-temporal-rollback-stress-lab/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-3d-temporal-rollback-stress-lab/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-3d-temporal-rollback-stress-lab/tests/core.test.js").exists()
    print(f"verified CVPR 3D temporal rollback stress lab: {summary['stressRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

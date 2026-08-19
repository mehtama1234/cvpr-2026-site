"""Verify the CVPR remediation command center demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_command_center/registry.json"
PAGE = ROOT / "cvpr-remediation-command-center.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-command-center"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-remediation-command-center"
    assert summary["status"] == "block"
    assert summary["surfaces"] == 7
    assert summary["readySurfaces"] == 5
    assert summary["gauntletBlocks"] == 23
    assert summary["actionableRows"] == 53
    assert summary["clearedBlocks"] == 23
    assert summary["postBlock"] == 0
    assert summary["promote"] == 18
    assert summary["monitor"] == 35
    assert summary["canaryRollback"] == 0
    assert summary["rollbackDrills"] == 12
    assert summary["rehearsalMisses"] == 0
    assert summary["ledgerStatus"] == "inspect"
    assert len(data["surfaceRows"]) == 7
    assert sum(1 for row in data["surfaceRows"] if row["actual"] == row["expected"]) == summary["readySurfaces"]
    assert all(row["surface"].endswith(".html") for row in data["surfaceRows"])
    assert all(row["evidence"].startswith("analysis/") for row in data["surfaceRows"])
    assert all(row["command"].startswith("python3 scripts/verify_cvpr_") for row in data["surfaceRows"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Remediation Command Center",
        "Operator Surfaces",
        "cvpr-remediation-audit-ledger.html",
        "cvpr-remediation-rollback-rehearsal-lab.html",
        "release command center",
        "Command Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR remediation command center: {summary['readySurfaces']} surfaces, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

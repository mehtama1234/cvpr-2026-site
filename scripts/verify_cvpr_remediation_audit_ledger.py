"""Verify the CVPR remediation audit ledger demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_audit_ledger/registry.json"
PAGE = ROOT / "cvpr-remediation-audit-ledger.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-audit-ledger"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-remediation-audit-ledger"
    assert summary["status"] == "inspect"
    assert summary["stages"] == 7
    assert summary["readyStages"] == sum(1 for row in data["ledgerRows"] if row["ready"])
    assert summary["gauntletBlocks"] == 23
    assert summary["actionableRows"] == 53
    assert summary["clearedBlocks"] == 23
    assert summary["postBlock"] == 0
    assert summary["promote"] == 18
    assert summary["monitor"] == 35
    assert summary["canaryRollback"] == 0
    assert summary["rollbackDrills"] == 12
    assert summary["rehearsalMisses"] == 0
    assert summary["themes"] == 8
    assert summary["incidents"] == 7
    assert len(data["ledgerRows"]) == 7
    assert all(row["evidence"].startswith("analysis/") for row in data["ledgerRows"])
    assert all(row["command"].startswith("python3 scripts/verify_cvpr_") for row in data["ledgerRows"])
    assert all(row["surface"].endswith(".html") for row in data["ledgerRows"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Remediation Audit Ledger",
        "Ledger Rows",
        "cvpr-remediation-rollback-rehearsal-lab.html",
        "cvpr-release-audit-trail.html",
        "Ledger Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR remediation audit ledger: {summary['readyStages']} stages, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

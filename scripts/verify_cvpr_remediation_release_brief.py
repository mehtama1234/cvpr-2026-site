"""Verify the CVPR remediation release brief demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_release_brief/registry.json"
PAGE = ROOT / "cvpr-remediation-release-brief.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-release-brief"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-remediation-release-brief"
    assert summary["status"] == "release"
    assert summary["gate"] == "block"
    assert summary["posture"] == "review"
    assert summary["commandStatus"] == "block"
    assert summary["ledgerStatus"] == "inspect"
    assert summary["readySurfaces"] == 5
    assert summary["surfaces"] == 7
    assert summary["readyStages"] == 5
    assert summary["stages"] == 7
    assert summary["gauntletBlocks"] == 23
    assert summary["actionableRows"] == 53
    assert summary["clearedBlocks"] == 23
    assert summary["postBlock"] == 0
    assert summary["promote"] == 18
    assert summary["monitor"] == 35
    assert summary["canaryRollback"] == 0
    assert summary["rollbackDrills"] == 12
    assert summary["rehearsalMisses"] == 0
    assert summary["packageTests"] >= 148
    assert len(data["evidence"]) == 6
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Remediation Release Brief",
        "Release Position",
        "Evidence Chain",
        "cvpr-remediation-command-center.html",
        "cvpr-remediation-audit-ledger.html",
        "production brief",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR remediation release brief: {summary['gate']} gate, "
        f"{summary['posture']} posture"
    )


if __name__ == "__main__":
    main()

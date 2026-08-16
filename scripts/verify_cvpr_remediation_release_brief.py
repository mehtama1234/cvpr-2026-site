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
    assert summary["gate"] == "release"
    assert summary["posture"] == "controlled-watch"
    assert summary["commandStatus"] == "operator-ready"
    assert summary["ledgerStatus"] == "complete"
    assert summary["readySurfaces"] == summary["surfaces"] == 7
    assert summary["readyStages"] == summary["stages"] == 7
    assert summary["gauntletBlocks"] == 14
    assert summary["clearedBlocks"] == 14
    assert summary["postBlock"] == 0
    assert summary["promote"] == 12
    assert summary["monitor"] == 17
    assert summary["canaryRollback"] == 0
    assert summary["rollbackDrills"] == 12
    assert summary["rehearsalMisses"] == 0
    assert summary["fullStackStatus"] == "valid"
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

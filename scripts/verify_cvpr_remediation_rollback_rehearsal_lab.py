"""Verify the CVPR remediation rollback rehearsal lab demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json"
PAGE = ROOT / "cvpr-remediation-rollback-rehearsal-lab.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-rollback-rehearsal-lab"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-remediation-rollback-rehearsal-lab"
    assert summary["status"] == "release"
    assert summary["sourceDemo"] == "cvpr-remediation-rollback-drillbook"
    assert summary["sourceDrills"] == 12
    assert summary["rehearsals"] == 12
    assert summary["passing"] == 12
    assert summary["misses"] == 0
    assert summary["critical"] == 2
    assert summary["high"] == 9
    assert summary["focused"] == 1
    assert summary["themes"] == 8
    assert summary["incidents"] == 7
    assert len(data["rehearsalRows"]) == 12
    assert all(row["elapsedMinutes"] <= row["targetMinutes"] for row in data["rehearsalRows"])
    assert all(row["validationCommand"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["rehearsalRows"])
    assert all(len(row["steps"]) == 5 for row in data["rehearsalRows"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Remediation Rollback Rehearsal Lab",
        "Rehearsal Runs",
        "cvpr-remediation-rollback-drillbook.html",
        "cvpr-remediation-canary-monitor.html",
        "audit trail",
        "Rehearsal Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR remediation rollback rehearsal lab: {summary['passing']} rehearsals, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

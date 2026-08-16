"""Verify the CVPR remediation rollback drillbook demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_rollback_drillbook/registry.json"
PAGE = ROOT / "cvpr-remediation-rollback-drillbook.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-rollback-drillbook"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-remediation-rollback-drillbook"
    assert summary["status"] == "ready"
    assert summary["sourceDemo"] == "cvpr-remediation-canary-monitor"
    assert summary["sourceCanaries"] == 29
    assert summary["drills"] == 12
    assert summary["readyDrills"] == 12
    assert summary["critical"] >= 2
    assert summary["high"] >= 6
    assert summary["promotedDrills"] == 8
    assert summary["monitoredDrills"] == 4
    assert summary["themes"] >= 7
    assert summary["incidents"] >= 3
    assert summary["canaryRollback"] == 0
    assert len(data["drills"]) == 12
    assert all(drill["ownerSurface"].endswith(".html") for drill in data["drills"])
    assert all(drill["responseCommand"].startswith("python3 scripts/verify_cvpr_remediation_") for drill in data["drills"])
    assert all(drill["validationCommand"] == "python3 scripts/validate_cvpr_full_stack.py" for drill in data["drills"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Remediation Rollback Drillbook",
        "Rollback Drills",
        "cvpr-remediation-canary-monitor.html",
        "cvpr-remediation-promotion-board.html",
        "release drillbook",
        "Drill Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR remediation rollback drillbook: {summary['readyDrills']} drills, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

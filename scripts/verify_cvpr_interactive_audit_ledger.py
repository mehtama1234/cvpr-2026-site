"""Verify the CVPR interactive audit ledger."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_audit_ledger/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-audit-ledger"
EVENTS = {
    "coverage-sealed",
    "console-sealed",
    "scenario-runner-sealed",
    "triage-sealed",
    "release-pack-sealed",
}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    events = data["auditEvents"]
    assert summary["ledger"] == "cvpr-interactive-audit-ledger"
    assert summary["status"] == "ledger-ready"
    assert summary["events"] == 5
    assert summary["readyEvents"] == 5
    assert summary["pages"] == 5
    assert summary["registries"] == 5
    assert summary["packages"] == 5
    assert summary["validators"] == 5
    assert summary["packageTests"] == 5
    assert summary["uniqueFingerprints"] == 5
    assert summary["demos"] == 40
    assert summary["artifacts"] == 120
    assert summary["controls"] == 200
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["holds"] == 0
    assert len(events) == 5
    assert {event["event"] for event in events} == EVENTS
    assert [event["sequence"] for event in events] == [1, 2, 3, 4, 5]
    assert len({event["fingerprint"] for event in events}) == 5
    assert all(len(event["fingerprint"]) == 16 for event in events)
    assert all(event["status"] == event["expectedStatus"] for event in events)
    assert all(event["registryExists"] for event in events)
    assert all(event["pageExists"] for event in events)
    assert all(event["packageExists"] for event in events)
    assert all(event["validatorExists"] for event in events)
    assert all(event["packageTestExists"] for event in events)
    assert all((ROOT / event["registry"]).exists() for event in events)
    assert all((ROOT / event["page"]).exists() for event in events)
    assert all((ROOT / event["package"]).exists() for event in events)
    assert all((ROOT / event["validator"]).exists() for event in events)
    assert all((ROOT / event["package"] / "tests/core.test.js").exists() for event in events)
    page = (ROOT / "cvpr-interactive-audit-ledger.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Audit Ledger",
        "Ledger Gate",
        "coverage-sealed",
        "console-sealed",
        "scenario-runner-sealed",
        "triage-sealed",
        "release-pack-sealed",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive audit ledger: {summary['events']} events, {summary['status']}")


if __name__ == "__main__":
    main()

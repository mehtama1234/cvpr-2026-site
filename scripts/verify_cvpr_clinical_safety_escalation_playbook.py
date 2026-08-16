"""Verify the CVPR clinical and safety escalation playbook."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_clinical_safety_escalation_playbook/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-clinical-safety-escalation-playbook"
    assert summary["status"] == "ready"
    assert summary["rows"] == 8
    assert summary["systems"] == 2
    assert summary["canaryRollback"] == 0
    assert summary["rollbackStressStatus"] == "ready"
    assert summary["fullStackStatus"] == "valid"
    assert summary["rollbackRehearsal"] <= 1
    assert summary["humanReview"] + summary["safetyHold"] + summary["rollbackRehearsal"] >= 3
    assert len(data["escalationRows"]) == 8
    assert {row["system"] for row in data["escalationRows"]} == {
        "medical-vision-validation",
        "driving-vla-release-gate",
    }
    assert all(row["decision"] in {"release-watch", "human-review", "safety-hold", "rollback-rehearsal"} for row in data["escalationRows"])
    assert all(row["responseCommand"].startswith("python3 scripts/verify_cvpr_remediation") for row in data["escalationRows"])
    assert all(row["command"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["escalationRows"])
    page = (ROOT / "cvpr-clinical-safety-escalation-playbook.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Clinical Safety Escalation Playbook",
        "Escalation Rows",
        "Escalation Gate",
        "cvpr-clinical-shift-bench.html",
        "cvpr-driving-safety-bench.html",
        "cvpr-remediation-canary-monitor.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-clinical-safety-escalation-playbook/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-clinical-safety-escalation-playbook/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-clinical-safety-escalation-playbook/tests/core.test.js").exists()
    print(f"verified CVPR clinical safety escalation playbook: {summary['rows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

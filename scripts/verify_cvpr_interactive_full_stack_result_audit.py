"""Verify the CVPR interactive full-stack result audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_full_stack_result_audit/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-full-stack-result-audit"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["resultRows"]
    assert summary["audit"] == "cvpr-interactive-full-stack-result-audit"
    assert summary["status"] == "result-audit-ready"
    assert summary["sourceCommandAudit"] == "analysis/cvpr_interactive_validator_command_audit/registry.json"
    assert summary["sourceFullStack"] == "analysis/cvpr_full_stack_validation/registry.json"
    assert summary["targets"] == 13
    assert summary["readyTargets"] == 13
    assert summary["missingTargets"] == 0
    assert summary["executedCommands"] == 26
    assert summary["fullStackStatus"] == "valid"
    assert summary["commandAuditTargets"] == 13
    assert summary["demos"] == 40
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["holds"] == 0
    assert len(rows) == 13
    assert all(row["status"] == "result-ready" for row in rows)
    assert all(row["builderSeen"] for row in rows)
    assert all(row["verifierSeen"] for row in rows)
    assert all(row["builderReturnCode"] == 0 for row in rows)
    assert all(row["verifierReturnCode"] == 0 for row in rows)
    page = (ROOT / "cvpr-interactive-full-stack-result-audit.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Full-Stack Result Audit",
        "Result Gate",
        "fullStack=valid",
        "validator-command-audit",
        "package-integrity-audit",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive full-stack result audit: {summary['targets']} targets, {summary['status']}")


if __name__ == "__main__":
    main()

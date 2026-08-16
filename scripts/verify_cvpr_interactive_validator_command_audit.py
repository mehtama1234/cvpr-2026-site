"""Verify the CVPR interactive validator command audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_validator_command_audit/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-validator-command-audit"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["commandRows"]
    assert summary["audit"] == "cvpr-interactive-validator-command-audit"
    assert summary["status"] == "command-audit-ready"
    assert summary["sourceHandoff"] == "analysis/cvpr_interactive_handoff_bundle/registry.json"
    assert summary["targets"] == 13
    assert summary["readyTargets"] == 13
    assert summary["missingTargets"] == 0
    assert summary["commandsPresent"] == 26
    assert summary["handoffItems"] == 11
    assert summary["demos"] == 40
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["holds"] == 0
    assert len(rows) == 13
    assert all(row["status"] == "command-ready" for row in rows)
    assert all(row["builderPresent"] for row in rows)
    assert all(row["verifierPresent"] for row in rows)
    assert all(row["builderExists"] for row in rows)
    assert all(row["verifierExists"] for row in rows)
    assert all((ROOT / row["builder"]).exists() for row in rows)
    assert all((ROOT / row["verifier"]).exists() for row in rows)
    page = (ROOT / "cvpr-interactive-validator-command-audit.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Validator Command Audit",
        "Command Gate",
        "package-integrity-audit",
        "navigation-manifest-audit",
        "rollback-rehearsal",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive validator command audit: {summary['targets']} targets, {summary['status']}")


if __name__ == "__main__":
    main()

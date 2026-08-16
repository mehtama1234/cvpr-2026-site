"""Verify the CVPR interactive command center."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_command_center/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-command-center"
SURFACES = {"coverage", "console", "scenario-runner", "triage-board", "release-pack", "audit-ledger"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["commandSurfaces"]
    assert summary["commandCenter"] == "cvpr-interactive-command-center"
    assert summary["status"] == "command-center-ready"
    assert summary["surfaces"] == 6
    assert summary["readySurfaces"] == 6
    assert summary["pages"] == 6
    assert summary["registries"] == 6
    assert summary["validators"] == 6
    assert summary["demos"] == 40
    assert summary["themes"] == 8
    assert summary["waves"] == 5
    assert summary["artifacts"] == 120
    assert summary["controls"] == 200
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["auditEvents"] == 5
    assert summary["fingerprints"] == 5
    assert summary["holds"] == 0
    assert len(rows) == 6
    assert {row["surface"] for row in rows} == SURFACES
    assert all(row["status"] == row["readyStatus"] for row in rows)
    assert all(row["pageExists"] for row in rows)
    assert all(row["registryExists"] for row in rows)
    assert all(row["validatorExists"] for row in rows)
    assert all((ROOT / row["page"]).exists() for row in rows)
    assert all((ROOT / row["registry"]).exists() for row in rows)
    assert all((ROOT / row["validator"]).exists() for row in rows)
    page = (ROOT / "cvpr-interactive-command-center.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Command Center",
        "Command Gate",
        "coverage",
        "console",
        "scenario-runner",
        "triage-board",
        "release-pack",
        "audit-ledger",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive command center: {summary['surfaces']} surfaces, {summary['status']}")


if __name__ == "__main__":
    main()

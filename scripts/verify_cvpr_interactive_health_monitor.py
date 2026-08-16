"""Verify the CVPR interactive health monitor."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_health_monitor/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-health-monitor"
SURFACES = {"coverage", "console", "scenario-runner", "triage-board", "release-pack", "audit-ledger", "full-stack"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    probes = data["monitorProbes"]
    assert summary["monitor"] == "cvpr-interactive-health-monitor"
    assert summary["status"] == "monitor-ready"
    assert summary["surfaces"] == 6
    assert summary["probes"] == 32
    assert summary["passingProbes"] == 32
    assert summary["blockedProbes"] == 0
    assert summary["demos"] == 40
    assert summary["artifacts"] == 120
    assert summary["controls"] == 200
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["auditEvents"] == 5
    assert summary["holds"] == 0
    assert len(probes) == 32
    assert {probe["surface"] for probe in probes} == SURFACES
    assert all(probe["status"] == "pass" for probe in probes)
    assert all(probe["observed"] == probe["expected"] for probe in probes)
    page = (ROOT / "cvpr-interactive-health-monitor.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Health Monitor",
        "Monitor Gate",
        "ready-status",
        "page-present",
        "validator-present",
        "full-stack",
        "report-present",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive health monitor: {summary['probes']} probes, {summary['status']}")


if __name__ == "__main__":
    main()

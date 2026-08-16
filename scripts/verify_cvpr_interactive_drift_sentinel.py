"""Verify the CVPR interactive drift sentinel."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_drift_sentinel/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-drift-sentinel"
CATEGORIES = {"command-vs-health", "command-vs-release", "release-vs-ledger"}
METRICS = {"demos", "artifacts", "controls", "scenarioCases", "promoteDecisions", "holds"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    checks = data["driftChecks"]
    assert summary["sentinel"] == "cvpr-interactive-drift-sentinel"
    assert summary["status"] == "sentinel-ready"
    assert summary["checks"] == 18
    assert summary["passingChecks"] == 18
    assert summary["blockedChecks"] == 0
    assert summary["categories"] == 3
    assert summary["demos"] == 40
    assert summary["artifacts"] == 120
    assert summary["controls"] == 200
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["auditEvents"] == 5
    assert summary["holds"] == 0
    assert len(checks) == 18
    assert {check["category"] for check in checks} == CATEGORIES
    assert {check["metric"] for check in checks} == METRICS
    assert all(check["status"] == "pass" for check in checks)
    assert all(check["left"] == check["right"] for check in checks)
    page = (ROOT / "cvpr-interactive-drift-sentinel.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Drift Sentinel",
        "Sentinel Gate",
        "command-vs-health",
        "command-vs-release",
        "release-vs-ledger",
        "scenarioCases",
        "promoteDecisions",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive drift sentinel: {summary['checks']} checks, {summary['status']}")


if __name__ == "__main__":
    main()

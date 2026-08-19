"""Verify the CVPR remediation canary monitor demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_canary_monitor/registry.json"
PAGE = ROOT / "cvpr-remediation-canary-monitor.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-canary-monitor"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-remediation-canary-monitor"
    assert summary["status"] == "watching"
    assert summary["sourceDemo"] == "cvpr-remediation-promotion-board"
    assert summary["rows"] == 53
    assert summary["sourcePromotions"] == 53
    assert summary["promotedRows"] == sum(1 for row in data["canaryRows"] if row["promotion"] == "promote")
    assert summary["monitoredRows"] == sum(1 for row in data["canaryRows"] if row["promotion"] == "monitor")
    assert summary["clean"] == sum(1 for row in data["canaryRows"] if row["canaryStatus"] == "clean")
    assert summary["watch"] == sum(1 for row in data["canaryRows"] if row["canaryStatus"] == "watch")
    assert summary["rollback"] == 0
    assert summary["maxRollbackRisk"] <= 36
    assert summary["maxDrift"] <= 12
    assert summary["themes"] == 8
    assert summary["incidents"] == 7
    assert len(data["canaryRows"]) == 53
    assert all(row["canaryStatus"] in {"clean", "watch"} for row in data["canaryRows"])
    assert all(row["responseCommand"].startswith("python3 scripts/verify_cvpr_remediation_") for row in data["canaryRows"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Remediation Canary Monitor",
        "Canary Queue",
        "cvpr-remediation-promotion-board.html",
        "cvpr-remediation-retest-harness.html",
        "post-launch monitoring",
        "Monitoring Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR remediation canary monitor: {summary['clean']} clean, "
        f"{summary['watch']} watch"
    )


if __name__ == "__main__":
    main()

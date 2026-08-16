"""Verify the CVPR remediation retest harness demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_retest_harness/registry.json"
PAGE = ROOT / "cvpr-remediation-retest-harness.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-retest-harness"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-remediation-retest-harness"
    assert summary["status"] == "release"
    assert summary["sourceDemo"] == "cvpr-gauntlet-remediation-sprint"
    assert summary["retestRows"] == 29
    assert summary["sourceActions"] == 29
    assert summary["preBlock"] == 14
    assert summary["postBlock"] == 0
    assert summary["clearedBlocks"] == 14
    assert summary["postRelease"] >= 12
    assert summary["themes"] == 8
    assert summary["incidents"] == 4
    assert summary["maxPostRisk"] <= 66
    assert summary["minPostEvidence"] >= 48
    assert len(data["retestRows"]) == 29
    assert all(row["afterDecision"] != "block" for row in data["retestRows"])
    assert all(row["acceptanceCheck"].startswith("retest ") for row in data["retestRows"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Remediation Retest Harness",
        "Retest Matrix",
        "cvpr-cross-theme-incident-gauntlet.html",
        "cvpr-gauntlet-remediation-sprint.html",
        "Release Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR remediation retest harness: {summary['retestRows']} retests, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

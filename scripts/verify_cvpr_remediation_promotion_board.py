"""Verify the CVPR remediation promotion board demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_promotion_board/registry.json"
PAGE = ROOT / "cvpr-remediation-promotion-board.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-promotion-board"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-remediation-promotion-board"
    assert summary["status"] == "release"
    assert summary["sourceDemo"] == "cvpr-remediation-retest-harness"
    assert summary["rows"] == 29
    assert summary["sourceRetests"] == 29
    assert summary["promote"] == 12
    assert summary["monitor"] == 17
    assert summary["hold"] == 0
    assert summary["clearedBlocks"] == 14
    assert summary["promotedRelease"] == 12
    assert summary["themes"] == 8
    assert summary["incidents"] == 4
    assert summary["maxPromotedRisk"] <= 42
    assert summary["minPromotedEvidence"] >= 60
    assert len(data["promotionRows"]) == 29
    assert all(row["verificationCommand"] == "python3 scripts/verify_cvpr_remediation_retest_harness.py" for row in data["promotionRows"])
    assert all(row["promotion"] in {"promote", "monitor", "hold"} for row in data["promotionRows"])
    assert all(row["promotion"] != "hold" for row in data["promotionRows"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Remediation Promotion Board",
        "Promotion Queue",
        "cvpr-remediation-retest-harness.html",
        "cvpr-gauntlet-remediation-sprint.html",
        "promote only post-release rows",
        "Release Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR remediation promotion board: {summary['promote']} promote, "
        f"{summary['monitor']} monitor"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR Colab promotion delta report."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_colab_promotion_delta/registry.json"
PAGE = ROOT / "cvpr-colab-promotion-delta.html"
PACKAGE = ROOT / "source-code/learning/cvpr-colab-promotion-delta"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["delta"] == "cvpr-colab-promotion-delta"
    assert summary["status"] == "release"
    assert summary["cases"] > 0
    assert summary["jobs"] > 0
    assert summary["missing"] == 0
    assert summary["modeMismatches"] == 0
    assert summary["regressions"] == 0
    assert summary["maxReadinessDrop"] == 0
    assert summary["promotionStatus"] == "valid"
    assert len(data["rows"]) == summary["cases"]
    for row in data["rows"]:
        assert row["readinessDelta"] == 0
        assert row["promotedFrom"] == "live-colab"
        assert row["regression"] is False
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Promotion Delta",
        "Regression Gate",
        "Case Deltas",
        "cvpr-colab-live-intake.html",
        "cvpr-colab-evidence-ledger.html",
        "cvpr-colab-operations-dashboard.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR Colab promotion delta: {summary['cases']} cases, {summary['regressions']} regressions")


if __name__ == "__main__":
    main()

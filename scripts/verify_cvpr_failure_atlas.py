"""Verify the CVPR cross-theme failure atlas."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_failure_atlas/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["cases"] == 44
    assert summary["families"] == 11
    assert summary["block"] == 0
    assert summary["review"] == 0
    assert summary["release"] == 44
    assert summary["maxSeverity"] == 0
    assert summary["status"] == "interactive"
    assert len(data["families"]) == 11
    assert len(data["rankedFailures"]) == 44
    assert data["rankedFailures"][0]["severity"] >= data["rankedFailures"][-1]["severity"]
    assert {row["family"] for row in data["rankedFailures"]} == {
        "safety risk",
        "provenance gap",
        "clinical shift",
        "evidence loss",
        "localization gap",
        "temporal drift",
        "fabricated detail",
        "identity damage",
        "unsupported answer",
        "metric geometry drift",
        "splat edit leakage",
    }
    page = (ROOT / "cvpr-failure-atlas.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Failure Atlas",
        "Cross-theme failure atlas",
        "Failure Families",
        "Ranked Failure Cases",
        "cvpr-mission-control.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-failure-atlas/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-failure-atlas/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-failure-atlas/tests/core.test.js").exists()
    print(
        f"verified CVPR failure atlas: {summary['cases']} cases, "
        f"{summary['families']} families"
    )


if __name__ == "__main__":
    main()

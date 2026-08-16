"""Verify the CVPR second-round closeout reseal."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_second_round_closeout_reseal/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-second-round-closeout-reseal"
    assert summary["status"] == "sealed"
    assert summary["rows"] == 6
    assert summary["sealedRows"] == 6
    assert summary["secondRoundDemos"] == 5
    assert summary["replayResults"] == 40
    assert summary["visualQaSurfaces"] == 8
    assert summary["scenarioRows"] == 12
    assert summary["rollbackStressRows"] == 6
    assert summary["clinicalSafetyRows"] == 8
    assert summary["fullStackStatus"] == "valid"
    assert summary["packageTests"] >= 80
    assert len(data["closeoutRows"]) == 6
    assert all(row["status"] == "sealed" for row in data["closeoutRows"])
    assert all(row["actual"] == row["expected"] for row in data["closeoutRows"])
    assert all(row["closeoutCommand"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["closeoutRows"])
    page = (ROOT / "cvpr-second-round-closeout-reseal.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Second-Round Closeout Reseal",
        "Closeout Rows",
        "Reseal Gate",
        "cvpr-second-round-demo-roadmap.html",
        "cvpr-remediation-closeout-pack.html",
        "cvpr-validation-center.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-second-round-closeout-reseal/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-second-round-closeout-reseal/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-second-round-closeout-reseal/tests/core.test.js").exists()
    print(f"verified CVPR second-round closeout reseal: {summary['sealedRows']}/{summary['rows']} rows sealed")


if __name__ == "__main__":
    main()

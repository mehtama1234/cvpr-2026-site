"""Verify the CVPR visual QA sweep dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_visual_qa_sweep_dashboard/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] == "ready"
    assert summary["surfaces"] == 8
    assert summary["readySurfaces"] == 8
    assert summary["requiredTokensMissing"] == 0
    assert summary["brokenLocalLinks"] == 0
    assert summary["todoMarkers"] == 0
    assert summary["highLayoutRisk"] == 0
    assert summary["roadmapStatus"] == "ready"
    assert summary["closeoutStatus"] == "sealed"
    assert summary["fullStackStatus"] == "valid"
    assert len(data["qaRows"]) == 8
    assert all(row["status"] == "ready" for row in data["qaRows"])
    assert all(row["requiredTokensPresent"] == row["requiredTokens"] for row in data["qaRows"])
    assert all(row["brokenLocalLinks"] == 0 for row in data["qaRows"])
    assert all(row["command"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["qaRows"])
    page = (ROOT / "cvpr-visual-qa-sweep-dashboard.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Visual QA Sweep Dashboard",
        "Visual QA Rows",
        "Visual QA Gate",
        "cvpr-second-round-demo-roadmap.html",
        "cvpr-colab-result-replay.html",
        "cvpr-validation-center.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-visual-qa-sweep-dashboard/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-visual-qa-sweep-dashboard/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-visual-qa-sweep-dashboard/tests/core.test.js").exists()
    print(f"verified CVPR visual QA sweep dashboard: {summary['readySurfaces']}/{summary['surfaces']} surfaces ready")


if __name__ == "__main__":
    main()

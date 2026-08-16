"""Verify the CVPR cross-theme incident gauntlet demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_cross_theme_incident_gauntlet/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-cross-theme-incident-gauntlet"
    assert summary["status"] == "release"
    assert summary["round"] == "second-round-cross-theme"
    assert summary["demos"] == 8
    assert summary["themes"] == 8
    assert summary["incidents"] == 4
    assert summary["gauntletRows"] == 32
    assert summary["sourceRelease"] == 8
    assert summary["review"] >= 8
    assert summary["block"] >= 1
    assert summary["maxRisk"] >= 68
    assert summary["minEvidence"] >= 40
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["demos"]) == 8
    assert len(data["incidents"]) == 4
    assert len(data["gauntletRows"]) == 32
    assert {row["incidentId"] for row in data["gauntletRows"]} == {
        "launch-audit",
        "gpu-brownout",
        "adversarial-content",
        "compound-launch",
    }
    assert all(row["signals"]["sourceStatus"] == "release" for row in data["gauntletRows"])
    page = (ROOT / "cvpr-cross-theme-incident-gauntlet.html").read_text(encoding="utf-8")
    for token in (
        "Cross-Theme Incident Gauntlet",
        "GPU brownout",
        "Adversarial content",
        "compound-launch",
        "cvpr-safety-deployment-simulator.html",
        "cvpr-provenance-red-team-arena.html",
        "gauntletDecision",
        "Release Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-cross-theme-incident-gauntlet/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-cross-theme-incident-gauntlet/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-cross-theme-incident-gauntlet/tests/core.test.js").exists()
    print(
        f"verified CVPR cross-theme incident gauntlet: {summary['gauntletRows']} rows, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

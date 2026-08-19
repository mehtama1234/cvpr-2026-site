"""Verify the CVPR cross-theme incident gauntlet demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_cross_theme_incident_gauntlet/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-cross-theme-incident-gauntlet"
    assert summary["status"] in {"release", "inspect"}
    assert summary["round"] == "second-round-cross-theme"
    assert summary["demos"] == 8
    assert summary["themes"] == 8
    assert summary["incidents"] == 7
    assert summary["incidentFamilies"] == 7
    assert summary["replayTargets"] >= 6
    assert summary["gauntletRows"] == 56
    assert summary["sourceRelease"] >= 7
    assert summary["review"] >= 16
    assert summary["block"] >= 12
    assert summary["maxRisk"] >= 68
    assert summary["minEvidence"] >= 40
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["demos"]) == 8
    assert len(data["incidents"]) == 7
    assert len(data["gauntletRows"]) == 56
    assert {row["incidentId"] for row in data["gauntletRows"]} == {
        "launch-audit",
        "rare-object-distractor",
        "adversarial-text-overlay",
        "unsupported-query",
        "gpu-brownout",
        "adversarial-content",
        "compound-launch",
    }
    assert all(incident["replayTarget"] for incident in data["incidents"])
    assert all(row["signals"]["sourceStatus"] in {"release", "inspect"} for row in data["gauntletRows"])
    expected_status = (
        "release"
        if summary["demos"] == 8
        and summary["themes"] == 8
        and summary["incidents"] == 7
        and summary["incidentFamilies"] == 7
        and summary["replayTargets"] >= 6
        and summary["gauntletRows"] == 56
        and summary["sourceRelease"] == 8
        and summary["review"] >= 16
        and summary["block"] >= 12
        and summary["maxRisk"] >= 68
        and summary["minEvidence"] >= 40
        else "inspect"
    )
    assert summary["status"] == expected_status
    page = (ROOT / "cvpr-cross-theme-incident-gauntlet.html").read_text(encoding="utf-8")
    for token in (
        "Cross-Theme Incident Gauntlet",
        "Rare-object distractor",
        "Adversarial text overlay",
        "Unsupported query",
        "GPU brownout",
        "Adversarial content",
        "compound-launch",
        "cvpr-colab-result-replay.html",
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

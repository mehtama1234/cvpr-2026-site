"""Verify the CVPR gauntlet remediation sprint demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_gauntlet_remediation_sprint/registry.json"
PAGE = ROOT / "cvpr-gauntlet-remediation-sprint.html"
PACKAGE = ROOT / "source-code/learning/cvpr-gauntlet-remediation-sprint"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-gauntlet-remediation-sprint"
    assert summary["status"] == "release"
    assert summary["sourceDemo"] == "cvpr-cross-theme-incident-gauntlet"
    assert summary["sourceRows"] == 32
    assert summary["actionableRows"] == 29
    assert summary["blockActions"] == 14
    assert summary["reviewActions"] == 15
    assert summary["sprints"] == 3
    assert summary["themes"] >= 8
    assert summary["incidents"] == 4
    assert summary["acceptanceChecks"] == summary["actionableRows"]
    assert summary["criticalActions"] >= 3
    assert len(data["sprints"]) == 3
    assert len(data["actions"]) == summary["actionableRows"]
    assert all(action["validationCommand"] == "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py" for action in data["actions"])
    assert all(action["page"].endswith(".html") for action in data["actions"])
    assert all(action["acceptanceCheck"] for action in data["actions"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Gauntlet Remediation Sprint",
        "Critical risk containment",
        "Blocked evidence repair",
        "Review hardening",
        "cvpr-cross-theme-incident-gauntlet.html",
        "cvpr-remediation-sprint-plan.html",
        "Release Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(
        f"verified CVPR gauntlet remediation sprint: {summary['actionableRows']} actions, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

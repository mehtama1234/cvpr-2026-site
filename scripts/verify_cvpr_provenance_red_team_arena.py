"""Verify the CVPR provenance red-team arena demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_provenance_red_team_arena/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-provenance-red-team-arena"
    assert summary["status"] == "release"
    assert summary["backlogGoal"] == "Provenance red-team arena"
    assert summary["backlogTasksCovered"] == 3
    assert summary["theme"] == "The frontier - new senses and new duties"
    assert summary["systems"] == ["adversarial-provenance-gate", "medical-vision-validation"]
    assert summary["benches"] == ["cvpr-adversarial-provenance-bench", "cvpr-clinical-shift-bench"]
    assert summary["cases"] == 4
    assert summary["attacks"] == 4
    assert summary["arenaRows"] == 16
    assert summary["gpuBackedCases"] == 8
    assert set(summary["proPlusJobs"]) == {"adversarial-provenance", "clinical-shift"}
    assert summary["review"] + summary["block"] > 0
    assert summary["maxDeploymentRisk"] >= 50
    assert summary["minEvidence"] >= 54
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["attacks"]) == 4
    assert len(data["redTeamRows"]) == 16
    assert all(row["runtimeEvidence"] == "cached-real" for row in data["redTeamRows"])
    assert all(row["gpuProvenance"]["runtime"] == "google-colab-pro-plus" for row in data["redTeamRows"])
    assert all(row["sourceBenchPage"] == "cvpr-adversarial-provenance-bench.html" for row in data["redTeamRows"])
    page = (ROOT / "cvpr-provenance-red-team-arena.html").read_text(encoding="utf-8")
    for token in (
        "Provenance Red-Team Arena",
        "watermark scrub",
        "perturbation camouflage",
        "unlearning-leak",
        "cvpr-demo-build-backlog.html",
        "cvpr-adversarial-provenance-bench.html",
        "cvpr-clinical-shift-bench.html",
        "scoreRedTeam",
        "Release Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-provenance-red-team-arena/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-provenance-red-team-arena/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-provenance-red-team-arena/tests/core.test.js").exists()
    print(
        f"verified CVPR provenance red-team arena: {summary['arenaRows']} rows, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

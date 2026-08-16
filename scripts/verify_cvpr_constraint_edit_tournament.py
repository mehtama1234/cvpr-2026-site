"""Verify the CVPR constraint edit tournament demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_constraint_edit_tournament/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-constraint-edit-tournament"
    assert summary["status"] == "release"
    assert summary["backlogGoal"] == "Constraint edit tournament"
    assert summary["backlogTasksCovered"] == 3
    assert summary["theme"] == "Making pixels from meaning"
    assert summary["systems"] == ["controllable-generation-studio", "restoration-reliability-stack"]
    assert summary["benches"] == ["cvpr-constraint-generation-bench", "cvpr-restoration-fidelity-bench"]
    assert summary["generationCases"] == 4
    assert summary["restorationCases"] == 4
    assert summary["policies"] == 3
    assert summary["matches"] == 48
    assert summary["gpuBackedCases"] == 8
    assert summary["block"] == 0
    assert summary["minConstraintScore"] >= 78
    assert summary["maxJointRisk"] <= 38
    assert summary["proPlusJobs"] == ["constraint-generation", "restoration-fidelity"]
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["policies"]) == 3
    assert len(data["tournamentRows"]) == 48
    assert all(row["generationBench"] == "cvpr-constraint-generation-bench" for row in data["tournamentRows"])
    assert all(row["restorationBench"] == "cvpr-restoration-fidelity-bench" for row in data["tournamentRows"])
    assert all(row["decision"] in {"release", "review", "block"} for row in data["tournamentRows"])
    assert all(prov["runtime"] == "google-colab-pro-plus" for row in data["tournamentRows"] for prov in row["provenance"])
    page = (ROOT / "cvpr-constraint-edit-tournament.html").read_text(encoding="utf-8")
    for token in (
        "Constraint Edit Tournament",
        "layout",
        "identity",
        "fabricated-detail risk",
        "cvpr-demo-build-backlog.html",
        "cvpr-constraint-generation-bench.html",
        "cvpr-restoration-fidelity-bench.html",
        "scoreTournamentMatch",
        "Release Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-constraint-edit-tournament/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-constraint-edit-tournament/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-constraint-edit-tournament/tests/core.test.js").exists()
    print(
        f"verified CVPR constraint edit tournament: {summary['matches']} matches, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

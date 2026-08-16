"""Verify the CVPR embodied control repo drill demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_embodied_control_repo_drill/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-embodied-control-repo-drill"
    assert summary["status"] == "ready"
    assert summary["theme"] == "Using vision to act in the world"
    assert summary["sourceForge"] == "cvpr-paper-repo-demo-forge.html"
    assert summary["system"] == "driving-vla-release-gate"
    assert summary["repoPapers"] == 5
    assert summary["scenarios"] == 5
    assert summary["shadow"] + summary["hold"] >= 3
    assert summary["maxTransferRisk"] >= 55
    assert summary["minReadiness"] <= 65
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert data["sourceBlueprint"]["theme"] == "embodied"
    assert data["sourceBlueprint"]["demoSurface"] == "cvpr-embodied-control-repo-drill.html"
    assert len(data["sourceBlueprint"]["seedPapers"]) == 5
    assert len(data["scenarios"]) == 5
    assert len(data["drillRows"]) == 5
    assert all(row["repo"].startswith("http") for row in data["drillRows"])
    assert {row["decision"] for row in data["drillRows"]} <= {"promote", "shadow", "hold"}
    assert {row["id"] for row in data["drillRows"]} == {
        "town-transfer-rain",
        "visual-skill-zero-shot",
        "bimanual-handover",
        "curriculum-drift",
        "gui-history-trap",
    }
    page = (ROOT / "cvpr-embodied-control-repo-drill.html").read_text(encoding="utf-8")
    for token in (
        "Embodied Control Repo Drill",
        "Reliable Policy Transfer",
        "EnergyAction",
        "HiconAgent",
        "domain shift",
        "coordination load",
        "reward sparsity",
        "cvpr-paper-repo-demo-forge.html",
        "driving-vla-release-gate.html",
        "scoreDrill",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-embodied-control-repo-drill/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-embodied-control-repo-drill/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-embodied-control-repo-drill/tests/core.test.js").exists()
    print(
        f"verified CVPR embodied control repo drill: {summary['scenarios']} scenarios, "
        f"{summary['repoPapers']} repo papers"
    )


if __name__ == "__main__":
    main()

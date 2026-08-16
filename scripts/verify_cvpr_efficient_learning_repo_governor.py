"""Verify the CVPR efficient learning repo governor demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_efficient_learning_repo_governor/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-efficient-learning-repo-governor"
    assert summary["status"] == "ready"
    assert summary["theme"] == "Learning more from less, and not breaking"
    assert summary["sourceForge"] == "cvpr-paper-repo-demo-forge.html"
    assert summary["system"] == "efficient-vision-serving"
    assert summary["repoPapers"] == 5
    assert summary["cases"] == 5
    assert summary["canary"] + summary["hold"] >= 3
    assert summary["maxAccuracyRisk"] >= 45
    assert summary["maxAdaptationRisk"] >= 55
    assert summary["minReadiness"] <= 62
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert data["sourceBlueprint"]["theme"] == "learning"
    assert data["sourceBlueprint"]["demoSurface"] == "cvpr-efficient-learning-repo-governor.html"
    assert len(data["sourceBlueprint"]["seedPapers"]) == 5
    assert len(data["cases"]) == 5
    assert len(data["governorRows"]) == 5
    assert all(row["repo"].startswith("http") for row in data["governorRows"])
    assert {row["decision"] for row in data["governorRows"]} <= {"promote", "canary", "hold"}
    assert {row["id"] for row in data["governorRows"]} == {
        "token-redundancy-audit",
        "class-specific-edge-vit",
        "forward-only-tta",
        "continual-architecture-router",
        "federated-wild-tta",
    }
    page = (ROOT / "cvpr-efficient-learning-repo-governor.html").read_text(encoding="utf-8")
    for token in (
        "Efficient Learning Repo Governor",
        "What Do Visual Tokens Really Encode",
        "NuWa",
        "FOZO",
        "CHEEM",
        "Towards Stable Federated",
        "token budget",
        "prune ratio",
        "client drift",
        "scoreGovernor",
        "efficient-vision-serving.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-efficient-learning-repo-governor/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-efficient-learning-repo-governor/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-efficient-learning-repo-governor/tests/core.test.js").exists()
    print(
        f"verified CVPR efficient learning repo governor: {summary['cases']} cases, "
        f"{summary['repoPapers']} repo papers"
    )


if __name__ == "__main__":
    main()

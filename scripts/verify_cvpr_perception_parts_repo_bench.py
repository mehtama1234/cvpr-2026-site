"""Verify the CVPR perception parts repo bench demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_perception_parts_repo_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-perception-parts-repo-bench"
    assert summary["status"] == "ready"
    assert summary["theme"] == "Naming and locating what's in the picture"
    assert summary["sourceForge"] == "cvpr-paper-repo-demo-forge.html"
    assert summary["system"] == "open-vocab-visual-search"
    assert summary["repoPapers"] == 5
    assert summary["cases"] == 5
    assert summary["review"] + summary["block"] >= 4
    assert summary["maxLocalizationRisk"] >= 70
    assert summary["maxAdaptationRisk"] >= 60
    assert summary["minReadiness"] <= 45
    assert data["sourceBlueprint"]["theme"] == "perceive"
    assert data["sourceBlueprint"]["demoSurface"] == "cvpr-perception-parts-repo-bench.html"
    assert len(data["benchRows"]) == 5
    assert all(row["repo"].startswith("http") for row in data["benchRows"])
    assert {row["id"] for row in data["benchRows"]} == {
        "medical-background-prompt",
        "panoramic-source-free-uda",
        "training-free-cosaliency",
        "few-shot-incremental-audio",
        "camouflage-pseudo-labels",
    }
    page = (ROOT / "cvpr-perception-parts-repo-bench.html").read_text(encoding="utf-8")
    for token in (
        "Perception Parts Repo Bench",
        "Focus on Background",
        "DAPASS",
        "TF-SSD",
        "TAPE",
        "EReCu",
        "background prompts",
        "scoreBench",
        "open-vocab-visual-search.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-perception-parts-repo-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-perception-parts-repo-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-perception-parts-repo-bench/tests/core.test.js").exists()
    print(f"verified CVPR perception parts repo bench: {summary['cases']} cases, {summary['repoPapers']} repo papers")


if __name__ == "__main__":
    main()

"""Verify the CVPR paper/repo demo forge."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_paper_repo_demo_forge/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-paper-repo-demo-forge"
    assert summary["status"] == "ready"
    assert summary["paperCorpus"] >= 4000
    assert summary["repoCorpus"] >= 900
    assert summary["blueprints"] == 8
    assert summary["readyBlueprints"] == 8
    assert summary["themes"] == 8
    assert summary["repoPapers"] >= 32
    assert summary["undercoveredThemes"] == 4
    assert len(data["blueprintRows"]) == 8
    assert {row["theme"] for row in data["blueprintRows"]} == {
        "emerging",
        "threed",
        "video",
        "generation",
        "vlm",
        "perceive",
        "embodied",
        "learning",
    }
    assert all(row["repoPapers"] >= 3 for row in data["blueprintRows"])
    assert all(row["status"] == "ready" for row in data["blueprintRows"])
    assert all(paper["repo"].startswith("http") for row in data["blueprintRows"] for paper in row["seedPapers"])
    page = (ROOT / "cvpr-paper-repo-demo-forge.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Paper Repo Demo Forge",
        "Frontier Sensor Fusion Bench",
        "Embodied Control Repo Drill",
        "Efficient Learning Repo Governor",
        "search.html",
        "cvpr-paper-to-system-gate.html",
        "Forge Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-paper-repo-demo-forge/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-paper-repo-demo-forge/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-paper-repo-demo-forge/tests/core.test.js").exists()
    print(f"verified CVPR paper repo demo forge: {summary['blueprints']} blueprints, {summary['repoPapers']} repo papers")


if __name__ == "__main__":
    main()

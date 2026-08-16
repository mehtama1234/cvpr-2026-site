"""Verify remaining CVPR paper/repo demos for 3D, video, generation, and VLM."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

EXPECTED = {
    "cvpr-3d-world-repo-arena": ("cvpr_3d_world_repo_arena", "threed", "Recovering the 3D world from flat pictures", "3D World Repo Arena", "Flow4DGS-SLAM"),
    "cvpr-video-temporal-repo-lab": ("cvpr_video_temporal_repo_lab", "video", "Seeing and making things that move", "Video Temporal Repo Lab", "AdaSpot"),
    "cvpr-generation-control-repo-studio": ("cvpr_generation_control_repo_studio", "generation", "Making pixels from meaning", "Generation Control Repo Studio", "GDPO-SR"),
    "cvpr-grounded-vlm-repo-court": ("cvpr_grounded_vlm_repo_court", "vlm", "Teaching machines to see and talk at once", "Grounded VLM Repo Court", "See It, Say It, Sorted"),
}


def main():
    for slug, (analysis, theme, theme_name, title, paper_token) in EXPECTED.items():
        data = json.loads((ROOT / "analysis" / analysis / "registry.json").read_text(encoding="utf-8"))
        summary = data["summary"]
        assert summary["demo"] == slug
        assert summary["status"] == "ready"
        assert summary["theme"] == theme_name
        assert summary["sourceForge"] == "cvpr-paper-repo-demo-forge.html"
        assert summary["repoPapers"] == 5
        assert summary["cases"] == 5
        assert summary["review"] + summary["block"] >= 4
        assert summary["maxPrimaryRisk"] >= 55
        assert summary["maxEvidenceRisk"] >= 55
        assert summary["minReadiness"] <= 50
        assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
        assert data["sourceBlueprint"]["theme"] == theme
        assert data["sourceBlueprint"]["demoSurface"] == f"{slug}.html"
        assert len(data["demoRows"]) == 5
        assert all(row["repo"].startswith("http") for row in data["demoRows"])
        page = (ROOT / f"{slug}.html").read_text(encoding="utf-8")
        for token in (title, paper_token, "cvpr-paper-repo-demo-forge.html", "scoreRepoDemo", "Repo Demo Gate"):
            assert token in page
        assert (ROOT / "source-code/learning" / slug / "src/core.js").exists()
        assert (ROOT / "source-code/learning" / slug / "src/fixtures.js").exists()
        assert (ROOT / "source-code/learning" / slug / "tests/core.test.js").exists()
    print(f"verified remaining CVPR paper repo demos: {len(EXPECTED)} demos")


if __name__ == "__main__":
    main()

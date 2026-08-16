"""Verify the third CVPR interactive demo wave."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_third_wave/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-third-wave"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["waveRows"]
    assert summary["wave"] == "third-interactive-wave"
    assert summary["status"] == "wave-ready"
    assert summary["demos"] == 8
    assert summary["themes"] == 8
    assert summary["localArtifacts"] == 24
    assert summary["controls"] == 40
    assert summary["runtimeControllers"] == 8
    assert summary["promoteInteractive"] == 8
    assert summary["holdInteractive"] == 0
    assert len(rows) == 8
    assert {row["theme"] for row in rows} == {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}
    assert all(row["status"] == "interactive-ready" for row in rows)
    assert all(row["localArtifacts"] == 3 for row in rows)
    assert all(len(row["controls"]) == 5 for row in rows)
    assert all(row["runtimeState"]["activeDemo"] == row["demoId"] for row in rows)
    assert all(row["releaseAction"] == "promote-interactive-demo" for row in rows)
    assert all((ROOT / artifact["path"]).exists() for row in rows for artifact in row["artifacts"])
    page = (ROOT / "cvpr-interactive-third-wave.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Third Wave",
        "cvpr-interactive-expansion-backlog.html",
        "raven-",
        "L2DGS",
        "FOZO",
        "Wave Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive third wave: {summary['demos']} demos, {summary['status']}")


if __name__ == "__main__":
    main()

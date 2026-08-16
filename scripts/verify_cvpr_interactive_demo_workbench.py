"""Verify the CVPR interactive demo workbench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_demo_workbench/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-demo-workbench"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["workbenchRows"]
    assert summary["workbench"] == "cvpr-interactive-demo-workbench"
    assert summary["status"] == "workbench-ready"
    assert summary["portfolioStatus"] == "portfolio-ready"
    assert summary["rehydrationStatus"] == "rehydrated"
    assert summary["demos"] == 8
    assert summary["readyInteractions"] == 8
    assert summary["themes"] == 8
    assert summary["controls"] == 40
    assert summary["localArtifacts"] == 24
    assert summary["runtimeControllers"] == 8
    assert summary["promoteInteractive"] == 8
    assert summary["holdInteractive"] == 0
    assert len(rows) == 8
    assert {row["theme"] for row in rows} == {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}
    assert all(row["mode"] == "interactive-cached" for row in rows)
    assert all(row["selectedPanel"] == "output" for row in rows)
    assert all(row["runtimeState"]["activeDemo"] == row["demoId"] for row in rows)
    assert all(len(row["runtimeState"]["availablePanels"]) == 5 for row in rows)
    assert all(row["artifactDiff"]["status"] == "local-backed" for row in rows)
    assert all(row["artifactDiff"]["localArtifacts"] == 3 for row in rows)
    assert all(row["failureProbe"]["verdict"] == "probe-ready" for row in rows)
    assert all(row["releaseAction"] == "promote-interactive-demo" for row in rows)
    assert all((ROOT / path).exists() for row in rows for path in row["artifactDiff"]["paths"])
    page = (ROOT / "cvpr-interactive-demo-workbench.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Demo Workbench",
        "cvpr-deep-viewer-portfolio.html",
        "cvpr-artifact-rehydration-queue.html",
        "promote-interactive-demo",
        "local-artifact-backed",
        "workbench-data",
        "renderPanel",
        "data-demo-card",
        "data-panel-output",
        "Workbench Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive demo workbench: {summary['demos']} demos, {summary['status']}")


if __name__ == "__main__":
    main()

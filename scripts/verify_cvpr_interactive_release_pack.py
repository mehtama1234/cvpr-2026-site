"""Verify the CVPR interactive release pack."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_release_pack/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-release-pack"
LAYERS = {"coverage-portfolio", "interactive-console", "scenario-runner", "triage-board"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    layers = data["releaseLayers"]
    assert summary["pack"] == "cvpr-interactive-release-pack"
    assert summary["status"] == "release-pack-ready"
    assert summary["layers"] == 4
    assert summary["readyLayers"] == 4
    assert summary["pages"] == 4
    assert summary["registries"] == 4
    assert summary["packages"] == 4
    assert summary["validators"] == 4
    assert summary["packageTests"] == 4
    assert summary["demos"] == 40
    assert summary["themes"] == 8
    assert summary["waves"] == 5
    assert summary["artifacts"] == 120
    assert summary["controls"] == 200
    assert summary["scenarioCases"] == 120
    assert summary["passingCases"] == 120
    assert summary["blockedCases"] == 0
    assert summary["promoteDecisions"] == 40
    assert summary["monitorDecisions"] == 0
    assert summary["retestDecisions"] == 0
    assert summary["holds"] == 0
    assert len(layers) == 4
    assert {layer["id"] for layer in layers} == LAYERS
    assert all(layer["status"] == layer["readyStatus"] for layer in layers)
    assert all(layer["pageExists"] for layer in layers)
    assert all(layer["registryExists"] for layer in layers)
    assert all(layer["packageExists"] for layer in layers)
    assert all(layer["validatorExists"] for layer in layers)
    assert all(layer["packageTestExists"] for layer in layers)
    assert all((ROOT / layer["page"]).exists() for layer in layers)
    assert all((ROOT / layer["registry"]).exists() for layer in layers)
    assert all((ROOT / layer["package"]).exists() for layer in layers)
    assert all((ROOT / layer["validator"]).exists() for layer in layers)
    assert all((ROOT / layer["package"] / "tests/core.test.js").exists() for layer in layers)
    page = (ROOT / "cvpr-interactive-release-pack.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Release Pack",
        "Release Gate",
        "coverage-portfolio",
        "interactive-console",
        "scenario-runner",
        "triage-board",
        "cvpr-interactive-triage-board.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive release pack: {summary['layers']} layers, {summary['status']}")


if __name__ == "__main__":
    main()

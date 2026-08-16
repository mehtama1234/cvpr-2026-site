"""Verify the CVPR interactive handoff bundle."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_handoff_bundle/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-handoff-bundle"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    items = data["handoffItems"]
    assert summary["bundle"] == "cvpr-interactive-handoff-bundle"
    assert summary["status"] == "handoff-ready"
    assert summary["sourceCloseout"] == "analysis/cvpr_interactive_closeout_seal/registry.json"
    assert summary["items"] == 11
    assert summary["sealedItems"] == 11
    assert summary["pages"] == 11
    assert summary["registries"] == 11
    assert summary["packages"] == 11
    assert summary["validators"] == 11
    assert summary["packageTests"] == 11
    assert summary["fullStackStatus"] == "valid"
    assert summary["demos"] == 40
    assert summary["themes"] == 8
    assert summary["waves"] == 5
    assert summary["artifacts"] == 120
    assert summary["controls"] == 200
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["rollbackDrills"] == 6
    assert summary["rollbackRehearsals"] == 6
    assert summary["holds"] == 0
    assert len(items) == 11
    assert all(item["status"] == "sealed" for item in items)
    assert all(item["pageExists"] for item in items)
    assert all(item["registryExists"] for item in items)
    assert all(item["packageExists"] for item in items)
    assert all(item["validatorExists"] for item in items)
    assert all(item["packageTestExists"] for item in items)
    assert all((ROOT / item["page"]).exists() for item in items)
    assert all((ROOT / item["registry"]).exists() for item in items)
    assert all((ROOT / item["package"]).exists() for item in items)
    assert all((ROOT / item["validator"]).exists() for item in items)
    assert all((ROOT / item["package"] / "tests/core.test.js").exists() for item in items)
    page = (ROOT / "cvpr-interactive-handoff-bundle.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Handoff Bundle",
        "Handoff Gate",
        "fullStack=valid",
        "rollback-rehearsal",
        "cvpr-interactive-closeout-seal.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive handoff bundle: {summary['items']} items, {summary['status']}")


if __name__ == "__main__":
    main()

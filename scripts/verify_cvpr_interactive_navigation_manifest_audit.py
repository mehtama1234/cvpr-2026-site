"""Verify the CVPR interactive navigation manifest audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_navigation_manifest_audit/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-navigation-manifest-audit"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    items = data["navItems"]
    assert summary["audit"] == "cvpr-interactive-navigation-manifest-audit"
    assert summary["status"] == "nav-audit-ready"
    assert summary["sourceHandoff"] == "analysis/cvpr_interactive_handoff_bundle/registry.json"
    assert summary["items"] == 11
    assert summary["linkedItems"] == 11
    assert summary["missingItems"] == 0
    assert summary["handoffItems"] == 11
    assert summary["demos"] == 40
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["holds"] == 0
    assert len(items) == 11
    assert all(item["status"] == "linked" for item in items)
    assert all(item["indexLinked"] for item in items)
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
    page = (ROOT / "cvpr-interactive-navigation-manifest-audit.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Navigation Manifest Audit",
        "Navigation Gate",
        "handoff bundle",
        "rollback-rehearsal",
        "cvpr-interactive-handoff-bundle.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive navigation manifest audit: {summary['items']} items, {summary['status']}")


if __name__ == "__main__":
    main()

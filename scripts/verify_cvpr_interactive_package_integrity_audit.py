"""Verify the CVPR interactive package integrity audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_package_integrity_audit/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-package-integrity-audit"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["packageRows"]
    assert summary["audit"] == "cvpr-interactive-package-integrity-audit"
    assert summary["status"] == "package-audit-ready"
    assert summary["sourceHandoff"] == "analysis/cvpr_interactive_handoff_bundle/registry.json"
    assert summary["packages"] == 11
    assert summary["readyPackages"] == 11
    assert summary["missingPackages"] == 0
    assert summary["requiredFiles"] == 55
    assert summary["presentFiles"] == 55
    assert summary["handoffItems"] == 11
    assert summary["demos"] == 40
    assert summary["scenarioCases"] == 120
    assert summary["promoteDecisions"] == 40
    assert summary["holds"] == 0
    assert len(rows) == 11
    assert all(row["status"] == "package-ready" for row in rows)
    assert all(row["requiredFiles"] == 5 for row in rows)
    assert all(row["presentFiles"] == 5 for row in rows)
    assert all(row["missingFiles"] == [] for row in rows)
    assert all(row["packageJsonExists"] for row in rows)
    assert all(row["coreExists"] for row in rows)
    assert all(row["fixturesExists"] for row in rows)
    assert all(row["testExists"] for row in rows)
    assert all(row["readmeExists"] for row in rows)
    assert all((ROOT / row["package"] / "package.json").exists() for row in rows)
    assert all((ROOT / row["package"] / "src/core.js").exists() for row in rows)
    assert all((ROOT / row["package"] / "src/fixtures.js").exists() for row in rows)
    assert all((ROOT / row["package"] / "tests/core.test.js").exists() for row in rows)
    assert all((ROOT / row["package"] / "README.md").exists() for row in rows)
    page = (ROOT / "cvpr-interactive-package-integrity-audit.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Package Integrity Audit",
        "Package Gate",
        "cvpr-interactive-handoff-bundle.html",
        "package-ready",
        "rollback-rehearsal",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive package integrity audit: {summary['packages']} packages, {summary['status']}")


if __name__ == "__main__":
    main()

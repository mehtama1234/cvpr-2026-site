"""Verify the CVPR live evidence coverage audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_live_evidence_coverage_audit/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-live-evidence-coverage-audit"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["auditRows"]
    assert summary["audit"] == "cvpr-live-evidence-coverage-audit"
    assert summary["status"] == "coverage-complete"
    assert summary["themes"] == 8
    assert summary["coveredThemes"] == 8
    assert summary["manifestRows"] == 40
    assert summary["promotedRows"] == 40
    assert summary["missingArtifacts"] == 0
    assert summary["manifestArtifact"] == "analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json"
    assert summary["promotedArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["rollbackArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json"
    assert len(rows) == 8
    assert all(row["manifestRows"] == 5 for row in rows)
    assert all(row["promotedRows"] == 5 for row in rows)
    assert all(row["pageExists"] and row["registryExists"] and row["packageExists"] and row["verifierExists"] for row in rows)
    assert all(row["missingArtifacts"] == 0 for row in rows)
    assert len({row["theme"] for row in rows}) == 8
    page = (ROOT / "cvpr-live-evidence-coverage-audit.html").read_text(encoding="utf-8")
    for token in (
        "Live Evidence Coverage Audit",
        "cvpr-live-evidence-release-manifest.html",
        "cvpr_repo_harness_results.promoted.json",
        "validate_cvpr_repo_harness_results.py",
        "coverage-complete",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR live evidence coverage audit: {summary['coveredThemes']} themes, {summary['promotedRows']} rows")


if __name__ == "__main__":
    main()

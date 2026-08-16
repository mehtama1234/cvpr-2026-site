"""Verify the CVPR live evidence release manifest."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_live_evidence_release_manifest/registry.json"
MANIFEST = ROOT / "analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json"
PACKAGE = ROOT / "source-code/learning/cvpr-live-evidence-release-manifest"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["surfaceArtifacts"]
    assert summary["manifest"] == "cvpr-live-evidence-release-manifest"
    assert summary["status"] == "manifest-ready"
    assert summary["releaseBriefStatus"] == "release-ready"
    assert summary["surfaces"] == 8
    assert summary["rows"] == 40
    assert summary["liveRows"] == 40
    assert summary["artifacts"] == 40
    assert summary["holdDemo"] == 0
    assert summary["packageCount"] == 8
    assert summary["verifierCount"] == 8
    assert summary["promotedArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["rollbackArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json"
    assert data["manifestArtifact"] == "analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json"
    assert manifest["status"] == "manifest-ready"
    assert len(rows) == 8
    assert all((ROOT / row["page"]).exists() for row in rows)
    assert all((ROOT / row["registry"]).exists() for row in rows)
    assert all((ROOT / row["packagePath"] / "tests/core.test.js").exists() for row in rows)
    assert all((ROOT / row["verifier"]).exists() for row in rows)
    assert (ROOT / summary["promotedArtifact"]).exists()
    assert (ROOT / summary["rollbackArtifact"]).exists()
    page = (ROOT / "cvpr-live-evidence-release-manifest.html").read_text(encoding="utf-8")
    for token in (
        "Live Evidence Release Manifest",
        "cvpr-live-evidence-release-brief.html",
        "cvpr_live_evidence_release_manifest.json",
        "cvpr_repo_harness_results.promoted.json",
        "cvpr_repo_harness_results.rollback.json",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR live evidence release manifest: {summary['surfaces']} surfaces, {summary['rows']} rows")


if __name__ == "__main__":
    main()

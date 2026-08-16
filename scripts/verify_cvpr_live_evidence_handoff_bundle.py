"""Verify the CVPR live evidence handoff bundle."""
import json
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_live_evidence_handoff_bundle/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-live-evidence-handoff-bundle"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bundle"] == "cvpr-live-evidence-handoff-bundle"
    assert summary["status"] == "handoff-ready"
    assert summary["commandStatus"] == "operator-ready"
    assert summary["manifestStatus"] == "manifest-ready"
    assert summary["auditStatus"] == "coverage-complete"
    assert summary["briefStatus"] == "release-ready"
    assert summary["surfaces"] == 8
    assert summary["rows"] == 40
    assert summary["liveRows"] == 40
    assert summary["smokePassed"] == 40
    assert summary["missingArtifacts"] == 0
    assert summary["holdDemo"] == 0
    zip_path = ROOT / summary["zipPath"]
    assert zip_path.exists()
    with zipfile.ZipFile(zip_path) as archive:
        entries = sorted(archive.namelist())
    for entry in (
        "README.md",
        "analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json",
        "analysis/cvpr_live_evidence_command_center/registry.json",
        "analysis/cvpr_live_evidence_coverage_audit/registry.json",
        "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
        "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json",
        "scripts/validate_cvpr_repo_harness_results.py",
        "scripts/validate_cvpr_full_stack.py",
        "source-code/learning/cvpr-live-evidence-handoff-bundle/LIVE_EVIDENCE_HANDOFF_RUNBOOK.md",
    ):
        assert entry in entries
    assert entries == summary["zipEntryNames"]
    runbook = (ROOT / summary["runbook"]).read_text(encoding="utf-8")
    for token in (
        "CVPR Live Evidence Handoff Runbook",
        "validate_cvpr_repo_harness_results.py",
        "validate_cvpr_full_stack.py",
        "rollback",
    ):
        assert token in runbook
    page = (ROOT / "cvpr-live-evidence-handoff-bundle.html").read_text(encoding="utf-8")
    for token in (
        "Live Evidence Handoff Bundle",
        "cvpr_live_evidence_handoff_bundle.zip",
        "LIVE_EVIDENCE_HANDOFF_RUNBOOK.md",
        "cvpr-live-evidence-command-center.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR live evidence handoff bundle: {summary['rows']} rows, {len(entries)} zip entries")


if __name__ == "__main__":
    main()

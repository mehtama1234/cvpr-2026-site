"""Verify the CVPR repo harness Colab Pro+ handoff package."""
import json
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_harness_handoff_package/registry.json"
PAGE = ROOT / "cvpr-repo-harness-handoff-package.html"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-handoff-package"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["handoff"] == "cvpr-repo-harness-handoff-package"
    assert summary["status"] == "ready"
    assert summary["jobs"] == 40
    assert summary["waves"] == 8
    assert summary["intakeIssues"] == 0
    assert summary["notebook"] == "notebooks/cvpr_repo_harness_worker.ipynb"
    assert summary["runbook"] == "source-code/learning/cvpr-repo-harness-handoff-package/REPO_HARNESS_COLAB_RUNBOOK.md"
    assert summary["notebookCells"] >= 3
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    zip_path = ROOT / summary["zipPath"]
    assert zip_path.exists()
    with zipfile.ZipFile(zip_path) as archive:
        entries = sorted(archive.namelist())
    for entry in (
        "README.md",
        "notebooks/cvpr_repo_harness_worker.ipynb",
        "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json",
        "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
        "source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py",
        "source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py",
        "scripts/validate_cvpr_repo_harness_results.py",
        "scripts/build_cvpr_repo_harness_live_intake.py",
        "analysis/cvpr_repo_harness_wave_planner/registry.json",
        "source-code/learning/cvpr-repo-harness-handoff-package/REPO_HARNESS_COLAB_RUNBOOK.md",
    ):
        assert entry in entries
    runbook = (ROOT / summary["runbook"]).read_text(encoding="utf-8")
    for token in (
        "CVPR Repo Harness Colab Pro+ Runbook",
        "--start 0 --limit 5",
        "validate_cvpr_repo_harness_results.py",
        "cvpr_repo_harness_live.json",
    ):
        assert token in runbook
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Repo Harness Handoff Package",
        "cvpr_repo_harness_handoff_package.zip",
        "cvpr_repo_harness_worker.ipynb",
        "REPO_HARNESS_COLAB_RUNBOOK.md",
        "cvpr-repo-harness-wave-planner.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR repo harness handoff package: {summary['jobs']} jobs, {len(entries)} zip entries")


if __name__ == "__main__":
    main()

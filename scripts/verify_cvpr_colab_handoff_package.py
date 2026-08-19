"""Verify the CVPR Colab Pro+ handoff package."""
import json
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_colab_handoff_package/registry.json"
PAGE = ROOT / "cvpr-colab-handoff-package.html"
PACKAGE = ROOT / "source-code/learning/cvpr-colab-handoff-package"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    import_summary = data["importReport"]["summary"]
    assert summary["handoff"] == "cvpr-colab-handoff-package"
    assert summary["status"] == "ready"
    assert summary["jobs"] == import_summary["jobs"]
    assert summary["runners"] == import_summary["validJobs"]
    assert summary["expectedResults"] == import_summary["expectedResults"]
    assert summary["importIssues"] == 0
    assert summary["notebook"] == "notebooks/cvpr_gpu_worker.ipynb"
    assert summary["runbook"] == "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md"
    assert summary["liveExportArtifact"] == "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json"
    assert summary["intakeGate"] == "scripts/stage_cvpr_live_colab_export.py"
    assert summary["notebookCells"] >= 21
    assert summary["exportContract"] is True
    zip_path = ROOT / summary["zipPath"]
    assert zip_path.exists()
    with zipfile.ZipFile(zip_path) as archive:
        entries = sorted(archive.namelist())
    for entry in (
        "README.md",
        "notebooks/cvpr_gpu_worker.ipynb",
        "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
        "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json",
        "analysis/cvpr_colab_gpu_worker/registry.json",
        "analysis/cvpr_colab_gpu_worker/import_validation.json",
        "scripts/stage_cvpr_live_colab_export.py",
        "scripts/validate_cvpr_colab_results.py",
    ):
        assert entry in entries
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Handoff Package",
        "Run Commands",
        "Package Contents",
        "cvpr_colab_handoff_package.zip",
        "cvpr_gpu_worker.ipynb",
        "stage_cvpr_live_colab_export.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR Colab handoff package: {summary['jobs']} jobs, {len(entries)} zip entries")


if __name__ == "__main__":
    main()

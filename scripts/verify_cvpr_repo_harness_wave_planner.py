"""Verify the CVPR repo harness wave planner."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_harness_wave_planner/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-wave-planner"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    waves = data["waves"]
    assert summary["planner"] == "cvpr-repo-harness-wave-planner"
    assert summary["status"] == "ready"
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["waves"] == 8
    assert summary["jobs"] == 40
    assert summary["repos"] == 40
    assert summary["themes"] == 8
    assert summary["batchSize"] == 5
    assert summary["worker"] == "cvpr-repo-harness-worker"
    assert summary["intakeStatus"] == "valid"
    assert summary["firstWaveReceipt"] == "cvpr-repo-harness-first-batch-receipt"
    assert summary["notebook"] == "notebooks/cvpr_repo_harness_worker.ipynb"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(waves) == 8
    assert [wave["theme"] for wave in waves] == ["frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"]
    assert [wave["start"] for wave in waves] == [0, 5, 10, 15, 20, 25, 30, 35]
    for wave in waves:
        assert wave["jobs"] == 5
        assert wave["repos"] == 5
        assert wave["status"] == "ready"
        assert f"--start {wave['start']} --limit 5" in wave["runCommand"]
        assert wave["dryRunCommand"].endswith("--dry-run")
        assert "validate_cvpr_repo_harness_results.py" in wave["validationCommand"]
        assert len(wave["jobIds"]) == 5
    page = (ROOT / "cvpr-repo-harness-wave-planner.html").read_text(encoding="utf-8")
    for token in (
        "Repo Harness Wave Planner",
        "frontier",
        "threed",
        "learning",
        "--start 35 --limit 5",
        "cvpr-repo-harness-first-batch-receipt.html",
        "cvpr-repo-harness-live-intake.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR repo harness wave planner: {summary['waves']} waves, {summary['jobs']} jobs")


if __name__ == "__main__":
    main()

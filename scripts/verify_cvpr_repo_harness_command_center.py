"""Verify the CVPR repo harness promotion command center."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-command-center"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
ROLLBACK = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["surfaceRows"]
    targets = data["nextWaveRows"]
    promoted = json.loads(PROMOTED.read_text(encoding="utf-8"))
    rollback = json.loads(ROLLBACK.read_text(encoding="utf-8"))
    assert summary["commandCenter"] == "cvpr-repo-harness-command-center"
    assert summary["status"] == "operator-ready"
    assert summary["surfaces"] == 8
    assert summary["readySurfaces"] == 8
    assert summary["jobs"] == 40
    assert summary["repos"] == 40
    assert summary["waves"] == 8
    assert summary["liveValid"] == 40
    assert summary["intakeIssues"] == 0
    assert summary["promoteWaves"] == 8
    assert summary["holdWaves"] == 0
    assert summary["deltaReadyRows"] == 40
    assert summary["promotedRows"] == 40
    assert summary["rollbackRows"] == 40
    assert summary["nextWaveTargets"] == 8
    assert len(rows) == 8
    assert len(targets) == 8
    assert all(row["actual"] == row["expected"] for row in rows)
    assert all(row["surface"].endswith(".html") for row in rows)
    assert all(row["command"].startswith("python3 scripts/verify_cvpr_repo_") for row in rows)
    assert all(target["repoCount"] == 5 for target in targets)
    assert len({target["theme"] for target in targets}) == 8
    assert len(promoted) == 40
    assert len(rollback["results"]) == 40
    assert all(row["mode"] == "live-colab" for row in promoted)
    assert rollback["rollback"]["restoresMode"] == "cached-harness-contract"
    page = (ROOT / "cvpr-repo-harness-command-center.html").read_text(encoding="utf-8")
    for token in (
        "Repo Harness Command Center",
        "Next Demo Wave",
        "cvpr-repo-harness-replacement-receipt.html",
        "cvpr-repo-harness-promotion-delta.html",
        "cvpr_repo_harness_results.promoted.json",
        "validate_cvpr_repo_harness_results.py",
        "Frontier Sensor Fusion Live Evidence Drill",
        "Efficient Learning Governor Replay",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR repo harness command center: {summary['readySurfaces']} surfaces, {summary['nextWaveTargets']} targets")


if __name__ == "__main__":
    main()

"""Verify live Colab promotion without overwriting the canonical result artifact."""
import json
import subprocess
from pathlib import Path

from validate_cvpr_colab_results import load_json, validate

ROOT = Path(__file__).resolve().parent.parent
CACHED = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"
DRILL = ROOT / "analysis/cvpr_colab_live_intake/promotion_drill"
LIVE_EXPORT = DRILL / "cvpr_gpu_results_live.json"
PROMOTED = DRILL / "cvpr_gpu_results.promoted.json"
REPORT = DRILL / "promotion_registry.json"
MANIFEST = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"


def make_live_export():
    cached = json.loads(CACHED.read_text(encoding="utf-8"))
    live = []
    for result in cached:
        row = dict(result)
        row["mode"] = "live-colab"
        row["createdAt"] = "2026-08-15T12:30:00Z"
        row["provenance"] = {
            **result["provenance"],
            "accelerator": "NVIDIA L4",
            "exportKind": "live-colab-promotion-drill",
        }
        live.append(row)
    DRILL.mkdir(parents=True, exist_ok=True)
    LIVE_EXPORT.write_text(json.dumps(live, indent=2) + "\n", encoding="utf-8")


def main():
    make_live_export()
    completed = subprocess.run(
        [
            "python3",
            "scripts/stage_cvpr_live_colab_export.py",
            "--export",
            str(LIVE_EXPORT),
            "--report",
            str(REPORT),
            "--canonical-results",
            str(PROMOTED),
            "--promote",
        ],
        cwd=ROOT,
        text=True,
        capture_output=True,
    )
    assert completed.returncode == 0, completed.stderr or completed.stdout

    report = json.loads(REPORT.read_text(encoding="utf-8"))
    summary = report["summary"]
    assert summary["status"] == "valid"
    assert summary["expectedMode"] == "live-colab"
    assert summary["actualResults"] == 40
    assert summary["validJobs"] == 10
    assert summary["issues"] == 0
    assert summary["promoted"] is True
    assert summary["canonicalArtifact"] == "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json"

    promoted = json.loads(PROMOTED.read_text(encoding="utf-8"))
    assert len(promoted) == 40
    for result in promoted:
        assert result["mode"] == "cached-real"
        assert result["provenance"]["promotedFrom"] == "live-colab"
        assert result["provenance"]["canonicalMode"] == "cached-real"
        assert result["provenance"]["runtime"] == "google-colab-pro-plus"
        assert result["provenance"]["accelerator"] == "NVIDIA L4"

    promoted_report = validate(load_json(MANIFEST), promoted, expected_mode="cached-real")
    assert promoted_report["summary"]["status"] == "valid"
    assert promoted_report["summary"]["actualResults"] == 40
    assert promoted_report["summary"]["issues"] == 0
    print("verified CVPR live Colab promotion: 40 promoted cached-real results")


if __name__ == "__main__":
    main()

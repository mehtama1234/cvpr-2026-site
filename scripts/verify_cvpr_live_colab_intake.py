"""Verify live Colab export intake without requiring a real Colab run."""
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHED = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"
REPORT = ROOT / "analysis/cvpr_colab_live_intake/registry.json"
PAGE = ROOT / "cvpr-colab-live-intake.html"
VERIFIER_EXPORT = ROOT / "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json"


def main():
    cached = json.loads(CACHED.read_text(encoding="utf-8"))
    live = []
    for result in cached:
        row = dict(result)
        row["mode"] = "live-colab"
        row["createdAt"] = "2026-08-15T12:00:00Z"
        row["provenance"] = {**result["provenance"], "exportKind": "live-colab-intake-verifier"}
        live.append(row)

    VERIFIER_EXPORT.parent.mkdir(parents=True, exist_ok=True)
    VERIFIER_EXPORT.write_text(json.dumps(live, indent=2) + "\n", encoding="utf-8")
    completed = subprocess.run(
        ["python3", "scripts/stage_cvpr_live_colab_export.py", "--export", str(VERIFIER_EXPORT)],
        cwd=ROOT,
        text=True,
        capture_output=True,
    )
    assert completed.returncode == 0, completed.stderr or completed.stdout

    data = json.loads(REPORT.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["intake"] == "cvpr-colab-live-intake"
    assert summary["status"] == "valid"
    assert summary["expectedMode"] == "live-colab"
    assert summary["jobs"] == 14
    assert summary["expectedResults"] == 56
    assert summary["actualResults"] == 56
    assert summary["validJobs"] == 14
    assert summary["issues"] == 0
    assert summary["promoted"] is False
    assert summary["export"] == "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json"
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Live Intake",
        "Promotion Command",
        "live results",
        "cvpr-colab-release-bundle.html",
        "stage_cvpr_live_colab_export.py",
    ):
        assert token in page
    print("verified CVPR live Colab intake: 56 live results, 0 issues")


if __name__ == "__main__":
    main()

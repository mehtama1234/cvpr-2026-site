"""Verify CVPR repo harness live intake artifacts."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_harness_live_intake/registry.json"
MANIFEST = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json"
INCOMING = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-live-intake"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    incoming = json.loads(INCOMING.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-repo-harness-live-intake"
    assert summary["status"] == "valid"
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["expectedMode"] == "live-colab"
    assert summary["jobs"] == 40
    assert summary["expectedResults"] == 40
    assert summary["actualResults"] == 40
    assert summary["validJobs"] == 40
    assert summary["issues"] == 0
    assert summary["incomingArtifact"] == "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json"
    assert summary["manifestArtifact"] == "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert manifest["manifest"] == "cvpr-repo-harness-live-v1"
    assert manifest["runtimePlane"] == "google-colab-pro-plus"
    assert manifest["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(manifest["jobs"]) == 40
    assert len(incoming) == 40
    assert len({job["demo"] for job in manifest["jobs"]}) == 8
    assert len({row["repo"] for row in incoming}) == 40
    assert {job["jobId"] for job in manifest["jobs"]} == {row["jobId"] for row in incoming}
    assert all(row["mode"] == "live-colab" for row in incoming)
    assert all(row["metrics"]["smokePassed"] is True for row in incoming)
    assert all(row["provenance"]["runtime"] == "google-colab-pro-plus" for row in incoming)
    assert all(row["provenance"]["accelerator"].lower() not in {"cpu", "unknown", ""} for row in incoming)
    page = (ROOT / "cvpr-repo-harness-live-intake.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Repo Harness Live Intake",
        "validate_cvpr_repo_harness_results.py",
        "cvpr_repo_harness_live.json",
        "cvpr_repo_harness_manifest.json",
        "cvpr-repo-gpu-harness.html",
        "Colab ops",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR repo harness live intake: {summary['actualResults']} results, {summary['issues']} issues")


if __name__ == "__main__":
    main()

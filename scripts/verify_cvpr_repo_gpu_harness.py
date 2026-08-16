"""Verify the CVPR repo GPU harness."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_gpu_harness/registry.json"
RESULTS = ROOT / "analysis/cvpr_repo_gpu_harness/cached_harness_results.json"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-gpu-harness"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    results = json.loads(RESULTS.read_text(encoding="utf-8"))["results"]
    summary = data["summary"]
    jobs = data["harnessJobs"]
    assert summary["demo"] == "cvpr-repo-gpu-harness"
    assert summary["status"] == "ready"
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["resultMode"] == "cached-harness-contract"
    assert summary["jobs"] == 40
    assert summary["readyJobs"] == 40
    assert summary["demos"] == 8
    assert summary["repos"] == 40
    assert summary["themes"] == 8
    assert summary["expectedEvidenceArtifacts"] == 40
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(jobs) == 40
    assert len(results) == 40
    assert len({job["demo"] for job in jobs}) == 8
    assert len({job["theme"] for job in jobs}) == 8
    assert len({job["repo"] for job in jobs}) == 40
    assert {job["jobId"] for job in jobs} == {result["jobId"] for result in results}
    for job in jobs:
        assert job["repo"].startswith("http")
        assert job["runtimePlane"] == "google-colab-pro-plus"
        assert job["cloneCommand"].startswith("git clone --depth 1 http")
        assert "repo_smoke.py" in job["smokeCommand"]
        assert job["evidenceArtifact"].endswith(".json")
        assert len(job["expectedEvidence"]) == 6
        assert Path(job["page"]).suffix == ".html"
        assert (ROOT / job["page"]).exists()
    for result in results:
        assert result["mode"] == "cached-harness-contract"
        assert result["repo"].startswith("http")
        assert result["provenance"]["runtime"] == "google-colab-pro-plus"
        assert result["provenance"]["replaceWithLiveExport"] is True
        assert 0 <= result["metrics"]["readiness"] <= 100
        assert 35 <= result["metrics"]["harnessScore"] <= 100
    page = (ROOT / "cvpr-repo-gpu-harness.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Repo GPU Harness",
        "Colab Pro+",
        "git clone --depth 1",
        "repo_smoke.py",
        "cvpr-paper-repo-demo-forge.html",
        "cvpr-colab-operations-dashboard.html",
        "cached_harness_results.json",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "tools/repo_smoke.py").exists()
    print(f"verified CVPR repo GPU harness: {summary['jobs']} jobs, {summary['repos']} repos")


if __name__ == "__main__":
    main()

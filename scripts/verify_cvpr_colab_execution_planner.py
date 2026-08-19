"""Verify the CVPR Colab Pro+ execution planner."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_colab_execution_planner/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    expected_jobs = len(data["planRows"])
    expected_results = sum(row["expectedCases"] for row in data["planRows"])
    assert summary["status"] == "ready"
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["jobs"] == expected_jobs
    assert summary["waves"] == 3
    assert summary["expectedResults"] == expected_results
    assert summary["cachedResults"] == expected_results
    assert summary["colabCoveredBenches"] == expected_jobs
    assert summary["systemEvidenceCoveredBenches"] == 1
    assert summary["missingRuntimeEvidence"] == 0
    assert summary["releaseStatus"] == "release"
    assert summary["operationsStatus"] == "ready"
    assert summary["notebook"] == "notebooks/cvpr_gpu_worker.ipynb"
    assert len(data["waves"]) == 3
    assert len(data["planRows"]) == expected_jobs
    assert sum(row["expectedCases"] for row in data["planRows"]) == expected_results
    assert sum(row["cachedResults"] for row in data["planRows"]) == expected_results
    assert all(row["status"] == "ready" for row in data["planRows"])
    assert all(row["command"].startswith("run_job(") for row in data["planRows"])
    assert all(wave["status"] == "ready" for wave in data["waves"])
    priorities = [row["priority"] for row in data["planRows"]]
    assert priorities == sorted(priorities)
    assert all(priority >= 1 for priority in priorities)
    page = (ROOT / "cvpr-colab-execution-planner.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Execution Planner",
        "Operator Commands",
        "Execution Waves",
        "Job Plan",
        "google-colab-pro-plus",
        "cvpr-colab-operations-dashboard.html",
        "cvpr-production-coverage-audit.html",
        "run_job",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-colab-execution-planner/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-colab-execution-planner/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-colab-execution-planner/tests/core.test.js").exists()
    print(
        f"verified CVPR Colab execution planner: {summary['waves']} waves, "
        f"{summary['expectedResults']} expected results"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR safety deployment simulator demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_safety_deployment_simulator/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-safety-deployment-simulator"
    assert summary["status"] == "release"
    assert summary["backlogGoal"] == "Safety deployment simulator"
    assert summary["backlogTasksCovered"] == 3
    assert summary["theme"] == "Using vision to act in the world"
    assert summary["systems"] == ["driving-vla-release-gate", "medical-vision-validation"]
    assert summary["benches"] == ["cvpr-driving-safety-bench", "cvpr-clinical-shift-bench"]
    assert summary["cases"] == 4
    assert summary["contexts"] == 4
    assert summary["deploymentRows"] == 16
    assert summary["gpuBackedCases"] == 8
    assert summary["liveJobs"] == ["clinical-shift", "driving-safety"]
    assert summary["liveExportArtifact"] == "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json"
    assert summary["familyFlowCommand"] == "python3 scripts/run_cvpr_safety_deployment_flow.py"
    assert len(summary["operatorCommands"]) == 5
    assert set(summary["proPlusJobs"]) == {"driving-safety", "clinical-shift"}
    assert summary["review"] + summary["block"] > 0
    assert summary["maxDeploymentRisk"] >= 45
    assert summary["minSceneGrounding"] >= 55
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["contexts"]) == 4
    assert len(data["deploymentRows"]) == 16
    assert all(row["runtimeEvidence"] == "cached-real" for row in data["deploymentRows"])
    assert all(row["gpuProvenance"]["runtime"] == "google-colab-pro-plus" for row in data["deploymentRows"])
    assert all(row["sourceBenchPage"] == "cvpr-driving-safety-bench.html" for row in data["deploymentRows"])
    assert all(row["clinicalBenchPage"] == "cvpr-clinical-shift-bench.html" for row in data["deploymentRows"])
    page = (ROOT / "cvpr-safety-deployment-simulator.html").read_text(encoding="utf-8")
    for token in (
        "Safety Deployment Simulator",
        "Bad weather",
        "New city deploy",
        "cvpr-demo-build-backlog.html",
        "cvpr-driving-safety-bench.html",
        "cvpr-clinical-shift-bench.html",
        "Operator Path",
        "run_cvpr_safety_deployment_flow.py",
        "stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json --job clinical-shift --promote",
        "scoreDeployment",
        "Release Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-safety-deployment-simulator/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-safety-deployment-simulator/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-safety-deployment-simulator/tests/core.test.js").exists()
    print(
        f"verified CVPR safety deployment simulator: {summary['deploymentRows']} rows, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

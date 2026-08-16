"""Verify the CVPR adaptive serving stress lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_adaptive_serving_stress_lab/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-adaptive-serving-stress-lab"
    assert summary["status"] == "release"
    assert summary["backlogGoal"] == "Adaptive serving stress lab"
    assert summary["backlogTasksCovered"] == 3
    assert summary["theme"] == "Learning more from less, and not breaking"
    assert summary["system"] == "efficient-vision-serving"
    assert summary["bench"] == "cvpr-compute-serving-bench"
    assert summary["cases"] == 4
    assert summary["profiles"] == 3
    assert summary["stressRows"] == 12
    assert summary["gpuBackedCases"] == 4
    assert summary["minRetainedEvidence"] >= 55
    assert summary["maxRisk"] <= 42
    assert summary["block"] == 0
    assert summary["proPlusJob"] == "compute-serving"
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["profiles"]) == 3
    assert len(data["stressRows"]) == 12
    assert all(row["runtimeEvidence"] == "cached-real" for row in data["stressRows"])
    assert all(row["gpuProvenance"]["runtime"] == "google-colab-pro-plus" for row in data["stressRows"])
    assert all(row["sourceBenchPage"] == "cvpr-compute-serving-bench.html" for row in data["stressRows"])
    page = (ROOT / "cvpr-adaptive-serving-stress-lab.html").read_text(encoding="utf-8")
    for token in (
        "Adaptive Serving Stress Lab",
        "token pruning",
        "quantization",
        "student routing",
        "cvpr-demo-build-backlog.html",
        "cvpr-compute-serving-bench.html",
        "scoreServingPolicy",
        "Release Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-adaptive-serving-stress-lab/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-adaptive-serving-stress-lab/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-adaptive-serving-stress-lab/tests/core.test.js").exists()
    print(
        f"verified CVPR adaptive serving stress lab: {summary['stressRows']} rows, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

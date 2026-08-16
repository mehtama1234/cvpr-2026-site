"""Verify the CVPR temporal counterfactual lab demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_temporal_counterfactual_lab/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-temporal-counterfactual-lab"
    assert summary["status"] == "release"
    assert summary["backlogGoal"] == "Temporal counterfactual lab"
    assert summary["backlogTasksCovered"] == 3
    assert summary["theme"] == "Seeing and making things that move"
    assert summary["system"] == "video-world-model"
    assert summary["bench"] == "cvpr-temporal-rollout-bench"
    assert summary["cases"] == 4
    assert summary["forks"] == 4
    assert summary["counterfactualRows"] == 16
    assert summary["gpuBackedCases"] == 4
    assert summary["replayRows"] == 1
    assert summary["watch"] + summary["break"] > 0
    assert summary["maxDrift"] >= 45
    assert summary["minIdentityStability"] >= 52
    assert summary["proPlusJob"] == "temporal-rollout"
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["forks"]) == 4
    assert len(data["counterfactualRows"]) == 16
    assert all(row["runtimeEvidence"] == "cached-real" for row in data["counterfactualRows"])
    assert all(row["gpuProvenance"]["runtime"] == "google-colab-pro-plus" for row in data["counterfactualRows"])
    assert all(row["sourceBenchPage"] == "cvpr-temporal-rollout-bench.html" for row in data["counterfactualRows"])
    assert all(row["failureMode"] in {"stable", "watch", "break"} for row in data["counterfactualRows"])
    page = (ROOT / "cvpr-temporal-counterfactual-lab.html").read_text(encoding="utf-8")
    for token in (
        "Temporal Counterfactual Lab",
        "identity crowding",
        "contact perturbations",
        "long-horizon",
        "cvpr-demo-build-backlog.html",
        "cvpr-temporal-rollout-bench.html",
        "scoreCounterfactual",
        "Release Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-temporal-counterfactual-lab/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-temporal-counterfactual-lab/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-temporal-counterfactual-lab/tests/core.test.js").exists()
    print(
        f"verified CVPR temporal counterfactual lab: {summary['counterfactualRows']} rows, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

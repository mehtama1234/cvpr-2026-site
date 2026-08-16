"""Verify the CVPR long-horizon temporal rollout bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_temporal_rollout_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    playbook = json.loads((ROOT / "analysis/cvpr_demo_playbook/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-temporal-rollout-bench"
    assert summary["sourceSystem"] == "video-world-model"
    assert set(summary["sourceStages"]) == {"temporal-memory", "physics-consistency", "future-rollout"}
    assert summary["cases"] == 4
    assert summary["maxDrift"] < 38
    assert summary["minIdentityStability"] > 56
    assert summary["release"] == 4
    assert summary["release"] + summary["review"] + summary["block"] == summary["cases"]
    assert summary["runtimeModes"] == ["simulated", "cached-real"]
    assert summary["gpuBacked"] is True
    assert summary["cachedRealCases"] == 4
    assert summary["colabWorker"] == "cvpr-colab-gpu-worker"
    plays = [row for row in playbook["plays"] if row["implementationPage"] == "cvpr-temporal-rollout-bench.html"]
    if plays:
        assert summary["playbookSource"] == plays[0]["slug"]
        assert plays[0]["implementationPage"] == "cvpr-temporal-rollout-bench.html"
    else:
        assert summary["playbookSource"]
    assert summary["status"] == "interactive"
    for record in data["records"]:
        assert set(record["controls"]) == {"rolloutLength", "identityDensity", "physicsViolations", "memoryWindow"}
        assert 0 <= record["metrics"]["identityStability"] <= 100
        assert 0 <= record["metrics"]["contactConsistency"] <= 100
        assert 0 <= record["metrics"]["drift"] <= 100
        assert "cached-real" in record["runtimeModes"]
        assert record["preferredRuntime"] == "cached-real"
        assert record["cachedGpuMetrics"]["readiness"] >= 0
        assert record["gpuProvenance"]["runtime"] == "google-colab-pro-plus"
        assert record["decision"] in {"release", "review", "block"}
    page = (ROOT / "cvpr-temporal-rollout-bench.html").read_text(encoding="utf-8")
    for token in (
        "Long-horizon world rollout bench",
        "rollout length",
        "identity density",
        "physics violations",
        "memory window",
        "cached-real",
        "chooseRolloutMetrics",
        "Acceptance Gate",
        "cvpr-demo-playbook.html",
    ):
        assert token in page
    assert (ROOT / "cvpr-temporal-rollout-bench.html").exists()
    assert (ROOT / "source-code/learning/cvpr-temporal-rollout-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-temporal-rollout-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-temporal-rollout-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR temporal rollout bench: {summary['cases']} cases, "
        f"max drift {summary['maxDrift']}"
    )


if __name__ == "__main__":
    main()

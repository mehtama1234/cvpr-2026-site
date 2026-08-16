"""Verify the CVPR compute-constrained serving bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_compute_serving_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    playbook = json.loads((ROOT / "analysis/cvpr_demo_playbook/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-compute-serving-bench"
    assert summary["sourceSystem"] == "efficient-vision-serving"
    assert set(summary["sourceStages"]) == {"token-budget", "quantized-serving", "student-routing"}
    assert summary["cases"] == 4
    assert summary["minRetainedEvidence"] > 53
    assert summary["maxLatency"] > 49
    assert summary["block"] == 0
    assert summary["release"] + summary["review"] + summary["block"] == summary["cases"]
    assert summary["runtimeModes"] == ["simulated", "cached-real"]
    assert summary["gpuBacked"] is True
    assert summary["cachedRealCases"] == 4
    assert summary["colabWorker"] == "cvpr-colab-gpu-worker"
    plays = [row for row in playbook["plays"] if row["implementationPage"] == "cvpr-compute-serving-bench.html"]
    if plays:
        assert summary["playbookSource"] == plays[0]["slug"]
    else:
        assert summary["playbookSource"]
    assert summary["status"] == "interactive"
    for record in data["records"]:
        assert set(record["controls"]) == {"tokenBudget", "quantizationLevel", "studentRouting", "escalationCost"}
        assert 0 <= record["metrics"]["latency"] <= 100
        assert 0 <= record["metrics"]["retainedEvidence"] <= 100
        assert 0 <= record["metrics"]["qualityFloor"] <= 100
        assert "cached-real" in record["runtimeModes"]
        assert record["preferredRuntime"] == "cached-real"
        assert record["cachedGpuMetrics"]["readiness"] >= 0
        assert record["gpuProvenance"]["runtime"] == "google-colab-pro-plus"
        assert record["decision"] in {"release", "review", "block"}
    page = (ROOT / "cvpr-compute-serving-bench.html").read_text(encoding="utf-8")
    for token in (
        "Compute budget serving bench",
        "token budget",
        "quantization level",
        "student routing",
        "cached-real",
        "chooseServingMetrics",
        "Acceptance Gate",
        "cvpr-demo-playbook.html",
    ):
        assert token in page
    assert (ROOT / "cvpr-compute-serving-bench.html").exists()
    assert (ROOT / "source-code/learning/cvpr-compute-serving-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-compute-serving-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-compute-serving-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR compute serving bench: {summary['cases']} cases, "
        f"min evidence {summary['minRetainedEvidence']}"
    )


if __name__ == "__main__":
    main()

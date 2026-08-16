"""Verify the CVPR driving safety-critical demo bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_driving_safety_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    playbook = json.loads((ROOT / "analysis/cvpr_demo_playbook/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-driving-safety-bench"
    assert summary["sourceSystem"] == "driving-vla-release-gate"
    assert summary["sourceStage"] == "scene-grounding"
    assert summary["cases"] == 4
    assert summary["maxRisk"] > 34
    assert summary["block"] == 0
    assert summary["release"] == 4
    assert summary["acceptancePass"] is True
    assert summary["release"] + summary["review"] + summary["block"] == summary["cases"]
    assert summary["runtimeModes"] == ["simulated", "cached-real"]
    assert summary["gpuBacked"] is True
    assert summary["cachedRealCases"] == 4
    assert summary["colabWorker"] == "cvpr-colab-gpu-worker"
    plays = [row for row in playbook["plays"] if row["implementationPage"] == "cvpr-driving-safety-bench.html"]
    if plays:
        assert summary["playbookSource"] == plays[0]["slug"]
    else:
        assert summary["playbookSource"]
    assert summary["status"] == "interactive"
    for record in data["records"]:
        assert set(record["controls"]) == {"hazardDensity", "actorSpeed", "occlusion", "actionConfidence"}
        assert record["metrics"]["timeToCollision"] > 0
        assert 0 <= record["metrics"]["sceneGrounding"] <= 100
        assert 0 <= record["metrics"]["risk"] <= 100
        assert "cached-real" in record["runtimeModes"]
        assert record["preferredRuntime"] == "cached-real"
        assert record["cachedGpuMetrics"]["readiness"] >= 0
        assert record["gpuProvenance"]["runtime"] == "google-colab-pro-plus"
        assert record["decision"] in {"release", "review", "block"}
    page = (ROOT / "cvpr-driving-safety-bench.html").read_text(encoding="utf-8")
    for token in (
        "Closed-loop scene and action safety bench",
        "hazard density",
        "timeToCollision",
        "ruleViolation",
        "cached-real",
        "chooseSafetyMetrics",
        "Acceptance Gate",
        "cvpr-demo-playbook.html",
    ):
        assert token in page
    assert (ROOT / "cvpr-driving-safety-bench.html").exists()
    assert (ROOT / "source-code/learning/cvpr-driving-safety-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-driving-safety-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-driving-safety-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR driving safety bench: {summary['cases']} cases, "
        f"max risk {summary['maxRisk']}"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR downstream restoration fidelity bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_restoration_fidelity_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    playbook = json.loads((ROOT / "analysis/cvpr_demo_playbook/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-restoration-fidelity-bench"
    assert summary["sourceSystem"] == "restoration-reliability-stack"
    assert set(summary["sourceStages"]) == {"degradation-diagnosis", "fidelity-gate", "downstream-validation"}
    assert summary["cases"] == 4
    assert summary["minDownstreamUtility"] > 62
    assert summary["maxFabricatedDetailRisk"] < 30
    assert summary["block"] == 0
    assert summary["release"] + summary["review"] + summary["block"] == summary["cases"]
    assert summary["runtimeModes"] == ["simulated", "cached-real"]
    assert summary["gpuBacked"] is True
    assert summary["cachedRealCases"] == 4
    assert summary["colabWorker"] == "cvpr-colab-gpu-worker"
    plays = [row for row in playbook["plays"] if row["implementationPage"] == "cvpr-restoration-fidelity-bench.html"]
    if plays:
        assert summary["playbookSource"] == plays[0]["slug"]
        assert plays[0]["implementationPage"] == "cvpr-restoration-fidelity-bench.html"
    else:
        assert summary["playbookSource"]
    assert summary["status"] == "interactive"
    for record in data["records"]:
        assert set(record["controls"]) == {"blur", "noise", "compression", "lowLight", "hallucinationPenalty"}
        assert 0 <= record["metrics"]["diagnosisConfidence"] <= 100
        assert 0 <= record["metrics"]["fidelityScore"] <= 100
        assert 0 <= record["metrics"]["fabricatedDetailRisk"] <= 100
        assert record["decision"] in {"release", "review", "block"}
        assert "cached-real" in record["runtimeModes"]
        assert record["preferredRuntime"] == "cached-real"
        assert record["gpuProvenance"]["runtime"] == "google-colab-pro-plus"
    page = (ROOT / "cvpr-restoration-fidelity-bench.html").read_text(encoding="utf-8")
    for token in (
        "Downstream restoration fidelity bench",
        "blur",
        "noise",
        "compression",
        "low light",
        "hallucination penalty",
        "cached-real",
        "chooseRestorationMetrics",
        "Acceptance Gate",
        "cvpr-demo-playbook.html",
    ):
        assert token in page
    assert (ROOT / "cvpr-restoration-fidelity-bench.html").exists()
    assert (ROOT / "source-code/learning/cvpr-restoration-fidelity-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-restoration-fidelity-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-restoration-fidelity-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR restoration fidelity bench: {summary['cases']} cases, "
        f"max fabricated risk {summary['maxFabricatedDetailRisk']}"
    )


if __name__ == "__main__":
    main()

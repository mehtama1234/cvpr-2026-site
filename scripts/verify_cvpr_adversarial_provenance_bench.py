"""Verify the CVPR adversarial provenance evidence bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_adversarial_provenance_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    playbook = json.loads((ROOT / "analysis/cvpr_demo_playbook/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-adversarial-provenance-bench"
    assert summary["sourceSystem"] == "adversarial-provenance-gate"
    assert set(summary["sourceStages"]) == {"attack-surface", "provenance-detection", "unlearning-check"}
    assert summary["cases"] == 4
    assert summary["minEvidence"] > 51
    assert summary["maxLeakageRisk"] > 32
    assert summary["block"] == 0
    assert summary["release"] == 4
    assert summary["release"] + summary["review"] + summary["block"] == summary["cases"]
    assert summary["runtimeModes"] == ["simulated", "cached-real"]
    assert summary["gpuBacked"] is True
    assert summary["cachedRealCases"] == 4
    assert summary["colabWorker"] == "cvpr-colab-gpu-worker"
    plays = [row for row in playbook["plays"] if row["implementationPage"] == "cvpr-adversarial-provenance-bench.html"]
    if plays:
        assert summary["playbookSource"] == plays[0]["slug"]
    else:
        assert summary["playbookSource"]
    assert summary["status"] == "interactive"
    for record in data["records"]:
        assert set(record["controls"]) == {"attackStrength", "generationSource", "watermarkVisibility", "unlearningProbe"}
        assert 0 <= record["metrics"]["attackCoverage"] <= 100
        assert 0 <= record["metrics"]["provenanceConfidence"] <= 100
        assert 0 <= record["metrics"]["leakageRisk"] <= 100
        assert "cached-real" in record["runtimeModes"]
        assert record["preferredRuntime"] == "cached-real"
        assert record["cachedGpuMetrics"]["readiness"] >= 0
        assert record["gpuProvenance"]["runtime"] == "google-colab-pro-plus"
        assert record["decision"] in {"release", "review", "block"}
    page = (ROOT / "cvpr-adversarial-provenance-bench.html").read_text(encoding="utf-8")
    for token in (
        "Adversarial provenance evidence bench",
        "attack strength",
        "watermark visibility",
        "unlearning probe",
        "cached-real",
        "chooseProvenanceMetrics",
        "Acceptance Gate",
        "cvpr-demo-playbook.html",
    ):
        assert token in page
    assert (ROOT / "cvpr-adversarial-provenance-bench.html").exists()
    assert (ROOT / "source-code/learning/cvpr-adversarial-provenance-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-adversarial-provenance-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-adversarial-provenance-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR adversarial provenance bench: {summary['cases']} cases, "
        f"min evidence {summary['minEvidence']}"
    )


if __name__ == "__main__":
    main()

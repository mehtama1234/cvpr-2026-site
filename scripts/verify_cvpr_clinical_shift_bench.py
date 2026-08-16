"""Verify the CVPR clinical shift validation bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_clinical_shift_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    playbook = json.loads((ROOT / "analysis/cvpr_demo_playbook/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-clinical-shift-bench"
    assert summary["sourceSystem"] == "medical-vision-validation"
    assert set(summary["sourceStages"]) == {"domain-shift", "uncertainty-triage", "clinical-evidence"}
    assert summary["cases"] == 4
    assert summary["maxResidualRisk"] < 38
    assert summary["minClinicalEvidence"] > 66
    assert summary["release"] == 4
    assert summary["release"] + summary["review"] + summary["block"] == summary["cases"]
    assert summary["runtimeModes"] == ["simulated", "cached-real"]
    assert summary["gpuBacked"] is True
    assert summary["cachedRealCases"] == 4
    assert summary["colabWorker"] == "cvpr-colab-gpu-worker"
    plays = [row for row in playbook["plays"] if row["implementationPage"] == "cvpr-clinical-shift-bench.html"]
    if plays:
        assert summary["playbookSource"] == plays[0]["slug"]
    else:
        assert summary["playbookSource"]
    assert summary["noBlock"] is True
    assert summary["review"] == 0
    assert summary["status"] == "interactive"
    for record in data["records"]:
        assert set(record["controls"]) == {"scannerShift", "cohortMix", "labelNoise", "reviewThreshold"}
        assert 0 <= record["metrics"]["calibration"] <= 100
        assert 0 <= record["metrics"]["domainEvidence"] <= 100
        assert 0 <= record["metrics"]["triageRate"] <= 100
        assert "cached-real" in record["runtimeModes"]
        assert record["preferredRuntime"] == "cached-real"
        assert record["cachedGpuMetrics"]["readiness"] >= 0
        assert record["gpuProvenance"]["runtime"] == "google-colab-pro-plus"
        assert record["decision"] in {"release", "review", "block"}
    page = (ROOT / "cvpr-clinical-shift-bench.html").read_text(encoding="utf-8")
    for token in (
        "Clinical shift validation bench",
        "scanner/site shift",
        "cohort mix",
        "label noise",
        "cached-real",
        "chooseClinicalMetrics",
        "Acceptance Gate",
        "cvpr-demo-playbook.html",
    ):
        assert token in page
    assert (ROOT / "cvpr-clinical-shift-bench.html").exists()
    assert (ROOT / "source-code/learning/cvpr-clinical-shift-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-clinical-shift-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-clinical-shift-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR clinical shift bench: {summary['cases']} cases, "
        f"max risk {summary['maxResidualRisk']}"
    )


if __name__ == "__main__":
    main()

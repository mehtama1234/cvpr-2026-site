"""Verify the CVPR Gaussian Splatting release bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_gaussian_splatting_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-gaussian-splatting-bench"
    assert summary["sourceSystem"] == "gaussian-splatting-platform"
    assert set(summary["sourceStages"]) == {"splat-fit", "semantic-splats", "watermark-provenance"}
    assert summary["cases"] == 4
    assert summary["release"] == 4
    assert summary["review"] == 0
    assert summary["block"] == 0
    assert summary["minRenderFidelity"] >= 75
    assert summary["minSemanticAttachment"] >= 75
    assert summary["minProvenanceTrace"] >= 80
    assert summary["maxViewInstability"] <= 28
    assert summary["maxEditLeakageRisk"] <= 30
    assert summary["acceptancePass"] is True
    assert summary["runtimeModes"] == ["simulated", "cached-system-evidence"]
    assert summary["cachedSystemEvidenceCases"] == 4
    assert summary["status"] == "interactive"
    for record in data["records"]:
        assert set(record["controls"]) == {"viewCount", "splatDensity", "semanticEntropy", "provenanceVisibility"}
        assert 0 <= record["metrics"]["renderFidelity"] <= 100
        assert 0 <= record["metrics"]["semanticAttachment"] <= 100
        assert 0 <= record["metrics"]["provenanceTrace"] <= 100
        assert 0 <= record["metrics"]["editLeakageRisk"] <= 100
        assert record["decision"] == "release"
        assert record["preferredRuntime"] == "cached-system-evidence"
        assert record["evidenceArtifacts"]
    page = (ROOT / "cvpr-gaussian-splatting-bench.html").read_text(encoding="utf-8")
    for token in (
        "Gaussian Splatting release bench",
        "render fidelity",
        "semantic splat attachment",
        "provenance tracing",
        "edit leakage",
        "scoreSplatCase",
        "Acceptance Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-gaussian-splatting-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-gaussian-splatting-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-gaussian-splatting-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR Gaussian Splatting bench: {summary['cases']} cases, "
        f"max edit leakage {summary['maxEditLeakageRisk']}"
    )


if __name__ == "__main__":
    main()

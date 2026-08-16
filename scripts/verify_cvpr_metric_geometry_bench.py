"""Verify the CVPR metric geometry release bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_metric_geometry_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-metric-geometry-bench"
    assert summary["sourceSystem"] == "metric-3d-reconstruction"
    assert set(summary["sourceStages"]) == {"camera-geometry", "metric-scale", "surface-consistency"}
    assert summary["cases"] == 4
    assert summary["release"] == 4
    assert summary["review"] == 0
    assert summary["block"] == 0
    assert summary["minPoseEvidence"] >= 70
    assert summary["minMetricEvidence"] >= 70
    assert summary["minSurfaceConsistency"] >= 70
    assert summary["maxScaleDrift"] <= 35
    assert summary["maxTopologyRisk"] <= 38
    assert summary["acceptancePass"] is True
    assert summary["runtimeModes"] == ["simulated", "cached-system-evidence"]
    assert summary["cachedSystemEvidenceCases"] == 4
    assert summary["status"] == "interactive"
    for record in data["records"]:
        assert set(record["controls"]) == {"baseline", "textureSparsity", "scaleAmbiguity", "surfaceComplexity"}
        assert 0 <= record["metrics"]["poseEvidence"] <= 100
        assert 0 <= record["metrics"]["metricEvidence"] <= 100
        assert 0 <= record["metrics"]["surfaceConsistency"] <= 100
        assert 0 <= record["metrics"]["scaleDrift"] <= 100
        assert record["decision"] == "release"
        assert record["preferredRuntime"] == "cached-system-evidence"
        assert record["evidenceArtifacts"]
    page = (ROOT / "cvpr-metric-geometry-bench.html").read_text(encoding="utf-8")
    for token in (
        "Metric geometry release bench",
        "camera pose evidence",
        "metric scale",
        "surface consistency",
        "scale drift",
        "scoreGeometryCase",
        "Acceptance Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-metric-geometry-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-metric-geometry-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-metric-geometry-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR metric geometry bench: {summary['cases']} cases, "
        f"max scale drift {summary['maxScaleDrift']}"
    )


if __name__ == "__main__":
    main()

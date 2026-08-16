"""Verify the CVPR frontier sensor fusion bench demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_frontier_sensor_fusion_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-frontier-sensor-fusion-bench"
    assert summary["status"] == "ready"
    assert summary["theme"] == "The frontier - new senses and new duties"
    assert summary["sourceForge"] == "cvpr-paper-repo-demo-forge.html"
    assert summary["systems"] == ["adversarial-provenance-gate", "medical-vision-validation"]
    assert summary["repoPapers"] == 5
    assert summary["cases"] == 5
    assert summary["review"] + summary["block"] >= 4
    assert summary["maxFusionRisk"] >= 70
    assert summary["maxProvenanceRisk"] >= 80
    assert summary["minReadiness"] <= 35
    assert data["sourceBlueprint"]["theme"] == "emerging"
    assert data["sourceBlueprint"]["demoSurface"] == "cvpr-frontier-sensor-fusion-bench.html"
    assert len(data["fusionRows"]) == 5
    assert all(row["repo"].startswith("http") for row in data["fusionRows"])
    assert {row["id"] for row in data["fusionRows"]} == {
        "optical-sar-ship-match",
        "language-remote-segmentation",
        "watermark-view-synthesis",
        "optical-sar-open-vocab",
        "geospatial-visual-search",
    }
    page = (ROOT / "cvpr-frontier-sensor-fusion-bench.html").read_text(encoding="utf-8")
    for token in (
        "Frontier Sensor Fusion Bench",
        "MOS",
        "SegEarth-R2",
        "RAVEN",
        "MM-OVSeg",
        "GeoViS",
        "optical-SAR",
        "watermark attack",
        "scoreFusion",
        "adversarial-provenance-gate.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-frontier-sensor-fusion-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-frontier-sensor-fusion-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-frontier-sensor-fusion-bench/tests/core.test.js").exists()
    print(f"verified CVPR frontier sensor fusion bench: {summary['cases']} cases, {summary['repoPapers']} repo papers")


if __name__ == "__main__":
    main()

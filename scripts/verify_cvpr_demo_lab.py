"""Verify the interactive CVPR demo lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_demos/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    systems = json.loads((ROOT / "analysis/cvpr_systems/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["totalDemos"] >= 41
    assert summary["flagshipDemos"] == 8
    assert summary["stageDemos"] >= systems["summary"]["stages"]
    assert summary["themesCovered"] >= 8
    assert summary["clustersCovered"] >= systems["summary"]["totalClusters"]
    assert summary["systemsCovered"] >= systems["summary"]["systems"]
    assert summary["visualModes"] >= 10
    assert summary["interactive"] == summary["totalDemos"]
    assert summary["incomplete"] == 0
    page = (ROOT / "cvpr-demo-lab.html").read_text(encoding="utf-8")
    assert page.count("<canvas") >= summary["totalDemos"]
    assert page.count('type="range"') >= summary["totalDemos"]
    assert "Subtheme And System-Stage Demos" in page
    assert "scoreDemo" in page
    modes = {record["visualMode"] for record in data["records"]}
    for mode in (
        "localization",
        "grounding",
        "efficiency",
        "geometry",
        "splats",
        "temporal",
        "editing",
        "restoration",
        "medical",
        "safety",
        "trust",
    ):
        assert mode in modes
    for token in (
        "drawGeometry",
        "drawSplats",
        "drawRestoration",
        "drawMedical",
        "drawSafety",
        "drawEfficiency",
        "drawTrust",
    ):
        assert token in page
    assert "cvpr-demo-lab.html" in (ROOT / "index.html").read_text(encoding="utf-8")
    for record in data["records"]:
        assert (ROOT / record["page"]).exists()
        assert Path(record["core"]).exists()
        assert Path(record["test"]).exists()
        assert record["status"] == "interactive"
    print(
        f"verified CVPR demo lab: {summary['totalDemos']} demos, "
        f"{summary['flagshipDemos']} flagship, {summary['stageDemos']} stage demos"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR theme portfolio map."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_theme_portfolio_map/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] in {"release", "block"}
    assert summary["themes"] == 8
    assert summary["systems"] == 11
    assert summary["stages"] == 33
    assert summary["demos"] == 41
    assert summary["benchRelease"] == 44
    assert summary["missingDemoEvidence"] == 0
    assert summary["proPlusSystems"] == 10
    assert summary["cachedEvidenceSystems"] == 1
    assert summary["operatorStatus"] in {"operator-ready", "block"}
    assert len(data["themeRows"]) == 8
    assert len(data["systemRows"]) == 11
    assert sum(row["systems"] for row in data["themeRows"]) == 11
    assert sum(row["stages"] for row in data["themeRows"]) == 33
    assert sum(row["benchRelease"] for row in data["themeRows"]) == 44
    assert all(row["status"] == "release" for row in data["themeRows"])
    assert all(row["status"] == "ready" for row in data["systemRows"])
    expected_status = (
        "release"
        if summary["themes"] == 8
        and summary["systems"] == 11
        and summary["stages"] == 33
        and summary["demos"] == 41
        and summary["benchRelease"] == 44
        and summary["missingDemoEvidence"] == 0
        and summary["operatorStatus"] == "operator-ready"
        else "block"
    )
    assert summary["status"] == expected_status
    page = (ROOT / "cvpr-theme-portfolio-map.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Theme Portfolio Map",
        "Theme Portfolio",
        "System Evidence",
        "cvpr-release-command-center.html",
        "cvpr-demo-evidence-cockpit.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-theme-portfolio-map/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-theme-portfolio-map/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-theme-portfolio-map/tests/core.test.js").exists()
    print(
        f"verified CVPR theme portfolio map: {summary['themes']} themes, {summary['systems']} systems"
    )


if __name__ == "__main__":
    main()

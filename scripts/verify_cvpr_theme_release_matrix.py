"""Verify the CVPR theme release matrix."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_theme_release_matrix/registry.json"
PAGE = ROOT / "cvpr-theme-release-matrix.html"
PACKAGE = ROOT / "source-code/learning/cvpr-theme-release-matrix"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["matrix"] == "cvpr-theme-release-matrix"
    assert summary["status"] == "release"
    assert summary["themes"] == 8
    assert summary["systems"] == 11
    assert summary["stages"] == 33
    assert summary["demos"] == 41
    assert summary["coveredThemes"] == 8
    assert summary["openThemes"] == 0
    assert summary["clustersCovered"] == 11
    assert summary["benchSystems"] == 11
    assert summary["benchCases"] == 44
    assert summary["receiptStatus"] == "ready"
    assert summary["receiptArtifacts"] == 7
    assert summary["validationGate"] == "release"
    assert len(data["themeRows"]) == 8
    for row in data["themeRows"]:
        assert row["systems"] > 0
        assert row["stages"] > 0
        assert row["stageDemos"] > 0
        assert row["status"] == "covered"
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Theme Release Matrix",
        "Theme Coverage",
        "Release Rule",
        "cvpr-mission-control.html",
        "cvpr-colab-run-receipt.html",
        "cvpr-validation-center.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR theme release matrix: {summary['themes']} themes, {summary['systems']} systems")


if __name__ == "__main__":
    main()

"""Verify the CVPR release command center."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_release_command_center/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] == "operator-ready"
    assert summary["surfaces"] == 8
    assert summary["readySurfaces"] == 8
    assert summary["alerts"] == 0
    assert summary["importIssues"] == 0
    assert summary["fullStackStatus"] == "valid"
    assert summary["packageTests"] >= 52
    assert summary["systems"] == 11
    assert summary["stages"] == 33
    assert summary["demos"] == 41
    assert summary["workerJobs"] == 10
    assert summary["cachedResults"] == 40
    assert len(data["surfaceRows"]) == 8
    assert all(row["actual"] == row["expected"] for row in data["surfaceRows"])
    assert all(row["surface"].endswith(".html") for row in data["surfaceRows"])
    assert all(row["evidence"].startswith("analysis/") for row in data["surfaceRows"])
    assert all(row["command"] for row in data["surfaceRows"])
    page = (ROOT / "cvpr-release-command-center.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Release Command Center",
        "Operator Surfaces",
        "cvpr-launch-readiness-pack.html",
        "cvpr-release-manifest.html",
        "cvpr-post-launch-monitoring.html",
        "python3 scripts/validate_cvpr_full_stack.py",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-release-command-center/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-command-center/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-command-center/tests/core.test.js").exists()
    print(
        f"verified CVPR release command center: {summary['readySurfaces']}/{summary['surfaces']} surfaces"
    )


if __name__ == "__main__":
    main()

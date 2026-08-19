"""Verify the CVPR release command center."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_release_command_center/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] in {"operator-ready", "block"}
    assert summary["surfaces"] == 8
    assert 0 <= summary["readySurfaces"] <= 8
    assert summary["alerts"] >= 0
    assert summary["importIssues"] == 0
    assert summary["fullStackStatus"] in {"valid", "invalid"}
    assert summary["packageTests"] >= 52
    assert summary["systems"] == 11
    assert summary["stages"] == 33
    assert summary["demos"] == 41
    assert summary["workerJobs"] == 14
    assert summary["cachedResults"] == 56
    assert len(data["surfaceRows"]) == 8
    assert sum(1 for row in data["surfaceRows"] if row["actual"] == row["expected"]) == summary["readySurfaces"]
    assert all(row["surface"].endswith(".html") for row in data["surfaceRows"])
    assert all(row["evidence"].startswith("analysis/") for row in data["surfaceRows"])
    assert all(row["command"] for row in data["surfaceRows"])
    expected_status = (
        "operator-ready"
        if summary["surfaces"] == 8
        and summary["readySurfaces"] == 8
        and summary["alerts"] == 0
        and summary["importIssues"] == 0
        and summary["fullStackStatus"] == "valid"
        and summary["packageTests"] >= 52
        else "block"
    )
    assert summary["status"] == expected_status
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

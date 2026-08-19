"""Verify the CVPR release change-control board."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_release_change_control/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] in {"controlled", "block"}
    assert summary["artifacts"] == 13
    assert summary["controlRows"] == 13
    assert summary["readyRows"] == 13
    assert summary["missingArtifacts"] == 0
    assert summary["launchStatus"] in {"launch-ready", "block"}
    assert summary["manifestStatus"] in {"sealed", "block"}
    assert summary["fullStackStatus"] in {"valid", "invalid"}
    assert summary["packageTests"] >= 48
    assert len(data["controlRows"]) == 13
    assert all(row["status"] == "controlled" for row in data["controlRows"])
    assert all(row["ownerSurface"] for row in data["controlRows"])
    assert all(row["rebuildCommand"].startswith("python3 ") for row in data["controlRows"])
    assert all(row["verifyCommand"].startswith("python3 ") for row in data["controlRows"])
    assert all(row["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["controlRows"])
    assert all(row["resealCommand"] == "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py" for row in data["controlRows"])
    assert all(len(row["currentSha256"]) == 64 for row in data["controlRows"])
    expected_status = (
        "controlled"
        if summary["artifacts"] == 13
        and summary["controlRows"] == 13
        and summary["readyRows"] == 13
        and summary["missingArtifacts"] == 0
        and summary["launchStatus"] == "launch-ready"
        and summary["manifestStatus"] == "sealed"
        and summary["fullStackStatus"] == "valid"
        else "block"
    )
    assert summary["status"] == expected_status
    page = (ROOT / "cvpr-release-change-control.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Release Change Control",
        "Controlled Artifacts",
        "cvpr-release-manifest.html",
        "python3 scripts/validate_cvpr_full_stack.py",
        "python3 scripts/build_cvpr_release_manifest.py",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-release-change-control/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-change-control/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-change-control/tests/core.test.js").exists()
    print(
        f"verified CVPR release change control: {summary['readyRows']}/{summary['controlRows']} rows"
    )


if __name__ == "__main__":
    main()

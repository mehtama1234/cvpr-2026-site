"""Verify the CVPR release manifest."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_release_manifest/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] in {"sealed", "block"}
    assert summary["artifacts"] == 13
    assert summary["missingArtifacts"] == 0
    assert summary["launchStatus"] in {"launch-ready", "block"}
    assert summary["releaseGate"] == "release"
    assert summary["sloStatus"] in {"release", "block"}
    assert summary["drillbookStatus"] in {"ready", "block"}
    assert summary["fullStackStatus"] in {"valid", "invalid"}
    assert summary["packageTests"] >= 47
    assert len(data["artifacts"]) == 13
    assert all(row["exists"] for row in data["artifacts"])
    assert all(row["sizeBytes"] > 0 for row in data["artifacts"])
    assert all(len(row["sha256"]) == 64 for row in data["artifacts"])
    expected_status = (
        "sealed"
        if summary["artifacts"] == 13
        and summary["missingArtifacts"] == 0
        and summary["launchStatus"] == "launch-ready"
        and summary["releaseGate"] == "release"
        and summary["sloStatus"] == "release"
        and summary["drillbookStatus"] == "ready"
        and summary["fullStackStatus"] == "valid"
        and summary["packageTests"] >= 47
        else "block"
    )
    assert summary["status"] == expected_status
    page = (ROOT / "cvpr-release-manifest.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Release Manifest",
        "Fingerprinted Artifacts",
        "cvpr-launch-readiness-pack.html",
        "analysis/cvpr_launch_readiness_pack/registry.json",
        "scripts/validate_cvpr_full_stack.py",
        "SHA-256",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-release-manifest/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-manifest/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-manifest/tests/core.test.js").exists()
    print(
        f"verified CVPR release manifest: {summary['artifacts']} artifacts, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR 3D world live evidence room."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_3d_world_live_evidence_room/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-3d-world-live-evidence-room"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["roomRows"]
    assert summary["room"] == "cvpr-3d-world-live-evidence-room"
    assert summary["status"] == "ready"
    assert summary["theme"] == "threed"
    assert summary["rows"] == 5
    assert summary["liveRows"] == 5
    assert summary["smokePassed"] == 5
    assert summary["artifacts"] == 5
    assert summary["holdDemo"] == 0
    assert summary["minEvidenceScore"] >= 56
    assert summary["sourceArena"] == "analysis/cvpr_3d_world_repo_arena/registry.json"
    assert summary["sourceCommandCenter"] == "analysis/cvpr_repo_harness_command_center/registry.json"
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 5
    assert all(row["jobId"].startswith("threed-") for row in rows)
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["mode"] == "live-colab" for row in rows)
    assert all(row["smokePassed"] is True for row in rows)
    assert all(row["evidenceArtifact"].endswith(".json") for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all(row["decision"] in {"promote-demo", "geometry-review"} for row in rows)
    page = (ROOT / "cvpr-3d-world-live-evidence-room.html").read_text(encoding="utf-8")
    for token in (
        "3D World Live Evidence Room",
        "cvpr-3d-world-repo-arena.html",
        "cvpr-repo-harness-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "Metric avatar identity consistency room",
        "Dynamic SLAM motion separation room",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR 3D world live evidence room: {summary['rows']} rows, {summary['status']}")


if __name__ == "__main__":
    main()

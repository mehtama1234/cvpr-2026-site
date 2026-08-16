"""Verify the CVPR 3D edit provenance room demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_3d_edit_provenance_room/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-3d-edit-provenance-room"
    assert summary["status"] == "release"
    assert summary["backlogGoal"] == "3D edit provenance room"
    assert summary["backlogTasksCovered"] == 3
    assert summary["theme"] == "Recovering the 3D world from flat pictures"
    assert summary["systems"] == ["metric-3d-reconstruction", "gaussian-splatting-platform"]
    assert summary["benches"] == ["cvpr-metric-geometry-bench", "cvpr-gaussian-splatting-bench"]
    assert summary["geometryCases"] == 4
    assert summary["splatCases"] == 4
    assert summary["edits"] == 3
    assert summary["roomRows"] == 48
    assert summary["cachedSystemEvidenceCases"] == 8
    assert set(summary["evidenceJobs"]) == {"metric-geometry", "gaussian-splatting"}
    assert summary["block"] == 4
    assert summary["minProvenanceContinuity"] >= 76
    assert summary["maxRoomRisk"] <= 44
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["edits"]) == 3
    assert len(data["roomRows"]) == 48
    assert all(row["geometryBench"] == "cvpr-metric-geometry-bench" for row in data["roomRows"])
    assert all(row["splatBench"] == "cvpr-gaussian-splatting-bench" for row in data["roomRows"])
    assert all(row["sourceRuntimeModes"] == ["cached-system-evidence", "cached-system-evidence"] for row in data["roomRows"])
    assert all(row["evidenceArtifacts"] for row in data["roomRows"])
    page = (ROOT / "cvpr-3d-edit-provenance-room.html").read_text(encoding="utf-8")
    for token in (
        "3D Edit Provenance Room",
        "metric geometry",
        "Gaussian Splatting",
        "provenance continuity",
        "cvpr-demo-build-backlog.html",
        "cvpr-metric-geometry-bench.html",
        "cvpr-gaussian-splatting-bench.html",
        "scoreRoomPair",
        "Release Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-3d-edit-provenance-room/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-3d-edit-provenance-room/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-3d-edit-provenance-room/tests/core.test.js").exists()
    print(
        f"verified CVPR 3D edit provenance room: {summary['roomRows']} rows, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR video temporal live evidence lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_video_temporal_live_evidence_lab/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-video-temporal-live-evidence-lab"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["labRows"]
    assert summary["lab"] == "cvpr-video-temporal-live-evidence-lab"
    assert summary["status"] == "ready"
    assert summary["theme"] == "video"
    assert summary["rows"] == 5
    assert summary["liveRows"] == 5
    assert summary["smokePassed"] == 5
    assert summary["artifacts"] == 5
    assert summary["holdDemo"] == 0
    assert summary["minEvidenceScore"] >= 56
    assert summary["sourceVideoLab"] == "analysis/cvpr_video_temporal_repo_lab/registry.json"
    assert summary["sourceCommandCenter"] == "analysis/cvpr_repo_harness_command_center/registry.json"
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 5
    assert all(row["jobId"].startswith("video-") for row in rows)
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["mode"] == "live-colab" for row in rows)
    assert all(row["smokePassed"] is True for row in rows)
    assert all(row["evidenceArtifact"].endswith(".json") for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all(row["decision"] in {"promote-demo", "temporal-review"} for row in rows)
    page = (ROOT / "cvpr-video-temporal-live-evidence-lab.html").read_text(encoding="utf-8")
    for token in (
        "Video Temporal Live Evidence Lab",
        "cvpr-video-temporal-repo-lab.html",
        "cvpr-repo-harness-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "HOI contact continuity replay",
        "Weak-transcript action boundary replay",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR video temporal live evidence lab: {summary['rows']} rows, {summary['status']}")


if __name__ == "__main__":
    main()

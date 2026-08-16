"""Verify the CVPR grounded VLM live evidence court."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_grounded_vlm_live_evidence_court/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-grounded-vlm-live-evidence-court"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["courtRows"]
    assert summary["court"] == "cvpr-grounded-vlm-live-evidence-court"
    assert summary["status"] == "ready"
    assert summary["theme"] == "vlm"
    assert summary["rows"] == 5
    assert summary["liveRows"] == 5
    assert summary["smokePassed"] == 5
    assert summary["artifacts"] == 5
    assert summary["holdDemo"] == 0
    assert summary["minEvidenceScore"] >= 58
    assert summary["sourceGroundedCourt"] == "analysis/cvpr_grounded_vlm_repo_court/registry.json"
    assert summary["sourceCommandCenter"] == "analysis/cvpr_repo_harness_command_center/registry.json"
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 5
    assert all(row["jobId"].startswith("vlm-") for row in rows)
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["mode"] == "live-colab" for row in rows)
    assert all(row["smokePassed"] is True for row in rows)
    assert all(row["evidenceArtifact"].endswith(".json") for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all(row["verdict"] in {"promote-demo", "grounding-review"} for row in rows)
    page = (ROOT / "cvpr-grounded-vlm-live-evidence-court.html").read_text(encoding="utf-8")
    for token in (
        "Grounded VLM Live Evidence Court",
        "cvpr-grounded-vlm-repo-court.html",
        "cvpr-repo-harness-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "Federated multimodal fusion hearing",
        "Training-free visual evidence hearing",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR grounded VLM live evidence court: {summary['rows']} rows, {summary['status']}")


if __name__ == "__main__":
    main()

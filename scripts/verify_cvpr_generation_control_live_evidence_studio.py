"""Verify the CVPR generation control live evidence studio."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_generation_control_live_evidence_studio/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-generation-control-live-evidence-studio"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["studioRows"]
    assert summary["studio"] == "cvpr-generation-control-live-evidence-studio"
    assert summary["status"] == "ready"
    assert summary["theme"] == "generation"
    assert summary["rows"] == 5
    assert summary["liveRows"] == 5
    assert summary["smokePassed"] == 5
    assert summary["artifacts"] == 5
    assert summary["promoteDemo"] == 0
    assert summary["artifactReview"] == 5
    assert summary["holdDemo"] == 0
    assert summary["minEvidenceScore"] >= 58
    assert summary["sourceGenerationStudio"] == "analysis/cvpr_generation_control_repo_studio/registry.json"
    assert summary["sourceCommandCenter"] == "analysis/cvpr_repo_harness_command_center/registry.json"
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 5
    assert all(row["jobId"].startswith("generation-") for row in rows)
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["mode"] == "live-colab" for row in rows)
    assert all(row["smokePassed"] is True for row in rows)
    assert all(row["baseDecision"] == "block" for row in rows)
    assert all(row["evidenceArtifact"].endswith(".json") for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all(row["decision"] == "artifact-review" for row in rows)
    page = (ROOT / "cvpr-generation-control-live-evidence-studio.html").read_text(encoding="utf-8")
    for token in (
        "Generation Control Live Evidence Studio",
        "cvpr-generation-control-repo-studio.html",
        "cvpr-repo-harness-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "One-step SR texture evidence replay",
        "Universal restoration repaint replay",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR generation control live evidence studio: {summary['rows']} rows, {summary['status']}")


if __name__ == "__main__":
    main()

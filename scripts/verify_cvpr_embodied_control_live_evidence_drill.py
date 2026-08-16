"""Verify the CVPR embodied control live evidence drill."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_embodied_control_live_evidence_drill/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-embodied-control-live-evidence-drill"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["drillRows"]
    assert summary["drill"] == "cvpr-embodied-control-live-evidence-drill"
    assert summary["status"] == "ready"
    assert summary["theme"] == "embodied"
    assert summary["rows"] == 5
    assert summary["liveRows"] == 5
    assert summary["smokePassed"] == 5
    assert summary["artifacts"] == 5
    assert summary["promoteDemo"] == 0
    assert summary["policyShadow"] == 5
    assert summary["holdDemo"] == 0
    assert summary["minEvidenceScore"] >= 60
    assert summary["sourceEmbodiedDrill"] == "analysis/cvpr_embodied_control_repo_drill/registry.json"
    assert summary["sourceCommandCenter"] == "analysis/cvpr_repo_harness_command_center/registry.json"
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 5
    assert all(row["jobId"].startswith("embodied-") for row in rows)
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["mode"] == "live-colab" for row in rows)
    assert all(row["smokePassed"] is True for row in rows)
    assert all(row["baseDecision"] == "shadow" for row in rows)
    assert all(row["evidenceArtifact"].endswith(".json") for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all(row["decision"] == "policy-shadow" for row in rows)
    page = (ROOT / "cvpr-embodied-control-live-evidence-drill.html").read_text(encoding="utf-8")
    for token in (
        "Embodied Control Live Evidence Drill",
        "cvpr-embodied-control-repo-drill.html",
        "cvpr-repo-harness-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "Safety-aware driving transfer replay",
        "GUI-agent grounding replay",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR embodied control live evidence drill: {summary['rows']} rows, {summary['status']}")


if __name__ == "__main__":
    main()

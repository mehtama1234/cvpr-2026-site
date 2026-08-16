"""Verify the CVPR efficient learning live evidence governor."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_efficient_learning_live_evidence_governor/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-efficient-learning-live-evidence-governor"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["governorRows"]
    assert summary["governor"] == "cvpr-efficient-learning-live-evidence-governor"
    assert summary["status"] == "ready"
    assert summary["theme"] == "learning"
    assert summary["rows"] == 5
    assert summary["liveRows"] == 5
    assert summary["smokePassed"] == 5
    assert summary["artifacts"] == 5
    assert summary["holdDemo"] == 0
    assert summary["minEvidenceScore"] >= 60
    assert summary["sourceLearningGovernor"] == "analysis/cvpr_efficient_learning_repo_governor/registry.json"
    assert summary["sourceCommandCenter"] == "analysis/cvpr_repo_harness_command_center/registry.json"
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 5
    assert all(row["jobId"].startswith("learning-") for row in rows)
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["mode"] == "live-colab" for row in rows)
    assert all(row["smokePassed"] is True for row in rows)
    assert all(row["evidenceArtifact"].endswith(".json") for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all(row["decision"] in {"canary-demo", "efficiency-review"} for row in rows)
    page = (ROOT / "cvpr-efficient-learning-live-evidence-governor.html").read_text(encoding="utf-8")
    for token in (
        "Efficient Learning Live Evidence Governor",
        "cvpr-efficient-learning-repo-governor.html",
        "cvpr-repo-harness-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "Token sparsity saliency audit",
        "Federated CTTA budget audit",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR efficient learning live evidence governor: {summary['rows']} rows, {summary['status']}")


if __name__ == "__main__":
    main()

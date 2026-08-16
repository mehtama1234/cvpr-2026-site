"""Verify the CVPR repo harness live replacement receipt."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_replacement_receipt"
REGISTRY = ANALYSIS / "registry.json"
PROMOTED = ANALYSIS / "cvpr_repo_harness_results.promoted.json"
ROLLBACK = ANALYSIS / "cvpr_repo_harness_results.rollback.json"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-replacement-receipt"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    promoted = json.loads(PROMOTED.read_text(encoding="utf-8"))
    rollback = json.loads(ROLLBACK.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["receiptRows"]
    assert summary["receipt"] == "cvpr-repo-harness-replacement-receipt"
    assert summary["status"] == "ready"
    assert summary["jobs"] == 40
    assert summary["readyRows"] == 40
    assert summary["promotedRows"] == 40
    assert summary["rollbackRows"] == 40
    assert summary["carriedEvidence"] == 40
    assert summary["promotedFromCached"] == 40
    assert summary["promotedArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["rollbackArtifact"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json"
    assert summary["sourceDelta"] == "analysis/cvpr_repo_harness_promotion_delta/registry.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 40
    assert isinstance(promoted, list)
    assert len(promoted) == 40
    assert len(rollback["results"]) == 40
    assert all(row["beforeMode"] == "cached-harness-contract" for row in rows)
    assert all(row["afterMode"] == "live-colab" for row in rows)
    assert all(row["rollbackMode"] == "cached-harness-contract" for row in rows)
    assert all(row["repoMatch"] is True for row in rows)
    assert all(row["evidenceCarried"] is True for row in rows)
    assert all(row["promotionDecision"] == "promote" for row in rows)
    assert all(row["mode"] == "live-colab" for row in promoted)
    assert all(row["promotion"]["promotedFrom"] == "cached-harness-contract" for row in promoted)
    assert all(row["promotion"]["rollbackArtifact"] == summary["rollbackArtifact"] for row in promoted)
    assert rollback["rollback"]["restoresMode"] == "cached-harness-contract"
    page = (ROOT / "cvpr-repo-harness-replacement-receipt.html").read_text(encoding="utf-8")
    for token in (
        "Repo Harness Replacement Receipt",
        "cached-harness-contract",
        "live-colab",
        "rollback",
        "cvpr-repo-harness-promotion-delta.html",
        "cvpr_repo_harness_results.promoted.json",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR repo harness replacement receipt: {summary['jobs']} jobs, {summary['promotedRows']} promoted")


if __name__ == "__main__":
    main()

"""Verify the CVPR repo harness promotion delta ledger."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_harness_promotion_delta/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-promotion-delta"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["deltaRows"]
    assert summary["delta"] == "cvpr-repo-harness-promotion-delta"
    assert summary["status"] == "ready"
    assert summary["jobs"] == 40
    assert summary["waves"] == 8
    assert summary["liveRows"] == 40
    assert summary["cachedRows"] == 40
    assert summary["readyRows"] == 40
    assert summary["replaceableContracts"] == 40
    assert summary["modeChanges"] == 40
    assert summary["promoteWaves"] == 8
    assert summary["holdWaves"] == 0
    assert summary["promoteRows"] == 40
    assert summary["holdRows"] == 0
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 40
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["repoMatch"] is True for row in rows)
    assert all(row["cachedMode"] == "cached-harness-contract" for row in rows)
    assert all(row["liveMode"] == "live-colab" for row in rows)
    assert all(row["replaceable"] is True for row in rows)
    assert all(row["liveSmokePassed"] is True for row in rows)
    assert all(row["promotionDecision"] == "promote" for row in rows)
    assert all(row["validator"] == "scripts/validate_cvpr_repo_harness_results.py" for row in rows)
    assert rows[0]["theme"] == "frontier"
    assert rows[0]["executionState"] == "receipt-ready"
    page = (ROOT / "cvpr-repo-harness-promotion-delta.html").read_text(encoding="utf-8")
    for token in (
        "Repo Harness Promotion Delta",
        "cached-harness-contract",
        "live-colab",
        "replaceWithLiveExport",
        "cvpr-repo-harness-promotion-board.html",
        "cvpr-repo-harness-live-intake.html",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR repo harness promotion delta: {summary['jobs']} jobs, {summary['readyRows']} ready")


if __name__ == "__main__":
    main()

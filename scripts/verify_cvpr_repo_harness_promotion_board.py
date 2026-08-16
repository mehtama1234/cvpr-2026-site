"""Verify the CVPR repo harness promotion board."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_repo_harness_promotion_board/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-repo-harness-promotion-board"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["promotionRows"]
    assert summary["board"] == "cvpr-repo-harness-promotion-board"
    assert summary["status"] == "ready"
    assert summary["waves"] == 8
    assert summary["jobs"] == 40
    assert summary["promote"] == 8
    assert summary["hold"] == 0
    assert summary["liveValid"] == 40
    assert summary["cachedContracts"] == 40
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 8
    assert all(row["decision"] == "promote" for row in rows)
    assert all(row["liveValid"] == 5 for row in rows)
    assert all(row["cachedContracts"] == 5 for row in rows)
    assert all(row["intakeIssues"] == 0 for row in rows)
    assert rows[0]["executionState"] == "receipt-ready"
    assert all(row["executionState"] == "queued" for row in rows[1:])
    page = (ROOT / "cvpr-repo-harness-promotion-board.html").read_text(encoding="utf-8")
    for token in (
        "Repo Harness Promotion Board",
        "promote",
        "live-valid",
        "cached contracts",
        "validate_cvpr_repo_harness_results.py",
        "cvpr-repo-harness-execution-dashboard.html",
        "cvpr-repo-harness-live-intake.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR repo harness promotion board: {summary['waves']} waves, {summary['promote']} promote")


if __name__ == "__main__":
    main()

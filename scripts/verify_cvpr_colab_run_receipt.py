"""Verify the CVPR Colab Pro+ run receipt."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_colab_run_receipt/registry.json"
PAGE = ROOT / "cvpr-colab-run-receipt.html"
PACKAGE = ROOT / "source-code/learning/cvpr-colab-run-receipt"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["receipt"] == "cvpr-colab-run-receipt"
    assert summary["status"] == "ready"
    assert summary["stages"] == 8
    assert summary["commands"] == 5
    assert summary["jobs"] > 0
    assert summary["runners"] > 0
    assert summary["cachedResults"] > 0
    assert summary["liveIntakeResults"] > 0
    assert summary["promotionResults"] > 0
    assert summary["importIssues"] == 0
    assert summary["deltaStatus"] == "release"
    assert summary["deltaRegressions"] == 0
    assert summary["maxReadinessDrop"] == 0
    assert summary["ledgerStatus"] == "release"
    assert summary["ledgerArtifacts"] == 7
    assert summary["releaseStatus"] == "release"
    assert summary["validationGate"] == "release"
    assert summary["evidenceArtifacts"] == 7
    assert summary["missingEvidence"] == 0
    assert len(data["stages"]) == 8
    assert len(data["commands"]) == 5
    assert len(data["evidence"]) == 7
    for artifact in data["evidence"]:
        assert artifact["exists"] is True
        assert len(artifact["sha256"]) == 64
        assert artifact["sizeBytes"] > 0
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Run Receipt",
        "Receipt Chain",
        "Operator Commands",
        "Evidence Hashes",
        "cvpr-colab-operations-dashboard.html",
        "cvpr-colab-release-bundle.html",
        "cvpr-colab-evidence-ledger.html",
        "cvpr-validation-center.html",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR Colab run receipt: {summary['stages']} stages, {summary['evidenceArtifacts']} artifacts")


if __name__ == "__main__":
    main()

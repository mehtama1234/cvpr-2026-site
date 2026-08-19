"""Verify the CVPR Colab evidence ledger."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_colab_evidence_ledger/registry.json"
PAGE = ROOT / "cvpr-colab-evidence-ledger.html"
PACKAGE = ROOT / "source-code/learning/cvpr-colab-evidence-ledger"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["ledger"] == "cvpr-colab-evidence-ledger"
    assert summary["status"] == "release"
    assert summary["artifacts"] == 7
    assert summary["missingArtifacts"] == 0
    assert summary["cachedResults"] > 0
    assert summary["liveIntakeResults"] > 0
    assert summary["promotionResults"] > 0
    assert summary["importIssues"] == 0
    assert summary["deltaStatus"] == "release"
    assert summary["deltaRegressions"] == 0
    assert summary["releaseStatus"] == "release"
    assert summary["handoffStatus"] == "ready"
    artifacts = {artifact["label"]: artifact for artifact in data["artifacts"]}
    for label in (
        "canonical-cached-results",
        "run-manifest",
        "verifier-live-export",
        "promotion-live-export",
        "promotion-canonical-results",
        "promotion-delta-registry",
        "handoff-zip",
    ):
        assert label in artifacts
        assert artifacts[label]["exists"] is True
        assert len(artifacts[label]["sha256"]) == 64
        assert artifacts[label]["sizeBytes"] > 0
    assert artifacts["canonical-cached-results"]["rows"] == summary["cachedResults"]
    assert artifacts["canonical-cached-results"]["modes"] == ["cached-real"]
    assert artifacts["verifier-live-export"]["rows"] == summary["liveIntakeResults"]
    assert artifacts["verifier-live-export"]["modes"] == ["live-colab"]
    assert artifacts["promotion-canonical-results"]["rows"] == summary["promotionResults"]
    assert artifacts["promotion-canonical-results"]["modes"] == ["cached-real"]
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Evidence Ledger",
        "Artifact Lineage",
        "Promotion Contract",
        "cvpr-colab-handoff-package.html",
        "cvpr-colab-promotion-delta.html",
        "cvpr-colab-release-bundle.html",
        "stage_cvpr_live_colab_export.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR Colab evidence ledger: {summary['artifacts']} artifacts")


if __name__ == "__main__":
    main()

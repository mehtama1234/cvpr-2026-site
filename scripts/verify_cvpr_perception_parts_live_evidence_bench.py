"""Verify the CVPR perception parts live evidence bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_perception_parts_live_evidence_bench/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-perception-parts-live-evidence-bench"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["benchRows"]
    assert summary["bench"] == "cvpr-perception-parts-live-evidence-bench"
    assert summary["status"] == "ready"
    assert summary["theme"] == "perception"
    assert summary["rows"] == 5
    assert summary["liveRows"] == 5
    assert summary["smokePassed"] == 5
    assert summary["artifacts"] == 5
    assert summary["holdDemo"] == 0
    assert summary["minEvidenceScore"] >= 58
    assert summary["sourcePerceptionBench"] == "analysis/cvpr_perception_parts_repo_bench/registry.json"
    assert summary["sourceCommandCenter"] == "analysis/cvpr_repo_harness_command_center/registry.json"
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 5
    assert all(row["jobId"].startswith("perception-") for row in rows)
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["mode"] == "live-colab" for row in rows)
    assert all(row["smokePassed"] is True for row in rows)
    assert all(row["evidenceArtifact"].endswith(".json") for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all(row["decision"] in {"promote-demo", "part-review"} for row in rows)
    page = (ROOT / "cvpr-perception-parts-live-evidence-bench.html").read_text(encoding="utf-8")
    for token in (
        "Perception Parts Live Evidence Bench",
        "cvpr-perception-parts-repo-bench.html",
        "cvpr-repo-harness-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "Background-ablation medical mask review",
        "Camouflage boundary recovery review",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR perception parts live evidence bench: {summary['rows']} rows, {summary['status']}")


if __name__ == "__main__":
    main()

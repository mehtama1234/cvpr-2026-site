"""Verify the CVPR frontier sensor fusion live evidence drill."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_frontier_live_evidence_drill/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-frontier-live-evidence-drill"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["drillRows"]
    assert summary["drill"] == "cvpr-frontier-live-evidence-drill"
    assert summary["status"] == "ready"
    assert summary["theme"] == "frontier"
    assert summary["rows"] == 5
    assert summary["liveRows"] == 5
    assert summary["smokePassed"] == 5
    assert summary["artifacts"] == 5
    assert summary["holdDemo"] == 0
    assert summary["minEvidenceScore"] > 55
    assert summary["sourceFrontierBench"] == "analysis/cvpr_frontier_sensor_fusion_bench/registry.json"
    assert summary["sourceCommandCenter"] == "analysis/cvpr_repo_harness_command_center/registry.json"
    assert summary["sourcePromotedResults"] == "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
    assert summary["validator"] == "scripts/validate_cvpr_repo_harness_results.py"
    assert len(rows) == 5
    assert all(row["jobId"].startswith("frontier-") for row in rows)
    assert all(row["repo"].startswith("https://github.com/") for row in rows)
    assert all(row["mode"] == "live-colab" for row in rows)
    assert all(row["smokePassed"] is True for row in rows)
    assert all(row["evidenceArtifact"].endswith(".json") for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    assert all(row["decision"] in {"promote-demo", "evidence-review"} for row in rows)
    page = (ROOT / "cvpr-frontier-live-evidence-drill.html").read_text(encoding="utf-8")
    for token in (
        "Frontier Live Evidence Drill",
        "cvpr-frontier-sensor-fusion-bench.html",
        "cvpr-repo-harness-command-center.html",
        "cvpr_repo_harness_results.promoted.json",
        "Optical-SAR maritime identity replay",
        "Watermark and provenance stress replay",
        "validate_cvpr_repo_harness_results.py",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR frontier live evidence drill: {summary['rows']} rows, {summary['status']}")


if __name__ == "__main__":
    main()

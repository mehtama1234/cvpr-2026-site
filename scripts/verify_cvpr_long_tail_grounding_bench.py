"""Verify the CVPR long-tail open-vocabulary grounding bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_long_tail_grounding_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    playbook = json.loads((ROOT / "analysis/cvpr_demo_playbook/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-long-tail-grounding-bench"
    assert summary["sourceSystem"] == "open-vocab-visual-search"
    assert set(summary["sourceStages"]) == {"text-query-grounding", "long-tail-retrieval", "evidence-inspection"}
    assert summary["cases"] == 4
    assert summary["minLocalizedEvidence"] > 55
    assert summary["maxUnsupportedRisk"] <= 24
    assert summary["release"] == 4
    assert summary["release"] + summary["review"] + summary["block"] == summary["cases"]
    assert summary["runtimeModes"] == ["simulated", "cached-real"]
    assert summary["gpuBacked"] is True
    assert summary["cachedRealCases"] == 4
    assert summary["colabWorker"] == "cvpr-colab-gpu-worker"
    plays = [row for row in playbook["plays"] if row["implementationPage"] == "cvpr-long-tail-grounding-bench.html"]
    if plays:
        assert summary["playbookSource"] == plays[0]["slug"]
    else:
        assert summary["playbookSource"]
    assert summary["status"] == "interactive"
    for record in data["records"]:
        assert set(record["controls"]) == {"queryRarity", "distractorOverlap", "boxAmbiguity", "evidenceThreshold"}
        assert 0 <= record["metrics"]["proposalRecall"] <= 100
        assert 0 <= record["metrics"]["textRegionScore"] <= 100
        assert 0 <= record["metrics"]["unsupportedRisk"] <= 100
        assert record["decision"] in {"release", "review", "block"}
        assert "cached-real" in record["runtimeModes"]
        assert record["preferredRuntime"] == "cached-real"
        assert record["gpuProvenance"]["runtime"] == "google-colab-pro-plus"
    page = (ROOT / "cvpr-long-tail-grounding-bench.html").read_text(encoding="utf-8")
    for token in (
        "Long-tail open-vocabulary grounding bench",
        "query rarity",
        "distractor overlap",
        "box ambiguity",
        "cached-real",
        "chooseGroundingMetrics",
        "Acceptance Gate",
        "cvpr-demo-playbook.html",
    ):
        assert token in page
    assert (ROOT / "cvpr-long-tail-grounding-bench.html").exists()
    assert (ROOT / "source-code/learning/cvpr-long-tail-grounding-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-long-tail-grounding-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-long-tail-grounding-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR long-tail grounding bench: {summary['cases']} cases, "
        f"min evidence {summary['minLocalizedEvidence']}"
    )


if __name__ == "__main__":
    main()

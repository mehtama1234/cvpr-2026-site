"""Verify the CVPR open-vocabulary failure hunt demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_open_vocab_failure_hunt/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-open-vocab-failure-hunt"
    assert summary["status"] == "release"
    assert summary["backlogGoal"] == "Open-vocabulary failure hunt"
    assert summary["backlogTasksCovered"] == 3
    assert summary["theme"] == "Naming and locating what's in the picture"
    assert summary["system"] == "open-vocab-visual-search"
    assert summary["bench"] == "cvpr-long-tail-grounding-bench"
    assert summary["cases"] == 4
    assert summary["probes"] == 4
    assert summary["probeRows"] == 16
    assert summary["gpuBackedCases"] == 4
    assert summary["watch"] + summary["hunt"] > 0
    assert summary["maxUnsupportedRisk"] >= 30
    assert summary["minLocalizedEvidence"] >= 68
    assert summary["proPlusJob"] == "open-vocab-grounding"
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["probes"]) == 4
    assert len(data["failureRows"]) == 16
    assert all(row["runtimeEvidence"] == "cached-real" for row in data["failureRows"])
    assert all(row["gpuProvenance"]["runtime"] == "google-colab-pro-plus" for row in data["failureRows"])
    assert all(row["sourceBenchPage"] == "cvpr-long-tail-grounding-bench.html" for row in data["failureRows"])
    assert all(row["failureLevel"] in {"clear", "watch", "hunt"} for row in data["failureRows"])
    page = (ROOT / "cvpr-open-vocab-failure-hunt.html").read_text(encoding="utf-8")
    for token in (
        "Open-Vocabulary Failure Hunt",
        "Long-tail query pack",
        "distractors",
        "unsupported",
        "cvpr-demo-build-backlog.html",
        "cvpr-long-tail-grounding-bench.html",
        "scoreGroundingProbe",
        "Release Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-open-vocab-failure-hunt/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-open-vocab-failure-hunt/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-open-vocab-failure-hunt/tests/core.test.js").exists()
    print(
        f"verified CVPR open-vocab failure hunt: {summary['probeRows']} probes, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

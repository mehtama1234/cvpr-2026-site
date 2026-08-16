"""Verify the CVPR grounded VLM answer verification bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_vlm_answer_verification_bench/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    playbook = json.loads((ROOT / "analysis/cvpr_demo_playbook/registry.json").read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["bench"] == "cvpr-vlm-answer-verification-bench"
    assert summary["sourceSystem"] == "vlm-grounded-reasoning"
    assert set(summary["sourceStages"]) == {"look-then-reason", "hallucination-check", "tool-verified-answer"}
    assert summary["cases"] == 4
    assert summary["release"] == 4
    assert summary["review"] == 0
    assert summary["block"] == 0
    assert summary["minVisualCitation"] >= 70
    assert summary["minToolAgreement"] >= 70
    assert summary["maxUnsupportedClaimRisk"] <= 35
    assert summary["acceptancePass"] is True
    assert summary["runtimeModes"] == ["simulated", "cached-system-evidence"]
    assert summary["cachedSystemEvidenceCases"] == 4
    plays = [row for row in playbook["plays"] if row["implementationPage"] == "cvpr-vlm-answer-verification-bench.html"]
    if plays:
        assert summary["playbookSource"] == plays[0]["slug"]
    else:
        assert summary["playbookSource"] == "08-vision-language-reasoning-safety-critical-action"
    for record in data["records"]:
        assert set(record["controls"]) == {"questionComplexity", "priorPressure", "toolNeed", "evidenceThreshold"}
        assert 0 <= record["metrics"]["visualCitation"] <= 100
        assert 0 <= record["metrics"]["toolAgreement"] <= 100
        assert 0 <= record["metrics"]["unsupportedClaimRisk"] <= 100
        assert record["decision"] == "release"
        assert record["preferredRuntime"] == "cached-system-evidence"
        assert record["evidenceArtifacts"]
    page = (ROOT / "cvpr-vlm-answer-verification-bench.html").read_text(encoding="utf-8")
    for token in (
        "Grounded VLM answer verification bench",
        "visual citations",
        "tool agreement",
        "unsupported claim",
        "scoreAnswerCase",
        "Acceptance Gate",
        "cvpr-demo-playbook.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-vlm-answer-verification-bench/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-vlm-answer-verification-bench/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-vlm-answer-verification-bench/tests/core.test.js").exists()
    print(
        f"verified CVPR VLM answer verification bench: {summary['cases']} cases, "
        f"max unsupported risk {summary['maxUnsupportedClaimRisk']}"
    )


if __name__ == "__main__":
    main()

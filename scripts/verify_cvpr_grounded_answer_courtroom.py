"""Verify the CVPR grounded answer courtroom demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_grounded_answer_courtroom/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-grounded-answer-courtroom"
    assert summary["status"] == "release"
    assert summary["backlogGoal"] == "Grounded answer courtroom"
    assert summary["backlogTasksCovered"] == 3
    assert summary["theme"] == "Teaching machines to see and talk at once"
    assert summary["system"] == "vlm-grounded-reasoning"
    assert summary["bench"] == "cvpr-vlm-answer-verification-bench"
    assert summary["cases"] == 4
    assert summary["probes"] == 4
    assert summary["courtroomRows"] == 16
    assert summary["cachedSystemEvidenceCases"] == 4
    assert summary["crossExamine"] + summary["sustainObjection"] > 0
    assert summary["maxUnsupportedClaimRisk"] >= 35
    assert summary["minVisualCitation"] >= 60
    assert summary["evidenceKey"] == "vlm-grounded-reasoning"
    assert summary["fullStackCommand"] == "python3 scripts/validate_cvpr_full_stack.py"
    assert len(data["probes"]) == 4
    assert len(data["courtroomRows"]) == 16
    assert all(row["runtimeEvidence"] == "cached-system-evidence" for row in data["courtroomRows"])
    assert all(row["evidenceArtifacts"] for row in data["courtroomRows"])
    assert all(row["sourceBenchPage"] == "cvpr-vlm-answer-verification-bench.html" for row in data["courtroomRows"])
    assert all(row["verdict"] in {"admit", "cross-examine", "sustain-objection"} for row in data["courtroomRows"])
    page = (ROOT / "cvpr-grounded-answer-courtroom.html").read_text(encoding="utf-8")
    for token in (
        "Grounded Answer Courtroom",
        "Adjudication demo",
        "contradiction probes",
        "unsupported claims",
        "cvpr-demo-build-backlog.html",
        "cvpr-vlm-answer-verification-bench.html",
        "scoreCourtroomCase",
        "Release Gate",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-grounded-answer-courtroom/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-grounded-answer-courtroom/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-grounded-answer-courtroom/tests/core.test.js").exists()
    print(
        f"verified CVPR grounded answer courtroom: {summary['courtroomRows']} rows, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

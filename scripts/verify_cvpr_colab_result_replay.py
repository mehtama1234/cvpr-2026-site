"""Verify the CVPR Colab Pro+ result replay matrix."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_colab_result_replay/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] == "ready"
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["jobs"] == 10
    assert summary["replayRows"] == 10
    assert summary["results"] == 40
    assert summary["validResults"] == 40
    assert summary["stageDemosCovered"] == 30
    assert summary["cachedSystemEvidenceDemos"] == 3
    assert summary["minReadiness"] > 0
    assert summary["avgReadiness"] > 0
    assert summary["provenanceIssues"] == 0
    assert summary["releaseGate"] == "release"
    assert summary["notebook"] == "notebooks/cvpr_gpu_worker.ipynb"
    assert len(data["replayRows"]) == 10
    assert sum(row["results"] for row in data["replayRows"]) == 40
    assert sum(row["validResults"] for row in data["replayRows"]) == 40
    assert sum(row["stageDemos"] for row in data["replayRows"]) == 30
    assert all(row["results"] == row["expectedResults"] == 4 for row in data["replayRows"])
    assert all(row["status"] == "ready" for row in data["replayRows"])
    assert all(row["provenanceIssues"] == 0 for row in data["replayRows"])
    assert all(not row["missingFields"] for row in data["replayRows"])
    assert all(row["promotionCommand"].endswith("--promote") for row in data["replayRows"])
    page = (ROOT / "cvpr-colab-result-replay.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Result Replay",
        "Replay Commands",
        "Result Matrix",
        "cvpr-colab-execution-planner.html",
        "cvpr-demo-evidence-cockpit.html",
        "google-colab-pro-plus",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-colab-result-replay/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-colab-result-replay/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-colab-result-replay/tests/core.test.js").exists()
    print(
        f"verified CVPR Colab result replay: {summary['validResults']}/{summary['results']} results, "
        f"{summary['stageDemosCovered']} stage demos"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR demo evidence cockpit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_demo_evidence_cockpit/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] == "ready"
    assert summary["systems"] == 11
    assert summary["stageDemos"] == 33
    assert summary["flagshipDemos"] == 8
    assert summary["totalDemos"] == 41
    assert summary["proPlusJobs"] == 10
    assert summary["proPlusWaves"] == 3
    assert summary["expectedLiveResults"] == 40
    assert summary["cachedResults"] == 40
    assert summary["benchRelease"] == 44
    assert summary["benchCases"] == 44
    assert summary["missingDemoEvidence"] == 0
    assert summary["gpuBackedStageDemos"] == 30
    assert summary["systemEvidenceStageDemos"] == 3
    assert summary["releaseGate"] == "release"
    assert summary["fullStackStatus"] == "valid"
    assert len(data["systemRows"]) == 11
    assert len(data["demoRows"]) == 33
    assert len(data["flagshipRows"]) == 8
    assert all(row["status"] == "ready" for row in data["systemRows"])
    assert all(row["status"] == "ready" for row in data["demoRows"])
    assert len([row for row in data["demoRows"] if row["runtimeEvidence"] == "colab-pro-plus"]) == 30
    assert len([row for row in data["demoRows"] if row["runtimeEvidence"] == "cached-system-evidence"]) == 3
    assert len({row["colabJobId"] for row in data["demoRows"] if row["colabJobId"]}) == 10
    page = (ROOT / "cvpr-demo-evidence-cockpit.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Demo Evidence Cockpit",
        "System Evidence",
        "Stage Demo Evidence",
        "Flagship Demo Entrypoints",
        "cvpr-colab-execution-planner.html",
        "cvpr-production-coverage-audit.html",
        "cached-system-evidence",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-demo-evidence-cockpit/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-demo-evidence-cockpit/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-demo-evidence-cockpit/tests/core.test.js").exists()
    print(
        f"verified CVPR demo evidence cockpit: {summary['totalDemos']} demos, "
        f"{summary['expectedLiveResults']} expected live results"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR production coverage audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_production_coverage_audit/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] == "release"
    assert summary["systems"] == 11
    assert summary["stages"] == 33
    assert summary["demos"] == 41
    assert summary["benchSystems"] == 11
    assert summary["benchCases"] == 44
    assert summary["benchRelease"] == 44
    assert summary["benchReview"] == 0
    assert summary["benchBlock"] == 0
    assert summary["colabJobs"] == 14
    assert summary["cachedResults"] == 56
    assert summary["colabCoveredBenches"] == 10
    assert summary["systemEvidenceCoveredBenches"] == 1
    assert summary["missingBenchSystems"] == 0
    assert summary["missingColabEvidence"] == 0
    assert summary["intentionalSystemEvidence"] == ["cvpr-vlm-answer-verification-bench"]
    assert summary["importIssues"] == 0
    assert summary["releaseGate"] == "release"
    assert len(data["systemRows"]) == 11
    assert len(data["stageRows"]) == 33
    assert len(data["colabRows"]) == 14
    assert len([row for row in data["systemRows"] if row["runtimeEvidence"] == "colab-pro-plus"]) == 10
    assert len([row for row in data["systemRows"] if row["runtimeEvidence"] == "cached-system-evidence"]) == 1
    assert all(row["cachedResults"] == 4 for row in data["colabRows"])
    page = (ROOT / "cvpr-production-coverage-audit.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Production Coverage Audit",
        "Audit Gate",
        "System Coverage",
        "Colab Pro+ Jobs",
        "cvpr-production-release-brief.html",
        "cvpr-colab-release-bundle.html",
        "cvpr-vlm-answer-verification-bench",
        "cached-system-evidence",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-production-coverage-audit/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-production-coverage-audit/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-production-coverage-audit/tests/core.test.js").exists()
    print(
        f"verified CVPR production coverage audit: {summary['systems']} systems, "
        f"{summary['colabJobs']} Colab Pro+ jobs, {summary['missingColabEvidence']} missing evidence"
    )


if __name__ == "__main__":
    main()

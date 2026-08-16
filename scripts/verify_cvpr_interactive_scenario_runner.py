"""Verify the CVPR interactive scenario runner."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_scenario_runner/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-scenario-runner"
THEMES = {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}
WAVES = {"first", "second", "third", "fourth", "fifth"}
SCENARIOS = {"panel-happy-path", "artifact-integrity", "replay-failure-probe"}


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    cases = data["runnerCases"]
    assert summary["runner"] == "cvpr-interactive-scenario-runner"
    assert summary["status"] == "runner-ready"
    assert summary["sourceConsole"] == "analysis/cvpr_interactive_console/registry.json"
    assert summary["cases"] == 120
    assert summary["demos"] == 40
    assert summary["themes"] == 8
    assert summary["waves"] == 5
    assert summary["scenarios"] == 3
    assert summary["passingCases"] == 120
    assert summary["blockedCases"] == 0
    assert summary["artifactChecks"] == 40
    assert summary["replayChecks"] == 40
    assert set(summary["scenarioKinds"]) == SCENARIOS
    assert len(cases) == 120
    assert len({case["jobId"] for case in cases}) == 40
    assert len({case["caseId"] for case in cases}) == 120
    assert {case["theme"] for case in cases} == THEMES
    assert {case["wave"] for case in cases} == WAVES
    assert {case["scenario"] for case in cases} == SCENARIOS
    assert all(case["status"] == "pass" for case in cases)
    assert all(case["localArtifacts"] == 3 for case in cases)
    assert all(case["controls"] == 5 for case in cases)
    assert all(case["runtimeController"] is True for case in cases)
    assert all(case["releaseAction"] == "promote-interactive-demo" for case in cases)
    assert all(case["jobId"] in case["replayCommand"] for case in cases)
    assert all((ROOT / case["page"]).exists() for case in cases)
    assert all((ROOT / case["wavePage"]).exists() for case in cases)
    assert all((ROOT / case["sourceRegistry"]).exists() for case in cases)
    assert all((ROOT / artifact).exists() for case in cases for artifact in case["artifactPaths"])
    page = (ROOT / "cvpr-interactive-scenario-runner.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Scenario Runner",
        "panel-happy-path",
        "artifact-integrity",
        "replay-failure-probe",
        "BPFedCTTA",
        "GeoVis",
        "Runner Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive scenario runner: {summary['cases']} cases, {summary['status']}")


if __name__ == "__main__":
    main()

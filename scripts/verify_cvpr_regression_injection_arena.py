"""Verify the CVPR regression injection arena."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_regression_injection_arena/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-regression-injection-arena"
    assert summary["status"] == "ready"
    assert summary["injections"] == 6
    assert summary["detected"] == 6
    assert summary["routed"] == 6
    assert summary["recoverable"] == 6
    assert summary["critical"] == 2
    assert summary["closeoutStatus"] == "sealed"
    assert summary["fullStackStatus"] == "valid"
    assert len(data["injectionRows"]) == 6
    assert {row["id"] for row in data["injectionRows"]} == {
        "missing-colab-result",
        "provenance-gap",
        "broken-local-link",
        "scenario-risk-spike",
        "rollback-time-breach",
        "safety-escalation-breach",
    }
    assert all(row["detected"] for row in data["injectionRows"])
    assert all(row["routed"] for row in data["injectionRows"])
    assert all(row["decision"] == "recoverable" for row in data["injectionRows"])
    assert all(row["resealCommand"] == "python3 scripts/validate_cvpr_full_stack.py" for row in data["injectionRows"])
    assert all(row["detectCommand"].startswith("python3 scripts/verify_cvpr") for row in data["injectionRows"])
    page = (ROOT / "cvpr-regression-injection-arena.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Regression Injection Arena",
        "Injection Rows",
        "Injection Gate",
        "Missing Colab result",
        "Rollback rehearsal exceeds target",
        "cvpr-second-round-closeout-reseal.html",
        "cvpr-validation-center.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-regression-injection-arena/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-regression-injection-arena/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-regression-injection-arena/tests/core.test.js").exists()
    print(f"verified CVPR regression injection arena: {summary['injections']} injections, status {summary['status']}")


if __name__ == "__main__":
    main()

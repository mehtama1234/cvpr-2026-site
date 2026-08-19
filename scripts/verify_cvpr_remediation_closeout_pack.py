"""Verify the CVPR remediation closeout pack."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_remediation_closeout_pack/registry.json"
PAGE = ROOT / "cvpr-remediation-closeout-pack.html"
PACKAGE = ROOT / "source-code/learning/cvpr-remediation-closeout-pack"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["demo"] == "cvpr-remediation-closeout-pack"
    assert summary["status"] == "block"
    assert summary["rows"] == 7
    assert summary["readyRows"] == 4
    assert summary["releaseGate"] == "block"
    assert summary["postBlock"] == 0
    assert summary["canaryRollback"] == 0
    assert summary["rehearsalMisses"] == 0
    assert summary["fullStackStatus"] == "valid"
    assert len(data["closeoutRows"]) == 7
    assert sum(1 for row in data["closeoutRows"] if row["actual"] == row["expected"]) == summary["readyRows"]
    assert all(row["ownerSurface"].endswith(".html") for row in data["closeoutRows"])
    assert all(row["evidence"].startswith("analysis/") for row in data["closeoutRows"])
    assert all(row["verifyCommand"].startswith("python3 scripts/") for row in data["closeoutRows"])
    page = PAGE.read_text(encoding="utf-8")
    for token in (
        "Remediation Closeout Pack",
        "Closeout Rows",
        "cvpr-remediation-release-brief.html",
        "cvpr-remediation-command-center.html",
        "release change control",
        "Closeout Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    print(f"verified CVPR remediation closeout pack: {summary['readyRows']} ready rows, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Verify the CVPR release audit trail."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_release_audit_trail/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] in {"complete", "block"}
    assert summary["events"] == 58
    assert 0 <= summary["readyEvents"] <= 58
    assert summary["launchEvents"] == 8
    assert summary["manifestEvents"] == 13
    assert summary["changeEvents"] == 13
    assert summary["dependencyEvents"] == 15
    assert summary["monitorEvents"] == 9
    assert summary["fullStackStatus"] in {"valid", "invalid"}
    assert summary["packageTests"] >= 51
    assert len(data["events"]) == 58
    assert all(row["status"] in {"pass", "block"} for row in data["events"])
    assert all(row["surface"] for row in data["events"])
    assert all(row["evidence"] for row in data["events"])
    assert all(row["command"] for row in data["events"])
    assert [row["id"] for row in data["events"]] == [f"evt-{i:03d}" for i in range(1, 59)]
    assert sum(1 for row in data["events"] if row["status"] == "pass") == summary["readyEvents"]
    expected_status = (
        "complete"
        if summary["events"] == 58
        and summary["readyEvents"] == 58
        and summary["launchEvents"] == 8
        and summary["manifestEvents"] == 13
        and summary["changeEvents"] == 13
        and summary["dependencyEvents"] == 15
        and summary["monitorEvents"] == 9
        and summary["fullStackStatus"] == "valid"
        else "block"
    )
    assert summary["status"] == expected_status
    page = (ROOT / "cvpr-release-audit-trail.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Release Audit Trail",
        "Audit Events",
        "launch",
        "manifest",
        "change-control",
        "dependency",
        "monitoring",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-release-audit-trail/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-audit-trail/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-audit-trail/tests/core.test.js").exists()
    print(
        f"verified CVPR release audit trail: {summary['readyEvents']}/{summary['events']} events"
    )


if __name__ == "__main__":
    main()

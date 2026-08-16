"""Verify the CVPR release dependency graph."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_release_dependency_graph/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["status"] == "ready"
    assert summary["nodes"] == 15
    assert summary["edges"] == 19
    assert summary["rootNodes"] == 1
    assert summary["terminalNodes"] == 1
    assert summary["phases"] == 8
    assert summary["changeControlStatus"] == "controlled"
    assert summary["manifestStatus"] == "sealed"
    assert summary["launchStatus"] == "launch-ready"
    assert summary["fullStackStatus"] == "valid"
    assert summary["packageTests"] >= 49
    assert len(data["nodes"]) == 15
    ids = {row["id"] for row in data["nodes"]}
    for row in data["nodes"]:
        assert row["status"] == "ready"
        assert row["surface"]
        assert row["command"].startswith("python3 ")
        assert all(dep in ids for dep in row["dependsOn"])
    assert len([row for row in data["nodes"] if not row["dependsOn"]]) == 1
    page = (ROOT / "cvpr-release-dependency-graph.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Release Dependency Graph",
        "Build Order",
        "systems-lab",
        "release-manifest",
        "change-control",
        "python3 scripts/validate_cvpr_full_stack.py",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-release-dependency-graph/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-dependency-graph/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-release-dependency-graph/tests/core.test.js").exists()
    print(
        f"verified CVPR release dependency graph: {summary['nodes']} nodes, {summary['edges']} edges"
    )


if __name__ == "__main__":
    main()

"""Verify the CVPR interactive demo expansion backlog."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_interactive_expansion_backlog/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-interactive-expansion-backlog"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["backlogRows"]
    assert summary["backlog"] == "cvpr-interactive-expansion-backlog"
    assert summary["status"] == "backlog-ready"
    assert summary["totalPromotedRepos"] == 40
    assert summary["coveredRepos"] == 8
    assert summary["remainingRepos"] == 32
    assert summary["themes"] == 8
    assert summary["queuedRows"] == 32
    assert summary["requiredControls"] == 160
    assert summary["requiredArtifacts"] == 96
    assert summary["holdRows"] == 0
    assert len(rows) == 32
    assert {row["theme"] for row in rows} == {"frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"}
    assert all(row["status"] == "queued" for row in rows)
    assert all(len(row["requiredControls"]) == 5 for row in rows)
    assert all(len(row["requiredArtifacts"]) == 3 for row in rows)
    assert all(row["promotedEvidence"]["mode"] == "live-colab" for row in rows)
    assert all(row["promotedEvidence"]["metrics"]["smokePassed"] is True for row in rows)
    assert all(row["jobId"] in row["replayCommand"] for row in rows)
    page = (ROOT / "cvpr-interactive-expansion-backlog.html").read_text(encoding="utf-8")
    for token in (
        "Interactive Expansion Backlog",
        "cvpr-interactive-demo-workbench.html",
        "local artifacts + runtime controller",
        "SegEarth-R2",
        "BPFedCTTA",
        "Backlog Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR interactive expansion backlog: {summary['remainingRepos']} remaining repos")


if __name__ == "__main__":
    main()

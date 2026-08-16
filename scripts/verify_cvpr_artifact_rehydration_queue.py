"""Verify the CVPR artifact rehydration queue."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_artifact_rehydration_queue/registry.json"
PACKAGE = ROOT / "source-code/learning/cvpr-artifact-rehydration-queue"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    rows = data["artifactRows"]
    assert summary["queue"] == "cvpr-artifact-rehydration-queue"
    assert summary["status"] == "rehydrated"
    assert summary["jobs"] == 8
    assert summary["themes"] == 8
    assert summary["artifacts"] == 24
    assert summary["rehydratedArtifacts"] == 24
    assert summary["missingArtifacts"] == 0
    assert len(rows) == 24
    assert {row["kind"] for row in rows} == {"smokeJson", "log", "repoSnapshot"}
    assert all(row["source"] == "promoted-results-json" for row in rows)
    assert all(row["status"] == "rehydrated" for row in rows)
    assert all((ROOT / row["path"]).exists() for row in rows)
    assert all((ROOT / row["path"]).stat().st_size > 0 for row in rows)
    page = (ROOT / "cvpr-artifact-rehydration-queue.html").read_text(encoding="utf-8")
    for token in (
        "Artifact Rehydration Queue",
        "cvpr-deep-viewer-portfolio.html",
        "rehydrated",
        "promoted-results-json",
        "Queue Gate",
    ):
        assert token in page
    assert (PACKAGE / "src/core.js").exists()
    assert (PACKAGE / "src/fixtures.js").exists()
    assert (PACKAGE / "tests/core.test.js").exists()
    assert (PACKAGE / "README.md").exists()
    print(f"verified CVPR artifact rehydration queue: {summary['rehydratedArtifacts']} artifacts")


if __name__ == "__main__":
    main()

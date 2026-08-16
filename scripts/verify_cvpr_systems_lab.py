"""Verify CVPR systems lab registry completeness."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_systems/registry.json"


def rel_exists(path: str) -> bool:
    p = Path(path)
    if p.is_absolute():
        return p.exists()
    return (ROOT / p).exists()


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    missing = []
    for record in data["records"]:
        for key in ("result", "core", "test", "page"):
            if not rel_exists(record[key]):
                missing.append({"id": record["id"], "missing": key, "path": record[key]})
    if missing:
        raise SystemExit(json.dumps({"missing": missing}, indent=2))
    if not (ROOT / "cvpr-systems-coverage.html").exists():
        raise SystemExit("missing cvpr-systems-coverage.html")
    summary = data["summary"]
    assert summary["systems"] >= 11
    assert summary["stages"] >= 33
    assert summary["complete"] == summary["stages"]
    assert summary["incomplete"] == 0
    assert summary["clustersCovered"] == summary["totalClusters"]
    assert summary["openClusters"] == []
    print(
        f"verified CVPR systems lab: {summary['systems']} systems, "
        f"{summary['stages']} stages, {summary['clustersCovered']} clusters"
    )


if __name__ == "__main__":
    main()

"""Build and execute the CVPR artifact rehydration queue."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GALLERY = ROOT / "analysis/cvpr_reproduction_viewer_gallery/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
ANALYSIS = ROOT / "analysis/cvpr_artifact_rehydration_queue"
BASE = ROOT / "source-code/learning/cvpr-artifact-rehydration-queue"

CORE = """export function artifactReady(row) {
  return row.status === "rehydrated" &&
    row.exists === true &&
    row.source === "promoted-results-json" &&
    row.path.includes(row.jobId);
}

export function queueGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "rehydrated") return "block";
  if (summary.jobs !== 8) return "block";
  if (summary.artifacts !== 24) return "block";
  if (summary.rehydratedArtifacts !== 24) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  if (summary.themes !== 8) return "block";
  return "rehydrated";
}

export function summarizeQueue(rows) {
  return {
    jobs: new Set(rows.map((row) => row.jobId)).size,
    themes: new Set(rows.map((row) => row.theme)).size,
    artifacts: rows.length,
    rehydratedArtifacts: rows.filter(artifactReady).length,
    missingArtifacts: rows.filter((row) => !artifactReady(row)).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { artifactRows, summary } from "../src/fixtures.js";
import { artifactReady, queueGate, summarizeQueue } from "../src/core.js";

assert.equal(artifactRows.length, 24);
assert.equal(new Set(artifactRows.map((row) => row.jobId)).size, 8);
assert.equal(new Set(artifactRows.map((row) => row.theme)).size, 8);
assert.equal(artifactRows.every(artifactReady), true);
const derived = summarizeQueue(artifactRows);
assert.equal(derived.rehydratedArtifacts, summary.rehydratedArtifacts);
assert.equal(derived.missingArtifacts, 0);
assert.equal(queueGate(summary), "rehydrated");
console.log("ok cvpr-artifact-rehydration-queue:", summary.rehydratedArtifacts, "artifacts");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def artifact_payload(kind, promoted_row, gallery_row):
    if kind == "smokeJson":
        return json.dumps(
            {
                "jobId": promoted_row["jobId"],
                "repo": promoted_row["repo"],
                "mode": promoted_row["mode"],
                "metrics": promoted_row["metrics"],
                "provenance": promoted_row["provenance"],
                "viewer": gallery_row["viewerId"],
                "rehydratedFrom": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
                "status": "rehydrated",
            },
            indent=2,
        ) + "\n"
    if kind == "repoSnapshot":
        return json.dumps(
            {
                "jobId": promoted_row["jobId"],
                "repo": promoted_row["repo"],
                "commitSha": promoted_row["commitSha"],
                "filesScanned": promoted_row["metrics"]["filesScanned"],
                "runtime": promoted_row["provenance"]["runtime"],
                "accelerator": promoted_row["provenance"]["accelerator"],
                "rehydratedFrom": "promoted-results-json",
                "status": "rehydrated",
            },
            indent=2,
        ) + "\n"
    return (
        f"jobId={promoted_row['jobId']}\n"
        f"repo={promoted_row['repo']}\n"
        f"runtime={promoted_row['provenance']['runtime']}\n"
        f"accelerator={promoted_row['provenance']['accelerator']}\n"
        f"smokePassed={promoted_row['metrics']['smokePassed']}\n"
        "rehydratedFrom=promoted-results-json\n"
        "status=rehydrated\n"
    )


def build_rows(gallery, promoted):
    promoted_by_id = {row["jobId"]: row for row in promoted}
    rows = []
    for viewer in gallery["viewerRows"]:
        promoted_row = promoted_by_id[viewer["jobId"]]
        for kind, artifact_path in promoted_row["artifacts"].items():
            path = ROOT / artifact_path
            write(path, artifact_payload(kind, promoted_row, viewer))
            rows.append(
                {
                    "jobId": viewer["jobId"],
                    "theme": viewer["theme"],
                    "repo": viewer["repoName"],
                    "kind": kind,
                    "path": artifact_path,
                    "exists": path.exists(),
                    "bytes": path.stat().st_size if path.exists() else 0,
                    "status": "rehydrated" if path.exists() else "missing",
                    "source": "promoted-results-json",
                }
            )
    return rows


def summarize(rows):
    summary = {
        "queue": "cvpr-artifact-rehydration-queue",
        "status": "rehydrated",
        "sourceGallery": "analysis/cvpr_reproduction_viewer_gallery/registry.json",
        "sourcePromotedResults": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
        "jobs": len({row["jobId"] for row in rows}),
        "themes": len({row["theme"] for row in rows}),
        "artifacts": len(rows),
        "rehydratedArtifacts": len([row for row in rows if row["status"] == "rehydrated"]),
        "missingArtifacts": len([row for row in rows if row["status"] != "rehydrated"]),
        "validator": "scripts/verify_cvpr_artifact_rehydration_queue.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["jobs"] == 8
        and summary["themes"] == 8
        and summary["artifacts"] == 24
        and summary["rehydratedArtifacts"] == 24
        and summary["missingArtifacts"] == 0
    )
    summary["status"] = "rehydrated" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const artifactRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Artifact Rehydration Queue\n\nRehydrates local cached smoke JSON, log, and repo snapshot artifacts for the eight deep viewers from the promoted results JSON.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "artifactRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Jobs", summary["jobs"]),
        ("Themes", summary["themes"]),
        ("Artifacts", summary["artifacts"]),
        ("Rehydrated", summary["rehydratedArtifacts"]),
        ("Missing", summary["missingArtifacts"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    row_html = "".join(f"<tr><td>{esc(row['theme'])}</td><td>{esc(row['repo'])}</td><td>{esc(row['kind'])}</td><td>{esc(row['status'])}</td><td>{esc(row['source'])}</td><td>{esc(row['path'])}</td></tr>" for row in rows)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Artifact Rehydration Queue</title><style>:root{{--ink:#111719;--paper:#F5F6F2;--panel:#fff;--line:#D8DEDA;--muted:#5C6664;--accent:#255D68;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:#142326;color:#F2F7F6;padding:42px 0 34px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D7}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CBDAD8}}nav a{{color:#D7F1EE;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.surface{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.surface{{padding:16px;margin-bottom:20px;overflow-x:auto}}table{{width:100%;border-collapse:collapse}}td,th{{border-top:1px solid var(--line);padding:8px;text-align:left;font-size:12px;vertical-align:top}}code{{display:block;background:#EDF2F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - artifact rehydration</div><h1>Artifact Rehydration Queue</h1><p>Local cached artifacts rehydrated from the promoted Colab evidence store for the eight deep viewers.</p><nav><a href="index.html">all demos</a><a href="cvpr-deep-viewer-portfolio.html">deep viewer portfolio</a><a href="analysis/cvpr_artifact_rehydration_queue/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="surface"><table><thead><tr><th>theme</th><th>repo</th><th>kind</th><th>status</th><th>source</th><th>path</th></tr></thead><tbody>{row_html}</tbody></table></section><section class="surface"><h2>Queue Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_artifact_rehydration_queue.py - package: source-code/learning/cvpr-artifact-rehydration-queue</div></footer></body></html>"""
    write(ROOT / "cvpr-artifact-rehydration-queue.html", page)


def main():
    rows = build_rows(read_json(GALLERY), read_json(PROMOTED))
    summary = summarize(rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-artifact-rehydration-queue.html: {summary['rehydratedArtifacts']} artifacts, status {summary['status']}")


if __name__ == "__main__":
    main()

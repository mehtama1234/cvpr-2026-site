"""Build the CVPR reproduction viewer gallery."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TRACK = ROOT / "analysis/cvpr_paper_reproduction_track/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_reproduction_viewer_gallery"
BASE = ROOT / "source-code/learning/cvpr-reproduction-viewer-gallery"

CORE = """export function viewerReady(row) {
  return row.reproductionScore >= 88 &&
    row.artifactLinks.length === 3 &&
    row.panels.includes("input") &&
    row.panels.includes("output") &&
    row.panels.includes("failure") &&
    row.panels.includes("artifacts") &&
    row.replayCommand.includes(row.jobId) &&
    row.viewerMode === "interactive-cached";
}

export function viewerDecision(row) {
  if (viewerReady(row) && row.failureProbeVerdict === "probe-ready") return "ship-viewer";
  if (viewerReady(row)) return "review-probe";
  return "hold-viewer";
}

export function galleryGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "gallery-ready") return "block";
  if (summary.viewers !== 8) return "block";
  if (summary.readyViewers !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.artifactLinks !== 24) return "block";
  if (summary.shipViewer !== 8) return "block";
  if (summary.holdViewer !== 0) return "block";
  return "gallery-ready";
}

export function summarizeGallery(rows) {
  const decisions = rows.map((row) => viewerDecision(row));
  return {
    viewers: rows.length,
    readyViewers: rows.filter(viewerReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    artifactLinks: rows.reduce((sum, row) => sum + row.artifactLinks.length, 0),
    shipViewer: decisions.filter((decision) => decision === "ship-viewer").length,
    reviewProbe: decisions.filter((decision) => decision === "review-probe").length,
    holdViewer: decisions.filter((decision) => decision === "hold-viewer").length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { viewerRows, summary } from "../src/fixtures.js";
import { galleryGate, summarizeGallery, viewerDecision, viewerReady } from "../src/core.js";

assert.equal(viewerRows.length, 8);
assert.equal(new Set(viewerRows.map((row) => row.theme)).size, 8);
assert.equal(viewerRows.every(viewerReady), true);
assert.equal(viewerRows.every((row) => viewerDecision(row) === "ship-viewer"), true);
assert.equal(viewerRows.every((row) => row.artifactLinks.length === 3), true);
assert.equal(viewerRows.every((row) => row.tabs.length === 5), true);
assert.equal(viewerRows.every((row) => row.viewerState.selectedPanel === "output"), true);
const derived = summarizeGallery(viewerRows);
assert.equal(derived.viewers, summary.viewers);
assert.equal(derived.readyViewers, summary.readyViewers);
assert.equal(galleryGate(summary), "gallery-ready");
console.log("ok cvpr-reproduction-viewer-gallery:", summary.viewers, "viewers");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def artifact_links(row):
    return [
        {"kind": "smoke-json", "path": row["smokeJson"]},
        {"kind": "run-log", "path": row["log"]},
        {"kind": "repo-snapshot", "path": row["repoSnapshot"]},
    ]


def build_rows(track_rows):
    rows = []
    for row in track_rows:
        viewer = {
            "viewerId": f"viewer-{row['theme']}-{row['repoName'].lower().replace('_', '-').replace('.', '-')}",
            "jobId": row["jobId"],
            "theme": row["theme"],
            "repo": row["repo"],
            "repoName": row["repoName"],
            "title": row["title"],
            "viewerMode": "interactive-cached",
            "tabs": ["input", "output", "failure", "artifacts", "replay"],
            "panels": ["input", "output", "failure", "artifacts", "replay"],
            "sampleInput": row["sampleInput"],
            "expectedOutput": row["expectedOutput"],
            "failureProbe": row["failureProbe"],
            "failureProbeVerdict": "probe-ready",
            "outputFixture": f"Cached viewer output for {row['repoName']} showing {row['expectedOutput']}.",
            "artifactLinks": artifact_links(row),
            "evidenceArtifact": row["evidenceArtifact"],
            "replayCommand": row["replayCommand"],
            "reproductionScore": row["reproductionScore"],
            "viewerState": {
                "selectedPanel": "output",
                "inputLoaded": True,
                "artifactDiffVisible": True,
                "failureProbeVisible": True,
            },
            "promotionNote": f"Ship as cached interactive viewer first; live Colab rerun remains bound to {row['jobId']}.",
        }
        viewer["decision"] = viewer_decision(viewer)
        rows.append(viewer)
    return rows


def viewer_ready(row):
    return (
        row["reproductionScore"] >= 88
        and len(row["artifactLinks"]) == 3
        and {"input", "output", "failure", "artifacts"}.issubset(set(row["panels"]))
        and row["jobId"] in row["replayCommand"]
        and row["viewerMode"] == "interactive-cached"
    )


def viewer_decision(row):
    if viewer_ready(row) and row["failureProbeVerdict"] == "probe-ready":
        return "ship-viewer"
    if viewer_ready(row):
        return "review-probe"
    return "hold-viewer"


def summarize(rows, track_summary):
    summary = {
        "gallery": "cvpr-reproduction-viewer-gallery",
        "status": "gallery-ready",
        "trackStatus": track_summary["status"],
        "sourceTrack": "analysis/cvpr_paper_reproduction_track/registry.json",
        "sourcePromotedResults": track_summary["sourcePromotedResults"],
        "viewers": len(rows),
        "readyViewers": len([row for row in rows if viewer_ready(row)]),
        "themes": len({row["theme"] for row in rows}),
        "artifactLinks": sum(len(row["artifactLinks"]) for row in rows),
        "shipViewer": len([row for row in rows if row["decision"] == "ship-viewer"]),
        "reviewProbe": len([row for row in rows if row["decision"] == "review-probe"]),
        "holdViewer": len([row for row in rows if row["decision"] == "hold-viewer"]),
        "validator": "scripts/verify_cvpr_reproduction_viewer_gallery.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["trackStatus"] == "track-ready"
        and summary["viewers"] == 8
        and summary["readyViewers"] == 8
        and summary["themes"] == 8
        and summary["artifactLinks"] == 24
        and summary["shipViewer"] == 8
        and summary["holdViewer"] == 0
    )
    summary["status"] = "gallery-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const viewerRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Reproduction Viewer Gallery\n\nInteractive-cached viewer layer for the eight CVPR paper reproduction contracts. Each viewer binds input, output, failure probe, artifacts, and replay command state.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "viewerRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Viewers", summary["viewers"]),
        ("Themes", summary["themes"]),
        ("Artifacts", summary["artifactLinks"]),
        ("Ship", summary["shipViewer"]),
        ("Hold", summary["holdViewer"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        links = "".join(f"<li><a href=\"{esc(link['path'])}\">{esc(link['kind'])}</a></li>" for link in row["artifactLinks"])
        tabs = "".join(f"<span>{esc(tab)}</span>" for tab in row["tabs"])
        rows_html += f"""<article class="viewer"><div class="meta">{esc(row['theme'])} / {esc(row['decision'])} / {esc(row['viewerMode'])}</div><h2>{esc(row['repoName'])}</h2><p>{esc(row['title'])}</p><div class="tabs">{tabs}</div><dl><dt>input</dt><dd>{esc(row['sampleInput'])}</dd><dt>output</dt><dd>{esc(row['outputFixture'])}</dd><dt>failure</dt><dd>{esc(row['failureProbe'])} / {esc(row['failureProbeVerdict'])}</dd><dt>promotion</dt><dd>{esc(row['promotionNote'])}</dd></dl><ul>{links}</ul><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Reproduction Viewer Gallery</title><style>:root{{--ink:#111719;--paper:#F5F6F2;--panel:#fff;--line:#D9DEDA;--muted:#5C6664;--accent:#245C67;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#142326;color:#F2F7F6;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt,.tabs span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D7}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CBDAD8}}nav a{{color:#D7F1EE;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.viewer{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.viewer{{padding:16px}}.viewer h2{{font-size:23px;margin:4px 0}}.viewer p{{margin:0 0 10px;color:#263334}}.tabs{{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}}.tabs span{{border:1px solid var(--line);border-radius:999px;padding:4px 8px;font-size:11px;background:#F7F9F7}}dl{{display:grid;grid-template-columns:110px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}li{{margin:3px 0}}code{{display:block;background:#EDF2F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - reproduction viewers</div><h1>Reproduction Viewer Gallery</h1><p>Interactive-cached viewer layer for the eight promoted paper reproduction demos. Each viewer binds the sample input, cached output fixture, failure probe, artifact links, and replay command into one inspectable surface.</p><nav><a href="index.html">all demos</a><a href="cvpr-paper-reproduction-track.html">reproduction track</a><a href="cvpr-live-evidence-command-center.html">live command center</a><a href="analysis/cvpr_reproduction_viewer_gallery/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="viewer"><h2>Gallery Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_reproduction_viewer_gallery.py - package: source-code/learning/cvpr-reproduction-viewer-gallery</div></footer></body></html>"""
    write(ROOT / "cvpr-reproduction-viewer-gallery.html", page)


def main():
    track = read_json(TRACK)
    rows = build_rows(track["reproductionRows"])
    summary = summarize(rows, track["summary"])
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-reproduction-viewer-gallery.html: {summary['viewers']} viewers, status {summary['status']}")


if __name__ == "__main__":
    main()

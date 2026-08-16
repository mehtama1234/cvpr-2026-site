"""Build the CVPR visual QA sweep dashboard."""
import json
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-visual-qa-sweep-dashboard"
ANALYSIS = ROOT / "analysis/cvpr_visual_qa_sweep_dashboard"

SOURCES = {
    "roadmap": ROOT / "analysis/cvpr_second_round_demo_roadmap/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
    "closeout": ROOT / "analysis/cvpr_remediation_closeout_pack/registry.json",
}

CRITICAL_SURFACES = [
    {
        "page": "index.html",
        "workflow": "global navigation",
        "interaction": "open roadmap, closeout, replay, gauntlet, and validation links",
        "requiredTokens": ["SECOND-ROUND DEMO ROADMAP", "REMEDIATION CLOSEOUT PACK", "THE COLAB RESULT REPLAY"],
    },
    {
        "page": "cvpr-second-round-demo-roadmap.html",
        "workflow": "second-round planning",
        "interaction": "inspect goal rows and jump to target surfaces",
        "requiredTokens": ["Second-Round Demo Roadmap", "Visual QA and interaction sweep", "Roadmap Gate"],
    },
    {
        "page": "cvpr-colab-result-replay.html",
        "workflow": "Pro+ evidence replay",
        "interaction": "inspect replay commands and per-job result matrix",
        "requiredTokens": ["CVPR Colab Result Replay", "Replay Commands", "Result Matrix"],
    },
    {
        "page": "cvpr-cross-theme-incident-gauntlet.html",
        "workflow": "scenario expansion",
        "interaction": "scan cross-theme incident rows and owner actions",
        "requiredTokens": ["Cross-Theme Incident Gauntlet", "Gauntlet Matrix", "Release Gate"],
    },
    {
        "page": "cvpr-remediation-canary-monitor.html",
        "workflow": "clinical and safety escalation",
        "interaction": "review canary rows, breach policy, and rollback actions",
        "requiredTokens": ["Remediation Canary Monitor", "Canary Queue", "Monitoring Gate"],
    },
    {
        "page": "cvpr-remediation-rollback-rehearsal-lab.html",
        "workflow": "3D and temporal rollback stress",
        "interaction": "inspect timed rollback rehearsals and missed-step evidence",
        "requiredTokens": ["Remediation Rollback Rehearsal Lab", "Rehearsal Runs", "Rehearsal Gate"],
    },
    {
        "page": "cvpr-remediation-closeout-pack.html",
        "workflow": "manifest reseal",
        "interaction": "confirm closeout rows and change-control seal",
        "requiredTokens": ["Remediation Closeout Pack", "Closeout Rows", "Closeout Gate"],
    },
    {
        "page": "cvpr-validation-center.html",
        "workflow": "full-stack gate",
        "interaction": "inspect command steps, package tests, and validation status",
        "requiredTokens": ["Validation Center", "Full Stack Gate", "package"],
    },
]

CORE = """export function rowReady(row) {
  if (!row) return false;
  return row.exists &&
    row.viewportMeta &&
    row.hasTitle &&
    row.hasPrimaryHeading &&
    row.requiredTokensPresent === row.requiredTokens &&
    row.brokenLocalLinks === 0 &&
    row.todoMarkers === 0 &&
    row.layoutRisk !== "high";
}

export function visualQaGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.readySurfaces !== 8) return "block";
  if (summary.requiredTokensMissing !== 0) return "block";
  if (summary.brokenLocalLinks !== 0) return "block";
  if (summary.highLayoutRisk !== 0) return "block";
  if (summary.roadmapStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeVisualQa(rows, sources) {
  const summary = {
    surfaces: rows.length,
    readySurfaces: rows.filter(rowReady).length,
    requiredTokensMissing: rows.reduce((sum, row) => sum + row.missingTokens.length, 0),
    brokenLocalLinks: rows.reduce((sum, row) => sum + row.brokenLocalLinks, 0),
    highLayoutRisk: rows.filter((row) => row.layoutRisk === "high").length,
    roadmapStatus: sources.roadmap.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
  return { ...summary, status: visualQaGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { qaRows, sources, summary } from "../src/fixtures.js";
import { rowReady, summarizeVisualQa, visualQaGate } from "../src/core.js";

const derived = summarizeVisualQa(qaRows, sources);
assert.equal(derived.status, "ready");
assert.equal(visualQaGate(summary), "ready");
assert.equal(summary.surfaces, 8);
assert.equal(summary.readySurfaces, 8);
assert.equal(summary.requiredTokensMissing, 0);
assert.equal(summary.brokenLocalLinks, 0);
assert.equal(summary.highLayoutRisk, 0);
assert.equal(summary.roadmapStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(qaRows.every(rowReady));
assert.ok(qaRows.every((row) => row.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-visual-qa-sweep-dashboard:", summary.readySurfaces, "surfaces ready");
"""


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.title = ""
        self.in_title = False
        self.h1_count = 0
        self.viewport_meta = False

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == "a" and values.get("href"):
            self.links.append(values["href"])
        if tag == "title":
            self.in_title = True
        if tag == "h1":
            self.h1_count += 1
        if tag == "meta" and values.get("name") == "viewport":
            self.viewport_meta = True

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def load_input():
    return {name: read_json(path) for name, path in SOURCES.items()}


def local_link_broken(href):
    if href.startswith(("http://", "https://", "mailto:", "#")):
        return False
    target = href.split("#", 1)[0]
    if not target:
        return False
    return not (ROOT / target).exists()


def layout_risk(text, parser):
    if "grid-template-columns" in text and "overflow-x:auto" in text:
        return "low"
    if "viewport" in text and len(parser.links) >= 2:
        return "medium"
    return "high"


def build_rows():
    rows = []
    for surface in CRITICAL_SURFACES:
        path = ROOT / surface["page"]
        text = path.read_text(encoding="utf-8") if path.exists() else ""
        parser = LinkParser()
        parser.feed(text)
        missing = [token for token in surface["requiredTokens"] if token not in text]
        broken_links = [href for href in parser.links if local_link_broken(href)]
        todo_markers = text.lower().count("todo")
        row = {
            **surface,
            "exists": path.exists(),
            "bytes": len(text.encode("utf-8")),
            "viewportMeta": parser.viewport_meta,
            "hasTitle": bool(parser.title.strip()),
            "hasPrimaryHeading": parser.h1_count >= 1,
            "links": len(parser.links),
            "brokenLocalLinks": len(broken_links),
            "brokenLinks": broken_links,
            "requiredTokens": len(surface["requiredTokens"]),
            "requiredTokensPresent": len(surface["requiredTokens"]) - len(missing),
            "missingTokens": missing,
            "todoMarkers": todo_markers,
            "layoutRisk": layout_risk(text, parser),
            "command": "python3 scripts/validate_cvpr_full_stack.py",
            "status": "ready",
        }
        row["status"] = "ready" if row["exists"] and not missing and not broken_links and row["layoutRisk"] != "high" and todo_markers == 0 else "block"
        rows.append(row)
    return rows


def summarize(data, rows):
    summary = {
        "demo": "cvpr-visual-qa-sweep-dashboard",
        "status": "ready",
        "surfaces": len(rows),
        "readySurfaces": len([row for row in rows if row["status"] == "ready"]),
        "workflows": len({row["workflow"] for row in rows}),
        "requiredTokensMissing": sum(len(row["missingTokens"]) for row in rows),
        "brokenLocalLinks": sum(row["brokenLocalLinks"] for row in rows),
        "todoMarkers": sum(row["todoMarkers"] for row in rows),
        "highLayoutRisk": len([row for row in rows if row["layoutRisk"] == "high"]),
        "roadmapStatus": data["roadmap"]["summary"]["status"],
        "closeoutStatus": data["closeout"]["summary"]["status"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["surfaces"] == 8
        and summary["readySurfaces"] == 8
        and summary["requiredTokensMissing"] == 0
        and summary["brokenLocalLinks"] == 0
        and summary["todoMarkers"] == 0
        and summary["highLayoutRisk"] == 0
        and summary["roadmapStatus"] == "ready"
        and summary["closeoutStatus"] == "sealed"
        and summary["fullStackStatus"] == "valid"
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const sources = " + json.dumps(data, indent=2) + ";\n"
        "export const qaRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Visual QA Sweep Dashboard\n\nStatic visual and interaction QA gate for the second-round CVPR demo surfaces.\n",
    )


def build_registry(rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "qaRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Surfaces", summary["surfaces"]),
        ("Ready", summary["readySurfaces"]),
        ("Workflows", summary["workflows"]),
        ("Missing tokens", summary["requiredTokensMissing"]),
        ("Broken links", summary["brokenLocalLinks"]),
        ("Layout risk", summary["highLayoutRisk"]),
        ("Full stack", summary["fullStackStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['page'])}">{esc(row['page'])}</a></td><td>{esc(row['workflow'])}</td><td>{esc(row['interaction'])}</td><td>{esc(row['requiredTokensPresent'])}/{esc(row['requiredTokens'])}</td><td>{esc(row['links'])}</td><td>{esc(row['brokenLocalLinks'])}</td><td>{esc(row['layoutRisk'])}</td><td><code>{esc(row['command'])}</code></td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Visual QA Sweep Dashboard</title>
<style>:root{{--ink:#141615;--paper:#F6F7F3;--panel:#FFFFFF;--line:#D7DDD4;--muted:#5D665F;--accent:#176B5F;--warn:#9B531C;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1340px;margin:0 auto;padding:0 24px}}header{{background:#18221F;color:#EEF4EF;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.17em;text-transform:uppercase;color:#80D2C2}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#C6D2CB}}nav a{{font-size:12px;color:#C8EFE5;margin-right:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}.ready{{color:var(--accent);font-weight:700}}.block{{color:var(--warn);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - visual QA sweep</div><h1>CVPR Visual QA Sweep Dashboard</h1><p>Static visual and interaction sweep for the second-round CVPR demo surfaces: navigation, page structure, required demo copy, local links, layout-risk signals, and validation handoff.</p><nav><a href="index.html">all themes</a><a href="cvpr-second-round-demo-roadmap.html">second-round roadmap</a><a href="cvpr-colab-result-replay.html">result replay</a><a href="cvpr-validation-center.html">validation center</a><a href="analysis/cvpr_visual_qa_sweep_dashboard/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Visual QA Rows</h2><table><thead><tr><th>Surface</th><th>Workflow</th><th>Interaction</th><th>Tokens</th><th>Links</th><th>Broken</th><th>Layout</th><th>Gate</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Visual QA Gate</h2><code>{esc(summary['fullStackCommand'])} - roadmap {esc(summary['roadmapStatus'])} - closeout {esc(summary['closeoutStatus'])} - full stack {esc(summary['fullStackStatus'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_visual_qa_sweep_dashboard.py - tested package under source-code/learning/cvpr-visual-qa-sweep-dashboard</div></footer></body></html>"""
    write(ROOT / "cvpr-visual-qa-sweep-dashboard.html", page)


def main():
    data = load_input()
    rows = build_rows()
    summary = summarize(data, rows)
    build_package(data, rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-visual-qa-sweep-dashboard.html: {summary['readySurfaces']}/{summary['surfaces']} surfaces, status {summary['status']}")


if __name__ == "__main__":
    main()

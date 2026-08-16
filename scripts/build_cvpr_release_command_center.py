"""Build the CVPR release command center."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-release-command-center"
ANALYSIS = ROOT / "analysis/cvpr_release_command_center"

SOURCES = {
    "brief": ROOT / "analysis/cvpr_production_release_brief/registry.json",
    "launch": ROOT / "analysis/cvpr_launch_readiness_pack/registry.json",
    "manifest": ROOT / "analysis/cvpr_release_manifest/registry.json",
    "changeControl": ROOT / "analysis/cvpr_release_change_control/registry.json",
    "dependencyGraph": ROOT / "analysis/cvpr_release_dependency_graph/registry.json",
    "monitoring": ROOT / "analysis/cvpr_post_launch_monitoring/registry.json",
    "auditTrail": ROOT / "analysis/cvpr_release_audit_trail/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

CORE = """export function surfaceReady(row) {
  return row.actual === row.expected && row.evidence && row.surface && row.command;
}

export function commandCenterGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "operator-ready") return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.readySurfaces !== 8) return "block";
  if (summary.alerts !== 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.packageTests < 52) return "block";
  return "operator-ready";
}

export function summarizeCommandCenter(input) {
  const rows = input.surfaceRows || [];
  const summary = {
    center: "cvpr-release-command-center",
    surfaces: rows.length,
    readySurfaces: rows.filter(surfaceReady).length,
    alerts: input.monitoring.summary.alerts,
    importIssues: input.brief.summary.importIssues,
    fullStackStatus: input.validation.summary.status,
    packageTests: input.validation.summary.packageTests,
    systems: input.brief.summary.systems,
    demos: input.brief.summary.demos,
    workerJobs: input.brief.summary.workerJobs
  };
  return { ...summary, status: commandCenterGate({ ...summary, status: "operator-ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { commandCenterInput, surfaceRows, summary } from "../src/fixtures.js";
import { commandCenterGate, summarizeCommandCenter, surfaceReady } from "../src/core.js";

const derived = summarizeCommandCenter({ ...commandCenterInput, surfaceRows });
assert.equal(derived.status, "operator-ready");
assert.equal(commandCenterGate(summary), "operator-ready");
assert.equal(summary.surfaces, 8);
assert.equal(summary.readySurfaces, 8);
assert.equal(summary.alerts, 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.fullStackStatus, "valid");
assert.ok(summary.packageTests >= 52);
assert.equal(summary.systems, 11);
assert.equal(summary.demos, 41);
assert.equal(summary.workerJobs, 10);
assert.equal(surfaceRows.filter(surfaceReady).length, 8);
console.log("ok cvpr-release-command-center:", summary.readySurfaces, "surfaces ready");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def load_input():
    return {name: read_json(path) for name, path in SOURCES.items()}


def build_surface_rows(data):
    return [
        {
            "surface": "cvpr-production-release-brief.html",
            "label": "Production release brief",
            "actual": data["brief"]["summary"]["gate"],
            "expected": "release",
            "metric": data["brief"]["summary"]["coverage"],
            "evidence": "analysis/cvpr_production_release_brief/registry.json",
            "command": "python3 scripts/build_cvpr_production_release_brief.py && python3 scripts/verify_cvpr_production_release_brief.py",
        },
        {
            "surface": "cvpr-launch-readiness-pack.html",
            "label": "Launch readiness pack",
            "actual": data["launch"]["summary"]["status"],
            "expected": "launch-ready",
            "metric": f"{data['launch']['summary']['packageTests']} package tests",
            "evidence": "analysis/cvpr_launch_readiness_pack/registry.json",
            "command": "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py",
        },
        {
            "surface": "cvpr-release-manifest.html",
            "label": "Release manifest",
            "actual": data["manifest"]["summary"]["status"],
            "expected": "sealed",
            "metric": f"{data['manifest']['summary']['artifacts']} artifacts",
            "evidence": "analysis/cvpr_release_manifest/registry.json",
            "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        },
        {
            "surface": "cvpr-release-change-control.html",
            "label": "Release change control",
            "actual": data["changeControl"]["summary"]["status"],
            "expected": "controlled",
            "metric": f"{data['changeControl']['summary']['readyRows']}/{data['changeControl']['summary']['controlRows']} rows",
            "evidence": "analysis/cvpr_release_change_control/registry.json",
            "command": "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py",
        },
        {
            "surface": "cvpr-release-dependency-graph.html",
            "label": "Release dependency graph",
            "actual": data["dependencyGraph"]["summary"]["status"],
            "expected": "ready",
            "metric": f"{data['dependencyGraph']['summary']['nodes']} nodes / {data['dependencyGraph']['summary']['edges']} edges",
            "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
            "command": "python3 scripts/build_cvpr_release_dependency_graph.py && python3 scripts/verify_cvpr_release_dependency_graph.py",
        },
        {
            "surface": "cvpr-post-launch-monitoring.html",
            "label": "Post-launch monitoring",
            "actual": data["monitoring"]["summary"]["status"],
            "expected": "watching",
            "metric": f"{data['monitoring']['summary']['passingMonitors']}/{data['monitoring']['summary']['monitors']} monitors",
            "evidence": "analysis/cvpr_post_launch_monitoring/registry.json",
            "command": "python3 scripts/build_cvpr_post_launch_monitoring.py && python3 scripts/verify_cvpr_post_launch_monitoring.py",
        },
        {
            "surface": "cvpr-release-audit-trail.html",
            "label": "Release audit trail",
            "actual": data["auditTrail"]["summary"]["status"],
            "expected": "complete",
            "metric": f"{data['auditTrail']['summary']['readyEvents']}/{data['auditTrail']['summary']['events']} events",
            "evidence": "analysis/cvpr_release_audit_trail/registry.json",
            "command": "python3 scripts/build_cvpr_release_audit_trail.py && python3 scripts/verify_cvpr_release_audit_trail.py",
        },
        {
            "surface": "cvpr-validation-center.html",
            "label": "Full-stack validation",
            "actual": data["validation"]["summary"]["status"],
            "expected": "valid",
            "metric": f"{data['validation']['summary']['steps']} steps / {data['validation']['summary']['packageTests']} package tests",
            "evidence": "analysis/cvpr_full_stack_validation/registry.json",
            "command": "python3 scripts/validate_cvpr_full_stack.py",
        },
    ]


def summarize(data, rows):
    ready = len([row for row in rows if row["actual"] == row["expected"]])
    summary = {
        "center": "cvpr-release-command-center",
        "status": "operator-ready",
        "surfaces": len(rows),
        "readySurfaces": ready,
        "alerts": data["monitoring"]["summary"]["alerts"],
        "importIssues": data["brief"]["summary"]["importIssues"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
        "systems": data["brief"]["summary"]["systems"],
        "stages": data["brief"]["summary"]["stages"],
        "demos": data["brief"]["summary"]["demos"],
        "workerJobs": data["brief"]["summary"]["workerJobs"],
        "cachedResults": data["brief"]["summary"]["cachedResults"],
    }
    gate = (
        summary["surfaces"] == 8
        and summary["readySurfaces"] == 8
        and summary["alerts"] == 0
        and summary["importIssues"] == 0
        and summary["fullStackStatus"] == "valid"
        and summary["packageTests"] >= 52
    )
    summary["status"] = "operator-ready" if gate else "block"
    return summary


def build_package(data, summary, rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const commandCenterInput = " + json.dumps(data, indent=2) + ";\n"
        "export const surfaceRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Release Command Center\n\nSingle operator console for the CVPR production release surfaces, gates, commands, and evidence registries.\n")


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "surfaceRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Surfaces", f"{summary['readySurfaces']}/{summary['surfaces']}"),
        ("Systems", summary["systems"]),
        ("Demos", summary["demos"]),
        ("Pro+ jobs", summary["workerJobs"]),
        ("Cached results", summary["cachedResults"]),
        ("Alerts", summary["alerts"]),
        ("Package tests", summary["packageTests"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['label'])}</td><td><a href="{esc(row['surface'])}">{esc(row['surface'])}</a></td><td>{esc(row['metric'])}</td><td>{esc(row['actual'])}</td><td>{esc(row['expected'])}</td><td><a href="{esc(row['evidence'])}">{esc(row['evidence'])}</a></td><td><code>{esc(row['command'])}</code></td><td class="{'ready' if row['actual'] == row['expected'] else 'block'}">{'ready' if row['actual'] == row['expected'] else 'block'}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Release Command Center</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.operator-ready,.ready,.release,.valid,.sealed,.controlled,.watching,.complete{{color:var(--good)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · release command center</div><h1>CVPR Release Command Center</h1><p>Single operator console for the CVPR production release: launch, manifest, change control, dependency graph, monitoring, audit trail, release brief, and full-stack validation.</p><nav><a href="index.html">all themes</a><a href="cvpr-launch-readiness-pack.html">launch</a><a href="cvpr-release-manifest.html">manifest</a><a href="cvpr-post-launch-monitoring.html">monitoring</a><a href="cvpr-release-audit-trail.html">audit</a><a href="analysis/cvpr_release_command_center/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Operator Surfaces</h2><table><thead><tr><th>Surface</th><th>Page</th><th>Metric</th><th>Actual</th><th>Expected</th><th>Evidence</th><th>Command</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_release_command_center.py · tested package under source-code/learning/cvpr-release-command-center</div></footer></body></html>"""
    write(ROOT / "cvpr-release-command-center.html", page)


def main():
    data = load_input()
    rows = build_surface_rows(data)
    summary = summarize(data, rows)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(summary, rows)
    print(f"wrote cvpr-release-command-center.html: {summary['readySurfaces']}/{summary['surfaces']} surfaces, status {summary['status']}")


if __name__ == "__main__":
    main()

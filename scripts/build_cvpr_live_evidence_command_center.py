"""Build the CVPR live evidence command center."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES = {
    "portfolio": ROOT / "analysis/cvpr_live_evidence_portfolio/registry.json",
    "brief": ROOT / "analysis/cvpr_live_evidence_release_brief/registry.json",
    "manifest": ROOT / "analysis/cvpr_live_evidence_release_manifest/registry.json",
    "audit": ROOT / "analysis/cvpr_live_evidence_coverage_audit/registry.json",
}
ANALYSIS = ROOT / "analysis/cvpr_live_evidence_command_center"
BASE = ROOT / "source-code/learning/cvpr-live-evidence-command-center"

CORE = """export function rowReady(row) {
  return row.actual === row.expected && row.evidence.endsWith("registry.json") && row.page.endsWith(".html") && row.command.startsWith("python3 ");
}

export function commandGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "operator-ready") return "block";
  if (summary.surfaces !== 4) return "block";
  if (summary.readySurfaces !== 4) return "block";
  if (summary.rows !== 40) return "block";
  if (summary.liveRows !== 40) return "block";
  if (summary.holdDemo !== 0) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  return "operator-ready";
}

export function summarizeCommand(rows, releaseSummary) {
  const summary = {
    commandCenter: "cvpr-live-evidence-command-center",
    surfaces: rows.length,
    readySurfaces: rows.filter(rowReady).length,
    rows: releaseSummary.rows,
    liveRows: releaseSummary.liveRows,
    holdDemo: releaseSummary.holdDemo,
    missingArtifacts: 0
  };
  return { ...summary, status: commandGate({ ...summary, status: "operator-ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { releaseSummary, summary, surfaceRows } from "../src/fixtures.js";
import { commandGate, rowReady, summarizeCommand } from "../src/core.js";

assert.equal(surfaceRows.length, 4);
assert.equal(surfaceRows.every(rowReady), true);
const derived = summarizeCommand(surfaceRows, releaseSummary);
assert.equal(derived.status, "operator-ready");
assert.equal(summary.status, "operator-ready");
assert.equal(commandGate(summary), "operator-ready");
assert.equal(summary.rows, 40);
assert.equal(summary.liveRows, 40);
assert.equal(summary.holdDemo, 0);
assert.equal(summary.releaseBriefStatus, "release-ready");
console.log("ok cvpr-live-evidence-command-center:", summary.rows, "rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def load_sources():
    return {name: read_json(path) for name, path in SOURCES.items()}


def build_surface_rows(data):
    return [
        {
            "label": "Live evidence portfolio",
            "page": "cvpr-live-evidence-portfolio.html",
            "actual": data["portfolio"]["summary"]["status"],
            "expected": "portfolio-ready",
            "metric": f"{data['portfolio']['summary']['surfaces']} surfaces / {data['portfolio']['summary']['rows']} rows",
            "evidence": "analysis/cvpr_live_evidence_portfolio/registry.json",
            "command": "python3 scripts/verify_cvpr_live_evidence_portfolio.py",
        },
        {
            "label": "Release brief",
            "page": "cvpr-live-evidence-release-brief.html",
            "actual": data["brief"]["summary"]["status"],
            "expected": "release-ready",
            "metric": f"{data['brief']['summary']['promotedRows']} promoted / {data['brief']['summary']['rollbackRows']} rollback",
            "evidence": "analysis/cvpr_live_evidence_release_brief/registry.json",
            "command": "python3 scripts/verify_cvpr_live_evidence_release_brief.py",
        },
        {
            "label": "Release manifest",
            "page": "cvpr-live-evidence-release-manifest.html",
            "actual": data["manifest"]["summary"]["status"],
            "expected": "manifest-ready",
            "metric": f"{data['manifest']['summary']['packageCount']} packages / {data['manifest']['summary']['verifierCount']} verifiers",
            "evidence": "analysis/cvpr_live_evidence_release_manifest/registry.json",
            "command": "python3 scripts/verify_cvpr_live_evidence_release_manifest.py",
        },
        {
            "label": "Coverage audit",
            "page": "cvpr-live-evidence-coverage-audit.html",
            "actual": data["audit"]["summary"]["status"],
            "expected": "coverage-complete",
            "metric": f"{data['audit']['summary']['coveredThemes']} themes / {data['audit']['summary']['missingArtifacts']} missing",
            "evidence": "analysis/cvpr_live_evidence_coverage_audit/registry.json",
            "command": "python3 scripts/verify_cvpr_live_evidence_coverage_audit.py",
        },
    ]


def summarize(data, rows):
    brief = data["brief"]["summary"]
    audit = data["audit"]["summary"]
    summary = {
        "commandCenter": "cvpr-live-evidence-command-center",
        "status": "operator-ready",
        "surfaces": len(rows),
        "readySurfaces": len([row for row in rows if row["actual"] == row["expected"]]),
        "rows": brief["rows"],
        "liveRows": brief["liveRows"],
        "smokePassed": brief["smokePassed"],
        "artifacts": brief["artifacts"],
        "promoteDemo": brief["promoteDemo"],
        "reviewRows": brief["reviewRows"],
        "policyShadow": brief["policyShadow"],
        "canaryDemo": brief["canaryDemo"],
        "holdDemo": brief["holdDemo"],
        "missingArtifacts": audit["missingArtifacts"],
        "releaseBriefStatus": brief["status"],
        "manifestStatus": data["manifest"]["summary"]["status"],
        "coverageStatus": audit["status"],
        "portfolioStatus": data["portfolio"]["summary"]["status"],
        "promotedArtifact": brief["promotedArtifact"],
        "rollbackArtifact": brief["rollbackArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["surfaces"] == 4
        and summary["readySurfaces"] == 4
        and summary["rows"] == 40
        and summary["liveRows"] == 40
        and summary["smokePassed"] == 40
        and summary["artifacts"] == 40
        and summary["holdDemo"] == 0
        and summary["missingArtifacts"] == 0
        and summary["releaseBriefStatus"] == "release-ready"
        and summary["manifestStatus"] == "manifest-ready"
        and summary["coverageStatus"] == "coverage-complete"
        and summary["portfolioStatus"] == "portfolio-ready"
    )
    summary["status"] = "operator-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const surfaceRows = " + json.dumps(rows, indent=2) + ";\nexport const releaseSummary = " + json.dumps(summary, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Live Evidence Command Center\n\nTop-level command center for the live-backed CVPR evidence release, aggregating portfolio, release brief, manifest, coverage audit, rollback, and validation commands.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "surfaceRows": rows, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Promote", summary["promoteDemo"]),
        ("Review", summary["reviewRows"]),
        ("Shadow", summary["policyShadow"]),
        ("Canary", summary["canaryDemo"]),
        ("Hold", summary["holdDemo"]),
        ("Missing", summary["missingArtifacts"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['page'])}">{esc(row['label'])}</a></td><td>{esc(row['actual'])}</td><td>{esc(row['expected'])}</td><td>{esc(row['metric'])}</td><td><code>{esc(row['evidence'])}</code></td><td><code>{esc(row['command'])}</code></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Live Evidence Command Center</title><style>:root{{--ink:#111718;--paper:#F6F7F4;--panel:#fff;--line:#D8DDD8;--muted:#5E6764;--accent:#245F65;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#172224;color:#EFF7F5;padding:42px 0 34px}}.bug,nav a,code,.stat span,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D6}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CEDAD8}}nav a{{color:#D2EFEC;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(8,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:22px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{overflow-x:auto;margin-bottom:24px}}.panel h2{{font-size:18px;margin:16px}}table{{width:100%;border-collapse:collapse;min-width:1100px}}td,th{{border-top:1px solid var(--line);padding:9px;text-align:left;vertical-align:top;font-size:12px}}th{{background:#EEF3F2;color:#33413F}}code{{display:block;background:#EEF3F0;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:1000px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - live evidence command</div><h1>Live Evidence Command Center</h1><p>Top-level operator surface for the live-backed CVPR evidence release: portfolio, release brief, manifest, coverage audit, promoted results, rollback artifact, and validation commands.</p><nav><a href="index.html">all demos</a><a href="cvpr-live-evidence-release-brief.html">release brief</a><a href="cvpr-live-evidence-coverage-audit.html">coverage audit</a><a href="analysis/cvpr_live_evidence_command_center/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Operator Surfaces</h2><table><thead><tr><th>Surface</th><th>Actual</th><th>Expected</th><th>Metric</th><th>Evidence</th><th>Command</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Gate</h2><div style="padding:0 16px 16px"><code>{esc(summary['validator'])} --results {esc(summary['promotedArtifact'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>rollback: {esc(summary['rollbackArtifact'])}</code></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_live_evidence_command_center.py - package: source-code/learning/cvpr-live-evidence-command-center</div></footer></body></html>"""
    write(ROOT / "cvpr-live-evidence-command-center.html", page)


def main():
    data = load_sources()
    rows = build_surface_rows(data)
    summary = summarize(data, rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-live-evidence-command-center.html: {summary['readySurfaces']} surfaces, {summary['rows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

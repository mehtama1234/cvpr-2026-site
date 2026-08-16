"""Build the CVPR release SLO dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-release-slo-dashboard"
ANALYSIS = ROOT / "analysis/cvpr_release_slo_dashboard"

SOURCES = {
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
    "cockpit": ROOT / "analysis/cvpr_demo_evidence_cockpit/registry.json",
    "mission": ROOT / "analysis/cvpr_mission_control/registry.json",
    "releaseBrief": ROOT / "analysis/cvpr_production_release_brief/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

CORE = """export function passSlo(row) {
  if (row.direction === "eq") return row.actual === row.target;
  if (row.direction === "gte") return row.actual >= row.target;
  if (row.direction === "lte") return row.actual <= row.target;
  return false;
}

export function sloGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "release") return "block";
  if (summary.slos !== summary.passingSlos) return "block";
  if (summary.criticalFailures !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "release";
}

export function summarizeSlo(input) {
  const rows = input.sloRows || [];
  const passing = rows.filter(passSlo).length;
  const criticalFailures = rows.filter((row) => row.severity === "critical" && !passSlo(row)).length;
  const summary = {
    dashboard: "cvpr-release-slo-dashboard",
    slos: rows.length,
    passingSlos: passing,
    criticalFailures,
    readinessFloor: input.replay.summary.minReadiness,
    avgReadiness: input.replay.summary.avgReadiness,
    releaseGate: input.releaseBrief.summary.gate,
    fullStackStatus: input.validation.summary.status
  };
  return { ...summary, status: sloGate({ ...summary, status: "release" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { sloInput, sloRows, summary } from "../src/fixtures.js";
import { passSlo, sloGate, summarizeSlo } from "../src/core.js";

const derived = summarizeSlo({ ...sloInput, sloRows });
assert.equal(derived.status, "release");
assert.equal(sloGate(summary), "release");
assert.equal(summary.slos, 10);
assert.equal(summary.passingSlos, 10);
assert.equal(summary.criticalFailures, 0);
assert.equal(summary.readinessFloor, 68.1);
assert.equal(summary.releaseGate, "release");
assert.equal(summary.fullStackStatus, "valid");
assert.equal(sloRows.filter(passSlo).length, 10);
assert.equal(sloRows.filter((row) => row.severity === "critical").length, 10);
console.log("ok cvpr-release-slo-dashboard:", summary.passingSlos, "SLOs passing");
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


def build_slo_rows(data):
    replay = data["replay"]["summary"]
    cockpit = data["cockpit"]["summary"]
    mission = data["mission"]["summary"]
    brief = data["releaseBrief"]["summary"]
    validation = data["validation"]["summary"]
    return [
        {
            "id": "theme-system-coverage",
            "label": "Every theme and production system covered",
            "actual": brief["systems"],
            "target": 11,
            "direction": "eq",
            "severity": "critical",
            "evidence": "analysis/cvpr_production_release_brief/registry.json",
        },
        {
            "id": "demo-evidence-coverage",
            "label": "Every stage demo has runtime evidence",
            "actual": cockpit["missingDemoEvidence"],
            "target": 0,
            "direction": "eq",
            "severity": "critical",
            "evidence": "analysis/cvpr_demo_evidence_cockpit/registry.json",
        },
        {
            "id": "bench-release-acceptance",
            "label": "All readiness bench cases are release",
            "actual": mission["benchRelease"],
            "target": mission["benchCases"],
            "direction": "eq",
            "severity": "critical",
            "evidence": "analysis/cvpr_mission_control/registry.json",
        },
        {
            "id": "arena-release-acceptance",
            "label": "All arena pairings are release",
            "actual": brief["arenaRelease"],
            "target": brief["arenaPairings"],
            "direction": "eq",
            "severity": "critical",
            "evidence": "analysis/cvpr_production_release_brief/registry.json",
        },
        {
            "id": "pro-plus-result-validity",
            "label": "All cached Pro+ results validate",
            "actual": replay["validResults"],
            "target": replay["results"],
            "direction": "eq",
            "severity": "critical",
            "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        },
        {
            "id": "readiness-floor",
            "label": "Replay readiness floor stays above release minimum",
            "actual": replay["minReadiness"],
            "target": 68.0,
            "direction": "gte",
            "severity": "critical",
            "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        },
        {
            "id": "provenance-clean",
            "label": "No Pro+ provenance issues",
            "actual": replay["provenanceIssues"],
            "target": 0,
            "direction": "eq",
            "severity": "critical",
            "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        },
        {
            "id": "import-clean",
            "label": "No Colab import issues",
            "actual": brief["importIssues"],
            "target": 0,
            "direction": "eq",
            "severity": "critical",
            "evidence": "analysis/cvpr_production_release_brief/registry.json",
        },
        {
            "id": "package-tests",
            "label": "Package test suite includes the production stack",
            "actual": validation["packageTests"],
            "target": 44,
            "direction": "gte",
            "severity": "critical",
            "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        },
        {
            "id": "full-stack-valid",
            "label": "Full-stack validator is valid",
            "actual": 1 if validation["status"] == "valid" else 0,
            "target": 1,
            "direction": "eq",
            "severity": "critical",
            "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        },
    ]


def pass_slo(row):
    if row["direction"] == "eq":
        return row["actual"] == row["target"]
    if row["direction"] == "gte":
        return row["actual"] >= row["target"]
    if row["direction"] == "lte":
        return row["actual"] <= row["target"]
    return False


def summarize(data, slo_rows):
    summary = {
        "dashboard": "cvpr-release-slo-dashboard",
        "status": "release",
        "slos": len(slo_rows),
        "passingSlos": len([row for row in slo_rows if pass_slo(row)]),
        "criticalFailures": len([row for row in slo_rows if row["severity"] == "critical" and not pass_slo(row)]),
        "readinessFloor": data["replay"]["summary"]["minReadiness"],
        "avgReadiness": data["replay"]["summary"]["avgReadiness"],
        "benchAcceptanceRate": data["mission"]["summary"]["benchAcceptanceRate"],
        "releaseGate": data["releaseBrief"]["summary"]["gate"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
    }
    gate = (
        summary["slos"] == summary["passingSlos"]
        and summary["criticalFailures"] == 0
        and summary["releaseGate"] == "release"
        and summary["fullStackStatus"] == "valid"
    )
    summary["status"] = "release" if gate else "block"
    return summary


def build_package(data, summary, slo_rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const sloInput = " + json.dumps(data, indent=2) + ";\n"
        "export const sloRows = " + json.dumps(slo_rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Release SLO Dashboard\n\nCritical release SLOs for CVPR demo coverage, bench acceptance, Colab Pro+ replay validity, readiness, provenance, imports, and full-stack validation.\n",
    )


def build_registry(summary, slo_rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "sloRows": slo_rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, slo_rows):
    stats = [
        ("Status", summary["status"]),
        ("SLOs", f"{summary['passingSlos']}/{summary['slos']}"),
        ("Critical failures", summary["criticalFailures"]),
        ("Readiness floor", summary["readinessFloor"]),
        ("Avg readiness", summary["avgReadiness"]),
        ("Bench acceptance", f"{summary['benchAcceptanceRate']}%"),
        ("Package tests", summary["packageTests"]),
        ("Full stack", summary["fullStackStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['id'])}</td><td>{esc(row['label'])}</td><td>{esc(row['actual'])}</td><td>{esc(row['direction'])} {esc(row['target'])}</td><td>{esc(row['severity'])}</td><td><a href="{esc(row['evidence'])}">{esc(row['evidence'])}</a></td><td class="{'pass' if pass_slo(row) else 'fail'}">{'pass' if pass_slo(row) else 'fail'}</td></tr>"""
        for row in slo_rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Release SLO Dashboard</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1220px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:92ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}.pass,.release,.valid{{color:var(--good)}}.fail,.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · release SLOs</div><h1>CVPR Release SLO Dashboard</h1><p>Critical production thresholds for the CVPR demo stack: coverage, bench acceptance, arena release, Colab Pro+ replay validity, readiness floor, provenance, imports, package tests, and full-stack validation.</p><nav><a href="index.html">all themes</a><a href="cvpr-colab-result-replay.html">result replay</a><a href="cvpr-demo-evidence-cockpit.html">demo cockpit</a><a href="cvpr-production-release-brief.html">release brief</a><a href="analysis/cvpr_release_slo_dashboard/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Critical SLOs</h2><table><thead><tr><th>SLO</th><th>Label</th><th>Actual</th><th>Target</th><th>Severity</th><th>Evidence</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_release_slo_dashboard.py · tested package under source-code/learning/cvpr-release-slo-dashboard</div></footer></body></html>"""
    write(ROOT / "cvpr-release-slo-dashboard.html", page)


def main():
    data = load_input()
    slo_rows = build_slo_rows(data)
    summary = summarize(data, slo_rows)
    build_package(data, summary, slo_rows)
    build_registry(summary, slo_rows)
    build_page(summary, slo_rows)
    print(
        f"wrote cvpr-release-slo-dashboard.html: {summary['passingSlos']}/{summary['slos']} SLOs, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

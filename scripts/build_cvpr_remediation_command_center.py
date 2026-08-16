"""Build the CVPR remediation command center demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-command-center"
ANALYSIS = ROOT / "analysis/cvpr_remediation_command_center"

SOURCES = {
    "ledger": ROOT / "analysis/cvpr_remediation_audit_ledger/registry.json",
    "gauntlet": ROOT / "analysis/cvpr_cross_theme_incident_gauntlet/registry.json",
    "sprint": ROOT / "analysis/cvpr_gauntlet_remediation_sprint/registry.json",
    "retest": ROOT / "analysis/cvpr_remediation_retest_harness/registry.json",
    "promotion": ROOT / "analysis/cvpr_remediation_promotion_board/registry.json",
    "canary": ROOT / "analysis/cvpr_remediation_canary_monitor/registry.json",
    "rollback": ROOT / "analysis/cvpr_remediation_rollback_drillbook/registry.json",
    "rehearsal": ROOT / "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
}

CORE = """export function surfaceReady(row) {
  return row.actual === row.expected && row.evidence && row.surface && row.command;
}

export function remediationGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "operator-ready") return "block";
  if (summary.surfaces !== 7) return "block";
  if (summary.readySurfaces !== 7) return "block";
  if (summary.postBlock !== 0) return "block";
  if (summary.canaryRollback !== 0) return "block";
  if (summary.rehearsalMisses !== 0) return "block";
  if (summary.ledgerStatus !== "complete") return "block";
  return "operator-ready";
}

export function summarizeCommandCenter(rows, ledgerSummary) {
  return {
    surfaces: rows.length,
    readySurfaces: rows.filter(surfaceReady).length,
    postBlock: ledgerSummary.postBlock,
    canaryRollback: ledgerSummary.canaryRollback,
    rehearsalMisses: ledgerSummary.rehearsalMisses,
    ledgerStatus: ledgerSummary.status
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { ledgerSummary, summary, surfaceRows } from "../src/fixtures.js";
import { remediationGate, summarizeCommandCenter, surfaceReady } from "../src/core.js";

const derived = summarizeCommandCenter(surfaceRows, ledgerSummary);
assert.equal(derived.surfaces, 7);
assert.equal(derived.readySurfaces, 7);
assert.equal(surfaceRows.filter(surfaceReady).length, 7);
assert.equal(summary.surfaces, 7);
assert.equal(summary.readySurfaces, 7);
assert.equal(summary.gauntletBlocks, 14);
assert.equal(summary.actionableRows, 29);
assert.equal(summary.postBlock, 0);
assert.equal(summary.promote, 12);
assert.equal(summary.monitor, 17);
assert.equal(summary.canaryRollback, 0);
assert.equal(summary.rollbackDrills, 12);
assert.equal(summary.rehearsalMisses, 0);
assert.equal(remediationGate(summary), "operator-ready");
assert.equal(summary.status, "operator-ready");
console.log("ok cvpr-remediation-command-center:", summary.readySurfaces, "surfaces ready");
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
            "surface": "cvpr-remediation-audit-ledger.html",
            "label": "Audit ledger",
            "actual": data["ledger"]["summary"]["status"],
            "expected": "complete",
            "metric": f"{data['ledger']['summary']['readyStages']}/{data['ledger']['summary']['stages']} stages",
            "evidence": "analysis/cvpr_remediation_audit_ledger/registry.json",
            "command": "python3 scripts/verify_cvpr_remediation_audit_ledger.py",
        },
        {
            "surface": "cvpr-gauntlet-remediation-sprint.html",
            "label": "Action sprint",
            "actual": data["sprint"]["summary"]["status"],
            "expected": "release",
            "metric": f"{data['sprint']['summary']['actionableRows']} actions",
            "evidence": "analysis/cvpr_gauntlet_remediation_sprint/registry.json",
            "command": "python3 scripts/verify_cvpr_gauntlet_remediation_sprint.py",
        },
        {
            "surface": "cvpr-remediation-retest-harness.html",
            "label": "Retest harness",
            "actual": data["retest"]["summary"]["status"],
            "expected": "release",
            "metric": f"{data['retest']['summary']['clearedBlocks']} cleared blocks",
            "evidence": "analysis/cvpr_remediation_retest_harness/registry.json",
            "command": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        },
        {
            "surface": "cvpr-remediation-promotion-board.html",
            "label": "Promotion board",
            "actual": data["promotion"]["summary"]["status"],
            "expected": "release",
            "metric": f"{data['promotion']['summary']['promote']} promote / {data['promotion']['summary']['monitor']} monitor",
            "evidence": "analysis/cvpr_remediation_promotion_board/registry.json",
            "command": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        },
        {
            "surface": "cvpr-remediation-canary-monitor.html",
            "label": "Canary monitor",
            "actual": data["canary"]["summary"]["status"],
            "expected": "watching",
            "metric": f"{data['canary']['summary']['clean']} clean / {data['canary']['summary']['watch']} watch",
            "evidence": "analysis/cvpr_remediation_canary_monitor/registry.json",
            "command": "python3 scripts/verify_cvpr_remediation_canary_monitor.py",
        },
        {
            "surface": "cvpr-remediation-rollback-drillbook.html",
            "label": "Rollback drillbook",
            "actual": data["rollback"]["summary"]["status"],
            "expected": "ready",
            "metric": f"{data['rollback']['summary']['readyDrills']} drills",
            "evidence": "analysis/cvpr_remediation_rollback_drillbook/registry.json",
            "command": "python3 scripts/verify_cvpr_remediation_rollback_drillbook.py",
        },
        {
            "surface": "cvpr-remediation-rollback-rehearsal-lab.html",
            "label": "Rollback rehearsal lab",
            "actual": data["rehearsal"]["summary"]["status"],
            "expected": "release",
            "metric": f"{data['rehearsal']['summary']['passing']} passing rehearsals",
            "evidence": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
            "command": "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py",
        },
    ]


def summarize(data, rows):
    ready = len([row for row in rows if row["actual"] == row["expected"]])
    summary = {
        "demo": "cvpr-remediation-command-center",
        "status": "operator-ready",
        "surfaces": len(rows),
        "readySurfaces": ready,
        "gauntletBlocks": data["gauntlet"]["summary"]["block"],
        "actionableRows": data["sprint"]["summary"]["actionableRows"],
        "clearedBlocks": data["retest"]["summary"]["clearedBlocks"],
        "postBlock": data["retest"]["summary"]["postBlock"],
        "promote": data["promotion"]["summary"]["promote"],
        "monitor": data["promotion"]["summary"]["monitor"],
        "canaryRollback": data["canary"]["summary"]["rollback"],
        "rollbackDrills": data["rollback"]["summary"]["drills"],
        "rehearsalMisses": data["rehearsal"]["summary"]["misses"],
        "ledgerStatus": data["ledger"]["summary"]["status"],
        "themes": data["ledger"]["summary"]["themes"],
        "incidents": data["ledger"]["summary"]["incidents"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["surfaces"] == 7
        and summary["readySurfaces"] == 7
        and summary["gauntletBlocks"] == 14
        and summary["actionableRows"] == 29
        and summary["clearedBlocks"] == 14
        and summary["postBlock"] == 0
        and summary["promote"] == 12
        and summary["monitor"] == 17
        and summary["canaryRollback"] == 0
        and summary["rollbackDrills"] == 12
        and summary["rehearsalMisses"] == 0
        and summary["ledgerStatus"] == "complete"
    )
    summary["status"] = "operator-ready" if gate else "block"
    return summary


def build_package(rows, summary, ledger_summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const surfaceRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const ledgerSummary = " + json.dumps(ledger_summary, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Command Center\n\nOperator command center for the full remediation chain, from gauntlet failures through rollback rehearsal and audit evidence.\n")


def build_registry(rows, summary):
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


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Surfaces", summary["surfaces"]),
        ("Ready", summary["readySurfaces"]),
        ("Cleared", summary["clearedBlocks"]),
        ("Promote", summary["promote"]),
        ("Monitor", summary["monitor"]),
        ("Rollback", summary["canaryRollback"]),
        ("Drills", summary["rollbackDrills"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['surface'])}">{esc(row['label'])}</a></td><td>{esc(row['actual'])}</td><td>{esc(row['expected'])}</td><td>{esc(row['metric'])}</td><td>{esc(row['evidence'])}</td><td><code>{esc(row['command'])}</code></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Command Center</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · remediation command</div><h1>Remediation Command Center</h1><p>One operator surface for the full remediation pipeline: action sprint, retest, promotion, canary watch, rollback drills, rehearsal evidence, and audit ledger.</p><nav><a href="index.html">all themes</a><a href="cvpr-remediation-audit-ledger.html">audit ledger</a><a href="cvpr-remediation-rollback-rehearsal-lab.html">rehearsal lab</a><a href="cvpr-release-command-center.html">release command center</a><a href="analysis/cvpr_remediation_command_center/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Operator Surfaces</h2><table><thead><tr><th>Surface</th><th>Actual</th><th>Expected</th><th>Metric</th><th>Evidence</th><th>Verifier</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Command Gate</h2><code>{esc(summary['fullStackCommand'])} · post-block {summary['postBlock']} · canary rollback {summary['canaryRollback']} · rehearsal misses {summary['rehearsalMisses']} · ledger {esc(summary['ledgerStatus'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_command_center.py · tested package under source-code/learning/cvpr-remediation-command-center</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-command-center.html", page)


def main():
    data = load_input()
    rows = build_surface_rows(data)
    summary = summarize(data, rows)
    build_package(rows, summary, data["ledger"]["summary"])
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-remediation-command-center.html: {summary['readySurfaces']} surfaces, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR remediation audit ledger demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-audit-ledger"
ANALYSIS = ROOT / "analysis/cvpr_remediation_audit_ledger"

SOURCES = {
    "gauntlet": ROOT / "analysis/cvpr_cross_theme_incident_gauntlet/registry.json",
    "sprint": ROOT / "analysis/cvpr_gauntlet_remediation_sprint/registry.json",
    "retest": ROOT / "analysis/cvpr_remediation_retest_harness/registry.json",
    "promotion": ROOT / "analysis/cvpr_remediation_promotion_board/registry.json",
    "canary": ROOT / "analysis/cvpr_remediation_canary_monitor/registry.json",
    "rollback": ROOT / "analysis/cvpr_remediation_rollback_drillbook/registry.json",
    "rehearsal": ROOT / "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
}

CORE = """export function ledgerReady(row) {
  return Boolean(row.evidence && row.command && row.status && row.status !== "inspect" && row.status !== "alert" && row.count > 0);
}

export function ledgerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "complete") return "block";
  if (summary.stages !== 7) return "block";
  if (summary.readyStages !== 7) return "block";
  if (summary.gauntletBlocks !== 14) return "block";
  if (summary.actionableRows !== 29) return "block";
  if (summary.clearedBlocks !== 14) return "block";
  if (summary.promote !== 12) return "block";
  if (summary.canaryRollback !== 0) return "block";
  if (summary.rollbackDrills !== 12) return "block";
  if (summary.rehearsalMisses !== 0) return "block";
  return "complete";
}

export function summarizeLedger(rows) {
  return {
    stages: rows.length,
    readyStages: rows.filter(ledgerReady).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { ledgerRows, summary } from "../src/fixtures.js";
import { ledgerGate, ledgerReady, summarizeLedger } from "../src/core.js";

const derived = summarizeLedger(ledgerRows);
assert.equal(derived.stages, 7);
assert.equal(derived.readyStages, 7);
assert.equal(ledgerRows.filter(ledgerReady).length, 7);
assert.equal(summary.stages, 7);
assert.equal(summary.readyStages, 7);
assert.equal(summary.gauntletBlocks, 14);
assert.equal(summary.actionableRows, 29);
assert.equal(summary.clearedBlocks, 14);
assert.equal(summary.promote, 12);
assert.equal(summary.canaryRollback, 0);
assert.equal(summary.rollbackDrills, 12);
assert.equal(summary.rehearsalMisses, 0);
assert.equal(ledgerGate(summary), "complete");
assert.equal(summary.status, "complete");
console.log("ok cvpr-remediation-audit-ledger:", summary.readyStages, "stages ready");
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


def build_rows(data):
    specs = [
        ("gauntlet", "Cross-theme incident gauntlet", "cvpr-cross-theme-incident-gauntlet.html", data["gauntlet"]["summary"]["status"], data["gauntlet"]["summary"]["gauntletRows"], "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py"),
        ("sprint", "Gauntlet remediation sprint", "cvpr-gauntlet-remediation-sprint.html", data["sprint"]["summary"]["status"], data["sprint"]["summary"]["actionableRows"], "python3 scripts/verify_cvpr_gauntlet_remediation_sprint.py"),
        ("retest", "Remediation retest harness", "cvpr-remediation-retest-harness.html", data["retest"]["summary"]["status"], data["retest"]["summary"]["retestRows"], "python3 scripts/verify_cvpr_remediation_retest_harness.py"),
        ("promotion", "Remediation promotion board", "cvpr-remediation-promotion-board.html", data["promotion"]["summary"]["status"], data["promotion"]["summary"]["rows"], "python3 scripts/verify_cvpr_remediation_promotion_board.py"),
        ("canary", "Remediation canary monitor", "cvpr-remediation-canary-monitor.html", data["canary"]["summary"]["status"], data["canary"]["summary"]["rows"], "python3 scripts/verify_cvpr_remediation_canary_monitor.py"),
        ("rollback", "Remediation rollback drillbook", "cvpr-remediation-rollback-drillbook.html", data["rollback"]["summary"]["status"], data["rollback"]["summary"]["drills"], "python3 scripts/verify_cvpr_remediation_rollback_drillbook.py"),
        ("rehearsal", "Remediation rollback rehearsal lab", "cvpr-remediation-rollback-rehearsal-lab.html", data["rehearsal"]["summary"]["status"], data["rehearsal"]["summary"]["rehearsals"], "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py"),
    ]
    rows = []
    for index, (key, title, surface, status, count, command) in enumerate(specs, 1):
        rows.append(
            {
                "id": f"remediation-ledger-{index:02d}-{key}",
                "stage": index,
                "key": key,
                "title": title,
                "surface": surface,
                "status": status,
                "count": count,
                "evidence": str(SOURCES[key].relative_to(ROOT)),
                "command": command,
                "ready": bool(status not in {"inspect", "alert"} and count > 0),
            }
        )
    return rows


def summarize(data, rows):
    summary = {
        "demo": "cvpr-remediation-audit-ledger",
        "status": "complete",
        "stages": len(rows),
        "readyStages": len([row for row in rows if row["ready"]]),
        "gauntletRows": data["gauntlet"]["summary"]["gauntletRows"],
        "gauntletBlocks": data["gauntlet"]["summary"]["block"],
        "actionableRows": data["sprint"]["summary"]["actionableRows"],
        "clearedBlocks": data["retest"]["summary"]["clearedBlocks"],
        "postBlock": data["retest"]["summary"]["postBlock"],
        "promote": data["promotion"]["summary"]["promote"],
        "monitor": data["promotion"]["summary"]["monitor"],
        "canaryRollback": data["canary"]["summary"]["rollback"],
        "rollbackDrills": data["rollback"]["summary"]["drills"],
        "rehearsals": data["rehearsal"]["summary"]["rehearsals"],
        "rehearsalMisses": data["rehearsal"]["summary"]["misses"],
        "themes": min(data["sprint"]["summary"]["themes"], data["promotion"]["summary"]["themes"], data["canary"]["summary"]["themes"]),
        "incidents": min(data["sprint"]["summary"]["incidents"], data["promotion"]["summary"]["incidents"], data["canary"]["summary"]["incidents"]),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["stages"] == 7
        and summary["readyStages"] == 7
        and summary["gauntletBlocks"] == 14
        and summary["actionableRows"] == 29
        and summary["clearedBlocks"] == 14
        and summary["postBlock"] == 0
        and summary["promote"] == 12
        and summary["monitor"] == 17
        and summary["canaryRollback"] == 0
        and summary["rollbackDrills"] == 12
        and summary["rehearsalMisses"] == 0
        and summary["themes"] == 8
        and summary["incidents"] == 4
    )
    summary["status"] = "complete" if gate else "inspect"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const ledgerRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Audit Ledger\n\nOrdered audit ledger for the full incident-remediation chain from gauntlet failures through rollback rehearsal evidence.\n")


def build_registry(rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "ledgerRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Stages", summary["stages"]),
        ("Ready", summary["readyStages"]),
        ("Blocks", summary["gauntletBlocks"]),
        ("Actions", summary["actionableRows"]),
        ("Promote", summary["promote"]),
        ("Rollback", summary["canaryRollback"]),
        ("Rehearsals", summary["rehearsals"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{row['stage']}</td><td><a href="{esc(row['surface'])}">{esc(row['title'])}</a></td><td>{esc(row['status'])}</td><td>{row['count']}</td><td>{esc(row['evidence'])}</td><td><code>{esc(row['command'])}</code></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Audit Ledger</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1050px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · remediation audit</div><h1>Remediation Audit Ledger</h1><p>Ordered audit evidence for the full remediation chain: gauntlet failures, sprint actions, retests, promotions, canaries, rollback drills, and rollback rehearsals.</p><nav><a href="index.html">all themes</a><a href="cvpr-remediation-rollback-rehearsal-lab.html">rehearsal lab</a><a href="cvpr-remediation-rollback-drillbook.html">rollback drillbook</a><a href="cvpr-release-audit-trail.html">release audit trail</a><a href="analysis/cvpr_remediation_audit_ledger/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Ledger Rows</h2><table><thead><tr><th>#</th><th>Stage</th><th>Status</th><th>Count</th><th>Evidence</th><th>Verifier</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Ledger Gate</h2><code>{esc(summary['fullStackCommand'])} · {summary['readyStages']} / {summary['stages']} stages ready · {summary['clearedBlocks']} cleared blocks · {summary['canaryRollback']} canary rollback alerts</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_audit_ledger.py · tested package under source-code/learning/cvpr-remediation-audit-ledger</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-audit-ledger.html", page)


def main():
    data = load_input()
    rows = build_rows(data)
    summary = summarize(data, rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-remediation-audit-ledger.html: {summary['readyStages']} stages, status {summary['status']}")


if __name__ == "__main__":
    main()

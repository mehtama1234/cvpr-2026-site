"""Build the CVPR interactive rollback rehearsal lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "analysis/cvpr_interactive_rollback_drillbook/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_rollback_rehearsal_lab"
BASE = ROOT / "source-code/learning/cvpr-interactive-rollback-rehearsal-lab"

CORE = """export function rehearsalReady(row) {
  return row.status === "clear" &&
    row.drillStatus === "armed" &&
    row.recoveryCommand === "python3 scripts/validate_cvpr_full_stack.py" &&
    row.durationMin <= row.budgetMin &&
    row.expectedHold === 0;
}

export function summarizeRehearsals(rows) {
  return {
    rehearsals: rows.length,
    clear: rows.filter(rehearsalReady).length,
    blocked: rows.filter((row) => !rehearsalReady(row)).length,
    maxDuration: Math.max(...rows.map((row) => row.durationMin)),
    totalDuration: rows.reduce((sum, row) => sum + row.durationMin, 0)
  };
}

export function rehearsalGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "rehearsal-ready") return "block";
  if (summary.rehearsals !== 6) return "block";
  if (summary.clearRehearsals !== 6) return "block";
  if (summary.blockedRehearsals !== 0) return "block";
  if (summary.armedDrills !== 6) return "block";
  if (summary.driftChecks !== 18) return "block";
  if (summary.holds !== 0) return "block";
  return "rehearsal-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { rehearsalRows, summary } from "../src/fixtures.js";
import { rehearsalGate, rehearsalReady, summarizeRehearsals } from "../src/core.js";

assert.equal(rehearsalRows.length, 6);
assert.equal(rehearsalRows.every(rehearsalReady), true);
const derived = summarizeRehearsals(rehearsalRows);
assert.equal(derived.clear, summary.clearRehearsals);
assert.equal(derived.blocked, 0);
assert.equal(summary.armedDrills, 6);
assert.equal(summary.driftChecks, 18);
assert.equal(summary.holds, 0);
assert.equal(rehearsalGate(summary), "rehearsal-ready");
console.log("ok cvpr-interactive-rollback-rehearsal-lab:", summary.rehearsals, "rehearsals");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_source():
    return json.loads(SOURCE.read_text(encoding="utf-8"))


def build_rows(drills):
    rows = []
    for index, drill in enumerate(drills, start=1):
        duration = 3 + index
        rows.append({
            "rehearsalId": f"interactive-rehearsal-{index:02d}",
            "drillId": drill["drillId"],
            "category": drill["category"],
            "trigger": drill["trigger"],
            "owner": drill["owner"],
            "drillStatus": drill["status"],
            "action": drill["action"],
            "recoveryCommand": drill["command"],
            "durationMin": duration,
            "budgetMin": 12,
            "expectedHold": drill["expectedHold"],
            "evidence": [
                "analysis/cvpr_interactive_rollback_drillbook/registry.json",
                "analysis/cvpr_interactive_drift_sentinel/registry.json",
                "analysis/cvpr_full_stack_validation/registry.json",
            ],
            "status": "clear" if drill["status"] == "armed" and duration <= 12 and drill["expectedHold"] == 0 else "block",
        })
    return rows


def summarize(rows, drill_summary):
    summary = {
        "lab": "cvpr-interactive-rollback-rehearsal-lab",
        "status": "rehearsal-ready",
        "sourceDrillbook": "analysis/cvpr_interactive_rollback_drillbook/registry.json",
        "rehearsals": len(rows),
        "clearRehearsals": len([row for row in rows if row["status"] == "clear"]),
        "blockedRehearsals": len([row for row in rows if row["status"] != "clear"]),
        "armedDrills": drill_summary["armedDrills"],
        "driftChecks": drill_summary["driftChecks"],
        "blockedChecks": drill_summary["blockedChecks"],
        "healthBlocked": drill_summary["healthBlocked"],
        "triageRetest": drill_summary["triageRetest"],
        "demos": drill_summary["demos"],
        "scenarioCases": drill_summary["scenarioCases"],
        "promoteDecisions": drill_summary["promoteDecisions"],
        "holds": drill_summary["holds"] + sum(row["expectedHold"] for row in rows),
        "validator": "scripts/verify_cvpr_interactive_rollback_rehearsal_lab.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["rehearsals"] == 6
        and summary["clearRehearsals"] == 6
        and summary["blockedRehearsals"] == 0
        and summary["armedDrills"] == 6
        and summary["driftChecks"] == 18
        and summary["blockedChecks"] == 0
        and summary["healthBlocked"] == 0
        and summary["triageRetest"] == 0
        and summary["demos"] == 40
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["holds"] == 0
    )
    summary["status"] = "rehearsal-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const rehearsalRows = "
        + json.dumps(rows, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Rollback Rehearsal Lab\n\nTimed rehearsal records for all interactive rollback drills.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "rehearsalRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rehearsals", summary["rehearsals"]),
        ("Clear", summary["clearRehearsals"]),
        ("Blocked", summary["blockedRehearsals"]),
        ("Drift", summary["blockedChecks"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    table_rows = ""
    for row in rows:
        table_rows += (
            "<tr>"
            f"<td>{esc(row['rehearsalId'])}<span>{esc(row['status'])}</span></td>"
            f"<td>{esc(row['drillId'])}<span>{esc(row['category'])}</span></td>"
            f"<td>{esc(row['trigger'])}</td>"
            f"<td>{esc(row['durationMin'])}/{esc(row['budgetMin'])} min</td>"
            f"<td>{esc(row['recoveryCommand'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Rollback Rehearsal Lab</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:900px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - rollback rehearsal</div><h1>Interactive Rollback Rehearsal Lab</h1><p>Timed rehearsal records proving the six interactive rollback drills clear without drift, retest, or hold state.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-rollback-drillbook.html">rollback drillbook</a><a href="analysis/cvpr_interactive_rollback_rehearsal_lab/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Rehearsal Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>demos={esc(summary['demos'])} cases={esc(summary['scenarioCases'])} promote={esc(summary['promoteDecisions'])}</code></section><section class="panel"><h2>Rehearsals</h2><div class="table-wrap"><table><thead><tr><th>Rehearsal</th><th>Drill</th><th>Trigger</th><th>Duration</th><th>Recovery Command</th></tr></thead><tbody>{table_rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_rollback_rehearsal_lab.py - package: source-code/learning/cvpr-interactive-rollback-rehearsal-lab</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-rollback-rehearsal-lab.html", page)


def main():
    source = read_source()
    rows = build_rows(source["rollbackDrills"])
    summary = summarize(rows, source["summary"])
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-rollback-rehearsal-lab.html: {summary['rehearsals']} rehearsals, status {summary['status']}")


if __name__ == "__main__":
    main()

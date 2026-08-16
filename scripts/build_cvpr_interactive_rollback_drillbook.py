"""Build the CVPR interactive rollback drillbook."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_interactive_rollback_drillbook"
BASE = ROOT / "source-code/learning/cvpr-interactive-rollback-drillbook"

DRILLS = [
    ("command-vs-health", "count-drift", "Rebuild command center, health monitor, and drift sentinel, then rerun full-stack validation."),
    ("command-vs-release", "release-drift", "Rebuild release pack from command center evidence and reseal drift sentinel."),
    ("release-vs-ledger", "audit-drift", "Rebuild audit ledger fingerprints and reseal release pack references."),
    ("health-monitor", "probe-block", "Rebuild the failed surface, rerun health monitor, and keep release on hold until probes clear."),
    ("triage-board", "decision-regression", "Move affected demos to retest, rerun scenario runner, then regenerate triage."),
    ("full-stack", "validation-regression", "Run full-stack validator, inspect failing step, and block promotion until status returns valid."),
]

CORE = """export function drillReady(drill) {
  return drill.status === "armed" &&
    drill.command.includes("python3 scripts/validate_cvpr_full_stack.py") &&
    drill.expectedHold === 0 &&
    drill.owner.length > 0;
}

export function summarizeDrills(drills) {
  return {
    drills: drills.length,
    armed: drills.filter(drillReady).length,
    categories: new Set(drills.map((drill) => drill.category)).size,
    holdBudget: drills.reduce((sum, drill) => sum + drill.expectedHold, 0)
  };
}

export function drillbookGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "drillbook-ready") return "block";
  if (summary.drills !== 6) return "block";
  if (summary.armedDrills !== 6) return "block";
  if (summary.driftChecks !== 18) return "block";
  if (summary.blockedChecks !== 0) return "block";
  if (summary.healthBlocked !== 0) return "block";
  if (summary.triageRetest !== 0) return "block";
  if (summary.holds !== 0) return "block";
  return "drillbook-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { rollbackDrills, summary } from "../src/fixtures.js";
import { drillReady, drillbookGate, summarizeDrills } from "../src/core.js";

assert.equal(rollbackDrills.length, 6);
assert.equal(rollbackDrills.every(drillReady), true);
const derived = summarizeDrills(rollbackDrills);
assert.equal(derived.armed, summary.armedDrills);
assert.equal(derived.holdBudget, 0);
assert.equal(summary.driftChecks, 18);
assert.equal(summary.blockedChecks, 0);
assert.equal(summary.healthBlocked, 0);
assert.equal(summary.triageRetest, 0);
assert.equal(drillbookGate(summary), "drillbook-ready");
console.log("ok cvpr-interactive-rollback-drillbook:", summary.drills, "drills");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_summary(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))["summary"]


def build_drills():
    drills = []
    for index, (category, trigger, action) in enumerate(DRILLS, start=1):
        drills.append({
            "drillId": f"interactive-rollback-{index:02d}",
            "category": category,
            "trigger": trigger,
            "owner": "interactive-release-operator",
            "action": action,
            "command": "python3 scripts/validate_cvpr_full_stack.py",
            "expectedHold": 0,
            "status": "armed",
        })
    return drills


def summarize(drills):
    sentinel = read_summary("analysis/cvpr_interactive_drift_sentinel/registry.json")
    health = read_summary("analysis/cvpr_interactive_health_monitor/registry.json")
    triage = read_summary("analysis/cvpr_interactive_triage_board/registry.json")
    summary = {
        "drillbook": "cvpr-interactive-rollback-drillbook",
        "status": "drillbook-ready",
        "drills": len(drills),
        "armedDrills": len([drill for drill in drills if drill["status"] == "armed"]),
        "driftChecks": sentinel["checks"],
        "blockedChecks": sentinel["blockedChecks"],
        "healthBlocked": health["blockedProbes"],
        "triageRetest": triage["retest"],
        "demos": sentinel["demos"],
        "scenarioCases": sentinel["scenarioCases"],
        "promoteDecisions": sentinel["promoteDecisions"],
        "holds": sentinel["holds"] + health["holds"] + triage["retest"],
        "validator": "scripts/verify_cvpr_interactive_rollback_drillbook.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["drills"] == 6
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
    summary["status"] = "drillbook-ready" if gate else "block"
    return summary


def build_package(drills, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const rollbackDrills = "
        + json.dumps(drills, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Rollback Drillbook\n\nRollback drills for interactive drift, health, triage, and full-stack validation regressions.\n")


def build_registry(drills, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "rollbackDrills": drills}, indent=2) + "\n")


def build_page(drills, summary):
    stats = [
        ("Status", summary["status"]),
        ("Drills", summary["drills"]),
        ("Armed", summary["armedDrills"]),
        ("Drift", summary["blockedChecks"]),
        ("Retest", summary["triageRetest"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows = ""
    for drill in drills:
        rows += (
            "<tr>"
            f"<td>{esc(drill['drillId'])}<span>{esc(drill['status'])}</span></td>"
            f"<td>{esc(drill['category'])}</td>"
            f"<td>{esc(drill['trigger'])}</td>"
            f"<td>{esc(drill['action'])}</td>"
            f"<td>{esc(drill['command'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Rollback Drillbook</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:900px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive rollback</div><h1>Interactive Rollback Drillbook</h1><p>Rollback drills for drift, health probe, triage decision, and full-stack validation regressions in the interactive demo release chain.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-drift-sentinel.html">drift sentinel</a><a href="analysis/cvpr_interactive_rollback_drillbook/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Rollback Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>demos={esc(summary['demos'])} cases={esc(summary['scenarioCases'])} promote={esc(summary['promoteDecisions'])}</code></section><section class="panel"><h2>Drills</h2><div class="table-wrap"><table><thead><tr><th>Drill</th><th>Category</th><th>Trigger</th><th>Action</th><th>Command</th></tr></thead><tbody>{rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_rollback_drillbook.py - package: source-code/learning/cvpr-interactive-rollback-drillbook</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-rollback-drillbook.html", page)


def main():
    drills = build_drills()
    summary = summarize(drills)
    build_package(drills, summary)
    build_registry(drills, summary)
    build_page(drills, summary)
    print(f"wrote cvpr-interactive-rollback-drillbook.html: {summary['drills']} drills, status {summary['status']}")


if __name__ == "__main__":
    main()

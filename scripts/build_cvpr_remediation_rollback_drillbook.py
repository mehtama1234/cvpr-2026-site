"""Build the CVPR remediation rollback drillbook demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-rollback-drillbook"
ANALYSIS = ROOT / "analysis/cvpr_remediation_rollback_drillbook"

CANARY = ROOT / "analysis/cvpr_remediation_canary_monitor/registry.json"

CORE = """export function breachScenario(row) {
  const pressure = row.incidentId === "compound-launch" ? 1.25 : row.incidentId === "adversarial-content" ? 1.1 : 0.95;
  const rollbackRisk = Number((row.metrics.rollbackRisk + 12 * pressure + (row.promotion === "promote" ? 4 : 2)).toFixed(1));
  const drift = Number((row.metrics.drift + 4 * pressure).toFixed(1));
  return { rollbackRisk, drift, trafficPct: row.metrics.trafficPct };
}

export function drillSeverity(scenario) {
  if (scenario.rollbackRisk >= 44 || scenario.drift >= 14) return "critical";
  if (scenario.rollbackRisk >= 36 || scenario.drift >= 12) return "high";
  return "focused";
}

export function buildRollbackDrill(row) {
  const scenario = breachScenario(row);
  return {
    id: `${row.demoId}/${row.incidentId}/rollback-drill`,
    demoId: row.demoId,
    demoTitle: row.demoTitle,
    theme: row.theme,
    page: row.page,
    incidentId: row.incidentId,
    incidentTitle: row.incidentTitle,
    promotion: row.promotion,
    currentStatus: row.canaryStatus,
    scenario,
    severity: drillSeverity(scenario),
    trigger: `rollback risk ${scenario.rollbackRisk} or drift ${scenario.drift}`,
    response: row.promotion === "promote" ? "freeze promoted traffic, demote to monitor, rerun retest harness" : "keep traffic capped, reopen remediation action, rerun retest harness",
    ownerSurface: row.page,
    responseCommand: row.responseCommand,
    validationCommand: "python3 scripts/validate_cvpr_full_stack.py"
  };
}

export function summarizeRollbackDrills(drills) {
  return {
    drills: drills.length,
    critical: drills.filter((drill) => drill.severity === "critical").length,
    high: drills.filter((drill) => drill.severity === "high").length,
    focused: drills.filter((drill) => drill.severity === "focused").length,
    promotedDrills: drills.filter((drill) => drill.promotion === "promote").length,
    monitoredDrills: drills.filter((drill) => drill.promotion === "monitor").length,
    themes: new Set(drills.map((drill) => drill.theme)).size,
    incidents: new Set(drills.map((drill) => drill.incidentId)).size,
    readyDrills: drills.filter((drill) => drill.ownerSurface && drill.responseCommand && drill.validationCommand).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { canaryRows, drills, summary } from "../src/fixtures.js";
import { breachScenario, buildRollbackDrill, drillSeverity, summarizeRollbackDrills } from "../src/core.js";

const worst = [...canaryRows].sort((a, b) => b.metrics.rollbackRisk - a.metrics.rollbackRisk)[0];
const scenario = breachScenario(worst);
const drill = buildRollbackDrill(worst);
assert.ok(scenario.rollbackRisk > worst.metrics.rollbackRisk);
assert.match(drillSeverity(scenario), /^(critical|high|focused)$/);
assert.equal(drill.validationCommand, "python3 scripts/validate_cvpr_full_stack.py");
assert.ok(drill.ownerSurface.endsWith(".html"));

const derived = summarizeRollbackDrills(drills);
assert.equal(summary.drills, 12);
assert.equal(summary.readyDrills, 12);
assert.equal(summary.critical, 2);
assert.ok(summary.high >= 6);
assert.equal(summary.focused, 1);
assert.equal(summary.promotedDrills, derived.promotedDrills);
assert.equal(summary.monitoredDrills, derived.monitoredDrills);
assert.equal(summary.themes, 8);
assert.equal(summary.incidents, 7);
assert.equal(derived.readyDrills, summary.readyDrills);
assert.equal(summary.status, "ready");
console.log("ok cvpr-remediation-rollback-drillbook:", summary.readyDrills, "drills ready");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def breach_scenario(row):
    pressure = 1.25 if row["incidentId"] == "compound-launch" else 1.1 if row["incidentId"] == "adversarial-content" else 0.95
    rollback_risk = round(row["metrics"]["rollbackRisk"] + 12 * pressure + (4 if row["promotion"] == "promote" else 2), 1)
    drift = round(row["metrics"]["drift"] + 4 * pressure, 1)
    return {"rollbackRisk": rollback_risk, "drift": drift, "trafficPct": row["metrics"]["trafficPct"]}


def severity(scenario):
    if scenario["rollbackRisk"] >= 44 or scenario["drift"] >= 14:
        return "critical"
    if scenario["rollbackRisk"] >= 36 or scenario["drift"] >= 12:
        return "high"
    return "focused"


def build_drill(row):
    scenario = breach_scenario(row)
    return {
        "id": f"{row['demoId']}/{row['incidentId']}/rollback-drill",
        "demoId": row["demoId"],
        "demoTitle": row["demoTitle"],
        "theme": row["theme"],
        "page": row["page"],
        "incidentId": row["incidentId"],
        "incidentTitle": row["incidentTitle"],
        "promotion": row["promotion"],
        "currentStatus": row["canaryStatus"],
        "scenario": scenario,
        "severity": severity(scenario),
        "trigger": f"rollback risk {scenario['rollbackRisk']} or drift {scenario['drift']}",
        "response": "freeze promoted traffic, demote to monitor, rerun retest harness" if row["promotion"] == "promote" else "keep traffic capped, reopen remediation action, rerun retest harness",
        "ownerSurface": row["page"],
        "responseCommand": row["responseCommand"],
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def select_rows(canary_rows):
    def sort_key(row):
        return (row["metrics"]["rollbackRisk"], row["metrics"]["drift"])

    selected = []
    seen = set()
    for theme in sorted({row["theme"] for row in canary_rows}):
        row = max([candidate for candidate in canary_rows if candidate["theme"] == theme], key=sort_key)
        selected.append(row)
        seen.add(row["id"])
    for row in sorted(canary_rows, key=sort_key, reverse=True):
        if row["id"] not in seen and len(selected) < 12:
            selected.append(row)
            seen.add(row["id"])
    return selected


def summarize(canary_data, drills):
    summary = {
        "demo": "cvpr-remediation-rollback-drillbook",
        "status": "ready",
        "sourceDemo": "cvpr-remediation-canary-monitor",
        "sourceCanaries": canary_data["summary"]["rows"],
        "drills": len(drills),
        "readyDrills": len([drill for drill in drills if drill["ownerSurface"] and drill["responseCommand"] and drill["validationCommand"]]),
        "critical": len([drill for drill in drills if drill["severity"] == "critical"]),
        "high": len([drill for drill in drills if drill["severity"] == "high"]),
        "focused": len([drill for drill in drills if drill["severity"] == "focused"]),
        "promotedDrills": len([drill for drill in drills if drill["promotion"] == "promote"]),
        "monitoredDrills": len([drill for drill in drills if drill["promotion"] == "monitor"]),
        "themes": len({drill["theme"] for drill in drills}),
        "incidents": len({drill["incidentId"] for drill in drills}),
        "canaryRollback": canary_data["summary"]["rollback"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["sourceCanaries"] == 53
        and summary["drills"] == 12
        and summary["readyDrills"] == 12
        and summary["critical"] >= 2
        and summary["high"] >= 6
        and summary["promotedDrills"] == len([drill for drill in drills if drill["promotion"] == "promote"])
        and summary["monitoredDrills"] == len([drill for drill in drills if drill["promotion"] == "monitor"])
        and summary["themes"] == 8
        and summary["incidents"] == 7
        and summary["canaryRollback"] == 0
    )
    summary["status"] = "ready" if gate else "inspect"
    return summary


def build_package(canary_rows, drills, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const canaryRows = " + json.dumps(canary_rows, indent=2) + ";\n"
        "export const drills = " + json.dumps(drills, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Rollback Drillbook\n\nRollback drills for canary breach scenarios across promoted and monitored remediation rows.\n")


def build_registry(canary_rows, drills, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "drills": drills,
                "sourceCanaryRows": canary_rows,
                "sources": {"canary": str(CANARY.relative_to(ROOT))},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(drills, summary):
    stats = [
        ("Status", summary["status"]),
        ("Drills", summary["drills"]),
        ("Critical", summary["critical"]),
        ("High", summary["high"]),
        ("Promoted", summary["promotedDrills"]),
        ("Monitored", summary["monitoredDrills"]),
        ("Themes", summary["themes"]),
        ("Incidents", summary["incidents"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(drill['page'])}">{esc(drill['demoTitle'])}</a></td><td>{esc(drill['incidentTitle'])}</td><td>{esc(drill['promotion'])}</td><td class="{esc(drill['severity'])}">{esc(drill['severity'])}</td><td>{esc(drill['trigger'])}</td><td>{esc(drill['response'])}</td><td><code>{esc(drill['responseCommand'])}</code></td></tr>"""
        for drill in drills
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Rollback Drillbook</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.critical{{color:var(--bad);font-weight:700}}.high{{color:var(--warn);font-weight:700}}.focused{{color:var(--good);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · remediation rollback</div><h1>Remediation Rollback Drillbook</h1><p>Pre-stage rollback drills for the highest-risk promoted and monitored canary rows, including breach triggers, owner pages, response commands, and full-stack validation.</p><nav><a href="index.html">all themes</a><a href="cvpr-remediation-canary-monitor.html">canary monitor</a><a href="cvpr-remediation-promotion-board.html">promotion board</a><a href="cvpr-release-regression-drillbook.html">release drillbook</a><a href="analysis/cvpr_remediation_rollback_drillbook/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Rollback Drills</h2><table><thead><tr><th>Demo</th><th>Incident</th><th>Promotion</th><th>Severity</th><th>Trigger</th><th>Response</th><th>Command</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Drill Gate</h2><code>{esc(summary['fullStackCommand'])} · {summary['readyDrills']} drills ready · current canary rollback count {summary['canaryRollback']} · response surfaces point to source demo pages</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_rollback_drillbook.py · tested package under source-code/learning/cvpr-remediation-rollback-drillbook</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-rollback-drillbook.html", page)


def main():
    canary = read_json(CANARY)
    selected = select_rows(canary["canaryRows"])
    drills = [build_drill(row) for row in selected]
    summary = summarize(canary, drills)
    build_package(canary["canaryRows"], drills, summary)
    build_registry(canary["canaryRows"], drills, summary)
    build_page(drills, summary)
    print(f"wrote cvpr-remediation-rollback-drillbook.html: {summary['readyDrills']} drills, status {summary['status']}")


if __name__ == "__main__":
    main()

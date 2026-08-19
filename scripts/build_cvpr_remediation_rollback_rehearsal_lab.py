"""Build the CVPR remediation rollback rehearsal lab demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-rollback-rehearsal-lab"
ANALYSIS = ROOT / "analysis/cvpr_remediation_rollback_rehearsal_lab"

DRILLBOOK = ROOT / "analysis/cvpr_remediation_rollback_drillbook/registry.json"

CORE = """export function targetMinutes(drill) {
  if (drill.severity === "critical") return 18;
  if (drill.severity === "high") return 28;
  return 40;
}

export function rehearsalSteps(drill) {
  const critical = drill.severity === "critical";
  const high = drill.severity === "high";
  return [
    { step: "detect", minutes: critical ? 3 : high ? 4 : 6 },
    { step: "freeze-traffic", minutes: critical ? 4 : high ? 5 : 7 },
    { step: "demote-or-cap", minutes: critical ? 3 : high ? 5 : 8 },
    { step: "rerun-response", minutes: critical ? 5 : high ? 8 : 11 },
    { step: "full-stack-validate", minutes: critical ? 3 : high ? 5 : 7 }
  ];
}

export function rehearseDrill(drill) {
  const steps = rehearsalSteps(drill);
  const elapsedMinutes = steps.reduce((sum, step) => sum + step.minutes, 0);
  const target = targetMinutes(drill);
  return {
    id: `${drill.id}/rehearsal`,
    drillId: drill.id,
    demoId: drill.demoId,
    demoTitle: drill.demoTitle,
    theme: drill.theme,
    page: drill.page,
    incidentId: drill.incidentId,
    incidentTitle: drill.incidentTitle,
    severity: drill.severity,
    promotion: drill.promotion,
    trigger: drill.trigger,
    steps,
    elapsedMinutes,
    targetMinutes: target,
    validationCommand: drill.validationCommand,
    responseCommand: drill.responseCommand,
    rehearsalStatus: elapsedMinutes <= target && drill.validationCommand ? "pass" : "miss"
  };
}

export function summarizeRehearsals(rows) {
  return {
    rehearsals: rows.length,
    passing: rows.filter((row) => row.rehearsalStatus === "pass").length,
    misses: rows.filter((row) => row.rehearsalStatus === "miss").length,
    critical: rows.filter((row) => row.severity === "critical").length,
    high: rows.filter((row) => row.severity === "high").length,
    focused: rows.filter((row) => row.severity === "focused").length,
    maxElapsedMinutes: Math.max(...rows.map((row) => row.elapsedMinutes)),
    maxTargetMinutes: Math.max(...rows.map((row) => row.targetMinutes)),
    themes: new Set(rows.map((row) => row.theme)).size,
    incidents: new Set(rows.map((row) => row.incidentId)).size
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { drills, rehearsalRows, summary } from "../src/fixtures.js";
import { rehearseDrill, rehearsalSteps, summarizeRehearsals, targetMinutes } from "../src/core.js";

const critical = drills.find((drill) => drill.severity === "critical");
const focused = drills.find((drill) => drill.severity === "focused");
assert.ok(targetMinutes(critical) < targetMinutes(focused));
assert.equal(rehearsalSteps(critical).length, 5);
const row = rehearseDrill(critical);
assert.equal(row.rehearsalStatus, "pass");
assert.ok(row.elapsedMinutes <= row.targetMinutes);
assert.equal(row.validationCommand, "python3 scripts/validate_cvpr_full_stack.py");

const derived = summarizeRehearsals(rehearsalRows);
assert.equal(summary.rehearsals, 12);
assert.equal(summary.passing, 12);
assert.equal(summary.misses, 0);
assert.equal(summary.critical, 2);
assert.equal(summary.high, 9);
assert.equal(summary.focused, 1);
assert.equal(summary.themes, 8);
assert.equal(summary.incidents, 7);
assert.equal(derived.passing, summary.passing);
assert.equal(summary.status, "release");
console.log("ok cvpr-remediation-rollback-rehearsal-lab:", summary.passing, "rehearsals passing");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def target_minutes(drill):
    if drill["severity"] == "critical":
        return 18
    if drill["severity"] == "high":
        return 28
    return 40


def steps_for(drill):
    critical = drill["severity"] == "critical"
    high = drill["severity"] == "high"
    return [
        {"step": "detect", "minutes": 3 if critical else 4 if high else 6},
        {"step": "freeze-traffic", "minutes": 4 if critical else 5 if high else 7},
        {"step": "demote-or-cap", "minutes": 3 if critical else 5 if high else 8},
        {"step": "rerun-response", "minutes": 5 if critical else 8 if high else 11},
        {"step": "full-stack-validate", "minutes": 3 if critical else 5 if high else 7},
    ]


def rehearse(drill):
    steps = steps_for(drill)
    elapsed = sum(step["minutes"] for step in steps)
    target = target_minutes(drill)
    return {
        "id": f"{drill['id']}/rehearsal",
        "drillId": drill["id"],
        "demoId": drill["demoId"],
        "demoTitle": drill["demoTitle"],
        "theme": drill["theme"],
        "page": drill["page"],
        "incidentId": drill["incidentId"],
        "incidentTitle": drill["incidentTitle"],
        "severity": drill["severity"],
        "promotion": drill["promotion"],
        "trigger": drill["trigger"],
        "steps": steps,
        "elapsedMinutes": elapsed,
        "targetMinutes": target,
        "validationCommand": drill["validationCommand"],
        "responseCommand": drill["responseCommand"],
        "rehearsalStatus": "pass" if elapsed <= target and drill["validationCommand"] else "miss",
    }


def summarize(drills, rows):
    summary = {
        "demo": "cvpr-remediation-rollback-rehearsal-lab",
        "status": "release",
        "sourceDemo": "cvpr-remediation-rollback-drillbook",
        "sourceDrills": len(drills),
        "rehearsals": len(rows),
        "passing": len([row for row in rows if row["rehearsalStatus"] == "pass"]),
        "misses": len([row for row in rows if row["rehearsalStatus"] == "miss"]),
        "critical": len([row for row in rows if row["severity"] == "critical"]),
        "high": len([row for row in rows if row["severity"] == "high"]),
        "focused": len([row for row in rows if row["severity"] == "focused"]),
        "maxElapsedMinutes": max(row["elapsedMinutes"] for row in rows),
        "maxTargetMinutes": max(row["targetMinutes"] for row in rows),
        "themes": len({row["theme"] for row in rows}),
        "incidents": len({row["incidentId"] for row in rows}),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["sourceDrills"] == 12
        and summary["rehearsals"] == 12
        and summary["passing"] == 12
        and summary["misses"] == 0
        and summary["critical"] == 2
        and summary["high"] == 9
        and summary["focused"] == 1
        and summary["themes"] == 8
        and summary["incidents"] == 7
        and all(row["elapsedMinutes"] <= row["targetMinutes"] for row in rows)
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(drills, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const drills = " + json.dumps(drills, indent=2) + ";\n"
        "export const rehearsalRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Rollback Rehearsal Lab\n\nTimed rollback rehearsals for the remediation rollback drillbook, including detect, freeze, cap/demote, retest, and full-stack validation phases.\n")


def build_registry(drills, rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "rehearsalRows": rows,
                "drills": drills,
                "sources": {"drillbook": str(DRILLBOOK.relative_to(ROOT))},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rehearsals", summary["rehearsals"]),
        ("Passing", summary["passing"]),
        ("Misses", summary["misses"]),
        ("Critical", summary["critical"]),
        ("High", summary["high"]),
        ("Max elapsed", summary["maxElapsedMinutes"]),
        ("Themes", summary["themes"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['page'])}">{esc(row['demoTitle'])}</a></td><td>{esc(row['incidentTitle'])}</td><td class="{esc(row['severity'])}">{esc(row['severity'])}</td><td>{row['elapsedMinutes']} / {row['targetMinutes']}</td><td>{esc(' -> '.join(step['step'] for step in row['steps']))}</td><td class="{esc(row['rehearsalStatus'])}">{esc(row['rehearsalStatus'])}</td><td><code>{esc(row['validationCommand'])}</code></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Rollback Rehearsal Lab</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.critical,.miss{{color:var(--bad);font-weight:700}}.high{{color:var(--warn);font-weight:700}}.focused,.pass{{color:var(--good);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · rollback rehearsal</div><h1>Remediation Rollback Rehearsal Lab</h1><p>Execute timed rollback rehearsals for every selected canary breach drill, from detection through traffic freeze, demotion or cap, retest, and full-stack validation.</p><nav><a href="index.html">all themes</a><a href="cvpr-remediation-rollback-drillbook.html">rollback drillbook</a><a href="cvpr-remediation-canary-monitor.html">canary monitor</a><a href="cvpr-release-audit-trail.html">audit trail</a><a href="analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Rehearsal Runs</h2><table><thead><tr><th>Demo</th><th>Incident</th><th>Severity</th><th>Minutes</th><th>Runbook</th><th>Status</th><th>Validation</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Rehearsal Gate</h2><code>{esc(summary['fullStackCommand'])} · all {summary['passing']} rehearsals pass target time · max elapsed {summary['maxElapsedMinutes']} minutes</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_rollback_rehearsal_lab.py · tested package under source-code/learning/cvpr-remediation-rollback-rehearsal-lab</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-rollback-rehearsal-lab.html", page)


def main():
    data = read_json(DRILLBOOK)
    drills = data["drills"]
    rows = [rehearse(drill) for drill in drills]
    summary = summarize(drills, rows)
    build_package(drills, rows, summary)
    build_registry(drills, rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-remediation-rollback-rehearsal-lab.html: {summary['passing']} rehearsals, status {summary['status']}")


if __name__ == "__main__":
    main()

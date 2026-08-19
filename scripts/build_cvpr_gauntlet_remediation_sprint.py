"""Build the CVPR gauntlet remediation sprint demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-gauntlet-remediation-sprint"
ANALYSIS = ROOT / "analysis/cvpr_gauntlet_remediation_sprint"

GAUNTLET = ROOT / "analysis/cvpr_cross_theme_incident_gauntlet/registry.json"

CORE = """export function classifyFailure(row) {
  if (row.metrics.risk >= 75) return "risk-containment";
  if (row.metrics.evidence < 50) return "evidence-repair";
  if (row.metrics.readiness < 50) return "readiness-recovery";
  return "review-hardening";
}

export function priorityFor(row) {
  if (row.decision === "block" && row.metrics.risk >= 75) return "critical";
  if (row.decision === "block") return "high";
  return "focused";
}

export function remediationAction(row) {
  const family = classifyFailure(row);
  const metric = family === "risk-containment" ? "risk" : family === "evidence-repair" ? "evidence" : family === "readiness-recovery" ? "readiness" : "resilience";
  const direction = metric === "risk" ? "lower" : "raise";
  return {
    id: `${row.demoId}/${row.incidentId}/${family}`,
    demoId: row.demoId,
    demoTitle: row.demoTitle,
    theme: row.theme,
    page: row.page,
    incidentId: row.incidentId,
    incidentTitle: row.incidentTitle,
    family,
    priority: priorityFor(row),
    metric,
    direction,
    baseline: row.metrics[metric],
    decision: row.decision,
    acceptanceCheck: `${direction} ${metric} under ${row.incidentId} and rerun cvpr-cross-theme-incident-gauntlet`,
    validationCommand: "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py"
  };
}

export function buildRemediationPlan(rows) {
  const actionable = rows.filter((row) => row.decision !== "release").map(remediationAction);
  const sprints = [
    {
      id: "critical-risk-containment",
      title: "Critical risk containment",
      actions: actionable.filter((action) => action.priority === "critical")
    },
    {
      id: "blocked-evidence-repair",
      title: "Blocked evidence repair",
      actions: actionable.filter((action) => action.priority === "high")
    },
    {
      id: "review-hardening",
      title: "Review hardening",
      actions: actionable.filter((action) => action.priority === "focused")
    }
  ];
  return { actionable, sprints };
}

export function summarizeRemediation(rows) {
  const { actionable, sprints } = buildRemediationPlan(rows);
  return {
    sourceRows: rows.length,
    actionableRows: actionable.length,
    blockActions: actionable.filter((action) => action.decision === "block").length,
    reviewActions: actionable.filter((action) => action.decision === "review").length,
    criticalActions: actionable.filter((action) => action.priority === "critical").length,
    highActions: actionable.filter((action) => action.priority === "high").length,
    focusedActions: actionable.filter((action) => action.priority === "focused").length,
    sprints: sprints.length,
    themes: new Set(actionable.map((action) => action.theme)).size,
    incidents: new Set(actionable.map((action) => action.incidentId)).size,
    acceptanceChecks: actionable.filter((action) => action.acceptanceCheck).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { actions, gauntletRows, sprints, summary } from "../src/fixtures.js";
import { buildRemediationPlan, classifyFailure, remediationAction, summarizeRemediation } from "../src/core.js";

const firstBlock = gauntletRows.find((row) => row.decision === "block");
const action = remediationAction(firstBlock);
assert.ok(["risk-containment", "evidence-repair", "readiness-recovery", "review-hardening"].includes(classifyFailure(firstBlock)));
assert.ok(action.acceptanceCheck.includes(firstBlock.incidentId));
assert.equal(action.validationCommand, "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py");

const derived = buildRemediationPlan(gauntletRows);
const derivedSummary = summarizeRemediation(gauntletRows);
assert.equal(derived.actionable.length, 53);
assert.equal(actions.length, 53);
assert.equal(sprints.length, 3);
assert.equal(summary.sourceRows, 56);
assert.equal(summary.actionableRows, 53);
assert.equal(summary.blockActions + summary.reviewActions, summary.actionableRows);
assert.equal(summary.incidents, 7);
assert.equal(summary.acceptanceChecks, summary.actionableRows);
assert.equal(derivedSummary.actionableRows, summary.actionableRows);
assert.equal(
  summary.status,
  summary.sourceRows == 56 &&
  summary.actionableRows === summary.blockActions + summary.reviewActions &&
  summary.sprints === 3 &&
  summary.themes >= 8 &&
  summary.incidents === 7 &&
  summary.acceptanceChecks === summary.actionableRows &&
  summary.criticalActions >= 3 &&
  summary.blockActions === 25 &&
  summary.reviewActions === 28
    ? "release"
    : "inspect"
);
console.log("ok cvpr-gauntlet-remediation-sprint:", summary.actionableRows, "actions");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def classify_failure(row):
    if row["metrics"]["risk"] >= 75:
        return "risk-containment"
    if row["metrics"]["evidence"] < 50:
        return "evidence-repair"
    if row["metrics"]["readiness"] < 50:
        return "readiness-recovery"
    return "review-hardening"


def priority_for(row):
    if row["decision"] == "block" and row["metrics"]["risk"] >= 75:
        return "critical"
    if row["decision"] == "block":
        return "high"
    return "focused"


def action_for(row):
    family = classify_failure(row)
    metric = {
        "risk-containment": "risk",
        "evidence-repair": "evidence",
        "readiness-recovery": "readiness",
        "review-hardening": "resilience",
    }[family]
    direction = "lower" if metric == "risk" else "raise"
    return {
        "id": f"{row['demoId']}/{row['incidentId']}/{family}",
        "demoId": row["demoId"],
        "demoTitle": row["demoTitle"],
        "theme": row["theme"],
        "page": row["page"],
        "incidentId": row["incidentId"],
        "incidentTitle": row["incidentTitle"],
        "family": family,
        "priority": priority_for(row),
        "metric": metric,
        "direction": direction,
        "baseline": row["metrics"][metric],
        "decision": row["decision"],
        "acceptanceCheck": f"{direction} {metric} under {row['incidentId']} and rerun cvpr-cross-theme-incident-gauntlet",
        "validationCommand": "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py",
        "sourceRegistry": "analysis/cvpr_cross_theme_incident_gauntlet/registry.json",
    }


def build_plan(rows):
    actions = [action_for(row) for row in rows if row["decision"] != "release"]
    specs = [
        ("critical-risk-containment", "Critical risk containment", "Stop compound-launch and high-risk incident rows from crossing the deployment risk ceiling.", "critical"),
        ("blocked-evidence-repair", "Blocked evidence repair", "Repair block rows that need stronger evidence, readiness, or source-demo gating before release.", "high"),
        ("review-hardening", "Review hardening", "Convert review rows into release candidates after the critical and high repairs land.", "focused"),
    ]
    sprints = []
    for index, (slug, title, goal, priority) in enumerate(specs, 1):
        sprint_actions = [action for action in actions if action["priority"] == priority]
        sprints.append(
            {
                "id": slug,
                "index": index,
                "title": title,
                "goal": goal,
                "actions": sprint_actions,
                "exitCriteria": [
                    "affected source demo verifier passes",
                    "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py passes",
                    "python3 scripts/verify_cvpr_gauntlet_remediation_sprint.py passes",
                    "python3 scripts/validate_cvpr_full_stack.py returns valid",
                ],
            }
        )
    return actions, sprints


def summarize(rows, actions, sprints):
    summary = {
        "demo": "cvpr-gauntlet-remediation-sprint",
        "status": "release",
        "sourceDemo": "cvpr-cross-theme-incident-gauntlet",
        "sourceRows": len(rows),
        "actionableRows": len(actions),
        "blockActions": len([action for action in actions if action["decision"] == "block"]),
        "reviewActions": len([action for action in actions if action["decision"] == "review"]),
        "criticalActions": len([action for action in actions if action["priority"] == "critical"]),
        "highActions": len([action for action in actions if action["priority"] == "high"]),
        "focusedActions": len([action for action in actions if action["priority"] == "focused"]),
        "sprints": len(sprints),
        "themes": len({action["theme"] for action in actions}),
        "incidents": len({action["incidentId"] for action in actions}),
        "acceptanceChecks": len([action for action in actions if action["acceptanceCheck"]]),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["sourceRows"] == 56
        and summary["actionableRows"] == summary["blockActions"] + summary["reviewActions"]
        and summary["blockActions"] == 25
        and summary["reviewActions"] == 28
        and summary["sprints"] == 3
        and summary["themes"] >= 8
        and summary["incidents"] == 7
        and summary["acceptanceChecks"] == summary["actionableRows"]
        and summary["criticalActions"] >= 3
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(rows, actions, sprints, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const gauntletRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const actions = " + json.dumps(actions, indent=2) + ";\n"
        "export const sprints = " + json.dumps(sprints, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Gauntlet Remediation Sprint\n\nTurns cross-theme incident gauntlet review and block rows into sprint actions, acceptance checks, and full-stack retest gates.\n")


def build_registry(rows, actions, sprints, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "sprints": sprints,
                "actions": actions,
                "sourceRows": rows,
                "sources": {"gauntlet": str(GAUNTLET.relative_to(ROOT))},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(rows, actions, sprints, summary):
    stats = [
        ("Status", summary["status"]),
        ("Actions", summary["actionableRows"]),
        ("Block", summary["blockActions"]),
        ("Review", summary["reviewActions"]),
        ("Critical", summary["criticalActions"]),
        ("High", summary["highActions"]),
        ("Focused", summary["focusedActions"]),
        ("Themes", summary["themes"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    action_rows = "".join(
        f"""<tr><td><a href="{esc(action['page'])}">{esc(action['demoTitle'])}</a></td><td>{esc(action['incidentTitle'])}</td><td>{esc(action['family'])}</td><td class="{esc(action['priority'])}">{esc(action['priority'])}</td><td>{esc(action['direction'])} {esc(action['metric'])}</td><td>{action['baseline']}</td><td>{esc(action['acceptanceCheck'])}</td></tr>"""
        for action in actions
    )
    sprint_cards = "".join(
        f"""<article class="panel"><h2>{esc(sprint['title'])}</h2><p>{esc(sprint['goal'])}</p><code>{len(sprint['actions'])} actions · {esc(' · '.join(sprint['exitCriteria']))}</code></article>"""
        for sprint in sprints
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Gauntlet Remediation Sprint</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--teal:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0}}.panel{{padding:16px;overflow-x:auto}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.critical{{color:var(--bad);font-weight:700}}.high{{color:var(--warn);font-weight:700}}.focused{{color:var(--good);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · gauntlet remediation</div><h1>Gauntlet Remediation Sprint</h1><p>Convert every cross-theme incident gauntlet review and block row into a concrete sprint action with owner context, acceptance checks, source-demo links, and full-stack retest gates.</p><nav><a href="index.html">all themes</a><a href="cvpr-cross-theme-incident-gauntlet.html">incident gauntlet</a><a href="cvpr-remediation-sprint-plan.html">base sprint plan</a><a href="cvpr-validation-center.html">validation center</a><a href="analysis/cvpr_gauntlet_remediation_sprint/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{sprint_cards}</section><section class="panel"><h2>Action Queue</h2><table><thead><tr><th>Demo</th><th>Incident</th><th>Failure family</th><th>Priority</th><th>Metric</th><th>Baseline</th><th>Acceptance check</th></tr></thead><tbody>{action_rows}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · source rows: {summary['sourceRows']} · actionable rows: {summary['actionableRows']} · source verifier: python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_gauntlet_remediation_sprint.py · tested package under source-code/learning/cvpr-gauntlet-remediation-sprint</div></footer></body></html>"""
    write(ROOT / "cvpr-gauntlet-remediation-sprint.html", page)


def main():
    gauntlet = read_json(GAUNTLET)
    rows = gauntlet["gauntletRows"]
    actions, sprints = build_plan(rows)
    summary = summarize(rows, actions, sprints)
    build_package(rows, actions, sprints, summary)
    build_registry(rows, actions, sprints, summary)
    build_page(rows, actions, sprints, summary)
    print(f"wrote cvpr-gauntlet-remediation-sprint.html: {summary['actionableRows']} actions, status {summary['status']}")


if __name__ == "__main__":
    main()

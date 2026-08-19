"""Build the CVPR remediation retest harness demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-retest-harness"
ANALYSIS = ROOT / "analysis/cvpr_remediation_retest_harness"

SPRINT = ROOT / "analysis/cvpr_gauntlet_remediation_sprint/registry.json"

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function gauntletDecision(metrics) {
  if (metrics.resilience >= 68 && metrics.readiness >= 64 && metrics.risk <= 42 && metrics.evidence >= 60) return "release";
  if (metrics.resilience >= 52 && metrics.readiness >= 48 && metrics.risk <= 66 && metrics.evidence >= 48) return "review";
  return "block";
}

export function patchEffect(action) {
  if (action.priority === "critical") return { readiness: 32, risk: -36, evidence: 18 };
  if (action.family === "evidence-repair") return { readiness: 16, risk: -14, evidence: 24 };
  if (action.family === "readiness-recovery") return { readiness: 28, risk: -12, evidence: 14 };
  if (action.priority === "high") return { readiness: 22, risk: -20, evidence: 16 };
  return { readiness: 14, risk: -12, evidence: 12 };
}

export function recomputeResilience(metrics) {
  return clamp(metrics.readiness * 0.44 + (100 - metrics.risk) * 0.34 + metrics.evidence * 0.22);
}

export function retestAction(action, sourceRow) {
  const effect = patchEffect(action);
  const after = {
    readiness: clamp(sourceRow.metrics.readiness + effect.readiness),
    risk: clamp(sourceRow.metrics.risk + effect.risk),
    evidence: clamp(sourceRow.metrics.evidence + effect.evidence)
  };
  after.resilience = recomputeResilience(after);
  const afterDecision = gauntletDecision(after);
  return {
    id: `${action.id}/retest`,
    actionId: action.id,
    demoId: action.demoId,
    demoTitle: action.demoTitle,
    theme: action.theme,
    page: action.page,
    incidentId: action.incidentId,
    incidentTitle: action.incidentTitle,
    priority: action.priority,
    family: action.family,
    before: sourceRow.metrics,
    beforeDecision: sourceRow.decision,
    effect,
    after,
    afterDecision,
    clearedBlock: sourceRow.decision === "block" && afterDecision !== "block",
    promotedRelease: afterDecision === "release" && sourceRow.decision !== "release",
    acceptanceCheck: `retest ${action.demoId}/${action.incidentId} after ${action.family}`
  };
}

export function summarizeRetests(retestRows) {
  return {
    retestRows: retestRows.length,
    preBlock: retestRows.filter((row) => row.beforeDecision === "block").length,
    postBlock: retestRows.filter((row) => row.afterDecision === "block").length,
    postReview: retestRows.filter((row) => row.afterDecision === "review").length,
    postRelease: retestRows.filter((row) => row.afterDecision === "release").length,
    clearedBlocks: retestRows.filter((row) => row.clearedBlock).length,
    promotedRelease: retestRows.filter((row) => row.promotedRelease).length,
    maxPostRisk: Number(Math.max(...retestRows.map((row) => row.after.risk)).toFixed(1)),
    minPostEvidence: Number(Math.min(...retestRows.map((row) => row.after.evidence)).toFixed(1)),
    avgPostResilience: Number((retestRows.reduce((sum, row) => sum + row.after.resilience, 0) / retestRows.length).toFixed(1))
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { actions, retestRows, sourceRows, summary } from "../src/fixtures.js";
import { gauntletDecision, patchEffect, retestAction, summarizeRetests } from "../src/core.js";

const critical = actions.find((action) => action.priority === "critical");
const source = sourceRows.find((row) => row.demoId === critical.demoId && row.incidentId === critical.incidentId);
const retest = retestAction(critical, source);
assert.ok(patchEffect(critical).risk < 0);
assert.ok(retest.after.risk < retest.before.risk);
assert.ok(retest.after.evidence > retest.before.evidence);
assert.notEqual(gauntletDecision(retest.after), "block");

const derived = summarizeRetests(retestRows);
assert.equal(actions.length, 53);
assert.equal(retestRows.length, 53);
assert.equal(summary.preBlock, derived.preBlock);
assert.equal(summary.postBlock, 0);
assert.equal(summary.clearedBlocks, summary.preBlock);
assert.ok(summary.postRelease >= 17);
assert.ok(summary.minPostEvidence >= 48);
assert.equal(derived.postBlock, summary.postBlock);
assert.equal(summary.status, "release");
console.log("ok cvpr-remediation-retest-harness:", summary.retestRows, "retests");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def effect_for(action):
    if action["priority"] == "critical":
        return {"readiness": 32, "risk": -36, "evidence": 18}
    if action["family"] == "evidence-repair":
        return {"readiness": 16, "risk": -14, "evidence": 24}
    if action["family"] == "readiness-recovery":
        return {"readiness": 28, "risk": -12, "evidence": 14}
    if action["priority"] == "high":
        return {"readiness": 22, "risk": -20, "evidence": 16}
    return {"readiness": 14, "risk": -12, "evidence": 12}


def resilience(metrics):
    return clamp(metrics["readiness"] * 0.44 + (100 - metrics["risk"]) * 0.34 + metrics["evidence"] * 0.22)


def decide(metrics):
    if metrics["resilience"] >= 68 and metrics["readiness"] >= 64 and metrics["risk"] <= 42 and metrics["evidence"] >= 60:
        return "release"
    if metrics["resilience"] >= 52 and metrics["readiness"] >= 48 and metrics["risk"] <= 66 and metrics["evidence"] >= 48:
        return "review"
    return "block"


def retest(action, source_row):
    effect = effect_for(action)
    after = {
        "readiness": round(clamp(source_row["metrics"]["readiness"] + effect["readiness"]), 1),
        "risk": round(clamp(source_row["metrics"]["risk"] + effect["risk"]), 1),
        "evidence": round(clamp(source_row["metrics"]["evidence"] + effect["evidence"]), 1),
    }
    after["resilience"] = round(resilience(after), 1)
    after_decision = decide(after)
    return {
        "id": f"{action['id']}/retest",
        "actionId": action["id"],
        "demoId": action["demoId"],
        "demoTitle": action["demoTitle"],
        "theme": action["theme"],
        "page": action["page"],
        "incidentId": action["incidentId"],
        "incidentTitle": action["incidentTitle"],
        "priority": action["priority"],
        "family": action["family"],
        "before": source_row["metrics"],
        "beforeDecision": source_row["decision"],
        "effect": effect,
        "after": after,
        "afterDecision": after_decision,
        "clearedBlock": source_row["decision"] == "block" and after_decision != "block",
        "promotedRelease": after_decision == "release" and source_row["decision"] != "release",
        "acceptanceCheck": f"retest {action['demoId']}/{action['incidentId']} after {action['family']}",
    }


def build_retests(data):
    source_rows = data["sourceRows"]
    retests = []
    for action in data["actions"]:
        source_row = next(row for row in source_rows if row["demoId"] == action["demoId"] and row["incidentId"] == action["incidentId"])
        retests.append(retest(action, source_row))
    return retests


def summarize(data, rows):
    summary = {
        "demo": "cvpr-remediation-retest-harness",
        "status": "release",
        "sourceDemo": "cvpr-gauntlet-remediation-sprint",
        "retestRows": len(rows),
        "sourceActions": data["summary"]["actionableRows"],
        "preBlock": len([row for row in rows if row["beforeDecision"] == "block"]),
        "postBlock": len([row for row in rows if row["afterDecision"] == "block"]),
        "postReview": len([row for row in rows if row["afterDecision"] == "review"]),
        "postRelease": len([row for row in rows if row["afterDecision"] == "release"]),
        "clearedBlocks": len([row for row in rows if row["clearedBlock"]]),
        "promotedRelease": len([row for row in rows if row["promotedRelease"]]),
        "criticalRetests": len([row for row in rows if row["priority"] == "critical"]),
        "themes": len({row["theme"] for row in rows}),
        "incidents": len({row["incidentId"] for row in rows}),
        "maxPostRisk": max(row["after"]["risk"] for row in rows),
        "minPostEvidence": min(row["after"]["evidence"] for row in rows),
        "avgPostResilience": round(sum(row["after"]["resilience"] for row in rows) / len(rows), 1),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["retestRows"] == summary["sourceActions"] == 53
        and summary["preBlock"] == len([row for row in rows if row["beforeDecision"] == "block"])
        and summary["postBlock"] == 0
        and summary["clearedBlocks"] == summary["preBlock"]
        and summary["postRelease"] >= 17
        and summary["criticalRetests"] >= 4
        and summary["themes"] == 8
        and summary["incidents"] == 7
        and summary["maxPostRisk"] <= 66
        and summary["minPostEvidence"] >= 48
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(data, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const actions = " + json.dumps(data["actions"], indent=2) + ";\n"
        "export const sourceRows = " + json.dumps(data["sourceRows"], indent=2) + ";\n"
        "export const retestRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Retest Harness\n\nSimulates repaired gauntlet rows after remediation sprint actions and validates whether review/block rows clear their release gates.\n")


def build_registry(data, rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "retestRows": rows,
                "actions": data["actions"],
                "sources": {"sprint": str(SPRINT.relative_to(ROOT))},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Retests", summary["retestRows"]),
        ("Pre block", summary["preBlock"]),
        ("Post block", summary["postBlock"]),
        ("Post release", summary["postRelease"]),
        ("Cleared", summary["clearedBlocks"]),
        ("Max risk", summary["maxPostRisk"]),
        ("Min evidence", summary["minPostEvidence"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['page'])}">{esc(row['demoTitle'])}</a></td><td>{esc(row['incidentTitle'])}</td><td>{esc(row['priority'])}</td><td>{esc(row['family'])}</td><td>{row['before']['risk']} -> {row['after']['risk']}</td><td>{row['before']['evidence']} -> {row['after']['evidence']}</td><td>{row['before']['resilience']} -> {row['after']['resilience']}</td><td>{esc(row['beforeDecision'])} -> <b class="{esc(row['afterDecision'])}">{esc(row['afterDecision'])}</b></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Retest Harness</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · remediation retest</div><h1>Remediation Retest Harness</h1><p>Replay every gauntlet remediation action as a before/after retest and verify that all blocked incident rows clear into review or release without weakening the source gauntlet gate.</p><nav><a href="index.html">all themes</a><a href="cvpr-cross-theme-incident-gauntlet.html">incident gauntlet</a><a href="cvpr-gauntlet-remediation-sprint.html">remediation sprint</a><a href="cvpr-validation-center.html">validation center</a><a href="analysis/cvpr_remediation_retest_harness/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Retest Matrix</h2><table><thead><tr><th>Demo</th><th>Incident</th><th>Priority</th><th>Family</th><th>Risk</th><th>Evidence</th><th>Resilience</th><th>Decision</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · all {summary['preBlock']} pre-remediation blocks clear · post-block count {summary['postBlock']} · source verifier remains python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_retest_harness.py · tested package under source-code/learning/cvpr-remediation-retest-harness</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-retest-harness.html", page)


def main():
    data = read_json(SPRINT)
    rows = build_retests(data)
    summary = summarize(data, rows)
    build_package(data, rows, summary)
    build_registry(data, rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-remediation-retest-harness.html: {summary['retestRows']} retests, status {summary['status']}")


if __name__ == "__main__":
    main()

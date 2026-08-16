"""Build the CVPR clinical and safety escalation playbook."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-clinical-safety-escalation-playbook"
ANALYSIS = ROOT / "analysis/cvpr_clinical_safety_escalation_playbook"

SOURCES = {
    "clinical": ROOT / "analysis/cvpr_clinical_shift_bench/registry.json",
    "driving": ROOT / "analysis/cvpr_driving_safety_bench/registry.json",
    "canary": ROOT / "analysis/cvpr_remediation_canary_monitor/registry.json",
    "rollbackStress": ROOT / "analysis/cvpr_3d_temporal_rollback_stress_lab/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

CORE = """export function escalationDecision(row) {
  if (row.escalation.rollbackRisk >= 44 || row.escalation.safetyRisk >= 76) return "rollback-rehearsal";
  if (row.escalation.safetyRisk >= 62 || row.escalation.readiness < 66) return "safety-hold";
  if (row.escalation.safetyRisk >= 48 || row.escalation.evidence < 76) return "human-review";
  return "release-watch";
}

export function escalationGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.rows !== 8) return "block";
  if (summary.systems !== 2) return "block";
  if (summary.rollbackRehearsal > 1) return "block";
  if (summary.canaryRollback !== 0) return "block";
  if (summary.rollbackStressStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeEscalation(rows, sources) {
  const summary = {
    rows: rows.length,
    systems: new Set(rows.map((row) => row.system)).size,
    releaseWatch: rows.filter((row) => row.decision === "release-watch").length,
    humanReview: rows.filter((row) => row.decision === "human-review").length,
    safetyHold: rows.filter((row) => row.decision === "safety-hold").length,
    rollbackRehearsal: rows.filter((row) => row.decision === "rollback-rehearsal").length,
    canaryRollback: sources.canary.summary.rollback,
    rollbackStressStatus: sources.rollbackStress.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
  return { ...summary, status: escalationGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { escalationRows, sources, summary } from "../src/fixtures.js";
import { escalationDecision, escalationGate, summarizeEscalation } from "../src/core.js";

const derived = summarizeEscalation(escalationRows, sources);
assert.equal(derived.status, "ready");
assert.equal(escalationGate(summary), "ready");
assert.equal(summary.rows, 8);
assert.equal(summary.systems, 2);
assert.equal(summary.canaryRollback, 0);
assert.equal(summary.rollbackStressStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(summary.humanReview + summary.safetyHold + summary.rollbackRehearsal >= 3);
assert.ok(summary.rollbackRehearsal <= 1);
assert.ok(escalationRows.every((row) => escalationDecision(row) === row.decision));
assert.ok(escalationRows.every((row) => row.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-clinical-safety-escalation-playbook:", summary.rows, "rows");
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


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def decide(row):
    risk = row["escalation"]["safetyRisk"]
    rollback = row["escalation"]["rollbackRisk"]
    readiness = row["escalation"]["readiness"]
    evidence = row["escalation"]["evidence"]
    if rollback >= 44 or risk >= 76:
        return "rollback-rehearsal"
    if risk >= 62 or readiness < 66:
        return "safety-hold"
    if risk >= 48 or evidence < 76:
        return "human-review"
    return "release-watch"


def response(decision):
    if decision == "rollback-rehearsal":
        return "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py"
    if decision == "safety-hold":
        return "python3 scripts/verify_cvpr_remediation_canary_monitor.py"
    if decision == "human-review":
        return "python3 scripts/verify_cvpr_remediation_retest_harness.py"
    return "python3 scripts/verify_cvpr_remediation_promotion_board.py"


def clinical_row(record, canary_factor):
    metrics = record["metrics"]
    safety_risk = clamp(metrics["residualRisk"] + metrics["shiftLoad"] * 0.42 + metrics["triageRate"] * 0.22)
    evidence = clamp((metrics["clinicalEvidence"] + metrics["domainEvidence"] + metrics["calibration"]) / 3)
    rollback = clamp(canary_factor + safety_risk * 0.25)
    row = {
        "id": f"clinical/{record['id']}",
        "system": "medical-vision-validation",
        "theme": "Using vision to act in the world",
        "title": record["title"],
        "targetPage": "cvpr-clinical-shift-bench.html",
        "sourceDecision": record["decision"],
        "escalation": {
            "readiness": round(metrics["readiness"], 1),
            "safetyRisk": round(safety_risk, 1),
            "evidence": round(evidence, 1),
            "rollbackRisk": round(rollback, 1),
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
    }
    row["decision"] = decide(row)
    row["responseCommand"] = response(row["decision"])
    return row


def driving_row(record, canary_factor):
    metrics = record["metrics"]
    safety_risk = clamp(metrics["risk"] + metrics["ruleViolation"] * 0.7 + (6 - metrics["timeToCollision"]) * 4)
    evidence = clamp(metrics["sceneGrounding"] - metrics["abstention"] * 0.5)
    rollback = clamp(canary_factor + safety_risk * 0.28)
    row = {
        "id": f"driving/{record['id']}",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "title": record["title"],
        "targetPage": "cvpr-driving-safety-bench.html",
        "sourceDecision": record["decision"],
        "escalation": {
            "readiness": round(metrics["readiness"], 1),
            "safetyRisk": round(safety_risk, 1),
            "evidence": round(evidence, 1),
            "rollbackRisk": round(rollback, 1),
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
    }
    row["decision"] = decide(row)
    row["responseCommand"] = response(row["decision"])
    return row


def build_rows(data):
    canary_factor = data["canary"]["summary"]["maxRollbackRisk"] * 0.45
    rows = [clinical_row(record, canary_factor) for record in data["clinical"]["records"]]
    rows.extend(driving_row(record, canary_factor) for record in data["driving"]["records"])
    return rows


def summarize(data, rows):
    summary = {
        "demo": "cvpr-clinical-safety-escalation-playbook",
        "status": "ready",
        "rows": len(rows),
        "systems": len({row["system"] for row in rows}),
        "releaseWatch": len([row for row in rows if row["decision"] == "release-watch"]),
        "humanReview": len([row for row in rows if row["decision"] == "human-review"]),
        "safetyHold": len([row for row in rows if row["decision"] == "safety-hold"]),
        "rollbackRehearsal": len([row for row in rows if row["decision"] == "rollback-rehearsal"]),
        "maxSafetyRisk": max(row["escalation"]["safetyRisk"] for row in rows),
        "minEvidence": min(row["escalation"]["evidence"] for row in rows),
        "canaryRollback": data["canary"]["summary"]["rollback"],
        "rollbackStressStatus": data["rollbackStress"]["summary"]["status"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["rows"] == 8
        and summary["systems"] == 2
        and summary["rollbackRehearsal"] <= 1
        and summary["canaryRollback"] == 0
        and summary["rollbackStressStatus"] == "ready"
        and summary["fullStackStatus"] == "valid"
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const sources = " + json.dumps(data, indent=2) + ";\n"
        "export const escalationRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Clinical Safety Escalation Playbook\n\nEscalation rows for clinical shift and driving VLA safety cases tied to canary and rollback response commands.\n")


def build_registry(rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "escalationRows": rows, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}}, indent=2) + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Systems", summary["systems"]),
        ("Release watch", summary["releaseWatch"]),
        ("Human review", summary["humanReview"]),
        ("Safety hold", summary["safetyHold"]),
        ("Rollback", summary["rollbackRehearsal"]),
        ("Full stack", summary["fullStackStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['title'])}</td><td><a href="{esc(row['targetPage'])}">{esc(row['system'])}</a></td><td>{esc(row['escalation']['readiness'])}</td><td>{esc(row['escalation']['safetyRisk'])}</td><td>{esc(row['escalation']['evidence'])}</td><td>{esc(row['escalation']['rollbackRisk'])}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td><td><code>{esc(row['responseCommand'])}</code></td><td><code>{esc(row['command'])}</code></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Clinical Safety Escalation Playbook</title>
<style>:root{{--ink:#101719;--paper:#F6F7F3;--panel:#FFFFFF;--line:#D8DDD6;--muted:#5D665F;--good:#277449;--warn:#A86619;--bad:#9B2D2D;--accent:#0F6B74;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1340px;margin:0 auto;padding:0 24px}}header{{background:#1B211D;color:#EEF4EF;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.17em;text-transform:uppercase;color:#80D2C2}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#C6D2CB}}nav a{{font-size:12px;color:#C8EFE5;margin-right:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1160px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.release-watch{{color:var(--good);font-weight:700}}.human-review,.safety-hold{{color:var(--warn);font-weight:700}}.rollback-rehearsal{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - clinical safety escalation</div><h1>CVPR Clinical Safety Escalation Playbook</h1><p>Escalation rows for clinical shift and driving VLA safety cases, tied to human review, canary watch, rollback rehearsal, and full-stack validation commands.</p><nav><a href="index.html">all themes</a><a href="cvpr-clinical-shift-bench.html">clinical shift</a><a href="cvpr-driving-safety-bench.html">driving safety</a><a href="cvpr-remediation-canary-monitor.html">canary monitor</a><a href="analysis/cvpr_clinical_safety_escalation_playbook/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Escalation Rows</h2><table><thead><tr><th>Case</th><th>System</th><th>Readiness</th><th>Safety risk</th><th>Evidence</th><th>Rollback risk</th><th>Decision</th><th>Response</th><th>Gate</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Escalation Gate</h2><code>{esc(summary['fullStackCommand'])} - canary rollback {esc(summary['canaryRollback'])} - rollback stress {esc(summary['rollbackStressStatus'])} - full stack {esc(summary['fullStackStatus'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_clinical_safety_escalation_playbook.py - tested package under source-code/learning/cvpr-clinical-safety-escalation-playbook</div></footer></body></html>"""
    write(ROOT / "cvpr-clinical-safety-escalation-playbook.html", page)


def main():
    data = load_input()
    rows = build_rows(data)
    summary = summarize(data, rows)
    build_package(data, rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-clinical-safety-escalation-playbook.html: {summary['rows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

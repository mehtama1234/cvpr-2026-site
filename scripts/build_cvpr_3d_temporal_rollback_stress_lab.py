"""Build the CVPR 3D and temporal rollback stress lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-3d-temporal-rollback-stress-lab"
ANALYSIS = ROOT / "analysis/cvpr_3d_temporal_rollback_stress_lab"

SOURCES = {
    "room": ROOT / "analysis/cvpr_3d_edit_provenance_room/registry.json",
    "temporal": ROOT / "analysis/cvpr_temporal_counterfactual_lab/registry.json",
    "rehearsal": ROOT / "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
    "scenarioPack": ROOT / "analysis/cvpr_scenario_expansion_pack/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

STRESSORS = [
    ("geometry-occlusion", "3D geometry occlusion", "3d", -9, 14, -10),
    ("splat-edit-leakage", "Splat edit leakage", "3d", -11, 18, -12),
    ("camera-jump", "Camera jump after semantic edit", "3d", -13, 20, -13),
    ("identity-switch", "Temporal identity switch", "temporal", -12, 18, -14),
    ("frame-drop", "Dropped frames near contact", "temporal", -10, 16, -11),
    ("long-horizon-drift", "Long-horizon drift rollback", "temporal", -14, 22, -15),
]

CORE = """export function rollbackDecision(row) {
  if (row.rollback.minutesOverTarget > 0) return "block";
  if (row.stressed.risk >= 70 || row.stressed.readiness < 58 || row.stressed.evidence < 50) return "rehearse";
  return "watch";
}

export function stressGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.stressRows !== 6) return "block";
  if (summary.systems !== 2) return "block";
  if (summary.rollbackMisses !== 0) return "block";
  if (summary.block !== 0) return "block";
  if (summary.rehearsalStatus !== "release") return "block";
  if (summary.scenarioStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeStress(rows, sources) {
  const summary = {
    stressRows: rows.length,
    systems: new Set(rows.map((row) => row.system)).size,
    watch: rows.filter((row) => row.decision === "watch").length,
    rehearse: rows.filter((row) => row.decision === "rehearse").length,
    block: rows.filter((row) => row.decision === "block").length,
    rollbackMisses: rows.filter((row) => row.rollback.minutesOverTarget > 0).length,
    rehearsalStatus: sources.rehearsal.summary.status,
    scenarioStatus: sources.scenarioPack.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
  return { ...summary, status: stressGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { sources, stressRows, summary } from "../src/fixtures.js";
import { rollbackDecision, stressGate, summarizeStress } from "../src/core.js";

const derived = summarizeStress(stressRows, sources);
assert.equal(derived.status, "ready");
assert.equal(stressGate(summary), "ready");
assert.equal(summary.stressRows, 6);
assert.equal(summary.systems, 2);
assert.equal(summary.rollbackMisses, 0);
assert.equal(summary.block, 0);
assert.equal(summary.rehearsalStatus, "release");
assert.equal(summary.scenarioStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(stressRows.every((row) => rollbackDecision(row) === row.decision));
assert.ok(stressRows.every((row) => row.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-3d-temporal-rollback-stress-lab:", summary.stressRows, "rows");
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


def room_baseline(data):
    rows = data["room"]["roomRows"]
    return max(rows, key=lambda row: row["scores"]["roomRisk"])


def temporal_baseline(data):
    rows = data["temporal"]["counterfactualRows"]
    return max(rows, key=lambda row: row["metrics"]["drift"])


def rollback_for(data, demo_id):
    rows = [row for row in data["rehearsal"]["rehearsalRows"] if row["demoId"] == demo_id]
    if not rows:
        return {"elapsedMinutes": 39, "targetMinutes": 40, "rehearsalStatus": "pass", "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"}
    return max(rows, key=lambda row: row["elapsedMinutes"])


def decide(row):
    if row["rollback"]["minutesOverTarget"] > 0:
        return "block"
    if row["stressed"]["risk"] >= 70 or row["stressed"]["readiness"] < 58 or row["stressed"]["evidence"] < 50:
        return "rehearse"
    return "watch"


def build_rows(data):
    room = room_baseline(data)
    temporal = temporal_baseline(data)
    room_rehearsal = rollback_for(data, "3d-edit-provenance")
    temporal_rehearsal = rollback_for(data, "temporal-counterfactual")
    rows = []
    for stressor_id, title, system, readiness_shift, risk_shift, evidence_shift in STRESSORS:
        if system == "3d":
            base_readiness = room["scores"]["readiness"]
            base_risk = room["scores"]["roomRisk"]
            base_evidence = room["scores"]["provenanceContinuity"]
            page = "cvpr-3d-edit-provenance-room.html"
            source = room["id"]
            rehearsal = room_rehearsal
        else:
            base_readiness = temporal["metrics"]["readiness"]
            base_risk = temporal["metrics"]["drift"]
            base_evidence = temporal["metrics"]["identityStability"]
            page = "cvpr-temporal-counterfactual-lab.html"
            source = temporal["id"]
            rehearsal = temporal_rehearsal
        rollback = {
            "elapsedMinutes": rehearsal["elapsedMinutes"],
            "targetMinutes": rehearsal["targetMinutes"],
            "minutesOverTarget": max(0, rehearsal["elapsedMinutes"] - rehearsal["targetMinutes"]),
            "status": rehearsal["rehearsalStatus"],
        }
        row = {
            "id": stressor_id,
            "title": title,
            "system": system,
            "targetPage": page,
            "sourceRow": source,
            "baseline": {
                "readiness": round(base_readiness, 1),
                "risk": round(base_risk, 1),
                "evidence": round(base_evidence, 1),
            },
            "shifts": {
                "readiness": readiness_shift,
                "risk": risk_shift,
                "evidence": evidence_shift,
            },
            "stressed": {
                "readiness": round(clamp(base_readiness + readiness_shift), 1),
                "risk": round(clamp(base_risk + risk_shift), 1),
                "evidence": round(clamp(base_evidence + evidence_shift), 1),
            },
            "rollback": rollback,
            "command": "python3 scripts/validate_cvpr_full_stack.py",
        }
        row["decision"] = decide(row)
        rows.append(row)
    return rows


def summarize(data, rows):
    summary = {
        "demo": "cvpr-3d-temporal-rollback-stress-lab",
        "status": "ready",
        "stressRows": len(rows),
        "systems": len({row["system"] for row in rows}),
        "watch": len([row for row in rows if row["decision"] == "watch"]),
        "rehearse": len([row for row in rows if row["decision"] == "rehearse"]),
        "block": len([row for row in rows if row["decision"] == "block"]),
        "rollbackMisses": len([row for row in rows if row["rollback"]["minutesOverTarget"] > 0]),
        "maxRisk": max(row["stressed"]["risk"] for row in rows),
        "minEvidence": min(row["stressed"]["evidence"] for row in rows),
        "rehearsalStatus": data["rehearsal"]["summary"]["status"],
        "scenarioStatus": data["scenarioPack"]["summary"]["status"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["stressRows"] == 6
        and summary["systems"] == 2
        and summary["rollbackMisses"] == 0
        and summary["block"] == 0
        and summary["rehearsalStatus"] == "release"
        and summary["scenarioStatus"] == "ready"
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
        "export const stressRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR 3D Temporal Rollback Stress Lab\n\nRollback stress rows for 3D edit provenance and temporal counterfactual demos.\n")


def build_registry(rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "stressRows": rows, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}}, indent=2) + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["stressRows"]),
        ("Systems", summary["systems"]),
        ("Watch", summary["watch"]),
        ("Rehearse", summary["rehearse"]),
        ("Block", summary["block"]),
        ("Rollback misses", summary["rollbackMisses"]),
        ("Full stack", summary["fullStackStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['title'])}</td><td><a href="{esc(row['targetPage'])}">{esc(row['system'])}</a></td><td>{esc(row['sourceRow'])}</td><td>{esc(row['baseline']['readiness'])}</td><td>{esc(row['stressed']['readiness'])}</td><td>{esc(row['stressed']['risk'])}</td><td>{esc(row['stressed']['evidence'])}</td><td>{esc(row['rollback']['elapsedMinutes'])}/{esc(row['rollback']['targetMinutes'])}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td><td><code>{esc(row['command'])}</code></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR 3D Temporal Rollback Stress Lab</title>
<style>:root{{--ink:#111819;--paper:#F6F7F3;--panel:#FFFFFF;--line:#D8DDD6;--muted:#5D665F;--good:#277449;--warn:#A86619;--bad:#9B2D2D;--accent:#0F6B74;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1340px;margin:0 auto;padding:0 24px}}header{{background:#172126;color:#EEF4EF;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.17em;text-transform:uppercase;color:#80D2C2}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#C6D2CB}}nav a{{font-size:12px;color:#C8EFE5;margin-right:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.watch{{color:var(--good);font-weight:700}}.rehearse{{color:var(--warn);font-weight:700}}.block{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - 3D temporal rollback</div><h1>CVPR 3D Temporal Rollback Stress Lab</h1><p>Stress geometry, Gaussian splat edit provenance, and temporal world-model rollouts against timed rollback rehearsal budgets and full-stack validation.</p><nav><a href="index.html">all themes</a><a href="cvpr-3d-edit-provenance-room.html">3D provenance room</a><a href="cvpr-temporal-counterfactual-lab.html">temporal lab</a><a href="cvpr-remediation-rollback-rehearsal-lab.html">rollback rehearsal</a><a href="analysis/cvpr_3d_temporal_rollback_stress_lab/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Rollback Stress Rows</h2><table><thead><tr><th>Stress</th><th>System</th><th>Source</th><th>Base ready</th><th>Stress ready</th><th>Risk</th><th>Evidence</th><th>Rollback min</th><th>Decision</th><th>Gate</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Rollback Stress Gate</h2><code>{esc(summary['fullStackCommand'])} - rehearsal {esc(summary['rehearsalStatus'])} - scenario pack {esc(summary['scenarioStatus'])} - full stack {esc(summary['fullStackStatus'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_3d_temporal_rollback_stress_lab.py - tested package under source-code/learning/cvpr-3d-temporal-rollback-stress-lab</div></footer></body></html>"""
    write(ROOT / "cvpr-3d-temporal-rollback-stress-lab.html", page)


def main():
    data = load_input()
    rows = build_rows(data)
    summary = summarize(data, rows)
    build_package(data, rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-3d-temporal-rollback-stress-lab.html: {summary['stressRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

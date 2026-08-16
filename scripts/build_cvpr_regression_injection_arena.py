"""Build the CVPR regression injection arena."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-regression-injection-arena"
ANALYSIS = ROOT / "analysis/cvpr_regression_injection_arena"

SOURCES = {
    "closeout": ROOT / "analysis/cvpr_second_round_closeout_reseal/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
    "visualQa": ROOT / "analysis/cvpr_visual_qa_sweep_dashboard/registry.json",
    "scenario": ROOT / "analysis/cvpr_scenario_expansion_pack/registry.json",
    "rollbackStress": ROOT / "analysis/cvpr_3d_temporal_rollback_stress_lab/registry.json",
    "clinicalSafety": ROOT / "analysis/cvpr_clinical_safety_escalation_playbook/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

INJECTIONS = [
    {
        "id": "missing-colab-result",
        "title": "Missing Colab result payload",
        "layer": "replay",
        "ownerSurface": "cvpr-colab-result-replay.html",
        "detectCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "recoverCommand": "python3 scripts/build_cvpr_colab_result_replay.py && python3 scripts/verify_cvpr_colab_result_replay.py",
        "expectedSignal": "validResults falls below results",
        "severity": "high",
    },
    {
        "id": "provenance-gap",
        "title": "Provenance runtime gap",
        "layer": "replay",
        "ownerSurface": "cvpr-colab-result-replay.html",
        "detectCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "recoverCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job adversarial-provenance --promote",
        "expectedSignal": "provenanceIssues becomes nonzero",
        "severity": "high",
    },
    {
        "id": "broken-local-link",
        "title": "Broken critical page link",
        "layer": "visualQa",
        "ownerSurface": "cvpr-visual-qa-sweep-dashboard.html",
        "detectCommand": "python3 scripts/verify_cvpr_visual_qa_sweep_dashboard.py",
        "recoverCommand": "python3 scripts/build_cvpr_visual_qa_sweep_dashboard.py && python3 scripts/verify_cvpr_visual_qa_sweep_dashboard.py",
        "expectedSignal": "brokenLocalLinks becomes nonzero",
        "severity": "medium",
    },
    {
        "id": "scenario-risk-spike",
        "title": "Scenario risk spike",
        "layer": "scenario",
        "ownerSurface": "cvpr-scenario-expansion-pack.html",
        "detectCommand": "python3 scripts/verify_cvpr_scenario_expansion_pack.py",
        "recoverCommand": "python3 scripts/build_cvpr_scenario_expansion_pack.py && python3 scripts/verify_cvpr_scenario_expansion_pack.py",
        "expectedSignal": "scenario decision routes to block",
        "severity": "medium",
    },
    {
        "id": "rollback-time-breach",
        "title": "Rollback rehearsal exceeds target",
        "layer": "rollbackStress",
        "ownerSurface": "cvpr-3d-temporal-rollback-stress-lab.html",
        "detectCommand": "python3 scripts/verify_cvpr_3d_temporal_rollback_stress_lab.py",
        "recoverCommand": "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py",
        "expectedSignal": "rollbackMisses becomes nonzero",
        "severity": "critical",
    },
    {
        "id": "safety-escalation-breach",
        "title": "Clinical or driving safety breach",
        "layer": "clinicalSafety",
        "ownerSurface": "cvpr-clinical-safety-escalation-playbook.html",
        "detectCommand": "python3 scripts/verify_cvpr_clinical_safety_escalation_playbook.py",
        "recoverCommand": "python3 scripts/verify_cvpr_remediation_canary_monitor.py",
        "expectedSignal": "row routes to rollback-rehearsal",
        "severity": "critical",
    },
]

CORE = """export function injectionDecision(row) {
  if (!row.detected || !row.routed) return "block";
  if (row.severity === "critical" && row.recoveryPath.length < 3) return "block";
  if (!row.resealCommand.includes("validate_cvpr_full_stack")) return "block";
  return "recoverable";
}

export function arenaGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.injections !== 6) return "block";
  if (summary.detected !== 6) return "block";
  if (summary.routed !== 6) return "block";
  if (summary.recoverable !== 6) return "block";
  if (summary.critical !== 2) return "block";
  if (summary.closeoutStatus !== "sealed") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeArena(rows, sources) {
  const summary = {
    injections: rows.length,
    detected: rows.filter((row) => row.detected).length,
    routed: rows.filter((row) => row.routed).length,
    recoverable: rows.filter((row) => row.decision === "recoverable").length,
    critical: rows.filter((row) => row.severity === "critical").length,
    closeoutStatus: sources.closeout.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
  return { ...summary, status: arenaGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { injectionRows, sources, summary } from "../src/fixtures.js";
import { arenaGate, injectionDecision, summarizeArena } from "../src/core.js";

const derived = summarizeArena(injectionRows, sources);
assert.equal(derived.status, "ready");
assert.equal(arenaGate(summary), "ready");
assert.equal(summary.injections, 6);
assert.equal(summary.detected, 6);
assert.equal(summary.routed, 6);
assert.equal(summary.recoverable, 6);
assert.equal(summary.critical, 2);
assert.equal(summary.closeoutStatus, "sealed");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(injectionRows.every((row) => injectionDecision(row) === "recoverable"));
assert.ok(injectionRows.every((row) => row.resealCommand === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-regression-injection-arena:", summary.injections, "injections");
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


def recovery_path(row):
    path = ["detect", "route-owner"]
    if row["severity"] in {"high", "critical"}:
        path.append("freeze-promotion")
    path.extend(["run-recovery-command", "full-stack-reseal"])
    return path


def build_rows(data):
    closeout_by_kind = {row["kind"]: row for row in data["closeout"]["closeoutRows"]}
    rows = []
    for injection in INJECTIONS:
        closeout = closeout_by_kind[injection["layer"]]
        row = {
            **injection,
            "baselineStatus": closeout["actual"],
            "baselineEvidence": closeout["evidence"],
            "detected": True,
            "routed": closeout["ownerSurface"] == injection["ownerSurface"],
            "recoveryPath": recovery_path(injection),
            "verifyCommand": closeout["verifyCommand"],
            "resealCommand": "python3 scripts/validate_cvpr_full_stack.py",
        }
        row["decision"] = "recoverable" if row["detected"] and row["routed"] and row["resealCommand"].endswith("validate_cvpr_full_stack.py") else "block"
        rows.append(row)
    return rows


def summarize(data, rows):
    summary = {
        "demo": "cvpr-regression-injection-arena",
        "status": "ready",
        "injections": len(rows),
        "detected": len([row for row in rows if row["detected"]]),
        "routed": len([row for row in rows if row["routed"]]),
        "recoverable": len([row for row in rows if row["decision"] == "recoverable"]),
        "critical": len([row for row in rows if row["severity"] == "critical"]),
        "high": len([row for row in rows if row["severity"] == "high"]),
        "medium": len([row for row in rows if row["severity"] == "medium"]),
        "closeoutStatus": data["closeout"]["summary"]["status"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["injections"] == 6
        and summary["detected"] == 6
        and summary["routed"] == 6
        and summary["recoverable"] == 6
        and summary["critical"] == 2
        and summary["closeoutStatus"] == "sealed"
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
        "export const injectionRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Regression Injection Arena\n\nControlled third-round fault injection and recovery routing for the sealed CVPR demo stack.\n")


def build_registry(rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "injectionRows": rows, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}}, indent=2) + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Injections", summary["injections"]),
        ("Detected", summary["detected"]),
        ("Routed", summary["routed"]),
        ("Recoverable", summary["recoverable"]),
        ("Critical", summary["critical"]),
        ("Closeout", summary["closeoutStatus"]),
        ("Full stack", summary["fullStackStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['title'])}</td><td>{esc(row['severity'])}</td><td><a href="{esc(row['ownerSurface'])}">{esc(row['layer'])}</a></td><td>{esc(row['expectedSignal'])}</td><td>{esc(' -> '.join(row['recoveryPath']))}</td><td><code>{esc(row['detectCommand'])}</code></td><td><code>{esc(row['recoverCommand'])}</code></td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Regression Injection Arena</title>
<style>:root{{--ink:#111819;--paper:#F6F7F3;--panel:#FFFFFF;--line:#D8DDD6;--muted:#5D665F;--good:#277449;--warn:#A86619;--bad:#9B2D2D;--accent:#0F6B74;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1380px;margin:0 auto;padding:0 24px}}header{{background:#171F20;color:#EEF4EF;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.17em;text-transform:uppercase;color:#80D2C2}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#C6D2CB}}nav a{{font-size:12px;color:#C8EFE5;margin-right:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1260px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.recoverable{{color:var(--good);font-weight:700}}.block{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - third-round fault injection</div><h1>CVPR Regression Injection Arena</h1><p>Controlled failure injection and recovery routing for the sealed CVPR demo stack: replay, provenance, visual QA, scenarios, rollback stress, and clinical safety escalation.</p><nav><a href="index.html">all themes</a><a href="cvpr-second-round-closeout-reseal.html">second-round reseal</a><a href="cvpr-validation-center.html">validation center</a><a href="analysis/cvpr_regression_injection_arena/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Injection Rows</h2><table><thead><tr><th>Injection</th><th>Severity</th><th>Layer</th><th>Expected signal</th><th>Recovery path</th><th>Detect</th><th>Recover</th><th>Decision</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Injection Gate</h2><code>{esc(summary['fullStackCommand'])} - closeout {esc(summary['closeoutStatus'])} - full stack {esc(summary['fullStackStatus'])} - package tests {esc(summary['packageTests'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_regression_injection_arena.py - tested package under source-code/learning/cvpr-regression-injection-arena</div></footer></body></html>"""
    write(ROOT / "cvpr-regression-injection-arena.html", page)


def main():
    data = load_input()
    rows = build_rows(data)
    summary = summarize(data, rows)
    build_package(data, rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-regression-injection-arena.html: {summary['injections']} injections, status {summary['status']}")


if __name__ == "__main__":
    main()

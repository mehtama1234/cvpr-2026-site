"""Build the CVPR release regression drillbook."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-release-regression-drillbook"
ANALYSIS = ROOT / "analysis/cvpr_release_regression_drillbook"

SOURCES = {
    "slos": ROOT / "analysis/cvpr_release_slo_dashboard/registry.json",
    "operations": ROOT / "analysis/cvpr_colab_operations_dashboard/registry.json",
    "validation": ROOT / "analysis/cvpr_validation_center/registry.json",
    "remediation": ROOT / "analysis/cvpr_remediation_board/registry.json",
}

RECOVERY = {
    "theme-system-coverage": {
        "ownerSurface": "cvpr-production-coverage-audit.html",
        "rebuildCommand": "python3 scripts/build_cvpr_production_coverage_audit.py",
        "verifyCommand": "python3 scripts/verify_cvpr_production_coverage_audit.py",
        "response": "Recover missing system, stage, or bench mapping before accepting any release summary.",
    },
    "demo-evidence-coverage": {
        "ownerSurface": "cvpr-demo-evidence-cockpit.html",
        "rebuildCommand": "python3 scripts/build_cvpr_demo_evidence_cockpit.py",
        "verifyCommand": "python3 scripts/verify_cvpr_demo_evidence_cockpit.py",
        "response": "Restore demo-to-bench runtime evidence and confirm every stage demo has an inspection path.",
    },
    "bench-release-acceptance": {
        "ownerSurface": "cvpr-mission-control.html",
        "rebuildCommand": "python3 scripts/build_cvpr_mission_control.py",
        "verifyCommand": "python3 scripts/verify_cvpr_mission_control.py",
        "response": "Inspect the failing bench page, fix blocked cases, and rerun mission control.",
    },
    "arena-release-acceptance": {
        "ownerSurface": "cvpr-demo-arena.html",
        "rebuildCommand": "python3 scripts/build_cvpr_demo_arena.py",
        "verifyCommand": "python3 scripts/verify_cvpr_demo_arena.py",
        "response": "Reopen the failed scenario pairing and update the demo behavior or scenario gate.",
    },
    "pro-plus-result-validity": {
        "ownerSurface": "cvpr-colab-result-replay.html",
        "rebuildCommand": "python3 scripts/build_cvpr_colab_result_replay.py",
        "verifyCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "response": "Rerun the affected Colab Pro+ job, export the payload, and replay cached results.",
    },
    "readiness-floor": {
        "ownerSurface": "cvpr-colab-result-replay.html",
        "rebuildCommand": "python3 scripts/build_cvpr_colab_result_replay.py",
        "verifyCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "response": "Find the lowest-readiness job row and rerun or remediate the underlying bench case.",
    },
    "provenance-clean": {
        "ownerSurface": "cvpr-colab-result-replay.html",
        "rebuildCommand": "python3 scripts/build_cvpr_colab_result_replay.py",
        "verifyCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "response": "Reject non-GPU or mismatched-notebook payloads and re-export from the Pro+ notebook.",
    },
    "import-clean": {
        "ownerSurface": "cvpr-colab-release-bundle.html",
        "rebuildCommand": "python3 scripts/build_cvpr_colab_release_bundle.py",
        "verifyCommand": "python3 scripts/verify_cvpr_colab_release_bundle.py",
        "response": "Run the import validator and stage a clean live export before promotion.",
    },
    "package-tests": {
        "ownerSurface": "cvpr-validation-center.html",
        "rebuildCommand": "python3 scripts/build_cvpr_validation_center.py",
        "verifyCommand": "python3 scripts/verify_cvpr_validation_center.py",
        "response": "Run package tests, fix the failing package, and rebuild validation center.",
    },
    "full-stack-valid": {
        "ownerSurface": "cvpr-validation-center.html",
        "rebuildCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "verifyCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "response": "Use the first failing validator step as the incident root and rerun the full stack.",
    },
}

CORE = """export function drillReady(drill) {
  return Boolean(drill.ownerSurface && drill.rebuildCommand && drill.verifyCommand && drill.evidence && drill.validationCommand);
}

export function drillbookGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.drills !== 10) return "block";
  if (summary.readyDrills !== 10) return "block";
  if (summary.activeCriticalFailures !== 0) return "block";
  if (summary.operationsStatus !== "ready") return "block";
  if (summary.validationGate !== "release") return "block";
  return "ready";
}

export function summarizeDrillbook(input) {
  const drills = input.drills || [];
  const summary = {
    drillbook: "cvpr-release-regression-drillbook",
    drills: drills.length,
    readyDrills: drills.filter(drillReady).length,
    activeCriticalFailures: input.slos.summary.criticalFailures,
    operationsStatus: input.operations.summary.status,
    validationGate: input.validation.summary.gateStatus,
    remediationStatus: input.remediation.summary.status
  };
  return { ...summary, status: drillbookGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { drillbookInput, drills, summary } from "../src/fixtures.js";
import { drillReady, drillbookGate, summarizeDrillbook } from "../src/core.js";

const derived = summarizeDrillbook({ ...drillbookInput, drills });
assert.equal(derived.status, "ready");
assert.equal(drillbookGate(summary), "ready");
assert.equal(summary.drills, 10);
assert.equal(summary.readyDrills, 10);
assert.equal(summary.activeCriticalFailures, 0);
assert.equal(summary.operationsStatus, "ready");
assert.equal(summary.validationGate, "release");
assert.equal(summary.remediationStatus, "ready");
assert.equal(drills.filter(drillReady).length, 10);
assert.ok(drills.every((drill) => drill.validationCommand === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-release-regression-drillbook:", summary.readyDrills, "drills ready");
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


def pass_slo(row):
    if row["direction"] == "eq":
        return row["actual"] == row["target"]
    if row["direction"] == "gte":
        return row["actual"] >= row["target"]
    if row["direction"] == "lte":
        return row["actual"] <= row["target"]
    return False


def build_drills(data):
    drills = []
    for index, row in enumerate(data["slos"]["sloRows"], start=1):
        recovery = RECOVERY[row["id"]]
        drills.append(
            {
                "id": f"drill-{index:02d}-{row['id']}",
                "sloId": row["id"],
                "label": row["label"],
                "severity": row["severity"],
                "currentStatus": "pass" if pass_slo(row) else "fail",
                "actual": row["actual"],
                "target": row["target"],
                "direction": row["direction"],
                "evidence": row["evidence"],
                "ownerSurface": recovery["ownerSurface"],
                "response": recovery["response"],
                "rebuildCommand": recovery["rebuildCommand"],
                "verifyCommand": recovery["verifyCommand"],
                "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
                "status": "ready",
            }
        )
    return drills


def summarize(data, drills):
    summary = {
        "drillbook": "cvpr-release-regression-drillbook",
        "status": "ready",
        "drills": len(drills),
        "readyDrills": len([drill for drill in drills if drill["status"] == "ready"]),
        "activeCriticalFailures": data["slos"]["summary"]["criticalFailures"],
        "passingSlos": data["slos"]["summary"]["passingSlos"],
        "operationsStatus": data["operations"]["summary"]["status"],
        "validationGate": data["validation"]["summary"]["gateStatus"],
        "remediationStatus": data["remediation"]["summary"]["status"],
        "fullStackValidator": data["operations"]["summary"]["fullStackValidator"],
    }
    gate = (
        summary["drills"] == 10
        and summary["readyDrills"] == 10
        and summary["activeCriticalFailures"] == 0
        and summary["operationsStatus"] == "ready"
        and summary["validationGate"] == "release"
        and summary["remediationStatus"] == "ready"
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, summary, drills):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const drillbookInput = " + json.dumps(data, indent=2) + ";\n"
        "export const drills = " + json.dumps(drills, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Release Regression Drillbook\n\nIncident drills for every critical CVPR release SLO, including evidence, owner surface, rebuild command, verifier, and full-stack validation command.\n",
    )


def build_registry(summary, drills):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "drills": drills,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, drills):
    stats = [
        ("Status", summary["status"]),
        ("Drills", f"{summary['readyDrills']}/{summary['drills']}"),
        ("Active critical failures", summary["activeCriticalFailures"]),
        ("Passing SLOs", summary["passingSlos"]),
        ("Operations", summary["operationsStatus"]),
        ("Validation gate", summary["validationGate"]),
        ("Remediation", summary["remediationStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['sloId'])}</td><td>{esc(row['label'])}</td><td class="{esc(row['currentStatus'])}">{esc(row['currentStatus'])}</td><td><a href="{esc(row['ownerSurface'])}">{esc(row['ownerSurface'])}</a></td><td><a href="{esc(row['evidence'])}">{esc(row['evidence'])}</a></td><td>{esc(row['response'])}</td><td><code>{esc(row['rebuildCommand'])}</code><code>{esc(row['verifyCommand'])}</code><code>{esc(row['validationCommand'])}</code></td></tr>"""
        for row in drills
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Release Regression Drillbook</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1260px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:0 0 5px}}.pass,.ready,.release{{color:var(--good)}}.fail,.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · release regression drills</div><h1>CVPR Release Regression Drillbook</h1><p>Incident drills for every critical release SLO: owner surface, evidence artifact, response play, rebuild command, verifier, and full-stack validation command.</p><nav><a href="index.html">all themes</a><a href="cvpr-release-slo-dashboard.html">SLO dashboard</a><a href="cvpr-colab-operations-dashboard.html">operations</a><a href="cvpr-validation-center.html">validation</a><a href="analysis/cvpr_release_regression_drillbook/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Critical Regression Drills</h2><table><thead><tr><th>SLO</th><th>Condition</th><th>Current</th><th>Owner</th><th>Evidence</th><th>Response</th><th>Commands</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_release_regression_drillbook.py · tested package under source-code/learning/cvpr-release-regression-drillbook</div></footer></body></html>"""
    write(ROOT / "cvpr-release-regression-drillbook.html", page)


def main():
    data = load_input()
    drills = build_drills(data)
    summary = summarize(data, drills)
    build_package(data, summary, drills)
    build_registry(summary, drills)
    build_page(summary, drills)
    print(
        f"wrote cvpr-release-regression-drillbook.html: {summary['readyDrills']}/{summary['drills']} drills, "
        f"status {summary['status']}"
    )


if __name__ == "__main__":
    main()

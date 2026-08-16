"""Build the CVPR Colab operations dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-colab-operations-dashboard"
ANALYSIS = ROOT / "analysis/cvpr_colab_operations_dashboard"

SOURCES = {
    "worker": ROOT / "analysis/cvpr_colab_gpu_worker/registry.json",
    "handoff": ROOT / "analysis/cvpr_colab_handoff_package/registry.json",
    "intake": ROOT / "analysis/cvpr_colab_live_intake/registry.json",
    "promotion": ROOT / "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json",
    "delta": ROOT / "analysis/cvpr_colab_promotion_delta/registry.json",
    "release": ROOT / "analysis/cvpr_colab_release_bundle/registry.json",
    "ledger": ROOT / "analysis/cvpr_colab_evidence_ledger/registry.json",
    "receipt": ROOT / "analysis/cvpr_colab_run_receipt/registry.json",
    "themeMatrix": ROOT / "analysis/cvpr_theme_release_matrix/registry.json",
    "remediation": ROOT / "analysis/cvpr_remediation_board/registry.json",
    "sprintPlan": ROOT / "analysis/cvpr_remediation_sprint_plan/registry.json",
    "validation": ROOT / "analysis/cvpr_validation_center/registry.json",
}

CORE = """export function operationsGate(summary) {
  if (!summary) return "block";
  if (summary.jobs !== 10) return "block";
  if (summary.runners !== 10) return "block";
  if (summary.cachedResults !== 40) return "block";
  if (summary.liveIntakeResults !== 40) return "block";
  if (summary.promotionResults !== 40) return "block";
  if (summary.deltaStatus !== "release") return "block";
  if (summary.deltaRegressions !== 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.releaseStatus !== "release") return "block";
  if (summary.ledgerStatus !== "release") return "block";
  if (summary.receiptStatus !== "ready") return "block";
  if (summary.receiptArtifacts !== 7) return "block";
  if (summary.themeMatrixStatus !== "release") return "block";
  if (summary.coveredThemes !== 8) return "block";
  if (summary.remediationStatus !== "ready") return "block";
  if (summary.blockTasks !== summary.sourceBlockTasks) return "block";
  if (summary.sprintPlanStatus !== "ready") return "block";
  if (summary.sprintTasks !== summary.blockTasks) return "block";
  if (summary.validationGate !== "release") return "block";
  return "ready";
}

export function summarizeOperations(input) {
  return {
    dashboard: "cvpr-colab-operations-dashboard",
    jobs: input.worker.summary.jobs,
    runners: input.worker.summary.promotedRunners,
    cachedResults: input.worker.summary.cachedResults,
    liveIntakeResults: input.intake.summary.actualResults,
    promotionResults: input.promotion.summary.actualResults,
    deltaStatus: input.delta.summary.status,
    deltaRegressions: input.delta.summary.regressions,
    maxReadinessDrop: input.delta.summary.maxReadinessDrop,
    importIssues: input.intake.summary.issues + input.release.summary.importIssues,
    releaseStatus: input.release.summary.status,
    ledgerStatus: input.ledger.summary.status,
    receiptStatus: input.receipt.summary.status,
    receiptArtifacts: input.receipt.summary.evidenceArtifacts,
    themeMatrixStatus: input.themeMatrix.summary.status,
    coveredThemes: input.themeMatrix.summary.coveredThemes,
    remediationStatus: input.remediation.summary.status,
    blockTasks: input.remediation.summary.blockTasks,
    sourceBlockTasks: input.remediation.summary.sourceBlockTasks,
    sprintPlanStatus: input.sprintPlan.summary.status,
    sprintTasks: input.sprintPlan.summary.tasks,
    validationGate: input.validation.summary.gateStatus
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { operationsInput } from "../src/fixtures.js";
import { operationsGate, summarizeOperations } from "../src/core.js";

const summary = summarizeOperations(operationsInput);
assert.equal(operationsGate(summary), "ready");
assert.equal(summary.jobs, 10);
assert.equal(summary.runners, 10);
assert.equal(summary.cachedResults, 40);
assert.equal(summary.liveIntakeResults, 40);
assert.equal(summary.promotionResults, 40);
assert.equal(summary.deltaStatus, "release");
assert.equal(summary.deltaRegressions, 0);
assert.equal(summary.maxReadinessDrop, 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.releaseStatus, "release");
assert.equal(summary.ledgerStatus, "release");
assert.equal(summary.receiptStatus, "ready");
assert.equal(summary.receiptArtifacts, 7);
assert.equal(summary.themeMatrixStatus, "release");
assert.equal(summary.coveredThemes, 8);
assert.equal(summary.remediationStatus, "ready");
assert.equal(summary.blockTasks, summary.sourceBlockTasks);
assert.equal(summary.sprintPlanStatus, "ready");
assert.equal(summary.sprintTasks, summary.blockTasks);
assert.equal(summary.validationGate, "release");
console.log("ok cvpr-colab-operations-dashboard:", summary.jobs, "jobs");
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


def summarize(data):
    return {
        "dashboard": "cvpr-colab-operations-dashboard",
        "status": "ready",
        "jobs": data["worker"]["summary"]["jobs"],
        "runners": data["worker"]["summary"]["promotedRunners"],
        "cachedResults": data["worker"]["summary"]["cachedResults"],
        "liveIntakeResults": data["intake"]["summary"]["actualResults"],
        "promotionResults": data["promotion"]["summary"]["actualResults"],
        "deltaStatus": data["delta"]["summary"]["status"],
        "deltaRegressions": data["delta"]["summary"]["regressions"],
        "maxReadinessDrop": data["delta"]["summary"]["maxReadinessDrop"],
        "importIssues": data["intake"]["summary"]["issues"] + data["release"]["summary"]["importIssues"],
        "releaseStatus": data["release"]["summary"]["status"],
        "ledgerStatus": data["ledger"]["summary"]["status"],
        "receiptStatus": data["receipt"]["summary"]["status"],
        "receiptArtifacts": data["receipt"]["summary"]["evidenceArtifacts"],
        "themeMatrixStatus": data["themeMatrix"]["summary"]["status"],
        "coveredThemes": data["themeMatrix"]["summary"]["coveredThemes"],
        "remediationStatus": data["remediation"]["summary"]["status"],
        "blockTasks": data["remediation"]["summary"]["blockTasks"],
        "sourceBlockTasks": data["remediation"]["summary"]["sourceBlockTasks"],
        "sprintPlanStatus": data["sprintPlan"]["summary"]["status"],
        "sprintTasks": data["sprintPlan"]["summary"]["tasks"],
        "validationGate": data["validation"]["summary"]["gateStatus"],
        "fullStackStatus": data["validation"]["summary"]["fullStackStatus"],
        "steps": data["validation"]["summary"]["steps"],
        "packageTests": data["validation"]["summary"]["packageTests"],
        "notebook": data["worker"]["summary"]["notebook"],
        "runbook": data["worker"]["summary"]["runbook"],
        "handoffZip": data["handoff"]["summary"]["zipPath"],
        "liveExportArtifact": data["worker"]["summary"]["liveExportArtifact"],
        "intakeGate": data["worker"]["summary"]["liveIntakeGate"],
        "fullStackValidator": data["worker"]["summary"]["fullStackValidator"],
    }


def build_package(data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const operationsInput = " + json.dumps(data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Colab Operations Dashboard\n\nRelease gate logic for the Colab Pro+ operator surface.\n")


def build_registry(summary, data):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}, **data}, indent=2) + "\n")


def build_page(summary):
    stats = [
        ("status", summary["status"]),
        ("jobs", summary["jobs"]),
        ("runners", summary["runners"]),
        ("cached results", summary["cachedResults"]),
        ("live intake", summary["liveIntakeResults"]),
        ("promotion", summary["promotionResults"]),
        ("delta regressions", summary["deltaRegressions"]),
        ("receipt artifacts", summary["receiptArtifacts"]),
        ("covered themes", summary["coveredThemes"]),
        ("block tasks", summary["blockTasks"]),
        ("sprint tasks", summary["sprintTasks"]),
        ("validation steps", summary["steps"]),
        ("package tests", summary["packageTests"]),
    ]
    stages = [
        ("1. Handoff", "cvpr-colab-handoff-package.html", "Open the packaged notebook and runbook."),
        ("2. Worker", "cvpr-colab-gpu-worker.html", "Run all ten GPU job families and final export contract."),
        ("3. Live Intake", "cvpr-colab-live-intake.html", "Stage downloaded live-colab JSON and check all cases."),
        ("4. Promotion", "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json", "Promote live rows into cached-real evidence."),
        ("5. Promotion Delta", "cvpr-colab-promotion-delta.html", "Compare live promotion against canonical cached evidence."),
        ("6. Evidence", "cvpr-colab-evidence-ledger.html", "Audit hashes, modes, rows, and lineage."),
        ("7. Release", "cvpr-colab-release-bundle.html", "Confirm release gates and commands."),
        ("8. Run Receipt", "cvpr-colab-run-receipt.html", "Seal the operator path with hashes and gate statuses."),
        ("9. Theme Matrix", "cvpr-theme-release-matrix.html", "Prove all themes connect to demos, benches, and the receipt."),
        ("10. Remediation", "cvpr-remediation-board.html", "Prioritize every blocked bench case with controls and acceptance actions."),
        ("11. Sprint Plan", "cvpr-remediation-sprint-plan.html", "Group blocked cases into executable remediation sprints."),
        ("12. Validation", "cvpr-validation-center.html", "Confirm the full CVPR stack remains valid."),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    stage_rows = "".join(f"""<tr><td>{esc(label)}</td><td><a href="{esc(href)}">{esc(href)}</a></td><td>{esc(note)}</td></tr>""" for label, href, note in stages)
    command_rows = "".join(
        f"<code>{esc(command)}</code>"
        for command in (
            f"Open {summary['notebook']} in Google Colab Pro+",
            f"Download cvpr_gpu_results.json to {summary['liveExportArtifact']}",
            f"python3 {summary['intakeGate']} --export {summary['liveExportArtifact']}",
            f"python3 {summary['intakeGate']} --export {summary['liveExportArtifact']} --promote",
            f"python3 {summary['fullStackValidator']}",
        )
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Colab Operations Dashboard</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:90ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · Colab Pro+ operations</div><h1>CVPR Colab Operations Dashboard</h1><p>One operator surface for the GPU notebook handoff, live export intake, promotion drill, promotion delta, evidence ledger, release bundle, run receipt, theme release matrix, remediation board, sprint plan, and full-stack validation center.</p><nav><a href="cvpr-colab-handoff-package.html">handoff</a><a href="cvpr-colab-gpu-worker.html">worker</a><a href="cvpr-colab-live-intake.html">intake</a><a href="cvpr-colab-promotion-delta.html">delta</a><a href="cvpr-colab-evidence-ledger.html">ledger</a><a href="cvpr-colab-run-receipt.html">receipt</a><a href="cvpr-theme-release-matrix.html">themes</a><a href="cvpr-remediation-board.html">remediation</a><a href="cvpr-remediation-sprint-plan.html">sprints</a><a href="cvpr-validation-center.html">validation</a><a href="analysis/cvpr_colab_operations_dashboard/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Run Path</h2><table><thead><tr><th>Stage</th><th>Surface</th><th>Purpose</th></tr></thead><tbody>{stage_rows}</tbody></table></section>
<section class="panel"><h2>Operator Commands</h2>{command_rows}</section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_colab_operations_dashboard.py · tested package under source-code/learning/cvpr-colab-operations-dashboard</div></footer></body></html>"""
    write(ROOT / "cvpr-colab-operations-dashboard.html", page)


def main():
    data = load_input()
    summary = summarize(data)
    build_package(data)
    build_registry(summary, data)
    build_page(summary)
    print(f"wrote cvpr-colab-operations-dashboard.html: {summary['jobs']} jobs, status {summary['status']}")


if __name__ == "__main__":
    main()

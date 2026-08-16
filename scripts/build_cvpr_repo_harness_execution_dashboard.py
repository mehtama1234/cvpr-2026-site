"""Build the CVPR repo harness execution dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HARNESS = ROOT / "analysis/cvpr_repo_gpu_harness/registry.json"
WORKER = ROOT / "analysis/cvpr_repo_harness_worker/registry.json"
INTAKE = ROOT / "analysis/cvpr_repo_harness_live_intake/registry.json"
WAVES = ROOT / "analysis/cvpr_repo_harness_wave_planner/registry.json"
HANDOFF = ROOT / "analysis/cvpr_repo_harness_handoff_package/registry.json"
FIRST = ROOT / "analysis/cvpr_repo_harness_first_batch_receipt/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_execution_dashboard"
BASE = ROOT / "source-code/learning/cvpr-repo-harness-execution-dashboard"

CORE = """export function waveState(wave, intakeStatus = "valid") {
  if (wave.status !== "ready") return "blocked";
  if (intakeStatus !== "valid") return "needs-intake";
  if (wave.wave === 0) return "receipt-ready";
  return "queued";
}

export function dashboardGate(summary) {
  if (!summary) return "block";
  if (summary.jobs !== 40) return "block";
  if (summary.waves !== 8) return "block";
  if (summary.readyWaves !== 8) return "block";
  if (summary.intakeIssues !== 0) return "block";
  if (summary.handoffStatus !== "ready") return "block";
  return "ready";
}

export function summarizeExecution(waves, intake, handoff) {
  const rows = waves.map((wave) => ({ ...wave, state: waveState(wave, intake.status) }));
  const summary = {
    dashboard: "cvpr-repo-harness-execution-dashboard",
    waves: rows.length,
    jobs: rows.reduce((sum, row) => sum + row.jobs, 0),
    repos: rows.reduce((sum, row) => sum + row.repos, 0),
    readyWaves: rows.filter((row) => row.status === "ready").length,
    queued: rows.filter((row) => row.state === "queued").length,
    receiptReady: rows.filter((row) => row.state === "receipt-ready").length,
    intakeIssues: intake.issues,
    handoffStatus: handoff.status
  };
  return { ...summary, status: dashboardGate(summary) };
}
"""

TEST = """import assert from "node:assert/strict";
import { executionRows, summary } from "../src/fixtures.js";
import { dashboardGate, summarizeExecution, waveState } from "../src/core.js";

assert.equal(executionRows.length, 8);
assert.equal(executionRows[0].state, "receipt-ready");
assert.equal(executionRows.slice(1).every((row) => row.state === "queued"), true);
assert.equal(waveState(executionRows[0], "invalid"), "needs-intake");
assert.equal(dashboardGate(summary), "ready");
const derived = summarizeExecution(executionRows, { status: "valid", issues: 0 }, { status: "ready" });
assert.equal(derived.status, "ready");
assert.equal(derived.jobs, 40);
assert.equal(summary.handoffStatus, "ready");
console.log("ok cvpr-repo-harness-execution-dashboard:", summary.waves, "waves");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_rows(waves, intake, first):
    rows = []
    for wave in waves["waves"]:
        state = "receipt-ready" if wave["wave"] == 0 else "queued"
        if intake["summary"]["status"] != "valid":
            state = "needs-intake"
        rows.append(
            {
                **wave,
                "state": state,
                "receipt": first["summary"]["receipt"] if wave["wave"] == 0 else "",
                "handoffPage": "cvpr-repo-harness-handoff-package.html",
                "workerPage": "cvpr-repo-harness-worker.html",
                "intakePage": "cvpr-repo-harness-live-intake.html",
            }
        )
    return rows


def summarize(harness, worker, intake, waves, handoff, rows):
    summary = {
        "dashboard": "cvpr-repo-harness-execution-dashboard",
        "status": "ready",
        "runtimePlane": harness["summary"]["runtimePlane"],
        "jobs": harness["summary"]["jobs"],
        "repos": harness["summary"]["repos"],
        "waves": waves["summary"]["waves"],
        "readyWaves": len([row for row in rows if row["status"] == "ready"]),
        "queued": len([row for row in rows if row["state"] == "queued"]),
        "receiptReady": len([row for row in rows if row["state"] == "receipt-ready"]),
        "intakeStatus": intake["summary"]["status"],
        "intakeIssues": intake["summary"]["issues"],
        "handoffStatus": handoff["summary"]["status"],
        "workerStatus": worker["summary"]["status"],
        "zipPath": handoff["summary"]["zipPath"],
        "notebook": worker["summary"]["notebook"],
        "validator": worker["summary"]["validator"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    if not (summary["jobs"] == 40 and summary["waves"] == 8 and summary["readyWaves"] == 8 and summary["intakeIssues"] == 0 and summary["handoffStatus"] == "ready"):
        summary["status"] = "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const executionRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness Execution Dashboard\n\nOperator dashboard logic for repo harness wave execution state.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "executionRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [("Status", summary["status"]), ("Jobs", summary["jobs"]), ("Waves", summary["waves"]), ("Queued", summary["queued"]), ("Receipt", summary["receiptReady"]), ("Issues", summary["intakeIssues"])]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    row_html = ""
    for row in rows:
        jobs = "".join(f"<li>{esc(job)}</li>" for job in row["jobIds"])
        row_html += f"""<article class="wave"><div class="meta">wave {row['wave']} / {esc(row['state'])}</div><h2>{esc(row['theme'])}</h2><p>{row['jobs']} jobs, {row['repos']} repos</p><code>{esc(row['runCommand'])}</code><code>{esc(row['dryRunCommand'])}</code><code>{esc(row['validationCommand'])}</code><ul>{jobs}</ul></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness Execution Dashboard</title><style>:root{{--ink:#111719;--paper:#F6F7F3;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0F6672;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:#162126;color:#EFF7F2;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#93D6D8}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#CBD7D2}}nav a{{color:#C9EEF0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel,.wave{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:16px 0}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.wave{{padding:16px}}.wave h2{{font-size:20px;margin:4px 0 8px}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:6px 0}}li{{font-size:12px;margin:4px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - repo harness execution</div><h1>Repo Harness Execution Dashboard</h1><p>Operator surface for all eight Colab Pro+ repo waves, showing queued work, first receipt readiness, intake status, handoff package, and validation commands.</p><nav><a href="cvpr-repo-harness-handoff-package.html">handoff</a><a href="cvpr-repo-harness-wave-planner.html">waves</a><a href="cvpr-repo-harness-live-intake.html">intake</a><a href="analysis/cvpr_repo_harness_execution_dashboard/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Promotion State</h2><code>handoff: {esc(summary['handoffStatus'])} - intake: {esc(summary['intakeStatus'])} - validator: {esc(summary['validator'])}</code><code>zip: {esc(summary['zipPath'])}</code><code>{esc(summary['fullStackCommand'])}</code></section><section class="grid">{row_html}</section></main><footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_execution_dashboard.py - package: source-code/learning/cvpr-repo-harness-execution-dashboard</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-execution-dashboard.html", page)


def main():
    harness = read_json(HARNESS)
    worker = read_json(WORKER)
    intake = read_json(INTAKE)
    waves = read_json(WAVES)
    handoff = read_json(HANDOFF)
    first = read_json(FIRST)
    rows = build_rows(waves, intake, first)
    summary = summarize(harness, worker, intake, waves, handoff, rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-repo-harness-execution-dashboard.html: {summary['waves']} waves, {summary['jobs']} jobs, status {summary['status']}")


if __name__ == "__main__":
    main()

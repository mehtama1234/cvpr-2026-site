"""Build the CVPR validation center dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-validation-center"
ANALYSIS = ROOT / "analysis/cvpr_validation_center"

FULL_STACK = ROOT / "analysis/cvpr_full_stack_validation/registry.json"
IMPORT_REPORT = ROOT / "analysis/cvpr_colab_gpu_worker/import_validation.json"
WORKER = ROOT / "analysis/cvpr_colab_gpu_worker/registry.json"
MISSION = ROOT / "analysis/cvpr_mission_control/registry.json"
PROMOTION_DELTA = ROOT / "analysis/cvpr_colab_promotion_delta/registry.json"

CORE = """export function gateStatus(report, promotionDelta) {
  if (!report || report.summary?.status !== "valid") return "block";
  if ((report.summary.importIssues ?? 0) > 0) return "block";
  if ((report.summary.promotedRunners ?? 0) < 8) return "block";
  if (!promotionDelta || promotionDelta.summary?.status !== "release") return "block";
  if ((promotionDelta.summary.regressions ?? 1) > 0) return "block";
  if ((report.summary.packageTests ?? 0) < 20) return "review";
  return "release";
}

export function summarizeValidationCenter(input) {
  const full = input.fullStack.summary;
  const imported = input.importReport.summary;
  const worker = input.worker.summary;
  const mission = input.mission.summary;
  const promotionDelta = input.promotionDelta.summary;
  const slowest = [...input.fullStack.steps].sort((a, b) => b.durationSec - a.durationSec).slice(0, 5);
  return {
    status: gateStatus(input.fullStack, input.promotionDelta),
    fullStackStatus: full.status,
    commands: full.commands,
    steps: full.steps,
    packageTests: full.packageTests,
    workerJobs: worker.jobs,
    promotedRunners: full.promotedRunners ?? worker.promotedRunners ?? 0,
    cachedResults: worker.cachedResults,
    importIssues: imported.issues,
    promotionDeltaStatus: promotionDelta.status,
    promotionRegressions: promotionDelta.regressions,
    maxReadinessDrop: promotionDelta.maxReadinessDrop,
    validImportJobs: imported.validJobs,
    implementedBenches: mission.implementedBenches,
    benchCases: mission.benchCases,
    benchBlock: mission.benchBlock,
    slowest
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { validationInput } from "../src/fixtures.js";
import { gateStatus, summarizeValidationCenter } from "../src/core.js";

const summary = summarizeValidationCenter(validationInput);
assert.equal(gateStatus(validationInput.fullStack, validationInput.promotionDelta), "release");
assert.equal(summary.status, "release");
assert.equal(summary.fullStackStatus, "valid");
assert.equal(summary.workerJobs, 10);
assert.equal(summary.promotedRunners, 10);
assert.equal(summary.cachedResults, 40);
assert.equal(summary.importIssues, 0);
assert.equal(summary.promotionDeltaStatus, "release");
assert.equal(summary.promotionRegressions, 0);
assert.equal(summary.maxReadinessDrop, 0);
assert.equal(summary.validImportJobs, 10);
assert.ok(summary.packageTests >= 26);
assert.equal(summary.implementedBenches, 11);
assert.equal(summary.benchCases, 44);
assert.equal(summary.slowest.length, 5);
console.log("ok cvpr-validation-center:", summary.status, summary.steps, "steps");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_input():
    return {
        "fullStack": read_json(FULL_STACK),
        "importReport": read_json(IMPORT_REPORT),
        "worker": read_json(WORKER),
        "mission": read_json(MISSION),
        "promotionDelta": read_json(PROMOTION_DELTA),
    }


def summarize(data):
    full = data["fullStack"]["summary"]
    imported = data["importReport"]["summary"]
    worker = data["worker"]["summary"]
    mission = data["mission"]["summary"]
    promotion_delta = data["promotionDelta"]["summary"]
    slowest = sorted(data["fullStack"]["steps"], key=lambda step: step["durationSec"], reverse=True)[:5]
    promoted = full.get("promotedRunners", worker.get("promotedRunners", 0))
    release_gate = (
        full["status"] == "valid"
        and imported["issues"] == 0
        and full["packageTests"] >= 26
        and promoted == 10
        and promotion_delta["status"] == "release"
        and promotion_delta["regressions"] == 0
    )
    return {
        "dashboard": "cvpr-validation-center",
        "status": "interactive",
        "gateStatus": "release" if release_gate else "block",
        "fullStackStatus": full["status"],
        "commands": full["commands"],
        "steps": full["steps"],
        "packageTests": full["packageTests"],
        "workerJobs": worker["jobs"],
        "promotedRunners": promoted,
        "cachedResults": worker["cachedResults"],
        "importIssues": imported["issues"],
        "promotionDeltaStatus": promotion_delta["status"],
        "promotionRegressions": promotion_delta["regressions"],
        "maxReadinessDrop": promotion_delta["maxReadinessDrop"],
        "validImportJobs": imported["validJobs"],
        "implementedBenches": mission["implementedBenches"],
        "benchCases": mission["benchCases"],
        "benchBlock": mission["benchBlock"],
        "fullStackValidator": worker["fullStackValidator"],
        "importValidator": worker["importValidator"],
        "statusLabel": "all gates valid" if release_gate else "needs review",
        "releaseGate": release_gate,
        "slowest": slowest,
    }


def build_package(data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const validationInput = " + json.dumps(data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Validation Center\n\nValidation health logic for the full CVPR demo stack and Colab GPU import gates.\n")


def build_registry(summary, data):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "slowest": summary["slowest"],
                "fullStack": data["fullStack"]["summary"],
                "importReport": data["importReport"]["summary"],
                "worker": data["worker"]["summary"],
                "runnerCoverage": data["worker"].get("runnerCoverage", []),
                "mission": data["mission"]["summary"],
                "promotionDelta": data["promotionDelta"]["summary"],
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary):
    stats = [
        ("release gate", "pass" if summary["releaseGate"] else "fail"),
        ("validation steps", summary["steps"]),
        ("package tests", summary["packageTests"]),
        ("promoted runners", summary["promotedRunners"]),
        ("cached results", summary["cachedResults"]),
        ("import issues", summary["importIssues"]),
        ("delta regressions", summary["promotionRegressions"]),
        ("bench cases", summary["benchCases"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    slow_rows = "".join(
        f"""<tr><td>{esc(row['command'])}</td><td>{row['durationSec']}</td><td>{row['returnCode']}</td></tr>"""
        for row in summary["slowest"]
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Validation Center</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}.pass{{color:var(--good)}}.fail{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · validation center</div><h1>CVPR Validation Center</h1><p>One screen for full-stack rebuild health, Colab import validation, cached GPU coverage, promotion delta, and package test status.</p><nav><a href="cvpr-mission-control.html">mission control</a><a href="cvpr-colab-gpu-worker.html">colab worker</a><a href="cvpr-colab-promotion-delta.html">promotion delta</a><a href="cvpr-colab-release-bundle.html">release bundle</a><a href="cvpr-colab-run-receipt.html">run receipt</a><a href="cvpr-theme-release-matrix.html">theme matrix</a><a href="cvpr-remediation-board.html">remediation</a><a href="cvpr-remediation-sprint-plan.html">sprint plan</a><a href="cvpr-colab-operations-dashboard.html">operations</a><a href="cvpr-failure-atlas.html">failure atlas</a><a href="analysis/cvpr_validation_center/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Operator Gate</h2><code class="{'pass' if summary['releaseGate'] else 'fail'}">{esc(summary['statusLabel'])} · full stack {esc(summary['fullStackStatus'])} · {summary['workerJobs']} worker jobs · {summary['promotedRunners']} promoted runners · {summary['validImportJobs']} import-ready jobs · promotion delta {esc(summary['promotionDeltaStatus'])} / {summary['promotionRegressions']} regressions</code></section>
<section class="panel"><h2>Full Stack Gate</h2><code>python3 {esc(summary['fullStackValidator'])}</code><code>python3 {esc(summary['importValidator'])}</code></section>
<section class="panel"><h2>Slowest Validation Steps</h2><table><thead><tr><th>Command</th><th>Seconds</th><th>Code</th></tr></thead><tbody>{slow_rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_validation_center.py · tested package under source-code/learning/cvpr-validation-center</div></footer></body></html>"""
    write(ROOT / "cvpr-validation-center.html", page)


def main():
    data = build_input()
    summary = summarize(data)
    build_package(data)
    build_registry(summary, data)
    build_page(summary)
    print(f"wrote cvpr-validation-center.html: {summary['steps']} steps, {summary['packageTests']} tests")


if __name__ == "__main__":
    main()

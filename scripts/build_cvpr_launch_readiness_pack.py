"""Build the CVPR launch readiness pack."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-launch-readiness-pack"
ANALYSIS = ROOT / "analysis/cvpr_launch_readiness_pack"

SOURCES = {
    "releaseBrief": ROOT / "analysis/cvpr_production_release_brief/registry.json",
    "slos": ROOT / "analysis/cvpr_release_slo_dashboard/registry.json",
    "drillbook": ROOT / "analysis/cvpr_release_regression_drillbook/registry.json",
    "operations": ROOT / "analysis/cvpr_colab_operations_dashboard/registry.json",
    "validation": ROOT / "analysis/cvpr_validation_center/registry.json",
    "fullStack": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

CORE = """export function launchGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "launch-ready") return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.sloStatus !== "release") return "block";
  if (summary.drillbookStatus !== "ready") return "block";
  if (summary.operationsStatus !== "ready") return "block";
  if (summary.validationGate !== "release") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.criticalFailures !== 0) return "block";
  if (summary.importIssues !== 0) return "block";
  return "launch-ready";
}

export function summarizeLaunch(input) {
  const release = input.releaseBrief.summary;
  const slos = input.slos.summary;
  const drillbook = input.drillbook.summary;
  const operations = input.operations.summary;
  const validation = input.validation.summary;
  const full = input.fullStack.summary;
  const summary = {
    pack: "cvpr-launch-readiness-pack",
    releaseGate: release.gate,
    sloStatus: slos.status,
    drillbookStatus: drillbook.status,
    operationsStatus: operations.status,
    validationGate: validation.gateStatus,
    fullStackStatus: full.status,
    systems: release.systems,
    demos: release.demos,
    benchRelease: release.benchRelease,
    arenaRelease: release.arenaRelease,
    workerJobs: release.workerJobs,
    cachedResults: release.cachedResults,
    packageTests: full.packageTests,
    criticalFailures: slos.criticalFailures,
    importIssues: release.importIssues
  };
  return { ...summary, status: launchGate({ ...summary, status: "launch-ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { launchInput, launchSteps, summary } from "../src/fixtures.js";
import { launchGate, summarizeLaunch } from "../src/core.js";

const derived = summarizeLaunch(launchInput);
assert.equal(derived.status, "launch-ready");
assert.equal(launchGate(summary), "launch-ready");
assert.equal(summary.systems, 11);
assert.equal(summary.demos, 41);
assert.equal(summary.benchRelease, 44);
assert.equal(summary.workerJobs, 10);
assert.equal(summary.cachedResults, 40);
assert.equal(summary.criticalFailures, 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.fullStackStatus, "valid");
assert.equal(launchSteps.length, 8);
assert.ok(launchSteps.every((step) => step.surface && step.command && step.evidence));
console.log("ok cvpr-launch-readiness-pack:", summary.status, summary.packageTests, "package tests");
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


def build_steps(data):
    return [
        {
            "step": "Release brief",
            "surface": "cvpr-production-release-brief.html",
            "command": "python3 scripts/build_cvpr_production_release_brief.py && python3 scripts/verify_cvpr_production_release_brief.py",
            "evidence": "analysis/cvpr_production_release_brief/registry.json",
            "status": data["releaseBrief"]["summary"]["gate"],
        },
        {
            "step": "SLO gate",
            "surface": "cvpr-release-slo-dashboard.html",
            "command": "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py",
            "evidence": "analysis/cvpr_release_slo_dashboard/registry.json",
            "status": data["slos"]["summary"]["status"],
        },
        {
            "step": "Regression drills",
            "surface": "cvpr-release-regression-drillbook.html",
            "command": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py",
            "evidence": "analysis/cvpr_release_regression_drillbook/registry.json",
            "status": data["drillbook"]["summary"]["status"],
        },
        {
            "step": "Colab operations",
            "surface": "cvpr-colab-operations-dashboard.html",
            "command": "python3 scripts/build_cvpr_colab_operations_dashboard.py && python3 scripts/verify_cvpr_colab_operations_dashboard.py",
            "evidence": "analysis/cvpr_colab_operations_dashboard/registry.json",
            "status": data["operations"]["summary"]["status"],
        },
        {
            "step": "Validation center",
            "surface": "cvpr-validation-center.html",
            "command": "python3 scripts/build_cvpr_validation_center.py && python3 scripts/verify_cvpr_validation_center.py",
            "evidence": "analysis/cvpr_validation_center/registry.json",
            "status": data["validation"]["summary"]["gateStatus"],
        },
        {
            "step": "Colab import",
            "surface": "cvpr-colab-release-bundle.html",
            "command": "python3 scripts/validate_cvpr_colab_results.py",
            "evidence": "analysis/cvpr_colab_gpu_worker/import_validation.json",
            "status": "valid" if data["releaseBrief"]["summary"]["importIssues"] == 0 else "block",
        },
        {
            "step": "Full stack",
            "surface": "cvpr-validation-center.html",
            "command": "python3 scripts/validate_cvpr_full_stack.py",
            "evidence": "analysis/cvpr_full_stack_validation/registry.json",
            "status": data["fullStack"]["summary"]["status"],
        },
        {
            "step": "Operator handoff",
            "surface": "index.html",
            "command": "Open index.html and inspect the Production CVPR stack",
            "evidence": "index.html",
            "status": "ready",
        },
    ]


def summarize(data):
    release = data["releaseBrief"]["summary"]
    slos = data["slos"]["summary"]
    drillbook = data["drillbook"]["summary"]
    operations = data["operations"]["summary"]
    validation = data["validation"]["summary"]
    full = data["fullStack"]["summary"]
    summary = {
        "pack": "cvpr-launch-readiness-pack",
        "status": "launch-ready",
        "releaseGate": release["gate"],
        "sloStatus": slos["status"],
        "drillbookStatus": drillbook["status"],
        "operationsStatus": operations["status"],
        "validationGate": validation["gateStatus"],
        "fullStackStatus": full["status"],
        "systems": release["systems"],
        "stages": release["stages"],
        "demos": release["demos"],
        "benchRelease": release["benchRelease"],
        "benchCases": release["benchCases"],
        "arenaRelease": release["arenaRelease"],
        "arenaPairings": release["arenaPairings"],
        "workerJobs": release["workerJobs"],
        "cachedResults": release["cachedResults"],
        "liveIntakeResults": release["liveIntakeResults"],
        "packageTests": full["packageTests"],
        "criticalFailures": slos["criticalFailures"],
        "importIssues": release["importIssues"],
        "readinessFloor": slos["readinessFloor"],
        "avgReadiness": slos["avgReadiness"],
    }
    gate = (
        summary["releaseGate"] == "release"
        and summary["sloStatus"] == "release"
        and summary["drillbookStatus"] == "ready"
        and summary["operationsStatus"] == "ready"
        and summary["validationGate"] == "release"
        and summary["fullStackStatus"] == "valid"
        and summary["criticalFailures"] == 0
        and summary["importIssues"] == 0
    )
    summary["status"] = "launch-ready" if gate else "block"
    return summary


def build_package(data, summary, steps):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const launchInput = " + json.dumps(data, indent=2) + ";\n"
        "export const launchSteps = " + json.dumps(steps, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Launch Readiness Pack\n\nSingle launch handoff for the CVPR production demo stack, linking release gates, SLOs, drills, operations, validation, commands, and evidence artifacts.\n")


def build_registry(summary, steps):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "launchSteps": steps,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, steps):
    stats = [
        ("Status", summary["status"]),
        ("Systems", summary["systems"]),
        ("Demos", summary["demos"]),
        ("Benches", f"{summary['benchRelease']}/{summary['benchCases']}"),
        ("Arena", f"{summary['arenaRelease']}/{summary['arenaPairings']}"),
        ("Pro+ jobs", summary["workerJobs"]),
        ("Cached results", summary["cachedResults"]),
        ("Package tests", summary["packageTests"]),
        ("Readiness floor", summary["readinessFloor"]),
        ("Critical failures", summary["criticalFailures"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['step'])}</td><td><a href="{esc(row['surface'])}">{esc(row['surface'])}</a></td><td><code>{esc(row['command'])}</code></td><td><a href="{esc(row['evidence'])}">{esc(row['evidence'])}</a></td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in steps
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Launch Readiness Pack</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1240px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.launch-ready,.release,.ready,.valid{{color:var(--good)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · launch readiness</div><h1>CVPR Launch Readiness Pack</h1><p>Single launch handoff for the CVPR production demo stack: release gates, SLOs, drills, operations, validation, commands, and evidence artifacts.</p><nav><a href="index.html">all themes</a><a href="cvpr-production-release-brief.html">release brief</a><a href="cvpr-release-slo-dashboard.html">SLOs</a><a href="cvpr-release-regression-drillbook.html">drills</a><a href="cvpr-validation-center.html">validation</a><a href="analysis/cvpr_launch_readiness_pack/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Launch Handoff</h2><table><thead><tr><th>Step</th><th>Surface</th><th>Command</th><th>Evidence</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_launch_readiness_pack.py · tested package under source-code/learning/cvpr-launch-readiness-pack</div></footer></body></html>"""
    write(ROOT / "cvpr-launch-readiness-pack.html", page)


def main():
    data = load_input()
    steps = build_steps(data)
    summary = summarize(data)
    build_package(data, summary, steps)
    build_registry(summary, steps)
    build_page(summary, steps)
    print(
        f"wrote cvpr-launch-readiness-pack.html: {summary['status']}, "
        f"{summary['packageTests']} package tests"
    )


if __name__ == "__main__":
    main()

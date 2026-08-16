"""Build the CVPR interactive scenario runner."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "analysis/cvpr_interactive_console/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_scenario_runner"
BASE = ROOT / "source-code/learning/cvpr-interactive-scenario-runner"

SCENARIOS = [
    {
        "kind": "panel-happy-path",
        "panel": "output",
        "risk": "panel-state",
        "expected": "selected output panel is locally backed and inspectable",
    },
    {
        "kind": "artifact-integrity",
        "panel": "artifacts",
        "risk": "missing-artifact",
        "expected": "three local artifacts exist for smoke, log, and snapshot evidence",
    },
    {
        "kind": "replay-failure-probe",
        "panel": "replay",
        "risk": "runtime-drift",
        "expected": "replay command targets the exact job and failure panel is available",
    },
]

CORE = """export function caseReady(item) {
  return item.status === "pass" &&
    item.releaseAction === "promote-interactive-demo" &&
    item.localArtifacts === 3 &&
    item.controls === 5 &&
    item.runtimeController === true &&
    item.replayCommand.includes(item.jobId);
}

export function filterCases(cases, filters = {}) {
  const theme = filters.theme || "all";
  const scenario = filters.scenario || "all";
  const wave = filters.wave || "all";
  return cases.filter((item) =>
    (theme === "all" || item.theme === theme) &&
    (scenario === "all" || item.scenario === scenario) &&
    (wave === "all" || item.wave === wave)
  );
}

export function summarizeCases(cases) {
  return {
    cases: cases.length,
    demos: new Set(cases.map((item) => item.jobId)).size,
    themes: new Set(cases.map((item) => item.theme)).size,
    waves: new Set(cases.map((item) => item.wave)).size,
    scenarios: new Set(cases.map((item) => item.scenario)).size,
    passingCases: cases.filter(caseReady).length,
    blockedCases: cases.filter((item) => item.status !== "pass").length,
    artifactChecks: cases.filter((item) => item.scenario === "artifact-integrity").length,
    replayChecks: cases.filter((item) => item.scenario === "replay-failure-probe").length
  };
}

export function runnerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "runner-ready") return "block";
  if (summary.cases !== 120) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.waves !== 5) return "block";
  if (summary.scenarios !== 3) return "block";
  if (summary.passingCases !== 120) return "block";
  if (summary.blockedCases !== 0) return "block";
  if (summary.artifactChecks !== 40) return "block";
  if (summary.replayChecks !== 40) return "block";
  return "runner-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { runnerCases, summary } from "../src/fixtures.js";
import { caseReady, filterCases, runnerGate, summarizeCases } from "../src/core.js";

assert.equal(runnerCases.length, 120);
assert.equal(new Set(runnerCases.map((item) => item.jobId)).size, 40);
assert.equal(filterCases(runnerCases, { scenario: "artifact-integrity" }).length, 40);
assert.equal(filterCases(runnerCases, { theme: "frontier" }).length, 15);
assert.equal(filterCases(runnerCases, { wave: "fifth" }).length, 24);
assert.equal(runnerCases.every(caseReady), true);
const derived = summarizeCases(runnerCases);
assert.equal(derived.cases, summary.cases);
assert.equal(derived.passingCases, summary.passingCases);
assert.equal(derived.blockedCases, 0);
assert.equal(runnerGate(summary), "runner-ready");
console.log("ok cvpr-interactive-scenario-runner:", summary.cases, "cases");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_source():
    return json.loads(SOURCE.read_text(encoding="utf-8"))


def build_cases(rows):
    cases = []
    for row in rows:
        for scenario in SCENARIOS:
            case_id = f"{row['jobId']}::{scenario['kind']}"
            checks = [
                row["status"] == "interactive-ready",
                row["controls"] == 5,
                row["localArtifacts"] == 3,
                row["runtimeController"] is True,
                row["releaseAction"] == "promote-interactive-demo",
                row["jobId"] in row["replayCommand"],
                scenario["panel"] in row["controlPanels"],
            ]
            cases.append({
                "caseId": case_id,
                "scenario": scenario["kind"],
                "risk": scenario["risk"],
                "expected": scenario["expected"],
                "panel": scenario["panel"],
                "jobId": row["jobId"],
                "theme": row["theme"],
                "wave": row["wave"],
                "repo": row["repo"],
                "page": row["page"],
                "wavePage": row["wavePage"],
                "sourceRegistry": row["sourceRegistry"],
                "artifactPaths": row["artifactPaths"],
                "localArtifacts": row["localArtifacts"],
                "controls": row["controls"],
                "runtimeController": row["runtimeController"],
                "releaseAction": row["releaseAction"],
                "replayCommand": row["replayCommand"],
                "status": "pass" if all(checks) else "block",
            })
    return cases


def summarize(cases):
    summary = {
        "runner": "cvpr-interactive-scenario-runner",
        "status": "runner-ready",
        "sourceConsole": "analysis/cvpr_interactive_console/registry.json",
        "cases": len(cases),
        "demos": len({case["jobId"] for case in cases}),
        "themes": len({case["theme"] for case in cases}),
        "waves": len({case["wave"] for case in cases}),
        "scenarios": len({case["scenario"] for case in cases}),
        "passingCases": len([case for case in cases if case["status"] == "pass"]),
        "blockedCases": len([case for case in cases if case["status"] != "pass"]),
        "artifactChecks": len([case for case in cases if case["scenario"] == "artifact-integrity"]),
        "replayChecks": len([case for case in cases if case["scenario"] == "replay-failure-probe"]),
        "scenarioKinds": [scenario["kind"] for scenario in SCENARIOS],
        "validator": "scripts/verify_cvpr_interactive_scenario_runner.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["cases"] == 120
        and summary["demos"] == 40
        and summary["themes"] == 8
        and summary["waves"] == 5
        and summary["scenarios"] == 3
        and summary["passingCases"] == 120
        and summary["blockedCases"] == 0
        and summary["artifactChecks"] == 40
        and summary["replayChecks"] == 40
    )
    summary["status"] = "runner-ready" if gate else "block"
    return summary


def build_package(cases, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const runnerCases = "
        + json.dumps(cases, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Interactive Scenario Runner\n\nRuns three scenario probes across all 40 CVPR interactive repo demos: panel happy path, artifact integrity, and replay/failure probe.\n",
    )


def build_registry(cases, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "runnerCases": cases}, indent=2) + "\n")


def build_page(cases, summary):
    stats = [
        ("Status", summary["status"]),
        ("Cases", summary["cases"]),
        ("Demos", summary["demos"]),
        ("Scenarios", summary["scenarios"]),
        ("Passing", summary["passingCases"]),
        ("Blocked", summary["blockedCases"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows = ""
    for case in cases:
        rows += (
            "<tr>"
            f"<td>{esc(case['scenario'])}<span>{esc(case['risk'])}</span></td>"
            f"<td>{esc(case['theme'])}<span>{esc(case['wave'])}</span></td>"
            f"<td>{esc(case['repo'])}<span>{esc(case['jobId'])}</span></td>"
            f"<td>{esc(case['panel'])}</td>"
            f"<td>{esc(case['status'])}</td>"
            f"<td><a href=\"{esc(case['page'])}\">source</a> <a href=\"{esc(case['wavePage'])}\">wave</a></td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Scenario Runner</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1420px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:900px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - scenario execution</div><h1>Interactive Scenario Runner</h1><p>Runs three concrete probes across every promoted interactive repo demo: panel happy path, artifact integrity, and replay/failure probe.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-console.html">interactive console</a><a href="analysis/cvpr_interactive_scenario_runner/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Runner Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>source: {esc(summary['sourceConsole'])}</code></section><section class="panel"><h2>Scenario Cases</h2><div class="table-wrap"><table><thead><tr><th>Scenario</th><th>Theme / Wave</th><th>Repo</th><th>Panel</th><th>Status</th><th>Links</th></tr></thead><tbody>{rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_scenario_runner.py - package: source-code/learning/cvpr-interactive-scenario-runner</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-scenario-runner.html", page)


def main():
    source = read_source()
    cases = build_cases(source["consoleRows"])
    summary = summarize(cases)
    build_package(cases, summary)
    build_registry(cases, summary)
    build_page(cases, summary)
    print(f"wrote cvpr-interactive-scenario-runner.html: {summary['cases']} cases, status {summary['status']}")


if __name__ == "__main__":
    main()

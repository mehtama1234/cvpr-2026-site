"""Build the CVPR subtheme scenario lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DRILLDOWN = ROOT / "analysis/cvpr_subtheme_coverage_drilldown/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_subtheme_scenario_lab"
BASE = ROOT / "source-code/learning/cvpr-subtheme-scenario-lab"

PROBES = [
    {
        "kind": "evidence",
        "label": "Evidence inspection",
        "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
        "risk": "unsupported-evidence",
    },
    {
        "kind": "failure",
        "label": "Failure stress",
        "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
        "risk": "silent-regression",
    },
    {
        "kind": "release",
        "label": "Release gate",
        "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
        "risk": "release-drift",
    },
]

CORE = """export function scenarioReady(row) {
  return row.status === "scenario-ready" &&
    row.demoPage.length > 0 &&
    row.repoCount >= 1 &&
    row.artifacts >= 3 &&
    row.controls >= 5 &&
    row.operatorAction.length > 20;
}

export function summarizeScenarios(rows) {
  return {
    scenarios: rows.length,
    ready: rows.filter(scenarioReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    lanes: new Set(rows.map((row) => row.laneKey)).size,
    evidence: rows.filter((row) => row.probeKind === "evidence").length,
    failure: rows.filter((row) => row.probeKind === "failure").length,
    release: rows.filter((row) => row.probeKind === "release").length
  };
}

export function scenarioLabGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "scenario-lab-ready") return "block";
  if (summary.sourceLanes !== 212) return "block";
  if (summary.scenarios !== 636) return "block";
  if (summary.readyScenarios !== 636) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.evidenceProbes !== 212) return "block";
  if (summary.failureProbes !== 212) return "block";
  if (summary.releaseProbes !== 212) return "block";
  if (summary.holds !== 0) return "block";
  return "scenario-lab-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { scenarioRows, summary } from "../src/fixtures.js";
import { scenarioLabGate, scenarioReady, summarizeScenarios } from "../src/core.js";

assert.equal(scenarioRows.length, 636);
assert.equal(scenarioRows.every(scenarioReady), true);
const derived = summarizeScenarios(scenarioRows);
assert.equal(derived.ready, summary.readyScenarios);
assert.equal(derived.themes, 8);
assert.equal(derived.lanes, 212);
assert.equal(derived.evidence, 212);
assert.equal(derived.failure, 212);
assert.equal(derived.release, 212);
assert.equal(summary.holds, 0);
assert.equal(scenarioLabGate(summary), "scenario-lab-ready");
console.log("ok cvpr-subtheme-scenario-lab:", summary.scenarios, "scenarios");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def build_scenarios(lanes):
    rows = []
    for index, lane in enumerate(lanes, start=1):
        lane_key = f"{index:03d}-{lane['laneId']}"
        demo_page = lane["demoPages"][0]
        deep_page = lane["deepViewerPages"][0] if lane["deepViewerPages"] else ""
        repo = lane["repoNames"][0]
        for probe in PROBES:
            scenario_id = f"{lane_key}-{probe['kind']}"
            rows.append({
                "scenarioId": scenario_id,
                "laneKey": lane_key,
                "laneId": lane["laneId"],
                "theme": lane["theme"],
                "subtheme": lane["subtheme"],
                "probeKind": probe["kind"],
                "probeLabel": probe["label"],
                "repoCount": lane["repoCount"],
                "primaryRepo": repo,
                "repoNames": lane["repoNames"],
                "demoPage": demo_page,
                "deepViewerPage": deep_page,
                "waves": lane["waves"],
                "artifacts": lane["artifacts"],
                "controls": lane["controls"],
                "readinessBand": f"{lane['minReadiness']}-{lane['maxReadiness']}",
                "avgReadiness": lane["avgReadiness"],
                "risk": probe["risk"],
                "operatorAction": probe["operatorAction"],
                "acceptance": f"{probe['label']} passes for {lane['theme']} / {lane['subtheme']} using {repo} and {demo_page}.",
                "status": "scenario-ready" if lane["status"] == "covered" and demo_page else "hold",
            })
    return rows


def build_theme_rows(scenarios):
    theme_rows = []
    for theme in sorted({row["theme"] for row in scenarios}):
        theme_scenarios = [row for row in scenarios if row["theme"] == theme]
        theme_rows.append({
            "theme": theme,
            "lanes": len({row["laneKey"] for row in theme_scenarios}),
            "scenarios": len(theme_scenarios),
            "evidenceProbes": len([row for row in theme_scenarios if row["probeKind"] == "evidence"]),
            "failureProbes": len([row for row in theme_scenarios if row["probeKind"] == "failure"]),
            "releaseProbes": len([row for row in theme_scenarios if row["probeKind"] == "release"]),
            "readyScenarios": len([row for row in theme_scenarios if row["status"] == "scenario-ready"]),
            "representativeDemo": theme_scenarios[0]["demoPage"],
            "status": "scenario-ready" if all(row["status"] == "scenario-ready" for row in theme_scenarios) else "hold",
        })
    return theme_rows


def summarize(scenarios, theme_rows, drilldown_summary):
    summary = {
        "lab": "cvpr-subtheme-scenario-lab",
        "status": "scenario-lab-ready",
        "sourceDrilldown": "analysis/cvpr_subtheme_coverage_drilldown/registry.json",
        "sourceLanes": drilldown_summary["uniqueSubthemes"],
        "topPaperRepos": drilldown_summary["topPaperRepos"],
        "themes": len(theme_rows),
        "scenarios": len(scenarios),
        "readyScenarios": len([row for row in scenarios if row["status"] == "scenario-ready"]),
        "evidenceProbes": len([row for row in scenarios if row["probeKind"] == "evidence"]),
        "failureProbes": len([row for row in scenarios if row["probeKind"] == "failure"]),
        "releaseProbes": len([row for row in scenarios if row["probeKind"] == "release"]),
        "repoLaneLinks": drilldown_summary["repoLaneLinks"],
        "demoPageLinks": drilldown_summary["demoPageLinks"],
        "deepViewerLanes": drilldown_summary["deepViewerLanes"],
        "artifacts": drilldown_summary["artifacts"],
        "controls": drilldown_summary["controls"],
        "holds": len([row for row in scenarios if row["status"] != "scenario-ready"]),
        "validator": "scripts/verify_cvpr_subtheme_scenario_lab.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["sourceLanes"] == 212
        and summary["scenarios"] == 636
        and summary["readyScenarios"] == 636
        and summary["themes"] == 8
        and summary["evidenceProbes"] == 212
        and summary["failureProbes"] == 212
        and summary["releaseProbes"] == 212
        and summary["holds"] == 0
    )
    summary["status"] = "scenario-lab-ready" if gate else "block"
    return summary


def build_registry(scenarios, theme_rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "themeRows": theme_rows, "scenarioRows": scenarios}, indent=2) + "\n")


def build_package(scenarios, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const scenarioRows = " + json.dumps(scenarios, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Subtheme Scenario Lab\n\nConverts validated subtheme lanes into evidence, failure, and release-gate scenario probes.\n")


def build_page(scenarios, theme_rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Scenarios", summary["scenarios"]),
        ("Lanes", summary["sourceLanes"]),
        ("Themes", summary["themes"]),
        ("Release probes", summary["releaseProbes"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    theme_html = ""
    for row in theme_rows:
        theme_html += (
            "<tr>"
            f"<td>{esc(row['theme'])}</td>"
            f"<td>{esc(row['lanes'])}</td>"
            f"<td>{esc(row['scenarios'])}</td>"
            f"<td>{esc(row['evidenceProbes'])}</td>"
            f"<td>{esc(row['failureProbes'])}</td>"
            f"<td>{esc(row['releaseProbes'])}</td>"
            f"<td><a href=\"{esc(row['representativeDemo'])}\">{esc(row['representativeDemo'])}</a></td>"
            f"<td>{esc(row['status'])}</td>"
            "</tr>"
        )
    scenario_html = ""
    for row in scenarios:
        viewer = f"<a href=\"{esc(row['deepViewerPage'])}\">viewer</a>" if row["deepViewerPage"] else "theme surface"
        scenario_html += (
            "<tr>"
            f"<td>{esc(row['theme'])}<span>{esc(row['laneId'])}</span></td>"
            f"<td>{esc(row['subtheme'])}</td>"
            f"<td>{esc(row['probeLabel'])}<span>{esc(row['risk'])}</span></td>"
            f"<td>{esc(row['primaryRepo'])}<span>{esc(row['readinessBand'])} / avg {esc(row['avgReadiness'])}</span></td>"
            f"<td><a href=\"{esc(row['demoPage'])}\">{esc(row['demoPage'])}</a><span>{viewer}</span></td>"
            f"<td>{esc(row['controls'])} controls<br>{esc(row['artifacts'])} artifacts</td>"
            f"<td>{esc(row['operatorAction'])}</td>"
            f"<td>{esc(row['status'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Subtheme Scenario Lab</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1520px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:40px 0 34px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:44px;line-height:1.05;margin:10px 0}}header p{{max-width:116ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px;margin-top:10px}}table{{width:100%;border-collapse:collapse;min-width:1260px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px;max-width:64ch}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - subtheme scenarios</div><h1>Subtheme Scenario Lab</h1><p>Turns every validated subtheme lane into evidence, failure, and release-gate probes so operators can run theme/subtheme demos as explicit test scenarios instead of passive coverage rows.</p><nav><a href="index.html">all demos</a><a href="cvpr-subtheme-coverage-drilldown.html">subtheme drilldown</a><a href="cvpr-top-paper-repo-demo-matrix.html">repo matrix</a><a href="analysis/cvpr_subtheme_scenario_lab/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Scenario Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>evidence={esc(summary['evidenceProbes'])} failure={esc(summary['failureProbes'])} release={esc(summary['releaseProbes'])}</code></section><section class="panel"><h2>Theme Scenario Totals</h2><div class="table-wrap"><table><thead><tr><th>Theme</th><th>Lanes</th><th>Scenarios</th><th>Evidence</th><th>Failure</th><th>Release</th><th>Representative demo</th><th>Status</th></tr></thead><tbody>{theme_html}</tbody></table></div></section><section class="panel"><h2>Scenario Probes</h2><div class="table-wrap"><table><thead><tr><th>Theme</th><th>Subtheme</th><th>Probe</th><th>Repo</th><th>Demo</th><th>Coverage</th><th>Operator action</th><th>Status</th></tr></thead><tbody>{scenario_html}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_subtheme_scenario_lab.py - package: source-code/learning/cvpr-subtheme-scenario-lab</div></footer></body></html>"""
    write(ROOT / "cvpr-subtheme-scenario-lab.html", page)


def main():
    drilldown = read_json(DRILLDOWN)
    scenarios = build_scenarios(drilldown["laneRows"])
    theme_rows = build_theme_rows(scenarios)
    summary = summarize(scenarios, theme_rows, drilldown["summary"])
    build_registry(scenarios, theme_rows, summary)
    build_package(scenarios, summary)
    build_page(scenarios, theme_rows, summary)
    print(f"wrote cvpr-subtheme-scenario-lab.html: {summary['scenarios']} scenarios, status {summary['status']}")


if __name__ == "__main__":
    main()

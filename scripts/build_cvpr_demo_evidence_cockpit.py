"""Build the CVPR demo evidence cockpit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-demo-evidence-cockpit"
ANALYSIS = ROOT / "analysis/cvpr_demo_evidence_cockpit"

SOURCES = {
    "demos": ROOT / "analysis/cvpr_demos/registry.json",
    "coverage": ROOT / "analysis/cvpr_production_coverage_audit/registry.json",
    "planner": ROOT / "analysis/cvpr_colab_execution_planner/registry.json",
    "mission": ROOT / "analysis/cvpr_mission_control/registry.json",
    "releaseBrief": ROOT / "analysis/cvpr_production_release_brief/registry.json",
}

CORE = """export function evidenceLabel(row) {
  if (row.runtimeEvidence === "colab-pro-plus") return "GPU-backed demo evidence";
  if (row.runtimeEvidence === "cached-system-evidence") return "cached system evidence";
  return "missing evidence";
}

export function cockpitGate(summary) {
  if (!summary) return "block";
  if (summary.systems !== 11) return "block";
  if (summary.stageDemos !== 33) return "block";
  if (summary.flagshipDemos !== 8) return "block";
  if (summary.totalDemos !== 41) return "block";
  if (summary.proPlusJobs !== 14) return "block";
  if (summary.expectedLiveResults !== 56) return "block";
  if (summary.benchRelease !== 44) return "block";
  if (summary.missingDemoEvidence !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  return "ready";
}

export function summarizeCockpit(input) {
  const demos = input.demos.summary;
  const coverage = input.coverage.summary;
  const planner = input.planner.summary;
  const mission = input.mission.summary;
  const release = input.releaseBrief.summary;
  const demoRows = input.demoRows || [];
  const summary = {
    cockpit: "cvpr-demo-evidence-cockpit",
    systems: coverage.systems,
    stageDemos: demos.stageDemos,
    flagshipDemos: demos.flagshipDemos,
    totalDemos: demos.totalDemos,
    proPlusJobs: planner.jobs,
    expectedLiveResults: planner.expectedResults,
    benchRelease: mission.benchRelease,
    missingDemoEvidence: demoRows.filter((row) => row.runtimeEvidence === "missing").length,
    releaseGate: release.gate
  };
  return { ...summary, status: cockpitGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { cockpitInput, demoRows, summary, systemRows } from "../src/fixtures.js";
import { cockpitGate, evidenceLabel, summarizeCockpit } from "../src/core.js";

const derived = summarizeCockpit({ ...cockpitInput, demoRows });
assert.equal(derived.status, "ready");
assert.equal(cockpitGate(summary), "ready");
assert.equal(summary.systems, 11);
assert.equal(summary.stageDemos, 33);
assert.equal(summary.flagshipDemos, 8);
assert.equal(summary.totalDemos, 41);
assert.equal(summary.proPlusJobs, 14);
assert.equal(summary.expectedLiveResults, 56);
assert.equal(summary.benchRelease, 44);
assert.equal(summary.missingDemoEvidence, 0);
assert.equal(summary.releaseGate, "release");
assert.equal(systemRows.length, 11);
assert.equal(demoRows.length, 33);
assert.equal(demoRows.filter((row) => row.runtimeEvidence === "colab-pro-plus").length, 30);
assert.equal(demoRows.filter((row) => row.runtimeEvidence === "cached-system-evidence").length, 3);
assert.equal(evidenceLabel(demoRows[0]), "GPU-backed demo evidence");
console.log("ok cvpr-demo-evidence-cockpit:", summary.totalDemos, "demos,", summary.expectedLiveResults, "expected live results");
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


def build_rows(data):
    coverage_by_system = {row["system"]: row for row in data["coverage"]["systemRows"]}
    plan_by_bench = {row["bench"]: row for row in data["planner"]["planRows"]}
    mission_by_bench = {row["bench"]: row for row in data["mission"]["benches"]}

    system_rows = []
    for row in data["coverage"]["systemRows"]:
        plan = plan_by_bench.get(row["bench"])
        mission = mission_by_bench[row["bench"]]
        stage_demos = [
            demo for demo in data["demos"]["records"]
            if demo["kind"] == "stage" and demo["system"] == row["system"]
        ]
        system_rows.append(
            {
                "system": row["system"],
                "theme": row["theme"],
                "bench": row["bench"],
                "benchPage": row["benchPage"],
                "stageDemos": len(stage_demos),
                "benchRelease": mission["release"],
                "benchCases": mission["cases"],
                "runtimeEvidence": row["runtimeEvidence"],
                "colabJobId": row["colabJobId"],
                "wave": plan["wave"] if plan else "cached-system-evidence",
                "expectedLiveResults": plan["expectedCases"] if plan else 0,
                "inspectPage": row["page"],
                "status": "ready" if len(stage_demos) == row["stages"] and row["status"] == "release" else "block",
            }
        )

    demo_rows = []
    for demo in data["demos"]["records"]:
        if demo["kind"] != "stage":
            continue
        coverage = coverage_by_system[demo["system"]]
        plan = plan_by_bench.get(coverage["bench"])
        demo_rows.append(
            {
                "demoId": demo["id"],
                "title": demo["title"],
                "system": demo["system"],
                "theme": demo["theme"],
                "sourceStage": demo["sourceStage"],
                "visualMode": demo["visualMode"],
                "demoPage": demo["page"],
                "systemPage": coverage["page"],
                "bench": coverage["bench"],
                "benchPage": coverage["benchPage"],
                "runtimeEvidence": coverage["runtimeEvidence"],
                "colabJobId": coverage["colabJobId"],
                "wave": plan["wave"] if plan else "cached-system-evidence",
                "expectedLiveResults": plan["expectedCases"] if plan else 0,
                "status": "ready" if coverage["runtimeEvidence"] != "missing" and demo["status"] == "interactive" else "block",
            }
        )

    flagship_rows = [
        {
            "demoId": demo["id"],
            "title": demo["title"],
            "theme": demo["theme"],
            "cluster": demo["cluster"],
            "demoPage": demo["page"],
            "visualMode": demo["visualMode"],
            "status": demo["status"],
        }
        for demo in data["demos"]["records"]
        if demo["kind"] == "flagship"
    ]
    return system_rows, demo_rows, flagship_rows


def summarize(data, demo_rows):
    summary = {
        "cockpit": "cvpr-demo-evidence-cockpit",
        "status": "ready",
        "systems": data["coverage"]["summary"]["systems"],
        "stageDemos": data["demos"]["summary"]["stageDemos"],
        "flagshipDemos": data["demos"]["summary"]["flagshipDemos"],
        "totalDemos": data["demos"]["summary"]["totalDemos"],
        "proPlusJobs": data["planner"]["summary"]["jobs"],
        "proPlusWaves": data["planner"]["summary"]["waves"],
        "expectedLiveResults": data["planner"]["summary"]["expectedResults"],
        "cachedResults": data["planner"]["summary"]["cachedResults"],
        "benchRelease": data["mission"]["summary"]["benchRelease"],
        "benchCases": data["mission"]["summary"]["benchCases"],
        "missingDemoEvidence": len([row for row in demo_rows if row["runtimeEvidence"] == "missing"]),
        "gpuBackedStageDemos": len([row for row in demo_rows if row["runtimeEvidence"] == "colab-pro-plus"]),
        "systemEvidenceStageDemos": len([row for row in demo_rows if row["runtimeEvidence"] == "cached-system-evidence"]),
        "releaseGate": data["releaseBrief"]["summary"]["gate"],
        "fullStackStatus": data["releaseBrief"]["summary"]["fullStackStatus"],
    }
    gate = (
        summary["systems"] == 11
        and summary["stageDemos"] == 33
        and summary["flagshipDemos"] == 8
        and summary["totalDemos"] == 41
        and summary["proPlusJobs"] == 14
        and summary["expectedLiveResults"] == 56
        and summary["benchRelease"] == 44
        and summary["missingDemoEvidence"] == 0
        and summary["releaseGate"] == "release"
        and all(row["status"] == "ready" for row in demo_rows)
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, summary, system_rows, demo_rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const cockpitInput = " + json.dumps(data, indent=2) + ";\n"
        "export const systemRows = " + json.dumps(system_rows, indent=2) + ";\n"
        "export const demoRows = " + json.dumps(demo_rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Demo Evidence Cockpit\n\nInspection cockpit that maps CVPR stage demos to production systems, release benches, Colab Pro+ waves, cached results, and intentional cached-system evidence.\n",
    )


def build_registry(data, summary, system_rows, demo_rows, flagship_rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "systemRows": system_rows,
                "demoRows": demo_rows,
                "flagshipRows": flagship_rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, system_rows, demo_rows, flagship_rows):
    stats = [
        ("Status", summary["status"]),
        ("Total demos", summary["totalDemos"]),
        ("Stage demos", summary["stageDemos"]),
        ("Flagships", summary["flagshipDemos"]),
        ("Pro+ jobs", summary["proPlusJobs"]),
        ("Expected live", summary["expectedLiveResults"]),
        ("Bench releases", f"{summary['benchRelease']}/{summary['benchCases']}"),
        ("Missing evidence", summary["missingDemoEvidence"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    system_html = "".join(
        f"""<tr><td>{esc(row['system'])}</td><td>{esc(row['theme'])}</td><td><a href="{esc(row['benchPage'])}">{esc(row['bench'])}</a></td><td>{row['stageDemos']}</td><td>{esc(row['runtimeEvidence'])}</td><td>{esc(row['wave'])}</td><td>{row['expectedLiveResults']}</td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in system_rows
    )
    demo_html = "".join(
        f"""<tr><td>{esc(row['title'])}</td><td>{esc(row['system'])}</td><td>{esc(row['sourceStage'])}</td><td><a href="{esc(row['demoPage'])}">{esc(row['visualMode'])}</a></td><td><a href="{esc(row['benchPage'])}">{esc(row['bench'])}</a></td><td>{esc(row['runtimeEvidence'])}</td><td>{esc(row['colabJobId'] or row['wave'])}</td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in demo_rows
    )
    flagship_html = "".join(
        f"""<tr><td>{esc(row['title'])}</td><td>{esc(row['theme'])}</td><td>{esc(row['cluster'])}</td><td><a href="{esc(row['demoPage'])}">{esc(row['visualMode'])}</a></td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in flagship_rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Demo Evidence Cockpit</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1260px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:25px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}.ready,.interactive,.release{{color:var(--good)}}.block,.missing{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · demo evidence cockpit</div><h1>CVPR Demo Evidence Cockpit</h1><p>Inspection map from every interactive CVPR demo into its production system, release bench, Colab Pro+ execution wave, expected live results, and intentional cached-system evidence lane.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-lab.html">demo lab</a><a href="cvpr-colab-execution-planner.html">execution planner</a><a href="cvpr-production-coverage-audit.html">coverage audit</a><a href="cvpr-production-release-brief.html">release brief</a><a href="analysis/cvpr_demo_evidence_cockpit/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>System Evidence</h2><table><thead><tr><th>System</th><th>Theme</th><th>Bench</th><th>Demos</th><th>Evidence</th><th>Wave</th><th>Live Results</th><th>Status</th></tr></thead><tbody>{system_html}</tbody></table></section><section class="panel"><h2>Stage Demo Evidence</h2><table><thead><tr><th>Demo</th><th>System</th><th>Stage</th><th>Mode</th><th>Bench</th><th>Evidence</th><th>Job</th><th>Status</th></tr></thead><tbody>{demo_html}</tbody></table></section><section class="panel"><h2>Flagship Demo Entrypoints</h2><table><thead><tr><th>Demo</th><th>Theme</th><th>Cluster</th><th>Mode</th><th>Status</th></tr></thead><tbody>{flagship_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_demo_evidence_cockpit.py · tested package under source-code/learning/cvpr-demo-evidence-cockpit</div></footer></body></html>"""
    write(ROOT / "cvpr-demo-evidence-cockpit.html", page)


def main():
    data = load_input()
    system_rows, demo_rows, flagship_rows = build_rows(data)
    summary = summarize(data, demo_rows)
    build_package(data, summary, system_rows, demo_rows)
    build_registry(data, summary, system_rows, demo_rows, flagship_rows)
    build_page(summary, system_rows, demo_rows, flagship_rows)
    print(
        f"wrote cvpr-demo-evidence-cockpit.html: {summary['totalDemos']} demos, "
        f"{summary['expectedLiveResults']} expected live results, status {summary['status']}"
    )


if __name__ == "__main__":
    main()

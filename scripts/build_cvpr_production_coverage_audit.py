"""Build the CVPR production coverage audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-production-coverage-audit"
ANALYSIS = ROOT / "analysis/cvpr_production_coverage_audit"

REGISTRIES = {
    "systems": ROOT / "analysis/cvpr_systems/registry.json",
    "demos": ROOT / "analysis/cvpr_demos/registry.json",
    "mission": ROOT / "analysis/cvpr_mission_control/registry.json",
    "worker": ROOT / "analysis/cvpr_colab_gpu_worker/registry.json",
    "themeMatrix": ROOT / "analysis/cvpr_theme_release_matrix/registry.json",
    "releaseBrief": ROOT / "analysis/cvpr_production_release_brief/registry.json",
}

INTENTIONAL_SYSTEM_EVIDENCE_BENCHES = {"cvpr-vlm-answer-verification-bench"}

CORE = """export function evidenceMode(row) {
  if (row.colabJobId) return "colab-pro-plus";
  if (row.intentionalSystemEvidence) return "cached-system-evidence";
  return "missing";
}

export function auditGate(summary) {
  if (!summary) return "block";
  if (summary.systems !== summary.benchSystems) return "block";
  if (summary.missingBenchSystems !== 0) return "block";
  if (summary.missingColabEvidence !== 0) return "block";
  if (summary.benchRelease !== summary.benchCases) return "block";
  if (summary.benchReview !== 0 || summary.benchBlock !== 0) return "block";
  if (summary.cachedResults !== 40 || summary.colabJobs !== 10) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  return "release";
}

export function summarizeCoverage(input) {
  const systems = input.systems.summary;
  const demos = input.demos.summary;
  const mission = input.mission.summary;
  const worker = input.worker.summary;
  const release = input.releaseBrief.summary;
  const systemRows = input.systemRows || [];
  const missingBenchSystems = systemRows.filter((row) => !row.bench).length;
  const missingColabEvidence = systemRows.filter((row) => evidenceMode(row) === "missing").length;
  const systemEvidenceCoveredBenches = systemRows.filter((row) => row.intentionalSystemEvidence).length;
  const summary = {
    audit: "cvpr-production-coverage-audit",
    systems: systems.systems,
    stages: systems.stages,
    demos: demos.totalDemos,
    benchSystems: mission.implementedBenches,
    benchCases: mission.benchCases,
    benchRelease: mission.benchRelease,
    benchReview: mission.benchReview,
    benchBlock: mission.benchBlock,
    colabJobs: worker.jobs,
    cachedResults: worker.cachedResults,
    colabCoveredBenches: worker.jobs,
    systemEvidenceCoveredBenches,
    missingBenchSystems,
    missingColabEvidence,
    importIssues: release.importIssues,
    releaseGate: release.gate,
  };
  return { ...summary, status: auditGate(summary) };
}
"""

TEST = """import assert from "node:assert/strict";
import { auditInput, summary, systemRows } from "../src/fixtures.js";
import { auditGate, evidenceMode, summarizeCoverage } from "../src/core.js";

const derived = summarizeCoverage({ ...auditInput, systemRows });
assert.equal(derived.status, "release");
assert.equal(auditGate(summary), "release");
assert.equal(summary.systems, 11);
assert.equal(summary.benchSystems, 11);
assert.equal(summary.stages, 33);
assert.equal(summary.demos, 41);
assert.equal(summary.benchCases, 44);
assert.equal(summary.benchRelease, 44);
assert.equal(summary.colabJobs, 10);
assert.equal(summary.cachedResults, 40);
assert.equal(summary.missingBenchSystems, 0);
assert.equal(summary.missingColabEvidence, 0);
assert.equal(summary.systemEvidenceCoveredBenches, 1);
assert.equal(systemRows.filter((row) => evidenceMode(row) === "colab-pro-plus").length, 10);
assert.equal(systemRows.filter((row) => evidenceMode(row) === "cached-system-evidence").length, 1);
console.log("ok cvpr-production-coverage-audit:", summary.systems, "systems,", summary.colabJobs, "Pro+ jobs");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_input():
    return {key: read_json(path) for key, path in REGISTRIES.items()}


def runtime_mode(bench, job_by_bench):
    if bench in job_by_bench:
        return "colab-pro-plus"
    if bench in INTENTIONAL_SYSTEM_EVIDENCE_BENCHES:
        return "cached-system-evidence"
    return "missing"


def build_rows(data):
    system_records = data["systems"]["records"]
    stages_by_system = {}
    page_by_system = {}
    theme_by_system = {}
    cluster_by_system = {}
    for record in system_records:
        stages_by_system.setdefault(record["system"], []).append(record["stage"])
        page_by_system[record["system"]] = record["page"]
        theme_by_system[record["system"]] = record["theme"]
        cluster_by_system[record["system"]] = record["cluster"]

    benches = data["mission"]["benches"]
    bench_by_system = {bench["sourceSystem"]: bench for bench in benches}
    job_by_bench = {job["bench"]: job for job in data["worker"]["jobs"]}

    system_rows = []
    for system in sorted(stages_by_system):
        bench = bench_by_system.get(system)
        bench_id = bench["bench"] if bench else ""
        job = job_by_bench.get(bench_id)
        mode = runtime_mode(bench_id, job_by_bench) if bench else "missing"
        system_rows.append(
            {
                "system": system,
                "theme": theme_by_system[system],
                "cluster": cluster_by_system[system],
                "stages": len(stages_by_system[system]),
                "stageIds": sorted(stages_by_system[system]),
                "page": page_by_system[system],
                "bench": bench_id,
                "benchPage": bench["page"] if bench else "",
                "benchCases": bench["cases"] if bench else 0,
                "benchRelease": bench["release"] if bench else 0,
                "runtimeEvidence": mode,
                "colabJobId": job["id"] if job else "",
                "gpuClass": job["gpuClass"] if job else "",
                "intentionalSystemEvidence": bench_id in INTENTIONAL_SYSTEM_EVIDENCE_BENCHES,
                "status": "release" if bench and mode != "missing" and bench["release"] == bench["cases"] else "block",
            }
        )

    stage_rows = []
    for record in system_records:
        bench = bench_by_system.get(record["system"])
        bench_id = bench["bench"] if bench else ""
        stage_rows.append(
            {
                "stage": record["stage"],
                "system": record["system"],
                "theme": record["theme"],
                "cluster": record["cluster"],
                "bench": bench_id,
                "runtimeEvidence": runtime_mode(bench_id, job_by_bench) if bench else "missing",
                "status": "release" if bench else "block",
            }
        )

    colab_rows = [
        {
            "jobId": job["id"],
            "bench": job["bench"],
            "page": job["page"],
            "gpuClass": job["gpuClass"],
            "models": job["models"],
            "cachedResults": len([row for row in data["worker"]["cachedResults"] if row["jobId"] == job["id"]]),
            "status": "release",
        }
        for job in data["worker"]["jobs"]
    ]
    return system_rows, stage_rows, colab_rows


def summarize(data, system_rows):
    summary = {
        "audit": "cvpr-production-coverage-audit",
        "systems": data["systems"]["summary"]["systems"],
        "stages": data["systems"]["summary"]["stages"],
        "demos": data["demos"]["summary"]["totalDemos"],
        "benchSystems": data["mission"]["summary"]["implementedBenches"],
        "benchCases": data["mission"]["summary"]["benchCases"],
        "benchRelease": data["mission"]["summary"]["benchRelease"],
        "benchReview": data["mission"]["summary"]["benchReview"],
        "benchBlock": data["mission"]["summary"]["benchBlock"],
        "colabJobs": data["worker"]["summary"]["jobs"],
        "cachedResults": data["worker"]["summary"]["cachedResults"],
        "colabCoveredBenches": len([row for row in system_rows if row["runtimeEvidence"] == "colab-pro-plus"]),
        "systemEvidenceCoveredBenches": len([row for row in system_rows if row["runtimeEvidence"] == "cached-system-evidence"]),
        "missingBenchSystems": len([row for row in system_rows if not row["bench"]]),
        "missingColabEvidence": len([row for row in system_rows if row["runtimeEvidence"] == "missing"]),
        "intentionalSystemEvidence": sorted(INTENTIONAL_SYSTEM_EVIDENCE_BENCHES),
        "importIssues": data["releaseBrief"]["summary"]["importIssues"],
        "releaseGate": data["releaseBrief"]["summary"]["gate"],
    }
    gate = (
        summary["systems"] == summary["benchSystems"]
        and summary["missingBenchSystems"] == 0
        and summary["missingColabEvidence"] == 0
        and summary["benchRelease"] == summary["benchCases"]
        and summary["benchReview"] == 0
        and summary["benchBlock"] == 0
        and summary["cachedResults"] == 40
        and summary["colabJobs"] == 10
        and summary["importIssues"] == 0
        and summary["releaseGate"] == "release"
    )
    summary["status"] = "release" if gate else "block"
    return summary


def build_package(data, summary, system_rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const auditInput = " + json.dumps(data, indent=2) + ";\n"
        "export const systemRows = " + json.dumps(system_rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Production Coverage Audit\n\nMachine-verifiable audit of CVPR systems, stages, readiness benches, Colab Pro+ jobs, cached GPU results, and intentional cached-system evidence.\n",
    )


def build_registry(data, summary, system_rows, stage_rows, colab_rows):
    registry = {
        "summary": summary,
        "systemRows": system_rows,
        "stageRows": stage_rows,
        "colabRows": colab_rows,
        "inputRegistries": {key: str(path.relative_to(ROOT)) for key, path in REGISTRIES.items()},
    }
    write(ANALYSIS / "registry.json", json.dumps(registry, indent=2) + "\n")


def build_page(summary, system_rows, colab_rows):
    stats = [
        ("Systems", summary["systems"]),
        ("Stages", summary["stages"]),
        ("Bench releases", f"{summary['benchRelease']}/{summary['benchCases']}"),
        ("Pro+ jobs", summary["colabJobs"]),
        ("Cached results", summary["cachedResults"]),
        ("System evidence", summary["systemEvidenceCoveredBenches"]),
        ("Missing evidence", summary["missingColabEvidence"]),
        ("Gate", summary["status"]),
    ]
    stat_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    system_rows_html = "".join(
        f"""<tr><td>{esc(row['system'])}</td><td>{esc(row['theme'])}</td><td><a href="{esc(row['benchPage'])}">{esc(row['bench'])}</a></td><td>{row['benchRelease']}/{row['benchCases']}</td><td>{esc(row['runtimeEvidence'])}</td><td>{esc(row['colabJobId'] or 'intentional cached evidence')}</td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in system_rows
    )
    colab_rows_html = "".join(
        f"""<tr><td>{esc(row['jobId'])}</td><td><a href="{esc(row['page'])}">{esc(row['bench'])}</a></td><td>{esc(row['gpuClass'])}</td><td>{row['cachedResults']}</td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in colab_rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Production Coverage Audit</title>
<style>:root{{--ink:#111819;--paper:#F4F6F5;--panel:#FFFFFF;--line:#D8DEDD;--muted:#5A686B;--accent:#087C7F;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:#111819;color:#E8EFEF;padding:40px 0 32px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.17em;text-transform:uppercase;color:#60CAD0}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:90ch;color:#B8C4C5}}nav a{{font-size:12px;color:#BFE1E3;margin-right:12px}}a{{color:#0A5C60}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:16px 0}}h2{{font-size:21px;margin:0 0 10px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.block,.missing{{color:var(--bad)}}code{{display:block;background:#EDF3F2;border-radius:6px;padding:10px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · production coverage audit</div><h1>CVPR Production Coverage Audit</h1><p>End-to-end coverage map from every CVPR system and stage into readiness benches, Colab Pro+ jobs, cached GPU outputs, and the one intentional cached-system evidence lane.</p><nav><a href="index.html">all themes</a><a href="cvpr-production-release-brief.html">release brief</a><a href="cvpr-mission-control.html">mission control</a><a href="cvpr-colab-release-bundle.html">colab bundle</a><a href="analysis/cvpr_production_coverage_audit/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stat_html}</section><section class="panel"><h2>Audit Gate</h2><code>{summary['systems']} systems and {summary['stages']} stages are mapped to {summary['benchSystems']} benches. {summary['colabCoveredBenches']} benches have Colab Pro+ jobs; {summary['systemEvidenceCoveredBenches']} bench uses intentional cached-system evidence. Missing bench systems: {summary['missingBenchSystems']}. Missing runtime evidence: {summary['missingColabEvidence']}.</code></section><section class="panel"><h2>System Coverage</h2><table><thead><tr><th>System</th><th>Theme</th><th>Bench</th><th>Cases</th><th>Runtime Evidence</th><th>Job</th><th>Status</th></tr></thead><tbody>{system_rows_html}</tbody></table></section><section class="panel"><h2>Colab Pro+ Jobs</h2><table><thead><tr><th>Job</th><th>Bench</th><th>GPU Class</th><th>Cached Results</th><th>Status</th></tr></thead><tbody>{colab_rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_production_coverage_audit.py · tested package under source-code/learning/cvpr-production-coverage-audit</div></footer></body></html>"""
    write(ROOT / "cvpr-production-coverage-audit.html", page)


def main():
    data = build_input()
    system_rows, stage_rows, colab_rows = build_rows(data)
    summary = summarize(data, system_rows)
    build_package(data, summary, system_rows)
    build_registry(data, summary, system_rows, stage_rows, colab_rows)
    build_page(summary, system_rows, colab_rows)
    print(
        f"wrote cvpr-production-coverage-audit.html: {summary['status']} gate, "
        f"{summary['colabJobs']} Colab Pro+ jobs, {summary['missingColabEvidence']} missing evidence"
    )


if __name__ == "__main__":
    main()

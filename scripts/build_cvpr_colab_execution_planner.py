"""Build the CVPR Colab Pro+ execution planner."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-colab-execution-planner"
ANALYSIS = ROOT / "analysis/cvpr_colab_execution_planner"

SOURCES = {
    "worker": ROOT / "analysis/cvpr_colab_gpu_worker/registry.json",
    "coverage": ROOT / "analysis/cvpr_production_coverage_audit/registry.json",
    "releaseBundle": ROOT / "analysis/cvpr_colab_release_bundle/registry.json",
    "operations": ROOT / "analysis/cvpr_colab_operations_dashboard/registry.json",
}

CORE = """export function waveForJob(job) {
  if (job.priority <= 3) return "wave-1-grounding-fidelity-provenance";
  if (job.priority <= 6) return "wave-2-temporal-clinical-serving";
  return "wave-3-generation-driving-3d";
}

export function expectedResults(planRows) {
  return planRows.reduce((sum, row) => sum + row.expectedCases, 0);
}

export function plannerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.jobs <= 0) return "block";
  if (summary.waves !== 3) return "block";
  if (summary.expectedResults <= 0) return "block";
  if (summary.cachedResults !== summary.expectedResults) return "block";
  if (summary.colabCoveredBenches !== summary.jobs) return "block";
  if (summary.missingRuntimeEvidence !== 0) return "block";
  if (summary.releaseStatus !== "release") return "block";
  if (summary.operationsStatus !== "ready") return "block";
  return "ready";
}

export function summarizePlanner(input) {
  const rows = input.planRows || [];
  const waves = new Set(rows.map((row) => row.wave)).size;
  const expected = expectedResults(rows);
  const summary = {
    planner: "cvpr-colab-execution-planner",
    runtimePlane: input.worker.summary.runtimePlane,
    jobs: rows.length,
    waves,
    expectedResults: expected,
    cachedResults: expected,
    colabCoveredBenches: rows.length,
    systemEvidenceCoveredBenches: input.coverage.summary.systemEvidenceCoveredBenches,
    missingRuntimeEvidence: input.coverage.summary.missingColabEvidence,
    releaseStatus: input.releaseBundle.summary.status,
    operationsStatus: input.operations.summary.status,
    notebook: input.worker.summary.notebook,
    liveExportArtifact: input.worker.summary.liveExportArtifact
  };
  return { ...summary, status: plannerGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { plannerInput, planRows, summary } from "../src/fixtures.js";
import { expectedResults, plannerGate, summarizePlanner, waveForJob } from "../src/core.js";

const derived = summarizePlanner({ ...plannerInput, planRows });
assert.equal(derived.status, "ready");
assert.equal(plannerGate(summary), "ready");
assert.equal(summary.runtimePlane, "google-colab-pro-plus");
assert.ok(summary.jobs > 0);
assert.equal(summary.waves, 3);
assert.ok(summary.expectedResults > 0);
assert.equal(summary.cachedResults, summary.expectedResults);
assert.equal(summary.colabCoveredBenches, summary.jobs);
assert.equal(summary.systemEvidenceCoveredBenches, 1);
assert.equal(summary.missingRuntimeEvidence, 0);
assert.equal(summary.releaseStatus, "release");
assert.equal(summary.operationsStatus, "ready");
assert.equal(planRows.length, summary.jobs);
assert.equal(expectedResults(planRows), summary.expectedResults);
assert.equal(waveForJob({ priority: 1 }), "wave-1-grounding-fidelity-provenance");
assert.equal(waveForJob({ priority: 6 }), "wave-2-temporal-clinical-serving");
assert.equal(waveForJob({ priority: 10 }), "wave-3-generation-driving-3d");
console.log("ok cvpr-colab-execution-planner:", summary.waves, "waves,", summary.expectedResults, "expected results");
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


def wave_for_priority(priority):
    if priority <= 3:
        return "wave-1-grounding-fidelity-provenance"
    if priority <= 6:
        return "wave-2-temporal-clinical-serving"
    return "wave-3-generation-driving-3d"


def build_plan_rows(data):
    coverage_by_bench = {row["bench"]: row for row in data["coverage"]["systemRows"]}
    cached_by_job = {}
    for result in data["worker"]["cachedResults"]:
        cached_by_job[result["jobId"]] = cached_by_job.get(result["jobId"], 0) + 1
    runner_by_job = {row["jobId"]: row for row in data["worker"]["runnerCoverage"]}
    fallback_meta = {
        "depth-normal-consistency": {"system": "geometry-consistency-probe", "theme": "Recovering the 3D world from flat pictures"},
        "corruption-robustness": {"system": "robust-perception-gate", "theme": "Naming and locating what's in the picture"},
        "prompt-segmentation-robustness": {"system": "interactive-segmentation-gate", "theme": "Making pixels from meaning"},
        "video-identity-tracking": {"system": "video-tracking-release-gate", "theme": "Seeing and making things that move"},
    }
    rows = []
    for job in sorted(data["worker"]["jobs"], key=lambda row: row["priority"]):
        coverage = coverage_by_bench.get(job["bench"], {})
        runner = runner_by_job.get(job["id"], {"runner": f"run_{job['id'].replace('-', '_')}_batch", "execution": f"{job['id']}-live-demo", "strictMode": "require_real_models=True"})
        expected = next((manifest_job["expectedCases"] for manifest_job in data["worker"]["runManifest"]["jobs"] if manifest_job["jobId"] == job["id"]), 0)
        meta = fallback_meta.get(job["id"], {})
        cached = cached_by_job.get(job["id"], 0)
        rows.append(
            {
                "jobId": job["id"],
                "title": job["title"],
                "wave": wave_for_priority(job["priority"]),
                "priority": job["priority"],
                "bench": job["bench"],
                "benchPage": job["page"],
                "system": coverage.get("system", meta.get("system", job["bench"])),
                "theme": coverage.get("theme", meta.get("theme", "Colab GPU evidence")),
                "gpuClass": job["gpuClass"],
                "models": job["models"],
                "runner": runner["runner"],
                "execution": runner["execution"],
                "strictMode": runner["strictMode"],
                "expectedCases": expected,
                "cachedResults": cached,
                "command": f"run_job('{job['id']}', mode='live-colab', strict=True)",
                "promotionCheck": f"python3 scripts/stage_cvpr_live_colab_export.py --job {job['id']}",
                "status": "ready" if cached == expected and expected > 0 else "block",
            }
        )
    return rows


def build_waves(plan_rows):
    waves = []
    for wave in ("wave-1-grounding-fidelity-provenance", "wave-2-temporal-clinical-serving", "wave-3-generation-driving-3d"):
        rows = [row for row in plan_rows if row["wave"] == wave]
        waves.append(
            {
                "wave": wave,
                "jobs": len(rows),
                "expectedResults": sum(row["expectedCases"] for row in rows),
                "cachedResults": sum(row["cachedResults"] for row in rows),
                "gpuClasses": sorted({row["gpuClass"] for row in rows}),
                "status": "ready" if rows and all(row["status"] == "ready" for row in rows) else "block",
            }
        )
    return waves


def summarize(data, plan_rows, waves):
    summary = {
        "planner": "cvpr-colab-execution-planner",
        "status": "ready",
        "runtimePlane": data["worker"]["summary"]["runtimePlane"],
        "jobs": len(plan_rows),
        "waves": len(waves),
        "expectedResults": sum(row["expectedCases"] for row in plan_rows),
        "cachedResults": sum(row["cachedResults"] for row in plan_rows),
        "colabCoveredBenches": len(plan_rows),
        "systemEvidenceCoveredBenches": data["coverage"]["summary"]["systemEvidenceCoveredBenches"],
        "missingRuntimeEvidence": data["coverage"]["summary"]["missingColabEvidence"],
        "releaseStatus": data["releaseBundle"]["summary"]["status"],
        "operationsStatus": data["operations"]["summary"]["status"],
        "notebook": data["worker"]["summary"]["notebook"],
        "runbook": data["worker"]["summary"]["runbook"],
        "liveExportArtifact": data["worker"]["summary"]["liveExportArtifact"],
        "intakeGate": data["worker"]["summary"]["liveIntakeGate"],
        "fullStackValidator": data["worker"]["summary"]["fullStackValidator"],
    }
    gate = (
        summary["runtimePlane"] == "google-colab-pro-plus"
        and summary["jobs"] == len(plan_rows)
        and summary["waves"] == 3
        and summary["expectedResults"] > 0
        and summary["cachedResults"] == summary["expectedResults"]
        and summary["colabCoveredBenches"] == summary["jobs"]
        and summary["missingRuntimeEvidence"] == 0
        and summary["releaseStatus"] == "release"
        and summary["operationsStatus"] == "ready"
        and all(row["status"] == "ready" for row in plan_rows)
        and all(wave["status"] == "ready" for wave in waves)
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, summary, plan_rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const plannerInput = " + json.dumps(data, indent=2) + ";\n"
        "export const planRows = " + json.dumps(plan_rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Colab Execution Planner\n\nExecution-wave planner for running CVPR demo benches on Google Colab Pro+ and promoting the exported results back into the local release stack.\n",
    )


def build_registry(data, summary, plan_rows, waves):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "waves": waves,
                "planRows": plan_rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, waves, plan_rows):
    stats = [
        ("Status", summary["status"]),
        ("Runtime", summary["runtimePlane"]),
        ("Jobs", summary["jobs"]),
        ("Waves", summary["waves"]),
        ("Expected results", summary["expectedResults"]),
        ("Cached results", summary["cachedResults"]),
        ("Missing evidence", summary["missingRuntimeEvidence"]),
        ("Release", summary["releaseStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    wave_rows = "".join(
        f"""<tr><td>{esc(row['wave'])}</td><td>{row['jobs']}</td><td>{row['expectedResults']}</td><td>{esc(', '.join(row['gpuClasses']))}</td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in waves
    )
    plan_rows_html = "".join(
        f"""<tr><td>{row['priority']}</td><td>{esc(row['jobId'])}</td><td><a href="{esc(row['benchPage'])}">{esc(row['bench'])}</a></td><td>{esc(row['system'])}</td><td>{esc(row['gpuClass'])}</td><td>{row['expectedCases']}</td><td><code>{esc(row['command'])}</code></td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in plan_rows
    )
    command_rows = "".join(
        f"<code>{esc(command)}</code>"
        for command in (
            f"Open {summary['notebook']} in Google Colab Pro+",
            "Run waves in priority order: wave 1, wave 2, wave 3",
            f"Download cvpr_gpu_results.json to {summary['liveExportArtifact']}",
            f"python3 {summary['intakeGate']} --export {summary['liveExportArtifact']}",
            f"python3 {summary['intakeGate']} --export {summary['liveExportArtifact']} --promote",
            f"python3 {summary['fullStackValidator']}",
        )
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Colab Execution Planner</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1220px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:92ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.ready,.release{{color:var(--good)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · Colab Pro+ execution planner</div><h1>CVPR Colab Execution Planner</h1><p>Concrete execution waves for running the ten GPU-backed CVPR bench families in Colab Pro+, exporting forty live results, and promoting them through the local release gates.</p><nav><a href="index.html">all themes</a><a href="cvpr-colab-operations-dashboard.html">operations</a><a href="cvpr-production-coverage-audit.html">coverage audit</a><a href="cvpr-colab-release-bundle.html">release bundle</a><a href="analysis/cvpr_colab_execution_planner/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Operator Commands</h2>{command_rows}</section><section class="panel"><h2>Execution Waves</h2><table><thead><tr><th>Wave</th><th>Jobs</th><th>Expected Results</th><th>GPU Classes</th><th>Status</th></tr></thead><tbody>{wave_rows}</tbody></table></section><section class="panel"><h2>Job Plan</h2><table><thead><tr><th>Priority</th><th>Job</th><th>Bench</th><th>System</th><th>GPU Class</th><th>Cases</th><th>Notebook Call</th><th>Status</th></tr></thead><tbody>{plan_rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_colab_execution_planner.py · tested package under source-code/learning/cvpr-colab-execution-planner</div></footer></body></html>"""
    write(ROOT / "cvpr-colab-execution-planner.html", page)


def main():
    data = load_input()
    plan_rows = build_plan_rows(data)
    waves = build_waves(plan_rows)
    summary = summarize(data, plan_rows, waves)
    build_package(data, summary, plan_rows)
    build_registry(data, summary, plan_rows, waves)
    build_page(summary, waves, plan_rows)
    print(
        f"wrote cvpr-colab-execution-planner.html: {summary['waves']} waves, "
        f"{summary['expectedResults']} expected results, status {summary['status']}"
    )


if __name__ == "__main__":
    main()

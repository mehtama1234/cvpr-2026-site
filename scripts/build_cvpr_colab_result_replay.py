"""Build the CVPR Colab Pro+ result replay matrix."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-colab-result-replay"
ANALYSIS = ROOT / "analysis/cvpr_colab_result_replay"

SOURCES = {
    "worker": ROOT / "analysis/cvpr_colab_gpu_worker/registry.json",
    "planner": ROOT / "analysis/cvpr_colab_execution_planner/registry.json",
    "cockpit": ROOT / "analysis/cvpr_demo_evidence_cockpit/registry.json",
    "releaseBrief": ROOT / "analysis/cvpr_production_release_brief/registry.json",
}

CORE = """export function validateReplayResult(result, notebook) {
  const required = ["jobId", "caseId", "mode", "createdAt", "model", "inputs", "outputs", "metrics", "provenance"];
  const missing = required.filter((field) => !(field in result));
  const readiness = result.metrics?.readiness;
  const validReadiness = typeof readiness === "number" && readiness >= 0 && readiness <= 100;
  const validProvenance = result.provenance?.runtime === "google-colab-pro-plus" &&
    result.provenance?.accelerator &&
    result.provenance?.accelerator !== "CPU" &&
    result.provenance?.notebook === notebook;
  return {
    ok: missing.length === 0 && validReadiness && validProvenance,
    missing,
    validReadiness,
    validProvenance
  };
}

export function replayGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.jobs <= 0) return "block";
  if (summary.replayRows !== summary.jobs) return "block";
  if (summary.results <= 0) return "block";
  if (summary.validResults !== summary.results) return "block";
  if (summary.stageDemosCovered < 30) return "block";
  if (summary.cachedSystemEvidenceDemos !== 3) return "block";
  if (summary.minReadiness <= 0) return "block";
  if (summary.provenanceIssues !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  return "ready";
}

export function summarizeReplay(input) {
  const rows = input.replayRows || [];
  const results = rows.reduce((sum, row) => sum + row.results, 0);
  const valid = rows.reduce((sum, row) => sum + row.validResults, 0);
  const minReadiness = Math.min(...rows.map((row) => row.minReadiness));
  const summary = {
    replay: "cvpr-colab-result-replay",
    runtimePlane: input.worker.summary.runtimePlane,
    jobs: input.planner.summary.jobs,
    replayRows: rows.length,
    results,
    validResults: valid,
    stageDemosCovered: rows.reduce((sum, row) => sum + row.stageDemos, 0),
    cachedSystemEvidenceDemos: input.cockpit.summary.systemEvidenceStageDemos,
    minReadiness,
    provenanceIssues: rows.reduce((sum, row) => sum + row.provenanceIssues, 0),
    releaseGate: input.releaseBrief.summary.gate
  };
  return { ...summary, status: replayGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { replayInput, replayRows, summary } from "../src/fixtures.js";
import { replayGate, summarizeReplay, validateReplayResult } from "../src/core.js";

const derived = summarizeReplay({ ...replayInput, replayRows });
assert.equal(derived.status, "ready");
assert.equal(replayGate(summary), "ready");
assert.equal(summary.runtimePlane, "google-colab-pro-plus");
assert.ok(summary.jobs > 0);
assert.equal(summary.replayRows, summary.jobs);
assert.ok(summary.results > 0);
assert.equal(summary.validResults, summary.results);
assert.ok(summary.stageDemosCovered >= 30);
assert.equal(summary.cachedSystemEvidenceDemos, 3);
assert.equal(summary.provenanceIssues, 0);
assert.equal(summary.releaseGate, "release");
assert.ok(summary.minReadiness > 0);
assert.equal(validateReplayResult(replayInput.worker.cachedResults[0], summary.notebook).ok, true);
console.log("ok cvpr-colab-result-replay:", summary.results, "results,", summary.stageDemosCovered, "stage demos");
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


def validate_result(result, notebook):
    required = ("jobId", "caseId", "mode", "createdAt", "model", "inputs", "outputs", "metrics", "provenance")
    missing = [field for field in required if field not in result]
    readiness = result.get("metrics", {}).get("readiness")
    valid_readiness = isinstance(readiness, (int, float)) and 0 <= readiness <= 100
    provenance = result.get("provenance", {})
    valid_provenance = (
        provenance.get("runtime") == "google-colab-pro-plus"
        and provenance.get("accelerator")
        and provenance.get("accelerator") != "CPU"
        and provenance.get("notebook") == notebook
    )
    return {
        "ok": not missing and valid_readiness and valid_provenance,
        "missing": missing,
        "validReadiness": valid_readiness,
        "validProvenance": valid_provenance,
    }


def build_replay_rows(data):
    notebook = data["worker"]["summary"]["notebook"]
    results_by_job = {}
    for result in data["worker"]["cachedResults"]:
        results_by_job.setdefault(result["jobId"], []).append(result)
    demos_by_job = {}
    for demo in data["cockpit"]["demoRows"]:
        if demo["colabJobId"]:
            demos_by_job.setdefault(demo["colabJobId"], []).append(demo)
    rows = []
    for plan in data["planner"]["planRows"]:
        results = sorted(results_by_job.get(plan["jobId"], []), key=lambda row: row["caseId"])
        validations = [validate_result(result, notebook) for result in results]
        readiness_values = [result["metrics"]["readiness"] for result in results]
        output_fields = sorted({field for result in results for field in result["outputs"].keys()})
        input_fields = sorted({field for result in results for field in result["inputs"].keys()})
        rows.append(
            {
                "jobId": plan["jobId"],
                "wave": plan["wave"],
                "bench": plan["bench"],
                "benchPage": plan["benchPage"],
                "system": plan["system"],
                "theme": plan["theme"],
                "runner": plan["runner"],
                "results": len(results),
                "expectedResults": plan["expectedCases"],
                "validResults": len([row for row in validations if row["ok"]]),
                "stageDemos": len(demos_by_job.get(plan["jobId"], [])),
                "caseIds": [result["caseId"] for result in results],
                "minReadiness": round(min(readiness_values), 2),
                "avgReadiness": round(sum(readiness_values) / len(readiness_values), 2),
                "maxReadiness": round(max(readiness_values), 2),
                "inputFields": input_fields,
                "outputFields": output_fields,
                "provenanceIssues": len([row for row in validations if not row["validProvenance"]]),
                "missingFields": sorted({field for validation in validations for field in validation["missing"]}),
                "promotionCommand": f"python3 scripts/stage_cvpr_live_colab_export.py --job {plan['jobId']} --promote",
                "status": "ready" if len(results) == plan["expectedCases"] and all(row["ok"] for row in validations) else "block",
            }
        )
    return rows


def summarize(data, replay_rows):
    summary = {
        "replay": "cvpr-colab-result-replay",
        "status": "ready",
        "runtimePlane": data["worker"]["summary"]["runtimePlane"],
        "jobs": data["planner"]["summary"]["jobs"],
        "replayRows": len(replay_rows),
        "results": sum(row["results"] for row in replay_rows),
        "validResults": sum(row["validResults"] for row in replay_rows),
        "stageDemosCovered": sum(row["stageDemos"] for row in replay_rows),
        "cachedSystemEvidenceDemos": data["cockpit"]["summary"]["systemEvidenceStageDemos"],
        "minReadiness": min(row["minReadiness"] for row in replay_rows),
        "avgReadiness": round(sum(row["avgReadiness"] for row in replay_rows) / len(replay_rows), 2),
        "provenanceIssues": sum(row["provenanceIssues"] for row in replay_rows),
        "releaseGate": data["releaseBrief"]["summary"]["gate"],
        "notebook": data["worker"]["summary"]["notebook"],
        "liveExportArtifact": data["worker"]["summary"]["liveExportArtifact"],
        "fullStackValidator": data["worker"]["summary"]["fullStackValidator"],
    }
    gate = (
        summary["runtimePlane"] == "google-colab-pro-plus"
        and summary["jobs"] == len(replay_rows)
        and summary["replayRows"] == len(replay_rows)
        and summary["results"] > 0
        and summary["validResults"] == summary["results"]
        and summary["stageDemosCovered"] >= 30
        and summary["cachedSystemEvidenceDemos"] == 3
        and summary["minReadiness"] > 0
        and summary["provenanceIssues"] == 0
        and summary["releaseGate"] == "release"
        and all(row["status"] == "ready" for row in replay_rows)
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, summary, replay_rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const replayInput = " + json.dumps(data, indent=2) + ";\n"
        "export const replayRows = " + json.dumps(replay_rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Colab Result Replay\n\nReplay matrix for inspecting cached Colab Pro+ payloads, provenance, readiness metrics, and demo coverage before promoting live exports.\n",
    )


def build_registry(summary, replay_rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "replayRows": replay_rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, replay_rows):
    stats = [
        ("Status", summary["status"]),
        ("Runtime", summary["runtimePlane"]),
        ("Jobs", summary["jobs"]),
        ("Results", f"{summary['validResults']}/{summary['results']}"),
        ("Stage demos", summary["stageDemosCovered"]),
        ("Cached-system demos", summary["cachedSystemEvidenceDemos"]),
        ("Min readiness", summary["minReadiness"]),
        ("Provenance issues", summary["provenanceIssues"]),
    ]
    stat_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['jobId'])}</td><td>{esc(row['wave'])}</td><td><a href="{esc(row['benchPage'])}">{esc(row['bench'])}</a></td><td>{row['stageDemos']}</td><td>{row['validResults']}/{row['results']}</td><td>{row['minReadiness']} / {row['avgReadiness']} / {row['maxReadiness']}</td><td>{esc(', '.join(row['caseIds']))}</td><td>{esc(', '.join(row['outputFields']))}</td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in replay_rows
    )
    command_rows = "".join(
        f"<code>{esc(command)}</code>"
        for command in (
            f"Open {summary['notebook']} in Google Colab Pro+",
            f"Download live results to {summary['liveExportArtifact']}",
            "python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
            "python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json --promote",
            f"python3 {summary['fullStackValidator']}",
        )
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Colab Result Replay</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1260px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.ready,.release{{color:var(--good)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · Colab Pro+ result replay</div><h1>CVPR Colab Result Replay</h1><p>Replay matrix for the forty cached Colab Pro+ outputs, grouped by GPU job and tied back to stage demos, readiness metrics, output payloads, and promotion commands.</p><nav><a href="index.html">all themes</a><a href="cvpr-colab-execution-planner.html">execution planner</a><a href="cvpr-demo-evidence-cockpit.html">demo cockpit</a><a href="cvpr-colab-release-bundle.html">release bundle</a><a href="analysis/cvpr_colab_result_replay/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stat_html}</section><section class="panel"><h2>Replay Commands</h2>{command_rows}</section><section class="panel"><h2>Result Matrix</h2><table><thead><tr><th>Job</th><th>Wave</th><th>Bench</th><th>Demos</th><th>Results</th><th>Readiness min / avg / max</th><th>Cases</th><th>Output Fields</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_colab_result_replay.py · tested package under source-code/learning/cvpr-colab-result-replay</div></footer></body></html>"""
    write(ROOT / "cvpr-colab-result-replay.html", page)


def main():
    data = load_input()
    replay_rows = build_replay_rows(data)
    summary = summarize(data, replay_rows)
    build_package(data, summary, replay_rows)
    build_registry(summary, replay_rows)
    build_page(summary, replay_rows)
    print(
        f"wrote cvpr-colab-result-replay.html: {summary['validResults']}/{summary['results']} results, "
        f"{summary['stageDemosCovered']} demos, status {summary['status']}"
    )


if __name__ == "__main__":
    main()

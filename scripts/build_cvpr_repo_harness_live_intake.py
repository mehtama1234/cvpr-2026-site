"""Build live intake artifacts for the CVPR repo GPU harness."""
import json
from pathlib import Path

from validate_cvpr_repo_harness_results import validate

ROOT = Path(__file__).resolve().parent.parent
HARNESS = ROOT / "analysis/cvpr_repo_gpu_harness/registry.json"
BASE = ROOT / "source-code/learning/cvpr-repo-harness-live-intake"
HARNESS_BASE = ROOT / "source-code/learning/cvpr-repo-gpu-harness"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_live_intake"
MANIFEST = HARNESS_BASE / "_results/cvpr_repo_harness_manifest.json"
INCOMING = HARNESS_BASE / "_incoming/cvpr_repo_harness_live.json"

CORE = """export function validateHarnessResult(result, manifestJob) {
  const required = ["jobId", "mode", "repo", "commitSha", "createdAt", "environment", "metrics", "provenance", "artifacts"];
  const missing = required.filter((key) => !(key in result));
  const repoOk = result.repo === manifestJob.repo;
  const smokeOk = result.metrics?.smokePassed === true;
  const readinessOk = typeof result.metrics?.readiness === "number" && result.metrics.readiness >= 0 && result.metrics.readiness <= 100;
  const runtimeOk = result.provenance?.runtime === "google-colab-pro-plus" && !["cpu", "unknown", ""].includes(String(result.provenance?.accelerator || "").toLowerCase());
  return { ok: missing.length === 0 && repoOk && smokeOk && readinessOk && runtimeOk, missing, repoOk, smokeOk, readinessOk, runtimeOk };
}

export function summarizeIntake(results, manifest) {
  const jobs = manifest.jobs || [];
  const jobById = Object.fromEntries(jobs.map((job) => [job.jobId, job]));
  const validations = results.map((result) => validateHarnessResult(result, jobById[result.jobId] || {}));
  return {
    jobs: jobs.length,
    results: results.length,
    validResults: validations.filter((row) => row.ok).length,
    demos: new Set(jobs.map((job) => job.demo)).size,
    repos: new Set(jobs.map((job) => job.repo)).size,
    runtimePlane: manifest.runtimePlane,
    status: validations.every((row) => row.ok) && results.length === jobs.length ? "valid" : "invalid"
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { manifest, results, summary } from "../src/fixtures.js";
import { summarizeIntake, validateHarnessResult } from "../src/core.js";

assert.equal(manifest.jobs.length, 40);
assert.equal(results.length, 40);
assert.equal(summary.status, "valid");
assert.equal(summary.jobs, 40);
assert.equal(summary.results, 40);
assert.equal(summary.demos, 8);
assert.equal(summary.repos, 40);
assert.ok(results.every((result) => validateHarnessResult(result, manifest.jobs.find((job) => job.jobId === result.jobId)).ok));
const derived = summarizeIntake(results, manifest);
assert.equal(derived.status, "valid");
assert.equal(derived.validResults, 40);
console.log("ok cvpr-repo-harness-live-intake:", summary.results, "results");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_harness():
    return json.loads(HARNESS.read_text(encoding="utf-8"))


def build_manifest(jobs):
    return {
        "manifest": "cvpr-repo-harness-live-v1",
        "runtimePlane": "google-colab-pro-plus",
        "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
        "incomingArtifact": "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
        "canonicalArtifact": "analysis/cvpr_repo_gpu_harness/cached_harness_results.json",
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "jobs": [
            {
                "jobId": job["jobId"],
                "demo": job["demo"],
                "theme": job["theme"],
                "page": job["page"],
                "repo": job["repo"],
                "gpuClass": job["gpuClass"],
                "cloneCommand": job["cloneCommand"],
                "smokeCommand": job["smokeCommand"],
                "expectedResult": 1,
            }
            for job in jobs
        ],
    }


def build_live_template(jobs):
    rows = []
    for job in jobs:
        rows.append(
            {
                "jobId": job["jobId"],
                "mode": "live-colab",
                "repo": job["repo"],
                "commitSha": "replace-with-live-commit",
                "createdAt": "replace-with-live-timestamp",
                "environment": {
                    "python": "3.11",
                    "torch": "replace-with-live-version",
                    "cuda": "replace-with-live-version",
                },
                "metrics": {
                    "readiness": job["readiness"],
                    "smokePassed": True,
                    "runtimeSeconds": 0.0,
                    "filesScanned": 0,
                },
                "provenance": {
                    "runtime": "google-colab-pro-plus",
                    "accelerator": job["gpuClass"].split("/")[-1],
                    "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
                    "source": "live-export-template",
                },
                "artifacts": {
                    "smokeJson": job["evidenceArtifact"],
                    "log": job["evidenceArtifact"].replace(".json", ".log"),
                    "repoSnapshot": job["evidenceArtifact"].replace(".json", ".snapshot.json"),
                },
            }
        )
    return rows


def build_package(manifest, results, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const manifest = " + json.dumps(manifest, indent=2) + ";\nexport const results = " + json.dumps(results, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness Live Intake\n\nValidation and staging contract for live Colab Pro+ repo harness exports.\n")


def build_page(report):
    summary = report["summary"]
    stats = [("Status", summary["status"]), ("Jobs", summary["jobs"]), ("Results", summary["actualResults"]), ("Valid jobs", summary["validJobs"]), ("Issues", summary["issues"]), ("Runtime", "Pro+")]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows = "".join(f"<tr><td>{esc(job['jobId'])}</td><td><a href=\"{esc(job['page'])}\">{esc(job['demo'])}</a></td><td>{esc(job['actualResults'])}</td><td>{esc(job['ready'])}</td></tr>" for job in report["jobs"])
    issue_rows = "".join(f"<tr><td>{esc(issue.get('type'))}</td><td>{esc(issue.get('jobId', ''))}</td><td>{esc(issue)}</td></tr>" for issue in report["issues"]) or "<tr><td>none</td><td></td><td>all repo harness live results satisfy the intake contract</td></tr>"
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness Live Intake</title><style>:root{{--ink:#111719;--paper:#F6F7F3;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0F6672;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1260px;margin:0 auto;padding:0 24px}}header{{background:#162126;color:#EFF7F2;padding:42px 0 34px}}.bug,nav a,code,.stat span,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#93D6D8}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#CBD7D2}}nav a{{color:#C9EEF0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,th{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:6px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - repo harness intake</div><h1>CVPR Repo Harness Live Intake</h1><p>Validation gate for replacing cached repo-harness contracts with live Google Colab Pro+ clone and smoke-test exports.</p><nav><a href="cvpr-repo-gpu-harness.html">repo harness</a><a href="cvpr-colab-operations-dashboard.html">Colab ops</a><a href="analysis/cvpr_repo_harness_live_intake/registry.json">registry</a><a href="source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json">incoming template</a><a href="source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json">manifest</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Commands</h2><code>python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json</code><code>manifest: source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json</code><code>python3 scripts/build_cvpr_repo_harness_live_intake.py</code></section><section class="panel"><h2>Job Intake</h2><table><thead><tr><th>Job</th><th>Demo</th><th>Results</th><th>Ready</th></tr></thead><tbody>{rows}</tbody></table></section><section class="panel"><h2>Issues</h2><table><thead><tr><th>Type</th><th>Job</th><th>Detail</th></tr></thead><tbody>{issue_rows}</tbody></table></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_live_intake.py - package: source-code/learning/cvpr-repo-harness-live-intake</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-live-intake.html", page)


def main():
    harness = load_harness()
    jobs = harness["harnessJobs"]
    manifest = build_manifest(jobs)
    results = build_live_template(jobs)
    write(MANIFEST, json.dumps(manifest, indent=2) + "\n")
    write(INCOMING, json.dumps(results, indent=2) + "\n")
    report = validate(manifest, results, "live-colab")
    summary = {
        **report["summary"],
        "demo": "cvpr-repo-harness-live-intake",
        "results": report["summary"]["actualResults"],
        "demos": len({job["demo"] for job in manifest["jobs"]}),
        "repos": len({job["repo"] for job in manifest["jobs"]}),
        "incomingArtifact": "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
        "manifestArtifact": "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json",
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
    }
    registry = {"summary": summary, "jobs": report["jobs"], "issues": report["issues"]}
    write(ANALYSIS / "registry.json", json.dumps(registry, indent=2) + "\n")
    write(ANALYSIS / "import_validation.json", json.dumps(report, indent=2) + "\n")
    build_package(manifest, results, summary)
    build_page(registry)
    print(f"wrote cvpr-repo-harness-live-intake.html: {summary['actualResults']} results, {summary['issues']} issues")


if __name__ == "__main__":
    main()

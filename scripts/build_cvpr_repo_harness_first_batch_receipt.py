"""Build first-batch receipt for the CVPR repo harness worker."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json"
INTAKE = ROOT / "analysis/cvpr_repo_harness_live_intake/registry.json"
WORKER = ROOT / "analysis/cvpr_repo_harness_worker/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_first_batch_receipt"
BASE = ROOT / "source-code/learning/cvpr-repo-harness-first-batch-receipt"

CORE = """export function batchJobs(manifest, start = 0, limit = 5) {
  return manifest.jobs.slice(start, start + limit);
}

export function receiptReady(summary) {
  return summary.receipt === "cvpr-repo-harness-first-batch-receipt" &&
    summary.batchJobs === 5 &&
    summary.theme === "frontier" &&
    summary.runtimePlane === "google-colab-pro-plus" &&
    summary.validator === "scripts/validate_cvpr_repo_harness_results.py";
}

export function summarizeReceipt(manifest, intake, start = 0, limit = 5) {
  const jobs = batchJobs(manifest, start, limit);
  return {
    receipt: "cvpr-repo-harness-first-batch-receipt",
    batchStart: start,
    batchLimit: limit,
    batchJobs: jobs.length,
    theme: jobs[0]?.theme,
    repos: new Set(jobs.map((job) => job.repo)).size,
    runtimePlane: manifest.runtimePlane,
    intakeStatus: intake.status,
    validator: manifest.validator,
    status: jobs.length === limit && intake.status === "valid" ? "ready" : "block"
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { firstBatch, manifest, summary } from "../src/fixtures.js";
import { batchJobs, receiptReady, summarizeReceipt } from "../src/core.js";

assert.equal(firstBatch.length, 5);
assert.equal(firstBatch.every((job) => job.theme === "frontier"), true);
assert.equal(firstBatch.every((job) => job.repo.startsWith("http")), true);
assert.equal(batchJobs(manifest, 0, 5).length, 5);
assert.equal(batchJobs(manifest, 5, 5)[0].theme, "threed");
assert.equal(receiptReady(summary), true);
const derived = summarizeReceipt(manifest, { status: "valid" }, 0, 5);
assert.equal(derived.status, "ready");
assert.equal(derived.repos, 5);
console.log("ok cvpr-repo-harness-first-batch-receipt:", summary.batchJobs, "jobs");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_summary(manifest, intake, worker, first_batch):
    return {
        "receipt": "cvpr-repo-harness-first-batch-receipt",
        "status": "ready" if len(first_batch) == 5 and intake["summary"]["status"] == "valid" else "block",
        "batchStart": 0,
        "batchLimit": 5,
        "batchJobs": len(first_batch),
        "theme": first_batch[0]["theme"],
        "repos": len({job["repo"] for job in first_batch}),
        "runtimePlane": manifest["runtimePlane"],
        "worker": worker["summary"]["worker"],
        "notebook": worker["summary"]["notebook"],
        "runner": worker["summary"]["runner"],
        "incomingArtifact": manifest["incomingArtifact"],
        "intakeStatus": intake["summary"]["status"],
        "validator": manifest["validator"],
        "runCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 0 --limit 5",
        "dryRunCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 0 --limit 5 --dry-run",
        "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(manifest, first_batch, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const manifest = " + json.dumps(manifest, indent=2) + ";\nexport const firstBatch = " + json.dumps(first_batch, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness First Batch Receipt\n\nReceipt and command bundle for the first five frontier repo harness jobs.\n")


def build_registry(first_batch, summary):
    rows = []
    for job in first_batch:
        rows.append(
            {
                "jobId": job["jobId"],
                "theme": job["theme"],
                "demo": job["demo"],
                "page": job["page"],
                "repo": job["repo"],
                "cloneCommand": job["cloneCommand"],
                "smokeCommand": job["smokeCommand"],
                "expectedArtifacts": ["smokeJson", "log", "repoSnapshot"],
            }
        )
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "firstBatch": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [("Status", summary["status"]), ("Jobs", summary["batchJobs"]), ("Repos", summary["repos"]), ("Theme", summary["theme"]), ("Intake", summary["intakeStatus"]), ("Runtime", "Pro+")]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    row_html = "".join(
        f"""<article class="job"><div class="meta">{esc(row['jobId'])}</div><h2>{esc(row['demo'])}</h2><p><a href="{esc(row['repo'])}">{esc(row['repo'])}</a></p><p><a href="{esc(row['page'])}">{esc(row['page'])}</a></p><code>{esc(row['cloneCommand'])}</code><code>{esc(row['smokeCommand'])}</code></article>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness First Batch Receipt</title><style>:root{{--ink:#111719;--paper:#F6F7F3;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0F6672;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1220px;margin:0 auto;padding:0 24px}}header{{background:#162126;color:#EFF7F2;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#93D6D8}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#CBD7D2}}nav a{{color:#C9EEF0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel,.job{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:16px 0}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.job{{padding:16px}}.job h2{{font-size:18px;margin:4px 0 8px}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:6px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - first repo batch</div><h1>Repo Harness First Batch Receipt</h1><p>Frozen command and evidence receipt for the first Colab Pro+ repo harness batch: the five frontier sensor repos.</p><nav><a href="cvpr-repo-harness-worker.html">worker</a><a href="cvpr-repo-harness-live-intake.html">live intake</a><a href="analysis/cvpr_repo_harness_first_batch_receipt/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Commands</h2><code>{esc(summary['runCommand'])}</code><code>{esc(summary['dryRunCommand'])}</code><code>{esc(summary['validationCommand'])}</code></section><section class="grid">{row_html}</section></main><footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_first_batch_receipt.py - package: source-code/learning/cvpr-repo-harness-first-batch-receipt</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-first-batch-receipt.html", page)


def main():
    manifest = load_json(MANIFEST)
    intake = load_json(INTAKE)
    worker = load_json(WORKER)
    first_batch = manifest["jobs"][:5]
    summary = build_summary(manifest, intake, worker, first_batch)
    build_package(manifest, first_batch, summary)
    build_registry(first_batch, summary)
    rows = load_json(ANALYSIS / "registry.json")["firstBatch"]
    build_page(rows, summary)
    print(f"wrote cvpr-repo-harness-first-batch-receipt.html: {summary['batchJobs']} jobs, status {summary['status']}")


if __name__ == "__main__":
    main()

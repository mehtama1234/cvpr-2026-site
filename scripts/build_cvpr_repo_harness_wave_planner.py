"""Build a wave planner for all CVPR repo harness batches."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json"
WORKER = ROOT / "analysis/cvpr_repo_harness_worker/registry.json"
INTAKE = ROOT / "analysis/cvpr_repo_harness_live_intake/registry.json"
FIRST_RECEIPT = ROOT / "analysis/cvpr_repo_harness_first_batch_receipt/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_wave_planner"
BASE = ROOT / "source-code/learning/cvpr-repo-harness-wave-planner"

CORE = """export function buildWaves(manifest, batchSize = 5) {
  const waves = [];
  for (let start = 0; start < manifest.jobs.length; start += batchSize) {
    const jobs = manifest.jobs.slice(start, start + batchSize);
    waves.push({
      wave: waves.length,
      start,
      limit: batchSize,
      theme: jobs[0]?.theme,
      jobs: jobs.length,
      repos: new Set(jobs.map((job) => job.repo)).size,
      runCommand: `python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start ${start} --limit ${batchSize}`,
      dryRunCommand: `python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start ${start} --limit ${batchSize} --dry-run`
    });
  }
  return waves;
}

export function waveReady(wave) {
  return wave.jobs === 5 &&
    wave.repos === 5 &&
    wave.runCommand.includes(`--start ${wave.start} --limit ${wave.limit}`) &&
    wave.dryRunCommand.endsWith("--dry-run");
}

export function summarizeWaves(waves) {
  return {
    waves: waves.length,
    jobs: waves.reduce((sum, wave) => sum + wave.jobs, 0),
    repos: waves.reduce((sum, wave) => sum + wave.repos, 0),
    readyWaves: waves.filter(waveReady).length,
    themes: new Set(waves.map((wave) => wave.theme)).size,
    status: waves.length === 8 && waves.every(waveReady) ? "ready" : "block"
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { manifest, summary, waves } from "../src/fixtures.js";
import { buildWaves, summarizeWaves, waveReady } from "../src/core.js";

assert.equal(waves.length, 8);
assert.equal(waves.every(waveReady), true);
assert.equal(waves[0].theme, "frontier");
assert.equal(waves[1].theme, "threed");
assert.equal(waves[7].theme, "learning");
assert.equal(waves[7].start, 35);
assert.equal(buildWaves(manifest, 5).length, 8);
const derived = summarizeWaves(waves);
assert.equal(derived.status, "ready");
assert.equal(derived.jobs, 40);
assert.equal(summary.status, "ready");
assert.equal(summary.firstWaveReceipt, "cvpr-repo-harness-first-batch-receipt");
console.log("ok cvpr-repo-harness-wave-planner:", summary.waves, "waves");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_waves(manifest, batch_size=5):
    waves = []
    for start in range(0, len(manifest["jobs"]), batch_size):
        jobs = manifest["jobs"][start : start + batch_size]
        wave = {
            "wave": len(waves),
            "start": start,
            "limit": batch_size,
            "theme": jobs[0]["theme"],
            "jobs": len(jobs),
            "repos": len({job["repo"] for job in jobs}),
            "jobIds": [job["jobId"] for job in jobs],
            "pages": sorted({job["page"] for job in jobs}),
            "runCommand": f"python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start {start} --limit {batch_size}",
            "dryRunCommand": f"python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start {start} --limit {batch_size} --dry-run",
            "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
            "status": "ready" if len(jobs) == batch_size else "block",
        }
        waves.append(wave)
    return waves


def summarize(manifest, waves, worker, intake, first_receipt):
    return {
        "planner": "cvpr-repo-harness-wave-planner",
        "status": "ready" if len(waves) == 8 and all(wave["status"] == "ready" for wave in waves) else "block",
        "runtimePlane": manifest["runtimePlane"],
        "waves": len(waves),
        "jobs": sum(wave["jobs"] for wave in waves),
        "repos": sum(wave["repos"] for wave in waves),
        "themes": len({wave["theme"] for wave in waves}),
        "batchSize": 5,
        "worker": worker["summary"]["worker"],
        "intakeStatus": intake["summary"]["status"],
        "firstWaveReceipt": first_receipt["summary"]["receipt"],
        "notebook": manifest["notebook"],
        "validator": manifest["validator"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(manifest, waves, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const manifest = " + json.dumps(manifest, indent=2) + ";\nexport const waves = " + json.dumps(waves, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness Wave Planner\n\nEight-wave execution plan for running all 40 repo harness jobs in Colab Pro+ batches.\n")


def build_registry(waves, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "waves": waves}, indent=2) + "\n")


def build_page(waves, summary):
    stats = [("Status", summary["status"]), ("Waves", summary["waves"]), ("Jobs", summary["jobs"]), ("Repos", summary["repos"]), ("Themes", summary["themes"]), ("Batch", summary["batchSize"])]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    wave_html = ""
    for wave in waves:
        jobs = "".join(f"<li>{esc(job)}</li>" for job in wave["jobIds"])
        wave_html += f"""<article class="wave"><div class="meta">wave {wave['wave']} / {esc(wave['theme'])}</div><h2>{esc(wave['theme'])}</h2><p>{wave['jobs']} jobs, {wave['repos']} repos</p><code>{esc(wave['runCommand'])}</code><code>{esc(wave['dryRunCommand'])}</code><code>{esc(wave['validationCommand'])}</code><ul>{jobs}</ul></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness Wave Planner</title><style>:root{{--ink:#111719;--paper:#F6F7F3;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0F6672;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:#162126;color:#EFF7F2;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#93D6D8}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#CBD7D2}}nav a{{color:#C9EEF0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.wave{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.wave{{padding:16px}}.wave h2{{font-size:20px;margin:4px 0 8px}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:6px 0}}li{{font-size:12px;margin:4px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - repo harness waves</div><h1>Repo Harness Wave Planner</h1><p>Eight Colab Pro+ execution waves for all 40 selected CVPR paper repos, each with run, dry-run, and validation commands.</p><nav><a href="cvpr-repo-harness-worker.html">worker</a><a href="cvpr-repo-harness-first-batch-receipt.html">first receipt</a><a href="cvpr-repo-harness-live-intake.html">live intake</a><a href="analysis/cvpr_repo_harness_wave_planner/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{wave_html}</section></main><footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_wave_planner.py - package: source-code/learning/cvpr-repo-harness-wave-planner</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-wave-planner.html", page)


def main():
    manifest = load_json(MANIFEST)
    worker = load_json(WORKER)
    intake = load_json(INTAKE)
    first_receipt = load_json(FIRST_RECEIPT)
    waves = build_waves(manifest)
    summary = summarize(manifest, waves, worker, intake, first_receipt)
    build_package(manifest, waves, summary)
    build_registry(waves, summary)
    build_page(waves, summary)
    print(f"wrote cvpr-repo-harness-wave-planner.html: {summary['waves']} waves, {summary['jobs']} jobs, status {summary['status']}")


if __name__ == "__main__":
    main()

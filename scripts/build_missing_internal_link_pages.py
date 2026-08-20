#!/usr/bin/env python3
"""Build pages for internal links that are referenced by the release surfaces."""

from __future__ import annotations

import html
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LEDGER = ROOT / "analysis/cvpr_colab_evidence_ledger/registry.json"

BENCH_IDS = [
    "depth-normal-consistency",
    "corruption-robustness",
    "prompt-segmentation-robustness",
    "video-identity-tracking",
]

BENCH_EXPLAINERS = {
    "depth-normal-consistency": {
        "title": "Depth Normal Consistency Bench",
        "plain": "Tests whether predicted depth and predicted surface direction agree. If depth says a wall turns one way but the normal says it turns another, the 3D claim is not trustworthy.",
        "principle": "The hidden quantity is geometric consistency: two different measurements of the same surface should imply the same local shape.",
        "system": "metric-3d-reconstruction.html",
        "risk_metric": "thinStructureRisk",
    },
    "corruption-robustness": {
        "title": "Corruption Robustness Bench",
        "plain": "Tests whether recognition survives blur, noise, compression, and adversarial patches instead of only working on clean images.",
        "principle": "The hidden quantity is stable evidence: the model should keep the task-relevant signal while nuisance changes move around it.",
        "system": "efficient-vision-serving.html",
        "risk_metric": "confidenceCollapse",
    },
    "prompt-segmentation-robustness": {
        "title": "Prompt Segmentation Robustness Bench",
        "plain": "Tests whether a segmentation model follows the intended object when prompts are ambiguous, cluttered, or partly occluded.",
        "principle": "The hidden quantity is prompt-to-mask agreement: the prompt should select one region, not merely activate the most common nearby object.",
        "system": "open-vocab-visual-search.html",
        "risk_metric": "promptSensitivity",
    },
    "video-identity-tracking": {
        "title": "Video Identity Tracking Bench",
        "plain": "Tests whether the same object keeps the same identity through crossings, occlusions, and fast motion.",
        "principle": "The hidden quantity is temporal identity: evidence from nearby frames should update belief without swapping one object for another.",
        "system": "video-world-model.html",
        "risk_metric": "identityDrift",
    },
}

CSS = """:root{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.58}.wrap{max-width:1120px;margin:0 auto;padding:0 24px}header{background:var(--ink);color:#E7ECED;padding:42px 0 34px}.bug,nav a,.stat span,th,code{font-family:var(--mono)}.bug{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}h1{font-size:40px;line-height:1.06;margin:10px 0}header p{max-width:86ch;color:#AEBABD}nav a{font-size:12px;color:#B7DDE1;margin-right:12px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}.stat,.panel{background:var(--panel);border:1px solid var(--line);border-radius:8px}.stat{padding:12px}.stat b{display:block;font-size:25px}.stat span{font-size:11px;color:var(--muted)}.panel{padding:16px;margin:18px 0}table{width:100%;border-collapse:collapse;font-size:13px}td,th{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}th{font-size:11px;color:var(--muted)}.release{color:var(--good)}.review{color:var(--warn)}.block{color:var(--bad)}code{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}a{color:#0A5A62}footer{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}@media(max-width:880px){.stats{grid-template-columns:1fr}}"""


def esc(value: object) -> str:
    return html.escape(str(value))


def avg(rows: list[dict], key: str) -> float:
    vals = [row.get("metrics", {}).get(key) for row in rows]
    vals = [v for v in vals if isinstance(v, (int, float))]
    return sum(vals) / len(vals) if vals else 0.0


def find_job(data: dict, job_id: str) -> dict:
    return next(job for job in data["worker"]["jobs"] if job["id"] == job_id)


def find_runner(data: dict, job_id: str) -> dict:
    return next(row for row in data["worker"]["runnerCoverage"] if row["jobId"] == job_id)


def find_manifest_job(data: dict, job_id: str) -> dict:
    return next(row for row in data["worker"]["runManifest"]["jobs"] if row["jobId"] == job_id)


def find_results(data: dict, job_id: str) -> list[dict]:
    return [row for row in data["worker"]["cachedResults"] if row["jobId"] == job_id]


def model_summary(model: object) -> str:
    if isinstance(model, dict):
        return " · ".join(f"{key}: {value}" for key, value in model.items())
    return str(model)


def render_bench(data: dict, job_id: str) -> str:
    meta = BENCH_EXPLAINERS[job_id]
    job = find_job(data, job_id)
    runner = find_runner(data, job_id)
    manifest = find_manifest_job(data, job_id)
    results = find_results(data, job_id)
    risk_metric = meta["risk_metric"]
    rows = []
    for result in results:
        metrics = result.get("metrics", {})
        risk_value = metrics.get(risk_metric, metrics.get("risk", 0))
        rows.append(
            "<tr>"
            f"<td>{esc(result.get('caseId'))}</td>"
            f"<td>{esc(result.get('mode'))}</td>"
            f"<td>{esc(model_summary(result.get('model')))}</td>"
            f"<td>{metrics.get('readiness', metrics.get('quality', metrics.get('score', 0))):.1f}</td>"
            f"<td>{risk_value:.1f}</td>"
            f"<td>{esc(result.get('provenance', {}).get('accelerator', 'cached'))}</td>"
            "</tr>"
        )
    avg_ready = avg(results, "readiness")
    avg_risk = avg(results, risk_metric)
    registry = "analysis/cvpr_colab_evidence_ledger/registry.json"
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR {esc(meta['title'])}</title>
<style>{CSS}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 · linked Pro+ bench</div><h1>{esc(meta['title'])}</h1><p>{esc(meta['plain'])}</p><nav><a href="index.html">all themes</a><a href="cvpr-colab-gpu-worker.html">gpu worker</a><a href="cvpr-production-coverage-audit.html">coverage audit</a><a href="{esc(meta['system'])}">related system</a><a href="{esc(registry)}">bench registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{len(results)}</b><span>cached cases</span></div><div class="stat"><b>{avg_ready:.1f}</b><span>avg readiness</span></div><div class="stat"><b>{avg_risk:.1f}</b><span>avg risk</span></div><div class="stat"><b>{esc(job.get('gpuClass'))}</b><span>GPU class</span></div></section>
<section class="panel"><h2>First-principles bench read</h2><p>{esc(meta['principle'])}</p><p>The bench is useful because it changes one pressure at a time and asks whether the measured output still supports the same claim. Each row below is a cached real run from the Colab Pro+ worker, not a new invented score.</p></section>
<section class="panel"><h2>Runner contract</h2><table><thead><tr><th>Job</th><th>Case symbol</th><th>Loader</th><th>Runner</th><th>Execution</th><th>Strict mode</th></tr></thead><tbody><tr><td>{esc(job_id)}</td><td>{esc(runner.get('caseSymbol'))}</td><td>{esc(runner.get('loader'))}</td><td>{esc(runner.get('runner'))}</td><td>{esc(runner.get('execution'))}</td><td>{esc(runner.get('strictMode'))}</td></tr></tbody></table></section>
<section class="panel"><h2>Cached Pro+ cases</h2><table><thead><tr><th>Case</th><th>Mode</th><th>Model</th><th>Readiness</th><th>{esc(risk_metric)}</th><th>Accelerator</th></tr></thead><tbody>{''.join(rows)}</tbody></table></section>
<section class="panel"><h2>Acceptance gate</h2><code>expected cases: {manifest.get('expectedCases')} · priority: {job.get('priority')} · import path: {esc(manifest.get('importPath', registry))} · result filter: cached-real</code></section></main><footer><div class="wrap">Generated by scripts/build_missing_internal_link_pages.py from analysis/cvpr_colab_evidence_ledger/registry.json.</div></footer></body></html>"""


def render_projects() -> str:
    projects = [
        ("Pixels to meaning", "../course.html", "Build the bridge from raw pixels to labels, depth, time, language, generation, action, and trust."),
        ("Mathematical routes", "../math-routes.html", "Follow probability, geometry, signals, optimization, generation, structure, and control as reusable paths."),
        ("Idea graph", "../idea-graph.html", "Use shared primitives to move between methods that look different but use the same mathematical move."),
        ("Demo lab", "../cvpr-demo-lab.html", "Treat demos as small experiments: move a control, observe the measured quantity, and inspect failure."),
        ("Operational gates", "../cvpr-mission-control.html", "Read release pages as decision systems built from evidence, thresholds, risk, and reproducibility."),
        ("Deep read", "../deep/index.html", "Read the whole field as one connected story rather than a list of papers."),
        ("Search as retrieval", "../search.html", "Practice turning an intent into filters, matches, and evidence-bearing paper records."),
        ("Audit the explanations", "../first-principles-audit.html", "Use the audit ledger to see where depth is proven by markers and where residual risk remains."),
    ]
    cards = "".join(
        f'<a class="card" href="{href}"><b>{esc(title)}</b><p>{esc(desc)}</p></a>'
        for title, href, desc in projects
    )
    css = CSS + ".grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:22px 0}.card{display:block;text-decoration:none;color:var(--ink);background:var(--panel);border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:0 8px 8px 0;padding:14px}.card b{color:#0A5A62}.card p{margin:6px 0 0;color:#23302C}"
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Project Studio</title><style>{css}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 · project studio</div><h1>Project Studio</h1><p>Eight meaty ways to learn the conference by doing the work: follow the math, run the demos, inspect evidence, and audit the claims from first principles.</p><nav><a href="../index.html">all themes</a><a href="../math.html">math</a><a href="../cvpr-demo-lab.html">demo lab</a><a href="../first-principles-audit.html">audit</a></nav></div></header><main class="wrap"><section class="grid">{cards}</section><section class="panel"><h2>How to use it</h2><p>Pick one project, name the hidden quantity it is trying to expose, identify the evidence on the linked page, then write down the failure mode before trusting the result. That keeps every project tied to a mathematical principle instead of becoming a tour of links.</p></section></main><footer><div class="wrap">Generated by scripts/build_missing_internal_link_pages.py.</div></footer></body></html>"""


def main() -> None:
    data = json.loads(LEDGER.read_text(encoding="utf-8"))
    written = 0
    for job_id in BENCH_IDS:
        page = ROOT / find_job(data, job_id)["page"]
        content = render_bench(data, job_id)
        if not page.exists() or page.read_text(encoding="utf-8", errors="ignore") != content:
            page.write_text(content, encoding="utf-8")
            written += 1
    projects = ROOT / "projects"
    projects.mkdir(exist_ok=True)
    project_page = projects / "index.html"
    content = render_projects()
    if not project_page.exists() or project_page.read_text(encoding="utf-8", errors="ignore") != content:
        project_page.write_text(content, encoding="utf-8")
        written += 1
    print(f"updated {written} internal-link pages")


if __name__ == "__main__":
    main()

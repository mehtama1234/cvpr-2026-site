"""Build remaining CVPR paper/repo demos for 3D, video, generation, and VLM."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FORGE = ROOT / "analysis/cvpr_paper_repo_demo_forge/registry.json"

CONFIGS = {
    "threed": {
        "slug": "cvpr-3d-world-repo-arena",
        "analysis": "cvpr_3d_world_repo_arena",
        "title": "3D World Repo Arena",
        "systemLinks": ["metric-3d-reconstruction.html", "gaussian-splatting-platform.html"],
        "dims": ["geometryDrift", "viewInconsistency", "motionBlur", "lightingShift", "memoryLoad", "editLeakage"],
        "labels": ["geometry drift", "view inconsistency", "motion blur", "lighting shift", "memory load", "edit leakage"],
        "cases": [
            [82, 72, 30, 38, 54, 44, "one-shot avatar needs metric face and texture consistency"],
            [70, 88, 92, 32, 64, 48, "deblurred Gaussian avatars must agree across views"],
            [78, 62, 76, 96, 72, 50, "low-light dynamic splats need illumination-separated geometry"],
            [94, 86, 68, 46, 88, 42, "dynamic SLAM must separate camera motion from scene motion"],
            [58, 64, 22, 28, 92, 76, "prune Gaussians only when sharp details survive"],
        ],
    },
    "video": {
        "slug": "cvpr-video-temporal-repo-lab",
        "analysis": "cvpr_video_temporal_repo_lab",
        "title": "Video Temporal Repo Lab",
        "systemLinks": ["video-world-model.html"],
        "dims": ["temporalDrift", "identityBreak", "motionArtifact", "eventSparsity", "counterfactualLoad", "resolutionBudget"],
        "labels": ["temporal drift", "identity break", "motion artifact", "event sparsity", "counterfactual load", "resolution budget"],
        "cases": [
            [76, 54, 88, 38, 42, 66, "HOI generation must preserve hand-object contact through time"],
            [68, 94, 62, 26, 40, 72, "face swapping must preserve source-video realism and identity boundaries"],
            [82, 58, 80, 42, 96, 64, "counterfactual explanations need plausible changed videos"],
            [44, 32, 36, 94, 38, 88, "event spotting should spend resolution only where action occurs"],
            [86, 48, 56, 82, 62, 50, "weak transcripts need reliable action boundaries"],
        ],
    },
    "generation": {
        "slug": "cvpr-generation-control-repo-studio",
        "analysis": "cvpr_generation_control_repo_studio",
        "title": "Generation Control Repo Studio",
        "systemLinks": ["controllable-generation-studio.html", "restoration-reliability-stack.html"],
        "dims": ["fidelityDemand", "realismPressure", "artifactRisk", "oneStepBudget", "endpointError", "localEditNeed"],
        "labels": ["fidelity demand", "realism pressure", "artifact risk", "one-step budget", "endpoint error", "local edit need"],
        "cases": [
            [84, 72, 58, 96, 46, 62, "one-step SR must sharpen texture without inventing structure"],
            [92, 88, 66, 96, 42, 54, "controllable SR must balance fidelity against perceptual realism"],
            [76, 62, 54, 40, 94, 70, "diffusion bridges need a clean endpoint correction"],
            [70, 58, 64, 72, 58, 94, "low-rank residual diffusion should repair only the residual"],
            [82, 60, 70, 58, 82, 96, "universal restoration must avoid repainting already-clean regions"],
        ],
    },
    "vlm": {
        "slug": "cvpr-grounded-vlm-repo-court",
        "analysis": "cvpr_grounded_vlm_repo_court",
        "title": "Grounded VLM Repo Court",
        "systemLinks": ["vlm-grounded-reasoning.html"],
        "dims": ["evidenceGap", "privacyPressure", "alignmentDrift", "graphComplexity", "retrievalCompression", "hallucinationRisk"],
        "labels": ["evidence gap", "privacy pressure", "alignment drift", "graph complexity", "retrieval compression", "hallucination risk"],
        "cases": [
            [58, 86, 82, 46, 42, 52, "federated multimodal fusion must align mismatched client evidence"],
            [64, 98, 74, 32, 38, 44, "visible-infrared re-ID must preserve structure while hiding identity details"],
            [72, 34, 66, 96, 50, 64, "graph VLMs need node-link evidence, not just fluent captions"],
            [78, 48, 88, 58, 96, 70, "composed retrieval must not collapse relational reasoning into one embedding"],
            [86, 38, 62, 42, 46, 94, "training-free reasoning must repeatedly check visual evidence"],
        ],
    },
}

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRepoDemo(row, controls = {}) {
  const d0 = clamp(controls.d0 ?? row.dims[0]);
  const d1 = clamp(controls.d1 ?? row.dims[1]);
  const d2 = clamp(controls.d2 ?? row.dims[2]);
  const d3 = clamp(controls.d3 ?? row.dims[3]);
  const d4 = clamp(controls.d4 ?? row.dims[4]);
  const d5 = clamp(controls.d5 ?? row.dims[5]);
  const primaryRisk = clamp(d0 * 0.28 + d1 * 0.22 + d2 * 0.18 + d3 * 0.12 + d4 * 0.10 + d5 * 0.10);
  const evidenceRisk = clamp(d1 * 0.18 + d3 * 0.24 + d4 * 0.22 + d5 * 0.20 + d0 * 0.10 + d2 * 0.06);
  const runtimeRisk = clamp(d4 * 0.30 + d3 * 0.18 + d2 * 0.16 + d5 * 0.14 + d0 * 0.12 + d1 * 0.10);
  const readiness = clamp(100 - primaryRisk * 0.38 - evidenceRisk * 0.28 - runtimeRisk * 0.24);
  return { dims: [d0, d1, d2, d3, d4, d5], primaryRisk: Number(primaryRisk.toFixed(1)), evidenceRisk: Number(evidenceRisk.toFixed(1)), runtimeRisk: Number(runtimeRisk.toFixed(1)), readiness: Number(readiness.toFixed(1)) };
}

export function repoDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.primaryRisk <= 45 && metrics.evidenceRisk <= 48) return "release";
  if (metrics.readiness >= 44 && metrics.primaryRisk <= 72) return "review";
  return "block";
}

export function evaluateCase(row, paper, controls = {}) {
  const metrics = scoreRepoDemo(row, controls);
  return { id: row.id, title: row.title, paperTitle: paper.title, repo: paper.repo, tags: paper.tags, dims: row.dims, labels: row.labels, metrics, decision: repoDecision(metrics), operatorAction: row.operatorAction };
}

export function summarizeRows(rows) {
  return {
    cases: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length,
    maxPrimaryRisk: Number(Math.max(...rows.map((row) => row.metrics.primaryRisk)).toFixed(1)),
    maxEvidenceRisk: Number(Math.max(...rows.map((row) => row.metrics.evidenceRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1))
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cases, demoRows, papers, summary } from "../src/fixtures.js";
import { evaluateCase, repoDecision, scoreRepoDemo, summarizeRows } from "../src/core.js";

assert.equal(papers.length, 5);
assert.equal(cases.length, 5);
assert.equal(demoRows.length, 5);
assert.ok(papers.every((paper) => paper.repo.startsWith("http")));
const first = scoreRepoDemo(cases[0]);
assert.ok(first.primaryRisk >= 40);
assert.match(repoDecision(first), /^(release|review|block)$/);
const safer = scoreRepoDemo(cases[0], { d0: 15, d1: 15, d2: 15, d3: 15, d4: 15, d5: 15 });
assert.ok(safer.readiness > first.readiness);
const evaluated = evaluateCase(cases[0], papers[0]);
assert.equal(evaluated.repo, papers[0].repo);
const derived = summarizeRows(demoRows);
assert.equal(derived.repoBackedRows, 5);
assert.equal(summary.repoPapers, 5);
assert.equal(summary.cases, 5);
assert.ok(summary.review + summary.block >= 4);
assert.equal(summary.status, "ready");
console.log("ok", summary.demo + ":", summary.cases, "cases");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def score(dims):
    d0, d1, d2, d3, d4, d5 = [clamp(value) for value in dims]
    primary = clamp(d0 * 0.28 + d1 * 0.22 + d2 * 0.18 + d3 * 0.12 + d4 * 0.10 + d5 * 0.10)
    evidence = clamp(d1 * 0.18 + d3 * 0.24 + d4 * 0.22 + d5 * 0.20 + d0 * 0.10 + d2 * 0.06)
    runtime = clamp(d4 * 0.30 + d3 * 0.18 + d2 * 0.16 + d5 * 0.14 + d0 * 0.12 + d1 * 0.10)
    readiness = clamp(100 - primary * 0.38 - evidence * 0.28 - runtime * 0.24)
    return {"dims": [int(d0), int(d1), int(d2), int(d3), int(d4), int(d5)], "primaryRisk": round(primary, 1), "evidenceRisk": round(evidence, 1), "runtimeRisk": round(runtime, 1), "readiness": round(readiness, 1)}


def decide(metrics):
    if metrics["readiness"] >= 62 and metrics["primaryRisk"] <= 45 and metrics["evidenceRisk"] <= 48:
        return "release"
    if metrics["readiness"] >= 44 and metrics["primaryRisk"] <= 72:
        return "review"
    return "block"


def load_blueprints():
    data = json.loads(FORGE.read_text(encoding="utf-8"))
    return {row["theme"]: row for row in data["blueprintRows"]}


def build_rows(blueprint, config):
    rows = []
    for index, values in enumerate(config["cases"]):
        dims = values[:6]
        action = values[6]
        paper = blueprint["seedPapers"][index]
        metrics = score(dims)
        rows.append({
            "id": f"{config['slug']}-{index + 1}",
            "title": paper["title"].split(":")[0][:68],
            "paperTitle": paper["title"],
            "repo": paper["repo"],
            "tags": paper["tags"],
            "paperProblem": paper["problem"],
            "labels": config["labels"],
            "dims": [int(v) for v in dims],
            "metrics": metrics,
            "decision": decide(metrics),
            "operatorAction": action,
        })
    return rows


def summarize(blueprint, config, rows):
    return {
        "demo": config["slug"],
        "status": "ready",
        "theme": blueprint["themeName"],
        "sourceForge": "cvpr-paper-repo-demo-forge.html",
        "systems": blueprint["systems"],
        "repoPapers": len(blueprint["seedPapers"]),
        "cases": len(rows),
        "release": len([row for row in rows if row["decision"] == "release"]),
        "review": len([row for row in rows if row["decision"] == "review"]),
        "block": len([row for row in rows if row["decision"] == "block"]),
        "maxPrimaryRisk": max(row["metrics"]["primaryRisk"] for row in rows),
        "maxEvidenceRisk": max(row["metrics"]["evidenceRisk"] for row in rows),
        "minReadiness": min(row["metrics"]["readiness"] for row in rows),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(config, blueprint, rows, summary):
    base = ROOT / "source-code/learning" / config["slug"]
    cases = [{"id": row["id"], "title": row["title"], "dims": row["dims"], "labels": row["labels"], "operatorAction": row["operatorAction"]} for row in rows]
    write(base / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(base / "src/core.js", CORE)
    write(base / "src/fixtures.js", "export const papers = " + json.dumps(blueprint["seedPapers"], indent=2) + ";\nexport const cases = " + json.dumps(cases, indent=2) + ";\nexport const demoRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(base / "tests/core.test.js", TEST)
    write(base / "README.md", f"# {config['title']}\n\nPaper/repo demo generated from the CVPR paper repo forge.\n")


def build_registry(config, blueprint, rows, summary):
    write(ROOT / "analysis" / config["analysis"] / "registry.json", json.dumps({"summary": summary, "sourceBlueprint": blueprint, "demoRows": rows}, indent=2) + "\n")


def build_page(config, rows, summary):
    stats = [("Status", summary["status"]), ("Repo papers", summary["repoPapers"]), ("Cases", summary["cases"]), ("Review", summary["review"]), ("Block", summary["block"]), ("Max risk", summary["maxPrimaryRisk"])]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    links = "".join(f"<a href=\"{esc(link)}\">{esc(link.replace('.html', ''))}</a>" for link in config["systemLinks"])
    rows_html = ""
    for row in rows:
        tags = "".join(f"<span>{esc(tag)}</span>" for tag in row["tags"][:5])
        dims = "".join(f"<label>{esc(label)} <b>{esc(value)}</b><meter min=\"0\" max=\"100\" value=\"{esc(value)}\"></meter></label>" for label, value in zip(row["labels"], row["dims"]))
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / {esc(row['id'])}</div><h2>{esc(row['title'])}</h2><p>{esc(row['paperProblem'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><div class="tags">{tags}</div>{dims}<code>{esc(row['operatorAction'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{esc(config['title'])}</title><style>:root{{--ink:#121616;--paper:#F6F7F3;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0F6672;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#172126;color:#EFF7F2;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#93D6D8}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:104ch;color:#CBD7D2}}nav a{{color:#C9EEF0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#26312D}}.tags{{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}}.tags span{{font-size:11px;border:1px solid var(--line);border-radius:999px;padding:3px 7px;color:#3D4742}}label{{display:block;font-size:12px;color:var(--muted);margin:8px 0}}meter{{width:100%;height:12px}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - paper repo demo</div><h1>{esc(config['title'])}</h1><p>Repo-backed demo built from the CVPR paper repo forge, turning top code-backed papers into concrete release-risk cases.</p><nav><a href="index.html">all demos</a><a href="cvpr-paper-repo-demo-forge.html">paper repo forge</a>{links}<a href="analysis/{esc(config['analysis'])}/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Repo Demo Gate</h2><code>scoreRepoDemo -> repoDecision -> python3 scripts/validate_cvpr_full_stack.py</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_remaining_paper_repo_demos.py - package: source-code/learning/{esc(config['slug'])}</div></footer><script type="module">console.debug("scoreRepoDemo ready");</script></body></html>"""
    write(ROOT / f"{config['slug']}.html", page)


def main():
    blueprints = load_blueprints()
    for theme, config in CONFIGS.items():
        blueprint = blueprints[theme]
        rows = build_rows(blueprint, config)
        summary = summarize(blueprint, config, rows)
        build_package(config, blueprint, rows, summary)
        build_registry(config, blueprint, rows, summary)
        build_page(config, rows, summary)
        print(f"wrote {config['slug']}.html: {summary['cases']} cases, {summary['repoPapers']} repo papers, status {summary['status']}")


if __name__ == "__main__":
    main()

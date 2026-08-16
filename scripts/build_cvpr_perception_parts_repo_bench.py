"""Build the CVPR perception parts repo bench demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FORGE = ROOT / "analysis/cvpr_paper_repo_demo_forge/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_perception_parts_repo_bench"
BASE = ROOT / "source-code/learning/cvpr-perception-parts-repo-bench"

CASES = [
    {"id": "medical-background-prompt", "title": "Medical background prompt", "paperIndex": 0, "boundaryDetail": 74, "labelNoise": 28, "domainDistortion": 38, "backgroundReliance": 92, "fewShotPressure": 86, "openVocabAmbiguity": 24, "operatorAction": "require background-ablation proof before trusting foreground masks"},
    {"id": "panoramic-source-free-uda", "title": "Panoramic source-free UDA", "paperIndex": 1, "boundaryDetail": 56, "labelNoise": 76, "domainDistortion": 94, "backgroundReliance": 48, "fewShotPressure": 38, "openVocabAmbiguity": 34, "operatorAction": "gate panoramic adaptation on distortion-aware pseudo-label cleanup"},
    {"id": "training-free-cosaliency", "title": "Training-free co-saliency", "paperIndex": 2, "boundaryDetail": 52, "labelNoise": 70, "domainDistortion": 28, "backgroundReliance": 62, "fewShotPressure": 72, "openVocabAmbiguity": 58, "operatorAction": "compare common-object masks across image groups before release"},
    {"id": "few-shot-incremental-audio", "title": "Few-shot incremental audio", "paperIndex": 3, "boundaryDetail": 26, "labelNoise": 48, "domainDistortion": 36, "backgroundReliance": 22, "fewShotPressure": 96, "openVocabAmbiguity": 72, "operatorAction": "treat prototype drift as localization failure in label space"},
    {"id": "camouflage-pseudo-labels", "title": "Camouflage pseudo-labels", "paperIndex": 4, "boundaryDetail": 96, "labelNoise": 82, "domainDistortion": 44, "backgroundReliance": 88, "fewShotPressure": 54, "openVocabAmbiguity": 46, "operatorAction": "hold if pseudo-label evolution erases thin object boundaries"},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreBench(row, controls = {}) {
  const boundaryDetail = clamp(controls.boundaryDetail ?? row.boundaryDetail);
  const labelNoise = clamp(controls.labelNoise ?? row.labelNoise);
  const domainDistortion = clamp(controls.domainDistortion ?? row.domainDistortion);
  const backgroundReliance = clamp(controls.backgroundReliance ?? row.backgroundReliance);
  const fewShotPressure = clamp(controls.fewShotPressure ?? row.fewShotPressure);
  const openVocabAmbiguity = clamp(controls.openVocabAmbiguity ?? row.openVocabAmbiguity);
  const localizationRisk = clamp(boundaryDetail * 0.24 + labelNoise * 0.22 + domainDistortion * 0.20 + backgroundReliance * 0.16 + openVocabAmbiguity * 0.18);
  const adaptationRisk = clamp(labelNoise * 0.26 + domainDistortion * 0.28 + fewShotPressure * 0.22 + openVocabAmbiguity * 0.14 + backgroundReliance * 0.10);
  const evidenceNeed = clamp(boundaryDetail * 0.28 + backgroundReliance * 0.24 + fewShotPressure * 0.20 + labelNoise * 0.18 + openVocabAmbiguity * 0.10);
  const readiness = clamp(100 - localizationRisk * 0.38 - adaptationRisk * 0.30 - evidenceNeed * 0.22);
  return { boundaryDetail, labelNoise, domainDistortion, backgroundReliance, fewShotPressure, openVocabAmbiguity, localizationRisk: Number(localizationRisk.toFixed(1)), adaptationRisk: Number(adaptationRisk.toFixed(1)), evidenceNeed: Number(evidenceNeed.toFixed(1)), readiness: Number(readiness.toFixed(1)) };
}

export function benchDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.localizationRisk <= 42 && metrics.adaptationRisk <= 48) return "release";
  if (metrics.readiness >= 44 && metrics.localizationRisk <= 70) return "review";
  return "block";
}

export function evaluateCase(row, paper, controls = {}) {
  const metrics = scoreBench(row, controls);
  return { id: row.id, title: row.title, paperTitle: paper.title, repo: paper.repo, tags: paper.tags, metrics, decision: benchDecision(metrics), operatorAction: row.operatorAction };
}

export function summarizeBench(rows) {
  return {
    cases: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length,
    maxLocalizationRisk: Number(Math.max(...rows.map((row) => row.metrics.localizationRisk)).toFixed(1)),
    maxAdaptationRisk: Number(Math.max(...rows.map((row) => row.metrics.adaptationRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1))
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { benchRows, cases, papers, summary } from "../src/fixtures.js";
import { benchDecision, evaluateCase, scoreBench, summarizeBench } from "../src/core.js";

assert.equal(papers.length, 5);
assert.equal(cases.length, 5);
assert.equal(benchRows.length, 5);
assert.ok(papers.every((paper) => paper.repo.startsWith("http")));
const camo = cases.find((row) => row.id === "camouflage-pseudo-labels");
const camoScore = scoreBench(camo);
assert.ok(camoScore.localizationRisk > 70);
assert.match(benchDecision(camoScore), /^(release|review|block)$/);
const easier = scoreBench(camo, { boundaryDetail: 30, labelNoise: 20, domainDistortion: 20, backgroundReliance: 25, fewShotPressure: 20, openVocabAmbiguity: 20 });
assert.ok(easier.readiness > camoScore.readiness);
const medical = evaluateCase(cases[0], papers[0]);
assert.match(medical.paperTitle, /Focus on Background/);
const derived = summarizeBench(benchRows);
assert.equal(derived.repoBackedRows, 5);
assert.equal(summary.demo, "cvpr-perception-parts-repo-bench");
assert.equal(summary.theme, "Naming and locating what's in the picture");
assert.ok(summary.review + summary.block >= 4);
assert.equal(summary.status, "ready");
console.log("ok cvpr-perception-parts-repo-bench:", summary.cases, "cases");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_blueprint():
    data = json.loads(FORGE.read_text(encoding="utf-8"))
    for row in data["blueprintRows"]:
        if row["theme"] == "perceive":
            return row
    raise RuntimeError("perceive blueprint missing")


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def score(case):
    boundary = clamp(case["boundaryDetail"])
    noise = clamp(case["labelNoise"])
    distortion = clamp(case["domainDistortion"])
    background = clamp(case["backgroundReliance"])
    fewshot = clamp(case["fewShotPressure"])
    ambiguity = clamp(case["openVocabAmbiguity"])
    localization = clamp(boundary * 0.24 + noise * 0.22 + distortion * 0.20 + background * 0.16 + ambiguity * 0.18)
    adaptation = clamp(noise * 0.26 + distortion * 0.28 + fewshot * 0.22 + ambiguity * 0.14 + background * 0.10)
    evidence = clamp(boundary * 0.28 + background * 0.24 + fewshot * 0.20 + noise * 0.18 + ambiguity * 0.10)
    readiness = clamp(100 - localization * 0.38 - adaptation * 0.30 - evidence * 0.22)
    return {
        "boundaryDetail": int(boundary), "labelNoise": int(noise), "domainDistortion": int(distortion),
        "backgroundReliance": int(background), "fewShotPressure": int(fewshot), "openVocabAmbiguity": int(ambiguity),
        "localizationRisk": round(localization, 1), "adaptationRisk": round(adaptation, 1),
        "evidenceNeed": round(evidence, 1), "readiness": round(readiness, 1),
    }


def decide(metrics):
    if metrics["readiness"] >= 62 and metrics["localizationRisk"] <= 42 and metrics["adaptationRisk"] <= 48:
        return "release"
    if metrics["readiness"] >= 44 and metrics["localizationRisk"] <= 70:
        return "review"
    return "block"


def build_rows(blueprint):
    rows = []
    papers = blueprint["seedPapers"]
    for case in CASES:
        paper = papers[case["paperIndex"]]
        metrics = score(case)
        rows.append({"id": case["id"], "title": case["title"], "paperTitle": paper["title"], "repo": paper["repo"], "tags": paper["tags"], "paperProblem": paper["problem"], "metrics": metrics, "decision": decide(metrics), "operatorAction": case["operatorAction"]})
    return rows


def summarize(blueprint, rows):
    return {
        "demo": "cvpr-perception-parts-repo-bench", "status": "ready", "theme": blueprint["themeName"],
        "sourceForge": "cvpr-paper-repo-demo-forge.html", "system": "open-vocab-visual-search",
        "repoPapers": len(blueprint["seedPapers"]), "cases": len(rows),
        "release": len([r for r in rows if r["decision"] == "release"]),
        "review": len([r for r in rows if r["decision"] == "review"]),
        "block": len([r for r in rows if r["decision"] == "block"]),
        "maxLocalizationRisk": max(r["metrics"]["localizationRisk"] for r in rows),
        "maxAdaptationRisk": max(r["metrics"]["adaptationRisk"] for r in rows),
        "minReadiness": min(r["metrics"]["readiness"] for r in rows),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(blueprint, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const papers = " + json.dumps(blueprint["seedPapers"], indent=2) + ";\nexport const cases = " + json.dumps(CASES, indent=2) + ";\nexport const benchRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Perception Parts Repo Bench\n\nPart/localization bench built from repo-backed perception CVPR papers.\n")


def build_registry(blueprint, rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "sourceBlueprint": blueprint, "cases": CASES, "benchRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [("Status", summary["status"]), ("Repo papers", summary["repoPapers"]), ("Cases", summary["cases"]), ("Review", summary["review"]), ("Block", summary["block"]), ("Max loc risk", summary["maxLocalizationRisk"])]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        tags = "".join(f"<span>{esc(t)}</span>" for t in row["tags"][:5])
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / {esc(row['id'])}</div><h2>{esc(row['title'])}</h2><p>{esc(row['paperProblem'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><div class="tags">{tags}</div><label>localization risk <b>{esc(row['metrics']['localizationRisk'])}</b><meter min="0" max="100" value="{esc(row['metrics']['localizationRisk'])}"></meter></label><label>adaptation risk <b>{esc(row['metrics']['adaptationRisk'])}</b><meter min="0" max="100" value="{esc(row['metrics']['adaptationRisk'])}"></meter></label><label>readiness <b>{esc(row['metrics']['readiness'])}</b><meter min="0" max="100" value="{esc(row['metrics']['readiness'])}"></meter></label><code>{esc(row['operatorAction'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Perception Parts Repo Bench</title><style>:root{{--ink:#121616;--paper:#F6F7F3;--panel:#fff;--line:#DADDD4;--muted:#606860;--accent:#0F6775;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#172126;color:#EFF7F2;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8ED4DC}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:104ch;color:#CBD7D2}}nav a{{color:#C9EEF0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#26312D}}.tags{{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}}.tags span{{font-size:11px;border:1px solid var(--line);border-radius:999px;padding:3px 7px;color:#3D4742}}label{{display:block;font-size:12px;color:var(--muted);margin:8px 0}}meter{{width:100%;height:12px}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - perception repo demo</div><h1>Perception Parts Repo Bench</h1><p>Paper-grounded bench for segmentation and localization failures: background prompts, panoramic source-free adaptation, co-saliency masks, prototype drift, and camouflage pseudo-labels.</p><nav><a href="index.html">all demos</a><a href="cvpr-paper-repo-demo-forge.html">paper repo forge</a><a href="open-vocab-visual-search.html">open vocab system</a><a href="analysis/cvpr_perception_parts_repo_bench/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Interactive Bench Gate</h2><code>scoreBench -> benchDecision -> python3 scripts/validate_cvpr_full_stack.py</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_perception_parts_repo_bench.py - package: source-code/learning/cvpr-perception-parts-repo-bench</div></footer><script type="module">console.debug("scoreBench ready");</script></body></html>"""
    write(ROOT / "cvpr-perception-parts-repo-bench.html", page)


def main():
    blueprint = load_blueprint()
    rows = build_rows(blueprint)
    summary = summarize(blueprint, rows)
    build_package(blueprint, rows, summary)
    build_registry(blueprint, rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-perception-parts-repo-bench.html: {summary['cases']} cases, {summary['repoPapers']} repo papers, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR frontier sensor fusion bench demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FORGE = ROOT / "analysis/cvpr_paper_repo_demo_forge/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_frontier_sensor_fusion_bench"
BASE = ROOT / "source-code/learning/cvpr-frontier-sensor-fusion-bench"

CASES = [
    {"id": "optical-sar-ship-match", "title": "Optical-SAR ship match", "paperIndex": 0, "modalityGap": 94, "visibilityLoss": 72, "geoScale": 64, "languageGrounding": 22, "watermarkAttack": 12, "provenanceNeed": 70, "operatorAction": "require cross-modal identity agreement before accepting re-identification"},
    {"id": "language-remote-segmentation", "title": "Language remote segmentation", "paperIndex": 1, "modalityGap": 38, "visibilityLoss": 36, "geoScale": 86, "languageGrounding": 94, "watermarkAttack": 16, "provenanceNeed": 58, "operatorAction": "validate nested language regions across geospatial hierarchy"},
    {"id": "watermark-view-synthesis", "title": "Watermark view synthesis", "paperIndex": 2, "modalityGap": 24, "visibilityLoss": 20, "geoScale": 32, "languageGrounding": 24, "watermarkAttack": 98, "provenanceNeed": 96, "operatorAction": "block release if novel-view synthesis erases authentication traces"},
    {"id": "optical-sar-open-vocab", "title": "Optical-SAR open vocab", "paperIndex": 3, "modalityGap": 88, "visibilityLoss": 82, "geoScale": 74, "languageGrounding": 86, "watermarkAttack": 18, "provenanceNeed": 76, "operatorAction": "route cloudy optical cases through SAR-backed open-vocabulary masks"},
    {"id": "geospatial-visual-search", "title": "Geospatial visual search", "paperIndex": 4, "modalityGap": 42, "visibilityLoss": 46, "geoScale": 98, "languageGrounding": 82, "watermarkAttack": 14, "provenanceNeed": 64, "operatorAction": "score tiny target retrieval against road, river, and relative-position context"},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreFusion(row, controls = {}) {
  const modalityGap = clamp(controls.modalityGap ?? row.modalityGap);
  const visibilityLoss = clamp(controls.visibilityLoss ?? row.visibilityLoss);
  const geoScale = clamp(controls.geoScale ?? row.geoScale);
  const languageGrounding = clamp(controls.languageGrounding ?? row.languageGrounding);
  const watermarkAttack = clamp(controls.watermarkAttack ?? row.watermarkAttack);
  const provenanceNeed = clamp(controls.provenanceNeed ?? row.provenanceNeed);
  const fusionRisk = clamp(modalityGap * 0.30 + visibilityLoss * 0.20 + geoScale * 0.14 + languageGrounding * 0.16 + provenanceNeed * 0.10 + watermarkAttack * 0.10);
  const groundingRisk = clamp(languageGrounding * 0.32 + geoScale * 0.26 + visibilityLoss * 0.14 + modalityGap * 0.12 + provenanceNeed * 0.16);
  const provenanceRisk = clamp(watermarkAttack * 0.55 + provenanceNeed * 0.32 + modalityGap * 0.08 + visibilityLoss * 0.03 + languageGrounding * 0.02);
  const readiness = clamp(100 - fusionRisk * 0.38 - groundingRisk * 0.30 - provenanceRisk * 0.34);
  return { modalityGap, visibilityLoss, geoScale, languageGrounding, watermarkAttack, provenanceNeed, fusionRisk: Number(fusionRisk.toFixed(1)), groundingRisk: Number(groundingRisk.toFixed(1)), provenanceRisk: Number(provenanceRisk.toFixed(1)), readiness: Number(readiness.toFixed(1)) };
}

export function fusionDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.fusionRisk <= 45 && metrics.provenanceRisk <= 45) return "release";
  if (metrics.readiness >= 42 && metrics.provenanceRisk <= 78) return "review";
  return "block";
}

export function evaluateCase(row, paper, controls = {}) {
  const metrics = scoreFusion(row, controls);
  return { id: row.id, title: row.title, paperTitle: paper.title, repo: paper.repo, tags: paper.tags, metrics, decision: fusionDecision(metrics), operatorAction: row.operatorAction };
}

export function summarizeFusion(rows) {
  return {
    cases: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length,
    maxFusionRisk: Number(Math.max(...rows.map((row) => row.metrics.fusionRisk)).toFixed(1)),
    maxProvenanceRisk: Number(Math.max(...rows.map((row) => row.metrics.provenanceRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1))
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cases, fusionRows, papers, summary } from "../src/fixtures.js";
import { evaluateCase, fusionDecision, scoreFusion, summarizeFusion } from "../src/core.js";

assert.equal(papers.length, 5);
assert.equal(cases.length, 5);
assert.equal(fusionRows.length, 5);
assert.ok(papers.every((paper) => paper.repo.startsWith("http")));
const watermark = cases.find((row) => row.id === "watermark-view-synthesis");
const attacked = scoreFusion(watermark);
assert.ok(attacked.provenanceRisk > 80);
assert.equal(fusionDecision(attacked), "block");
const safer = scoreFusion(watermark, { modalityGap: 15, visibilityLoss: 15, geoScale: 20, languageGrounding: 20, watermarkAttack: 10, provenanceNeed: 30 });
assert.ok(safer.readiness > attacked.readiness);
const sar = evaluateCase(cases[3], papers[3]);
assert.match(sar.paperTitle, /MM-OVSeg/);
const derived = summarizeFusion(fusionRows);
assert.equal(derived.repoBackedRows, 5);
assert.equal(summary.demo, "cvpr-frontier-sensor-fusion-bench");
assert.equal(summary.theme, "The frontier - new senses and new duties");
assert.ok(summary.review + summary.block >= 4);
assert.equal(summary.status, "ready");
console.log("ok cvpr-frontier-sensor-fusion-bench:", summary.cases, "cases");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_blueprint():
    data = json.loads(FORGE.read_text(encoding="utf-8"))
    for row in data["blueprintRows"]:
        if row["theme"] == "emerging":
            return row
    raise RuntimeError("emerging blueprint missing")


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def score(case):
    modality = clamp(case["modalityGap"])
    visibility = clamp(case["visibilityLoss"])
    geo = clamp(case["geoScale"])
    language = clamp(case["languageGrounding"])
    watermark = clamp(case["watermarkAttack"])
    provenance = clamp(case["provenanceNeed"])
    fusion = clamp(modality * 0.30 + visibility * 0.20 + geo * 0.14 + language * 0.16 + provenance * 0.10 + watermark * 0.10)
    grounding = clamp(language * 0.32 + geo * 0.26 + visibility * 0.14 + modality * 0.12 + provenance * 0.16)
    prov = clamp(watermark * 0.55 + provenance * 0.32 + modality * 0.08 + visibility * 0.03 + language * 0.02)
    readiness = clamp(100 - fusion * 0.38 - grounding * 0.30 - prov * 0.34)
    return {
        "modalityGap": int(modality), "visibilityLoss": int(visibility), "geoScale": int(geo),
        "languageGrounding": int(language), "watermarkAttack": int(watermark), "provenanceNeed": int(provenance),
        "fusionRisk": round(fusion, 1), "groundingRisk": round(grounding, 1),
        "provenanceRisk": round(prov, 1), "readiness": round(readiness, 1),
    }


def decide(metrics):
    if metrics["readiness"] >= 62 and metrics["fusionRisk"] <= 45 and metrics["provenanceRisk"] <= 45:
        return "release"
    if metrics["readiness"] >= 42 and metrics["provenanceRisk"] <= 78:
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
        "demo": "cvpr-frontier-sensor-fusion-bench", "status": "ready", "theme": blueprint["themeName"],
        "sourceForge": "cvpr-paper-repo-demo-forge.html", "systems": ["adversarial-provenance-gate", "medical-vision-validation"],
        "repoPapers": len(blueprint["seedPapers"]), "cases": len(rows),
        "release": len([r for r in rows if r["decision"] == "release"]),
        "review": len([r for r in rows if r["decision"] == "review"]),
        "block": len([r for r in rows if r["decision"] == "block"]),
        "maxFusionRisk": max(r["metrics"]["fusionRisk"] for r in rows),
        "maxProvenanceRisk": max(r["metrics"]["provenanceRisk"] for r in rows),
        "minReadiness": min(r["metrics"]["readiness"] for r in rows),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(blueprint, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const papers = " + json.dumps(blueprint["seedPapers"], indent=2) + ";\nexport const cases = " + json.dumps(CASES, indent=2) + ";\nexport const fusionRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Frontier Sensor Fusion Bench\n\nNon-RGB and provenance bench built from repo-backed frontier CVPR papers.\n")


def build_registry(blueprint, rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "sourceBlueprint": blueprint, "cases": CASES, "fusionRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [("Status", summary["status"]), ("Repo papers", summary["repoPapers"]), ("Cases", summary["cases"]), ("Review", summary["review"]), ("Block", summary["block"]), ("Prov risk", summary["maxProvenanceRisk"])]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        tags = "".join(f"<span>{esc(t)}</span>" for t in row["tags"][:5])
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / {esc(row['id'])}</div><h2>{esc(row['title'])}</h2><p>{esc(row['paperProblem'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><div class="tags">{tags}</div><label>fusion risk <b>{esc(row['metrics']['fusionRisk'])}</b><meter min="0" max="100" value="{esc(row['metrics']['fusionRisk'])}"></meter></label><label>grounding risk <b>{esc(row['metrics']['groundingRisk'])}</b><meter min="0" max="100" value="{esc(row['metrics']['groundingRisk'])}"></meter></label><label>provenance risk <b>{esc(row['metrics']['provenanceRisk'])}</b><meter min="0" max="100" value="{esc(row['metrics']['provenanceRisk'])}"></meter></label><code>{esc(row['operatorAction'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Frontier Sensor Fusion Bench</title><style>:root{{--ink:#111716;--paper:#F5F7F2;--panel:#fff;--line:#D8DED4;--muted:#5F6862;--accent:#5B681A;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#202417;color:#F2F7EC;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#CAD986}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:104ch;color:#D6DDC8}}nav a{{color:#EEF2C2;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#26312D}}.tags{{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}}.tags span{{font-size:11px;border:1px solid var(--line);border-radius:999px;padding:3px 7px;color:#3D4742}}label{{display:block;font-size:12px;color:var(--muted);margin:8px 0}}meter{{width:100%;height:12px}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - frontier repo demo</div><h1>Frontier Sensor Fusion Bench</h1><p>Paper-grounded bench for non-RGB evidence: optical-SAR matching, language-guided remote sensing, watermark attack pressure, open-vocabulary SAR fusion, and geospatial visual search.</p><nav><a href="index.html">all demos</a><a href="cvpr-paper-repo-demo-forge.html">paper repo forge</a><a href="adversarial-provenance-gate.html">provenance gate</a><a href="analysis/cvpr_frontier_sensor_fusion_bench/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Fusion Gate</h2><code>scoreFusion -> fusionDecision -> python3 scripts/validate_cvpr_full_stack.py</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_frontier_sensor_fusion_bench.py - package: source-code/learning/cvpr-frontier-sensor-fusion-bench</div></footer><script type="module">console.debug("scoreFusion ready");</script></body></html>"""
    write(ROOT / "cvpr-frontier-sensor-fusion-bench.html", page)


def main():
    blueprint = load_blueprint()
    rows = build_rows(blueprint)
    summary = summarize(blueprint, rows)
    build_package(blueprint, rows, summary)
    build_registry(blueprint, rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-frontier-sensor-fusion-bench.html: {summary['cases']} cases, {summary['repoPapers']} repo papers, status {summary['status']}")


if __name__ == "__main__":
    main()

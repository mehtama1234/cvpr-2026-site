"""Build the CVPR Gaussian Splatting release bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-gaussian-splatting-bench"
ANALYSIS = ROOT / "analysis/cvpr_gaussian_splatting_bench"
SPLAT_FIXTURES = ROOT / "source-code/learning/gaussian-splatting-platform/src/fixtures.js"

SCENARIOS = [
    {"id": "dense-novel-view", "title": "Dense novel-view rendering", "viewCount": 86, "splatDensity": 78, "semanticEntropy": 24, "provenanceVisibility": 70},
    {"id": "semantic-edit", "title": "Semantic edit selection", "viewCount": 74, "splatDensity": 72, "semanticEntropy": 34, "provenanceVisibility": 76},
    {"id": "provenance-transfer", "title": "Provenance transfer after edits", "viewCount": 68, "splatDensity": 70, "semanticEntropy": 42, "provenanceVisibility": 84},
    {"id": "sparse-capture", "title": "Sparse capture with thin geometry", "viewCount": 62, "splatDensity": 66, "semanticEntropy": 46, "provenanceVisibility": 72},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreSplatCase(input, stageEvidence = { fit: 94, semantic: 94, provenance: 94, evidenceDepth: 94 }) {
  const views = clamp(input.viewCount);
  const density = clamp(input.splatDensity);
  const entropy = clamp(input.semanticEntropy);
  const provenance = clamp(input.provenanceVisibility);
  const renderFidelity = clamp(stageEvidence.fit * 0.34 + views * 0.22 + density * 0.24 + (100 - entropy) * 0.10 + stageEvidence.evidenceDepth * 0.10);
  const semanticAttachment = clamp(stageEvidence.semantic * 0.36 + renderFidelity * 0.18 + (100 - entropy) * 0.24 + density * 0.12 + stageEvidence.evidenceDepth * 0.10);
  const provenanceTrace = clamp(stageEvidence.provenance * 0.38 + provenance * 0.28 + semanticAttachment * 0.14 + renderFidelity * 0.10 + stageEvidence.evidenceDepth * 0.10);
  const viewInstability = clamp((100 - renderFidelity) * 0.34 + (100 - views) * 0.22 + (100 - density) * 0.18 + entropy * 0.14 - provenance * 0.08);
  const editLeakageRisk = clamp((100 - semanticAttachment) * 0.34 + entropy * 0.28 + (100 - provenanceTrace) * 0.22 + (100 - density) * 0.10);
  const readiness = clamp(renderFidelity * 0.28 + semanticAttachment * 0.26 + provenanceTrace * 0.24 + (100 - Math.max(viewInstability, editLeakageRisk)) * 0.22);
  return { renderFidelity, semanticAttachment, provenanceTrace, viewInstability, editLeakageRisk, readiness };
}

export function splatDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.renderFidelity >= 62 && metrics.semanticAttachment >= 62 && metrics.provenanceTrace >= 62 && metrics.viewInstability <= 35 && metrics.editLeakageRisk <= 35) return "release";
  if (metrics.readiness >= 54 && metrics.renderFidelity >= 50 && metrics.editLeakageRisk <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence) {
  const metrics = scoreSplatCase(scenario, stageEvidence);
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      viewCount: scenario.viewCount,
      splatDensity: scenario.splatDensity,
      semanticEntropy: scenario.semanticEntropy,
      provenanceVisibility: scenario.provenanceVisibility
    },
    metrics,
    decision: splatDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.viewInstability <= 35 && metrics.editLeakageRisk <= 35,
    runtimeMode: "cached-system-evidence",
    provenance: {
      sourceSystem: "gaussian-splatting-platform",
      evidence: "source-code/learning/gaussian-splatting-platform/_results/*.json"
    }
  };
}

export function summarizeBench(scenarios, stageEvidence) {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minRenderFidelity: Number(Math.min(...caseRows.map((row) => row.metrics.renderFidelity)).toFixed(1)),
    minSemanticAttachment: Number(Math.min(...caseRows.map((row) => row.metrics.semanticAttachment)).toFixed(1)),
    minProvenanceTrace: Number(Math.min(...caseRows.map((row) => row.metrics.provenanceTrace)).toFixed(1)),
    maxViewInstability: Number(Math.max(...caseRows.map((row) => row.metrics.viewInstability)).toFixed(1)),
    maxEditLeakageRisk: Number(Math.max(...caseRows.map((row) => row.metrics.editLeakageRisk)).toFixed(1)),
    acceptancePass: caseRows.every((row) => row.acceptancePass),
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { scenarios, stageEvidence } from "../src/fixtures.js";
import { evaluateScenario, scoreSplatCase, splatDecision, summarizeBench } from "../src/core.js";

const stable = scoreSplatCase({ viewCount: 90, splatDensity: 86, semanticEntropy: 12, provenanceVisibility: 86 }, stageEvidence);
const weak = scoreSplatCase({ viewCount: 16, splatDensity: 18, semanticEntropy: 90, provenanceVisibility: 12 }, stageEvidence);
assert.ok(stable.renderFidelity > weak.renderFidelity);
assert.ok(stable.editLeakageRisk < weak.editLeakageRisk);
assert.equal(splatDecision(stable), "release");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence);
  assert.ok(row.metrics.renderFidelity >= 0 && row.metrics.renderFidelity <= 100);
  assert.ok(row.metrics.semanticAttachment >= 0 && row.metrics.semanticAttachment <= 100);
  assert.ok(row.metrics.provenanceTrace >= 0 && row.metrics.provenanceTrace <= 100);
  assert.ok(row.metrics.viewInstability >= 0 && row.metrics.viewInstability <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-system-evidence");
}

const summary = summarizeBench(scenarios, stageEvidence);
assert.equal(summary.cases, 4);
assert.equal(summary.release, 4);
assert.equal(summary.review, 0);
assert.equal(summary.block, 0);
assert.ok(summary.minRenderFidelity >= 75);
assert.ok(summary.minSemanticAttachment >= 75);
assert.ok(summary.minProvenanceTrace >= 80);
assert.ok(summary.maxViewInstability <= 28);
assert.ok(summary.maxEditLeakageRisk <= 30);
console.log("ok cvpr-gaussian-splatting-bench:", summary.cases, "cases", summary.maxEditLeakageRisk, "max edit leakage");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stage_evidence():
    text = SPLAT_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "fit": by_stage["splat-fit"]["gateScore"],
        "semantic": by_stage["semantic-splats"]["gateScore"],
        "provenance": by_stage["watermark-provenance"]["gateScore"],
        "evidenceDepth": min(stage["evidenceDepthScore"] for stage in stages),
    }


def score_case(case, stage_evidence):
    views = max(0, min(100, float(case["viewCount"])))
    density = max(0, min(100, float(case["splatDensity"])))
    entropy = max(0, min(100, float(case["semanticEntropy"])))
    provenance = max(0, min(100, float(case["provenanceVisibility"])))
    fidelity = max(0, min(100, stage_evidence["fit"] * 0.34 + views * 0.22 + density * 0.24 + (100 - entropy) * 0.10 + stage_evidence["evidenceDepth"] * 0.10))
    semantic = max(0, min(100, stage_evidence["semantic"] * 0.36 + fidelity * 0.18 + (100 - entropy) * 0.24 + density * 0.12 + stage_evidence["evidenceDepth"] * 0.10))
    trace = max(0, min(100, stage_evidence["provenance"] * 0.38 + provenance * 0.28 + semantic * 0.14 + fidelity * 0.10 + stage_evidence["evidenceDepth"] * 0.10))
    instability = max(0, min(100, (100 - fidelity) * 0.34 + (100 - views) * 0.22 + (100 - density) * 0.18 + entropy * 0.14 - provenance * 0.08))
    leakage = max(0, min(100, (100 - semantic) * 0.34 + entropy * 0.28 + (100 - trace) * 0.22 + (100 - density) * 0.10))
    readiness = max(0, min(100, fidelity * 0.28 + semantic * 0.26 + trace * 0.24 + (100 - max(instability, leakage)) * 0.22))
    return {
        "renderFidelity": round(fidelity, 1),
        "semanticAttachment": round(semantic, 1),
        "provenanceTrace": round(trace, 1),
        "viewInstability": round(instability, 1),
        "editLeakageRisk": round(leakage, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 68 and metrics["renderFidelity"] >= 62 and metrics["semanticAttachment"] >= 62 and metrics["provenanceTrace"] >= 62 and metrics["viewInstability"] <= 35 and metrics["editLeakageRisk"] <= 35:
        return "release"
    if metrics["readiness"] >= 54 and metrics["renderFidelity"] >= 50 and metrics["editLeakageRisk"] <= 58:
        return "review"
    return "block"


def build_records(stages, stage_evidence):
    source_results = sorted((ROOT / "source-code/learning/gaussian-splatting-platform/_results").glob("*.json"))
    records = []
    for case in SCENARIOS:
        metrics = score_case(case, stage_evidence)
        records.append({
            "id": case["id"],
            "title": case["title"],
            "system": "gaussian-splatting-platform",
            "cluster": "Gaussian Splatting",
            "sourceStages": [stage["stage"] for stage in stages],
            "controls": {key: case[key] for key in ("viewCount", "splatDensity", "semanticEntropy", "provenanceVisibility")},
            "metrics": metrics,
            "decision": decision(metrics),
            "acceptancePass": metrics["readiness"] >= 68 and metrics["viewInstability"] <= 35 and metrics["editLeakageRisk"] <= 35,
            "runtimeModes": ["simulated", "cached-system-evidence"],
            "preferredRuntime": "cached-system-evidence",
            "evidenceArtifacts": [str(path.relative_to(ROOT)) for path in source_results],
        })
    return records


def build_package(stage_evidence, records):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const stageEvidence = " + json.dumps(stage_evidence, indent=2) + ";\nexport const scenarios = " + json.dumps(SCENARIOS, indent=2) + ";\nexport const records = " + json.dumps(records, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Gaussian Splatting Bench\n\nRelease checks for render fidelity, semantic attachment, provenance tracing, view stability, and edit leakage risk.\n")


def build_registry(stages, stage_evidence, records):
    summary = {
        "bench": "cvpr-gaussian-splatting-bench",
        "sourceSystem": "gaussian-splatting-platform",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "minRenderFidelity": min(row["metrics"]["renderFidelity"] for row in records),
        "minSemanticAttachment": min(row["metrics"]["semanticAttachment"] for row in records),
        "minProvenanceTrace": min(row["metrics"]["provenanceTrace"] for row in records),
        "maxViewInstability": max(row["metrics"]["viewInstability"] for row in records),
        "maxEditLeakageRisk": max(row["metrics"]["editLeakageRisk"] for row in records),
        "acceptancePass": all(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-system-evidence"],
        "gpuBacked": False,
        "cachedSystemEvidenceCases": len(records),
        "playbookSource": "splats-gaussian-release-bench",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    rows = "".join(f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['renderFidelity']}</td><td>{row['metrics']['semanticAttachment']}</td><td>{row['metrics']['provenanceTrace']}</td><td>{row['metrics']['viewInstability']}</td><td>{row['metrics']['editLeakageRisk']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>""" for row in records)
    cases_json = json.dumps(SCENARIOS)
    evidence_json = json.dumps(stage_evidence)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Gaussian Splatting Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR bench · Gaussian Splatting</div><h1>Gaussian Splatting release bench</h1><p>Production release gate for render fidelity, semantic splat attachment, provenance tracing, view instability, and edit leakage risk.</p><nav><a href="cvpr-mission-control.html">mission control</a><a href="gaussian-splatting-platform.html">source system</a><a href="analysis/cvpr_gaussian_splatting_bench/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['release']}/{summary['cases']}</b><span>release cases</span></div><div class="stat"><b>{summary['minRenderFidelity']}</b><span>min render fidelity</span></div><div class="stat"><b>{summary['minProvenanceTrace']}</b><span>min provenance trace</span></div><div class="stat"><b>{summary['maxEditLeakageRisk']}</b><span>max edit leakage</span></div></section>
<section class="bench"><div class="panel controls"><label>scenario<select id="scenario"></select></label><label>view count<input id="views" type="range" min="0" max="100"></label><label>splat density<input id="density" type="range" min="0" max="100"></label><label>semantic entropy<input id="entropy" type="range" min="0" max="100"></label><label>provenance visibility<input id="provenance" type="range" min="0" max="100"></label><code id="gate">scoreSplatCase</code></div><div class="panel"><canvas id="viz" width="760" height="420"></canvas><div class="meters"><div><b id="fidelity">0</b><span>render</span></div><div><b id="semantic">0</b><span>semantic</span></div><div><b id="trace">0</b><span>trace</span></div><div><b id="leakage">0</b><span>leakage</span></div><div><b id="ready">0</b><span>ready</span></div></div></div></section>
<section class="panel"><h2>Acceptance Gate</h2><table><thead><tr><th>case</th><th>render</th><th>semantic</th><th>trace</th><th>view instability</th><th>edit leakage</th><th>decision</th></tr></thead><tbody>{rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_gaussian_splatting_bench.py · package source-code/learning/cvpr-gaussian-splatting-bench</div></footer>
<script>const scenarios={cases_json}; const evidence={evidence_json};
function clamp(v){{return Math.max(0,Math.min(100,Number(v)));}}
function score(c){{const views=clamp(c.viewCount),density=clamp(c.splatDensity),entropy=clamp(c.semanticEntropy),prov=clamp(c.provenanceVisibility); const render=clamp(evidence.fit*.34+views*.22+density*.24+(100-entropy)*.10+evidence.evidenceDepth*.10); const sem=clamp(evidence.semantic*.36+render*.18+(100-entropy)*.24+density*.12+evidence.evidenceDepth*.10); const trace=clamp(evidence.provenance*.38+prov*.28+sem*.14+render*.10+evidence.evidenceDepth*.10); const instability=clamp((100-render)*.34+(100-views)*.22+(100-density)*.18+entropy*.14-prov*.08); const leak=clamp((100-sem)*.34+entropy*.28+(100-trace)*.22+(100-density)*.10); const ready=clamp(render*.28+sem*.26+trace*.24+(100-Math.max(instability,leak))*.22); return {{renderFidelity:render,semanticAttachment:sem,provenanceTrace:trace,viewInstability:instability,editLeakageRisk:leak,readiness:ready}};}}
function draw(m,c){{const canvas=document.querySelector("#viz"),ctx=canvas.getContext("2d");ctx.clearRect(0,0,760,420);ctx.fillStyle="#EEF3F2";ctx.fillRect(0,0,760,420);for(let i=0;i<70;i++){{const x=80+(i*47)%560,y=76+(i*71)%250,r=2+(c.splatDensity/45);ctx.fillStyle=i%5===0?"#2F7A4F":i%3===0?"#0E7C86":"#7FA6A4";ctx.globalAlpha=.45+c.splatDensity/220;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();}}ctx.globalAlpha=1;ctx.strokeStyle=m.editLeakageRisk>35?"#9B2D2D":"#2F7A4F";ctx.lineWidth=5;ctx.strokeRect(72,64,610,270);[["render",m.renderFidelity,"#0E7C86"],["semantic",m.semanticAttachment,"#2F7A4F"],["leak",m.editLeakageRisk,"#9B2D2D"]].forEach(([n,v,color],i)=>{{ctx.fillStyle=color;ctx.fillRect(120+i*150,380-v*2,70,v*2);ctx.fillStyle="#23302C";ctx.font="12px ui-monospace, monospace";ctx.fillText(n,120+i*150,398);}});ctx.fillStyle="#23302C";ctx.font="13px ui-monospace, monospace";ctx.fillText(`views ${{c.viewCount}} · density ${{c.splatDensity}} · provenance ${{c.provenanceVisibility}}`,60,34);}}
const select=document.querySelector("#scenario"); for (const s of scenarios){{const opt=document.createElement("option"); opt.value=s.id; opt.textContent=s.title; select.appendChild(opt);}}
function load(id){{const s=scenarios.find(x=>x.id===id); views.value=s.viewCount; density.value=s.splatDensity; entropy.value=s.semanticEntropy; provenance.value=s.provenanceVisibility; update();}}
function update(){{const c={{viewCount:+views.value,splatDensity:+density.value,semanticEntropy:+entropy.value,provenanceVisibility:+provenance.value}}; const m=score(c); fidelity.textContent=m.renderFidelity.toFixed(1); semantic.textContent=m.semanticAttachment.toFixed(1); trace.textContent=m.provenanceTrace.toFixed(1); leakage.textContent=m.editLeakageRisk.toFixed(1); ready.textContent=m.readiness.toFixed(1); gate.textContent=m.readiness>=68&&m.editLeakageRisk<=35&&m.viewInstability<=35?"release":"review"; draw(m,c);}}
select.addEventListener("change",()=>load(select.value)); for (const el of [views,density,entropy,provenance]) el.addEventListener("input",update); load(scenarios[0].id);</script></body></html>"""
    write(ROOT / "cvpr-gaussian-splatting-bench.html", page)


def main():
    stages, stage_evidence = read_stage_evidence()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-gaussian-splatting-bench.html: {summary['release']} release cases")


if __name__ == "__main__":
    main()

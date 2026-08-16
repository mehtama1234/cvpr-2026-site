"""Build the CVPR metric geometry release bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-metric-geometry-bench"
ANALYSIS = ROOT / "analysis/cvpr_metric_geometry_bench"
GEOMETRY_FIXTURES = ROOT / "source-code/learning/metric-3d-reconstruction/src/fixtures.js"

SCENARIOS = [
    {"id": "wide-baseline", "title": "Wide-baseline camera recovery", "baseline": 82, "textureSparsity": 18, "scaleAmbiguity": 24, "surfaceComplexity": 42},
    {"id": "scale-transfer", "title": "Metric scale transfer", "baseline": 66, "textureSparsity": 28, "scaleAmbiguity": 44, "surfaceComplexity": 46},
    {"id": "thin-structure", "title": "Thin structure surface check", "baseline": 58, "textureSparsity": 34, "scaleAmbiguity": 32, "surfaceComplexity": 72},
    {"id": "low-texture-indoor", "title": "Low-texture indoor room", "baseline": 54, "textureSparsity": 58, "scaleAmbiguity": 48, "surfaceComplexity": 50},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGeometryCase(input, stageEvidence = { camera: 94, scale: 94, surface: 94, evidenceDepth: 94 }) {
  const baseline = clamp(input.baseline);
  const texture = clamp(input.textureSparsity);
  const ambiguity = clamp(input.scaleAmbiguity);
  const complexity = clamp(input.surfaceComplexity);
  const poseEvidence = clamp(stageEvidence.camera * 0.34 + baseline * 0.28 + (100 - texture) * 0.18 + stageEvidence.evidenceDepth * 0.12 + (100 - ambiguity) * 0.08);
  const metricEvidence = clamp(stageEvidence.scale * 0.36 + poseEvidence * 0.22 + (100 - ambiguity) * 0.24 + baseline * 0.10 + stageEvidence.evidenceDepth * 0.08);
  const surfaceConsistency = clamp(stageEvidence.surface * 0.34 + poseEvidence * 0.18 + metricEvidence * 0.18 + (100 - complexity) * 0.20 + (100 - texture) * 0.10);
  const scaleDrift = clamp((100 - metricEvidence) * 0.38 + ambiguity * 0.24 + texture * 0.14 + complexity * 0.12 - baseline * 0.10);
  const topologyRisk = clamp((100 - surfaceConsistency) * 0.40 + complexity * 0.26 + texture * 0.14 + ambiguity * 0.10 - poseEvidence * 0.10);
  const readiness = clamp(poseEvidence * 0.26 + metricEvidence * 0.30 + surfaceConsistency * 0.26 + (100 - Math.max(scaleDrift, topologyRisk)) * 0.18);
  return { poseEvidence, metricEvidence, surfaceConsistency, scaleDrift, topologyRisk, readiness };
}

export function geometryDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.poseEvidence >= 60 && metrics.metricEvidence >= 60 && metrics.scaleDrift <= 35 && metrics.topologyRisk <= 38) return "release";
  if (metrics.readiness >= 54 && metrics.metricEvidence >= 48 && metrics.scaleDrift <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence) {
  const metrics = scoreGeometryCase(scenario, stageEvidence);
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      baseline: scenario.baseline,
      textureSparsity: scenario.textureSparsity,
      scaleAmbiguity: scenario.scaleAmbiguity,
      surfaceComplexity: scenario.surfaceComplexity
    },
    metrics,
    decision: geometryDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.scaleDrift <= 35 && metrics.topologyRisk <= 38,
    runtimeMode: "cached-system-evidence",
    provenance: {
      sourceSystem: "metric-3d-reconstruction",
      evidence: "source-code/learning/metric-3d-reconstruction/_results/*.json"
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
    minPoseEvidence: Number(Math.min(...caseRows.map((row) => row.metrics.poseEvidence)).toFixed(1)),
    minMetricEvidence: Number(Math.min(...caseRows.map((row) => row.metrics.metricEvidence)).toFixed(1)),
    minSurfaceConsistency: Number(Math.min(...caseRows.map((row) => row.metrics.surfaceConsistency)).toFixed(1)),
    maxScaleDrift: Number(Math.max(...caseRows.map((row) => row.metrics.scaleDrift)).toFixed(1)),
    maxTopologyRisk: Number(Math.max(...caseRows.map((row) => row.metrics.topologyRisk)).toFixed(1)),
    acceptancePass: caseRows.every((row) => row.acceptancePass),
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { scenarios, stageEvidence } from "../src/fixtures.js";
import { evaluateScenario, geometryDecision, scoreGeometryCase, summarizeBench } from "../src/core.js";

const constrained = scoreGeometryCase({ baseline: 82, textureSparsity: 12, scaleAmbiguity: 18, surfaceComplexity: 28 }, stageEvidence);
const weak = scoreGeometryCase({ baseline: 12, textureSparsity: 88, scaleAmbiguity: 92, surfaceComplexity: 86 }, stageEvidence);
assert.ok(constrained.metricEvidence > weak.metricEvidence);
assert.ok(constrained.scaleDrift < weak.scaleDrift);
assert.equal(geometryDecision(constrained), "release");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence);
  assert.ok(row.metrics.poseEvidence >= 0 && row.metrics.poseEvidence <= 100);
  assert.ok(row.metrics.metricEvidence >= 0 && row.metrics.metricEvidence <= 100);
  assert.ok(row.metrics.surfaceConsistency >= 0 && row.metrics.surfaceConsistency <= 100);
  assert.ok(row.metrics.scaleDrift >= 0 && row.metrics.scaleDrift <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-system-evidence");
}

const summary = summarizeBench(scenarios, stageEvidence);
assert.equal(summary.cases, 4);
assert.equal(summary.release, 4);
assert.equal(summary.review, 0);
assert.equal(summary.block, 0);
assert.ok(summary.minMetricEvidence >= 70);
assert.ok(summary.maxScaleDrift <= 35);
assert.ok(summary.maxTopologyRisk <= 38);
console.log("ok cvpr-metric-geometry-bench:", summary.cases, "cases", summary.maxScaleDrift, "max scale drift");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stage_evidence():
    text = GEOMETRY_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "camera": by_stage["camera-geometry"]["gateScore"],
        "scale": by_stage["metric-scale"]["gateScore"],
        "surface": by_stage["surface-consistency"]["gateScore"],
        "evidenceDepth": min(stage["evidenceDepthScore"] for stage in stages),
    }


def score_case(case, stage_evidence):
    baseline = max(0, min(100, float(case["baseline"])))
    texture = max(0, min(100, float(case["textureSparsity"])))
    ambiguity = max(0, min(100, float(case["scaleAmbiguity"])))
    complexity = max(0, min(100, float(case["surfaceComplexity"])))
    pose = max(0, min(100, stage_evidence["camera"] * 0.34 + baseline * 0.28 + (100 - texture) * 0.18 + stage_evidence["evidenceDepth"] * 0.12 + (100 - ambiguity) * 0.08))
    metric = max(0, min(100, stage_evidence["scale"] * 0.36 + pose * 0.22 + (100 - ambiguity) * 0.24 + baseline * 0.10 + stage_evidence["evidenceDepth"] * 0.08))
    surface = max(0, min(100, stage_evidence["surface"] * 0.34 + pose * 0.18 + metric * 0.18 + (100 - complexity) * 0.20 + (100 - texture) * 0.10))
    drift = max(0, min(100, (100 - metric) * 0.38 + ambiguity * 0.24 + texture * 0.14 + complexity * 0.12 - baseline * 0.10))
    topology = max(0, min(100, (100 - surface) * 0.40 + complexity * 0.26 + texture * 0.14 + ambiguity * 0.10 - pose * 0.10))
    readiness = max(0, min(100, pose * 0.26 + metric * 0.30 + surface * 0.26 + (100 - max(drift, topology)) * 0.18))
    return {
        "poseEvidence": round(pose, 1),
        "metricEvidence": round(metric, 1),
        "surfaceConsistency": round(surface, 1),
        "scaleDrift": round(drift, 1),
        "topologyRisk": round(topology, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 68 and metrics["poseEvidence"] >= 60 and metrics["metricEvidence"] >= 60 and metrics["scaleDrift"] <= 35 and metrics["topologyRisk"] <= 38:
        return "release"
    if metrics["readiness"] >= 54 and metrics["metricEvidence"] >= 48 and metrics["scaleDrift"] <= 58:
        return "review"
    return "block"


def build_records(stages, stage_evidence):
    source_results = sorted((ROOT / "source-code/learning/metric-3d-reconstruction/_results").glob("*.json"))
    records = []
    for case in SCENARIOS:
        metrics = score_case(case, stage_evidence)
        records.append({
            "id": case["id"],
            "title": case["title"],
            "system": "metric-3d-reconstruction",
            "cluster": "3D reconstruction and novel views",
            "sourceStages": [stage["stage"] for stage in stages],
            "controls": {key: case[key] for key in ("baseline", "textureSparsity", "scaleAmbiguity", "surfaceComplexity")},
            "metrics": metrics,
            "decision": decision(metrics),
            "acceptancePass": metrics["readiness"] >= 68 and metrics["scaleDrift"] <= 35 and metrics["topologyRisk"] <= 38,
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
    write(BASE / "README.md", "# CVPR Metric Geometry Bench\n\nMetric reconstruction release checks for pose evidence, scale drift, surface consistency, and topology risk.\n")


def build_registry(stages, stage_evidence, records):
    summary = {
        "bench": "cvpr-metric-geometry-bench",
        "sourceSystem": "metric-3d-reconstruction",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "minPoseEvidence": min(row["metrics"]["poseEvidence"] for row in records),
        "minMetricEvidence": min(row["metrics"]["metricEvidence"] for row in records),
        "minSurfaceConsistency": min(row["metrics"]["surfaceConsistency"] for row in records),
        "maxScaleDrift": max(row["metrics"]["scaleDrift"] for row in records),
        "maxTopologyRisk": max(row["metrics"]["topologyRisk"] for row in records),
        "acceptancePass": all(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-system-evidence"],
        "gpuBacked": False,
        "cachedSystemEvidenceCases": len(records),
        "playbookSource": "geometry-metric-release-bench",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    rows = "".join(f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['poseEvidence']}</td><td>{row['metrics']['metricEvidence']}</td><td>{row['metrics']['surfaceConsistency']}</td><td>{row['metrics']['scaleDrift']}</td><td>{row['metrics']['topologyRisk']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>""" for row in records)
    cases_json = json.dumps(SCENARIOS)
    evidence_json = json.dumps(stage_evidence)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Metric Geometry Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR bench · metric geometry</div><h1>Metric geometry release bench</h1><p>Production release gate for camera pose evidence, metric scale, surface consistency, scale drift, and topology risk in 3D reconstruction systems.</p><nav><a href="cvpr-mission-control.html">mission control</a><a href="metric-3d-reconstruction.html">source system</a><a href="analysis/cvpr_metric_geometry_bench/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['release']}/{summary['cases']}</b><span>release cases</span></div><div class="stat"><b>{summary['minMetricEvidence']}</b><span>min metric evidence</span></div><div class="stat"><b>{summary['maxScaleDrift']}</b><span>max scale drift</span></div><div class="stat"><b>{summary['maxTopologyRisk']}</b><span>max topology risk</span></div></section>
<section class="bench"><div class="panel controls"><label>scenario<select id="scenario"></select></label><label>camera baseline<input id="baseline" type="range" min="0" max="100"></label><label>texture sparsity<input id="texture" type="range" min="0" max="100"></label><label>scale ambiguity<input id="ambiguity" type="range" min="0" max="100"></label><label>surface complexity<input id="complexity" type="range" min="0" max="100"></label><code id="gate">scoreGeometryCase</code></div><div class="panel"><canvas id="viz" width="760" height="420"></canvas><div class="meters"><div><b id="pose">0</b><span>pose</span></div><div><b id="metric">0</b><span>metric</span></div><div><b id="surface">0</b><span>surface</span></div><div><b id="drift">0</b><span>drift</span></div><div><b id="ready">0</b><span>ready</span></div></div></div></section>
<section class="panel"><h2>Acceptance Gate</h2><table><thead><tr><th>case</th><th>pose</th><th>metric</th><th>surface</th><th>scale drift</th><th>topology</th><th>decision</th></tr></thead><tbody>{rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_metric_geometry_bench.py · package source-code/learning/cvpr-metric-geometry-bench</div></footer>
<script>const scenarios={cases_json}; const evidence={evidence_json};
function clamp(v){{return Math.max(0,Math.min(100,Number(v)));}}
function score(c){{const b=clamp(c.baseline),t=clamp(c.textureSparsity),a=clamp(c.scaleAmbiguity),x=clamp(c.surfaceComplexity); const pose=clamp(evidence.camera*.34+b*.28+(100-t)*.18+evidence.evidenceDepth*.12+(100-a)*.08); const metric=clamp(evidence.scale*.36+pose*.22+(100-a)*.24+b*.10+evidence.evidenceDepth*.08); const surface=clamp(evidence.surface*.34+pose*.18+metric*.18+(100-x)*.20+(100-t)*.10); const drift=clamp((100-metric)*.38+a*.24+t*.14+x*.12-b*.10); const topo=clamp((100-surface)*.40+x*.26+t*.14+a*.10-pose*.10); const ready=clamp(pose*.26+metric*.30+surface*.26+(100-Math.max(drift,topo))*.18); return {{poseEvidence:pose,metricEvidence:metric,surfaceConsistency:surface,scaleDrift:drift,topologyRisk:topo,readiness:ready}};}}
function draw(m,c){{const canvas=document.querySelector("#viz"),ctx=canvas.getContext("2d");ctx.clearRect(0,0,760,420);ctx.fillStyle="#EEF3F2";ctx.fillRect(0,0,760,420);ctx.strokeStyle="#0E7C86";ctx.lineWidth=2;for(let i=0;i<7;i++){{ctx.beginPath();ctx.moveTo(90+i*62,310);ctx.lineTo(380+i*34,90+i*6);ctx.stroke();}}ctx.fillStyle="#0E7C86";for(let i=0;i<30;i++){{const x=80+(i*47)%560,y=90+(i*73)%220;ctx.fillRect(x,y,3,3);}}ctx.strokeStyle=m.scaleDrift>35?"#9B2D2D":"#2F7A4F";ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(92,350);ctx.lineTo(92+m.metricEvidence*5.2,350);ctx.stroke();[["pose",m.poseEvidence,"#0E7C86"],["metric",m.metricEvidence,"#2F7A4F"],["drift",m.scaleDrift,"#9B2D2D"]].forEach(([n,v,color],i)=>{{ctx.fillStyle=color;ctx.fillRect(470+i*72,320-v*2,42,v*2);ctx.fillStyle="#23302C";ctx.font="12px ui-monospace, monospace";ctx.fillText(n,466+i*72,342);}});ctx.fillStyle="#23302C";ctx.font="13px ui-monospace, monospace";ctx.fillText(`baseline ${{c.baseline}} · ambiguity ${{c.scaleAmbiguity}} · surface ${{c.surfaceComplexity}}`,60,34);}}
const select=document.querySelector("#scenario"); for (const s of scenarios){{const opt=document.createElement("option"); opt.value=s.id; opt.textContent=s.title; select.appendChild(opt);}}
function load(id){{const s=scenarios.find(x=>x.id===id); baseline.value=s.baseline; texture.value=s.textureSparsity; ambiguity.value=s.scaleAmbiguity; complexity.value=s.surfaceComplexity; update();}}
function update(){{const c={{baseline:+baseline.value,textureSparsity:+texture.value,scaleAmbiguity:+ambiguity.value,surfaceComplexity:+complexity.value}}; const m=score(c); pose.textContent=m.poseEvidence.toFixed(1); metric.textContent=m.metricEvidence.toFixed(1); surface.textContent=m.surfaceConsistency.toFixed(1); drift.textContent=m.scaleDrift.toFixed(1); ready.textContent=m.readiness.toFixed(1); gate.textContent=m.readiness>=68&&m.scaleDrift<=35&&m.topologyRisk<=38?"release":"review"; draw(m,c);}}
select.addEventListener("change",()=>load(select.value)); for (const el of [baseline,texture,ambiguity,complexity]) el.addEventListener("input",update); load(scenarios[0].id);</script></body></html>"""
    write(ROOT / "cvpr-metric-geometry-bench.html", page)


def main():
    stages, stage_evidence = read_stage_evidence()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-metric-geometry-bench.html: {summary['release']} release cases")


if __name__ == "__main__":
    main()

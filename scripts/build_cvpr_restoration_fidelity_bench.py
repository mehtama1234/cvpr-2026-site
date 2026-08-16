"""Build the CVPR downstream restoration fidelity bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-restoration-fidelity-bench"
ANALYSIS = ROOT / "analysis/cvpr_restoration_fidelity_bench"
RESTORATION_FIXTURES = ROOT / "source-code/learning/restoration-reliability-stack/src/fixtures.js"
COLAB_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"

SCENARIOS = [
    {"id": "mild-noise", "title": "Mild sensor noise", "blur": 18, "noise": 24, "compression": 18, "lowLight": 20, "hallucinationPenalty": 36},
    {"id": "compressed-low-light", "title": "Compressed low-light image", "blur": 32, "noise": 38, "compression": 54, "lowLight": 64, "hallucinationPenalty": 16},
    {"id": "motion-blur-task", "title": "Motion blur task frame", "blur": 64, "noise": 36, "compression": 38, "lowLight": 36, "hallucinationPenalty": 16},
    {"id": "over-restored-detail", "title": "Over-restored fine detail", "blur": 48, "noise": 54, "compression": 38, "lowLight": 56, "hallucinationPenalty": 18},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRestorationCase(input, stageEvidence = { diagnosis: 73.1, fidelity: 76.1, downstream: 79.1, evidenceDepth: 54.6 }) {
  const blur = clamp(input.blur);
  const noise = clamp(input.noise);
  const compression = clamp(input.compression);
  const lowLight = clamp(input.lowLight);
  const hallucinationPenalty = clamp(input.hallucinationPenalty);
  const degradationLoad = clamp(blur * 0.24 + noise * 0.22 + compression * 0.22 + lowLight * 0.22 + hallucinationPenalty * 0.10);
  const diagnosisConfidence = clamp(stageEvidence.diagnosis * 0.34 + stageEvidence.evidenceDepth * 0.18 + (100 - Math.abs(blur - noise)) * 0.10 + (100 - degradationLoad) * 0.28 + hallucinationPenalty * 0.10);
  const fidelityScore = clamp(stageEvidence.fidelity * 0.34 + diagnosisConfidence * 0.24 + (100 - hallucinationPenalty) * 0.24 + (100 - compression) * 0.10 + (100 - blur) * 0.08);
  const artifactRisk = clamp(degradationLoad * 0.30 + hallucinationPenalty * 0.30 + compression * 0.16 + lowLight * 0.14 + (100 - fidelityScore) * 0.10);
  const downstreamUtility = clamp(stageEvidence.downstream * 0.34 + fidelityScore * 0.30 + diagnosisConfidence * 0.18 + (100 - artifactRisk) * 0.18);
  const fabricatedDetailRisk = clamp(hallucinationPenalty * 0.42 + (100 - fidelityScore) * 0.24 + lowLight * 0.14 + compression * 0.12 + blur * 0.08);
  const readiness = clamp(diagnosisConfidence * 0.22 + fidelityScore * 0.30 + downstreamUtility * 0.30 + (100 - fabricatedDetailRisk) * 0.18);
  return { degradationLoad, diagnosisConfidence, fidelityScore, artifactRisk, downstreamUtility, fabricatedDetailRisk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "restoration-fidelity" || result.mode !== "cached-real") return null;
  const fidelityScore = clamp(result.metrics.fidelityScore);
  const downstreamUtility = clamp(result.metrics.downstreamUtility);
  const fabricatedDetailRisk = clamp(result.metrics.fabricatedDetailRisk);
  const readiness = clamp(result.metrics.readiness);
  const diagnosisConfidence = clamp((fidelityScore * 0.42) + (downstreamUtility * 0.34) + ((100 - fabricatedDetailRisk) * 0.24));
  const degradationLoad = clamp(100 - diagnosisConfidence);
  const artifactRisk = clamp(fabricatedDetailRisk * 0.68 + degradationLoad * 0.32);
  return { degradationLoad, diagnosisConfidence, fidelityScore, artifactRisk, downstreamUtility, fabricatedDetailRisk, readiness };
}

export function chooseRestorationMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreRestorationCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function restorationDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.fidelityScore >= 60 && metrics.downstreamUtility >= 62 && metrics.fabricatedDetailRisk <= 42) return "release";
  if (metrics.readiness >= 54 && metrics.fidelityScore >= 48 && metrics.fabricatedDetailRisk <= 68) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseRestorationMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      blur: scenario.blur,
      noise: scenario.noise,
      compression: scenario.compression,
      lowLight: scenario.lowLight,
      hallucinationPenalty: scenario.hallucinationPenalty
    },
    metrics,
    decision: restorationDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.downstreamUtility >= 62 && metrics.fabricatedDetailRisk <= 42,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minDownstreamUtility = Math.min(...caseRows.map((row) => row.metrics.downstreamUtility));
  const maxFabricatedDetailRisk = Math.max(...caseRows.map((row) => row.metrics.fabricatedDetailRisk));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minDownstreamUtility: Number(minDownstreamUtility.toFixed(1)),
    maxFabricatedDetailRisk: Number(maxFabricatedDetailRisk.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseRestorationMetrics, evaluateScenario, normalizeCachedGpuResult, restorationDecision, scoreRestorationCase, summarizeBench } from "../src/core.js";

const mild = scoreRestorationCase({ blur: 12, noise: 18, compression: 12, lowLight: 18, hallucinationPenalty: 24 }, stageEvidence);
const overfit = scoreRestorationCase({ blur: 86, noise: 82, compression: 78, lowLight: 84, hallucinationPenalty: 92 }, stageEvidence);
assert.ok(mild.downstreamUtility > overfit.downstreamUtility);
assert.ok(mild.fabricatedDetailRisk < overfit.fabricatedDetailRisk);
assert.notEqual(restorationDecision(mild), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.diagnosisConfidence >= 0 && row.metrics.diagnosisConfidence <= 100);
  assert.ok(row.metrics.fidelityScore >= 0 && row.metrics.fidelityScore <= 100);
  assert.ok(row.metrics.fabricatedDetailRisk >= 0 && row.metrics.fabricatedDetailRisk <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.downstreamUtility > 0);
const selected = chooseRestorationMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minDownstreamUtility > 62);
assert.ok(summary.maxFabricatedDetailRisk < 30);
assert.equal(summary.block, 0);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-restoration-fidelity-bench:", summary.cases, "cases", summary.maxFabricatedDetailRisk, "max fabricated risk");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stages():
    text = RESTORATION_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "diagnosis": by_stage["degradation-diagnosis"]["gateScore"],
        "fidelity": by_stage["fidelity-gate"]["gateScore"],
        "downstream": by_stage["downstream-validation"]["gateScore"],
        "evidenceDepth": by_stage["degradation-diagnosis"]["evidenceDepthScore"],
    }


def read_cached_gpu_results():
    if not COLAB_RESULTS.exists():
        return []
    return [
        row for row in json.loads(COLAB_RESULTS.read_text(encoding="utf-8"))
        if row.get("jobId") == "restoration-fidelity" and row.get("mode") == "cached-real"
    ]


def score_case(case, stage_evidence):
    blur = max(0, min(100, float(case["blur"])))
    noise = max(0, min(100, float(case["noise"])))
    compression = max(0, min(100, float(case["compression"])))
    low_light = max(0, min(100, float(case["lowLight"])))
    hallucination = max(0, min(100, float(case["hallucinationPenalty"])))
    load = max(0, min(100, blur * 0.24 + noise * 0.22 + compression * 0.22 + low_light * 0.22 + hallucination * 0.10))
    diagnosis = max(0, min(100, stage_evidence["diagnosis"] * 0.34 + stage_evidence["evidenceDepth"] * 0.18 + (100 - abs(blur - noise)) * 0.10 + (100 - load) * 0.28 + hallucination * 0.10))
    fidelity = max(0, min(100, stage_evidence["fidelity"] * 0.34 + diagnosis * 0.24 + (100 - hallucination) * 0.24 + (100 - compression) * 0.10 + (100 - blur) * 0.08))
    artifact = max(0, min(100, load * 0.30 + hallucination * 0.30 + compression * 0.16 + low_light * 0.14 + (100 - fidelity) * 0.10))
    downstream = max(0, min(100, stage_evidence["downstream"] * 0.34 + fidelity * 0.30 + diagnosis * 0.18 + (100 - artifact) * 0.18))
    fabricated = max(0, min(100, hallucination * 0.42 + (100 - fidelity) * 0.24 + low_light * 0.14 + compression * 0.12 + blur * 0.08))
    readiness = max(0, min(100, diagnosis * 0.22 + fidelity * 0.30 + downstream * 0.30 + (100 - fabricated) * 0.18))
    return {
        "degradationLoad": round(load, 1),
        "diagnosisConfidence": round(diagnosis, 1),
        "fidelityScore": round(fidelity, 1),
        "artifactRisk": round(artifact, 1),
        "downstreamUtility": round(downstream, 1),
        "fabricatedDetailRisk": round(fabricated, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 68 and metrics["fidelityScore"] >= 60 and metrics["downstreamUtility"] >= 62 and metrics["fabricatedDetailRisk"] <= 42:
        return "release"
    if metrics["readiness"] >= 54 and metrics["fidelityScore"] >= 48 and metrics["fabricatedDetailRisk"] <= 68:
        return "review"
    return "block"


def build_records(stages, stage_evidence):
    cached_by_case = {row["caseId"]: row for row in read_cached_gpu_results()}
    records = []
    for case in SCENARIOS:
        metrics = score_case(case, stage_evidence)
        cached = cached_by_case.get(case["id"])
        records.append({
            "id": case["id"],
            "title": case["title"],
            "system": "restoration-reliability-stack",
            "cluster": "Image restoration",
            "sourceStages": [stage["stage"] for stage in stages],
            "controls": {key: case[key] for key in ("blur", "noise", "compression", "lowLight", "hallucinationPenalty")},
            "metrics": metrics,
            "cachedGpuMetrics": cached["metrics"] if cached else None,
            "decision": decision(metrics),
            "acceptancePass": metrics["readiness"] >= 68 and metrics["downstreamUtility"] >= 62 and metrics["fabricatedDetailRisk"] <= 42,
            "runtimeModes": ["simulated", "cached-real"] if cached else ["simulated"],
            "preferredRuntime": "cached-real" if cached else "simulated",
            "gpuProvenance": cached["provenance"] if cached else None,
        })
    return records


def build_package(stage_evidence, records):
    cached_results = read_cached_gpu_results()
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const stageEvidence = " + json.dumps(stage_evidence, indent=2) + ";\nexport const scenarios = " + json.dumps(SCENARIOS, indent=2) + ";\nexport const records = " + json.dumps(records, indent=2) + ";\nexport const cachedGpuResults = " + json.dumps(cached_results, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Restoration Fidelity Bench\n\nBlur, noise, compression, low-light, and hallucination penalty controls for downstream restoration fidelity.\n")


def build_registry(stages, stage_evidence, records):
    cached_count = sum(1 for row in records if row["preferredRuntime"] == "cached-real")
    summary = {
        "bench": "cvpr-restoration-fidelity-bench",
        "sourceSystem": "restoration-reliability-stack",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "minDownstreamUtility": min(row["metrics"]["downstreamUtility"] for row in records),
        "maxFabricatedDetailRisk": max(row["metrics"]["fabricatedDetailRisk"] for row in records),
        "acceptancePass": any(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-real"],
        "gpuBacked": cached_count > 0,
        "cachedRealCases": cached_count,
        "colabWorker": "cvpr-colab-gpu-worker",
        "playbookSource": "06-image-restoration-noisy-restoration",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    cases_json = json.dumps(SCENARIOS)
    cached_json = json.dumps(read_cached_gpu_results())
    rows = "".join(f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['diagnosisConfidence']}</td><td>{row['metrics']['fidelityScore']}</td><td>{row['metrics']['downstreamUtility']}</td><td>{row['metrics']['fabricatedDetailRisk']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>""" for row in records)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Restoration Fidelity Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · restoration fidelity bench</div><h1>Downstream restoration fidelity bench</h1><p>Executes the seventh CVPR Demo Playbook item: stress restoration under blur, noise, compression, low light, and hallucinated detail before trusting downstream utility.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-demo-arena.html">arena</a><a href="restoration-reliability-stack.html">restoration system</a><a href="analysis/cvpr_restoration_fidelity_bench/registry.json">bench registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['cases']}</b><span>restoration cases</span></div><div class="stat"><b>{summary['avgReadiness']}</b><span>avg readiness</span></div><div class="stat"><b>{summary['cachedRealCases']}</b><span>cached GPU cases</span></div><div class="stat"><b>{summary['block']}</b><span>blocked cases</span></div></section>
<section class="bench"><aside class="panel controls"><label>runtime<select id="runtime"><option value="simulated">simulated</option><option value="cached-real">cached-real</option></select></label><label>scenario<select id="scenario"></select></label><label>blur<input id="blur" type="range" min="0" max="100"></label><output id="blurOut"></output><label>noise<input id="noise" type="range" min="0" max="100"></label><output id="noiseOut"></output><label>compression<input id="compression" type="range" min="0" max="100"></label><output id="compressionOut"></output><label>low light<input id="lowLight" type="range" min="0" max="100"></label><output id="lowLightOut"></output><label>hallucination penalty<input id="hallucinationPenalty" type="range" min="0" max="100"></label><output id="hallucinationOut"></output></aside><section class="panel"><canvas id="restore" width="760" height="360" aria-label="restoration fidelity chart"></canvas><div class="meters"><div><b id="diagnosis">0</b><span>diagnosis</span></div><div><b id="fidelity">0</b><span>fidelity</span></div><div><b id="utility">0</b><span>utility</span></div><div><b id="fabricated">0</b><span>fabricated</span></div><div><b id="decision">-</b><span id="runtimeLabel">decision</span></div></div></section></section>
<section class="panel"><h2>Default Restoration Runs</h2><table><thead><tr><th>Case</th><th>Diagnosis</th><th>Fidelity</th><th>Utility</th><th>Fabricated risk</th><th>Decision</th></tr></thead><tbody>{rows}</tbody></table></section>
<section class="panel"><h2>Acceptance Gate</h2><code>raise noisy-restoration readiness above 68 without lowering downstream utility · stage evidence: {esc(stage_evidence)}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_restoration_fidelity_bench.py · tested package under source-code/learning/cvpr-restoration-fidelity-bench</div></footer>
<script type="module">
import {{ chooseRestorationMetrics, restorationDecision }} from "./source-code/learning/cvpr-restoration-fidelity-bench/src/core.js";
const scenarios = {cases_json}; const stageEvidence = {json.dumps(stage_evidence)}; const cachedGpuResults = {cached_json}; const select = document.querySelector("#scenario");
for (const scenario of scenarios) {{ const option = document.createElement("option"); option.value = scenario.id; option.textContent = scenario.title; select.append(option); }}
const ids = ["blur","noise","compression","lowLight","hallucinationPenalty"]; const outs = {{ blur:"blurOut", noise:"noiseOut", compression:"compressionOut", lowLight:"lowLightOut", hallucinationPenalty:"hallucinationOut" }};
function cls(decision) {{ return decision === "release" ? "release" : decision === "review" ? "review" : "block"; }}
function setScenario(id) {{ const s = scenarios.find((row) => row.id === id) || scenarios[0]; ids.forEach((key) => document.querySelector("#"+key).value = s[key]); render(); }}
function draw(metrics, controls) {{ const canvas=document.querySelector("#restore"), ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); const x0=72,y0=66,w=250,h=190; ctx.fillStyle=`rgb(${{185-controls.lowLight}},${{205-controls.lowLight*0.5}},${{210-controls.lowLight*0.3}})`; ctx.fillRect(x0,y0,w,h); ctx.strokeStyle="#8EA2A1"; ctx.strokeRect(x0,y0,w,h); ctx.fillStyle=`rgba(155,45,45,${{controls.noise/160}})`; for(let i=0;i<36;i++){{ctx.fillRect(x0+(i*37)%w,y0+(i*23)%h,2+controls.noise/18,2+controls.noise/18);}} ctx.strokeStyle="#0E7C86"; ctx.lineWidth=5; ctx.strokeRect(405,84,190,132); ctx.strokeStyle=metrics.fabricatedDetailRisk>68?"#9B2D2D":"#2F7A4F"; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(430,240); ctx.lineTo(430+metrics.downstreamUtility*2.1,240); ctx.stroke(); const bars=[["fidelity",metrics.fidelityScore,"#0E7C86"],["utility",metrics.downstreamUtility,"#2F7A4F"],["fabricated",metrics.fabricatedDetailRisk,"#9B2D2D"]]; bars.forEach(([name,val,color],i)=>{{ const x=420+i*94; ctx.fillStyle=color; ctx.fillRect(x,322-val*1.6,46,val*1.6); ctx.fillStyle="#23302C"; ctx.font="12px ui-monospace, monospace"; ctx.fillText(name,x,342); }}); ctx.fillStyle="#23302C"; ctx.fillText(`blur ${{controls.blur}} · compression ${{controls.compression}}`, 72, 38); }}
function render() {{ const controls=Object.fromEntries(ids.map((key)=>[key,Number(document.querySelector("#"+key).value)])); ids.forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const scenario={{...controls,id:select.value,title:select.options[select.selectedIndex].textContent}}; const selected=chooseRestorationMetrics(scenario, stageEvidence, cachedGpuResults, document.querySelector("#runtime").value); const metrics=selected.metrics; const decision=restorationDecision(metrics); document.querySelector("#diagnosis").textContent=metrics.diagnosisConfidence.toFixed(1); document.querySelector("#fidelity").textContent=metrics.fidelityScore.toFixed(1); document.querySelector("#utility").textContent=metrics.downstreamUtility.toFixed(1); document.querySelector("#fabricated").textContent=metrics.fabricatedDetailRisk.toFixed(1); document.querySelector("#runtimeLabel").textContent=selected.runtimeMode; const d=document.querySelector("#decision"); d.textContent=decision; d.className=cls(decision); draw(metrics, controls); }}
select.addEventListener("change",()=>setScenario(select.value)); document.querySelector("#runtime").addEventListener("change",render); ids.forEach((key)=>document.querySelector("#"+key).addEventListener("input",render)); select.value=scenarios[0].id; document.querySelector("#runtime").value="cached-real"; setScenario(select.value);
</script></body></html>"""
    write(ROOT / "cvpr-restoration-fidelity-bench.html", page)


def main():
    stages, stage_evidence = read_stages()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-restoration-fidelity-bench.html: {summary['cases']} cases, max fabricated risk {summary['maxFabricatedDetailRisk']}")


if __name__ == "__main__":
    main()

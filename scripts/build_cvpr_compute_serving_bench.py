"""Build the CVPR compute-constrained serving bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-compute-serving-bench"
ANALYSIS = ROOT / "analysis/cvpr_compute_serving_bench"
EFFICIENT_FIXTURES = ROOT / "source-code/learning/efficient-vision-serving/src/fixtures.js"
COLAB_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"

SCENARIOS = [
    {"id": "desktop-batch", "title": "Desktop batch review", "tokenBudget": 90, "quantizationLevel": 16, "studentRouting": 30, "escalationCost": 10},
    {"id": "mobile-live", "title": "Mobile live inference", "tokenBudget": 82, "quantizationLevel": 18, "studentRouting": 60, "escalationCost": 10},
    {"id": "edge-camera", "title": "Edge camera stream", "tokenBudget": 78, "quantizationLevel": 20, "studentRouting": 55, "escalationCost": 8},
    {"id": "fleet-peak-load", "title": "Fleet peak load", "tokenBudget": 84, "quantizationLevel": 22, "studentRouting": 65, "escalationCost": 8},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreServingCase(input, stageEvidence = { token: 72.4, quantized: 75.4, routing: 78.4, evidenceDepth: 37.7 }) {
  const tokens = clamp(input.tokenBudget);
  const quant = clamp(input.quantizationLevel);
  const routing = clamp(input.studentRouting);
  const escalation = clamp(input.escalationCost);
  const latency = clamp(98 - tokens * 0.34 - quant * 0.28 - routing * 0.18 + escalation * 0.12);
  const retainedEvidence = clamp(stageEvidence.evidenceDepth * 0.34 + tokens * 0.38 + (100 - quant) * 0.16 + stageEvidence.token * 0.12);
  const qualityFloor = clamp(stageEvidence.quantized * 0.30 + retainedEvidence * 0.34 + (100 - quant) * 0.22 + (100 - routing) * 0.14);
  const escalationRate = clamp((100 - qualityFloor) * 0.36 + routing * 0.32 + escalation * 0.22 + (100 - tokens) * 0.10);
  const costSaving = clamp((100 - latency) * 0.40 + quant * 0.24 + routing * 0.22 + (100 - escalationRate) * 0.14);
  const risk = clamp((100 - retainedEvidence) * 0.30 + (100 - qualityFloor) * 0.34 + escalationRate * 0.20 + quant * 0.16);
  const readiness = clamp(costSaving * 0.24 + retainedEvidence * 0.30 + qualityFloor * 0.30 + (100 - risk) * 0.16);
  return { latency, retainedEvidence, qualityFloor, escalationRate, costSaving, risk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "compute-serving" || result.mode !== "cached-real") return null;
  const latency = clamp(result.metrics.latency);
  const retainedEvidence = clamp(result.metrics.retainedEvidence);
  const qualityFloor = clamp(result.metrics.qualityFloor);
  const escalationRate = clamp(result.metrics.escalationRate);
  const costSaving = clamp(result.metrics.costSaving);
  const risk = clamp(result.metrics.risk);
  const readiness = clamp(result.metrics.readiness);
  return { latency, retainedEvidence, qualityFloor, escalationRate, costSaving, risk, readiness };
}

export function chooseServingMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreServingCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function servingDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.retainedEvidence >= 55 && metrics.qualityFloor >= 58 && metrics.risk <= 42) return "release";
  if (metrics.readiness >= 54 && metrics.retainedEvidence >= 45 && metrics.risk <= 62) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseServingMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      tokenBudget: scenario.tokenBudget,
      quantizationLevel: scenario.quantizationLevel,
      studentRouting: scenario.studentRouting,
      escalationCost: scenario.escalationCost
    },
    metrics,
    decision: servingDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.retainedEvidence >= 55,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minEvidence = Math.min(...caseRows.map((row) => row.metrics.retainedEvidence));
  const maxLatency = Math.max(...caseRows.map((row) => row.metrics.latency));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minRetainedEvidence: Number(minEvidence.toFixed(1)),
    maxLatency: Number(maxLatency.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseServingMetrics, evaluateScenario, normalizeCachedGpuResult, scoreServingCase, servingDecision, summarizeBench } from "../src/core.js";

const rich = scoreServingCase({ tokenBudget: 82, quantizationLevel: 18, studentRouting: 35, escalationCost: 20 }, stageEvidence);
const starved = scoreServingCase({ tokenBudget: 18, quantizationLevel: 90, studentRouting: 88, escalationCost: 82 }, stageEvidence);
assert.ok(rich.retainedEvidence > starved.retainedEvidence);
assert.ok(rich.qualityFloor > starved.qualityFloor);
assert.notEqual(servingDecision(rich), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.latency >= 0 && row.metrics.latency <= 100);
  assert.ok(row.metrics.retainedEvidence >= 0 && row.metrics.retainedEvidence <= 100);
  assert.ok(row.metrics.qualityFloor >= 0 && row.metrics.qualityFloor <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.qualityFloor > 0);
const selected = chooseServingMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minRetainedEvidence > 53);
assert.ok(summary.maxLatency > 49);
assert.equal(summary.block, 0);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-compute-serving-bench:", summary.cases, "cases", summary.minRetainedEvidence, "min evidence");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stages():
    text = EFFICIENT_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "token": by_stage["token-budget"]["gateScore"],
        "quantized": by_stage["quantized-serving"]["gateScore"],
        "routing": by_stage["student-routing"]["gateScore"],
        "evidenceDepth": by_stage["token-budget"]["evidenceDepthScore"],
    }


def read_cached_gpu_results():
    if not COLAB_RESULTS.exists():
        return []
    return [
        row for row in json.loads(COLAB_RESULTS.read_text(encoding="utf-8"))
        if row.get("jobId") == "compute-serving" and row.get("mode") == "cached-real"
    ]


def score_case(case, stage_evidence):
    tokens = max(0, min(100, float(case["tokenBudget"])))
    quant = max(0, min(100, float(case["quantizationLevel"])))
    routing = max(0, min(100, float(case["studentRouting"])))
    escalation = max(0, min(100, float(case["escalationCost"])))
    latency = max(0, min(100, 98 - tokens * 0.34 - quant * 0.28 - routing * 0.18 + escalation * 0.12))
    evidence = max(0, min(100, stage_evidence["evidenceDepth"] * 0.34 + tokens * 0.38 + (100 - quant) * 0.16 + stage_evidence["token"] * 0.12))
    quality = max(0, min(100, stage_evidence["quantized"] * 0.30 + evidence * 0.34 + (100 - quant) * 0.22 + (100 - routing) * 0.14))
    escalation_rate = max(0, min(100, (100 - quality) * 0.36 + routing * 0.32 + escalation * 0.22 + (100 - tokens) * 0.10))
    saving = max(0, min(100, (100 - latency) * 0.40 + quant * 0.24 + routing * 0.22 + (100 - escalation_rate) * 0.14))
    risk = max(0, min(100, (100 - evidence) * 0.30 + (100 - quality) * 0.34 + escalation_rate * 0.20 + quant * 0.16))
    readiness = max(0, min(100, saving * 0.24 + evidence * 0.30 + quality * 0.30 + (100 - risk) * 0.16))
    return {
        "latency": round(latency, 1),
        "retainedEvidence": round(evidence, 1),
        "qualityFloor": round(quality, 1),
        "escalationRate": round(escalation_rate, 1),
        "costSaving": round(saving, 1),
        "risk": round(risk, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 68 and metrics["retainedEvidence"] >= 55 and metrics["qualityFloor"] >= 58 and metrics["risk"] <= 42:
        return "release"
    if metrics["readiness"] >= 54 and metrics["retainedEvidence"] >= 45 and metrics["risk"] <= 62:
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
            "system": "efficient-vision-serving",
            "cluster": "Efficient vision",
            "sourceStages": [stage["stage"] for stage in stages],
            "controls": {key: case[key] for key in ("tokenBudget", "quantizationLevel", "studentRouting", "escalationCost")},
            "metrics": metrics,
            "cachedGpuMetrics": cached["metrics"] if cached else None,
            "decision": decision(metrics),
            "acceptancePass": metrics["readiness"] >= 68 and metrics["retainedEvidence"] >= 55,
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
    write(BASE / "README.md", "# CVPR Compute Serving Bench\n\nToken, quantization, routing, and escalation controls for efficient vision serving.\n")


def build_registry(stages, stage_evidence, records):
    cached_count = sum(1 for row in records if row["preferredRuntime"] == "cached-real")
    summary = {
        "bench": "cvpr-compute-serving-bench",
        "sourceSystem": "efficient-vision-serving",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "minRetainedEvidence": min(row["metrics"]["retainedEvidence"] for row in records),
        "maxLatency": max(row["metrics"]["latency"] for row in records),
        "acceptancePass": any(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-real"],
        "gpuBacked": cached_count > 0,
        "cachedRealCases": cached_count,
        "colabWorker": "cvpr-colab-gpu-worker",
        "playbookSource": "05-efficient-vision-compute-constrained",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    cases_json = json.dumps(SCENARIOS)
    cached_json = json.dumps(read_cached_gpu_results())
    rows = "".join(f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['latency']}</td><td>{row['metrics']['retainedEvidence']}</td><td>{row['metrics']['qualityFloor']}</td><td>{row['metrics']['escalationRate']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>""" for row in records)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Compute Serving Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · compute serving bench</div><h1>Compute budget serving bench</h1><p>Executes the fourth CVPR Demo Playbook item: test token budgets, quantization, student routing, and escalation costs against evidence and quality gates.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-demo-arena.html">arena</a><a href="efficient-vision-serving.html">efficient system</a><a href="analysis/cvpr_compute_serving_bench/registry.json">bench registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['cases']}</b><span>serving cases</span></div><div class="stat"><b>{summary['avgReadiness']}</b><span>avg readiness</span></div><div class="stat"><b>{summary['minRetainedEvidence']}</b><span>min evidence</span></div><div class="stat"><b>{summary['block']}</b><span>blocked cases</span></div></section>
<section class="bench"><aside class="panel controls"><label>runtime<select id="runtime"><option value="cached-real">cached-real</option><option value="simulated">simulated</option></select></label><label>scenario<select id="scenario"></select></label><label>token budget<input id="tokenBudget" type="range" min="0" max="100"></label><output id="tokenOut"></output><label>quantization level<input id="quantizationLevel" type="range" min="0" max="100"></label><output id="quantOut"></output><label>student routing<input id="studentRouting" type="range" min="0" max="100"></label><output id="routingOut"></output><label>escalation cost<input id="escalationCost" type="range" min="0" max="100"></label><output id="costOut"></output></aside><section class="panel"><canvas id="serve" width="760" height="360" aria-label="compute serving chart"></canvas><div class="meters"><div><b id="latency">0</b><span>latency</span></div><div><b id="evidence">0</b><span>evidence</span></div><div><b id="quality">0</b><span>quality</span></div><div><b id="risk">0</b><span>risk</span></div><div><b id="decision">-</b><span id="runtimeLabel">decision</span></div></div></section></section>
<section class="panel"><h2>Default Serving Runs</h2><table><thead><tr><th>Case</th><th>Latency</th><th>Evidence</th><th>Quality</th><th>Escalation</th><th>Decision</th></tr></thead><tbody>{rows}</tbody></table></section>
<section class="panel"><h2>Acceptance Gate</h2><code>raise compute-constrained readiness above 68 while preserving evidence above 55 · stage evidence: {esc(stage_evidence)}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_compute_serving_bench.py · tested package under source-code/learning/cvpr-compute-serving-bench</div></footer>
<script type="module">
import {{ chooseServingMetrics, servingDecision }} from "./source-code/learning/cvpr-compute-serving-bench/src/core.js";
const scenarios = {cases_json}; const stageEvidence = {json.dumps(stage_evidence)}; const cachedGpuResults = {cached_json}; const select = document.querySelector("#scenario");
for (const scenario of scenarios) {{ const option = document.createElement("option"); option.value = scenario.id; option.textContent = scenario.title; select.append(option); }}
const ids = ["tokenBudget","quantizationLevel","studentRouting","escalationCost"]; const outs = {{ tokenBudget:"tokenOut", quantizationLevel:"quantOut", studentRouting:"routingOut", escalationCost:"costOut" }};
function cls(decision) {{ return decision === "release" ? "release" : decision === "review" ? "review" : "block"; }}
function setScenario(id) {{ const s = scenarios.find((row) => row.id === id) || scenarios[0]; ids.forEach((key) => document.querySelector("#" + key).value = s[key]); render(); }}
function draw(metrics, controls) {{ const canvas = document.querySelector("#serve"), ctx = canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); const bars=[["latency",metrics.latency,"#B37A1E"],["evidence",metrics.retainedEvidence,"#0E7C86"],["quality",metrics.qualityFloor,"#2F7A4F"],["risk",metrics.risk,"#9B2D2D"],["saving",metrics.costSaving,"#59656A"]]; bars.forEach(([name,val,color],i)=>{{ const x=80+i*126; ctx.fillStyle=color; ctx.fillRect(x,280-val*2.1,58,val*2.1); ctx.fillStyle="#23302C"; ctx.font="13px ui-monospace, monospace"; ctx.fillText(name,x,306); ctx.fillText(val.toFixed(1),x,264-val*2.1); }}); ctx.fillText(`tokens ${{controls.tokenBudget}} · quant ${{controls.quantizationLevel}} · route ${{controls.studentRouting}}`, 80, 38); }}
function render() {{ const controls = Object.fromEntries(ids.map((key) => [key, Number(document.querySelector("#"+key).value)])); ids.forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const scenario={{ id: select.value, title: select.options[select.selectedIndex]?.textContent || select.value, ...controls }}; const selected=chooseServingMetrics(scenario, stageEvidence, cachedGpuResults, document.querySelector("#runtime").value); const metrics=selected.metrics; const decision=servingDecision(metrics); document.querySelector("#latency").textContent=metrics.latency.toFixed(1); document.querySelector("#evidence").textContent=metrics.retainedEvidence.toFixed(1); document.querySelector("#quality").textContent=metrics.qualityFloor.toFixed(1); document.querySelector("#risk").textContent=metrics.risk.toFixed(1); const d=document.querySelector("#decision"); d.textContent=decision; d.className=cls(decision); document.querySelector("#runtimeLabel").textContent=selected.runtimeMode; draw(metrics, controls); }}
select.addEventListener("change", () => setScenario(select.value)); document.querySelector("#runtime").addEventListener("change", render); ids.forEach((key)=>document.querySelector("#"+key).addEventListener("input", render)); select.value=scenarios[0].id; setScenario(select.value);
</script></body></html>"""
    write(ROOT / "cvpr-compute-serving-bench.html", page)


def main():
    stages, stage_evidence = read_stages()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-compute-serving-bench.html: {summary['cases']} cases, min evidence {summary['minRetainedEvidence']}")


if __name__ == "__main__":
    main()

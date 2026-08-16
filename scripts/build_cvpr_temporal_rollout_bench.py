"""Build the CVPR long-horizon temporal rollout bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-temporal-rollout-bench"
ANALYSIS = ROOT / "analysis/cvpr_temporal_rollout_bench"
VIDEO_FIXTURES = ROOT / "source-code/learning/video-world-model/src/fixtures.js"
COLAB_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"

SCENARIOS = [
    {"id": "short-stable", "title": "Short stable rollout", "rolloutLength": 24, "identityDensity": 28, "physicsViolations": 14, "memoryWindow": 72},
    {"id": "crowded-memory", "title": "Crowded identity memory", "rolloutLength": 36, "identityDensity": 76, "physicsViolations": 26, "memoryWindow": 82},
    {"id": "contact-heavy", "title": "Contact-heavy prediction", "rolloutLength": 56, "identityDensity": 52, "physicsViolations": 20, "memoryWindow": 82},
    {"id": "long-rollout-drift", "title": "Long rollout drift", "rolloutLength": 66, "identityDensity": 68, "physicsViolations": 12, "memoryWindow": 92},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRolloutCase(input, stageEvidence = { memory: 70.6, physics: 73.6, rollout: 76.6, evidenceDepth: 56.3 }) {
  const length = clamp(input.rolloutLength);
  const density = clamp(input.identityDensity);
  const violations = clamp(input.physicsViolations);
  const memoryWindow = clamp(input.memoryWindow);
  const memoryLoad = clamp(length * 0.34 + density * 0.34 + (100 - memoryWindow) * 0.32);
  const identityStability = clamp(stageEvidence.memory * 0.36 + memoryWindow * 0.30 + (100 - density) * 0.16 + (100 - length) * 0.18);
  const contactConsistency = clamp(stageEvidence.physics * 0.42 + (100 - violations) * 0.38 + memoryWindow * 0.12 + (100 - density) * 0.08);
  const rolloutPlausibility = clamp(stageEvidence.rollout * 0.34 + contactConsistency * 0.24 + identityStability * 0.22 + (100 - length) * 0.20);
  const drift = clamp(memoryLoad * 0.30 + (100 - identityStability) * 0.30 + violations * 0.24 + length * 0.16);
  const readiness = clamp(identityStability * 0.30 + contactConsistency * 0.28 + rolloutPlausibility * 0.26 + (100 - drift) * 0.16);
  return { memoryLoad, identityStability, contactConsistency, rolloutPlausibility, drift, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "temporal-rollout" || result.mode !== "cached-real") return null;
  const memoryLoad = clamp(result.metrics.memoryLoad);
  const identityStability = clamp(result.metrics.identityStability);
  const contactConsistency = clamp(result.metrics.contactConsistency);
  const rolloutPlausibility = clamp(result.metrics.rolloutPlausibility);
  const drift = clamp(result.metrics.drift);
  const readiness = clamp(result.metrics.readiness);
  return { memoryLoad, identityStability, contactConsistency, rolloutPlausibility, drift, readiness };
}

export function chooseRolloutMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreRolloutCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function rolloutDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.identityStability >= 60 && metrics.contactConsistency >= 58 && metrics.drift <= 42) return "release";
  if (metrics.readiness >= 54 && metrics.identityStability >= 48 && metrics.drift <= 64) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseRolloutMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      rolloutLength: scenario.rolloutLength,
      identityDensity: scenario.identityDensity,
      physicsViolations: scenario.physicsViolations,
      memoryWindow: scenario.memoryWindow
    },
    metrics,
    decision: rolloutDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.drift <= 42,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const maxDrift = Math.max(...caseRows.map((row) => row.metrics.drift));
  const minIdentityStability = Math.min(...caseRows.map((row) => row.metrics.identityStability));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    maxDrift: Number(maxDrift.toFixed(1)),
    minIdentityStability: Number(minIdentityStability.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseRolloutMetrics, evaluateScenario, normalizeCachedGpuResult, rolloutDecision, scoreRolloutCase, summarizeBench } from "../src/core.js";

const short = scoreRolloutCase({ rolloutLength: 20, identityDensity: 24, physicsViolations: 8, memoryWindow: 86 }, stageEvidence);
const long = scoreRolloutCase({ rolloutLength: 94, identityDensity: 88, physicsViolations: 78, memoryWindow: 30 }, stageEvidence);
assert.ok(short.identityStability > long.identityStability);
assert.ok(short.drift < long.drift);
assert.notEqual(rolloutDecision(short), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.identityStability >= 0 && row.metrics.identityStability <= 100);
  assert.ok(row.metrics.contactConsistency >= 0 && row.metrics.contactConsistency <= 100);
  assert.ok(row.metrics.drift >= 0 && row.metrics.drift <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.rolloutPlausibility > 0);
const selected = chooseRolloutMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.maxDrift < 38);
assert.ok(summary.minIdentityStability > 56);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-temporal-rollout-bench:", summary.cases, "cases", summary.maxDrift, "max drift");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stages():
    text = VIDEO_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "memory": by_stage["temporal-memory"]["gateScore"],
        "physics": by_stage["physics-consistency"]["gateScore"],
        "rollout": by_stage["future-rollout"]["gateScore"],
        "evidenceDepth": by_stage["temporal-memory"]["evidenceDepthScore"],
    }


def read_cached_gpu_results():
    if not COLAB_RESULTS.exists():
        return []
    return [
        row for row in json.loads(COLAB_RESULTS.read_text(encoding="utf-8"))
        if row.get("jobId") == "temporal-rollout" and row.get("mode") == "cached-real"
    ]


def score_case(case, stage_evidence):
    length = max(0, min(100, float(case["rolloutLength"])))
    density = max(0, min(100, float(case["identityDensity"])))
    violations = max(0, min(100, float(case["physicsViolations"])))
    memory_window = max(0, min(100, float(case["memoryWindow"])))
    memory_load = max(0, min(100, length * 0.34 + density * 0.34 + (100 - memory_window) * 0.32))
    identity = max(0, min(100, stage_evidence["memory"] * 0.36 + memory_window * 0.30 + (100 - density) * 0.16 + (100 - length) * 0.18))
    contact = max(0, min(100, stage_evidence["physics"] * 0.42 + (100 - violations) * 0.38 + memory_window * 0.12 + (100 - density) * 0.08))
    plausibility = max(0, min(100, stage_evidence["rollout"] * 0.34 + contact * 0.24 + identity * 0.22 + (100 - length) * 0.20))
    drift = max(0, min(100, memory_load * 0.30 + (100 - identity) * 0.30 + violations * 0.24 + length * 0.16))
    readiness = max(0, min(100, identity * 0.30 + contact * 0.28 + plausibility * 0.26 + (100 - drift) * 0.16))
    return {
        "memoryLoad": round(memory_load, 1),
        "identityStability": round(identity, 1),
        "contactConsistency": round(contact, 1),
        "rolloutPlausibility": round(plausibility, 1),
        "drift": round(drift, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 68 and metrics["identityStability"] >= 60 and metrics["contactConsistency"] >= 58 and metrics["drift"] <= 42:
        return "release"
    if metrics["readiness"] >= 54 and metrics["identityStability"] >= 48 and metrics["drift"] <= 64:
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
            "system": "video-world-model",
            "cluster": "Video generation and world models",
            "sourceStages": [stage["stage"] for stage in stages],
            "controls": {key: case[key] for key in ("rolloutLength", "identityDensity", "physicsViolations", "memoryWindow")},
            "metrics": metrics,
            "cachedGpuMetrics": cached["metrics"] if cached else None,
            "decision": decision(metrics),
            "acceptancePass": metrics["readiness"] >= 68 and metrics["drift"] <= 42,
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
    write(BASE / "README.md", "# CVPR Temporal Rollout Bench\n\nRollout length, identity density, physics violation, and memory-window controls for video world models.\n")


def build_registry(stages, stage_evidence, records):
    cached_count = sum(1 for row in records if row["preferredRuntime"] == "cached-real")
    summary = {
        "bench": "cvpr-temporal-rollout-bench",
        "sourceSystem": "video-world-model",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "maxDrift": max(row["metrics"]["drift"] for row in records),
        "minIdentityStability": min(row["metrics"]["identityStability"] for row in records),
        "acceptancePass": any(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-real"],
        "gpuBacked": cached_count > 0,
        "cachedRealCases": cached_count,
        "colabWorker": "cvpr-colab-gpu-worker",
        "playbookSource": "04-video-generation-and-world-models-temporal-rollout",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    cases_json = json.dumps(SCENARIOS)
    cached_json = json.dumps(read_cached_gpu_results())
    rows = "".join(f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['identityStability']}</td><td>{row['metrics']['contactConsistency']}</td><td>{row['metrics']['rolloutPlausibility']}</td><td>{row['metrics']['drift']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>""" for row in records)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Temporal Rollout Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · temporal rollout bench</div><h1>Long-horizon world rollout bench</h1><p>Executes the sixth CVPR Demo Playbook item: test long rollouts for identity drift, contact consistency, physics violations, and future plausibility before release.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-demo-arena.html">arena</a><a href="video-world-model.html">video system</a><a href="analysis/cvpr_temporal_rollout_bench/registry.json">bench registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['cases']}</b><span>rollout cases</span></div><div class="stat"><b>{summary['avgReadiness']}</b><span>avg readiness</span></div><div class="stat"><b>{summary['maxDrift']}</b><span>max drift</span></div><div class="stat"><b>{summary['block']}</b><span>blocked cases</span></div></section>
<section class="bench"><aside class="panel controls"><label>runtime<select id="runtime"><option value="cached-real">cached-real</option><option value="simulated">simulated</option></select></label><label>scenario<select id="scenario"></select></label><label>rollout length<input id="rolloutLength" type="range" min="0" max="100"></label><output id="lengthOut"></output><label>identity density<input id="identityDensity" type="range" min="0" max="100"></label><output id="densityOut"></output><label>physics violations<input id="physicsViolations" type="range" min="0" max="100"></label><output id="violationsOut"></output><label>memory window<input id="memoryWindow" type="range" min="0" max="100"></label><output id="memoryOut"></output></aside><section class="panel"><canvas id="rollout" width="760" height="360" aria-label="temporal rollout chart"></canvas><div class="meters"><div><b id="identity">0</b><span>identity</span></div><div><b id="contact">0</b><span>contact</span></div><div><b id="plausibility">0</b><span>plausible</span></div><div><b id="drift">0</b><span>drift</span></div><div><b id="decision">-</b><span id="runtimeLabel">decision</span></div></div></section></section>
<section class="panel"><h2>Default Rollout Runs</h2><table><thead><tr><th>Case</th><th>Identity</th><th>Contact</th><th>Plausibility</th><th>Drift</th><th>Decision</th></tr></thead><tbody>{rows}</tbody></table></section>
<section class="panel"><h2>Acceptance Gate</h2><code>raise temporal-rollout readiness above 68 with drift under the review threshold · stage evidence: {esc(stage_evidence)}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_temporal_rollout_bench.py · tested package under source-code/learning/cvpr-temporal-rollout-bench</div></footer>
<script type="module">
import {{ chooseRolloutMetrics, rolloutDecision }} from "./source-code/learning/cvpr-temporal-rollout-bench/src/core.js";
const scenarios = {cases_json}; const stageEvidence = {json.dumps(stage_evidence)}; const cachedGpuResults = {cached_json}; const select = document.querySelector("#scenario");
for (const scenario of scenarios) {{ const option = document.createElement("option"); option.value = scenario.id; option.textContent = scenario.title; select.append(option); }}
const ids = ["rolloutLength","identityDensity","physicsViolations","memoryWindow"]; const outs = {{ rolloutLength:"lengthOut", identityDensity:"densityOut", physicsViolations:"violationsOut", memoryWindow:"memoryOut" }};
function cls(decision) {{ return decision === "release" ? "release" : decision === "review" ? "review" : "block"; }}
function setScenario(id) {{ const s = scenarios.find((row) => row.id === id) || scenarios[0]; ids.forEach((key) => document.querySelector("#"+key).value = s[key]); render(); }}
function draw(metrics, controls) {{ const canvas=document.querySelector("#rollout"), ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.strokeStyle="#D7DCD9"; ctx.lineWidth=1; for(let x=70;x<=680;x+=76){{ctx.beginPath();ctx.moveTo(x,58);ctx.lineTo(x,288);ctx.stroke();}} const tracks=[["A","#0E7C86",0],["B","#2F7A4F",32],["C","#B37A1E",64]]; tracks.forEach(([name,color,off],i)=>{{ ctx.strokeStyle=color; ctx.lineWidth=3; ctx.beginPath(); for(let step=0;step<8;step++){{ const x=78+step*78; const wobble=(100-metrics.identityStability)*0.16*step + controls.identityDensity*0.04*i; const y=102+off+Math.sin(step+i)*16+wobble; if(step===0)ctx.moveTo(x,y); else ctx.lineTo(x,y); ctx.fillStyle=color; ctx.fillRect(x-4,y-4,8,8); }} ctx.stroke(); ctx.fillStyle="#23302C"; ctx.font="12px ui-monospace, monospace"; ctx.fillText(`id ${{name}}`, 690, 105+off); }}); ctx.strokeStyle=metrics.drift>64?"#9B2D2D":metrics.drift>42?"#B37A1E":"#2F7A4F"; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(70,320); ctx.lineTo(70+metrics.drift*5.4,320); ctx.stroke(); ctx.fillStyle="#23302C"; ctx.fillText(`rollout ${{controls.rolloutLength}} · memory ${{controls.memoryWindow}}`, 70, 38); }}
function render() {{ const controls=Object.fromEntries(ids.map((key)=>[key,Number(document.querySelector("#"+key).value)])); ids.forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const scenario={{ id: select.value, title: select.options[select.selectedIndex]?.textContent || select.value, ...controls }}; const selected=chooseRolloutMetrics(scenario, stageEvidence, cachedGpuResults, document.querySelector("#runtime").value); const metrics=selected.metrics; const decision=rolloutDecision(metrics); document.querySelector("#identity").textContent=metrics.identityStability.toFixed(1); document.querySelector("#contact").textContent=metrics.contactConsistency.toFixed(1); document.querySelector("#plausibility").textContent=metrics.rolloutPlausibility.toFixed(1); document.querySelector("#drift").textContent=metrics.drift.toFixed(1); const d=document.querySelector("#decision"); d.textContent=decision; d.className=cls(decision); document.querySelector("#runtimeLabel").textContent=selected.runtimeMode; draw(metrics, controls); }}
select.addEventListener("change",()=>setScenario(select.value)); document.querySelector("#runtime").addEventListener("change", render); ids.forEach((key)=>document.querySelector("#"+key).addEventListener("input",render)); select.value=scenarios[0].id; setScenario(select.value);
</script></body></html>"""
    write(ROOT / "cvpr-temporal-rollout-bench.html", page)


def main():
    stages, stage_evidence = read_stages()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-temporal-rollout-bench.html: {summary['cases']} cases, max drift {summary['maxDrift']}")


if __name__ == "__main__":
    main()

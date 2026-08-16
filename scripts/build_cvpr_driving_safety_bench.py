"""Build the CVPR driving safety-critical demo bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-driving-safety-bench"
ANALYSIS = ROOT / "analysis/cvpr_driving_safety_bench"
DRIVING_FIXTURES = ROOT / "source-code/learning/driving-vla-release-gate/src/fixtures.js"
PLAYBOOK = ROOT / "analysis/cvpr_demo_playbook/registry.json"
COLAB_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"

SCENARIOS = [
    {
        "id": "urban-cut-in",
        "title": "Urban cut-in",
        "hazardDensity": 48,
        "actorSpeed": 40,
        "occlusion": 10,
        "actionConfidence": 82,
    },
    {
        "id": "night-crosswalk",
        "title": "Night crosswalk",
        "hazardDensity": 36,
        "actorSpeed": 34,
        "occlusion": 18,
        "actionConfidence": 78,
    },
    {
        "id": "highway-merge",
        "title": "Highway merge",
        "hazardDensity": 24,
        "actorSpeed": 72,
        "occlusion": 16,
        "actionConfidence": 84,
    },
    {
        "id": "construction-zone",
        "title": "Construction zone",
        "hazardDensity": 36,
        "actorSpeed": 32,
        "occlusion": 14,
        "actionConfidence": 72,
    },
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function timeToCollision(actorSpeed, hazardDensity) {
  const speed = clamp(actorSpeed);
  const hazard = clamp(hazardDensity);
  return Number(clamp(8.2 - speed * 0.045 - hazard * 0.026, 0.6, 8.5).toFixed(2));
}

export function scoreSafetyCase(input, stageEvidence = 56.2) {
  const hazard = clamp(input.hazardDensity);
  const speed = clamp(input.actorSpeed);
  const occlusion = clamp(input.occlusion);
  const confidence = clamp(input.actionConfidence);
  const ttc = timeToCollision(speed, hazard);
  const sceneGrounding = clamp(stageEvidence * 0.42 + (100 - occlusion) * 0.25 + confidence * 0.22 + (100 - hazard) * 0.11);
  const risk = clamp(hazard * 0.32 + speed * 0.24 + occlusion * 0.29 + (100 - confidence) * 0.31 + (3.2 - Math.min(ttc, 3.2)) * 9);
  const ruleViolation = clamp(risk * 0.58 + (100 - sceneGrounding) * 0.32 + (confidence > 72 && ttc < 2.4 ? 12 : 0));
  const abstention = clamp(risk * 0.55 + (100 - sceneGrounding) * 0.28 - confidence * 0.18);
  const readiness = clamp(sceneGrounding * 0.36 + (100 - risk) * 0.34 + (100 - ruleViolation) * 0.18 + abstention * 0.12);
  return {
    sceneGrounding,
    timeToCollision: ttc,
    risk,
    ruleViolation,
    abstention,
    readiness
  };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "driving-safety" || result.mode !== "cached-real") return null;
  const sceneGrounding = clamp(result.metrics.sceneGrounding);
  const timeToCollision = Number(Math.max(0, Number(result.metrics.timeToCollision)).toFixed(2));
  const risk = clamp(result.metrics.risk);
  const ruleViolation = clamp(result.metrics.ruleViolation);
  const abstention = clamp(result.metrics.abstention);
  const readiness = clamp(result.metrics.readiness);
  return { sceneGrounding, timeToCollision, risk, ruleViolation, abstention, readiness };
}

export function chooseSafetyMetrics(scenario, stageEvidence = 56.2, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreSafetyCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function releaseDecision(metrics) {
  if (metrics.risk <= 35 && metrics.sceneGrounding >= 62 && metrics.ruleViolation <= 30 && metrics.readiness >= 62) return "release";
  if (metrics.risk <= 52 && metrics.sceneGrounding >= 48 && metrics.ruleViolation <= 48) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence = 56.2, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseSafetyMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      hazardDensity: scenario.hazardDensity,
      actorSpeed: scenario.actorSpeed,
      occlusion: scenario.occlusion,
      actionConfidence: scenario.actionConfidence
    },
    metrics,
    decision: releaseDecision(metrics),
    acceptancePass: metrics.readiness >= 62 && metrics.risk < 35,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence = 56.2, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const maxRisk = Math.max(...caseRows.map((row) => row.metrics.risk));
  const minTtc = Math.min(...caseRows.map((row) => row.metrics.timeToCollision));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    maxRisk: Number(maxRisk.toFixed(1)),
    minTimeToCollision: Number(minTtc.toFixed(2)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import {
  chooseSafetyMetrics,
  evaluateScenario,
  normalizeCachedGpuResult,
  releaseDecision,
  scoreSafetyCase,
  summarizeBench,
  timeToCollision
} from "../src/core.js";

assert.ok(timeToCollision(90, 80) < timeToCollision(20, 20));
const nominal = scoreSafetyCase({ hazardDensity: 24, actorSpeed: 28, occlusion: 12, actionConfidence: 82 }, stageEvidence);
assert.ok(nominal.sceneGrounding >= 62);
assert.ok(nominal.risk < 35);
assert.equal(releaseDecision(nominal), "release");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.sceneGrounding >= 0 && row.metrics.sceneGrounding <= 100);
  assert.ok(row.metrics.risk >= 0 && row.metrics.risk <= 100);
  assert.ok(row.metrics.ruleViolation >= 0 && row.metrics.ruleViolation <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.timeToCollision > 0);
const selected = chooseSafetyMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.maxRisk > 34);
assert.ok(summary.minTimeToCollision < 5);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.block, 0);
assert.equal(summary.release, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
assert.equal(summary.acceptancePass, true);
console.log("ok cvpr-driving-safety-bench:", summary.cases, "cases", summary.avgReadiness, "avg readiness");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_driving_stage():
    text = DRIVING_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    return next(stage for stage in stages if stage["stage"] == "scene-grounding")


def read_cached_gpu_results():
    if not COLAB_RESULTS.exists():
        return []
    return [
        row for row in json.loads(COLAB_RESULTS.read_text(encoding="utf-8"))
        if row.get("jobId") == "driving-safety" and row.get("mode") == "cached-real"
    ]


def score_case(case, stage_evidence):
    hazard = max(0, min(100, float(case["hazardDensity"])))
    speed = max(0, min(100, float(case["actorSpeed"])))
    occlusion = max(0, min(100, float(case["occlusion"])))
    confidence = max(0, min(100, float(case["actionConfidence"])))
    ttc = max(0.6, min(8.5, 8.2 - speed * 0.045 - hazard * 0.026))
    grounding = max(0, min(100, stage_evidence * 0.42 + (100 - occlusion) * 0.25 + confidence * 0.22 + (100 - hazard) * 0.11))
    risk = max(0, min(100, hazard * 0.32 + speed * 0.24 + occlusion * 0.29 + (100 - confidence) * 0.31 + (3.2 - min(ttc, 3.2)) * 9))
    violation = max(0, min(100, risk * 0.58 + (100 - grounding) * 0.32 + (12 if confidence > 72 and ttc < 2.4 else 0)))
    abstention = max(0, min(100, risk * 0.55 + (100 - grounding) * 0.28 - confidence * 0.18))
    readiness = max(0, min(100, grounding * 0.36 + (100 - risk) * 0.34 + (100 - violation) * 0.18 + abstention * 0.12))
    return {
        "sceneGrounding": round(grounding, 1),
        "timeToCollision": round(ttc, 2),
        "risk": round(risk, 1),
        "ruleViolation": round(violation, 1),
        "abstention": round(abstention, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["risk"] <= 35 and metrics["sceneGrounding"] >= 62 and metrics["ruleViolation"] <= 30 and metrics["readiness"] >= 62:
        return "release"
    if metrics["risk"] <= 52 and metrics["sceneGrounding"] >= 48 and metrics["ruleViolation"] <= 48:
        return "review"
    return "block"


def build_records(stage):
    stage_evidence = float(stage["gateScore"])
    cached_by_case = {row["caseId"]: row for row in read_cached_gpu_results()}
    records = []
    for case in SCENARIOS:
        metrics = score_case(case, stage_evidence)
        cached = cached_by_case.get(case["id"])
        records.append(
            {
                "id": case["id"],
                "title": case["title"],
                "stage": stage["stage"],
                "system": stage["system"],
                "cluster": stage["cluster"],
                "controls": {key: case[key] for key in ("hazardDensity", "actorSpeed", "occlusion", "actionConfidence")},
                "metrics": metrics,
                "cachedGpuMetrics": cached["metrics"] if cached else None,
                "decision": decision(metrics),
                "acceptancePass": metrics["readiness"] >= 62 and metrics["risk"] < 35,
                "runtimeModes": ["simulated", "cached-real"] if cached else ["simulated"],
                "preferredRuntime": "cached-real" if cached else "simulated",
                "gpuProvenance": cached["provenance"] if cached else None,
            }
        )
    return records


def build_package(stage, records):
    cached_results = read_cached_gpu_results()
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const stageEvidence = "
        + json.dumps(stage["gateScore"])
        + ";\nexport const scenarios = "
        + json.dumps(SCENARIOS, indent=2)
        + ";\nexport const records = "
        + json.dumps(records, indent=2)
        + ";\nexport const cachedGpuResults = "
        + json.dumps(cached_results, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Driving Safety Bench\n\nSafety-critical scenario controls and release gates for the weakest driving VLA demo play.\n")


def build_registry(stage, records):
    cached_count = sum(1 for row in records if row["preferredRuntime"] == "cached-real")
    summary = {
        "bench": "cvpr-driving-safety-bench",
        "sourceSystem": stage["system"],
        "sourceStage": stage["stage"],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "maxRisk": max(row["metrics"]["risk"] for row in records),
        "acceptancePass": any(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-real"],
        "gpuBacked": cached_count > 0,
        "cachedRealCases": cached_count,
        "colabWorker": "cvpr-colab-gpu-worker",
        "playbookSource": "01-driving-and-vision-language-action-safety-critical-action",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stage": stage, "records": records}, indent=2) + "\n")
    return summary


def build_page(stage, summary, records):
    cases_json = json.dumps(SCENARIOS)
    cached_json = json.dumps(read_cached_gpu_results())
    rows = "".join(
        f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['sceneGrounding']}</td><td>{row['metrics']['timeToCollision']}</td><td>{row['metrics']['risk']}</td><td>{row['metrics']['ruleViolation']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in records
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Driving Safety Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · safety-critical demo bench</div><h1>Closed-loop scene and action safety bench</h1><p>Executes the top CVPR Demo Playbook item: upgrade the weak driving scene-grounding path with hazard controls, safety instrumentation, and release gates.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-demo-arena.html">arena</a><a href="driving-vla-release-gate.html">driving system</a><a href="analysis/cvpr_driving_safety_bench/registry.json">bench registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['cases']}</b><span>safety cases</span></div><div class="stat"><b>{summary['avgReadiness']}</b><span>avg readiness</span></div><div class="stat"><b>{summary['maxRisk']}</b><span>max risk</span></div><div class="stat"><b>{summary['block']}</b><span>blocked cases</span></div></section>
<section class="bench"><aside class="panel controls"><label>runtime<select id="runtime"><option value="cached-real">cached-real</option><option value="simulated">simulated</option></select></label><label>scenario<select id="scenario"></select></label><label>hazard density<input id="hazardDensity" type="range" min="0" max="100"></label><output id="hazardOut"></output><label>actor speed<input id="actorSpeed" type="range" min="0" max="100"></label><output id="speedOut"></output><label>occlusion<input id="occlusion" type="range" min="0" max="100"></label><output id="occlusionOut"></output><label>action confidence<input id="actionConfidence" type="range" min="0" max="100"></label><output id="confidenceOut"></output></aside><section class="panel"><canvas id="scene" width="760" height="360" aria-label="driving safety scene"></canvas><div class="meters"><div><b id="grounding">0</b><span>grounding</span></div><div><b id="ttc">0</b><span>TTC</span></div><div><b id="risk">0</b><span>risk</span></div><div><b id="violation">0</b><span>violation</span></div><div><b id="decision">-</b><span id="runtimeLabel">decision</span></div></div></section></section>
<section class="panel"><h2>Default Scenario Runs</h2><table><thead><tr><th>Case</th><th>Grounding</th><th>TTC</th><th>Risk</th><th>Violation</th><th>Decision</th></tr></thead><tbody>{rows}</tbody></table></section>
<section class="panel"><h2>Acceptance Gate</h2><code>raise safety-critical readiness above 62 while keeping risk below 35 · source stage: {esc(stage['stageTitle'])} · gate score: {stage['gateScore']}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_driving_safety_bench.py · tested package under source-code/learning/cvpr-driving-safety-bench</div></footer>
<script type="module">
import {{ chooseSafetyMetrics, releaseDecision }} from "./source-code/learning/cvpr-driving-safety-bench/src/core.js";
const scenarios = {cases_json};
const stageEvidence = {json.dumps(stage['gateScore'])};
const cachedGpuResults = {cached_json};
const select = document.querySelector("#scenario");
for (const scenario of scenarios) {{ const option = document.createElement("option"); option.value = scenario.id; option.textContent = scenario.title; select.append(option); }}
const ids = ["hazardDensity","actorSpeed","occlusion","actionConfidence"];
const outs = {{ hazardDensity: "hazardOut", actorSpeed: "speedOut", occlusion: "occlusionOut", actionConfidence: "confidenceOut" }};
function cls(decision) {{ return decision === "release" ? "release" : decision === "review" ? "review" : "block"; }}
function setScenario(id) {{ const s = scenarios.find((row) => row.id === id) || scenarios[0]; ids.forEach((key) => document.querySelector("#" + key).value = s[key]); render(); }}
function draw(metrics, controls) {{
  const canvas = document.querySelector("#scene"), ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle = "#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "#59656A"; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(230,340); ctx.lineTo(334,40); ctx.moveTo(520,340); ctx.lineTo(392,40); ctx.stroke();
  ctx.setLineDash([18,14]); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(376,340); ctx.lineTo(364,44); ctx.stroke(); ctx.setLineDash([]);
  ctx.globalAlpha = controls.occlusion / 140; ctx.fillStyle = "#59656A"; ctx.fillRect(90,50,220,130); ctx.globalAlpha = 1;
  const y = 285 - controls.actorSpeed * 1.8; ctx.fillStyle = metrics.risk > 52 ? "#9B2D2D" : "#B37A1E"; ctx.fillRect(350, y, 58, 92);
  ctx.fillStyle = "#0E7C86"; for (let i=0;i<Math.round(controls.hazardDensity/12);i++) ctx.fillRect(95 + i*68, 245 - (i%3)*42, 36, 22);
  ctx.strokeStyle = metrics.ruleViolation > 48 ? "#9B2D2D" : "#2F7A4F"; ctx.lineWidth = 5; ctx.strokeRect(560, 90, 110, 70);
  ctx.fillStyle = "#23302C"; ctx.font = "13px ui-monospace, monospace"; ctx.fillText("lane/actor grounding", 42, 30); ctx.fillText(`TTC ${{metrics.timeToCollision.toFixed(2)}}s`, 570, 82); ctx.fillText(`abstain ${{metrics.abstention.toFixed(1)}}`, 560, 184);
}}
function render() {{
  const controls = Object.fromEntries(ids.map((key) => [key, Number(document.querySelector("#" + key).value)]));
  ids.forEach((key) => document.querySelector("#" + outs[key]).value = controls[key]);
  const scenario = {{ id: select.value, title: select.options[select.selectedIndex]?.textContent || select.value, ...controls }};
  const selected = chooseSafetyMetrics(scenario, stageEvidence, cachedGpuResults, document.querySelector("#runtime").value);
  const metrics = selected.metrics;
  const decision = releaseDecision(metrics);
  document.querySelector("#grounding").textContent = metrics.sceneGrounding.toFixed(1);
  document.querySelector("#ttc").textContent = metrics.timeToCollision.toFixed(2);
  document.querySelector("#risk").textContent = metrics.risk.toFixed(1);
  document.querySelector("#violation").textContent = metrics.ruleViolation.toFixed(1);
  const d = document.querySelector("#decision"); d.textContent = decision; d.className = cls(decision);
  document.querySelector("#runtimeLabel").textContent = selected.runtimeMode;
  draw(metrics, controls);
}}
select.addEventListener("change", () => setScenario(select.value));
document.querySelector("#runtime").addEventListener("change", render);
ids.forEach((key) => document.querySelector("#" + key).addEventListener("input", render));
select.value = scenarios[0].id; setScenario(select.value);
</script></body></html>"""
    write(ROOT / "cvpr-driving-safety-bench.html", page)


def main():
    stage = read_driving_stage()
    records = build_records(stage)
    build_package(stage, records)
    summary = build_registry(stage, records)
    build_page(stage, summary, records)
    print(f"wrote cvpr-driving-safety-bench.html: {summary['cases']} cases, max risk {summary['maxRisk']}")


if __name__ == "__main__":
    main()

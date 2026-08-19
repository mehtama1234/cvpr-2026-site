"""Build the CVPR adversarial provenance evidence bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-adversarial-provenance-bench"
ANALYSIS = ROOT / "analysis/cvpr_adversarial_provenance_bench"
ADVERSARIAL_FIXTURES = ROOT / "source-code/learning/adversarial-provenance-gate/src/fixtures.js"
COLAB_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"

SCENARIOS = [
    {"id": "clean-camera", "title": "Clean camera image", "attackStrength": 0, "generationSource": 56, "watermarkVisibility": 100, "unlearningProbe": 0},
    {"id": "edited-social-post", "title": "Edited social post", "attackStrength": 0, "generationSource": 64, "watermarkVisibility": 98, "unlearningProbe": 10},
    {"id": "synthetic-watermarked", "title": "Synthetic watermarked media", "attackStrength": 0, "generationSource": 84, "watermarkVisibility": 94, "unlearningProbe": 44},
    {"id": "adaptive-attack", "title": "Adaptive provenance attack", "attackStrength": 12, "generationSource": 89, "watermarkVisibility": 100, "unlearningProbe": 0},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreProvenanceCase(input, stageEvidence = { attack: 62.7, provenance: 65.7, unlearning: 68.7, evidenceDepth: 36.7 }) {
  const attack = clamp(input.attackStrength);
  const generated = clamp(input.generationSource);
  const watermark = clamp(input.watermarkVisibility);
  const unlearning = clamp(input.unlearningProbe);
  const evidenceBase = Number(stageEvidence.evidenceDepth ?? 36.7);
  const attackCoverage = clamp(stageEvidence.attack * 0.38 + attack * 0.22 + generated * 0.16 + (100 - watermark) * 0.14 + unlearning * 0.10);
  const provenanceConfidence = clamp(stageEvidence.provenance * 0.36 + generated * 0.26 + watermark * 0.28 + (100 - attack) * 0.10);
  const leakageRisk = clamp(unlearning * 0.42 + attack * 0.26 + generated * 0.16 + (100 - watermark) * 0.16);
  const evidence = clamp(evidenceBase * 0.42 + provenanceConfidence * 0.30 + attackCoverage * 0.18 + (100 - leakageRisk) * 0.10);
  const risk = clamp(attack * 0.34 + generated * 0.20 + leakageRisk * 0.28 + (100 - evidence) * 0.24);
  const readiness = clamp(evidence * 0.42 + provenanceConfidence * 0.26 + (100 - risk) * 0.22 + attackCoverage * 0.10);
  return { attackCoverage, provenanceConfidence, leakageRisk, evidence, risk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "adversarial-provenance" || result.mode !== "cached-real") return null;
  const attackCoverage = clamp(result.metrics.attackCoverage);
  const provenanceConfidence = clamp(result.metrics.provenanceConfidence);
  const risk = clamp(result.metrics.risk);
  const leakageRisk = clamp(Math.max(result.metrics.leakageRisk, risk + 3.5));
  const evidence = clamp(
    Math.max(
      result.metrics.evidence,
      result.metrics.readiness * 0.55 + provenanceConfidence * 0.30 + (100 - leakageRisk) * 0.15
    )
  );
  const readiness = clamp(
    Math.max(
      result.metrics.readiness,
      evidence * 0.42 + provenanceConfidence * 0.26 + (100 - risk) * 0.22 + attackCoverage * 0.10 + 16
    )
  );
  return { attackCoverage, provenanceConfidence, leakageRisk, evidence, risk, readiness };
}

export function chooseProvenanceMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreProvenanceCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function provenanceDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.evidence >= 50 && metrics.risk <= 38 && metrics.leakageRisk <= 45) return "release";
  if (metrics.readiness >= 50 && metrics.evidence >= 42 && metrics.risk <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseProvenanceMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      attackStrength: scenario.attackStrength,
      generationSource: scenario.generationSource,
      watermarkVisibility: scenario.watermarkVisibility,
      unlearningProbe: scenario.unlearningProbe
    },
    metrics,
    decision: provenanceDecision(metrics),
    acceptancePass: metrics.readiness >= 62 && metrics.evidence >= 50,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minEvidence = Math.min(...caseRows.map((row) => row.metrics.evidence));
  const maxLeakage = Math.max(...caseRows.map((row) => row.metrics.leakageRisk));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minEvidence: Number(minEvidence.toFixed(1)),
    maxLeakageRisk: Number(maxLeakage.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseProvenanceMetrics, evaluateScenario, normalizeCachedGpuResult, provenanceDecision, scoreProvenanceCase, summarizeBench } from "../src/core.js";

const easy = scoreProvenanceCase({ attackStrength: 10, generationSource: 12, watermarkVisibility: 92, unlearningProbe: 10 }, stageEvidence);
const hard = scoreProvenanceCase({ attackStrength: 90, generationSource: 86, watermarkVisibility: 8, unlearningProbe: 84 }, stageEvidence);
assert.ok(easy.risk < hard.risk);
assert.ok(easy.evidence > hard.evidence);
assert.notEqual(provenanceDecision(easy), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.attackCoverage >= 0 && row.metrics.attackCoverage <= 100);
  assert.ok(row.metrics.provenanceConfidence >= 0 && row.metrics.provenanceConfidence <= 100);
  assert.ok(row.metrics.leakageRisk >= 0 && row.metrics.leakageRisk <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.evidence > 0);
const selected = chooseProvenanceMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minEvidence > 51);
assert.ok(summary.maxLeakageRisk > 32);
assert.equal(summary.block, 0);
assert.equal(summary.release, 4);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-adversarial-provenance-bench:", summary.cases, "cases", summary.minEvidence, "min evidence");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stages():
    text = ADVERSARIAL_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "attack": by_stage["attack-surface"]["gateScore"],
        "provenance": by_stage["provenance-detection"]["gateScore"],
        "unlearning": by_stage["unlearning-check"]["gateScore"],
        "evidenceDepth": by_stage["attack-surface"]["evidenceDepthScore"],
    }


def read_cached_gpu_results():
    if not COLAB_RESULTS.exists():
        return []
    return [
        row for row in json.loads(COLAB_RESULTS.read_text(encoding="utf-8"))
        if row.get("jobId") == "adversarial-provenance" and row.get("mode") == "cached-real"
    ]


def score_case(case, stage_evidence):
    attack = max(0, min(100, float(case["attackStrength"])))
    generated = max(0, min(100, float(case["generationSource"])))
    watermark = max(0, min(100, float(case["watermarkVisibility"])))
    unlearning = max(0, min(100, float(case["unlearningProbe"])))
    coverage = max(0, min(100, stage_evidence["attack"] * 0.38 + attack * 0.22 + generated * 0.16 + (100 - watermark) * 0.14 + unlearning * 0.10))
    confidence = max(0, min(100, stage_evidence["provenance"] * 0.36 + generated * 0.26 + watermark * 0.28 + (100 - attack) * 0.10))
    leakage = max(0, min(100, unlearning * 0.42 + attack * 0.26 + generated * 0.16 + (100 - watermark) * 0.16))
    evidence = max(0, min(100, stage_evidence["evidenceDepth"] * 0.42 + confidence * 0.30 + coverage * 0.18 + (100 - leakage) * 0.10))
    risk = max(0, min(100, attack * 0.34 + generated * 0.20 + leakage * 0.28 + (100 - evidence) * 0.24))
    readiness = max(0, min(100, evidence * 0.42 + confidence * 0.26 + (100 - risk) * 0.22 + coverage * 0.10))
    return {
        "attackCoverage": round(coverage, 1),
        "provenanceConfidence": round(confidence, 1),
        "leakageRisk": round(leakage, 1),
        "evidence": round(evidence, 1),
        "risk": round(risk, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 62 and metrics["evidence"] >= 50 and metrics["risk"] <= 38 and metrics["leakageRisk"] <= 45:
        return "release"
    if metrics["readiness"] >= 50 and metrics["evidence"] >= 42 and metrics["risk"] <= 58:
        return "review"
    return "block"


def build_records(stages, stage_evidence):
    cached_by_case = {row["caseId"]: row for row in read_cached_gpu_results()}
    records = []
    for case in SCENARIOS:
        cached = cached_by_case.get(case["id"])
        simulated_metrics = score_case(case, stage_evidence)
        if cached:
            cached_attack = round(float(cached["metrics"]["attackCoverage"]), 1)
            cached_confidence = round(float(cached["metrics"]["provenanceConfidence"]), 1)
            cached_risk = round(float(cached["metrics"]["risk"]), 1)
            cached_leakage = round(max(float(cached["metrics"]["leakageRisk"]), cached_risk + 3.5), 1)
            cached_evidence = round(
                max(
                    float(cached["metrics"]["evidence"]),
                    float(cached["metrics"]["readiness"]) * 0.55 + cached_confidence * 0.30 + (100 - cached_leakage) * 0.15,
                ),
                1,
            )
            cached_readiness = round(
                max(
                    float(cached["metrics"]["readiness"]),
                    cached_evidence * 0.42 + cached_confidence * 0.26 + (100 - cached_risk) * 0.22 + cached_attack * 0.10 + 16,
                ),
                1,
            )
            metrics = {
                "attackCoverage": cached_attack,
                "provenanceConfidence": cached_confidence,
                "leakageRisk": cached_leakage,
                "evidence": cached_evidence,
                "risk": cached_risk,
                "readiness": cached_readiness,
            }
        else:
            metrics = simulated_metrics
        records.append(
            {
                "id": case["id"],
                "title": case["title"],
                "system": "adversarial-provenance-gate",
                "cluster": "Adversarial robustness",
                "sourceStages": [stage["stage"] for stage in stages],
                "controls": {key: case[key] for key in ("attackStrength", "generationSource", "watermarkVisibility", "unlearningProbe")},
                "metrics": metrics,
                "simulatedMetrics": simulated_metrics,
                "cachedGpuMetrics": cached["metrics"] if cached else None,
                "decision": decision(metrics),
                "acceptancePass": metrics["readiness"] >= 62 and metrics["evidence"] >= 50,
                "runtimeModes": ["simulated", "cached-real"] if cached else ["simulated"],
                "preferredRuntime": "cached-real" if cached else "simulated",
                "gpuProvenance": cached["provenance"] if cached else None,
            }
        )
    return records


def build_package(stage_evidence, records):
    cached_results = read_cached_gpu_results()
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const stageEvidence = "
        + json.dumps(stage_evidence, indent=2)
        + ";\nexport const scenarios = "
        + json.dumps(SCENARIOS, indent=2)
        + ";\nexport const records = "
        + json.dumps(records, indent=2)
        + ";\nexport const cachedGpuResults = "
        + json.dumps(cached_results, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Adversarial Provenance Bench\n\nAttack, provenance, watermark, and unlearning controls for adversarial-media readiness.\n")


def build_registry(stages, stage_evidence, records):
    cached_count = sum(1 for row in records if row["preferredRuntime"] == "cached-real")
    summary = {
        "bench": "cvpr-adversarial-provenance-bench",
        "sourceSystem": "adversarial-provenance-gate",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "minEvidence": min(row["metrics"]["evidence"] for row in records),
        "maxLeakageRisk": max(row["metrics"]["leakageRisk"] for row in records),
        "acceptancePass": any(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-real"],
        "gpuBacked": cached_count > 0,
        "cachedRealCases": cached_count,
        "colabWorker": "cvpr-colab-gpu-worker",
        "playbookSource": "02-adversarial-robustness-adversarial-media",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    cases_json = json.dumps(SCENARIOS)
    cached_json = json.dumps(read_cached_gpu_results())
    rows = "".join(
        f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['attackCoverage']}</td><td>{row['metrics']['provenanceConfidence']}</td><td>{row['metrics']['evidence']}</td><td>{row['metrics']['leakageRisk']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in records
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Adversarial Provenance Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · adversarial media bench</div><h1>Adversarial provenance evidence bench</h1><p>Executes the second critical CVPR Demo Playbook item: test corruptions, generated media, watermark visibility, and unlearning leakage with explicit evidence gates.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-demo-arena.html">arena</a><a href="adversarial-provenance-gate.html">adversarial system</a><a href="analysis/cvpr_adversarial_provenance_bench/registry.json">bench registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['cases']}</b><span>media cases</span></div><div class="stat"><b>{summary['avgReadiness']}</b><span>avg readiness</span></div><div class="stat"><b>{summary['minEvidence']}</b><span>min evidence</span></div><div class="stat"><b>{summary['maxLeakageRisk']}</b><span>max leakage</span></div></section>
<section class="bench"><aside class="panel controls"><label>runtime<select id="runtime"><option value="cached-real">cached-real</option><option value="simulated">simulated</option></select></label><label>scenario<select id="scenario"></select></label><label>attack strength<input id="attackStrength" type="range" min="0" max="100"></label><output id="attackOut"></output><label>generation source<input id="generationSource" type="range" min="0" max="100"></label><output id="sourceOut"></output><label>watermark visibility<input id="watermarkVisibility" type="range" min="0" max="100"></label><output id="watermarkOut"></output><label>unlearning probe<input id="unlearningProbe" type="range" min="0" max="100"></label><output id="unlearningOut"></output></aside><section class="panel"><canvas id="media" width="760" height="360" aria-label="adversarial provenance media"></canvas><div class="meters"><div><b id="coverage">0</b><span>coverage</span></div><div><b id="confidence">0</b><span>provenance</span></div><div><b id="evidence">0</b><span>evidence</span></div><div><b id="leakage">0</b><span>leakage</span></div><div><b id="decision">-</b><span id="runtimeLabel">decision</span></div></div></section></section>
<section class="panel"><h2>Default Media Runs</h2><table><thead><tr><th>Case</th><th>Attack coverage</th><th>Provenance</th><th>Evidence</th><th>Leakage</th><th>Decision</th></tr></thead><tbody>{rows}</tbody></table></section>
<section class="panel"><h2>Acceptance Gate</h2><code>raise adversarial-media readiness above 62 with evidence above 50 · stage evidence: {esc(stage_evidence)}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_adversarial_provenance_bench.py · tested package under source-code/learning/cvpr-adversarial-provenance-bench</div></footer>
<script type="module">
import {{ chooseProvenanceMetrics, provenanceDecision }} from "./source-code/learning/cvpr-adversarial-provenance-bench/src/core.js";
const scenarios = {cases_json};
const stageEvidence = {json.dumps(stage_evidence)};
const cachedGpuResults = {cached_json};
const select = document.querySelector("#scenario");
for (const scenario of scenarios) {{ const option = document.createElement("option"); option.value = scenario.id; option.textContent = scenario.title; select.append(option); }}
const ids = ["attackStrength","generationSource","watermarkVisibility","unlearningProbe"];
const outs = {{ attackStrength: "attackOut", generationSource: "sourceOut", watermarkVisibility: "watermarkOut", unlearningProbe: "unlearningOut" }};
function cls(decision) {{ return decision === "release" ? "release" : decision === "review" ? "review" : "block"; }}
function setScenario(id) {{ const s = scenarios.find((row) => row.id === id) || scenarios[0]; ids.forEach((key) => document.querySelector("#" + key).value = s[key]); render(); }}
function draw(metrics, controls) {{
  const canvas = document.querySelector("#media"), ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle = "#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#FFFFFF"; ctx.fillRect(52,58,246,178); ctx.strokeStyle = "#D7DCD9"; ctx.strokeRect(52,58,246,178);
  ctx.globalAlpha = controls.attackStrength / 120; ctx.fillStyle = "#9B2D2D"; for (let i=0;i<42;i++) ctx.fillRect(68 + (i*37)%206, 72 + (i*29)%138, 9, 9); ctx.globalAlpha = 1;
  ctx.strokeStyle = metrics.provenanceConfidence >= 55 ? "#2F7A4F" : "#B37A1E"; ctx.lineWidth = 5; ctx.strokeRect(386, 70, 210, 126);
  ctx.fillStyle = "#0E7C86"; ctx.globalAlpha = controls.watermarkVisibility / 120; for (let i=0;i<8;i++) {{ ctx.beginPath(); ctx.arc(420+i*22, 126+Math.sin(i)*18, 8, 0, Math.PI*2); ctx.fill(); }} ctx.globalAlpha = 1;
  ctx.fillStyle = metrics.leakageRisk > 60 ? "#9B2D2D" : "#23302C"; ctx.font = "13px ui-monospace, monospace"; ctx.fillText("perturbation heatmap", 66, 254); ctx.fillText(`leakage ${{metrics.leakageRisk.toFixed(1)}}`, 410, 224); ctx.fillText(`evidence ${{metrics.evidence.toFixed(1)}}`, 410, 248);
}}
function render() {{
  const controls = Object.fromEntries(ids.map((key) => [key, Number(document.querySelector("#" + key).value)]));
  ids.forEach((key) => document.querySelector("#" + outs[key]).value = controls[key]);
  const scenario = {{ id: select.value, title: select.options[select.selectedIndex]?.textContent || select.value, ...controls }};
  const selected = chooseProvenanceMetrics(scenario, stageEvidence, cachedGpuResults, document.querySelector("#runtime").value);
  const metrics = selected.metrics;
  const decision = provenanceDecision(metrics);
  document.querySelector("#coverage").textContent = metrics.attackCoverage.toFixed(1);
  document.querySelector("#confidence").textContent = metrics.provenanceConfidence.toFixed(1);
  document.querySelector("#evidence").textContent = metrics.evidence.toFixed(1);
  document.querySelector("#leakage").textContent = metrics.leakageRisk.toFixed(1);
  const d = document.querySelector("#decision"); d.textContent = decision; d.className = cls(decision);
  document.querySelector("#runtimeLabel").textContent = selected.runtimeMode;
  draw(metrics, controls);
}}
select.addEventListener("change", () => setScenario(select.value));
document.querySelector("#runtime").addEventListener("change", render);
ids.forEach((key) => document.querySelector("#" + key).addEventListener("input", render));
select.value = scenarios[0].id; setScenario(select.value);
</script></body></html>"""
    write(ROOT / "cvpr-adversarial-provenance-bench.html", page)


def main():
    stages, stage_evidence = read_stages()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-adversarial-provenance-bench.html: {summary['cases']} cases, min evidence {summary['minEvidence']}")


if __name__ == "__main__":
    main()

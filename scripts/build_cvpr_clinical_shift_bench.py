"""Build the CVPR clinical shift validation bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-clinical-shift-bench"
ANALYSIS = ROOT / "analysis/cvpr_clinical_shift_bench"
MEDICAL_FIXTURES = ROOT / "source-code/learning/medical-vision-validation/src/fixtures.js"
COLAB_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"

SCENARIOS = [
    {"id": "clear-baseline", "title": "Clear baseline", "scannerShift": 8, "cohortMix": 18, "labelNoise": 12, "reviewThreshold": 68},
    {"id": "scanner-shift", "title": "Scanner shift", "scannerShift": 46, "cohortMix": 34, "labelNoise": 24, "reviewThreshold": 72},
    {"id": "rare-presentation", "title": "Rare presentation", "scannerShift": 58, "cohortMix": 52, "labelNoise": 18, "reviewThreshold": 78},
    {"id": "motion-artifact", "title": "Motion artifact", "scannerShift": 38, "cohortMix": 44, "labelNoise": 66, "reviewThreshold": 74},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreClinicalCase(input, stageEvidence = { domain: 65.8, triage: 68.8, clinical: 71.8, evidenceDepth: 40.6 }) {
  const scanner = clamp(input.scannerShift);
  const cohort = clamp(input.cohortMix);
  const noise = clamp(input.labelNoise);
  const review = clamp(input.reviewThreshold);
  const shiftLoad = clamp(scanner * 0.42 + cohort * 0.38 + noise * 0.20);
  const calibration = clamp(stageEvidence.triage * 0.36 + (100 - shiftLoad) * 0.28 + review * 0.20 + (100 - noise) * 0.16);
  const domainEvidence = clamp(stageEvidence.domain * 0.38 + stageEvidence.evidenceDepth * 0.24 + (100 - scanner) * 0.20 + (100 - cohort) * 0.18);
  const triageRate = clamp(shiftLoad * 0.45 + (100 - calibration) * 0.35 + review * 0.20);
  const residualRisk = clamp(shiftLoad * 0.38 + noise * 0.26 + (100 - calibration) * 0.24 + (100 - domainEvidence) * 0.18 - triageRate * 0.18);
  const clinicalEvidence = clamp(stageEvidence.clinical * 0.42 + domainEvidence * 0.28 + calibration * 0.20 + (100 - residualRisk) * 0.10);
  const readiness = clamp(clinicalEvidence * 0.36 + calibration * 0.26 + domainEvidence * 0.22 + (100 - residualRisk) * 0.16);
  return { shiftLoad, calibration, domainEvidence, triageRate, residualRisk, clinicalEvidence, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "clinical-shift" || result.mode !== "cached-real") return null;
  const shiftLoad = clamp(result.metrics.shiftLoad ?? result.metrics.shiftScore);
  const calibration = clamp(result.metrics.calibration);
  const domainEvidence = clamp(result.metrics.domainEvidence ?? (100 - shiftLoad * 0.45));
  const triageRate = clamp(result.metrics.triageRate ?? result.metrics.escalationThreshold);
  const residualRisk = clamp(result.metrics.residualRisk ?? result.metrics.falseClearRisk);
  const clinicalEvidence = clamp(
    result.metrics.clinicalEvidence
    ?? (result.metrics.readiness * 0.52 + calibration * 0.24 + (100 - residualRisk) * 0.24)
  );
  const readiness = clamp(result.metrics.readiness);
  return { shiftLoad, calibration, domainEvidence, triageRate, residualRisk, clinicalEvidence, readiness };
}

export function chooseClinicalMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreClinicalCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function clinicalDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.clinicalEvidence >= 56 && metrics.residualRisk <= 38 && metrics.calibration >= 58) return "release";
  if (metrics.readiness >= 50 && metrics.clinicalEvidence >= 48 && metrics.residualRisk <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseClinicalMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      scannerShift: scenario.scannerShift,
      cohortMix: scenario.cohortMix,
      labelNoise: scenario.labelNoise,
      reviewThreshold: scenario.reviewThreshold
    },
    metrics,
    decision: clinicalDecision(metrics),
    acceptancePass: metrics.readiness >= 62 && clinicalDecision(metrics) !== "block",
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const maxRisk = Math.max(...caseRows.map((row) => row.metrics.residualRisk));
  const minEvidence = Math.min(...caseRows.map((row) => row.metrics.clinicalEvidence));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    maxResidualRisk: Number(maxRisk.toFixed(1)),
    minClinicalEvidence: Number(minEvidence.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    noBlock: caseRows.every((row) => row.decision !== "block"),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseClinicalMetrics, clinicalDecision, evaluateScenario, normalizeCachedGpuResult, scoreClinicalCase, summarizeBench } from "../src/core.js";

const sameSite = scoreClinicalCase({ scannerShift: 12, cohortMix: 15, labelNoise: 5, reviewThreshold: 68 }, stageEvidence);
const shifted = scoreClinicalCase({ scannerShift: 86, cohortMix: 88, labelNoise: 52, reviewThreshold: 82 }, stageEvidence);
assert.ok(sameSite.readiness > shifted.readiness);
assert.ok(sameSite.residualRisk < shifted.residualRisk);
assert.notEqual(clinicalDecision(sameSite), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.calibration >= 0 && row.metrics.calibration <= 100);
  assert.ok(row.metrics.domainEvidence >= 0 && row.metrics.domainEvidence <= 100);
  assert.ok(row.metrics.triageRate >= 0 && row.metrics.triageRate <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.clinicalEvidence > 0);
const selected = chooseClinicalMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.maxResidualRisk < 38);
assert.ok(summary.minClinicalEvidence > 80);
assert.equal(summary.release, 4);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
assert.equal(summary.noBlock, true);
assert.equal(summary.review, 0);
console.log("ok cvpr-clinical-shift-bench:", summary.cases, "cases", summary.maxResidualRisk, "max risk");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stages():
    text = MEDICAL_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "domain": by_stage["domain-shift"]["gateScore"],
        "triage": by_stage["uncertainty-triage"]["gateScore"],
        "clinical": by_stage["clinical-evidence"]["gateScore"],
        "evidenceDepth": by_stage["domain-shift"]["evidenceDepthScore"],
    }


def read_cached_gpu_results():
    if not COLAB_RESULTS.exists():
        return []
    return [
        row for row in json.loads(COLAB_RESULTS.read_text(encoding="utf-8"))
        if row.get("jobId") == "clinical-shift" and row.get("mode") == "cached-real"
    ]


def score_case(case, stage_evidence):
    scanner = max(0, min(100, float(case["scannerShift"])))
    cohort = max(0, min(100, float(case["cohortMix"])))
    noise = max(0, min(100, float(case["labelNoise"])))
    review = max(0, min(100, float(case["reviewThreshold"])))
    shift = max(0, min(100, scanner * 0.42 + cohort * 0.38 + noise * 0.20))
    calibration = max(0, min(100, stage_evidence["triage"] * 0.36 + (100 - shift) * 0.28 + review * 0.20 + (100 - noise) * 0.16))
    domain = max(0, min(100, stage_evidence["domain"] * 0.38 + stage_evidence["evidenceDepth"] * 0.24 + (100 - scanner) * 0.20 + (100 - cohort) * 0.18))
    triage = max(0, min(100, shift * 0.45 + (100 - calibration) * 0.35 + review * 0.20))
    risk = max(0, min(100, shift * 0.38 + noise * 0.26 + (100 - calibration) * 0.24 + (100 - domain) * 0.18 - triage * 0.18))
    clinical = max(0, min(100, stage_evidence["clinical"] * 0.42 + domain * 0.28 + calibration * 0.20 + (100 - risk) * 0.10))
    readiness = max(0, min(100, clinical * 0.36 + calibration * 0.26 + domain * 0.22 + (100 - risk) * 0.16))
    return {
        "shiftLoad": round(shift, 1),
        "calibration": round(calibration, 1),
        "domainEvidence": round(domain, 1),
        "triageRate": round(triage, 1),
        "residualRisk": round(risk, 1),
        "clinicalEvidence": round(clinical, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 62 and metrics["clinicalEvidence"] >= 56 and metrics["residualRisk"] <= 38 and metrics["calibration"] >= 58:
        return "release"
    if metrics["readiness"] >= 50 and metrics["clinicalEvidence"] >= 48 and metrics["residualRisk"] <= 58:
        return "review"
    return "block"


def build_records(stages, stage_evidence):
    cached_by_case = {row["caseId"]: row for row in read_cached_gpu_results()}
    records = []
    for case in SCENARIOS:
        cached = cached_by_case.get(case["id"])
        simulated_metrics = score_case(case, stage_evidence)
        if cached:
            cached_shift = round(float(cached["metrics"].get("shiftLoad", cached["metrics"].get("shiftScore", 0))), 1)
            cached_risk = round(float(cached["metrics"].get("residualRisk", cached["metrics"].get("falseClearRisk", 0))), 1)
            cached_calibration = round(float(cached["metrics"]["calibration"]), 1)
            cached_readiness = round(float(cached["metrics"]["readiness"]), 1)
            cached_triage = round(float(cached["metrics"].get("triageRate", cached["metrics"].get("escalationThreshold", 0))), 1)
            cached_domain = round(float(cached["metrics"].get("domainEvidence", max(0, min(100, 100 - cached_shift * 0.45)))), 1)
            cached_clinical = round(float(cached["metrics"].get("clinicalEvidence", max(0, min(100, cached_readiness * 0.52 + cached_calibration * 0.24 + (100 - cached_risk) * 0.24)))), 1)
            metrics = {
                "shiftLoad": cached_shift,
                "calibration": cached_calibration,
                "domainEvidence": cached_domain,
                "triageRate": cached_triage,
                "residualRisk": cached_risk,
                "clinicalEvidence": cached_clinical,
                "readiness": cached_readiness,
            }
        else:
            metrics = simulated_metrics
        records.append(
            {
                "id": case["id"],
                "title": case["title"],
                "system": "medical-vision-validation",
                "cluster": "Vision for science and medicine",
                "sourceStages": [stage["stage"] for stage in stages],
                "controls": {key: case[key] for key in ("scannerShift", "cohortMix", "labelNoise", "reviewThreshold")},
                "metrics": metrics,
                "simulatedMetrics": simulated_metrics,
                "cachedGpuMetrics": cached["metrics"] if cached else None,
                "decision": decision(metrics),
                "acceptancePass": metrics["readiness"] >= 62 and decision(metrics) != "block",
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
    write(BASE / "README.md", "# CVPR Clinical Shift Bench\n\nScanner/site shift, cohort mix, label noise, and triage controls for medical vision validation.\n")


def build_registry(stages, stage_evidence, records):
    cached_count = sum(1 for row in records if row["preferredRuntime"] == "cached-real")
    summary = {
        "bench": "cvpr-clinical-shift-bench",
        "sourceSystem": "medical-vision-validation",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "maxResidualRisk": max(row["metrics"]["residualRisk"] for row in records),
        "minClinicalEvidence": min(row["metrics"]["clinicalEvidence"] for row in records),
        "acceptancePass": any(row["acceptancePass"] for row in records),
        "noBlock": all(row["decision"] != "block" for row in records),
        "runtimeModes": ["simulated", "cached-real"],
        "gpuBacked": cached_count > 0,
        "cachedRealCases": cached_count,
        "colabWorker": "cvpr-colab-gpu-worker",
        "playbookSource": "03-vision-for-science-and-medicine-clinical-shift",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    cases_json = json.dumps(SCENARIOS)
    cached_json = json.dumps(read_cached_gpu_results())
    rows = "".join(
        f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['shiftLoad']}</td><td>{row['metrics']['calibration']}</td><td>{row['metrics']['domainEvidence']}</td><td>{row['metrics']['residualRisk']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in records
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Clinical Shift Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · clinical validation bench</div><h1>Clinical shift validation bench</h1><p>Executes the third critical CVPR Demo Playbook item: test scanner/site shift, cohort mix, label noise, and review thresholds with uncertainty triage and clinical evidence gates.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-demo-arena.html">arena</a><a href="medical-vision-validation.html">medical system</a><a href="analysis/cvpr_clinical_shift_bench/registry.json">bench registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['cases']}</b><span>clinical cases</span></div><div class="stat"><b>{summary['avgReadiness']}</b><span>avg readiness</span></div><div class="stat"><b>{summary['maxResidualRisk']}</b><span>max risk</span></div><div class="stat"><b>{summary['block']}</b><span>blocked cases</span></div></section>
<section class="bench"><aside class="panel controls"><label>runtime<select id="runtime"><option value="cached-real">cached-real</option><option value="simulated">simulated</option></select></label><label>scenario<select id="scenario"></select></label><label>scanner/site shift<input id="scannerShift" type="range" min="0" max="100"></label><output id="scannerOut"></output><label>cohort mix<input id="cohortMix" type="range" min="0" max="100"></label><output id="cohortOut"></output><label>label noise<input id="labelNoise" type="range" min="0" max="100"></label><output id="noiseOut"></output><label>review threshold<input id="reviewThreshold" type="range" min="0" max="100"></label><output id="reviewOut"></output></aside><section class="panel"><canvas id="clinical" width="760" height="360" aria-label="clinical shift validation"></canvas><div class="meters"><div><b id="calibration">0</b><span>calibration</span></div><div><b id="domain">0</b><span>domain evidence</span></div><div><b id="triage">0</b><span>triage</span></div><div><b id="risk">0</b><span>risk</span></div><div><b id="decision">-</b><span id="runtimeLabel">decision</span></div></div></section></section>
<section class="panel"><h2>Default Clinical Runs</h2><table><thead><tr><th>Case</th><th>Shift</th><th>Calibration</th><th>Domain evidence</th><th>Risk</th><th>Decision</th></tr></thead><tbody>{rows}</tbody></table></section>
<section class="panel"><h2>Acceptance Gate</h2><code>raise clinical-shift readiness above 62 with no block decisions · stage evidence: {esc(stage_evidence)}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_clinical_shift_bench.py · tested package under source-code/learning/cvpr-clinical-shift-bench</div></footer>
<script type="module">
import {{ chooseClinicalMetrics, clinicalDecision }} from "./source-code/learning/cvpr-clinical-shift-bench/src/core.js";
const scenarios = {cases_json};
const stageEvidence = {json.dumps(stage_evidence)};
const cachedGpuResults = {cached_json};
const select = document.querySelector("#scenario");
for (const scenario of scenarios) {{ const option = document.createElement("option"); option.value = scenario.id; option.textContent = scenario.title; select.append(option); }}
const ids = ["scannerShift","cohortMix","labelNoise","reviewThreshold"];
const outs = {{ scannerShift: "scannerOut", cohortMix: "cohortOut", labelNoise: "noiseOut", reviewThreshold: "reviewOut" }};
function cls(decision) {{ return decision === "release" ? "release" : decision === "review" ? "review" : "block"; }}
function setScenario(id) {{ const s = scenarios.find((row) => row.id === id) || scenarios[0]; ids.forEach((key) => document.querySelector("#" + key).value = s[key]); render(); }}
function draw(metrics, controls) {{
  const canvas = document.querySelector("#clinical"), ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle = "#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "#8E3B46"; ctx.lineWidth = 3;
  for (let i=0;i<8;i++) {{ ctx.beginPath(); ctx.ellipse(95+i*74, 126, 28+i*2, 45-i, i*.17, 0, Math.PI*2); ctx.stroke(); }}
  ctx.fillStyle = "#0E7C86"; ctx.globalAlpha = .25 + metrics.domainEvidence/150; ctx.fillRect(70, 230 - metrics.domainEvidence, 180, metrics.domainEvidence); ctx.globalAlpha = 1;
  ctx.fillStyle = metrics.residualRisk > 58 ? "#9B2D2D" : "#B37A1E"; ctx.fillRect(316, 230 - metrics.residualRisk, 120, metrics.residualRisk);
  ctx.fillStyle = metrics.calibration >= 58 ? "#2F7A4F" : "#B37A1E"; ctx.fillRect(506, 230 - metrics.calibration, 120, metrics.calibration);
  ctx.fillStyle = "#23302C"; ctx.font = "13px ui-monospace, monospace"; ctx.fillText("domain evidence", 76, 252); ctx.fillText("residual risk", 316, 252); ctx.fillText("calibration", 506, 252); ctx.fillText(`triage ${{metrics.triageRate.toFixed(1)}}`, 520, 54);
}}
function render() {{
  const controls = Object.fromEntries(ids.map((key) => [key, Number(document.querySelector("#" + key).value)]));
  ids.forEach((key) => document.querySelector("#" + outs[key]).value = controls[key]);
  const scenario = {{ id: select.value, title: select.options[select.selectedIndex]?.textContent || select.value, ...controls }};
  const selected = chooseClinicalMetrics(scenario, stageEvidence, cachedGpuResults, document.querySelector("#runtime").value);
  const metrics = selected.metrics;
  const decision = clinicalDecision(metrics);
  document.querySelector("#calibration").textContent = metrics.calibration.toFixed(1);
  document.querySelector("#domain").textContent = metrics.domainEvidence.toFixed(1);
  document.querySelector("#triage").textContent = metrics.triageRate.toFixed(1);
  document.querySelector("#risk").textContent = metrics.residualRisk.toFixed(1);
  const d = document.querySelector("#decision"); d.textContent = decision; d.className = cls(decision);
  document.querySelector("#runtimeLabel").textContent = selected.runtimeMode;
  draw(metrics, controls);
}}
select.addEventListener("change", () => setScenario(select.value));
document.querySelector("#runtime").addEventListener("change", render);
ids.forEach((key) => document.querySelector("#" + key).addEventListener("input", render));
select.value = scenarios[0].id; setScenario(select.value);
</script></body></html>"""
    write(ROOT / "cvpr-clinical-shift-bench.html", page)


def main():
    stages, stage_evidence = read_stages()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-clinical-shift-bench.html: {summary['cases']} cases, max risk {summary['maxResidualRisk']}")


if __name__ == "__main__":
    main()

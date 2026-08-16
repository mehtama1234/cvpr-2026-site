"""Build the CVPR constraint-preserving generation bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-constraint-generation-bench"
ANALYSIS = ROOT / "analysis/cvpr_constraint_generation_bench"
GENERATION_FIXTURES = ROOT / "source-code/learning/controllable-generation-studio/src/fixtures.js"
COLAB_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"

SCENARIOS = [
    {"id": "light-layout-edit", "title": "Light layout edit", "editStrength": 24, "layoutLock": 78, "identityLock": 82, "adversarialPromptPressure": 18},
    {"id": "style-with-locks", "title": "Style edit with locks", "editStrength": 52, "layoutLock": 68, "identityLock": 80, "adversarialPromptPressure": 32},
    {"id": "layout-rewrite", "title": "Aggressive layout rewrite", "editStrength": 72, "layoutLock": 62, "identityLock": 92, "adversarialPromptPressure": 28},
    {"id": "prompt-attack-edit", "title": "Prompt attack edit", "editStrength": 78, "layoutLock": 66, "identityLock": 92, "adversarialPromptPressure": 28},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGenerationCase(input, stageEvidence = { layout: 67, identity: 70, reward: 73, evidenceDepth: 47 }) {
  const edit = clamp(input.editStrength);
  const layoutLock = clamp(input.layoutLock);
  const identityLock = clamp(input.identityLock);
  const pressure = clamp(input.adversarialPromptPressure);
  const editPressure = clamp(edit * 0.42 + pressure * 0.36 + (100 - layoutLock) * 0.12 + (100 - identityLock) * 0.10);
  const constraintSatisfaction = clamp(stageEvidence.layout * 0.34 + layoutLock * 0.30 + identityLock * 0.12 + (100 - pressure) * 0.14 + stageEvidence.evidenceDepth * 0.10);
  const identityPreservation = clamp(stageEvidence.identity * 0.34 + identityLock * 0.34 + (100 - edit) * 0.18 + (100 - pressure) * 0.14);
  const editLocality = clamp(layoutLock * 0.30 + identityLock * 0.18 + (100 - editPressure) * 0.28 + stageEvidence.layout * 0.24);
  const rewardAlignment = clamp(stageEvidence.reward * 0.30 + constraintSatisfaction * 0.28 + identityPreservation * 0.20 + (100 - pressure) * 0.22);
  const identityDamage = clamp(edit * 0.24 + pressure * 0.28 + (100 - identityPreservation) * 0.30 + (100 - identityLock) * 0.18);
  const provenanceRisk = clamp(pressure * 0.34 + editPressure * 0.24 + (100 - constraintSatisfaction) * 0.24 + (100 - editLocality) * 0.18);
  const readiness = clamp(constraintSatisfaction * 0.28 + identityPreservation * 0.26 + editLocality * 0.20 + rewardAlignment * 0.16 + (100 - Math.max(identityDamage, provenanceRisk)) * 0.10);
  return { editPressure, constraintSatisfaction, identityPreservation, editLocality, rewardAlignment, identityDamage, provenanceRisk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "constraint-generation" || result.mode !== "cached-real") return null;
  const editPressure = clamp(result.metrics.editPressure);
  const constraintSatisfaction = clamp(result.metrics.constraintSatisfaction);
  const identityPreservation = clamp(result.metrics.identityPreservation);
  const editLocality = clamp(result.metrics.editLocality);
  const rewardAlignment = clamp(result.metrics.rewardAlignment);
  const identityDamage = clamp(result.metrics.identityDamage);
  const provenanceRisk = clamp(result.metrics.provenanceRisk);
  const readiness = clamp(result.metrics.readiness);
  return { editPressure, constraintSatisfaction, identityPreservation, editLocality, rewardAlignment, identityDamage, provenanceRisk, readiness };
}

export function chooseGenerationMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreGenerationCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function generationDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.constraintSatisfaction >= 60 && metrics.identityDamage <= 38 && metrics.provenanceRisk <= 46) return "release";
  if (metrics.readiness >= 54 && metrics.constraintSatisfaction >= 48 && metrics.identityDamage <= 66) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseGenerationMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      editStrength: scenario.editStrength,
      layoutLock: scenario.layoutLock,
      identityLock: scenario.identityLock,
      adversarialPromptPressure: scenario.adversarialPromptPressure
    },
    metrics,
    decision: generationDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.identityDamage <= 38,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minConstraintSatisfaction = Math.min(...caseRows.map((row) => row.metrics.constraintSatisfaction));
  const maxIdentityDamage = Math.max(...caseRows.map((row) => row.metrics.identityDamage));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minConstraintSatisfaction: Number(minConstraintSatisfaction.toFixed(1)),
    maxIdentityDamage: Number(maxIdentityDamage.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseGenerationMetrics, evaluateScenario, generationDecision, normalizeCachedGpuResult, scoreGenerationCase, summarizeBench } from "../src/core.js";

const locked = scoreGenerationCase({ editStrength: 20, layoutLock: 88, identityLock: 90, adversarialPromptPressure: 12 }, stageEvidence);
const attacked = scoreGenerationCase({ editStrength: 92, layoutLock: 26, identityLock: 22, adversarialPromptPressure: 94 }, stageEvidence);
assert.ok(locked.constraintSatisfaction > attacked.constraintSatisfaction);
assert.ok(locked.identityDamage < attacked.identityDamage);
assert.notEqual(generationDecision(locked), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.constraintSatisfaction >= 0 && row.metrics.constraintSatisfaction <= 100);
  assert.ok(row.metrics.identityPreservation >= 0 && row.metrics.identityPreservation <= 100);
  assert.ok(row.metrics.identityDamage >= 0 && row.metrics.identityDamage <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.rewardAlignment > 0);
const selected = chooseGenerationMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minConstraintSatisfaction >= 67);
assert.ok(summary.maxIdentityDamage < 35);
assert.equal(summary.block, 0);
assert.equal(summary.release, 4);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-constraint-generation-bench:", summary.cases, "cases", summary.maxIdentityDamage, "max identity damage");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stages():
    text = GENERATION_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "layout": by_stage["layout-control"]["gateScore"],
        "identity": by_stage["identity-preservation"]["gateScore"],
        "reward": by_stage["preference-reward"]["gateScore"],
        "evidenceDepth": by_stage["layout-control"]["evidenceDepthScore"],
    }


def read_cached_gpu_results():
    if not COLAB_RESULTS.exists():
        return []
    return [
        row for row in json.loads(COLAB_RESULTS.read_text(encoding="utf-8"))
        if row.get("jobId") == "constraint-generation" and row.get("mode") == "cached-real"
    ]


def score_case(case, stage_evidence):
    edit = max(0, min(100, float(case["editStrength"])))
    layout_lock = max(0, min(100, float(case["layoutLock"])))
    identity_lock = max(0, min(100, float(case["identityLock"])))
    pressure = max(0, min(100, float(case["adversarialPromptPressure"])))
    edit_pressure = max(0, min(100, edit * 0.42 + pressure * 0.36 + (100 - layout_lock) * 0.12 + (100 - identity_lock) * 0.10))
    constraints = max(0, min(100, stage_evidence["layout"] * 0.34 + layout_lock * 0.30 + identity_lock * 0.12 + (100 - pressure) * 0.14 + stage_evidence["evidenceDepth"] * 0.10))
    identity = max(0, min(100, stage_evidence["identity"] * 0.34 + identity_lock * 0.34 + (100 - edit) * 0.18 + (100 - pressure) * 0.14))
    locality = max(0, min(100, layout_lock * 0.30 + identity_lock * 0.18 + (100 - edit_pressure) * 0.28 + stage_evidence["layout"] * 0.24))
    reward = max(0, min(100, stage_evidence["reward"] * 0.30 + constraints * 0.28 + identity * 0.20 + (100 - pressure) * 0.22))
    damage = max(0, min(100, edit * 0.24 + pressure * 0.28 + (100 - identity) * 0.30 + (100 - identity_lock) * 0.18))
    provenance = max(0, min(100, pressure * 0.34 + edit_pressure * 0.24 + (100 - constraints) * 0.24 + (100 - locality) * 0.18))
    readiness = max(0, min(100, constraints * 0.28 + identity * 0.26 + locality * 0.20 + reward * 0.16 + (100 - max(damage, provenance)) * 0.10))
    return {
        "editPressure": round(edit_pressure, 1),
        "constraintSatisfaction": round(constraints, 1),
        "identityPreservation": round(identity, 1),
        "editLocality": round(locality, 1),
        "rewardAlignment": round(reward, 1),
        "identityDamage": round(damage, 1),
        "provenanceRisk": round(provenance, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 68 and metrics["constraintSatisfaction"] >= 60 and metrics["identityDamage"] <= 38 and metrics["provenanceRisk"] <= 46:
        return "release"
    if metrics["readiness"] >= 54 and metrics["constraintSatisfaction"] >= 48 and metrics["identityDamage"] <= 66:
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
            "system": "controllable-generation-studio",
            "cluster": "Controllable generation",
            "sourceStages": [stage["stage"] for stage in stages],
            "controls": {key: case[key] for key in ("editStrength", "layoutLock", "identityLock", "adversarialPromptPressure")},
            "metrics": metrics,
            "cachedGpuMetrics": cached["metrics"] if cached else None,
            "decision": decision(metrics),
            "acceptancePass": metrics["readiness"] >= 68 and metrics["identityDamage"] <= 38,
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
    write(BASE / "README.md", "# CVPR Constraint Generation Bench\n\nEdit strength, layout lock, identity lock, and adversarial prompt controls for constraint-preserving generation.\n")


def build_registry(stages, stage_evidence, records):
    cached_count = sum(1 for row in records if row["preferredRuntime"] == "cached-real")
    summary = {
        "bench": "cvpr-constraint-generation-bench",
        "sourceSystem": "controllable-generation-studio",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "minConstraintSatisfaction": min(row["metrics"]["constraintSatisfaction"] for row in records),
        "maxIdentityDamage": max(row["metrics"]["identityDamage"] for row in records),
        "acceptancePass": any(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-real"],
        "gpuBacked": cached_count > 0,
        "cachedRealCases": cached_count,
        "colabWorker": "cvpr-colab-gpu-worker",
        "playbookSource": "08-controllable-generation-adversarial-media",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    cases_json = json.dumps(SCENARIOS)
    cached_json = json.dumps(read_cached_gpu_results())
    rows = "".join(f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['constraintSatisfaction']}</td><td>{row['metrics']['identityPreservation']}</td><td>{row['metrics']['editLocality']}</td><td>{row['metrics']['identityDamage']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>""" for row in records)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Constraint Generation Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · constraint generation bench</div><h1>Constraint-preserving generation bench</h1><p>Executes the eighth CVPR Demo Playbook item: stress controllable edits against layout locks, identity locks, adversarial prompt pressure, and provenance risk.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-demo-arena.html">arena</a><a href="controllable-generation-studio.html">generation system</a><a href="analysis/cvpr_constraint_generation_bench/registry.json">bench registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['cases']}</b><span>generation cases</span></div><div class="stat"><b>{summary['avgReadiness']}</b><span>avg readiness</span></div><div class="stat"><b>{summary['maxIdentityDamage']}</b><span>max damage</span></div><div class="stat"><b>{summary['block']}</b><span>blocked cases</span></div></section>
<section class="bench"><aside class="panel controls"><label>runtime<select id="runtime"><option value="cached-real">cached-real</option><option value="simulated">simulated</option></select></label><label>scenario<select id="scenario"></select></label><label>edit strength<input id="editStrength" type="range" min="0" max="100"></label><output id="editOut"></output><label>layout lock<input id="layoutLock" type="range" min="0" max="100"></label><output id="layoutOut"></output><label>identity lock<input id="identityLock" type="range" min="0" max="100"></label><output id="identityOut"></output><label>adversarial prompt pressure<input id="adversarialPromptPressure" type="range" min="0" max="100"></label><output id="pressureOut"></output></aside><section class="panel"><canvas id="generation" width="760" height="360" aria-label="constraint generation chart"></canvas><div class="meters"><div><b id="constraint">0</b><span>constraint</span></div><div><b id="identity">0</b><span>identity</span></div><div><b id="locality">0</b><span>locality</span></div><div><b id="damage">0</b><span>damage</span></div><div><b id="decision">-</b><span id="runtimeLabel">decision</span></div></div></section></section>
<section class="panel"><h2>Default Generation Runs</h2><table><thead><tr><th>Case</th><th>Constraint</th><th>Identity</th><th>Locality</th><th>Identity damage</th><th>Decision</th></tr></thead><tbody>{rows}</tbody></table></section>
<section class="panel"><h2>Acceptance Gate</h2><code>raise adversarial-media readiness above 68 while keeping identity damage below review · stage evidence: {esc(stage_evidence)}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_constraint_generation_bench.py · tested package under source-code/learning/cvpr-constraint-generation-bench</div></footer>
<script type="module">
import {{ chooseGenerationMetrics, generationDecision }} from "./source-code/learning/cvpr-constraint-generation-bench/src/core.js";
const scenarios = {cases_json}; const stageEvidence = {json.dumps(stage_evidence)}; const cachedGpuResults = {cached_json}; const select = document.querySelector("#scenario");
for (const scenario of scenarios) {{ const option = document.createElement("option"); option.value = scenario.id; option.textContent = scenario.title; select.append(option); }}
const ids = ["editStrength","layoutLock","identityLock","adversarialPromptPressure"]; const outs = {{ editStrength:"editOut", layoutLock:"layoutOut", identityLock:"identityOut", adversarialPromptPressure:"pressureOut" }};
function cls(decision) {{ return decision === "release" ? "release" : decision === "review" ? "review" : "block"; }}
function setScenario(id) {{ const s = scenarios.find((row) => row.id === id) || scenarios[0]; ids.forEach((key) => document.querySelector("#"+key).value = s[key]); render(); }}
function draw(metrics, controls) {{ const canvas=document.querySelector("#generation"), ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#FFFFFF"; ctx.fillRect(88,70,230,180); ctx.strokeStyle=metrics.constraintSatisfaction>=60?"#0E7C86":"#B37A1E"; ctx.lineWidth=4; ctx.strokeRect(112,92,80+controls.editStrength,58); ctx.strokeRect(155,172,90,46); ctx.strokeStyle=metrics.identityDamage>66?"#9B2D2D":"#2F7A4F"; ctx.beginPath(); ctx.arc(470,154,58,0,Math.PI*2); ctx.stroke(); ctx.fillStyle="#23302C"; ctx.font="12px ui-monospace, monospace"; ctx.fillText(`layout lock ${{controls.layoutLock}}`, 88, 38); const bars=[["constraint",metrics.constraintSatisfaction,"#0E7C86"],["identity",metrics.identityPreservation,"#2F7A4F"],["damage",metrics.identityDamage,"#9B2D2D"],["risk",metrics.provenanceRisk,"#B37A1E"]]; bars.forEach(([name,val,color],i)=>{{ const x=84+i*150; ctx.fillStyle=color; ctx.fillRect(x,326-val*1.6,58,val*1.6); ctx.fillStyle="#23302C"; ctx.fillText(name,x,346); }}); }}
function render() {{ const controls=Object.fromEntries(ids.map((key)=>[key,Number(document.querySelector("#"+key).value)])); ids.forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const scenario={{ id: select.value, title: select.options[select.selectedIndex]?.textContent || select.value, ...controls }}; const selected=chooseGenerationMetrics(scenario, stageEvidence, cachedGpuResults, document.querySelector("#runtime").value); const metrics=selected.metrics; const decision=generationDecision(metrics); document.querySelector("#constraint").textContent=metrics.constraintSatisfaction.toFixed(1); document.querySelector("#identity").textContent=metrics.identityPreservation.toFixed(1); document.querySelector("#locality").textContent=metrics.editLocality.toFixed(1); document.querySelector("#damage").textContent=metrics.identityDamage.toFixed(1); const d=document.querySelector("#decision"); d.textContent=decision; d.className=cls(decision); document.querySelector("#runtimeLabel").textContent=selected.runtimeMode; draw(metrics, controls); }}
select.addEventListener("change",()=>setScenario(select.value)); document.querySelector("#runtime").addEventListener("change", render); ids.forEach((key)=>document.querySelector("#"+key).addEventListener("input",render)); select.value=scenarios[0].id; setScenario(select.value);
</script></body></html>"""
    write(ROOT / "cvpr-constraint-generation-bench.html", page)


def main():
    stages, stage_evidence = read_stages()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-constraint-generation-bench.html: {summary['cases']} cases, max identity damage {summary['maxIdentityDamage']}")


if __name__ == "__main__":
    main()

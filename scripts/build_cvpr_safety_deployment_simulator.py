"""Build the CVPR safety deployment simulator demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-safety-deployment-simulator"
ANALYSIS = ROOT / "analysis/cvpr_safety_deployment_simulator"

SOURCES = {
    "backlog": ROOT / "analysis/cvpr_demo_build_backlog/registry.json",
    "driving": ROOT / "analysis/cvpr_driving_safety_bench/registry.json",
    "clinical": ROOT / "analysis/cvpr_clinical_shift_bench/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
}
LIVE_EXPORT = "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json"
FLOW_COMMAND = "python3 scripts/run_cvpr_safety_deployment_flow.py"
OPERATOR_COMMANDS = [
    "python3 scripts/run_colab_live_demo.py clinical-shift",
    "python3 scripts/run_colab_live_demo.py driving-safety",
    "python3 scripts/build_cvpr_live_colab_export_from_analysis.py",
    f"python3 scripts/stage_cvpr_live_colab_export.py --export {LIVE_EXPORT} --job clinical-shift --promote",
    f"python3 scripts/stage_cvpr_live_colab_export.py --export {LIVE_EXPORT} --job driving-safety --promote",
]

CONTEXTS = [
    {"id": "nominal-route", "title": "Nominal route", "hazardShift": 0, "speedShift": 0, "occlusionShift": 0, "confidenceShift": 0, "clinicalRiskShift": 0},
    {"id": "bad-weather", "title": "Bad weather", "hazardShift": 8, "speedShift": -4, "occlusionShift": 24, "confidenceShift": -10, "clinicalRiskShift": 4},
    {"id": "dense-actors", "title": "Dense actors", "hazardShift": 24, "speedShift": 10, "occlusionShift": 14, "confidenceShift": -8, "clinicalRiskShift": 6},
    {"id": "new-city-deploy", "title": "New city deploy", "hazardShift": 18, "speedShift": 16, "occlusionShift": 20, "confidenceShift": -16, "clinicalRiskShift": 12},
]

STAGE_EVIDENCE = 56.2

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function clampTtc(value) {
  return Math.max(0.6, Math.min(8.5, Number(value)));
}

export function applyContext(record, context) {
  const c = record.controls;
  return {
    hazardDensity: clamp(c.hazardDensity + context.hazardShift),
    actorSpeed: clamp(c.actorSpeed + context.speedShift),
    occlusion: clamp(c.occlusion + context.occlusionShift),
    actionConfidence: clamp(c.actionConfidence + context.confidenceShift)
  };
}

export function scoreDeployment(controls, stageEvidence = 56.2, clinicalRisk = 20) {
  const hazard = clamp(controls.hazardDensity);
  const speed = clamp(controls.actorSpeed);
  const occlusion = clamp(controls.occlusion);
  const confidence = clamp(controls.actionConfidence);
  const timeToCollision = clampTtc(8.2 - speed * 0.045 - hazard * 0.026);
  const sceneGrounding = clamp(stageEvidence * 0.42 + (100 - occlusion) * 0.25 + confidence * 0.22 + (100 - hazard) * 0.11);
  const risk = clamp(hazard * 0.32 + speed * 0.24 + occlusion * 0.29 + (100 - confidence) * 0.31 + (3.2 - Math.min(timeToCollision, 3.2)) * 9);
  const ruleViolation = clamp(risk * 0.58 + (100 - sceneGrounding) * 0.32 + (confidence > 72 && timeToCollision < 2.4 ? 12 : 0));
  const abstention = clamp(risk * 0.55 + (100 - sceneGrounding) * 0.28 - confidence * 0.18);
  const readiness = clamp(sceneGrounding * 0.36 + (100 - risk) * 0.34 + (100 - ruleViolation) * 0.18 + abstention * 0.12);
  const deploymentRisk = clamp(risk * 0.68 + clinicalRisk * 0.32);
  const deploymentReadiness = clamp(readiness * 0.70 + (100 - deploymentRisk) * 0.20 + sceneGrounding * 0.10);
  return { sceneGrounding, timeToCollision, risk, ruleViolation, abstention, readiness, deploymentRisk, deploymentReadiness };
}

export function deploymentDecision(metrics) {
  if (metrics.deploymentReadiness >= 62 && metrics.sceneGrounding >= 62 && metrics.deploymentRisk <= 42 && metrics.ruleViolation <= 36) return "release";
  if (metrics.deploymentReadiness >= 50 && metrics.sceneGrounding >= 48 && metrics.deploymentRisk <= 64) return "review";
  return "block";
}

export function evaluateDeployment(record, context, stageEvidence = 56.2, clinicalRisk = 20) {
  const controls = applyContext(record, context);
  const metrics = scoreDeployment(controls, stageEvidence, clinicalRisk + context.clinicalRiskShift);
  return {
    id: `${record.id}/${context.id}`,
    caseId: record.id,
    contextId: context.id,
    caseTitle: record.title,
    contextTitle: context.title,
    controls,
    metrics,
    riskDelta: metrics.deploymentRisk - record.metrics.risk,
    readinessDelta: metrics.deploymentReadiness - record.metrics.readiness,
    decision: deploymentDecision(metrics)
  };
}

export function summarizeDeployment(records, contexts, stageEvidence = 56.2, clinicalRisk = 20) {
  const rows = records.flatMap((record) => contexts.map((context) => evaluateDeployment(record, context, stageEvidence, clinicalRisk)));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.deploymentReadiness, 0) / rows.length;
  return {
    cases: records.length,
    contexts: contexts.length,
    deploymentRows: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    minSceneGrounding: Number(Math.min(...rows.map((row) => row.metrics.sceneGrounding)).toFixed(1)),
    maxDeploymentRisk: Number(Math.max(...rows.map((row) => row.metrics.deploymentRisk)).toFixed(1)),
    avgDeploymentReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { clinicalRisk, contexts, deploymentRows, drivingRecords, stageEvidence, summary } from "../src/fixtures.js";
import { applyContext, deploymentDecision, evaluateDeployment, scoreDeployment, summarizeDeployment } from "../src/core.js";

const base = drivingRecords.find((record) => record.id === "urban-cut-in");
const badWeather = contexts.find((context) => context.id === "bad-weather");
const newCity = contexts.find((context) => context.id === "new-city-deploy");

const weatherControls = applyContext(base, badWeather);
assert.ok(weatherControls.occlusion > base.controls.occlusion);
assert.ok(weatherControls.actionConfidence < base.controls.actionConfidence);

const nominal = scoreDeployment(base.controls, stageEvidence, clinicalRisk);
const shifted = evaluateDeployment(base, newCity, stageEvidence, clinicalRisk);
assert.ok(shifted.metrics.deploymentRisk > nominal.deploymentRisk);
assert.ok(shifted.metrics.deploymentReadiness < nominal.deploymentReadiness);
assert.match(deploymentDecision(shifted.metrics), /^(release|review|block)$/);

const derived = summarizeDeployment(drivingRecords, contexts, stageEvidence, clinicalRisk);
assert.equal(derived.cases, 4);
assert.equal(derived.contexts, 4);
assert.equal(derived.deploymentRows, 16);
assert.equal(deploymentRows.length, 16);
assert.equal(summary.backlogGoal, "Safety deployment simulator");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 8);
assert.ok(summary.review + summary.block > 0);
assert.ok(summary.maxDeploymentRisk >= 45);
assert.equal(summary.status, "release");
console.log("ok cvpr-safety-deployment-simulator:", summary.deploymentRows, "deployment rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def load_input():
    return {name: read_json(path) for name, path in SOURCES.items()}


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def clamp_ttc(value):
    return max(0.6, min(8.5, float(value)))


def apply_context(record, context):
    c = record["controls"]
    return {
        "hazardDensity": clamp(c["hazardDensity"] + context["hazardShift"]),
        "actorSpeed": clamp(c["actorSpeed"] + context["speedShift"]),
        "occlusion": clamp(c["occlusion"] + context["occlusionShift"]),
        "actionConfidence": clamp(c["actionConfidence"] + context["confidenceShift"]),
    }


def score(controls, stage_evidence, clinical_risk):
    hazard = clamp(controls["hazardDensity"])
    speed = clamp(controls["actorSpeed"])
    occlusion = clamp(controls["occlusion"])
    confidence = clamp(controls["actionConfidence"])
    ttc = clamp_ttc(8.2 - speed * 0.045 - hazard * 0.026)
    grounding = clamp(stage_evidence * 0.42 + (100 - occlusion) * 0.25 + confidence * 0.22 + (100 - hazard) * 0.11)
    risk = clamp(hazard * 0.32 + speed * 0.24 + occlusion * 0.29 + (100 - confidence) * 0.31 + (3.2 - min(ttc, 3.2)) * 9)
    violation = clamp(risk * 0.58 + (100 - grounding) * 0.32 + (12 if confidence > 72 and ttc < 2.4 else 0))
    abstention = clamp(risk * 0.55 + (100 - grounding) * 0.28 - confidence * 0.18)
    readiness = clamp(grounding * 0.36 + (100 - risk) * 0.34 + (100 - violation) * 0.18 + abstention * 0.12)
    deployment_risk = clamp(risk * 0.68 + clinical_risk * 0.32)
    deployment_readiness = clamp(readiness * 0.70 + (100 - deployment_risk) * 0.20 + grounding * 0.10)
    return {
        "sceneGrounding": round(grounding, 1),
        "timeToCollision": round(ttc, 2),
        "risk": round(risk, 1),
        "ruleViolation": round(violation, 1),
        "abstention": round(abstention, 1),
        "readiness": round(readiness, 1),
        "deploymentRisk": round(deployment_risk, 1),
        "deploymentReadiness": round(deployment_readiness, 1),
    }


def decide(metrics):
    if metrics["deploymentReadiness"] >= 62 and metrics["sceneGrounding"] >= 62 and metrics["deploymentRisk"] <= 42 and metrics["ruleViolation"] <= 36:
        return "release"
    if metrics["deploymentReadiness"] >= 50 and metrics["sceneGrounding"] >= 48 and metrics["deploymentRisk"] <= 64:
        return "review"
    return "block"


def build_rows(data, clinical_risk):
    rows = []
    for record in data["driving"]["records"]:
        for context in CONTEXTS:
            controls = apply_context(record, context)
            metrics = score(controls, STAGE_EVIDENCE, clinical_risk + context["clinicalRiskShift"])
            rows.append(
                {
                    "id": f"{record['id']}/{context['id']}",
                    "caseId": record["id"],
                    "caseTitle": record["title"],
                    "contextId": context["id"],
                    "contextTitle": context["title"],
                    "controls": controls,
                    "metrics": metrics,
                    "riskDelta": round(metrics["deploymentRisk"] - record["metrics"]["risk"], 1),
                    "readinessDelta": round(metrics["deploymentReadiness"] - record["metrics"]["readiness"], 1),
                    "decision": decide(metrics),
                    "sourceBenchPage": "cvpr-driving-safety-bench.html",
                    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
                    "runtimeEvidence": record["preferredRuntime"],
                    "gpuProvenance": record["gpuProvenance"],
                }
            )
    return rows


def summarize(data, rows, clinical_risk):
    backlog_tasks = [task for task in data["backlog"]["backlogTasks"] if task["goal"] == "Safety deployment simulator"]
    replay_rows = [row for row in data["replay"]["replayRows"] if row["jobId"] in {"driving-safety", "clinical-shift"}]
    summary = {
        "demo": "cvpr-safety-deployment-simulator",
        "status": "release",
        "backlogGoal": "Safety deployment simulator",
        "backlogTasksCovered": len(backlog_tasks),
        "theme": "Using vision to act in the world",
        "systems": ["driving-vla-release-gate", "medical-vision-validation"],
        "benches": ["cvpr-driving-safety-bench", "cvpr-clinical-shift-bench"],
        "cases": data["driving"]["summary"]["cases"],
        "contexts": len(CONTEXTS),
        "deploymentRows": len(rows),
        "release": len([row for row in rows if row["decision"] == "release"]),
        "review": len([row for row in rows if row["decision"] == "review"]),
        "block": len([row for row in rows if row["decision"] == "block"]),
        "gpuBackedCases": data["driving"]["summary"]["cachedRealCases"] + data["clinical"]["summary"]["cachedRealCases"],
        "clinicalResidualRisk": clinical_risk,
        "stageEvidence": STAGE_EVIDENCE,
        "minSceneGrounding": min(row["metrics"]["sceneGrounding"] for row in rows),
        "maxDeploymentRisk": max(row["metrics"]["deploymentRisk"] for row in rows),
        "avgDeploymentReadiness": round(sum(row["metrics"]["deploymentReadiness"] for row in rows) / len(rows), 1),
        "proPlusJobs": [row["jobId"] for row in replay_rows],
        "liveJobs": ["clinical-shift", "driving-safety"],
        "liveExportArtifact": LIVE_EXPORT,
        "familyFlowCommand": FLOW_COMMAND,
        "operatorCommands": OPERATOR_COMMANDS,
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["backlogTasksCovered"] == 3
        and summary["cases"] == 4
        and summary["contexts"] == 4
        and summary["deploymentRows"] == 16
        and summary["gpuBackedCases"] == 8
        and set(summary["proPlusJobs"]) == {"driving-safety", "clinical-shift"}
        and summary["review"] + summary["block"] > 0
        and summary["maxDeploymentRisk"] >= 45
        and summary["minSceneGrounding"] >= 55
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(data, summary, rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const drivingRecords = " + json.dumps(data["driving"]["records"], indent=2) + ";\n"
        "export const contexts = " + json.dumps(CONTEXTS, indent=2) + ";\n"
        "export const stageEvidence = " + json.dumps(STAGE_EVIDENCE) + ";\n"
        "export const clinicalRisk = " + json.dumps(summary["clinicalResidualRisk"]) + ";\n"
        "export const deploymentRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Safety Deployment Simulator\n\n"
        "Stress deployment of the driving VLA release gate across rollout contexts with Pro+ driving evidence and clinical-shift residual risk.\n\n"
        "Operator flow:\n"
        f"- `{FLOW_COMMAND}`\n"
        + "".join(f"- `{command}`\n" for command in OPERATOR_COMMANDS),
    )


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "contexts": CONTEXTS,
                "deploymentRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(data, summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["deploymentRows"]),
        ("Release", summary["release"]),
        ("Review", summary["review"]),
        ("Block", summary["block"]),
        ("Pro+ cases", summary["gpuBackedCases"]),
        ("Min grounding", summary["minSceneGrounding"]),
        ("Max risk", summary["maxDeploymentRisk"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['caseTitle'])}</td><td>{esc(row['contextTitle'])}</td><td>{row['metrics']['sceneGrounding']}</td><td>{row['metrics']['timeToCollision']}</td><td>{row['metrics']['risk']}</td><td>{row['metrics']['ruleViolation']}</td><td>{row['metrics']['deploymentRisk']}</td><td>{row['metrics']['deploymentReadiness']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Safety Deployment Simulator</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--teal:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.arena{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px;overflow-x:auto}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{background:#fff;border:1px solid var(--line);border-radius:6px;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1050px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.release{{color:var(--good);font-weight:700}}.review{{color:var(--warn);font-weight:700}}.block,.inspect{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.arena{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · implemented roadmap demo</div><h1>Safety Deployment Simulator</h1><p>Stress the driving VLA release gate across bad weather, dense actors, and new-city rollout contexts using Pro+ driving safety evidence plus clinical-shift residual risk.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-build-backlog.html">build backlog</a><a href="cvpr-next-demo-roadmap.html">roadmap</a><a href="cvpr-driving-safety-bench.html">driving bench</a><a href="cvpr-clinical-shift-bench.html">clinical bench</a><a href="analysis/cvpr_safety_deployment_simulator/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="arena"><aside class="panel controls"><label>scene<select id="sceneSelect"></select></label><label>deployment context<select id="contextSelect"></select></label><label>hazard density<input id="hazardInput" type="range" min="0" max="100"></label><output id="hazardOut"></output><label>actor speed<input id="speedInput" type="range" min="0" max="100"></label><output id="speedOut"></output><label>occlusion<input id="occlusionInput" type="range" min="0" max="100"></label><output id="occlusionOut"></output><label>action confidence<input id="confidenceInput" type="range" min="0" max="100"></label><output id="confidenceOut"></output><code id="sourceLine"></code></aside><section class="panel"><canvas id="roadCanvas" width="820" height="390" aria-label="safety deployment simulator"></canvas><div class="meters"><div><b id="groundingMeter">0</b><span>grounding</span></div><div><b id="ttcMeter">0</b><span>TTC</span></div><div><b id="riskMeter">0</b><span>risk</span></div><div><b id="deployRiskMeter">0</b><span>deploy risk</span></div><div><b id="decisionMeter">-</b><span>decision</span></div></div></section></section><section class="panel"><h2>Deployment Matrix</h2><table><thead><tr><th>Scene</th><th>Context</th><th>Grounding</th><th>TTC</th><th>Scene risk</th><th>Rule violation</th><th>Deploy risk</th><th>Deploy readiness</th><th>Decision</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Operator Path</h2><code>{esc(summary['familyFlowCommand'])}</code>{''.join(f'<code>{esc(command)}</code>' for command in summary['operatorCommands'])}<code>live export: {esc(summary['liveExportArtifact'])}</code></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · backlog tasks covered: {summary['backlogTasksCovered']} · Pro+ jobs: {esc(', '.join(summary['proPlusJobs']))} · scoreDeployment</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_safety_deployment_simulator.py · tested package under source-code/learning/cvpr-safety-deployment-simulator</div></footer>
<script type="module">
import {{ applyContext, deploymentDecision, scoreDeployment }} from "./source-code/learning/cvpr-safety-deployment-simulator/src/core.js";
const records={json.dumps(data['driving']['records'])}; const contexts={json.dumps(CONTEXTS)}; const stageEvidence={json.dumps(STAGE_EVIDENCE)}; const clinicalRisk={json.dumps(summary['clinicalResidualRisk'])};
const sceneSelect=document.querySelector("#sceneSelect"); const contextSelect=document.querySelector("#contextSelect");
for (const row of records) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; sceneSelect.append(option); }}
for (const row of contexts) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; contextSelect.append(option); }}
const sliders={{hazardDensity:"hazardInput",actorSpeed:"speedInput",occlusion:"occlusionInput",actionConfidence:"confidenceInput"}};
const outs={{hazardDensity:"hazardOut",actorSpeed:"speedOut",occlusion:"occlusionOut",actionConfidence:"confidenceOut"}};
function selectedRecord() {{ return records.find((row)=>row.id===sceneSelect.value)||records[0]; }}
function selectedContext() {{ return contexts.find((row)=>row.id===contextSelect.value)||contexts[0]; }}
function loadContext() {{ const controls=applyContext(selectedRecord(), selectedContext()); Object.entries(sliders).forEach(([key,id])=>document.querySelector("#"+id).value=controls[key]); renderSimulator(); }}
function drawRoad(metrics, controls) {{ const canvas=document.querySelector("#roadCanvas"); const ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#506166"; ctx.fillRect(70,0,330,390); ctx.strokeStyle="#F7F4E8"; ctx.lineWidth=4; ctx.setLineDash([22,18]); for (let x of [178,288]) ctx.beginPath(), ctx.moveTo(x,0), ctx.lineTo(x,390), ctx.stroke(); ctx.setLineDash([]); const hazards=Math.max(3, Math.round(controls.hazardDensity/9)); for(let i=0;i<hazards;i++){{ctx.fillStyle=i%2?"#B37A1E":"#9B2D2D"; ctx.globalAlpha=.75; ctx.fillRect(430+(i*47)%300,42+(i*61)%280,16,16);}} ctx.globalAlpha=1; ctx.fillStyle="#0E7C86"; ctx.fillRect(226,250,46,80); ctx.fillStyle="#101719"; ctx.fillRect(234,238,30,14); ctx.strokeStyle=metrics.deploymentRisk>64?"#9B2D2D":metrics.deploymentRisk>42?"#B37A1E":"#277449"; ctx.lineWidth=8; ctx.beginPath(); ctx.arc(249,224,Math.max(28,metrics.deploymentRisk*1.8),0,Math.PI*2); ctx.stroke(); const bars=[["grounding",metrics.sceneGrounding,"#277449"],["rule",metrics.ruleViolation,"#B37A1E"],["deploy risk",metrics.deploymentRisk,"#9B2D2D"]]; bars.forEach(([name,val,color],i)=>{{ctx.fillStyle=color;ctx.fillRect(84+i*202,350-val*2.0,88,val*2.0);ctx.fillStyle="#23302C";ctx.font="13px ui-monospace, monospace";ctx.fillText(name,84+i*202,374);}}); ctx.fillStyle="#23302C"; ctx.font="14px ui-monospace, monospace"; ctx.fillText(`hazard ${{controls.hazardDensity}} · speed ${{controls.actorSpeed}} · occlusion ${{controls.occlusion}}`,72,30); }}
function renderSimulator() {{ const base=selectedRecord(); const context=selectedContext(); const controls={{hazardDensity:Number(hazardInput.value), actorSpeed:Number(speedInput.value), occlusion:Number(occlusionInput.value), actionConfidence:Number(confidenceInput.value)}}; Object.keys(sliders).forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const metrics=scoreDeployment(controls, stageEvidence, clinicalRisk + context.clinicalRiskShift); const verdict=deploymentDecision(metrics); groundingMeter.textContent=metrics.sceneGrounding.toFixed(1); ttcMeter.textContent=metrics.timeToCollision.toFixed(2); riskMeter.textContent=metrics.risk.toFixed(1); deployRiskMeter.textContent=metrics.deploymentRisk.toFixed(1); decisionMeter.textContent=verdict; decisionMeter.className=verdict; sourceLine.textContent=base.gpuProvenance.sourceBench + " · " + base.gpuProvenance.runtime + " · clinical residual risk " + clinicalRisk; drawRoad(metrics, controls); }}
sceneSelect.addEventListener("change", loadContext); contextSelect.addEventListener("change", loadContext); Object.values(sliders).forEach((id)=>document.querySelector("#"+id).addEventListener("input", renderSimulator)); sceneSelect.value=records[0].id; contextSelect.value=contexts[0].id; loadContext();
</script></body></html>"""
    write(ROOT / "cvpr-safety-deployment-simulator.html", page)


def main():
    data = load_input()
    clinical_risk = data["clinical"]["summary"]["maxResidualRisk"]
    rows = build_rows(data, clinical_risk)
    summary = summarize(data, rows, clinical_risk)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(data, summary, rows)
    print(f"wrote cvpr-safety-deployment-simulator.html: {summary['deploymentRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

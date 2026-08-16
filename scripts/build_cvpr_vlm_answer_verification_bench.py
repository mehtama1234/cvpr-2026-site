"""Build the CVPR grounded VLM answer verification bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-vlm-answer-verification-bench"
ANALYSIS = ROOT / "analysis/cvpr_vlm_answer_verification_bench"
VLM_FIXTURES = ROOT / "source-code/learning/vlm-grounded-reasoning/src/fixtures.js"

SCENARIOS = [
    {"id": "visible-count", "title": "Visible object count", "questionComplexity": 26, "priorPressure": 20, "toolNeed": 24, "evidenceThreshold": 58},
    {"id": "attribute-relation", "title": "Attribute and relation claim", "questionComplexity": 46, "priorPressure": 34, "toolNeed": 38, "evidenceThreshold": 66},
    {"id": "ocr-trap", "title": "OCR trap with plausible prior", "questionComplexity": 62, "priorPressure": 58, "toolNeed": 70, "evidenceThreshold": 76},
    {"id": "counterfactual-object", "title": "Counterfactual unsupported object", "questionComplexity": 78, "priorPressure": 72, "toolNeed": 82, "evidenceThreshold": 84},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreAnswerCase(input, stageEvidence = { look: 94, hallucination: 94, tools: 94, evidenceDepth: 94 }) {
  const complexity = clamp(input.questionComplexity);
  const prior = clamp(input.priorPressure);
  const toolNeed = clamp(input.toolNeed);
  const threshold = clamp(input.evidenceThreshold);
  const visualCitation = clamp(stageEvidence.look * 0.34 + threshold * 0.24 + (100 - prior) * 0.18 + stageEvidence.evidenceDepth * 0.14 + (100 - complexity) * 0.10);
  const toolAgreement = clamp(stageEvidence.tools * 0.36 + threshold * 0.22 + toolNeed * 0.16 + visualCitation * 0.16 + (100 - complexity) * 0.10);
  const contradictionCatch = clamp(stageEvidence.hallucination * 0.38 + threshold * 0.20 + prior * 0.16 + toolAgreement * 0.16 + stageEvidence.evidenceDepth * 0.10);
  const unsupportedClaimRisk = clamp((100 - contradictionCatch) * 0.36 + prior * 0.28 + complexity * 0.18 + toolNeed * 0.12 - threshold * 0.20);
  const readiness = clamp(visualCitation * 0.28 + toolAgreement * 0.26 + contradictionCatch * 0.24 + (100 - unsupportedClaimRisk) * 0.22);
  return { visualCitation, toolAgreement, contradictionCatch, unsupportedClaimRisk, readiness };
}

export function answerDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.visualCitation >= 60 && metrics.toolAgreement >= 60 && metrics.unsupportedClaimRisk <= 35) return "release";
  if (metrics.readiness >= 54 && metrics.visualCitation >= 48 && metrics.unsupportedClaimRisk <= 56) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence) {
  const metrics = scoreAnswerCase(scenario, stageEvidence);
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      questionComplexity: scenario.questionComplexity,
      priorPressure: scenario.priorPressure,
      toolNeed: scenario.toolNeed,
      evidenceThreshold: scenario.evidenceThreshold
    },
    metrics,
    decision: answerDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.unsupportedClaimRisk <= 35,
    runtimeMode: "cached-system-evidence",
    provenance: {
      sourceSystem: "vlm-grounded-reasoning",
      evidence: "source-code/learning/vlm-grounded-reasoning/_results/*.json"
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
    minVisualCitation: Number(Math.min(...caseRows.map((row) => row.metrics.visualCitation)).toFixed(1)),
    minToolAgreement: Number(Math.min(...caseRows.map((row) => row.metrics.toolAgreement)).toFixed(1)),
    maxUnsupportedClaimRisk: Number(Math.max(...caseRows.map((row) => row.metrics.unsupportedClaimRisk)).toFixed(1)),
    acceptancePass: caseRows.every((row) => row.acceptancePass),
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { scenarios, stageEvidence } from "../src/fixtures.js";
import { answerDecision, evaluateScenario, scoreAnswerCase, summarizeBench } from "../src/core.js";

const clean = scoreAnswerCase({ questionComplexity: 18, priorPressure: 14, toolNeed: 18, evidenceThreshold: 66 }, stageEvidence);
const trap = scoreAnswerCase({ questionComplexity: 92, priorPressure: 92, toolNeed: 90, evidenceThreshold: 52 }, stageEvidence);
assert.ok(clean.readiness > trap.readiness);
assert.ok(clean.unsupportedClaimRisk < trap.unsupportedClaimRisk);
assert.equal(answerDecision(clean), "release");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence);
  assert.ok(row.metrics.visualCitation >= 0 && row.metrics.visualCitation <= 100);
  assert.ok(row.metrics.toolAgreement >= 0 && row.metrics.toolAgreement <= 100);
  assert.ok(row.metrics.unsupportedClaimRisk >= 0 && row.metrics.unsupportedClaimRisk <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-system-evidence");
}

const summary = summarizeBench(scenarios, stageEvidence);
assert.equal(summary.cases, 4);
assert.equal(summary.release, 4);
assert.equal(summary.block, 0);
assert.ok(summary.minVisualCitation >= 70);
assert.ok(summary.minToolAgreement >= 70);
assert.ok(summary.maxUnsupportedClaimRisk <= 35);
console.log("ok cvpr-vlm-answer-verification-bench:", summary.cases, "cases", summary.maxUnsupportedClaimRisk, "max unsupported risk");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stage_evidence():
    text = VLM_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "look": by_stage["look-then-reason"]["gateScore"],
        "hallucination": by_stage["hallucination-check"]["gateScore"],
        "tools": by_stage["tool-verified-answer"]["gateScore"],
        "evidenceDepth": min(stage["evidenceDepthScore"] for stage in stages),
    }


def score_case(case, stage_evidence):
    complexity = max(0, min(100, float(case["questionComplexity"])))
    prior = max(0, min(100, float(case["priorPressure"])))
    tool_need = max(0, min(100, float(case["toolNeed"])))
    threshold = max(0, min(100, float(case["evidenceThreshold"])))
    visual = max(0, min(100, stage_evidence["look"] * 0.34 + threshold * 0.24 + (100 - prior) * 0.18 + stage_evidence["evidenceDepth"] * 0.14 + (100 - complexity) * 0.10))
    tools = max(0, min(100, stage_evidence["tools"] * 0.36 + threshold * 0.22 + tool_need * 0.16 + visual * 0.16 + (100 - complexity) * 0.10))
    catch = max(0, min(100, stage_evidence["hallucination"] * 0.38 + threshold * 0.20 + prior * 0.16 + tools * 0.16 + stage_evidence["evidenceDepth"] * 0.10))
    risk = max(0, min(100, (100 - catch) * 0.36 + prior * 0.28 + complexity * 0.18 + tool_need * 0.12 - threshold * 0.20))
    readiness = max(0, min(100, visual * 0.28 + tools * 0.26 + catch * 0.24 + (100 - risk) * 0.22))
    return {
        "visualCitation": round(visual, 1),
        "toolAgreement": round(tools, 1),
        "contradictionCatch": round(catch, 1),
        "unsupportedClaimRisk": round(risk, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 68 and metrics["visualCitation"] >= 60 and metrics["toolAgreement"] >= 60 and metrics["unsupportedClaimRisk"] <= 35:
        return "release"
    if metrics["readiness"] >= 54 and metrics["visualCitation"] >= 48 and metrics["unsupportedClaimRisk"] <= 56:
        return "review"
    return "block"


def build_records(stages, stage_evidence):
    source_results = sorted((ROOT / "source-code/learning/vlm-grounded-reasoning/_results").glob("*.json"))
    records = []
    for case in SCENARIOS:
        metrics = score_case(case, stage_evidence)
        records.append({
            "id": case["id"],
            "title": case["title"],
            "system": "vlm-grounded-reasoning",
            "cluster": "Vision-language reasoning",
            "sourceStages": [stage["stage"] for stage in stages],
            "controls": {key: case[key] for key in ("questionComplexity", "priorPressure", "toolNeed", "evidenceThreshold")},
            "metrics": metrics,
            "decision": decision(metrics),
            "acceptancePass": metrics["readiness"] >= 68 and metrics["unsupportedClaimRisk"] <= 35,
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
    write(BASE / "README.md", "# CVPR VLM Answer Verification Bench\n\nGrounded answer readiness bench for visual citation, tool agreement, contradiction catching, and unsupported claim risk.\n")


def build_registry(stages, stage_evidence, records):
    summary = {
        "bench": "cvpr-vlm-answer-verification-bench",
        "sourceSystem": "vlm-grounded-reasoning",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "minVisualCitation": min(row["metrics"]["visualCitation"] for row in records),
        "minToolAgreement": min(row["metrics"]["toolAgreement"] for row in records),
        "maxUnsupportedClaimRisk": max(row["metrics"]["unsupportedClaimRisk"] for row in records),
        "acceptancePass": all(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-system-evidence"],
        "gpuBacked": False,
        "cachedSystemEvidenceCases": len(records),
        "playbookSource": "08-vision-language-reasoning-safety-critical-action",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    rows = "".join(f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['visualCitation']}</td><td>{row['metrics']['toolAgreement']}</td><td>{row['metrics']['unsupportedClaimRisk']}</td><td>{row['metrics']['readiness']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>""" for row in records)
    cases_json = json.dumps(SCENARIOS)
    evidence_json = json.dumps(stage_evidence)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR VLM Answer Verification Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR bench · grounded VLM answers</div><h1>Grounded VLM answer verification bench</h1><p>Pressure test for visual citations, tool agreement, contradiction catching, and unsupported claim suppression before a VLM answer can ship.</p><nav><a href="cvpr-mission-control.html">mission control</a><a href="cvpr-demo-playbook.html">playbook</a><a href="vlm-grounded-reasoning.html">source system</a><a href="analysis/cvpr_vlm_answer_verification_bench/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['release']}/{summary['cases']}</b><span>release cases</span></div><div class="stat"><b>{summary['minVisualCitation']}</b><span>min visual citation</span></div><div class="stat"><b>{summary['minToolAgreement']}</b><span>min tool agreement</span></div><div class="stat"><b>{summary['maxUnsupportedClaimRisk']}</b><span>max unsupported risk</span></div></section>
<section class="bench"><div class="panel controls"><label>scenario<select id="scenario"></select></label><label>question complexity<input id="complexity" type="range" min="0" max="100"></label><label>prior pressure<input id="prior" type="range" min="0" max="100"></label><label>tool need<input id="tool" type="range" min="0" max="100"></label><label>evidence threshold<input id="threshold" type="range" min="0" max="100"></label><code id="gate">scoreAnswerCase</code></div><div class="panel"><canvas id="viz" width="760" height="420"></canvas><div class="meters"><div><b id="visual">0</b><span>citation</span></div><div><b id="agree">0</b><span>tool agreement</span></div><div><b id="catch">0</b><span>catch</span></div><div><b id="risk">0</b><span>unsupported</span></div><div><b id="ready">0</b><span>readiness</span></div></div></div></section>
<section class="panel"><h2>Acceptance Gate</h2><table><thead><tr><th>case</th><th>citation</th><th>tool agreement</th><th>unsupported risk</th><th>readiness</th><th>decision</th></tr></thead><tbody>{rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_vlm_answer_verification_bench.py · package source-code/learning/cvpr-vlm-answer-verification-bench</div></footer>
<script>const scenarios={cases_json}; const evidence={evidence_json};
function clamp(v){{return Math.max(0,Math.min(100,Number(v)));}}
function score(c){{const complexity=clamp(c.questionComplexity), prior=clamp(c.priorPressure), toolNeed=clamp(c.toolNeed), threshold=clamp(c.evidenceThreshold); const visual=clamp(evidence.look*.34+threshold*.24+(100-prior)*.18+evidence.evidenceDepth*.14+(100-complexity)*.10); const agree=clamp(evidence.tools*.36+threshold*.22+toolNeed*.16+visual*.16+(100-complexity)*.10); const catchScore=clamp(evidence.hallucination*.38+threshold*.20+prior*.16+agree*.16+evidence.evidenceDepth*.10); const risk=clamp((100-catchScore)*.36+prior*.28+complexity*.18+toolNeed*.12-threshold*.20); const ready=clamp(visual*.28+agree*.26+catchScore*.24+(100-risk)*.22); return {{visualCitation:visual,toolAgreement:agree,contradictionCatch:catchScore,unsupportedClaimRisk:risk,readiness:ready}};}}
function draw(m,c){{const canvas=document.querySelector("#viz"),ctx=canvas.getContext("2d");ctx.clearRect(0,0,760,420);ctx.fillStyle="#EEF3F2";ctx.fillRect(0,0,760,420);ctx.strokeStyle="#0E7C86";ctx.lineWidth=4;ctx.strokeRect(60,70,250,190);ctx.fillStyle="#23302C";ctx.font="13px ui-monospace, monospace";ctx.fillText("visual evidence cited",82,54);ctx.strokeStyle=m.unsupportedClaimRisk>35?"#9B2D2D":"#2F7A4F";ctx.beginPath();ctx.moveTo(330,165);ctx.lineTo(500,165);ctx.stroke();ctx.strokeStyle="#59656A";ctx.strokeRect(520,86,160,158);ctx.fillText("tool verifier",548,74);[["citation",m.visualCitation,"#0E7C86"],["tools",m.toolAgreement,"#2F7A4F"],["unsupported",m.unsupportedClaimRisk,"#9B2D2D"]].forEach(([n,v,color],i)=>{{ctx.fillStyle=color;ctx.fillRect(92+i*170,350-v*2.2,70,v*2.2);ctx.fillStyle="#23302C";ctx.fillText(n,88+i*170,382);}});ctx.fillText(`complexity ${{c.questionComplexity}} · prior ${{c.priorPressure}} · threshold ${{c.evidenceThreshold}}`,60,30);}}
const select=document.querySelector("#scenario"); for (const s of scenarios){{const opt=document.createElement("option"); opt.value=s.id; opt.textContent=s.title; select.appendChild(opt);}}
function load(id){{const s=scenarios.find(x=>x.id===id); complexity.value=s.questionComplexity; prior.value=s.priorPressure; tool.value=s.toolNeed; threshold.value=s.evidenceThreshold; update();}}
function update(){{const c={{questionComplexity:+complexity.value,priorPressure:+prior.value,toolNeed:+tool.value,evidenceThreshold:+threshold.value}}; const m=score(c); visual.textContent=m.visualCitation.toFixed(1); agree.textContent=m.toolAgreement.toFixed(1); catch.textContent=m.contradictionCatch.toFixed(1); risk.textContent=m.unsupportedClaimRisk.toFixed(1); ready.textContent=m.readiness.toFixed(1); gate.textContent=m.readiness>=68&&m.unsupportedClaimRisk<=35?"release":"review"; draw(m,c);}}
select.addEventListener("change",()=>load(select.value)); for (const el of [complexity,prior,tool,threshold]) el.addEventListener("input",update); load(scenarios[0].id);</script></body></html>"""
    write(ROOT / "cvpr-vlm-answer-verification-bench.html", page)


def main():
    stages, stage_evidence = read_stage_evidence()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-vlm-answer-verification-bench.html: {summary['release']} release cases")


if __name__ == "__main__":
    main()

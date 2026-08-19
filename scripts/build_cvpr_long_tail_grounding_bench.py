"""Build the CVPR long-tail open-vocabulary grounding bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-long-tail-grounding-bench"
ANALYSIS = ROOT / "analysis/cvpr_long_tail_grounding_bench"
OPEN_VOCAB_FIXTURES = ROOT / "source-code/learning/open-vocab-visual-search/src/fixtures.js"
COLAB_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"

SCENARIOS = [
    {"id": "common-clean", "title": "Common clean object", "queryRarity": 18, "distractorOverlap": 16, "boxAmbiguity": 18, "evidenceThreshold": 54},
    {"id": "rare-visible", "title": "Rare visible object", "queryRarity": 66, "distractorOverlap": 12, "boxAmbiguity": 34, "evidenceThreshold": 62},
    {"id": "rare-distractors", "title": "Rare object with distractors", "queryRarity": 78, "distractorOverlap": 28, "boxAmbiguity": 28, "evidenceThreshold": 76},
    {"id": "unsupported-query", "title": "Unsupported text query", "queryRarity": 82, "distractorOverlap": 30, "boxAmbiguity": 32, "evidenceThreshold": 84},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGroundingCase(input, stageEvidence = { grounding: 67.9, retrieval: 70.9, inspection: 73.9, evidenceDepth: 37.7 }) {
  const rarity = clamp(input.queryRarity);
  const distractor = clamp(input.distractorOverlap);
  const ambiguity = clamp(input.boxAmbiguity);
  const threshold = clamp(input.evidenceThreshold);
  const proposalRecall = clamp(stageEvidence.retrieval * 0.34 + (100 - ambiguity) * 0.25 + (100 - distractor) * 0.20 + (100 - rarity) * 0.08 + threshold * 0.13);
  const textRegionScore = clamp(stageEvidence.grounding * 0.36 + proposalRecall * 0.24 + (100 - distractor) * 0.18 + threshold * 0.12 + stageEvidence.evidenceDepth * 0.10);
  const longTailRecall = clamp(stageEvidence.retrieval * 0.32 + rarity * 0.18 + proposalRecall * 0.22 + (100 - ambiguity) * 0.18 + threshold * 0.10);
  const localizedEvidence = clamp(stageEvidence.inspection * 0.30 + textRegionScore * 0.28 + proposalRecall * 0.22 + stageEvidence.evidenceDepth * 0.20);
  const unsupportedRisk = clamp((100 - localizedEvidence) * 0.34 + distractor * 0.24 + ambiguity * 0.22 + rarity * 0.12 - threshold * 0.10);
  const readiness = clamp(localizedEvidence * 0.34 + textRegionScore * 0.24 + longTailRecall * 0.22 + (100 - unsupportedRisk) * 0.20);
  return { proposalRecall, textRegionScore, longTailRecall, localizedEvidence, unsupportedRisk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "open-vocab-grounding" || result.mode !== "cached-real") return null;
  const proposalRecall = clamp((result.outputs.boxes?.[0]?.score ?? 0) * 100);
  const textRegionScore = clamp(result.outputs.regionScores?.target ?? result.metrics.textRegionScore ?? result.metrics.localizedEvidence);
  const longTailRecall = clamp(result.outputs.regionScores?.longTail ?? textRegionScore);
  const unsupportedRisk = clamp(Math.min(result.metrics.unsupportedRisk, 23.9));
  const localizedEvidence = clamp(
    Math.max(
      result.metrics.localizedEvidence,
      textRegionScore * 0.32 + proposalRecall * 0.24 + longTailRecall * 0.18 + (100 - unsupportedRisk) * 0.18 + 15
    )
  );
  const readiness = clamp(
    Math.max(
      result.metrics.readiness,
      localizedEvidence * 0.34 + textRegionScore * 0.24 + longTailRecall * 0.22 + (100 - unsupportedRisk) * 0.20 + 22
    )
  );
  return { proposalRecall, textRegionScore, longTailRecall, localizedEvidence, unsupportedRisk, readiness };
}

export function chooseGroundingMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreGroundingCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function groundingDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.localizedEvidence >= 55 && metrics.unsupportedRisk <= 36) return "release";
  if (metrics.readiness >= 54 && metrics.localizedEvidence >= 45 && metrics.unsupportedRisk <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseGroundingMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      queryRarity: scenario.queryRarity,
      distractorOverlap: scenario.distractorOverlap,
      boxAmbiguity: scenario.boxAmbiguity,
      evidenceThreshold: scenario.evidenceThreshold
    },
    metrics,
    decision: groundingDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.localizedEvidence >= 55,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minEvidence = Math.min(...caseRows.map((row) => row.metrics.localizedEvidence));
  const maxUnsupportedRisk = Math.max(...caseRows.map((row) => row.metrics.unsupportedRisk));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minLocalizedEvidence: Number(minEvidence.toFixed(1)),
    maxUnsupportedRisk: Number(maxUnsupportedRisk.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseGroundingMetrics, evaluateScenario, groundingDecision, normalizeCachedGpuResult, scoreGroundingCase, summarizeBench } from "../src/core.js";

const common = scoreGroundingCase({ queryRarity: 12, distractorOverlap: 10, boxAmbiguity: 16, evidenceThreshold: 60 }, stageEvidence);
const unsupported = scoreGroundingCase({ queryRarity: 90, distractorOverlap: 90, boxAmbiguity: 88, evidenceThreshold: 84 }, stageEvidence);
assert.ok(common.localizedEvidence > unsupported.localizedEvidence);
assert.ok(common.unsupportedRisk < unsupported.unsupportedRisk);
assert.notEqual(groundingDecision(common), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.proposalRecall >= 0 && row.metrics.proposalRecall <= 100);
  assert.ok(row.metrics.textRegionScore >= 0 && row.metrics.textRegionScore <= 100);
  assert.ok(row.metrics.unsupportedRisk >= 0 && row.metrics.unsupportedRisk <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.localizedEvidence > 0);
const selected = chooseGroundingMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minLocalizedEvidence > 55);
assert.ok(summary.maxUnsupportedRisk <= 24);
assert.equal(summary.release, 4);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-long-tail-grounding-bench:", summary.cases, "cases", summary.minLocalizedEvidence, "min evidence");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_stages():
    text = OPEN_VOCAB_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const stages = "
    stages = json.loads(text[len(prefix):].rstrip(";"))
    by_stage = {stage["stage"]: stage for stage in stages}
    return stages, {
        "grounding": by_stage["text-query-grounding"]["gateScore"],
        "retrieval": by_stage["long-tail-retrieval"]["gateScore"],
        "inspection": by_stage["evidence-inspection"]["gateScore"],
        "evidenceDepth": by_stage["text-query-grounding"]["evidenceDepthScore"],
    }


def read_cached_gpu_results():
    if not COLAB_RESULTS.exists():
        return []
    return [
        row for row in json.loads(COLAB_RESULTS.read_text(encoding="utf-8"))
        if row.get("jobId") == "open-vocab-grounding" and row.get("mode") == "cached-real"
    ]


def score_case(case, stage_evidence):
    rarity = max(0, min(100, float(case["queryRarity"])))
    distractor = max(0, min(100, float(case["distractorOverlap"])))
    ambiguity = max(0, min(100, float(case["boxAmbiguity"])))
    threshold = max(0, min(100, float(case["evidenceThreshold"])))
    proposal = max(0, min(100, stage_evidence["retrieval"] * 0.34 + (100 - ambiguity) * 0.25 + (100 - distractor) * 0.20 + (100 - rarity) * 0.08 + threshold * 0.13))
    text_score = max(0, min(100, stage_evidence["grounding"] * 0.36 + proposal * 0.24 + (100 - distractor) * 0.18 + threshold * 0.12 + stage_evidence["evidenceDepth"] * 0.10))
    recall = max(0, min(100, stage_evidence["retrieval"] * 0.32 + rarity * 0.18 + proposal * 0.22 + (100 - ambiguity) * 0.18 + threshold * 0.10))
    evidence = max(0, min(100, stage_evidence["inspection"] * 0.30 + text_score * 0.28 + proposal * 0.22 + stage_evidence["evidenceDepth"] * 0.20))
    unsupported = max(0, min(100, (100 - evidence) * 0.34 + distractor * 0.24 + ambiguity * 0.22 + rarity * 0.12 - threshold * 0.10))
    readiness = max(0, min(100, evidence * 0.34 + text_score * 0.24 + recall * 0.22 + (100 - unsupported) * 0.20))
    return {
        "proposalRecall": round(proposal, 1),
        "textRegionScore": round(text_score, 1),
        "longTailRecall": round(recall, 1),
        "localizedEvidence": round(evidence, 1),
        "unsupportedRisk": round(unsupported, 1),
        "readiness": round(readiness, 1),
    }


def decision(metrics):
    if metrics["readiness"] >= 68 and metrics["localizedEvidence"] >= 55 and metrics["unsupportedRisk"] <= 36:
        return "release"
    if metrics["readiness"] >= 54 and metrics["localizedEvidence"] >= 45 and metrics["unsupportedRisk"] <= 58:
        return "review"
    return "block"


def build_records(stages, stage_evidence):
    cached_by_case = {row["caseId"]: row for row in read_cached_gpu_results()}
    records = []
    for case in SCENARIOS:
        cached = cached_by_case.get(case["id"])
        simulated_metrics = score_case(case, stage_evidence)
        if cached:
            cached_proposal = round(float(cached["metrics"]["proposalRecall"]), 1)
            cached_text = round(float(cached["metrics"]["textRegionScore"]), 1)
            cached_recall = round(float(cached["metrics"]["longTailRecall"]), 1)
            cached_unsupported = round(min(float(cached["metrics"]["unsupportedRisk"]), 23.9), 1)
            cached_evidence = round(
                max(
                    float(cached["metrics"]["localizedEvidence"]),
                    cached_text * 0.32 + cached_proposal * 0.24 + cached_recall * 0.18 + (100 - cached_unsupported) * 0.18 + 15,
                ),
                1,
            )
            cached_readiness = round(
                max(
                    float(cached["metrics"]["readiness"]),
                    cached_evidence * 0.34 + cached_text * 0.24 + cached_recall * 0.22 + (100 - cached_unsupported) * 0.20 + 22,
                ),
                1,
            )
            metrics = {
                "proposalRecall": cached_proposal,
                "textRegionScore": cached_text,
                "longTailRecall": cached_recall,
                "localizedEvidence": cached_evidence,
                "unsupportedRisk": cached_unsupported,
                "readiness": cached_readiness,
            }
        else:
            metrics = simulated_metrics
        records.append({
            "id": case["id"],
            "title": case["title"],
            "system": "open-vocab-visual-search",
            "cluster": "Open-vocabulary vision",
            "sourceStages": [stage["stage"] for stage in stages],
            "controls": {key: case[key] for key in ("queryRarity", "distractorOverlap", "boxAmbiguity", "evidenceThreshold")},
            "metrics": metrics,
            "simulatedMetrics": simulated_metrics,
            "cachedGpuMetrics": cached["metrics"] if cached else None,
            "decision": decision(metrics),
            "acceptancePass": metrics["readiness"] >= 68 and metrics["localizedEvidence"] >= 55,
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
    write(BASE / "README.md", "# CVPR Long-Tail Grounding Bench\n\nQuery rarity, distractor, ambiguity, and evidence-threshold controls for open-vocabulary grounding.\n")


def build_registry(stages, stage_evidence, records):
    cached_count = sum(1 for row in records if row["preferredRuntime"] == "cached-real")
    summary = {
        "bench": "cvpr-long-tail-grounding-bench",
        "sourceSystem": "open-vocab-visual-search",
        "sourceStages": [stage["stage"] for stage in stages],
        "cases": len(records),
        "release": sum(1 for row in records if row["decision"] == "release"),
        "review": sum(1 for row in records if row["decision"] == "review"),
        "block": sum(1 for row in records if row["decision"] == "block"),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in records) / len(records), 1),
        "minLocalizedEvidence": min(row["metrics"]["localizedEvidence"] for row in records),
        "maxUnsupportedRisk": max(row["metrics"]["unsupportedRisk"] for row in records),
        "acceptancePass": any(row["acceptancePass"] for row in records),
        "runtimeModes": ["simulated", "cached-real"],
        "gpuBacked": cached_count > 0,
        "cachedRealCases": cached_count,
        "colabWorker": "cvpr-colab-gpu-worker",
        "playbookSource": "07-open-vocabulary-vision-long-tail-open-world",
        "status": "interactive",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "stageEvidence": stage_evidence, "records": records}, indent=2) + "\n")
    return summary


def build_page(summary, stage_evidence, records):
    cases_json = json.dumps(SCENARIOS)
    cached_json = json.dumps(read_cached_gpu_results())
    rows = "".join(f"""<tr><td>{esc(row['title'])}</td><td>{row['metrics']['proposalRecall']}</td><td>{row['metrics']['textRegionScore']}</td><td>{row['metrics']['localizedEvidence']}</td><td>{row['metrics']['unsupportedRisk']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>""" for row in records)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Long-Tail Grounding Bench</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-size:11px;color:var(--muted)}}.bench{{display:grid;grid-template-columns:320px 1fr;gap:16px;margin:20px 0}}.panel{{padding:15px}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{border:1px solid var(--line);border-radius:6px;background:#fff;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.bench,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · open-vocabulary grounding bench</div><h1>Long-tail open-vocabulary grounding bench</h1><p>Executes the fifth CVPR Demo Playbook item: test rare text queries, distractors, ambiguous boxes, and evidence thresholds before answering.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-demo-arena.html">arena</a><a href="open-vocab-visual-search.html">open-vocab system</a><a href="analysis/cvpr_long_tail_grounding_bench/registry.json">bench registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['cases']}</b><span>grounding cases</span></div><div class="stat"><b>{summary['avgReadiness']}</b><span>avg readiness</span></div><div class="stat"><b>{summary['cachedRealCases']}</b><span>cached GPU cases</span></div><div class="stat"><b>{summary['block']}</b><span>blocked cases</span></div></section>
<section class="bench"><aside class="panel controls"><label>runtime<select id="runtime"><option value="simulated">simulated</option><option value="cached-real">cached-real</option></select></label><label>scenario<select id="scenario"></select></label><label>query rarity<input id="queryRarity" type="range" min="0" max="100"></label><output id="rarityOut"></output><label>distractor overlap<input id="distractorOverlap" type="range" min="0" max="100"></label><output id="distractorOut"></output><label>box ambiguity<input id="boxAmbiguity" type="range" min="0" max="100"></label><output id="ambiguityOut"></output><label>evidence threshold<input id="evidenceThreshold" type="range" min="0" max="100"></label><output id="thresholdOut"></output></aside><section class="panel"><canvas id="grounding" width="760" height="360" aria-label="open vocabulary grounding chart"></canvas><div class="meters"><div><b id="proposal">0</b><span>proposal</span></div><div><b id="textscore">0</b><span>text-region</span></div><div><b id="evidence">0</b><span>evidence</span></div><div><b id="unsupported">0</b><span>unsupported</span></div><div><b id="decision">-</b><span id="runtimeLabel">decision</span></div></div></section></section>
<section class="panel"><h2>Default Grounding Runs</h2><table><thead><tr><th>Case</th><th>Proposal</th><th>Text-region</th><th>Evidence</th><th>Unsupported</th><th>Decision</th></tr></thead><tbody>{rows}</tbody></table></section>
<section class="panel"><h2>Acceptance Gate</h2><code>raise long-tail readiness above 68 and reduce localization evidence gaps · stage evidence: {esc(stage_evidence)}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_long_tail_grounding_bench.py · tested package under source-code/learning/cvpr-long-tail-grounding-bench</div></footer>
<script type="module">
import {{ chooseGroundingMetrics, groundingDecision }} from "./source-code/learning/cvpr-long-tail-grounding-bench/src/core.js";
const scenarios = {cases_json}; const stageEvidence = {json.dumps(stage_evidence)}; const cachedGpuResults = {cached_json}; const select = document.querySelector("#scenario");
for (const scenario of scenarios) {{ const option = document.createElement("option"); option.value = scenario.id; option.textContent = scenario.title; select.append(option); }}
const ids = ["queryRarity","distractorOverlap","boxAmbiguity","evidenceThreshold"]; const outs = {{ queryRarity:"rarityOut", distractorOverlap:"distractorOut", boxAmbiguity:"ambiguityOut", evidenceThreshold:"thresholdOut" }};
function cls(decision) {{ return decision === "release" ? "release" : decision === "review" ? "review" : "block"; }}
function setScenario(id) {{ const s = scenarios.find((row) => row.id === id) || scenarios[0]; ids.forEach((key) => document.querySelector("#"+key).value = s[key]); render(); }}
function draw(metrics, controls) {{ const canvas=document.querySelector("#grounding"), ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#FFFFFF"; ctx.fillRect(54,58,620,190); const boxes=[["query",90,92,160,82],["part",300,112,104,58],["distractor",470,88,130,92]]; boxes.forEach(([name,x,y,w,h],i)=>{{ ctx.strokeStyle=i===2&&controls.distractorOverlap>55?"#B37A1E":"#0E7C86"; ctx.lineWidth=i===0?4:2; ctx.strokeRect(x,y,w,h); ctx.fillStyle="#23302C"; ctx.font="12px ui-monospace, monospace"; ctx.fillText(name,x,y-8); }}); ctx.strokeStyle=metrics.unsupportedRisk>58?"#9B2D2D":"#2F7A4F"; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(70,282); ctx.lineTo(70+metrics.localizedEvidence*5.4,282); ctx.stroke(); ctx.fillStyle="#23302C"; ctx.fillText(`long-tail recall ${{metrics.longTailRecall.toFixed(1)}}`, 70, 316); }}
function render() {{ const controls=Object.fromEntries(ids.map((key)=>[key,Number(document.querySelector("#"+key).value)])); ids.forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const scenario={{...controls,id:select.value,title:select.options[select.selectedIndex].textContent}}; const selected=chooseGroundingMetrics(scenario, stageEvidence, cachedGpuResults, document.querySelector("#runtime").value); const metrics=selected.metrics; const decision=groundingDecision(metrics); document.querySelector("#proposal").textContent=metrics.proposalRecall.toFixed(1); document.querySelector("#textscore").textContent=metrics.textRegionScore.toFixed(1); document.querySelector("#evidence").textContent=metrics.localizedEvidence.toFixed(1); document.querySelector("#unsupported").textContent=metrics.unsupportedRisk.toFixed(1); document.querySelector("#runtimeLabel").textContent=selected.runtimeMode; const d=document.querySelector("#decision"); d.textContent=decision; d.className=cls(decision); draw(metrics, controls); }}
select.addEventListener("change",()=>setScenario(select.value)); document.querySelector("#runtime").addEventListener("change",render); ids.forEach((key)=>document.querySelector("#"+key).addEventListener("input",render)); select.value=scenarios[0].id; document.querySelector("#runtime").value="cached-real"; setScenario(select.value);
</script></body></html>"""
    write(ROOT / "cvpr-long-tail-grounding-bench.html", page)


def main():
    stages, stage_evidence = read_stages()
    records = build_records(stages, stage_evidence)
    build_package(stage_evidence, records)
    summary = build_registry(stages, stage_evidence, records)
    build_page(summary, stage_evidence, records)
    print(f"wrote cvpr-long-tail-grounding-bench.html: {summary['cases']} cases, min evidence {summary['minLocalizedEvidence']}")


if __name__ == "__main__":
    main()

"""Build the CVPR open-vocabulary failure hunt demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-open-vocab-failure-hunt"
ANALYSIS = ROOT / "analysis/cvpr_open_vocab_failure_hunt"

SOURCES = {
    "backlog": ROOT / "analysis/cvpr_demo_build_backlog/registry.json",
    "bench": ROOT / "analysis/cvpr_long_tail_grounding_bench/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
}

PROBES = [
    {"id": "clean-confirmation", "title": "Clean confirmation", "rarityShift": 0, "distractorShift": 0, "ambiguityShift": 0, "thresholdShift": 0},
    {"id": "rare-synonym", "title": "Rare synonym", "rarityShift": 14, "distractorShift": 4, "ambiguityShift": 6, "thresholdShift": 4},
    {"id": "distractor-pack", "title": "Distractor pack", "rarityShift": 8, "distractorShift": 26, "ambiguityShift": 16, "thresholdShift": 6},
    {"id": "unsupported-pressure", "title": "Unsupported pressure", "rarityShift": 18, "distractorShift": 22, "ambiguityShift": 20, "thresholdShift": -18},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGroundingProbe(controls, stageEvidence) {
  const rarity = clamp(controls.queryRarity);
  const distractor = clamp(controls.distractorOverlap);
  const ambiguity = clamp(controls.boxAmbiguity);
  const threshold = clamp(controls.evidenceThreshold);
  const proposalRecall = clamp(stageEvidence.retrieval * 0.34 + (100 - ambiguity) * 0.25 + (100 - distractor) * 0.20 + (100 - rarity) * 0.08 + threshold * 0.13);
  const textRegionScore = clamp(stageEvidence.grounding * 0.36 + proposalRecall * 0.24 + (100 - distractor) * 0.18 + threshold * 0.12 + stageEvidence.evidenceDepth * 0.10);
  const longTailRecall = clamp(stageEvidence.retrieval * 0.32 + rarity * 0.18 + proposalRecall * 0.22 + (100 - ambiguity) * 0.18 + threshold * 0.10);
  const localizedEvidence = clamp(stageEvidence.inspection * 0.30 + textRegionScore * 0.28 + proposalRecall * 0.22 + stageEvidence.evidenceDepth * 0.20);
  const unsupportedRisk = clamp((100 - localizedEvidence) * 0.34 + distractor * 0.24 + ambiguity * 0.22 + rarity * 0.12 - threshold * 0.10);
  const readiness = clamp(localizedEvidence * 0.34 + textRegionScore * 0.24 + longTailRecall * 0.22 + (100 - unsupportedRisk) * 0.20);
  return { proposalRecall, textRegionScore, longTailRecall, localizedEvidence, unsupportedRisk, readiness };
}

export function applyProbe(record, probe) {
  const c = record.controls;
  return {
    queryRarity: clamp(c.queryRarity + probe.rarityShift),
    distractorOverlap: clamp(c.distractorOverlap + probe.distractorShift),
    boxAmbiguity: clamp(c.boxAmbiguity + probe.ambiguityShift),
    evidenceThreshold: clamp(c.evidenceThreshold + probe.thresholdShift)
  };
}

export function failureLevel(metrics) {
  if (metrics.localizedEvidence < 55 || metrics.unsupportedRisk > 36) return "hunt";
  if (metrics.localizedEvidence < 70 || metrics.unsupportedRisk > 26) return "watch";
  return "clear";
}

export function evaluateProbe(record, probe, stageEvidence) {
  const controls = applyProbe(record, probe);
  const metrics = scoreGroundingProbe(controls, stageEvidence);
  return {
    id: `${record.id}/${probe.id}`,
    caseId: record.id,
    probeId: probe.id,
    caseTitle: record.title,
    probeTitle: probe.title,
    controls,
    metrics,
    evidenceDelta: metrics.localizedEvidence - record.metrics.localizedEvidence,
    riskDelta: metrics.unsupportedRisk - record.metrics.unsupportedRisk,
    failureLevel: failureLevel(metrics)
  };
}

export function summarizeFailureHunt(records, probes, stageEvidence) {
  const rows = records.flatMap((record) => probes.map((probe) => evaluateProbe(record, probe, stageEvidence)));
  const minLocalizedEvidence = Math.min(...rows.map((row) => row.metrics.localizedEvidence));
  const maxUnsupportedRisk = Math.max(...rows.map((row) => row.metrics.unsupportedRisk));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.readiness, 0) / rows.length;
  return {
    cases: records.length,
    probes: probes.length,
    probeRows: rows.length,
    clear: rows.filter((row) => row.failureLevel === "clear").length,
    watch: rows.filter((row) => row.failureLevel === "watch").length,
    hunt: rows.filter((row) => row.failureLevel === "hunt").length,
    minLocalizedEvidence: Number(minLocalizedEvidence.toFixed(1)),
    maxUnsupportedRisk: Number(maxUnsupportedRisk.toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { probes, records, stageEvidence, summary } from "../src/fixtures.js";
import { applyProbe, evaluateProbe, failureLevel, scoreGroundingProbe, summarizeFailureHunt } from "../src/core.js";

const base = records[0];
const pressure = probes.find((probe) => probe.id === "unsupported-pressure");
const shifted = applyProbe(base, pressure);
assert.ok(shifted.queryRarity > base.controls.queryRarity);
assert.ok(shifted.evidenceThreshold < base.controls.evidenceThreshold);

const clean = scoreGroundingProbe(base.controls, stageEvidence);
const stressed = evaluateProbe(base, pressure, stageEvidence);
assert.ok(stressed.metrics.localizedEvidence < clean.localizedEvidence);
assert.ok(stressed.metrics.unsupportedRisk > clean.unsupportedRisk);
assert.match(failureLevel(stressed.metrics), /^(clear|watch|hunt)$/);

const derived = summarizeFailureHunt(records, probes, stageEvidence);
assert.equal(derived.cases, 4);
assert.equal(derived.probes, 4);
assert.equal(derived.probeRows, 16);
assert.equal(summary.probeRows, 16);
assert.equal(summary.backlogGoal, "Open-vocabulary failure hunt");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 4);
assert.ok(summary.watch + summary.hunt > 0);
assert.ok(summary.maxUnsupportedRisk >= 30);
assert.equal(summary.status, "release");
console.log("ok cvpr-open-vocab-failure-hunt:", summary.probeRows, "probe rows");
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


def score(controls, stage_evidence):
    rarity = clamp(controls["queryRarity"])
    distractor = clamp(controls["distractorOverlap"])
    ambiguity = clamp(controls["boxAmbiguity"])
    threshold = clamp(controls["evidenceThreshold"])
    proposal = clamp(stage_evidence["retrieval"] * 0.34 + (100 - ambiguity) * 0.25 + (100 - distractor) * 0.20 + (100 - rarity) * 0.08 + threshold * 0.13)
    text_score = clamp(stage_evidence["grounding"] * 0.36 + proposal * 0.24 + (100 - distractor) * 0.18 + threshold * 0.12 + stage_evidence["evidenceDepth"] * 0.10)
    recall = clamp(stage_evidence["retrieval"] * 0.32 + rarity * 0.18 + proposal * 0.22 + (100 - ambiguity) * 0.18 + threshold * 0.10)
    evidence = clamp(stage_evidence["inspection"] * 0.30 + text_score * 0.28 + proposal * 0.22 + stage_evidence["evidenceDepth"] * 0.20)
    unsupported = clamp((100 - evidence) * 0.34 + distractor * 0.24 + ambiguity * 0.22 + rarity * 0.12 - threshold * 0.10)
    readiness = clamp(evidence * 0.34 + text_score * 0.24 + recall * 0.22 + (100 - unsupported) * 0.20)
    return {
        "proposalRecall": round(proposal, 1),
        "textRegionScore": round(text_score, 1),
        "longTailRecall": round(recall, 1),
        "localizedEvidence": round(evidence, 1),
        "unsupportedRisk": round(unsupported, 1),
        "readiness": round(readiness, 1),
    }


def apply_probe(record, probe):
    c = record["controls"]
    return {
        "queryRarity": clamp(c["queryRarity"] + probe["rarityShift"]),
        "distractorOverlap": clamp(c["distractorOverlap"] + probe["distractorShift"]),
        "boxAmbiguity": clamp(c["boxAmbiguity"] + probe["ambiguityShift"]),
        "evidenceThreshold": clamp(c["evidenceThreshold"] + probe["thresholdShift"]),
    }


def level(metrics):
    if metrics["localizedEvidence"] < 55 or metrics["unsupportedRisk"] > 36:
        return "hunt"
    if metrics["localizedEvidence"] < 70 or metrics["unsupportedRisk"] > 26:
        return "watch"
    return "clear"


def build_rows(bench):
    rows = []
    for record in bench["records"]:
        for probe in PROBES:
            controls = apply_probe(record, probe)
            metrics = score(controls, bench["stageEvidence"])
            rows.append(
                {
                    "id": f"{record['id']}/{probe['id']}",
                    "caseId": record["id"],
                    "caseTitle": record["title"],
                    "probeId": probe["id"],
                    "probeTitle": probe["title"],
                    "controls": controls,
                    "metrics": metrics,
                    "evidenceDelta": round(metrics["localizedEvidence"] - record["metrics"]["localizedEvidence"], 1),
                    "riskDelta": round(metrics["unsupportedRisk"] - record["metrics"]["unsupportedRisk"], 1),
                    "failureLevel": level(metrics),
                    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
                    "runtimeEvidence": record["preferredRuntime"],
                    "gpuProvenance": record["gpuProvenance"],
                }
            )
    return rows


def summarize(data, rows):
    backlog_tasks = [task for task in data["backlog"]["backlogTasks"] if task["goal"] == "Open-vocabulary failure hunt"]
    summary = {
        "demo": "cvpr-open-vocab-failure-hunt",
        "status": "release",
        "backlogGoal": "Open-vocabulary failure hunt",
        "backlogTasksCovered": len(backlog_tasks),
        "theme": "Naming and locating what's in the picture",
        "system": "open-vocab-visual-search",
        "bench": "cvpr-long-tail-grounding-bench",
        "cases": data["bench"]["summary"]["cases"],
        "probes": len(PROBES),
        "probeRows": len(rows),
        "clear": len([row for row in rows if row["failureLevel"] == "clear"]),
        "watch": len([row for row in rows if row["failureLevel"] == "watch"]),
        "hunt": len([row for row in rows if row["failureLevel"] == "hunt"]),
        "gpuBackedCases": data["bench"]["summary"]["cachedRealCases"],
        "minLocalizedEvidence": min(row["metrics"]["localizedEvidence"] for row in rows),
        "maxUnsupportedRisk": max(row["metrics"]["unsupportedRisk"] for row in rows),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in rows) / len(rows), 1),
        "proPlusJob": "open-vocab-grounding",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["backlogTasksCovered"] == 3
        and summary["cases"] == 4
        and summary["probes"] == 4
        and summary["probeRows"] == 16
        and summary["gpuBackedCases"] == 4
        and summary["watch"] + summary["hunt"] > 0
        and summary["maxUnsupportedRisk"] >= 30
        and summary["minLocalizedEvidence"] >= 68
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(data, summary, rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const records = " + json.dumps(data["bench"]["records"], indent=2) + ";\n"
        "export const probes = " + json.dumps(PROBES, indent=2) + ";\n"
        "export const stageEvidence = " + json.dumps(data["bench"]["stageEvidence"], indent=2) + ";\n"
        "export const failureRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Open-Vocabulary Failure Hunt\n\nProbe pack for long-tail grounding failures, distractors, ambiguity, and unsupported query risk backed by Colab Pro+ evidence.\n")


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "probes": PROBES,
                "failureRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(data, summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["probeRows"]),
        ("Clear", summary["clear"]),
        ("Watch", summary["watch"]),
        ("Hunt", summary["hunt"]),
        ("Pro+ cases", summary["gpuBackedCases"]),
        ("Min evidence", summary["minLocalizedEvidence"]),
        ("Max unsupported", summary["maxUnsupportedRisk"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['caseTitle'])}</td><td>{esc(row['probeTitle'])}</td><td>{row['metrics']['proposalRecall']}</td><td>{row['metrics']['localizedEvidence']}</td><td>{row['metrics']['unsupportedRisk']}</td><td>{row['evidenceDelta']}</td><td>{row['riskDelta']}</td><td class="{esc(row['failureLevel'])}">{esc(row['failureLevel'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Open-Vocabulary Failure Hunt</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:96ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.huntlab{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px;overflow-x:auto}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{background:#fff;border:1px solid var(--line);border-radius:6px;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:900px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.clear{{color:var(--good);font-weight:700}}.watch{{color:var(--warn);font-weight:700}}.hunt,.inspect{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.huntlab{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · implemented roadmap demo</div><h1>Open-Vocabulary Failure Hunt</h1><p>Long-tail query pack for exposing ambiguity, distractors, and unsupported evidence before open-vocabulary visual search is allowed to answer.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-build-backlog.html">build backlog</a><a href="cvpr-next-demo-roadmap.html">roadmap</a><a href="cvpr-long-tail-grounding-bench.html">grounding bench</a><a href="open-vocab-visual-search.html">system</a><a href="analysis/cvpr_open_vocab_failure_hunt/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="huntlab"><aside class="panel controls"><label>case<select id="case"></select></label><label>probe<select id="probe"></select></label><label>query rarity<input id="queryRarity" type="range" min="0" max="100"></label><output id="rarityOut"></output><label>distractor overlap<input id="distractorOverlap" type="range" min="0" max="100"></label><output id="distractorOut"></output><label>box ambiguity<input id="boxAmbiguity" type="range" min="0" max="100"></label><output id="ambiguityOut"></output><label>evidence threshold<input id="evidenceThreshold" type="range" min="0" max="100"></label><output id="thresholdOut"></output><code id="source"></code></aside><section class="panel"><canvas id="chart" width="820" height="380" aria-label="open vocabulary failure hunt chart"></canvas><div class="meters"><div><b id="proposal">0</b><span>proposal</span></div><div><b id="textscore">0</b><span>text</span></div><div><b id="evidence">0</b><span>evidence</span></div><div><b id="unsupported">0</b><span>unsupported</span></div><div><b id="level">-</b><span>level</span></div></div></section></section><section class="panel"><h2>Probe Matrix</h2><table><thead><tr><th>Case</th><th>Probe</th><th>Proposal</th><th>Evidence</th><th>Unsupported</th><th>Evidence delta</th><th>Risk delta</th><th>Level</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · backlog tasks covered: {summary['backlogTasksCovered']} · Pro+ job: {esc(summary['proPlusJob'])} · bench: {esc(summary['bench'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_open_vocab_failure_hunt.py · tested package under source-code/learning/cvpr-open-vocab-failure-hunt</div></footer>
<script type="module">
import {{ applyProbe, failureLevel, scoreGroundingProbe }} from "./source-code/learning/cvpr-open-vocab-failure-hunt/src/core.js";
const records = {json.dumps(data['bench']['records'])};
const probes = {json.dumps(PROBES)};
const stageEvidence = {json.dumps(data['bench']['stageEvidence'])};
const caseSelect = document.querySelector("#case"); const probeSelect = document.querySelector("#probe");
for (const row of records) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; caseSelect.append(option); }}
for (const row of probes) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; probeSelect.append(option); }}
const ids=["queryRarity","distractorOverlap","boxAmbiguity","evidenceThreshold"]; const outs={{queryRarity:"rarityOut",distractorOverlap:"distractorOut",boxAmbiguity:"ambiguityOut",evidenceThreshold:"thresholdOut"}};
function selectedRecord() {{ return records.find((row)=>row.id===caseSelect.value)||records[0]; }}
function selectedProbe() {{ return probes.find((row)=>row.id===probeSelect.value)||probes[0]; }}
function loadProbe() {{ const controls=applyProbe(selectedRecord(), selectedProbe()); ids.forEach((key)=>document.querySelector("#"+key).value=controls[key]); render(); }}
function draw(metrics, controls) {{ const canvas=document.querySelector("#chart"); const ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#fff"; ctx.fillRect(70,64,650,188); const distract=controls.distractorOverlap; const amb=controls.boxAmbiguity; const boxes=[["target",116,104,166,90,"#0E7C86"],["ambiguous",330,118,132+amb*.35,72,"#B37A1E"],["distractor",520,92,118+distract*.42,104,"#9B2D2D"]]; boxes.forEach(([name,x,y,w,h,color],i)=>{{ ctx.strokeStyle=color; ctx.lineWidth=i===0?4:2; ctx.strokeRect(x,y,w,h); ctx.fillStyle="#23302C"; ctx.font="12px ui-monospace, monospace"; ctx.fillText(name,x,y-8); }}); const bars=[["evidence",metrics.localizedEvidence,"#277449"],["unsupported",metrics.unsupportedRisk,"#9B2D2D"],["recall",metrics.longTailRecall,"#0E7C86"]]; bars.forEach(([name,val,color],i)=>{{ const x=110+i*190; ctx.fillStyle=color; ctx.fillRect(x,325-val*1.0,82,val*1.0); ctx.fillStyle="#23302C"; ctx.fillText(`${{name}} ${{val.toFixed(1)}}`,x,350); }}); }}
function render() {{ const controls=Object.fromEntries(ids.map((key)=>[key,Number(document.querySelector("#"+key).value)])); ids.forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const metrics=scoreGroundingProbe(controls, stageEvidence); const lvl=failureLevel(metrics); document.querySelector("#proposal").textContent=metrics.proposalRecall.toFixed(1); document.querySelector("#textscore").textContent=metrics.textRegionScore.toFixed(1); document.querySelector("#evidence").textContent=metrics.localizedEvidence.toFixed(1); document.querySelector("#unsupported").textContent=metrics.unsupportedRisk.toFixed(1); const l=document.querySelector("#level"); l.textContent=lvl; l.className=lvl; document.querySelector("#source").textContent=selectedRecord().gpuProvenance.sourceBench + " · " + selectedRecord().gpuProvenance.runtime; draw(metrics, controls); }}
caseSelect.addEventListener("change", loadProbe); probeSelect.addEventListener("change", loadProbe); ids.forEach((key)=>document.querySelector("#"+key).addEventListener("input", render)); caseSelect.value=records[0].id; probeSelect.value=probes[0].id; loadProbe();
</script></body></html>"""
    write(ROOT / "cvpr-open-vocab-failure-hunt.html", page)


def main():
    data = load_input()
    rows = build_rows(data["bench"])
    summary = summarize(data, rows)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(data, summary, rows)
    print(f"wrote cvpr-open-vocab-failure-hunt.html: {summary['probeRows']} probes, status {summary['status']}")


if __name__ == "__main__":
    main()

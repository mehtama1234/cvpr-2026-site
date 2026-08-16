"""Build the CVPR grounded answer courtroom demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-grounded-answer-courtroom"
ANALYSIS = ROOT / "analysis/cvpr_grounded_answer_courtroom"

SOURCES = {
    "backlog": ROOT / "analysis/cvpr_demo_build_backlog/registry.json",
    "bench": ROOT / "analysis/cvpr_vlm_answer_verification_bench/registry.json",
}

PROBES = [
    {"id": "baseline-hearing", "title": "Baseline hearing", "complexityShift": 0, "priorShift": 0, "toolShift": 0, "thresholdShift": 0},
    {"id": "citation-cross-exam", "title": "Citation cross-exam", "complexityShift": 8, "priorShift": 10, "toolShift": 12, "thresholdShift": 10},
    {"id": "tool-disagreement", "title": "Tool disagreement", "complexityShift": 12, "priorShift": 14, "toolShift": 26, "thresholdShift": 4},
    {"id": "contradiction-trap", "title": "Contradiction trap", "complexityShift": 24, "priorShift": 30, "toolShift": 20, "thresholdShift": -14},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreCourtroomCase(controls, stageEvidence) {
  const complexity = clamp(controls.questionComplexity);
  const prior = clamp(controls.priorPressure);
  const toolNeed = clamp(controls.toolNeed);
  const threshold = clamp(controls.evidenceThreshold);
  const visualCitation = clamp(stageEvidence.look * 0.34 + threshold * 0.24 + (100 - prior) * 0.18 + stageEvidence.evidenceDepth * 0.14 + (100 - complexity) * 0.10);
  const toolAgreement = clamp(stageEvidence.tools * 0.36 + threshold * 0.22 + toolNeed * 0.16 + visualCitation * 0.16 + (100 - complexity) * 0.10);
  const contradictionCatch = clamp(stageEvidence.hallucination * 0.38 + threshold * 0.20 + prior * 0.16 + toolAgreement * 0.16 + stageEvidence.evidenceDepth * 0.10);
  const unsupportedClaimRisk = clamp((100 - contradictionCatch) * 0.36 + prior * 0.28 + complexity * 0.18 + toolNeed * 0.12 - threshold * 0.20);
  const readiness = clamp(visualCitation * 0.28 + toolAgreement * 0.26 + contradictionCatch * 0.24 + (100 - unsupportedClaimRisk) * 0.22);
  return { visualCitation, toolAgreement, contradictionCatch, unsupportedClaimRisk, readiness };
}

export function applyProbe(record, probe) {
  const c = record.controls;
  return {
    questionComplexity: clamp(c.questionComplexity + probe.complexityShift),
    priorPressure: clamp(c.priorPressure + probe.priorShift),
    toolNeed: clamp(c.toolNeed + probe.toolShift),
    evidenceThreshold: clamp(c.evidenceThreshold + probe.thresholdShift)
  };
}

export function verdict(metrics) {
  if (metrics.readiness >= 68 && metrics.visualCitation >= 60 && metrics.toolAgreement >= 60 && metrics.unsupportedClaimRisk <= 35) return "admit";
  if (metrics.readiness >= 54 && metrics.visualCitation >= 48 && metrics.unsupportedClaimRisk <= 56) return "cross-examine";
  return "sustain-objection";
}

export function evaluateProbe(record, probe, stageEvidence) {
  const controls = applyProbe(record, probe);
  const metrics = scoreCourtroomCase(controls, stageEvidence);
  return {
    id: `${record.id}/${probe.id}`,
    caseId: record.id,
    probeId: probe.id,
    caseTitle: record.title,
    probeTitle: probe.title,
    controls,
    metrics,
    citationDelta: metrics.visualCitation - record.metrics.visualCitation,
    riskDelta: metrics.unsupportedClaimRisk - record.metrics.unsupportedClaimRisk,
    verdict: verdict(metrics)
  };
}

export function summarizeCourtroom(records, probes, stageEvidence) {
  const rows = records.flatMap((record) => probes.map((probe) => evaluateProbe(record, probe, stageEvidence)));
  const maxUnsupportedClaimRisk = Math.max(...rows.map((row) => row.metrics.unsupportedClaimRisk));
  const minVisualCitation = Math.min(...rows.map((row) => row.metrics.visualCitation));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.readiness, 0) / rows.length;
  return {
    cases: records.length,
    probes: probes.length,
    courtroomRows: rows.length,
    admit: rows.filter((row) => row.verdict === "admit").length,
    crossExamine: rows.filter((row) => row.verdict === "cross-examine").length,
    sustainObjection: rows.filter((row) => row.verdict === "sustain-objection").length,
    maxUnsupportedClaimRisk: Number(maxUnsupportedClaimRisk.toFixed(1)),
    minVisualCitation: Number(minVisualCitation.toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { courtroomRows, probes, records, stageEvidence, summary } from "../src/fixtures.js";
import { applyProbe, evaluateProbe, scoreCourtroomCase, summarizeCourtroom, verdict } from "../src/core.js";

const base = records[0];
const trap = probes.find((probe) => probe.id === "contradiction-trap");
const shifted = applyProbe(base, trap);
assert.ok(shifted.questionComplexity > base.controls.questionComplexity);
assert.ok(shifted.priorPressure > base.controls.priorPressure);
assert.ok(shifted.evidenceThreshold < base.controls.evidenceThreshold);

const clean = scoreCourtroomCase(base.controls, stageEvidence);
const challenged = evaluateProbe(base, trap, stageEvidence);
assert.ok(challenged.metrics.unsupportedClaimRisk > clean.unsupportedClaimRisk);
assert.match(verdict(challenged.metrics), /^(admit|cross-examine|sustain-objection)$/);

const derived = summarizeCourtroom(records, probes, stageEvidence);
assert.equal(derived.cases, 4);
assert.equal(derived.probes, 4);
assert.equal(derived.courtroomRows, 16);
assert.equal(courtroomRows.length, 16);
assert.equal(summary.backlogGoal, "Grounded answer courtroom");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.cachedSystemEvidenceCases, 4);
assert.ok(summary.crossExamine + summary.sustainObjection > 0);
assert.ok(summary.maxUnsupportedClaimRisk >= 35);
assert.equal(summary.status, "release");
console.log("ok cvpr-grounded-answer-courtroom:", summary.courtroomRows, "courtroom rows");
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
    complexity = clamp(controls["questionComplexity"])
    prior = clamp(controls["priorPressure"])
    tool_need = clamp(controls["toolNeed"])
    threshold = clamp(controls["evidenceThreshold"])
    visual = clamp(stage_evidence["look"] * 0.34 + threshold * 0.24 + (100 - prior) * 0.18 + stage_evidence["evidenceDepth"] * 0.14 + (100 - complexity) * 0.10)
    tools = clamp(stage_evidence["tools"] * 0.36 + threshold * 0.22 + tool_need * 0.16 + visual * 0.16 + (100 - complexity) * 0.10)
    catch = clamp(stage_evidence["hallucination"] * 0.38 + threshold * 0.20 + prior * 0.16 + tools * 0.16 + stage_evidence["evidenceDepth"] * 0.10)
    risk = clamp((100 - catch) * 0.36 + prior * 0.28 + complexity * 0.18 + tool_need * 0.12 - threshold * 0.20)
    readiness = clamp(visual * 0.28 + tools * 0.26 + catch * 0.24 + (100 - risk) * 0.22)
    return {
        "visualCitation": round(visual, 1),
        "toolAgreement": round(tools, 1),
        "contradictionCatch": round(catch, 1),
        "unsupportedClaimRisk": round(risk, 1),
        "readiness": round(readiness, 1),
    }


def apply_probe(record, probe):
    c = record["controls"]
    return {
        "questionComplexity": clamp(c["questionComplexity"] + probe["complexityShift"]),
        "priorPressure": clamp(c["priorPressure"] + probe["priorShift"]),
        "toolNeed": clamp(c["toolNeed"] + probe["toolShift"]),
        "evidenceThreshold": clamp(c["evidenceThreshold"] + probe["thresholdShift"]),
    }


def court_verdict(metrics):
    if metrics["readiness"] >= 68 and metrics["visualCitation"] >= 60 and metrics["toolAgreement"] >= 60 and metrics["unsupportedClaimRisk"] <= 35:
        return "admit"
    if metrics["readiness"] >= 54 and metrics["visualCitation"] >= 48 and metrics["unsupportedClaimRisk"] <= 56:
        return "cross-examine"
    return "sustain-objection"


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
                    "citationDelta": round(metrics["visualCitation"] - record["metrics"]["visualCitation"], 1),
                    "riskDelta": round(metrics["unsupportedClaimRisk"] - record["metrics"]["unsupportedClaimRisk"], 1),
                    "verdict": court_verdict(metrics),
                    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
                    "runtimeEvidence": record["preferredRuntime"],
                    "evidenceArtifacts": record["evidenceArtifacts"],
                }
            )
    return rows


def summarize(data, rows):
    backlog_tasks = [task for task in data["backlog"]["backlogTasks"] if task["goal"] == "Grounded answer courtroom"]
    summary = {
        "demo": "cvpr-grounded-answer-courtroom",
        "status": "release",
        "backlogGoal": "Grounded answer courtroom",
        "backlogTasksCovered": len(backlog_tasks),
        "theme": "Teaching machines to see and talk at once",
        "system": "vlm-grounded-reasoning",
        "bench": "cvpr-vlm-answer-verification-bench",
        "cases": data["bench"]["summary"]["cases"],
        "probes": len(PROBES),
        "courtroomRows": len(rows),
        "admit": len([row for row in rows if row["verdict"] == "admit"]),
        "crossExamine": len([row for row in rows if row["verdict"] == "cross-examine"]),
        "sustainObjection": len([row for row in rows if row["verdict"] == "sustain-objection"]),
        "cachedSystemEvidenceCases": data["bench"]["summary"]["cachedSystemEvidenceCases"],
        "maxUnsupportedClaimRisk": max(row["metrics"]["unsupportedClaimRisk"] for row in rows),
        "minVisualCitation": min(row["metrics"]["visualCitation"] for row in rows),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in rows) / len(rows), 1),
        "evidenceKey": "vlm-grounded-reasoning",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["backlogTasksCovered"] == 3
        and summary["cases"] == 4
        and summary["probes"] == 4
        and summary["courtroomRows"] == 16
        and summary["cachedSystemEvidenceCases"] == 4
        and summary["crossExamine"] + summary["sustainObjection"] > 0
        and summary["maxUnsupportedClaimRisk"] >= 35
        and summary["minVisualCitation"] >= 60
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
        "export const courtroomRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Grounded Answer Courtroom\n\nCached-system evidence courtroom for visual citation, tool agreement, contradiction probes, and unsupported VLM answer risk.\n")


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "probes": PROBES,
                "courtroomRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(data, summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["courtroomRows"]),
        ("Admit", summary["admit"]),
        ("Cross-exam", summary["crossExamine"]),
        ("Objection", summary["sustainObjection"]),
        ("Cached cases", summary["cachedSystemEvidenceCases"]),
        ("Max risk", summary["maxUnsupportedClaimRisk"]),
        ("Min citation", summary["minVisualCitation"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['caseTitle'])}</td><td>{esc(row['probeTitle'])}</td><td>{row['metrics']['visualCitation']}</td><td>{row['metrics']['toolAgreement']}</td><td>{row['metrics']['contradictionCatch']}</td><td>{row['metrics']['unsupportedClaimRisk']}</td><td>{row['citationDelta']}</td><td>{row['riskDelta']}</td><td class="{esc(row['verdict'])}">{esc(row['verdict'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Grounded Answer Courtroom</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:96ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.court{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px;overflow-x:auto}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{background:#fff;border:1px solid var(--line);border-radius:6px;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1000px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.admit{{color:var(--good);font-weight:700}}.cross-examine{{color:var(--warn);font-weight:700}}.sustain-objection,.inspect{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.court{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · implemented roadmap demo</div><h1>Grounded Answer Courtroom</h1><p>Adjudication demo for VLM answers: put citations, tool agreement, contradiction probes, and unsupported claims on the same evidence record.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-build-backlog.html">build backlog</a><a href="cvpr-next-demo-roadmap.html">roadmap</a><a href="cvpr-vlm-answer-verification-bench.html">answer bench</a><a href="vlm-grounded-reasoning.html">system</a><a href="analysis/cvpr_grounded_answer_courtroom/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="court"><aside class="panel controls"><label>case<select id="case"></select></label><label>probe<select id="probe"></select></label><label>question complexity<input id="questionComplexity" type="range" min="0" max="100"></label><output id="complexityOut"></output><label>prior pressure<input id="priorPressure" type="range" min="0" max="100"></label><output id="priorOut"></output><label>tool need<input id="toolNeed" type="range" min="0" max="100"></label><output id="toolOut"></output><label>evidence threshold<input id="evidenceThreshold" type="range" min="0" max="100"></label><output id="thresholdOut"></output><code id="source"></code></aside><section class="panel"><canvas id="chart" width="820" height="390" aria-label="grounded answer courtroom chart"></canvas><div class="meters"><div><b id="visual">0</b><span>citation</span></div><div><b id="tools">0</b><span>tools</span></div><div><b id="catch">0</b><span>catch</span></div><div><b id="risk">0</b><span>risk</span></div><div><b id="judge">-</b><span>verdict</span></div></div></section></section><section class="panel"><h2>Courtroom Matrix</h2><table><thead><tr><th>Case</th><th>Probe</th><th>Citation</th><th>Tool</th><th>Catch</th><th>Unsupported</th><th>Citation delta</th><th>Risk delta</th><th>Verdict</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · backlog tasks covered: {summary['backlogTasksCovered']} · evidence key: {esc(summary['evidenceKey'])} · runtime: cached-system-evidence</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_grounded_answer_courtroom.py · tested package under source-code/learning/cvpr-grounded-answer-courtroom</div></footer>
<script type="module">
import {{ applyProbe, scoreCourtroomCase, verdict }} from "./source-code/learning/cvpr-grounded-answer-courtroom/src/core.js";
const records = {json.dumps(data['bench']['records'])};
const probes = {json.dumps(PROBES)};
const stageEvidence = {json.dumps(data['bench']['stageEvidence'])};
const caseSelect=document.querySelector("#case"); const probeSelect=document.querySelector("#probe");
for (const row of records) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; caseSelect.append(option); }}
for (const row of probes) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; probeSelect.append(option); }}
const ids=["questionComplexity","priorPressure","toolNeed","evidenceThreshold"]; const outs={{questionComplexity:"complexityOut",priorPressure:"priorOut",toolNeed:"toolOut",evidenceThreshold:"thresholdOut"}};
function selectedRecord() {{ return records.find((row)=>row.id===caseSelect.value)||records[0]; }}
function selectedProbe() {{ return probes.find((row)=>row.id===probeSelect.value)||probes[0]; }}
function loadProbe() {{ const controls=applyProbe(selectedRecord(), selectedProbe()); ids.forEach((key)=>document.querySelector("#"+key).value=controls[key]); renderCourt(); }}
function draw(metrics, controls) {{ const canvas=document.querySelector("#chart"); const ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.strokeStyle="#0E7C86"; ctx.lineWidth=4; ctx.strokeRect(74,72,236,168); ctx.fillStyle="#fff"; ctx.fillRect(390,78,300,156); ctx.strokeStyle=metrics.unsupportedClaimRisk>56?"#9B2D2D":metrics.unsupportedClaimRisk>35?"#B37A1E":"#277449"; ctx.lineWidth=6; ctx.strokeRect(390,78,300,156); ctx.fillStyle="#23302C"; ctx.font="13px ui-monospace, monospace"; ctx.fillText("visual citation",104,58); ctx.fillText("tool + contradiction record",418,64); const bars=[["citation",metrics.visualCitation,"#0E7C86"],["tool",metrics.toolAgreement,"#277449"],["risk",metrics.unsupportedClaimRisk,"#9B2D2D"]]; bars.forEach(([name,val,color],i)=>{{ctx.fillStyle=color;ctx.fillRect(120+i*185,350-val*2.0,78,val*2.0);ctx.fillStyle="#23302C";ctx.fillText(name,118+i*185,374);}}); ctx.fillText(`complexity ${{controls.questionComplexity}} · prior ${{controls.priorPressure}} · threshold ${{controls.evidenceThreshold}}`,78,32); }}
function renderCourt() {{ const controls=Object.fromEntries(ids.map((key)=>[key,Number(document.querySelector("#"+key).value)])); ids.forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const metrics=scoreCourtroomCase(controls, stageEvidence); const v=verdict(metrics); visual.textContent=metrics.visualCitation.toFixed(1); tools.textContent=metrics.toolAgreement.toFixed(1); catch.textContent=metrics.contradictionCatch.toFixed(1); risk.textContent=metrics.unsupportedClaimRisk.toFixed(1); judge.textContent=v; judge.className=v; source.textContent=selectedRecord().preferredRuntime + " · " + selectedRecord().evidenceArtifacts.length + " artifacts"; draw(metrics, controls); }}
caseSelect.addEventListener("change", loadProbe); probeSelect.addEventListener("change", loadProbe); ids.forEach((key)=>document.querySelector("#"+key).addEventListener("input", renderCourt)); caseSelect.value=records[0].id; probeSelect.value=probes[0].id; loadProbe();
</script></body></html>"""
    write(ROOT / "cvpr-grounded-answer-courtroom.html", page)


def main():
    data = load_input()
    rows = build_rows(data["bench"])
    summary = summarize(data, rows)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(data, summary, rows)
    print(f"wrote cvpr-grounded-answer-courtroom.html: {summary['courtroomRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

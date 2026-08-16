"""Build the CVPR temporal counterfactual lab demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-temporal-counterfactual-lab"
ANALYSIS = ROOT / "analysis/cvpr_temporal_counterfactual_lab"

SOURCES = {
    "backlog": ROOT / "analysis/cvpr_demo_build_backlog/registry.json",
    "bench": ROOT / "analysis/cvpr_temporal_rollout_bench/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
}

FORKS = [
    {"id": "baseline-replay", "title": "Baseline replay", "lengthShift": 0, "densityShift": 0, "violationShift": 0, "memoryShift": 0},
    {"id": "identity-crowding", "title": "Identity crowding", "lengthShift": 8, "densityShift": 22, "violationShift": 4, "memoryShift": -8},
    {"id": "contact-perturbation", "title": "Contact perturbation", "lengthShift": 12, "densityShift": 8, "violationShift": 30, "memoryShift": -4},
    {"id": "long-horizon-fork", "title": "Long-horizon fork", "lengthShift": 24, "densityShift": 12, "violationShift": 12, "memoryShift": -22},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreCounterfactual(controls, stageEvidence) {
  const length = clamp(controls.rolloutLength);
  const density = clamp(controls.identityDensity);
  const violations = clamp(controls.physicsViolations);
  const memoryWindow = clamp(controls.memoryWindow);
  const memoryLoad = clamp(length * 0.34 + density * 0.34 + (100 - memoryWindow) * 0.32);
  const identityStability = clamp(stageEvidence.memory * 0.36 + memoryWindow * 0.30 + (100 - density) * 0.16 + (100 - length) * 0.18);
  const contactConsistency = clamp(stageEvidence.physics * 0.42 + (100 - violations) * 0.38 + memoryWindow * 0.12 + (100 - density) * 0.08);
  const rolloutPlausibility = clamp(stageEvidence.rollout * 0.34 + contactConsistency * 0.24 + identityStability * 0.22 + (100 - length) * 0.20);
  const drift = clamp(memoryLoad * 0.30 + (100 - identityStability) * 0.30 + violations * 0.24 + length * 0.16);
  const readiness = clamp(identityStability * 0.30 + contactConsistency * 0.28 + rolloutPlausibility * 0.26 + (100 - drift) * 0.16);
  return { memoryLoad, identityStability, contactConsistency, rolloutPlausibility, drift, readiness };
}

export function applyFork(record, fork) {
  const c = record.controls;
  return {
    rolloutLength: clamp(c.rolloutLength + fork.lengthShift),
    identityDensity: clamp(c.identityDensity + fork.densityShift),
    physicsViolations: clamp(c.physicsViolations + fork.violationShift),
    memoryWindow: clamp(c.memoryWindow + fork.memoryShift)
  };
}

export function failureMode(metrics) {
  if (metrics.drift > 64 || metrics.identityStability < 48 || metrics.contactConsistency < 48) return "break";
  if (metrics.drift > 42 || metrics.identityStability < 60 || metrics.contactConsistency < 58) return "watch";
  return "stable";
}

export function evaluateFork(record, fork, stageEvidence) {
  const controls = applyFork(record, fork);
  const metrics = scoreCounterfactual(controls, stageEvidence);
  return {
    id: `${record.id}/${fork.id}`,
    caseId: record.id,
    forkId: fork.id,
    caseTitle: record.title,
    forkTitle: fork.title,
    controls,
    metrics,
    identityDelta: metrics.identityStability - record.metrics.identityStability,
    driftDelta: metrics.drift - record.metrics.drift,
    failureMode: failureMode(metrics)
  };
}

export function summarizeCounterfactualLab(records, forks, stageEvidence) {
  const rows = records.flatMap((record) => forks.map((fork) => evaluateFork(record, fork, stageEvidence)));
  const maxDrift = Math.max(...rows.map((row) => row.metrics.drift));
  const minIdentityStability = Math.min(...rows.map((row) => row.metrics.identityStability));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.readiness, 0) / rows.length;
  return {
    cases: records.length,
    forks: forks.length,
    counterfactualRows: rows.length,
    stable: rows.filter((row) => row.failureMode === "stable").length,
    watch: rows.filter((row) => row.failureMode === "watch").length,
    break: rows.filter((row) => row.failureMode === "break").length,
    maxDrift: Number(maxDrift.toFixed(1)),
    minIdentityStability: Number(minIdentityStability.toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { counterfactualRows, forks, records, stageEvidence, summary } from "../src/fixtures.js";
import { applyFork, evaluateFork, failureMode, scoreCounterfactual, summarizeCounterfactualLab } from "../src/core.js";

const base = records[0];
const longFork = forks.find((fork) => fork.id === "long-horizon-fork");
const shifted = applyFork(base, longFork);
assert.ok(shifted.rolloutLength > base.controls.rolloutLength);
assert.ok(shifted.memoryWindow < base.controls.memoryWindow);

const baseMetrics = scoreCounterfactual(base.controls, stageEvidence);
const forked = evaluateFork(base, longFork, stageEvidence);
assert.ok(forked.metrics.drift > baseMetrics.drift);
assert.ok(forked.metrics.identityStability < baseMetrics.identityStability);
assert.match(failureMode(forked.metrics), /^(stable|watch|break)$/);

const derived = summarizeCounterfactualLab(records, forks, stageEvidence);
assert.equal(derived.cases, 4);
assert.equal(derived.forks, 4);
assert.equal(derived.counterfactualRows, 16);
assert.equal(counterfactualRows.length, 16);
assert.equal(summary.backlogGoal, "Temporal counterfactual lab");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 4);
assert.ok(summary.watch + summary.break > 0);
assert.ok(summary.maxDrift >= 45);
assert.equal(summary.status, "release");
console.log("ok cvpr-temporal-counterfactual-lab:", summary.counterfactualRows, "counterfactual rows");
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
    length = clamp(controls["rolloutLength"])
    density = clamp(controls["identityDensity"])
    violations = clamp(controls["physicsViolations"])
    memory_window = clamp(controls["memoryWindow"])
    memory_load = clamp(length * 0.34 + density * 0.34 + (100 - memory_window) * 0.32)
    identity = clamp(stage_evidence["memory"] * 0.36 + memory_window * 0.30 + (100 - density) * 0.16 + (100 - length) * 0.18)
    contact = clamp(stage_evidence["physics"] * 0.42 + (100 - violations) * 0.38 + memory_window * 0.12 + (100 - density) * 0.08)
    plausibility = clamp(stage_evidence["rollout"] * 0.34 + contact * 0.24 + identity * 0.22 + (100 - length) * 0.20)
    drift = clamp(memory_load * 0.30 + (100 - identity) * 0.30 + violations * 0.24 + length * 0.16)
    readiness = clamp(identity * 0.30 + contact * 0.28 + plausibility * 0.26 + (100 - drift) * 0.16)
    return {
        "memoryLoad": round(memory_load, 1),
        "identityStability": round(identity, 1),
        "contactConsistency": round(contact, 1),
        "rolloutPlausibility": round(plausibility, 1),
        "drift": round(drift, 1),
        "readiness": round(readiness, 1),
    }


def apply_fork(record, fork):
    c = record["controls"]
    return {
        "rolloutLength": clamp(c["rolloutLength"] + fork["lengthShift"]),
        "identityDensity": clamp(c["identityDensity"] + fork["densityShift"]),
        "physicsViolations": clamp(c["physicsViolations"] + fork["violationShift"]),
        "memoryWindow": clamp(c["memoryWindow"] + fork["memoryShift"]),
    }


def mode(metrics):
    if metrics["drift"] > 64 or metrics["identityStability"] < 48 or metrics["contactConsistency"] < 48:
        return "break"
    if metrics["drift"] > 42 or metrics["identityStability"] < 60 or metrics["contactConsistency"] < 58:
        return "watch"
    return "stable"


def build_rows(bench):
    rows = []
    for record in bench["records"]:
        for fork in FORKS:
            controls = apply_fork(record, fork)
            metrics = score(controls, bench["stageEvidence"])
            rows.append(
                {
                    "id": f"{record['id']}/{fork['id']}",
                    "caseId": record["id"],
                    "caseTitle": record["title"],
                    "forkId": fork["id"],
                    "forkTitle": fork["title"],
                    "controls": controls,
                    "metrics": metrics,
                    "identityDelta": round(metrics["identityStability"] - record["metrics"]["identityStability"], 1),
                    "driftDelta": round(metrics["drift"] - record["metrics"]["drift"], 1),
                    "failureMode": mode(metrics),
                    "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
                    "runtimeEvidence": record["preferredRuntime"],
                    "gpuProvenance": record["gpuProvenance"],
                }
            )
    return rows


def summarize(data, rows):
    backlog_tasks = [task for task in data["backlog"]["backlogTasks"] if task["goal"] == "Temporal counterfactual lab"]
    replay_rows = [row for row in data["replay"]["replayRows"] if row["jobId"] == "temporal-rollout"]
    summary = {
        "demo": "cvpr-temporal-counterfactual-lab",
        "status": "release",
        "backlogGoal": "Temporal counterfactual lab",
        "backlogTasksCovered": len(backlog_tasks),
        "theme": "Seeing and making things that move",
        "system": "video-world-model",
        "bench": "cvpr-temporal-rollout-bench",
        "cases": data["bench"]["summary"]["cases"],
        "forks": len(FORKS),
        "counterfactualRows": len(rows),
        "stable": len([row for row in rows if row["failureMode"] == "stable"]),
        "watch": len([row for row in rows if row["failureMode"] == "watch"]),
        "break": len([row for row in rows if row["failureMode"] == "break"]),
        "gpuBackedCases": data["bench"]["summary"]["cachedRealCases"],
        "maxDrift": max(row["metrics"]["drift"] for row in rows),
        "minIdentityStability": min(row["metrics"]["identityStability"] for row in rows),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in rows) / len(rows), 1),
        "proPlusJob": "temporal-rollout",
        "replayRows": len(replay_rows),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["backlogTasksCovered"] == 3
        and summary["cases"] == 4
        and summary["forks"] == 4
        and summary["counterfactualRows"] == 16
        and summary["gpuBackedCases"] == 4
        and summary["replayRows"] == 1
        and summary["watch"] + summary["break"] > 0
        and summary["maxDrift"] >= 45
        and summary["minIdentityStability"] >= 52
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(data, summary, rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const records = " + json.dumps(data["bench"]["records"], indent=2) + ";\n"
        "export const forks = " + json.dumps(FORKS, indent=2) + ";\n"
        "export const stageEvidence = " + json.dumps(data["bench"]["stageEvidence"], indent=2) + ";\n"
        "export const counterfactualRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Temporal Counterfactual Lab\n\nCounterfactual rollout forks for identity switches, contact errors, memory windows, and drift backed by Colab Pro+ temporal evidence.\n")


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "forks": FORKS,
                "counterfactualRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(data, summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["counterfactualRows"]),
        ("Stable", summary["stable"]),
        ("Watch", summary["watch"]),
        ("Break", summary["break"]),
        ("Pro+ cases", summary["gpuBackedCases"]),
        ("Max drift", summary["maxDrift"]),
        ("Min identity", summary["minIdentityStability"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['caseTitle'])}</td><td>{esc(row['forkTitle'])}</td><td>{row['metrics']['identityStability']}</td><td>{row['metrics']['contactConsistency']}</td><td>{row['metrics']['rolloutPlausibility']}</td><td>{row['metrics']['drift']}</td><td>{row['identityDelta']}</td><td>{row['driftDelta']}</td><td class="{esc(row['failureMode'])}">{esc(row['failureMode'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Temporal Counterfactual Lab</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:96ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.lab{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px;overflow-x:auto}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{background:#fff;border:1px solid var(--line);border-radius:6px;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:960px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.stable{{color:var(--good);font-weight:700}}.watch{{color:var(--warn);font-weight:700}}.break,.inspect{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.lab{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · implemented roadmap demo</div><h1>Temporal Counterfactual Lab</h1><p>Fork video-world-model rollouts to see how identity crowding, contact perturbations, and long-horizon memory changes compound into drift.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-build-backlog.html">build backlog</a><a href="cvpr-next-demo-roadmap.html">roadmap</a><a href="cvpr-temporal-rollout-bench.html">temporal bench</a><a href="video-world-model.html">system</a><a href="analysis/cvpr_temporal_counterfactual_lab/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="lab"><aside class="panel controls"><label>case<select id="case"></select></label><label>fork<select id="fork"></select></label><label>rollout length<input id="rolloutLength" type="range" min="0" max="100"></label><output id="lengthOut"></output><label>identity density<input id="identityDensity" type="range" min="0" max="100"></label><output id="densityOut"></output><label>physics violations<input id="physicsViolations" type="range" min="0" max="100"></label><output id="violationsOut"></output><label>memory window<input id="memoryWindow" type="range" min="0" max="100"></label><output id="memoryOut"></output><code id="source"></code></aside><section class="panel"><canvas id="chart" width="820" height="390" aria-label="temporal counterfactual lab chart"></canvas><div class="meters"><div><b id="identity">0</b><span>identity</span></div><div><b id="contact">0</b><span>contact</span></div><div><b id="plausibility">0</b><span>plausible</span></div><div><b id="drift">0</b><span>drift</span></div><div><b id="mode">-</b><span>mode</span></div></div></section></section><section class="panel"><h2>Counterfactual Matrix</h2><table><thead><tr><th>Case</th><th>Fork</th><th>Identity</th><th>Contact</th><th>Plausibility</th><th>Drift</th><th>Identity delta</th><th>Drift delta</th><th>Mode</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · backlog tasks covered: {summary['backlogTasksCovered']} · Pro+ job: {esc(summary['proPlusJob'])} · replay rows: {summary['replayRows']}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_temporal_counterfactual_lab.py · tested package under source-code/learning/cvpr-temporal-counterfactual-lab</div></footer>
<script type="module">
import {{ applyFork, failureMode, scoreCounterfactual }} from "./source-code/learning/cvpr-temporal-counterfactual-lab/src/core.js";
const records = {json.dumps(data['bench']['records'])};
const forks = {json.dumps(FORKS)};
const stageEvidence = {json.dumps(data['bench']['stageEvidence'])};
const caseSelect=document.querySelector("#case"); const forkSelect=document.querySelector("#fork");
for (const row of records) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; caseSelect.append(option); }}
for (const row of forks) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; forkSelect.append(option); }}
const ids=["rolloutLength","identityDensity","physicsViolations","memoryWindow"]; const outs={{rolloutLength:"lengthOut",identityDensity:"densityOut",physicsViolations:"violationsOut",memoryWindow:"memoryOut"}};
function selectedRecord() {{ return records.find((row)=>row.id===caseSelect.value)||records[0]; }}
function selectedFork() {{ return forks.find((row)=>row.id===forkSelect.value)||forks[0]; }}
function loadFork() {{ const controls=applyFork(selectedRecord(), selectedFork()); ids.forEach((key)=>document.querySelector("#"+key).value=controls[key]); renderLab(); }}
function draw(metrics, controls) {{ const canvas=document.querySelector("#chart"); const ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.strokeStyle="#D7DCD9"; ctx.lineWidth=1; for(let x=70;x<=730;x+=82){{ctx.beginPath();ctx.moveTo(x,56);ctx.lineTo(x,292);ctx.stroke();}} const colors=["#0E7C86","#277449","#B37A1E","#59656A"]; for(let track=0;track<4;track++){{ctx.strokeStyle=colors[track]; ctx.lineWidth=3; ctx.beginPath(); for(let step=0;step<9;step++){{const x=78+step*78; const y=88+track*45+Math.sin(step+track)*12+(100-metrics.identityStability)*0.12*step+metrics.drift*0.08*track; if(step===0)ctx.moveTo(x,y); else ctx.lineTo(x,y); ctx.fillStyle=colors[track]; ctx.fillRect(x-3,y-3,6,6);}}ctx.stroke();}} ctx.strokeStyle=metrics.drift>64?"#9B2D2D":metrics.drift>42?"#B37A1E":"#277449"; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(78,340); ctx.lineTo(78+metrics.drift*5.6,340); ctx.stroke(); ctx.fillStyle="#23302C"; ctx.font="13px ui-monospace, monospace"; ctx.fillText(`rollout ${{controls.rolloutLength}} · ids ${{controls.identityDensity}} · memory ${{controls.memoryWindow}}`,78,34); }}
function renderLab() {{ const controls=Object.fromEntries(ids.map((key)=>[key,Number(document.querySelector("#"+key).value)])); ids.forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const metrics=scoreCounterfactual(controls, stageEvidence); const state=failureMode(metrics); identity.textContent=metrics.identityStability.toFixed(1); contact.textContent=metrics.contactConsistency.toFixed(1); plausibility.textContent=metrics.rolloutPlausibility.toFixed(1); drift.textContent=metrics.drift.toFixed(1); mode.textContent=state; mode.className=state; source.textContent=selectedRecord().gpuProvenance.sourceBench + " · " + selectedRecord().gpuProvenance.runtime; draw(metrics, controls); }}
caseSelect.addEventListener("change", loadFork); forkSelect.addEventListener("change", loadFork); ids.forEach((key)=>document.querySelector("#"+key).addEventListener("input", renderLab)); caseSelect.value=records[0].id; forkSelect.value=forks[0].id; loadFork();
</script></body></html>"""
    write(ROOT / "cvpr-temporal-counterfactual-lab.html", page)


def main():
    data = load_input()
    rows = build_rows(data["bench"])
    summary = summarize(data, rows)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(data, summary, rows)
    print(f"wrote cvpr-temporal-counterfactual-lab.html: {summary['counterfactualRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

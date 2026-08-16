"""Build the CVPR adaptive serving stress lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-adaptive-serving-stress-lab"
ANALYSIS = ROOT / "analysis/cvpr_adaptive_serving_stress_lab"

SOURCES = {
    "backlog": ROOT / "analysis/cvpr_demo_build_backlog/registry.json",
    "bench": ROOT / "analysis/cvpr_compute_serving_bench/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
}

PROFILES = [
    {
        "id": "balanced-release",
        "title": "Balanced release",
        "tokenShift": 0,
        "quantShift": 0,
        "routingShift": 0,
        "escalationShift": 0,
        "intent": "Keep the Pro+ backed default policy and inspect the evidence floor.",
    },
    {
        "id": "latency-squeeze",
        "title": "Latency squeeze",
        "tokenShift": -18,
        "quantShift": 16,
        "routingShift": 14,
        "escalationShift": -2,
        "intent": "Trade evidence for lower compute and see where quality starts to degrade.",
    },
    {
        "id": "quality-guard",
        "title": "Quality guard",
        "tokenShift": 8,
        "quantShift": -10,
        "routingShift": -18,
        "escalationShift": 18,
        "intent": "Spend more budget and escalate more often when retained evidence matters.",
    },
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreServingPolicy(controls, stageEvidence) {
  const tokens = clamp(controls.tokenBudget);
  const quant = clamp(controls.quantizationLevel);
  const routing = clamp(controls.studentRouting);
  const escalation = clamp(controls.escalationCost);
  const latency = clamp(98 - tokens * 0.34 - quant * 0.28 - routing * 0.18 + escalation * 0.12);
  const retainedEvidence = clamp(stageEvidence.evidenceDepth * 0.34 + tokens * 0.38 + (100 - quant) * 0.16 + stageEvidence.token * 0.12);
  const qualityFloor = clamp(stageEvidence.quantized * 0.30 + retainedEvidence * 0.34 + (100 - quant) * 0.22 + (100 - routing) * 0.14);
  const escalationRate = clamp((100 - qualityFloor) * 0.36 + routing * 0.32 + escalation * 0.22 + (100 - tokens) * 0.10);
  const costSaving = clamp((100 - latency) * 0.40 + quant * 0.24 + routing * 0.22 + (100 - escalationRate) * 0.14);
  const risk = clamp((100 - retainedEvidence) * 0.30 + (100 - qualityFloor) * 0.34 + escalationRate * 0.20 + quant * 0.16);
  const readiness = clamp(costSaving * 0.24 + retainedEvidence * 0.30 + qualityFloor * 0.30 + (100 - risk) * 0.16);
  return { latency, retainedEvidence, qualityFloor, escalationRate, costSaving, risk, readiness };
}

export function decision(metrics) {
  if (metrics.readiness >= 68 && metrics.retainedEvidence >= 55 && metrics.qualityFloor >= 58 && metrics.risk <= 42) return "release";
  if (metrics.readiness >= 54 && metrics.retainedEvidence >= 45 && metrics.risk <= 62) return "review";
  return "block";
}

export function applyProfile(record, profile) {
  const controls = record.controls;
  return {
    tokenBudget: clamp(controls.tokenBudget + profile.tokenShift),
    quantizationLevel: clamp(controls.quantizationLevel + profile.quantShift),
    studentRouting: clamp(controls.studentRouting + profile.routingShift),
    escalationCost: clamp(controls.escalationCost + profile.escalationShift)
  };
}

export function evaluateStressCase(record, profile, stageEvidence) {
  const controls = applyProfile(record, profile);
  const metrics = scoreServingPolicy(controls, stageEvidence);
  return {
    id: `${record.id}/${profile.id}`,
    caseId: record.id,
    profileId: profile.id,
    title: record.title,
    profile: profile.title,
    controls,
    metrics,
    decision: decision(metrics),
    evidenceDelta: metrics.retainedEvidence - record.metrics.retainedEvidence,
    readinessDelta: metrics.readiness - record.metrics.readiness
  };
}

export function summarizeStressLab(records, profiles, stageEvidence) {
  const stressRows = records.flatMap((record) => profiles.map((profile) => evaluateStressCase(record, profile, stageEvidence)));
  const avgReadiness = stressRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / stressRows.length;
  const minRetainedEvidence = Math.min(...stressRows.map((row) => row.metrics.retainedEvidence));
  const maxRisk = Math.max(...stressRows.map((row) => row.metrics.risk));
  return {
    cases: records.length,
    profiles: profiles.length,
    stressRows: stressRows.length,
    release: stressRows.filter((row) => row.decision === "release").length,
    review: stressRows.filter((row) => row.decision === "review").length,
    block: stressRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minRetainedEvidence: Number(minRetainedEvidence.toFixed(1)),
    maxRisk: Number(maxRisk.toFixed(1)),
    status: minRetainedEvidence >= 55 && maxRisk <= 42 ? "release" : "inspect",
    stressRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { profiles, records, stageEvidence, summary } from "../src/fixtures.js";
import { applyProfile, decision, evaluateStressCase, scoreServingPolicy, summarizeStressLab } from "../src/core.js";

const base = records[0];
const squeezed = applyProfile(base, profiles.find((profile) => profile.id === "latency-squeeze"));
assert.ok(squeezed.tokenBudget < base.controls.tokenBudget);
assert.ok(squeezed.quantizationLevel > base.controls.quantizationLevel);

const guarded = evaluateStressCase(base, profiles.find((profile) => profile.id === "quality-guard"), stageEvidence);
assert.ok(guarded.metrics.retainedEvidence >= base.metrics.retainedEvidence);
assert.match(decision(guarded.metrics), /^(release|review|block)$/);

const scored = scoreServingPolicy(base.controls, stageEvidence);
assert.ok(scored.readiness >= 0 && scored.readiness <= 100);

const derived = summarizeStressLab(records, profiles, stageEvidence);
assert.equal(derived.cases, 4);
assert.equal(derived.profiles, 3);
assert.equal(derived.stressRows.length, 12);
assert.equal(summary.stressRows, 12);
assert.equal(summary.gpuBackedCases, 4);
assert.equal(summary.backlogGoal, "Adaptive serving stress lab");
assert.equal(summary.status, "release");
assert.ok(summary.minRetainedEvidence >= 55);
assert.ok(summary.maxRisk <= 42);
console.log("ok cvpr-adaptive-serving-stress-lab:", summary.stressRows, "stress rows");
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
    tokens = clamp(controls["tokenBudget"])
    quant = clamp(controls["quantizationLevel"])
    routing = clamp(controls["studentRouting"])
    escalation = clamp(controls["escalationCost"])
    latency = clamp(98 - tokens * 0.34 - quant * 0.28 - routing * 0.18 + escalation * 0.12)
    evidence = clamp(stage_evidence["evidenceDepth"] * 0.34 + tokens * 0.38 + (100 - quant) * 0.16 + stage_evidence["token"] * 0.12)
    quality = clamp(stage_evidence["quantized"] * 0.30 + evidence * 0.34 + (100 - quant) * 0.22 + (100 - routing) * 0.14)
    escalation_rate = clamp((100 - quality) * 0.36 + routing * 0.32 + escalation * 0.22 + (100 - tokens) * 0.10)
    saving = clamp((100 - latency) * 0.40 + quant * 0.24 + routing * 0.22 + (100 - escalation_rate) * 0.14)
    risk = clamp((100 - evidence) * 0.30 + (100 - quality) * 0.34 + escalation_rate * 0.20 + quant * 0.16)
    readiness = clamp(saving * 0.24 + evidence * 0.30 + quality * 0.30 + (100 - risk) * 0.16)
    return {
        "latency": round(latency, 1),
        "retainedEvidence": round(evidence, 1),
        "qualityFloor": round(quality, 1),
        "escalationRate": round(escalation_rate, 1),
        "costSaving": round(saving, 1),
        "risk": round(risk, 1),
        "readiness": round(readiness, 1),
    }


def decide(metrics):
    if metrics["readiness"] >= 68 and metrics["retainedEvidence"] >= 55 and metrics["qualityFloor"] >= 58 and metrics["risk"] <= 42:
        return "release"
    if metrics["readiness"] >= 54 and metrics["retainedEvidence"] >= 45 and metrics["risk"] <= 62:
        return "review"
    return "block"


def profile_controls(record, profile):
    controls = record["controls"]
    return {
        "tokenBudget": clamp(controls["tokenBudget"] + profile["tokenShift"]),
        "quantizationLevel": clamp(controls["quantizationLevel"] + profile["quantShift"]),
        "studentRouting": clamp(controls["studentRouting"] + profile["routingShift"]),
        "escalationCost": clamp(controls["escalationCost"] + profile["escalationShift"]),
    }


def build_rows(bench):
    stage_evidence = bench["stageEvidence"]
    rows = []
    for record in bench["records"]:
        for profile in PROFILES:
            controls = profile_controls(record, profile)
            metrics = score(controls, stage_evidence)
            rows.append(
                {
                    "id": f"{record['id']}/{profile['id']}",
                    "caseId": record["id"],
                    "caseTitle": record["title"],
                    "profileId": profile["id"],
                    "profileTitle": profile["title"],
                    "intent": profile["intent"],
                    "controls": controls,
                    "metrics": metrics,
                    "decision": decide(metrics),
                    "evidenceDelta": round(metrics["retainedEvidence"] - record["metrics"]["retainedEvidence"], 1),
                    "readinessDelta": round(metrics["readiness"] - record["metrics"]["readiness"], 1),
                    "sourceBenchPage": "cvpr-compute-serving-bench.html",
                    "runtimeEvidence": record["preferredRuntime"],
                    "gpuProvenance": record["gpuProvenance"],
                }
            )
    return rows


def summarize(data, rows):
    backlog_tasks = [task for task in data["backlog"]["backlogTasks"] if task["goal"] == "Adaptive serving stress lab"]
    summary = {
        "demo": "cvpr-adaptive-serving-stress-lab",
        "status": "release",
        "backlogGoal": "Adaptive serving stress lab",
        "backlogTasksCovered": len(backlog_tasks),
        "theme": "Learning more from less, and not breaking",
        "system": "efficient-vision-serving",
        "bench": data["bench"]["summary"]["bench"],
        "cases": data["bench"]["summary"]["cases"],
        "profiles": len(PROFILES),
        "stressRows": len(rows),
        "release": len([row for row in rows if row["decision"] == "release"]),
        "review": len([row for row in rows if row["decision"] == "review"]),
        "block": len([row for row in rows if row["decision"] == "block"]),
        "gpuBackedCases": data["bench"]["summary"]["cachedRealCases"],
        "minRetainedEvidence": min(row["metrics"]["retainedEvidence"] for row in rows),
        "maxRisk": max(row["metrics"]["risk"] for row in rows),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in rows) / len(rows), 1),
        "proPlusJob": "compute-serving",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["backlogTasksCovered"] == 3
        and summary["cases"] == 4
        and summary["profiles"] == 3
        and summary["stressRows"] == 12
        and summary["gpuBackedCases"] == 4
        and summary["minRetainedEvidence"] >= 55
        and summary["maxRisk"] <= 42
        and summary["block"] == 0
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(data, summary, rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const records = " + json.dumps(data["bench"]["records"], indent=2) + ";\n"
        "export const profiles = " + json.dumps(PROFILES, indent=2) + ";\n"
        "export const stageEvidence = " + json.dumps(data["bench"]["stageEvidence"], indent=2) + ";\n"
        "export const stressRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Adaptive Serving Stress Lab\n\nInteractive stress lab for the efficient-vision serving roadmap goal, backed by compute-serving bench cases and Colab Pro+ evidence.\n",
    )


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "profiles": PROFILES,
                "stressRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(data, summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["stressRows"]),
        ("Cases", summary["cases"]),
        ("Profiles", summary["profiles"]),
        ("Pro+ cases", summary["gpuBackedCases"]),
        ("Min evidence", summary["minRetainedEvidence"]),
        ("Max risk", summary["maxRisk"]),
        ("Avg ready", summary["avgReadiness"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['caseTitle'])}</td><td>{esc(row['profileTitle'])}</td><td>{row['metrics']['latency']}</td><td>{row['metrics']['retainedEvidence']}</td><td>{row['metrics']['qualityFloor']}</td><td>{row['metrics']['risk']}</td><td>{row['readinessDelta']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Adaptive Serving Stress Lab</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:96ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.lab{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px;overflow-x:auto}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-top:12px}}.meters div{{background:#fff;border:1px solid var(--line);border-radius:6px;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:860px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.release{{color:var(--good);font-weight:700}}.review{{color:var(--warn);font-weight:700}}.block,.inspect{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.lab{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · implemented roadmap demo</div><h1>Adaptive Serving Stress Lab</h1><p>Live budget-control demo for efficient vision serving. Sweep token pruning, quantization, student routing, and escalation cost against Pro+ backed compute-serving evidence.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-build-backlog.html">build backlog</a><a href="cvpr-next-demo-roadmap.html">roadmap</a><a href="cvpr-compute-serving-bench.html">bench</a><a href="efficient-vision-serving.html">system</a><a href="analysis/cvpr_adaptive_serving_stress_lab/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="lab"><aside class="panel controls"><label>case<select id="case"></select></label><label>profile<select id="profile"></select></label><label>token budget<input id="tokenBudget" type="range" min="0" max="100"></label><output id="tokenOut"></output><label>quantization<input id="quantizationLevel" type="range" min="0" max="100"></label><output id="quantOut"></output><label>student routing<input id="studentRouting" type="range" min="0" max="100"></label><output id="routingOut"></output><label>escalation cost<input id="escalationCost" type="range" min="0" max="100"></label><output id="costOut"></output><code id="intent"></code></aside><section class="panel"><canvas id="chart" width="820" height="380" aria-label="adaptive serving stress chart"></canvas><div class="meters"><div><b id="latency">0</b><span>latency</span></div><div><b id="evidence">0</b><span>evidence</span></div><div><b id="quality">0</b><span>quality</span></div><div><b id="risk">0</b><span>risk</span></div><div><b id="ready">0</b><span>readiness</span></div><div><b id="decision">-</b><span>decision</span></div></div></section></section><section class="panel"><h2>Stress Matrix</h2><table><thead><tr><th>Case</th><th>Profile</th><th>Latency</th><th>Evidence</th><th>Quality</th><th>Risk</th><th>Ready delta</th><th>Decision</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · backlog tasks covered: {summary['backlogTasksCovered']} · Pro+ job: {esc(summary['proPlusJob'])} · bench: {esc(summary['bench'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_adaptive_serving_stress_lab.py · tested package under source-code/learning/cvpr-adaptive-serving-stress-lab</div></footer>
<script type="module">
import {{ applyProfile, decision, scoreServingPolicy }} from "./source-code/learning/cvpr-adaptive-serving-stress-lab/src/core.js";
const records = {json.dumps(data['bench']['records'])};
const profiles = {json.dumps(PROFILES)};
const stageEvidence = {json.dumps(data['bench']['stageEvidence'])};
const caseSelect = document.querySelector("#case");
const profileSelect = document.querySelector("#profile");
for (const row of records) {{ const option = document.createElement("option"); option.value = row.id; option.textContent = row.title; caseSelect.append(option); }}
for (const row of profiles) {{ const option = document.createElement("option"); option.value = row.id; option.textContent = row.title; profileSelect.append(option); }}
const ids = ["tokenBudget","quantizationLevel","studentRouting","escalationCost"];
const outs = {{ tokenBudget:"tokenOut", quantizationLevel:"quantOut", studentRouting:"routingOut", escalationCost:"costOut" }};
function selectedRecord() {{ return records.find((row) => row.id === caseSelect.value) || records[0]; }}
function selectedProfile() {{ return profiles.find((row) => row.id === profileSelect.value) || profiles[0]; }}
function loadProfile() {{ const controls = applyProfile(selectedRecord(), selectedProfile()); ids.forEach((key) => document.querySelector("#" + key).value = controls[key]); document.querySelector("#intent").textContent = selectedProfile().intent; render(); }}
function draw(metrics, controls) {{ const canvas = document.querySelector("#chart"); const ctx = canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); const bars=[["latency",metrics.latency,"#B37A1E"],["evidence",metrics.retainedEvidence,"#0E7C86"],["quality",metrics.qualityFloor,"#277449"],["risk",metrics.risk,"#9B2D2D"],["saving",metrics.costSaving,"#59656A"],["ready",metrics.readiness,"#101719"]]; bars.forEach(([name,val,color],i)=>{{ const x=70+i*120; ctx.fillStyle=color; ctx.fillRect(x,300-val*2.35,58,val*2.35); ctx.fillStyle="#23302C"; ctx.font="13px ui-monospace, monospace"; ctx.fillText(name,x,330); ctx.fillText(val.toFixed(1),x,284-val*2.35); }}); ctx.fillText(`tokens ${{controls.tokenBudget}} · quant ${{controls.quantizationLevel}} · route ${{controls.studentRouting}} · escalation ${{controls.escalationCost}}`,70,38); }}
function render() {{ const controls = Object.fromEntries(ids.map((key) => [key, Number(document.querySelector("#"+key).value)])); ids.forEach((key) => document.querySelector("#"+outs[key]).value = controls[key]); const metrics = scoreServingPolicy(controls, stageEvidence); const verdict = decision(metrics); document.querySelector("#latency").textContent = metrics.latency.toFixed(1); document.querySelector("#evidence").textContent = metrics.retainedEvidence.toFixed(1); document.querySelector("#quality").textContent = metrics.qualityFloor.toFixed(1); document.querySelector("#risk").textContent = metrics.risk.toFixed(1); document.querySelector("#ready").textContent = metrics.readiness.toFixed(1); const d = document.querySelector("#decision"); d.textContent = verdict; d.className = verdict; draw(metrics, controls); }}
caseSelect.addEventListener("change", loadProfile); profileSelect.addEventListener("change", loadProfile); ids.forEach((key) => document.querySelector("#"+key).addEventListener("input", render)); caseSelect.value = records[0].id; profileSelect.value = profiles[0].id; loadProfile();
</script></body></html>"""
    write(ROOT / "cvpr-adaptive-serving-stress-lab.html", page)


def main():
    data = load_input()
    rows = build_rows(data["bench"])
    summary = summarize(data, rows)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(data, summary, rows)
    print(f"wrote cvpr-adaptive-serving-stress-lab.html: {summary['stressRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

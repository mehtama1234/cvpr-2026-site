"""Build the CVPR cross-theme incident gauntlet demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-cross-theme-incident-gauntlet"
ANALYSIS = ROOT / "analysis/cvpr_cross_theme_incident_gauntlet"

DEMO_SOURCES = [
    ("adaptive-serving", "cvpr-adaptive-serving-stress-lab.html", ROOT / "analysis/cvpr_adaptive_serving_stress_lab/registry.json"),
    ("constraint-edit", "cvpr-constraint-edit-tournament.html", ROOT / "analysis/cvpr_constraint_edit_tournament/registry.json"),
    ("open-vocab", "cvpr-open-vocab-failure-hunt.html", ROOT / "analysis/cvpr_open_vocab_failure_hunt/registry.json"),
    ("3d-edit-provenance", "cvpr-3d-edit-provenance-room.html", ROOT / "analysis/cvpr_3d_edit_provenance_room/registry.json"),
    ("temporal-counterfactual", "cvpr-temporal-counterfactual-lab.html", ROOT / "analysis/cvpr_temporal_counterfactual_lab/registry.json"),
    ("grounded-answer", "cvpr-grounded-answer-courtroom.html", ROOT / "analysis/cvpr_grounded_answer_courtroom/registry.json"),
    ("provenance-red-team", "cvpr-provenance-red-team-arena.html", ROOT / "analysis/cvpr_provenance_red_team_arena/registry.json"),
    ("safety-deployment", "cvpr-safety-deployment-simulator.html", ROOT / "analysis/cvpr_safety_deployment_simulator/registry.json"),
]

INCIDENTS = [
    {
        "id": "launch-audit",
        "title": "Launch audit",
        "family": "baseline",
        "readinessShift": 0,
        "riskShift": 0,
        "evidenceShift": 0,
        "proPlusPenalty": 0,
        "replayTarget": "cvpr-colab-result-replay.html",
    },
    {
        "id": "rare-object-distractor",
        "title": "Rare-object distractor",
        "family": "rare-object",
        "readinessShift": -6,
        "riskShift": 12,
        "evidenceShift": -6,
        "proPlusPenalty": 1,
        "replayTarget": "cvpr-long-tail-grounding-bench.html",
    },
    {
        "id": "adversarial-text-overlay",
        "title": "Adversarial text overlay",
        "family": "adversarial-text",
        "readinessShift": -9,
        "riskShift": 20,
        "evidenceShift": -10,
        "proPlusPenalty": 1,
        "replayTarget": "cvpr-vlm-answer-verification-bench.html",
    },
    {
        "id": "unsupported-query",
        "title": "Unsupported query",
        "family": "unsupported-evidence",
        "readinessShift": -12,
        "riskShift": 24,
        "evidenceShift": -14,
        "proPlusPenalty": 0,
        "replayTarget": "cvpr-open-vocab-failure-hunt.html",
    },
    {
        "id": "gpu-brownout",
        "title": "GPU brownout",
        "family": "runtime",
        "readinessShift": -10,
        "riskShift": 8,
        "evidenceShift": -5,
        "proPlusPenalty": 4,
        "replayTarget": "cvpr-colab-result-replay.html",
    },
    {
        "id": "adversarial-content",
        "title": "Adversarial content",
        "family": "adversarial-content",
        "readinessShift": -8,
        "riskShift": 18,
        "evidenceShift": -8,
        "proPlusPenalty": 0,
        "replayTarget": "cvpr-provenance-red-team-arena.html",
    },
    {
        "id": "compound-launch",
        "title": "Compound launch",
        "family": "compound",
        "readinessShift": -18,
        "riskShift": 25,
        "evidenceShift": -15,
        "proPlusPenalty": 5,
        "replayTarget": "cvpr-remediation-rollback-rehearsal-lab.html",
    },
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function extractSignals(summary) {
  const readiness = summary.avgReadiness ?? summary.avgDeploymentReadiness ?? summary.avgTournamentScore ?? 72;
  const risk = summary.maxRisk ?? summary.maxJointRisk ?? summary.maxUnsupportedRisk ?? summary.maxRoomRisk ?? summary.maxDrift ?? summary.maxUnsupportedClaimRisk ?? summary.maxDeploymentRisk ?? (100 - (summary.minEvidence ?? 65));
  const evidence = summary.minRetainedEvidence ?? summary.minConstraintScore ?? summary.minLocalizedEvidence ?? summary.minProvenanceContinuity ?? summary.minIdentityStability ?? summary.minVisualCitation ?? summary.minEvidence ?? summary.minSceneGrounding ?? 65;
  const rows = summary.stressRows ?? summary.matches ?? summary.probeRows ?? summary.roomRows ?? summary.counterfactualRows ?? summary.courtroomRows ?? summary.arenaRows ?? summary.deploymentRows ?? 0;
  const proPlusJobs = summary.proPlusJobs ?? (summary.proPlusJob ? [summary.proPlusJob] : []);
  const gpuBackedCases = summary.gpuBackedCases ?? summary.cachedSystemEvidenceCases ?? 0;
  return {
    readiness: clamp(readiness),
    risk: clamp(risk),
    evidence: clamp(evidence),
    rows,
    proPlusJobs,
    gpuBackedCases,
    sourceStatus: summary.status
  };
}

export function applyIncident(demo, incident) {
  const signals = extractSignals(demo.summary);
  const proPlusStress = signals.proPlusJobs.length > 0 ? incident.proPlusPenalty : Math.round(incident.proPlusPenalty / 2);
  const readiness = clamp(signals.readiness + incident.readinessShift - proPlusStress);
  const risk = clamp(signals.risk + incident.riskShift + proPlusStress);
  const evidence = clamp(signals.evidence + incident.evidenceShift - Math.round(proPlusStress / 2));
  const resilience = clamp(readiness * 0.44 + (100 - risk) * 0.34 + evidence * 0.22);
  return {
    id: `${demo.id}/${incident.id}`,
    demoId: demo.id,
    demoTitle: demo.title,
    theme: demo.theme,
    page: demo.page,
    incidentId: incident.id,
    incidentTitle: incident.title,
    signals,
    metrics: { readiness, risk, evidence, resilience },
    decision: gauntletDecision({ readiness, risk, evidence, resilience })
  };
}

export function gauntletDecision(metrics) {
  if (metrics.resilience >= 68 && metrics.readiness >= 64 && metrics.risk <= 42 && metrics.evidence >= 60) return "release";
  if (metrics.resilience >= 52 && metrics.readiness >= 48 && metrics.risk <= 66 && metrics.evidence >= 48) return "review";
  return "block";
}

export function summarizeGauntlet(demos, incidents) {
  const rows = demos.flatMap((demo) => incidents.map((incident) => applyIncident(demo, incident)));
  const sourceRelease = demos.filter((demo) => demo.summary.status === "release").length;
  const avgResilience = rows.reduce((sum, row) => sum + row.metrics.resilience, 0) / rows.length;
  return {
    demos: demos.length,
    incidents: incidents.length,
    gauntletRows: rows.length,
    sourceRelease,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    minEvidence: Number(Math.min(...rows.map((row) => row.metrics.evidence)).toFixed(1)),
    maxRisk: Number(Math.max(...rows.map((row) => row.metrics.risk)).toFixed(1)),
    avgResilience: Number(avgResilience.toFixed(1)),
    rows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { demos, gauntletRows, incidents, summary } from "../src/fixtures.js";
import { applyIncident, extractSignals, gauntletDecision, summarizeGauntlet } from "../src/core.js";

const safety = demos.find((demo) => demo.id === "safety-deployment");
const launch = incidents.find((incident) => incident.id === "launch-audit");
const compound = incidents.find((incident) => incident.id === "compound-launch");
const base = applyIncident(safety, launch);
const stressed = applyIncident(safety, compound);

assert.equal(demos.length, 8);
assert.equal(incidents.length, 7);
assert.equal(gauntletRows.length, 56);
assert.ok(extractSignals(safety.summary).gpuBackedCases >= 8);
assert.ok(stressed.metrics.risk > base.metrics.risk);
assert.ok(stressed.metrics.evidence < base.metrics.evidence);
assert.ok(incidents.some((incident) => incident.id === "rare-object-distractor"));
assert.ok(incidents.some((incident) => incident.id === "adversarial-text-overlay"));
assert.ok(incidents.some((incident) => incident.id === "unsupported-query"));
assert.ok(incidents.every((incident) => incident.replayTarget));
assert.match(gauntletDecision(stressed.metrics), /^(release|review|block)$/);

const derived = summarizeGauntlet(demos, incidents);
assert.equal(derived.gauntletRows, 56);
assert.equal(summary.demos, 8);
assert.equal(summary.incidents, 7);
assert.equal(summary.gauntletRows, 56);
assert.ok(summary.sourceRelease >= 7);
assert.ok(summary.review >= 16);
assert.ok(summary.block >= 12);
assert.ok(summary.maxRisk >= 68);
assert.equal(
  summary.status,
  summary.demos === 8 &&
  summary.themes === 8 &&
  summary.incidents === 7 &&
  summary.incidentFamilies === 7 &&
  summary.replayTargets >= 6 &&
  summary.gauntletRows === 56 &&
  summary.sourceRelease === 8 &&
  summary.review >= 16 &&
  summary.block >= 12 &&
  summary.maxRisk >= 68 &&
  summary.minEvidence >= 40
    ? "release"
    : "inspect"
);
console.log("ok cvpr-cross-theme-incident-gauntlet:", summary.gauntletRows, "rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def demo_title(summary):
    return str(summary["backlogGoal"]).title()


def build_demos():
    demos = []
    for demo_id, page, path in DEMO_SOURCES:
        summary = read_json(path)["summary"]
        demos.append(
            {
                "id": demo_id,
                "title": demo_title(summary),
                "theme": summary["theme"],
                "page": page,
                "summary": summary,
            }
        )
    return demos


def extract_signals(summary):
    readiness = (
        summary.get("avgReadiness")
        or summary.get("avgDeploymentReadiness")
        or summary.get("avgTournamentScore")
        or 72
    )
    risk = (
        summary.get("maxRisk")
        or summary.get("maxJointRisk")
        or summary.get("maxUnsupportedRisk")
        or summary.get("maxRoomRisk")
        or summary.get("maxDrift")
        or summary.get("maxUnsupportedClaimRisk")
        or summary.get("maxDeploymentRisk")
        or (100 - summary.get("minEvidence", 65))
    )
    evidence = (
        summary.get("minRetainedEvidence")
        or summary.get("minConstraintScore")
        or summary.get("minLocalizedEvidence")
        or summary.get("minProvenanceContinuity")
        or summary.get("minIdentityStability")
        or summary.get("minVisualCitation")
        or summary.get("minEvidence")
        or summary.get("minSceneGrounding")
        or 65
    )
    rows = (
        summary.get("stressRows")
        or summary.get("matches")
        or summary.get("probeRows")
        or summary.get("roomRows")
        or summary.get("counterfactualRows")
        or summary.get("courtroomRows")
        or summary.get("arenaRows")
        or summary.get("deploymentRows")
        or 0
    )
    pro_plus = summary.get("proPlusJobs") or ([summary["proPlusJob"]] if summary.get("proPlusJob") else [])
    return {
        "readiness": clamp(readiness),
        "risk": clamp(risk),
        "evidence": clamp(evidence),
        "rows": rows,
        "proPlusJobs": pro_plus,
        "gpuBackedCases": summary.get("gpuBackedCases", summary.get("cachedSystemEvidenceCases", 0)),
        "sourceStatus": summary["status"],
    }


def decide(metrics):
    if metrics["resilience"] >= 68 and metrics["readiness"] >= 64 and metrics["risk"] <= 42 and metrics["evidence"] >= 60:
        return "release"
    if metrics["resilience"] >= 52 and metrics["readiness"] >= 48 and metrics["risk"] <= 66 and metrics["evidence"] >= 48:
        return "review"
    return "block"


def apply_incident(demo, incident):
    signals = extract_signals(demo["summary"])
    pro_plus_stress = incident["proPlusPenalty"] if signals["proPlusJobs"] else round(incident["proPlusPenalty"] / 2)
    readiness = clamp(signals["readiness"] + incident["readinessShift"] - pro_plus_stress)
    risk = clamp(signals["risk"] + incident["riskShift"] + pro_plus_stress)
    evidence = clamp(signals["evidence"] + incident["evidenceShift"] - round(pro_plus_stress / 2))
    resilience = clamp(readiness * 0.44 + (100 - risk) * 0.34 + evidence * 0.22)
    metrics = {
        "readiness": round(readiness, 1),
        "risk": round(risk, 1),
        "evidence": round(evidence, 1),
        "resilience": round(resilience, 1),
    }
    return {
        "id": f"{demo['id']}/{incident['id']}",
        "demoId": demo["id"],
        "demoTitle": demo["title"],
        "theme": demo["theme"],
        "page": demo["page"],
        "incidentId": incident["id"],
        "incidentTitle": incident["title"],
        "signals": signals,
        "metrics": metrics,
        "decision": decide(metrics),
    }


def build_rows(demos):
    return [apply_incident(demo, incident) for demo in demos for incident in INCIDENTS]


def summarize(demos, rows):
    summary = {
        "demo": "cvpr-cross-theme-incident-gauntlet",
        "status": "release",
        "round": "second-round-cross-theme",
        "demos": len(demos),
        "themes": len({demo["theme"] for demo in demos}),
        "incidents": len(INCIDENTS),
        "incidentFamilies": len({incident["family"] for incident in INCIDENTS}),
        "replayTargets": len({incident["replayTarget"] for incident in INCIDENTS}),
        "gauntletRows": len(rows),
        "sourceRelease": len([demo for demo in demos if demo["summary"]["status"] == "release"]),
        "release": len([row for row in rows if row["decision"] == "release"]),
        "review": len([row for row in rows if row["decision"] == "review"]),
        "block": len([row for row in rows if row["decision"] == "block"]),
        "gpuBackedOrCachedCases": sum(row["signals"]["gpuBackedCases"] for row in rows if row["incidentId"] == "launch-audit"),
        "minEvidence": min(row["metrics"]["evidence"] for row in rows),
        "maxRisk": max(row["metrics"]["risk"] for row in rows),
        "avgResilience": round(sum(row["metrics"]["resilience"] for row in rows) / len(rows), 1),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["demos"] == 8
        and summary["themes"] == 8
        and summary["incidents"] == 7
        and summary["incidentFamilies"] == 7
        and summary["replayTargets"] >= 6
        and summary["gauntletRows"] == 56
        and summary["sourceRelease"] == 8
        and summary["review"] >= 16
        and summary["block"] >= 12
        and summary["maxRisk"] >= 68
        and summary["minEvidence"] >= 40
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(demos, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const demos = " + json.dumps(demos, indent=2) + ";\n"
        "export const incidents = " + json.dumps(INCIDENTS, indent=2) + ";\n"
        "export const gauntletRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Cross-Theme Incident Gauntlet\n\nSecond-round demo that runs shared production incidents across every shipped CVPR roadmap demo and records release, review, and block behavior.\n")


def build_registry(demos, rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "incidents": INCIDENTS,
                "demos": demos,
                "gauntletRows": rows,
                "sources": {demo_id: str(path.relative_to(ROOT)) for demo_id, _page, path in DEMO_SOURCES},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(demos, rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Demos", summary["demos"]),
        ("Themes", summary["themes"]),
        ("Families", summary["incidentFamilies"]),
        ("Rows", summary["gauntletRows"]),
        ("Release", summary["release"]),
        ("Review", summary["review"]),
        ("Block", summary["block"]),
        ("Max risk", summary["maxRisk"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['page'])}">{esc(row['demoTitle'])}</a></td><td>{esc(row['theme'])}</td><td>{esc(row['incidentTitle'])}</td><td>{row['metrics']['readiness']}</td><td>{row['metrics']['risk']}</td><td>{row['metrics']['evidence']}</td><td>{row['metrics']['resilience']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Cross-Theme Incident Gauntlet</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--teal:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.arena{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px;overflow-x:auto}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:12px}}.meters div{{background:#fff;border:1px solid var(--line);border-radius:6px;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1050px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.release{{color:var(--good);font-weight:700}}.review{{color:var(--warn);font-weight:700}}.block,.inspect{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.arena{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · second-round roadmap demo</div><h1>Cross-Theme Incident Gauntlet</h1><p>Run launch audit, rare-object distractor, adversarial text overlay, unsupported query, GPU brownout, adversarial content, and compound-launch incidents across every shipped CVPR demo to expose cross-theme production failure modes.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-build-backlog.html">first roadmap backlog</a><a href="cvpr-validation-center.html">validation center</a><a href="cvpr-release-command-center.html">command center</a><a href="cvpr-colab-result-replay.html">result replay</a><a href="analysis/cvpr_cross_theme_incident_gauntlet/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="arena"><aside class="panel controls"><label>demo<select id="demoSelect"></select></label><label>incident<select id="incidentSelect"></select></label><label>readiness shift<input id="readinessShift" type="range" min="-40" max="10"></label><output id="readinessOut"></output><label>risk shift<input id="riskShift" type="range" min="0" max="45"></label><output id="riskOut"></output><label>evidence shift<input id="evidenceShift" type="range" min="-35" max="5"></label><output id="evidenceOut"></output><code id="sourceLine"></code></aside><section class="panel"><canvas id="gauntletCanvas" width="820" height="390" aria-label="cross-theme incident gauntlet"></canvas><div class="meters"><div><b id="readinessMeter">0</b><span>readiness</span></div><div><b id="riskMeter">0</b><span>risk</span></div><div><b id="evidenceMeter">0</b><span>evidence</span></div><div><b id="decisionMeter">-</b><span>decision</span></div></div></section></section><section class="panel"><h2>Gauntlet Matrix</h2><table><thead><tr><th>Demo</th><th>Theme</th><th>Incident</th><th>Readiness</th><th>Risk</th><th>Evidence</th><th>Resilience</th><th>Decision</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · source release demos: {summary['sourceRelease']} · gauntlet rows: {summary['gauntletRows']} · incident families: {summary['incidentFamilies']} · replay targets: {summary['replayTargets']} · result replay bridge: cvpr-colab-result-replay.html</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_cross_theme_incident_gauntlet.py · tested package under source-code/learning/cvpr-cross-theme-incident-gauntlet · replay target coverage {summary['replayTargets']}</div></footer>
<script type="module">
import {{ applyIncident, gauntletDecision }} from "./source-code/learning/cvpr-cross-theme-incident-gauntlet/src/core.js";
const demos={json.dumps(demos)}; const incidents={json.dumps(INCIDENTS)};
const demoSelect=document.querySelector("#demoSelect"); const incidentSelect=document.querySelector("#incidentSelect");
for (const row of demos) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; demoSelect.append(option); }}
for (const row of incidents) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; incidentSelect.append(option); }}
function selectedDemo() {{ return demos.find((row)=>row.id===demoSelect.value)||demos[0]; }}
function selectedIncident() {{ return incidents.find((row)=>row.id===incidentSelect.value)||incidents[0]; }}
function loadIncident() {{ const incident=selectedIncident(); readinessShift.value=incident.readinessShift; riskShift.value=incident.riskShift; evidenceShift.value=incident.evidenceShift; renderGauntlet(); }}
function draw(metrics) {{ const canvas=document.querySelector("#gauntletCanvas"); const ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); const colors=["#0E7C86","#277449","#B37A1E","#9B2D2D"]; for(let i=0;i<8;i++){{ctx.fillStyle=colors[i%4];ctx.globalAlpha=.16 + i*.035;ctx.fillRect(70+i*86,62,62,210);ctx.globalAlpha=1;}} const bars=[["readiness",metrics.readiness,"#277449"],["risk",metrics.risk,"#9B2D2D"],["evidence",metrics.evidence,"#0E7C86"],["resilience",metrics.resilience,"#B37A1E"]]; bars.forEach(([name,val,color],i)=>{{ctx.fillStyle=color;ctx.fillRect(96+i*172,350-val*2.2,90,val*2.2);ctx.fillStyle="#23302C";ctx.font="13px ui-monospace, monospace";ctx.fillText(name,96+i*172,374);}}); ctx.strokeStyle=metrics.risk>66?"#9B2D2D":metrics.risk>42?"#B37A1E":"#277449"; ctx.lineWidth=7; ctx.strokeRect(54,44,708,250); }}
function renderGauntlet() {{ const incident={{...selectedIncident(), readinessShift:Number(readinessShift.value), riskShift:Number(riskShift.value), evidenceShift:Number(evidenceShift.value)}}; readinessOut.value=incident.readinessShift; riskOut.value=incident.riskShift; evidenceOut.value=incident.evidenceShift; const row=applyIncident(selectedDemo(), incident); const verdict=gauntletDecision(row.metrics); readinessMeter.textContent=row.metrics.readiness.toFixed(1); riskMeter.textContent=row.metrics.risk.toFixed(1); evidenceMeter.textContent=row.metrics.evidence.toFixed(1); decisionMeter.textContent=verdict; decisionMeter.className=verdict; sourceLine.textContent=row.theme + " · " + selectedDemo().page + " · replay " + incident.replayTarget + " · source " + row.signals.sourceStatus; draw(row.metrics); }}
demoSelect.addEventListener("change", renderGauntlet); incidentSelect.addEventListener("change", loadIncident); for (const id of ["readinessShift","riskShift","evidenceShift"]) document.querySelector("#"+id).addEventListener("input", renderGauntlet); demoSelect.value=demos[0].id; incidentSelect.value=incidents[0].id; loadIncident();
</script></body></html>"""
    write(ROOT / "cvpr-cross-theme-incident-gauntlet.html", page)


def main():
    demos = build_demos()
    rows = build_rows(demos)
    summary = summarize(demos, rows)
    build_package(demos, rows, summary)
    build_registry(demos, rows, summary)
    build_page(demos, rows, summary)
    print(f"wrote cvpr-cross-theme-incident-gauntlet.html: {summary['gauntletRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

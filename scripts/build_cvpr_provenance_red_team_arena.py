"""Build the CVPR provenance red-team arena demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-provenance-red-team-arena"
ANALYSIS = ROOT / "analysis/cvpr_provenance_red_team_arena"

SOURCES = {
    "backlog": ROOT / "analysis/cvpr_demo_build_backlog/registry.json",
    "provenance": ROOT / "analysis/cvpr_adversarial_provenance_bench/registry.json",
    "clinical": ROOT / "analysis/cvpr_clinical_shift_bench/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
}

ATTACKS = [
    {"id": "clean-audit", "title": "Clean audit", "attackShift": 0, "watermarkShift": 0, "unlearningShift": 0, "clinicalRiskShift": 0},
    {"id": "watermark-scrub", "title": "Watermark scrub", "attackShift": 28, "watermarkShift": -42, "unlearningShift": 8, "clinicalRiskShift": 6},
    {"id": "perturbation-camouflage", "title": "Perturbation camouflage", "attackShift": 47, "watermarkShift": -22, "unlearningShift": 16, "clinicalRiskShift": 12},
    {"id": "unlearning-leak", "title": "Unlearning leak", "attackShift": 35, "watermarkShift": -14, "unlearningShift": 44, "clinicalRiskShift": 16},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRedTeam(controls, stageEvidence, clinicalRisk = 20) {
  const attack = clamp(controls.attackStrength);
  const generated = clamp(controls.generationSource);
  const watermark = clamp(controls.watermarkVisibility);
  const unlearning = clamp(controls.unlearningProbe);
  const attackCoverage = clamp(stageEvidence.attack * 0.38 + attack * 0.22 + generated * 0.16 + (100 - watermark) * 0.14 + unlearning * 0.10);
  const provenanceConfidence = clamp(stageEvidence.provenance * 0.36 + generated * 0.26 + watermark * 0.28 + (100 - attack) * 0.10);
  const leakageRisk = clamp(unlearning * 0.42 + attack * 0.26 + generated * 0.16 + (100 - watermark) * 0.16);
  const evidence = clamp(stageEvidence.evidenceDepth * 0.42 + provenanceConfidence * 0.30 + attackCoverage * 0.18 + (100 - leakageRisk) * 0.10);
  const mediaRisk = clamp(attack * 0.34 + generated * 0.20 + leakageRisk * 0.28 + (100 - evidence) * 0.24);
  const deploymentRisk = clamp(mediaRisk * 0.68 + clinicalRisk * 0.32);
  const readiness = clamp(evidence * 0.38 + provenanceConfidence * 0.24 + (100 - deploymentRisk) * 0.24 + attackCoverage * 0.14);
  return { attackCoverage, provenanceConfidence, leakageRisk, evidence, mediaRisk, deploymentRisk, readiness };
}

export function applyAttack(record, attack) {
  const c = record.controls;
  return {
    attackStrength: clamp(c.attackStrength + attack.attackShift),
    generationSource: clamp(c.generationSource),
    watermarkVisibility: clamp(c.watermarkVisibility + attack.watermarkShift),
    unlearningProbe: clamp(c.unlearningProbe + attack.unlearningShift)
  };
}

export function arenaDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.evidence >= 50 && metrics.deploymentRisk <= 42 && metrics.leakageRisk <= 48) return "release";
  if (metrics.readiness >= 50 && metrics.evidence >= 42 && metrics.deploymentRisk <= 64) return "review";
  return "block";
}

export function evaluateAttack(record, attack, stageEvidence, clinicalRisk = 20) {
  const controls = applyAttack(record, attack);
  const metrics = scoreRedTeam(controls, stageEvidence, clinicalRisk + attack.clinicalRiskShift);
  return {
    id: `${record.id}/${attack.id}`,
    caseId: record.id,
    attackId: attack.id,
    caseTitle: record.title,
    attackTitle: attack.title,
    controls,
    metrics,
    evidenceDelta: metrics.evidence - record.metrics.evidence,
    riskDelta: metrics.deploymentRisk - record.metrics.risk,
    decision: arenaDecision(metrics)
  };
}

export function summarizeArena(records, attacks, stageEvidence, clinicalRisk = 20) {
  const rows = records.flatMap((record) => attacks.map((attack) => evaluateAttack(record, attack, stageEvidence, clinicalRisk)));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.readiness, 0) / rows.length;
  return {
    cases: records.length,
    attacks: attacks.length,
    arenaRows: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    minEvidence: Number(Math.min(...rows.map((row) => row.metrics.evidence)).toFixed(1)),
    maxDeploymentRisk: Number(Math.max(...rows.map((row) => row.metrics.deploymentRisk)).toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { attacks, clinicalRisk, provenanceRecords, redTeamRows, stageEvidence, summary } from "../src/fixtures.js";
import { applyAttack, arenaDecision, evaluateAttack, scoreRedTeam, summarizeArena } from "../src/core.js";

const base = provenanceRecords[0];
const scrub = attacks.find((attack) => attack.id === "watermark-scrub");
const shifted = applyAttack(base, scrub);
assert.ok(shifted.attackStrength > base.controls.attackStrength);
assert.ok(shifted.watermarkVisibility < base.controls.watermarkVisibility);

const clean = scoreRedTeam(base.controls, stageEvidence, clinicalRisk);
const attacked = evaluateAttack(base, scrub, stageEvidence, clinicalRisk);
assert.ok(attacked.metrics.deploymentRisk > clean.deploymentRisk);
assert.ok(attacked.metrics.evidence < clean.evidence);
assert.match(arenaDecision(attacked.metrics), /^(release|review|block)$/);

const derived = summarizeArena(provenanceRecords, attacks, stageEvidence, clinicalRisk);
assert.equal(derived.cases, 4);
assert.equal(derived.attacks, 4);
assert.equal(derived.arenaRows, 16);
assert.equal(redTeamRows.length, 16);
assert.equal(summary.backlogGoal, "Provenance red-team arena");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 8);
assert.ok(summary.review + summary.block > 0);
assert.ok(summary.maxDeploymentRisk >= 40);
assert.equal(
  summary.status,
  summary.backlogTasksCovered === 3 &&
  summary.cases === 4 &&
  summary.attacks === 4 &&
  summary.arenaRows === 16 &&
  summary.gpuBackedCases === 8 &&
  new Set(summary.proPlusJobs).size === 2 &&
  summary.review + summary.block > 0 &&
  summary.maxDeploymentRisk >= 50 &&
  summary.minEvidence >= 54
    ? "release"
    : "inspect"
);
console.log("ok cvpr-provenance-red-team-arena:", summary.arenaRows, "arena rows");
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


def score(controls, stage_evidence, clinical_risk):
    attack = clamp(controls["attackStrength"])
    generated = clamp(controls["generationSource"])
    watermark = clamp(controls["watermarkVisibility"])
    unlearning = clamp(controls["unlearningProbe"])
    coverage = clamp(stage_evidence["attack"] * 0.38 + attack * 0.22 + generated * 0.16 + (100 - watermark) * 0.14 + unlearning * 0.10)
    confidence = clamp(stage_evidence["provenance"] * 0.36 + generated * 0.26 + watermark * 0.28 + (100 - attack) * 0.10)
    leakage = clamp(unlearning * 0.42 + attack * 0.26 + generated * 0.16 + (100 - watermark) * 0.16)
    evidence = clamp(stage_evidence["evidenceDepth"] * 0.42 + confidence * 0.30 + coverage * 0.18 + (100 - leakage) * 0.10)
    media_risk = clamp(attack * 0.34 + generated * 0.20 + leakage * 0.28 + (100 - evidence) * 0.24)
    deployment_risk = clamp(media_risk * 0.68 + clinical_risk * 0.32)
    readiness = clamp(evidence * 0.38 + confidence * 0.24 + (100 - deployment_risk) * 0.24 + coverage * 0.14)
    return {
        "attackCoverage": round(coverage, 1),
        "provenanceConfidence": round(confidence, 1),
        "leakageRisk": round(leakage, 1),
        "evidence": round(evidence, 1),
        "mediaRisk": round(media_risk, 1),
        "deploymentRisk": round(deployment_risk, 1),
        "readiness": round(readiness, 1),
    }


def apply_attack(record, attack):
    c = record["controls"]
    return {
        "attackStrength": clamp(c["attackStrength"] + attack["attackShift"]),
        "generationSource": clamp(c["generationSource"]),
        "watermarkVisibility": clamp(c["watermarkVisibility"] + attack["watermarkShift"]),
        "unlearningProbe": clamp(c["unlearningProbe"] + attack["unlearningShift"]),
    }


def decide(metrics):
    if metrics["readiness"] >= 62 and metrics["evidence"] >= 50 and metrics["deploymentRisk"] <= 42 and metrics["leakageRisk"] <= 48:
        return "release"
    if metrics["readiness"] >= 50 and metrics["evidence"] >= 42 and metrics["deploymentRisk"] <= 64:
        return "review"
    return "block"


def build_rows(data, clinical_risk):
    rows = []
    for record in data["provenance"]["records"]:
        for attack in ATTACKS:
            controls = apply_attack(record, attack)
            metrics = score(controls, data["provenance"]["stageEvidence"], clinical_risk + attack["clinicalRiskShift"])
            rows.append(
                {
                    "id": f"{record['id']}/{attack['id']}",
                    "caseId": record["id"],
                    "caseTitle": record["title"],
                    "attackId": attack["id"],
                    "attackTitle": attack["title"],
                    "controls": controls,
                    "metrics": metrics,
                    "evidenceDelta": round(metrics["evidence"] - record["metrics"]["evidence"], 1),
                    "riskDelta": round(metrics["deploymentRisk"] - record["metrics"]["risk"], 1),
                    "decision": decide(metrics),
                    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
                    "runtimeEvidence": record["preferredRuntime"],
                    "gpuProvenance": record["gpuProvenance"],
                }
            )
    return rows


def summarize(data, rows, clinical_risk):
    backlog_tasks = [task for task in data["backlog"]["backlogTasks"] if task["goal"] == "Provenance red-team arena"]
    replay_rows = [row for row in data["replay"]["replayRows"] if row["jobId"] in {"adversarial-provenance", "clinical-shift"}]
    summary = {
        "demo": "cvpr-provenance-red-team-arena",
        "status": "release",
        "backlogGoal": "Provenance red-team arena",
        "backlogTasksCovered": len(backlog_tasks),
        "theme": "The frontier - new senses and new duties",
        "systems": ["adversarial-provenance-gate", "medical-vision-validation"],
        "benches": ["cvpr-adversarial-provenance-bench", "cvpr-clinical-shift-bench"],
        "cases": data["provenance"]["summary"]["cases"],
        "attacks": len(ATTACKS),
        "arenaRows": len(rows),
        "release": len([row for row in rows if row["decision"] == "release"]),
        "review": len([row for row in rows if row["decision"] == "review"]),
        "block": len([row for row in rows if row["decision"] == "block"]),
        "gpuBackedCases": data["provenance"]["summary"]["cachedRealCases"] + data["clinical"]["summary"]["cachedRealCases"],
        "clinicalResidualRisk": clinical_risk,
        "minEvidence": min(row["metrics"]["evidence"] for row in rows),
        "maxDeploymentRisk": max(row["metrics"]["deploymentRisk"] for row in rows),
        "avgReadiness": round(sum(row["metrics"]["readiness"] for row in rows) / len(rows), 1),
        "proPlusJobs": [row["jobId"] for row in replay_rows],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["backlogTasksCovered"] == 3
        and summary["cases"] == 4
        and summary["attacks"] == 4
        and summary["arenaRows"] == 16
        and summary["gpuBackedCases"] == 8
        and set(summary["proPlusJobs"]) == {"adversarial-provenance", "clinical-shift"}
        and summary["review"] + summary["block"] > 0
        and summary["maxDeploymentRisk"] >= 50
        and summary["minEvidence"] >= 54
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(data, summary, rows, clinical_risk):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const provenanceRecords = " + json.dumps(data["provenance"]["records"], indent=2) + ";\n"
        "export const attacks = " + json.dumps(ATTACKS, indent=2) + ";\n"
        "export const stageEvidence = " + json.dumps(data["provenance"]["stageEvidence"], indent=2) + ";\n"
        "export const clinicalRisk = " + json.dumps(clinical_risk) + ";\n"
        "export const redTeamRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Provenance Red-Team Arena\n\nReplayable watermark, perturbation, and unlearning attacks over Pro+ adversarial provenance evidence with clinical deployment risk context.\n")


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "attacks": ATTACKS,
                "redTeamRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(data, summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["arenaRows"]),
        ("Release", summary["release"]),
        ("Review", summary["review"]),
        ("Block", summary["block"]),
        ("Pro+ cases", summary["gpuBackedCases"]),
        ("Min evidence", summary["minEvidence"]),
        ("Max risk", summary["maxDeploymentRisk"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['caseTitle'])}</td><td>{esc(row['attackTitle'])}</td><td>{row['metrics']['attackCoverage']}</td><td>{row['metrics']['provenanceConfidence']}</td><td>{row['metrics']['leakageRisk']}</td><td>{row['metrics']['evidence']}</td><td>{row['metrics']['deploymentRisk']}</td><td>{row['riskDelta']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Provenance Red-Team Arena</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.arena{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px;overflow-x:auto}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{background:#fff;border:1px solid var(--line);border-radius:6px;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1050px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.release{{color:var(--good);font-weight:700}}.review{{color:var(--warn);font-weight:700}}.block,.inspect{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.arena{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · implemented roadmap demo</div><h1>Provenance Red-Team Arena</h1><p>Replayable watermark scrub, perturbation camouflage, and unlearning-leak attacks over Pro+ adversarial provenance evidence, with clinical deployment risk attached.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-build-backlog.html">build backlog</a><a href="cvpr-next-demo-roadmap.html">roadmap</a><a href="cvpr-adversarial-provenance-bench.html">provenance bench</a><a href="cvpr-clinical-shift-bench.html">clinical bench</a><a href="analysis/cvpr_provenance_red_team_arena/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="arena"><aside class="panel controls"><label>case<select id="case"></select></label><label>attack<select id="attack"></select></label><label>attack strength<input id="attackStrength" type="range" min="0" max="100"></label><output id="attackOut"></output><label>watermark visibility<input id="watermarkVisibility" type="range" min="0" max="100"></label><output id="watermarkOut"></output><label>unlearning probe<input id="unlearningProbe" type="range" min="0" max="100"></label><output id="unlearningOut"></output><code id="source"></code></aside><section class="panel"><canvas id="chart" width="820" height="390" aria-label="provenance red team chart"></canvas><div class="meters"><div><b id="coverage">0</b><span>coverage</span></div><div><b id="confidence">0</b><span>confidence</span></div><div><b id="leakage">0</b><span>leakage</span></div><div><b id="risk">0</b><span>risk</span></div><div><b id="decision">-</b><span>decision</span></div></div></section></section><section class="panel"><h2>Red-Team Matrix</h2><table><thead><tr><th>Case</th><th>Attack</th><th>Coverage</th><th>Confidence</th><th>Leakage</th><th>Evidence</th><th>Deploy risk</th><th>Risk delta</th><th>Decision</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · backlog tasks covered: {summary['backlogTasksCovered']} · Pro+ jobs: {esc(', '.join(summary['proPlusJobs']))}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_provenance_red_team_arena.py · tested package under source-code/learning/cvpr-provenance-red-team-arena</div></footer>
<script type="module">
import {{ applyAttack, arenaDecision, scoreRedTeam }} from "./source-code/learning/cvpr-provenance-red-team-arena/src/core.js";
const records={json.dumps(data['provenance']['records'])}; const attacks={json.dumps(ATTACKS)}; const stageEvidence={json.dumps(data['provenance']['stageEvidence'])}; const clinicalRisk={json.dumps(summary['clinicalResidualRisk'])};
const caseSelect=document.querySelector("#case"); const attackSelect=document.querySelector("#attack");
for (const row of records) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; caseSelect.append(option); }}
for (const row of attacks) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; attackSelect.append(option); }}
const ids=["attackStrength","watermarkVisibility","unlearningProbe"]; const outs={{attackStrength:"attackOut",watermarkVisibility:"watermarkOut",unlearningProbe:"unlearningOut"}};
function selectedRecord() {{ return records.find((row)=>row.id===caseSelect.value)||records[0]; }}
function selectedAttack() {{ return attacks.find((row)=>row.id===attackSelect.value)||attacks[0]; }}
function loadAttack() {{ const controls=applyAttack(selectedRecord(), selectedAttack()); ids.forEach((key)=>document.querySelector("#"+key).value=controls[key]); renderArena(); }}
function draw(metrics, controls) {{ const canvas=document.querySelector("#chart"); const ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#fff"; ctx.fillRect(84,70,260,180); ctx.strokeStyle=metrics.deploymentRisk>64?"#9B2D2D":metrics.deploymentRisk>42?"#B37A1E":"#277449"; ctx.lineWidth=6; ctx.strokeRect(84,70,260,180); for(let i=0;i<24;i++){{ctx.fillStyle=i%3===0?"#9B2D2D":"#0E7C86"; ctx.globalAlpha=.35; ctx.fillRect(430+(i*37)%260,78+(i*53)%170,12,12);}} ctx.globalAlpha=1; const bars=[["evidence",metrics.evidence,"#277449"],["leakage",metrics.leakageRisk,"#B37A1E"],["risk",metrics.deploymentRisk,"#9B2D2D"]]; bars.forEach(([name,val,color],i)=>{{ctx.fillStyle=color;ctx.fillRect(112+i*190,350-val*2.0,78,val*2.0);ctx.fillStyle="#23302C";ctx.font="13px ui-monospace, monospace";ctx.fillText(name,112+i*190,374);}}); ctx.fillStyle="#23302C"; ctx.fillText(`attack ${{controls.attackStrength}} · watermark ${{controls.watermarkVisibility}} · unlearning ${{controls.unlearningProbe}}`,76,34); }}
function renderArena() {{ const base=selectedRecord(); const controls={{...base.controls, attackStrength:Number(attackStrength.value), watermarkVisibility:Number(watermarkVisibility.value), unlearningProbe:Number(unlearningProbe.value)}}; ids.forEach((key)=>document.querySelector("#"+outs[key]).value=controls[key]); const metrics=scoreRedTeam(controls, stageEvidence, clinicalRisk + selectedAttack().clinicalRiskShift); const verdict=arenaDecision(metrics); coverage.textContent=metrics.attackCoverage.toFixed(1); confidence.textContent=metrics.provenanceConfidence.toFixed(1); leakage.textContent=metrics.leakageRisk.toFixed(1); risk.textContent=metrics.deploymentRisk.toFixed(1); decision.textContent=verdict; decision.className=verdict; source.textContent=base.gpuProvenance.sourceBench + " · " + base.gpuProvenance.runtime; draw(metrics, controls); }}
caseSelect.addEventListener("change", loadAttack); attackSelect.addEventListener("change", loadAttack); ids.forEach((key)=>document.querySelector("#"+key).addEventListener("input", renderArena)); caseSelect.value=records[0].id; attackSelect.value=attacks[0].id; loadAttack();
</script></body></html>"""
    write(ROOT / "cvpr-provenance-red-team-arena.html", page)


def main():
    data = load_input()
    clinical_risk = data["clinical"]["summary"]["maxResidualRisk"]
    rows = build_rows(data, clinical_risk)
    summary = summarize(data, rows, clinical_risk)
    build_package(data, summary, rows, clinical_risk)
    build_registry(summary, rows)
    build_page(data, summary, rows)
    print(f"wrote cvpr-provenance-red-team-arena.html: {summary['arenaRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

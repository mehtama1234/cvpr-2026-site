"""Build the CVPR embodied control repo drill demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FORGE = ROOT / "analysis/cvpr_paper_repo_demo_forge/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_embodied_control_repo_drill"
BASE = ROOT / "source-code/learning/cvpr-embodied-control-repo-drill"

SCENARIOS = [
    {
        "id": "town-transfer-rain",
        "title": "Town transfer in rain",
        "paperIndex": 0,
        "domainShift": 90,
        "occlusion": 72,
        "latency": 46,
        "memoryLoss": 26,
        "coordinationLoad": 34,
        "rewardSparsity": 44,
        "operatorAction": "route to uncertainty-aware shadow driving before release",
    },
    {
        "id": "visual-skill-zero-shot",
        "title": "Zero-shot visual skill",
        "paperIndex": 1,
        "domainShift": 78,
        "occlusion": 88,
        "latency": 50,
        "memoryLoss": 40,
        "coordinationLoad": 20,
        "rewardSparsity": 95,
        "operatorAction": "stress saliency maps against distractors before promotion",
    },
    {
        "id": "bimanual-handover",
        "title": "Bimanual handover",
        "paperIndex": 2,
        "domainShift": 58,
        "occlusion": 52,
        "latency": 68,
        "memoryLoss": 38,
        "coordinationLoad": 96,
        "rewardSparsity": 58,
        "operatorAction": "hold release until two-arm energy agreement is stable",
    },
    {
        "id": "curriculum-drift",
        "title": "Curriculum drift",
        "paperIndex": 3,
        "domainShift": 68,
        "occlusion": 32,
        "latency": 26,
        "memoryLoss": 58,
        "coordinationLoad": 18,
        "rewardSparsity": 98,
        "operatorAction": "re-mine examples after every policy checkpoint",
    },
    {
        "id": "gui-history-trap",
        "title": "GUI history trap",
        "paperIndex": 4,
        "domainShift": 36,
        "occlusion": 22,
        "latency": 44,
        "memoryLoss": 98,
        "coordinationLoad": 30,
        "rewardSparsity": 70,
        "operatorAction": "require history-state replay before accepting action",
    },
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreDrill(scenario, controls = {}) {
  const domainShift = clamp(controls.domainShift ?? scenario.domainShift);
  const occlusion = clamp(controls.occlusion ?? scenario.occlusion);
  const latency = clamp(controls.latency ?? scenario.latency);
  const memoryLoss = clamp(controls.memoryLoss ?? scenario.memoryLoss);
  const coordinationLoad = clamp(controls.coordinationLoad ?? scenario.coordinationLoad);
  const rewardSparsity = clamp(controls.rewardSparsity ?? scenario.rewardSparsity);
  const perceptionStress = clamp(occlusion * 0.46 + domainShift * 0.36 + memoryLoss * 0.18);
  const actionStress = clamp(coordinationLoad * 0.42 + latency * 0.26 + rewardSparsity * 0.20 + domainShift * 0.12);
  const transferRisk = clamp(domainShift * 0.34 + occlusion * 0.16 + latency * 0.12 + memoryLoss * 0.16 + coordinationLoad * 0.10 + rewardSparsity * 0.12);
  const monitorNeed = clamp(perceptionStress * 0.30 + actionStress * 0.24 + memoryLoss * 0.22 + rewardSparsity * 0.14 + latency * 0.10);
  const readiness = clamp(100 - transferRisk * 0.48 - monitorNeed * 0.28 - Math.max(0, actionStress - 70) * 0.24);
  return {
    domainShift,
    occlusion,
    latency,
    memoryLoss,
    coordinationLoad,
    rewardSparsity,
    perceptionStress: Number(perceptionStress.toFixed(1)),
    actionStress: Number(actionStress.toFixed(1)),
    transferRisk: Number(transferRisk.toFixed(1)),
    monitorNeed: Number(monitorNeed.toFixed(1)),
    readiness: Number(readiness.toFixed(1))
  };
}

export function drillDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.transferRisk <= 45 && metrics.monitorNeed <= 56) return "promote";
  if (metrics.readiness >= 44 && metrics.transferRisk <= 68) return "shadow";
  return "hold";
}

export function evaluateScenario(scenario, paper, controls = {}) {
  const metrics = scoreDrill(scenario, controls);
  return {
    id: scenario.id,
    title: scenario.title,
    paperTitle: paper.title,
    repo: paper.repo,
    tags: paper.tags,
    metrics,
    decision: drillDecision(metrics),
    operatorAction: scenario.operatorAction
  };
}

export function summarizeDrill(rows) {
  return {
    scenarios: rows.length,
    promote: rows.filter((row) => row.decision === "promote").length,
    shadow: rows.filter((row) => row.decision === "shadow").length,
    hold: rows.filter((row) => row.decision === "hold").length,
    maxTransferRisk: Number(Math.max(...rows.map((row) => row.metrics.transferRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1)),
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { drillRows, papers, scenarios, summary } from "../src/fixtures.js";
import { drillDecision, evaluateScenario, scoreDrill, summarizeDrill } from "../src/core.js";

assert.equal(papers.length, 5);
assert.equal(scenarios.length, 5);
assert.equal(drillRows.length, 5);
assert.ok(papers.every((paper) => paper.repo.startsWith("http")));

const rain = scenarios.find((scenario) => scenario.id === "town-transfer-rain");
const rainScore = scoreDrill(rain);
assert.ok(rainScore.transferRisk >= 55);
assert.match(drillDecision(rainScore), /^(promote|shadow|hold)$/);

const safer = scoreDrill(rain, { domainShift: 20, occlusion: 20, latency: 10, memoryLoss: 10, coordinationLoad: 10, rewardSparsity: 10 });
assert.ok(safer.readiness > rainScore.readiness);
assert.ok(safer.transferRisk < rainScore.transferRisk);

const gui = evaluateScenario(scenarios.find((scenario) => scenario.id === "gui-history-trap"), papers[4]);
assert.equal(gui.paperTitle, "HiconAgent: History Context-aware Policy Optimization for GUI Agents");
assert.ok(gui.metrics.monitorNeed > 45);

const derived = summarizeDrill(drillRows);
assert.equal(derived.scenarios, 5);
assert.equal(derived.repoBackedRows, 5);
assert.equal(summary.demo, "cvpr-embodied-control-repo-drill");
assert.equal(summary.theme, "Using vision to act in the world");
assert.equal(summary.repoPapers, 5);
assert.ok(summary.hold + summary.shadow >= 3);
assert.equal(summary.status, "ready");
console.log("ok cvpr-embodied-control-repo-drill:", summary.scenarios, "scenarios");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_embodied_blueprint():
    data = json.loads(FORGE.read_text(encoding="utf-8"))
    for row in data["blueprintRows"]:
        if row["theme"] == "embodied":
            return row
    raise RuntimeError("embodied blueprint missing from paper repo forge")


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def score(scenario):
    domain = clamp(scenario["domainShift"])
    occlusion = clamp(scenario["occlusion"])
    latency = clamp(scenario["latency"])
    memory = clamp(scenario["memoryLoss"])
    coordination = clamp(scenario["coordinationLoad"])
    reward = clamp(scenario["rewardSparsity"])
    perception = clamp(occlusion * 0.46 + domain * 0.36 + memory * 0.18)
    action = clamp(coordination * 0.42 + latency * 0.26 + reward * 0.20 + domain * 0.12)
    transfer = clamp(domain * 0.34 + occlusion * 0.16 + latency * 0.12 + memory * 0.16 + coordination * 0.10 + reward * 0.12)
    monitor = clamp(perception * 0.30 + action * 0.24 + memory * 0.22 + reward * 0.14 + latency * 0.10)
    readiness = clamp(100 - transfer * 0.48 - monitor * 0.28 - max(0, action - 70) * 0.24)
    return {
        "domainShift": int(domain),
        "occlusion": int(occlusion),
        "latency": int(latency),
        "memoryLoss": int(memory),
        "coordinationLoad": int(coordination),
        "rewardSparsity": int(reward),
        "perceptionStress": round(perception, 1),
        "actionStress": round(action, 1),
        "transferRisk": round(transfer, 1),
        "monitorNeed": round(monitor, 1),
        "readiness": round(readiness, 1),
    }


def decide(metrics):
    if metrics["readiness"] >= 62 and metrics["transferRisk"] <= 45 and metrics["monitorNeed"] <= 56:
        return "promote"
    if metrics["readiness"] >= 44 and metrics["transferRisk"] <= 68:
        return "shadow"
    return "hold"


def build_rows(blueprint):
    papers = blueprint["seedPapers"]
    rows = []
    for scenario in SCENARIOS:
        paper = papers[scenario["paperIndex"]]
        metrics = score(scenario)
        rows.append(
            {
                "id": scenario["id"],
                "title": scenario["title"],
                "paperTitle": paper["title"],
                "repo": paper["repo"],
                "tags": paper["tags"],
                "paperProblem": paper["problem"],
                "metrics": metrics,
                "decision": decide(metrics),
                "operatorAction": scenario["operatorAction"],
            }
        )
    return rows


def summarize(blueprint, rows):
    return {
        "demo": "cvpr-embodied-control-repo-drill",
        "status": "ready",
        "theme": blueprint["themeName"],
        "sourceForge": "cvpr-paper-repo-demo-forge.html",
        "system": "driving-vla-release-gate",
        "repoPapers": len(blueprint["seedPapers"]),
        "scenarios": len(rows),
        "promote": len([row for row in rows if row["decision"] == "promote"]),
        "shadow": len([row for row in rows if row["decision"] == "shadow"]),
        "hold": len([row for row in rows if row["decision"] == "hold"]),
        "maxTransferRisk": max(row["metrics"]["transferRisk"] for row in rows),
        "minReadiness": min(row["metrics"]["readiness"] for row in rows),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(blueprint, rows, summary):
    papers = blueprint["seedPapers"]
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const papers = " + json.dumps(papers, indent=2) + ";\n"
        "export const scenarios = " + json.dumps(SCENARIOS, indent=2) + ";\n"
        "export const drillRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Embodied Control Repo Drill\n\nInteractive policy-risk drill built from repo-backed embodied CVPR papers.\n")


def build_registry(blueprint, rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "sourceBlueprint": blueprint, "scenarios": SCENARIOS, "drillRows": rows}, indent=2) + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Repo papers", summary["repoPapers"]),
        ("Scenarios", summary["scenarios"]),
        ("Shadow", summary["shadow"]),
        ("Hold", summary["hold"]),
        ("Max risk", summary["maxTransferRisk"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows_html = ""
    for row in rows:
        tags = "".join(f"<span>{esc(tag)}</span>" for tag in row["tags"][:5])
        rows_html += f"""<article class="case" data-case="{esc(row['id'])}">
<div class="meta">{esc(row['decision'])} / {esc(row['id'])}</div><h2>{esc(row['title'])}</h2>
<p>{esc(row['paperProblem'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a>
<div class="tags">{tags}</div>
<div class="meters"><label>transfer risk <b>{esc(row['metrics']['transferRisk'])}</b><meter min="0" max="100" value="{esc(row['metrics']['transferRisk'])}"></meter></label><label>monitor need <b>{esc(row['metrics']['monitorNeed'])}</b><meter min="0" max="100" value="{esc(row['metrics']['monitorNeed'])}"></meter></label><label>readiness <b>{esc(row['metrics']['readiness'])}</b><meter min="0" max="100" value="{esc(row['metrics']['readiness'])}"></meter></label></div>
<code>{esc(row['operatorAction'])}</code></article>"""
    data_json = json.dumps(rows)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Embodied Control Repo Drill</title>
<style>:root{{--ink:#121616;--paper:#F5F6F2;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0D6A6F;--warn:#B14E18;--hold:#8F2332;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#172325;color:#EFF7F2;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8EDBD0}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:104ch;color:#C9D8D1}}nav a{{color:#C9F0E8;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats,.workbench{{display:grid;gap:10px}}.stats{{grid-template-columns:repeat(6,1fr);margin:20px 0}}.stat,.panel,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.workbench{{grid-template-columns:360px 1fr;align-items:start;margin:0 0 16px}}.panel{{padding:16px;position:sticky;top:12px}}.panel h2,.case h2{{font-size:22px;margin:4px 0 8px}}.controls label{{display:block;font-size:12px;color:var(--muted);margin:12px 0}}input[type=range]{{width:100%;accent-color:var(--accent)}}.readout{{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:12px}}.readout div{{border:1px solid var(--line);border-radius:6px;padding:9px}}.readout b{{display:block;font-size:22px}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}}.case{{padding:16px}}.case p{{color:#26312D}}.tags{{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}}.tags span{{font-size:11px;border:1px solid var(--line);border-radius:999px;padding:3px 7px;color:#3D4742}}.meters label{{display:block;font-size:12px;color:var(--muted);margin:8px 0}}meter{{width:100%;height:12px}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:980px){{.stats,.workbench,.grid{{grid-template-columns:1fr}}.panel{{position:static}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - embodied repo demo</div><h1>Embodied Control Repo Drill</h1><p>Paper-grounded drill for the undercovered embodied theme: safe driving transfer, visual reinforcement learning, bimanual manipulation, curriculum mining, and GUI-agent history failures.</p><nav><a href="index.html">all demos</a><a href="cvpr-paper-repo-demo-forge.html">paper repo forge</a><a href="driving-vla-release-gate.html">driving VLA gate</a><a href="analysis/cvpr_embodied_control_repo_drill/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="workbench"><aside class="panel"><div class="meta">interactive drill</div><h2>Failure pressure</h2><div class="controls" id="controls"></div><div class="readout" id="readout"></div><code>scoreDrill -> drillDecision -> full-stack validation gate</code></aside><section class="grid">{rows_html}</section></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_embodied_control_repo_drill.py - package: source-code/learning/cvpr-embodied-control-repo-drill</div></footer>
<script type="module">
const rows = {data_json};
const defaults = {{domainShift:55, occlusion:44, latency:31, memoryLoss:41, coordinationLoad:42, rewardSparsity:62}};
const labels = {{domainShift:"domain shift", occlusion:"occlusion", latency:"latency", memoryLoss:"memory loss", coordinationLoad:"coordination load", rewardSparsity:"reward sparsity"}};
const controls = document.querySelector("#controls");
const readout = document.querySelector("#readout");
function clamp(v){{return Math.max(0, Math.min(100, Number(v)));}}
function score(base, c){{
  const domainShift=clamp(c.domainShift), occlusion=clamp(c.occlusion), latency=clamp(c.latency), memoryLoss=clamp(c.memoryLoss), coordinationLoad=clamp(c.coordinationLoad), rewardSparsity=clamp(c.rewardSparsity);
  const perceptionStress=clamp(occlusion*.46+domainShift*.36+memoryLoss*.18);
  const actionStress=clamp(coordinationLoad*.42+latency*.26+rewardSparsity*.20+domainShift*.12);
  const transferRisk=clamp(domainShift*.34+occlusion*.16+latency*.12+memoryLoss*.16+coordinationLoad*.10+rewardSparsity*.12);
  const monitorNeed=clamp(perceptionStress*.30+actionStress*.24+memoryLoss*.22+rewardSparsity*.14+latency*.10);
  const readiness=clamp(100-transferRisk*.48-monitorNeed*.28-Math.max(0,actionStress-70)*.24);
  return {{transferRisk, monitorNeed, readiness, perceptionStress, actionStress}};
}}
function decision(m){{return m.readiness>=62&&m.transferRisk<=45&&m.monitorNeed<=56?"promote":m.readiness>=44&&m.transferRisk<=68?"shadow":"hold";}}
Object.entries(labels).forEach(([key,label])=>{{const el=document.createElement("label");el.innerHTML=`${{label}} <b id="${{key}}Value">${{defaults[key]}}</b><input type="range" min="0" max="100" value="${{defaults[key]}}" data-key="${{key}}">`;controls.appendChild(el);}});
function current(){{return Object.fromEntries([...document.querySelectorAll("input[type=range]")].map(input=>[input.dataset.key, Number(input.value)]));}}
function render(){{const c=current();Object.keys(c).forEach(k=>document.querySelector(`#${{k}}Value`).textContent=c[k]);const base=rows[0];const m=score(base,c);readout.innerHTML=`<div><span>decision</span><b>${{decision(m)}}</b></div><div><span>transfer</span><b>${{m.transferRisk.toFixed(1)}}</b></div><div><span>monitor</span><b>${{m.monitorNeed.toFixed(1)}}</b></div><div><span>readiness</span><b>${{m.readiness.toFixed(1)}}</b></div>`;}}
controls.addEventListener("input", render);render();
</script></body></html>"""
    write(ROOT / "cvpr-embodied-control-repo-drill.html", page)


def main():
    blueprint = load_embodied_blueprint()
    rows = build_rows(blueprint)
    summary = summarize(blueprint, rows)
    build_package(blueprint, rows, summary)
    build_registry(blueprint, rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-embodied-control-repo-drill.html: {summary['scenarios']} scenarios, {summary['repoPapers']} repo papers, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR efficient learning repo governor demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FORGE = ROOT / "analysis/cvpr_paper_repo_demo_forge/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_efficient_learning_repo_governor"
BASE = ROOT / "source-code/learning/cvpr-efficient-learning-repo-governor"

CASES = [
    {"id": "token-redundancy-audit", "title": "Token redundancy audit", "paperIndex": 0, "tokenBudget": 42, "pruneRatio": 62, "edgeMemory": 58, "domainShift": 18, "clientDrift": 12, "adaptBudget": 20, "operatorAction": "keep sparse tokens only when saliency coverage remains above release floor"},
    {"id": "class-specific-edge-vit", "title": "Class-specific edge ViT", "paperIndex": 1, "tokenBudget": 36, "pruneRatio": 74, "edgeMemory": 86, "domainShift": 22, "clientDrift": 18, "adaptBudget": 24, "operatorAction": "ship class-specific pruning only with per-class recall canaries"},
    {"id": "forward-only-tta", "title": "Forward-only TTA", "paperIndex": 2, "tokenBudget": 54, "pruneRatio": 38, "edgeMemory": 62, "domainShift": 78, "clientDrift": 34, "adaptBudget": 30, "operatorAction": "prefer forward-only prompts when backprop memory would break edge runtime"},
    {"id": "continual-architecture-router", "title": "Continual architecture router", "paperIndex": 3, "tokenBudget": 60, "pruneRatio": 34, "edgeMemory": 48, "domainShift": 55, "clientDrift": 82, "adaptBudget": 52, "operatorAction": "split reuse, adapt, new, and skip paths before granting continual updates"},
    {"id": "federated-wild-tta", "title": "Federated wild TTA", "paperIndex": 4, "tokenBudget": 50, "pruneRatio": 28, "edgeMemory": 55, "domainShift": 72, "clientDrift": 92, "adaptBudget": 44, "operatorAction": "gate client updates by uncertainty and rollback noisy adaptation rounds"},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGovernor(row, controls = {}) {
  const tokenBudget = clamp(controls.tokenBudget ?? row.tokenBudget);
  const pruneRatio = clamp(controls.pruneRatio ?? row.pruneRatio);
  const edgeMemory = clamp(controls.edgeMemory ?? row.edgeMemory);
  const domainShift = clamp(controls.domainShift ?? row.domainShift);
  const clientDrift = clamp(controls.clientDrift ?? row.clientDrift);
  const adaptBudget = clamp(controls.adaptBudget ?? row.adaptBudget);
  const latencyGain = clamp(pruneRatio * 0.44 + (100 - tokenBudget) * 0.32 + edgeMemory * 0.24);
  const accuracyRisk = clamp(pruneRatio * 0.34 + (100 - tokenBudget) * 0.28 + domainShift * 0.18 + clientDrift * 0.12 - adaptBudget * 0.10);
  const adaptationRisk = clamp(domainShift * 0.30 + clientDrift * 0.36 + (100 - adaptBudget) * 0.18 + pruneRatio * 0.10 + edgeMemory * 0.06);
  const servingCost = clamp(100 - latencyGain * 0.55 - pruneRatio * 0.18 + edgeMemory * 0.22 + adaptBudget * 0.10);
  const readiness = clamp(latencyGain * 0.24 + (100 - accuracyRisk) * 0.34 + (100 - adaptationRisk) * 0.26 + (100 - servingCost) * 0.16);
  return {
    tokenBudget,
    pruneRatio,
    edgeMemory,
    domainShift,
    clientDrift,
    adaptBudget,
    latencyGain: Number(latencyGain.toFixed(1)),
    accuracyRisk: Number(accuracyRisk.toFixed(1)),
    adaptationRisk: Number(adaptationRisk.toFixed(1)),
    servingCost: Number(servingCost.toFixed(1)),
    readiness: Number(readiness.toFixed(1))
  };
}

export function governorDecision(metrics) {
  if (metrics.readiness >= 66 && metrics.accuracyRisk <= 38 && metrics.adaptationRisk <= 45) return "promote";
  if (metrics.readiness >= 50 && metrics.accuracyRisk <= 62 && metrics.adaptationRisk <= 70) return "canary";
  return "hold";
}

export function evaluateCase(row, paper, controls = {}) {
  const metrics = scoreGovernor(row, controls);
  return {
    id: row.id,
    title: row.title,
    paperTitle: paper.title,
    repo: paper.repo,
    tags: paper.tags,
    metrics,
    decision: governorDecision(metrics),
    operatorAction: row.operatorAction
  };
}

export function summarizeGovernor(rows) {
  return {
    cases: rows.length,
    promote: rows.filter((row) => row.decision === "promote").length,
    canary: rows.filter((row) => row.decision === "canary").length,
    hold: rows.filter((row) => row.decision === "hold").length,
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length,
    maxAccuracyRisk: Number(Math.max(...rows.map((row) => row.metrics.accuracyRisk)).toFixed(1)),
    maxAdaptationRisk: Number(Math.max(...rows.map((row) => row.metrics.adaptationRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1))
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { cases, governorRows, papers, summary } from "../src/fixtures.js";
import { evaluateCase, governorDecision, scoreGovernor, summarizeGovernor } from "../src/core.js";

assert.equal(papers.length, 5);
assert.equal(cases.length, 5);
assert.equal(governorRows.length, 5);
assert.ok(papers.every((paper) => paper.repo.startsWith("http")));

const edge = cases.find((row) => row.id === "class-specific-edge-vit");
const base = scoreGovernor(edge);
assert.ok(base.latencyGain > 60);
assert.ok(base.accuracyRisk > 45);
assert.match(governorDecision(base), /^(promote|canary|hold)$/);

const safer = scoreGovernor(edge, { tokenBudget: 70, pruneRatio: 30, edgeMemory: 60, domainShift: 10, clientDrift: 10, adaptBudget: 60 });
assert.ok(safer.accuracyRisk < base.accuracyRisk);
assert.ok(safer.readiness > base.readiness);

const federated = evaluateCase(cases.find((row) => row.id === "federated-wild-tta"), papers[4]);
assert.equal(federated.paperTitle, "Towards Stable Federated Continual Test-Time Adaptation in Wild World");
assert.ok(federated.metrics.adaptationRisk > 55);

const derived = summarizeGovernor(governorRows);
assert.equal(derived.cases, 5);
assert.equal(derived.repoBackedRows, 5);
assert.equal(summary.demo, "cvpr-efficient-learning-repo-governor");
assert.equal(summary.theme, "Learning more from less, and not breaking");
assert.equal(summary.repoPapers, 5);
assert.ok(summary.canary + summary.hold >= 3);
assert.equal(summary.status, "ready");
console.log("ok cvpr-efficient-learning-repo-governor:", summary.cases, "cases");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_learning_blueprint():
    data = json.loads(FORGE.read_text(encoding="utf-8"))
    for row in data["blueprintRows"]:
        if row["theme"] == "learning":
            return row
    raise RuntimeError("learning blueprint missing from paper repo forge")


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def score(case):
    token = clamp(case["tokenBudget"])
    prune = clamp(case["pruneRatio"])
    edge = clamp(case["edgeMemory"])
    shift = clamp(case["domainShift"])
    drift = clamp(case["clientDrift"])
    adapt = clamp(case["adaptBudget"])
    gain = clamp(prune * 0.44 + (100 - token) * 0.32 + edge * 0.24)
    accuracy = clamp(prune * 0.34 + (100 - token) * 0.28 + shift * 0.18 + drift * 0.12 - adapt * 0.10)
    adaptation = clamp(shift * 0.30 + drift * 0.36 + (100 - adapt) * 0.18 + prune * 0.10 + edge * 0.06)
    serving = clamp(100 - gain * 0.55 - prune * 0.18 + edge * 0.22 + adapt * 0.10)
    readiness = clamp(gain * 0.24 + (100 - accuracy) * 0.34 + (100 - adaptation) * 0.26 + (100 - serving) * 0.16)
    return {
        "tokenBudget": int(token),
        "pruneRatio": int(prune),
        "edgeMemory": int(edge),
        "domainShift": int(shift),
        "clientDrift": int(drift),
        "adaptBudget": int(adapt),
        "latencyGain": round(gain, 1),
        "accuracyRisk": round(accuracy, 1),
        "adaptationRisk": round(adaptation, 1),
        "servingCost": round(serving, 1),
        "readiness": round(readiness, 1),
    }


def decide(metrics):
    if metrics["readiness"] >= 66 and metrics["accuracyRisk"] <= 38 and metrics["adaptationRisk"] <= 45:
        return "promote"
    if metrics["readiness"] >= 50 and metrics["accuracyRisk"] <= 62 and metrics["adaptationRisk"] <= 70:
        return "canary"
    return "hold"


def build_rows(blueprint):
    rows = []
    papers = blueprint["seedPapers"]
    for case in CASES:
        paper = papers[case["paperIndex"]]
        metrics = score(case)
        rows.append(
            {
                "id": case["id"],
                "title": case["title"],
                "paperTitle": paper["title"],
                "repo": paper["repo"],
                "tags": paper["tags"],
                "paperProblem": paper["problem"],
                "metrics": metrics,
                "decision": decide(metrics),
                "operatorAction": case["operatorAction"],
            }
        )
    return rows


def summarize(blueprint, rows):
    return {
        "demo": "cvpr-efficient-learning-repo-governor",
        "status": "ready",
        "theme": blueprint["themeName"],
        "sourceForge": "cvpr-paper-repo-demo-forge.html",
        "system": "efficient-vision-serving",
        "repoPapers": len(blueprint["seedPapers"]),
        "cases": len(rows),
        "promote": len([row for row in rows if row["decision"] == "promote"]),
        "canary": len([row for row in rows if row["decision"] == "canary"]),
        "hold": len([row for row in rows if row["decision"] == "hold"]),
        "maxAccuracyRisk": max(row["metrics"]["accuracyRisk"] for row in rows),
        "maxAdaptationRisk": max(row["metrics"]["adaptationRisk"] for row in rows),
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
        "export const cases = " + json.dumps(CASES, indent=2) + ";\n"
        "export const governorRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Efficient Learning Repo Governor\n\nCost/readiness governor built from repo-backed efficient-learning CVPR papers.\n")


def build_registry(blueprint, rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "sourceBlueprint": blueprint, "cases": CASES, "governorRows": rows}, indent=2) + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Repo papers", summary["repoPapers"]),
        ("Cases", summary["cases"]),
        ("Canary", summary["canary"]),
        ("Hold", summary["hold"]),
        ("Adapt risk", summary["maxAdaptationRisk"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows_html = ""
    for row in rows:
        tags = "".join(f"<span>{esc(tag)}</span>" for tag in row["tags"][:5])
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / {esc(row['id'])}</div><h2>{esc(row['title'])}</h2><p>{esc(row['paperProblem'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><div class="tags">{tags}</div><div class="meters"><label>latency gain <b>{esc(row['metrics']['latencyGain'])}</b><meter min="0" max="100" value="{esc(row['metrics']['latencyGain'])}"></meter></label><label>accuracy risk <b>{esc(row['metrics']['accuracyRisk'])}</b><meter min="0" max="100" value="{esc(row['metrics']['accuracyRisk'])}"></meter></label><label>adaptation risk <b>{esc(row['metrics']['adaptationRisk'])}</b><meter min="0" max="100" value="{esc(row['metrics']['adaptationRisk'])}"></meter></label></div><code>{esc(row['operatorAction'])}</code></article>"""
    data_json = json.dumps(rows)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Efficient Learning Repo Governor</title>
<style>:root{{--ink:#111615;--paper:#F5F7F1;--panel:#fff;--line:#D8DED2;--muted:#5F675F;--accent:#2E6A42;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#18231F;color:#F0F7EF;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8D39D}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:104ch;color:#CBD7CD}}nav a{{color:#D5F0D0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats,.workbench{{display:grid;gap:10px}}.stats{{grid-template-columns:repeat(6,1fr);margin:20px 0}}.stat,.panel,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.workbench{{grid-template-columns:360px 1fr;align-items:start;margin:0 0 16px}}.panel{{padding:16px;position:sticky;top:12px}}.panel h2,.case h2{{font-size:22px;margin:4px 0 8px}}.controls label{{display:block;font-size:12px;color:var(--muted);margin:12px 0}}input[type=range]{{width:100%;accent-color:var(--accent)}}.readout{{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:12px}}.readout div{{border:1px solid var(--line);border-radius:6px;padding:9px}}.readout b{{display:block;font-size:22px}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}}.case{{padding:16px}}.case p{{color:#26312D}}.tags{{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}}.tags span{{font-size:11px;border:1px solid var(--line);border-radius:999px;padding:3px 7px;color:#3D4742}}.meters label{{display:block;font-size:12px;color:var(--muted);margin:8px 0}}meter{{width:100%;height:12px}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:980px){{.stats,.workbench,.grid{{grid-template-columns:1fr}}.panel{{position:static}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - efficient learning repo demo</div><h1>Efficient Learning Repo Governor</h1><p>Paper-grounded governor for token sparsity, edge pruning, forward-only adaptation, continual architecture routing, and federated continual test-time adaptation.</p><nav><a href="index.html">all demos</a><a href="cvpr-paper-repo-demo-forge.html">paper repo forge</a><a href="efficient-vision-serving.html">efficient serving system</a><a href="analysis/cvpr_efficient_learning_repo_governor/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="workbench"><aside class="panel"><div class="meta">interactive governor</div><h2>Serving pressure</h2><div class="controls" id="controls"></div><div class="readout" id="readout"></div><code>scoreGovernor -> governorDecision -> full-stack validation gate</code></aside><section class="grid">{rows_html}</section></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_efficient_learning_repo_governor.py - package: source-code/learning/cvpr-efficient-learning-repo-governor</div></footer>
<script type="module">
const rows = {data_json};
const defaults = {{tokenBudget:48, pruneRatio:56, edgeMemory:68, domainShift:48, clientDrift:52, adaptBudget:38}};
const labels = {{tokenBudget:"token budget", pruneRatio:"prune ratio", edgeMemory:"edge memory pressure", domainShift:"domain shift", clientDrift:"client drift", adaptBudget:"adaptation budget"}};
const controls = document.querySelector("#controls"), readout = document.querySelector("#readout");
function clamp(v){{return Math.max(0, Math.min(100, Number(v)));}}
function score(c){{const tokenBudget=clamp(c.tokenBudget),pruneRatio=clamp(c.pruneRatio),edgeMemory=clamp(c.edgeMemory),domainShift=clamp(c.domainShift),clientDrift=clamp(c.clientDrift),adaptBudget=clamp(c.adaptBudget);const latencyGain=clamp(pruneRatio*.44+(100-tokenBudget)*.32+edgeMemory*.24);const accuracyRisk=clamp(pruneRatio*.34+(100-tokenBudget)*.28+domainShift*.18+clientDrift*.12-adaptBudget*.10);const adaptationRisk=clamp(domainShift*.30+clientDrift*.36+(100-adaptBudget)*.18+pruneRatio*.10+edgeMemory*.06);const servingCost=clamp(100-latencyGain*.55-pruneRatio*.18+edgeMemory*.22+adaptBudget*.10);const readiness=clamp(latencyGain*.24+(100-accuracyRisk)*.34+(100-adaptationRisk)*.26+(100-servingCost)*.16);return {{latencyGain,accuracyRisk,adaptationRisk,servingCost,readiness}};}}
function decision(m){{return m.readiness>=66&&m.accuracyRisk<=38&&m.adaptationRisk<=45?"promote":m.readiness>=50&&m.accuracyRisk<=62&&m.adaptationRisk<=70?"canary":"hold";}}
Object.entries(labels).forEach(([key,label])=>{{const el=document.createElement("label");el.innerHTML=`${{label}} <b id="${{key}}Value">${{defaults[key]}}</b><input type="range" min="0" max="100" value="${{defaults[key]}}" data-key="${{key}}">`;controls.appendChild(el);}});
function current(){{return Object.fromEntries([...document.querySelectorAll("input[type=range]")].map(input=>[input.dataset.key, Number(input.value)]));}}
function render(){{const c=current();Object.keys(c).forEach(k=>document.querySelector(`#${{k}}Value`).textContent=c[k]);const m=score(c);readout.innerHTML=`<div><span>decision</span><b>${{decision(m)}}</b></div><div><span>latency gain</span><b>${{m.latencyGain.toFixed(1)}}</b></div><div><span>accuracy risk</span><b>${{m.accuracyRisk.toFixed(1)}}</b></div><div><span>adapt risk</span><b>${{m.adaptationRisk.toFixed(1)}}</b></div>`;}}
controls.addEventListener("input", render);render(); console.debug("governor rows", rows.length);
</script></body></html>"""
    write(ROOT / "cvpr-efficient-learning-repo-governor.html", page)


def main():
    blueprint = load_learning_blueprint()
    rows = build_rows(blueprint)
    summary = summarize(blueprint, rows)
    build_package(blueprint, rows, summary)
    build_registry(blueprint, rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-efficient-learning-repo-governor.html: {summary['cases']} cases, {summary['repoPapers']} repo papers, status {summary['status']}")


if __name__ == "__main__":
    main()

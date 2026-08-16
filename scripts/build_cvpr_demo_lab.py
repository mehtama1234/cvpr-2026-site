"""Build the interactive CVPR demo lab.

The lab has two layers:
  1. Eight broad-theme flagship demos.
  2. One interactive stage demo for every measured CVPR systems-lab stage.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-demo-lab"
ANALYSIS = ROOT / "analysis/cvpr_demos"
SYSTEMS_REGISTRY = ROOT / "analysis/cvpr_systems/registry.json"

FLAGSHIP_DEMOS = [
    ("open-vocab-grounding", "Perception", "Open-vocabulary vision", "Open-vocabulary region grounding", "query specificity", 72, "localization", "A text query becomes usable only when confidence and localization agree."),
    ("metric-depth-uncertainty", "3D", "3D reconstruction and novel views", "Metric depth uncertainty", "camera baseline", 46, "geometry", "Depth becomes reliable when parallax is strong enough to beat scale ambiguity."),
    ("temporal-world-rollout", "Video", "Video generation and world models", "Temporal consistency rollout", "temporal memory", 64, "temporal", "A world model is useful only if identity drift stays below the rollout horizon."),
    ("controlled-editing", "Generation", "Controllable generation", "Controllable editing preservation", "edit strength", 42, "editing", "An edit succeeds when the requested change rises faster than identity damage."),
    ("vlm-grounding-check", "VLM", "Vision-language reasoning", "Grounded reasoning vs hallucination", "visual evidence", 68, "grounding", "Reasoning must be gated by visible evidence before language priors dominate."),
    ("driving-action-gate", "Embodied", "Driving and vision-language-action", "Driving VLA action gate", "risk tolerance", 12, "safety", "A vision-language action is only released after scene grounding and risk pass."),
    ("efficient-token-serving", "Learning", "Efficient vision", "Token pruning and serving tradeoff", "tokens kept", 58, "efficiency", "Efficiency is deployable only while the retained tokens preserve task evidence."),
    ("provenance-attack-gate", "Frontier and trust", "Adversarial robustness", "Provenance and adversarial gate", "attack strength", 28, "trust", "Trust requires detecting synthetic origin, edits, and adversarial perturbations."),
]


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def slug_label(slug):
    return slug.replace("-", " ")


def visual_mode(cluster):
    return {
        "Open-vocabulary vision": "localization",
        "Vision-language reasoning": "grounding",
        "Efficient vision": "efficiency",
        "3D reconstruction and novel views": "geometry",
        "Gaussian Splatting": "splats",
        "Video generation and world models": "temporal",
        "Controllable generation": "editing",
        "Image restoration": "restoration",
        "Vision for science and medicine": "medical",
        "Driving and vision-language-action": "safety",
        "Adversarial robustness": "trust",
    }.get(cluster, "stage")


def flagship_demos():
    return [
        {
            "slug": slug,
            "kind": "flagship",
            "theme": theme,
            "cluster": cluster,
            "title": title,
            "label": label,
            "value": value,
            "mode": mode,
            "visualMode": mode,
            "system": "cvpr-demo-lab",
            "sourceStage": None,
            "rule": rule,
        }
        for slug, theme, cluster, title, label, value, mode, rule in FLAGSHIP_DEMOS
    ]


def stage_demos():
    registry = json.loads(SYSTEMS_REGISTRY.read_text(encoding="utf-8"))
    demos = []
    for record in registry["records"]:
        result = json.loads(Path(record["result"]).read_text(encoding="utf-8"))
        demos.append(
            {
                "slug": f"stage-{result['system']}-{result['stage']}",
                "kind": "stage",
                "theme": result["theme"],
                "cluster": result["cluster"],
                "title": result["stageTitle"],
                "label": slug_label(result["stage"]),
                "value": int(round(result["gateScore"])),
                "mode": "stage",
                "visualMode": visual_mode(result["cluster"]),
                "system": result["system"],
                "sourceStage": result["stage"],
                "sourcePage": f"{result['system']}.html",
                "baseScore": result["gateScore"],
                "baseRisk": result["residualRiskPct"],
                "evidenceDepth": result["evidenceDepthScore"],
                "rule": result["reusableRule"],
            }
        )
    return demos


def all_demos():
    return flagship_demos() + stage_demos()


CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, value));
}

export function pct(value) {
  return Number((100 * value).toFixed(1));
}

export function scoreDemo(demo, value = demo.value) {
  const v = clamp(Number(value));
  if (demo.kind === "stage") {
    const base = Number(demo.baseScore ?? v);
    const riskBase = Number(demo.baseRisk ?? 25);
    const evidence = Number(demo.evidenceDepth ?? 60);
    return {
      primary: clamp((base * 0.62) + (v * 0.38)),
      secondary: clamp((evidence * 0.72) + (v * 0.28)),
      risk: clamp((riskBase * 0.68) + ((100 - v) * 0.18))
    };
  }
  if (demo.mode === "geometry") return { primary: clamp(70 + v * 0.30), secondary: clamp(84 + v * 0.10), risk: clamp(16 - v * 0.08) };
  if (demo.mode === "localization") return { primary: clamp(78 + v * 0.20), secondary: clamp(82 + v * 0.20), risk: clamp(8 + (100 - v) * 0.04) };
  if (demo.mode === "temporal") return { primary: clamp(72 + v * 0.22), secondary: clamp(84 + v * 0.16), risk: clamp(8 + (100 - v) * 0.06) };
  if (demo.mode === "editing") return { primary: clamp(70 + v * 0.18), secondary: clamp(76 + (100 - v) * 0.12), risk: clamp(12 + v * 0.18) };
  if (demo.mode === "grounding") return { primary: clamp(70 + v * 0.20), secondary: clamp(72 + v * 0.20), risk: clamp(10 + (100 - v) * 0.08) };
  if (demo.mode === "safety") return { primary: clamp(92 - v * 0.10), secondary: clamp(92 - v * 0.05), risk: clamp(6 + v * 0.06) };
  if (demo.mode === "efficiency") return { primary: clamp(78 + v * 0.12), secondary: clamp(78 + v * 0.18), risk: clamp(12 + (100 - v) * 0.06) };
  if (demo.mode === "trust") return { primary: clamp(92 - v * 0.05), secondary: clamp(90 + (100 - v) * 0.08), risk: clamp(6 + v * 0.10) };
  return { primary: v, secondary: clamp(92 - Math.abs(68 - v) * 0.7), risk: clamp(38 - v * 0.28) };
}

export function decision(metrics) {
  if (metrics.risk <= 22 && metrics.primary >= 62 && metrics.secondary >= 55) return "release";
  if (metrics.risk <= 35 && metrics.primary >= 50) return "review";
  return "block";
}

export function summarizeDemo(demo) {
  const metrics = scoreDemo(demo);
  return {
    id: demo.slug,
    kind: demo.kind,
    title: demo.title,
    theme: demo.theme,
    cluster: demo.cluster,
    system: demo.system,
    sourceStage: demo.sourceStage,
    visualMode: demo.visualMode,
    value: demo.value,
    metrics,
    decision: decision(metrics),
    reusableRule: demo.rule
  };
}

export function summarizeLab(demos) {
  const rows = demos.map(summarizeDemo);
  return {
    demos: rows.length,
    flagshipDemos: rows.filter((row) => row.kind === "flagship").length,
    stageDemos: rows.filter((row) => row.kind === "stage").length,
    themes: new Set(rows.map((row) => row.theme)).size,
    clusters: new Set(rows.map((row) => row.cluster)).size,
    systems: new Set(rows.filter((row) => row.kind === "stage").map((row) => row.system)).size,
    visualModes: new Set(demos.map((demo) => demo.visualMode)).size,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    rows
  };
}
"""


TEST = """import assert from "node:assert/strict";
import { demos } from "../src/fixtures.js";
import { pct, scoreDemo, decision, summarizeDemo, summarizeLab } from "../src/core.js";

assert.equal(pct(0.875), 87.5);
assert.ok(demos.length >= 41);
assert.equal(demos.filter((demo) => demo.kind === "flagship").length, 8);
assert.ok(demos.filter((demo) => demo.kind === "stage").length >= 33);

for (const demo of demos) {
  const metrics = scoreDemo(demo, demo.value);
  assert.ok(metrics.primary >= 0 && metrics.primary <= 100);
  assert.ok(metrics.secondary >= 0 && metrics.secondary <= 100);
  assert.ok(metrics.risk >= 0 && metrics.risk <= 100);
  assert.match(decision(metrics), /^(release|review|block)$/);
  const summary = summarizeDemo(demo);
  assert.equal(summary.id, demo.slug);
  assert.equal(summary.reusableRule, demo.rule);
}

const lab = summarizeLab(demos);
assert.ok(lab.demos >= 41);
assert.equal(lab.flagshipDemos, 8);
assert.ok(lab.stageDemos >= 33);
assert.ok(lab.themes >= 8);
assert.ok(lab.clusters >= 11);
assert.ok(lab.systems >= 11);
assert.ok(lab.visualModes >= 10);
assert.ok(lab.release + lab.review + lab.block === lab.demos);
console.log("ok cvpr-demo-lab:", lab.demos, "interactive demos", lab.stageDemos, "stage demos");
"""


def build_package(demos):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const demos = " + json.dumps(demos, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Demo Lab\n\nInteractive flagship and subtheme/stage demos across the CVPR map.\n")


def build_registry(demos):
    records = [
        {
            "id": demo["slug"],
            "kind": demo["kind"],
            "title": demo["title"],
            "theme": demo["theme"],
            "cluster": demo["cluster"],
            "system": demo["system"],
            "sourceStage": demo["sourceStage"],
            "visualMode": demo["visualMode"],
            "page": "cvpr-demo-lab.html",
            "core": str(BASE / "src/core.js"),
            "test": str(BASE / "tests/core.test.js"),
            "status": "interactive",
        }
        for demo in demos
    ]
    summary = {
        "totalDemos": len(records),
        "flagshipDemos": sum(1 for r in records if r["kind"] == "flagship"),
        "stageDemos": sum(1 for r in records if r["kind"] == "stage"),
        "themesCovered": len({r["theme"] for r in records}),
        "clustersCovered": len({r["cluster"] for r in records}),
        "systemsCovered": len({r["system"] for r in records if r["kind"] == "stage"}),
        "visualModes": len({r["visualMode"] for r in records}),
        "interactive": len(records),
        "incomplete": 0,
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "records": records}, indent=2) + "\n")


def demo_card(demo, idx):
    href = demo.get("sourcePage") or "cvpr-systems-coverage.html"
    return f"""<section class="demo {demo['kind']}" data-demo="{esc(demo['slug'])}">
  <div class="demo-head"><span>{idx:02d} · {esc(demo['kind'])} · {esc(demo['theme'])}</span><h2>{esc(demo['title'])}</h2></div>
  <canvas width="680" height="260" aria-label="{esc(demo['title'])} interactive visualization"></canvas>
  <div class="controls"><label>{esc(demo['label'])}<input type="range" min="0" max="100" value="{demo['value']}"></label><output>{demo['value']}</output></div>
  <div class="meters"><div><b class="primary">0</b><span>primary</span></div><div><b class="secondary">0</b><span>evidence</span></div><div><b class="risk">0</b><span>risk</span></div><div><b class="decision">-</b><span>decision</span></div></div>
  <p>{esc(demo['rule'])}</p><a href="{href}">{esc(demo['cluster'])}</a>
</section>"""


def build_page(demos):
    flagship = [demo_card(d, i + 1) for i, d in enumerate(demos) if d["kind"] == "flagship"]
    stages = [demo_card(d, i + 1) for i, d in enumerate(demos) if d["kind"] == "stage"]
    demos_json = json.dumps(demos)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Demo Lab</title>
<style>:root{{--ink:#0F1619;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--warn:#B37A1E;--bad:#9B2D2D;--good:#2F7A4F;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1140px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug{{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:84ch;color:#AEBABD}}nav a{{font-family:var(--mono);font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:12px}}.stat b{{display:block;font-size:25px}}.stat span,.demo-head span,.meters span{{font-family:var(--mono);font-size:11px;color:var(--muted)}}h2.band{{font-size:24px;margin:28px 0 8px}}.grid{{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:14px 0 34px}}.demo{{background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:8px;padding:14px}}.demo.stage{{border-left-color:#59656A}}.demo h2{{font-size:19px;margin:4px 0 10px}}canvas{{width:100%;height:auto;background:#F0F4F3;border:1px solid var(--line);border-radius:6px;display:block}}.controls{{display:grid;grid-template-columns:1fr 46px;gap:10px;align-items:center;margin:10px 0}}label{{font-family:var(--mono);font-size:12px;color:var(--muted)}}input{{width:100%;display:block;margin-top:5px}}output{{font-family:var(--mono);font-size:13px;text-align:right}}.meters{{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:10px 0}}.meters div{{border:1px solid var(--line);border-radius:6px;padding:8px;background:#fff}}.meters b{{display:block;font-size:20px}}.decision.release{{color:var(--good)}}.decision.review{{color:var(--warn)}}.decision.block{{color:var(--bad)}}.demo p{{font-size:14px;color:#23302C}}.demo a{{font-family:var(--mono);font-size:12px;color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:860px){{.grid,.stats{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 · interactive demo lab</div><h1>Manipulate the mechanisms behind the papers</h1><p>Eight flagship demos cover the broad themes; thirty-three stage demos cover every measured systems-lab subtheme. Each card has a live control, canvas, measured outputs, and release decision.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-arena.html">demo arena</a><a href="#flagship">flagship</a><a href="#stages">stage demos</a><a href="cvpr-systems-lab.html">systems lab</a><a href="analysis/cvpr_demos/registry.json">demo registry</a></nav></div></header><main class="wrap"><section class="stats"><div class="stat"><b>{len(demos)}</b><span>interactive demos</span></div><div class="stat"><b>8</b><span>flagship demos</span></div><div class="stat"><b>{len(stages)}</b><span>stage demos</span></div><div class="stat"><b>11</b><span>clusters covered</span></div></section><h2 class="band" id="flagship">Flagship Theme Demos</h2><section class="grid">{''.join(flagship)}</section><h2 class="band" id="stages">Subtheme And System-Stage Demos</h2><section class="grid">{''.join(stages)}</section></main><footer><div class="wrap">Generated by scripts/build_cvpr_demo_lab.py · tested logic in source-code/learning/cvpr-demo-lab</div></footer>
<script type="module">
const demos = {demos_json};
function clamp(value, lo = 0, hi = 100) {{ return Math.max(lo, Math.min(hi, value)); }}
function scoreDemo(demo, value) {{
 const v = clamp(Number(value));
 if (demo.kind === "stage") return {{ primary: clamp((demo.baseScore * .62) + (v * .38)), secondary: clamp((demo.evidenceDepth * .72) + (v * .28)), risk: clamp((demo.baseRisk * .68) + ((100 - v) * .18)) }};
 if (demo.mode === "geometry") return {{ primary: clamp(70 + v * .30), secondary: clamp(84 + v * .10), risk: clamp(16 - v * .08) }};
 if (demo.mode === "localization") return {{ primary: clamp(78 + v * .20), secondary: clamp(82 + v * .20), risk: clamp(8 + (100 - v) * .04) }};
 if (demo.mode === "temporal") return {{ primary: clamp(72 + v * .22), secondary: clamp(84 + v * .16), risk: clamp(8 + (100 - v) * .06) }};
 if (demo.mode === "editing") return {{ primary: clamp(70 + v * .18), secondary: clamp(76 + (100 - v) * .12), risk: clamp(12 + v * .18) }};
 if (demo.mode === "grounding") return {{ primary: clamp(70 + v * .20), secondary: clamp(72 + v * .20), risk: clamp(10 + (100 - v) * .08) }};
 if (demo.mode === "safety") return {{ primary: clamp(92 - v * .10), secondary: clamp(92 - v * .05), risk: clamp(6 + v * .06) }};
 if (demo.mode === "efficiency") return {{ primary: clamp(78 + v * .12), secondary: clamp(78 + v * .18), risk: clamp(12 + (100 - v) * .06) }};
 if (demo.mode === "trust") return {{ primary: clamp(92 - v * .05), secondary: clamp(90 + (100 - v) * .08), risk: clamp(6 + v * .10) }};
 return {{ primary: v, secondary: clamp(92 - Math.abs(68 - v) * .7), risk: clamp(38 - v * .28) }};
}}
function decision(m) {{ return m.risk <= 22 && m.primary >= 62 && m.secondary >= 55 ? "release" : m.risk <= 35 && m.primary >= 50 ? "review" : "block"; }}
function drawBase(ctx, c, demo, m, v) {{
 ctx.clearRect(0, 0, c.width, c.height); ctx.fillStyle = "#F0F4F3"; ctx.fillRect(0, 0, c.width, c.height);
 ctx.strokeStyle = "#D7DCD9"; ctx.lineWidth = 1;
 for (let x = 38; x < c.width; x += 76) {{ ctx.beginPath(); ctx.moveTo(x, 18); ctx.lineTo(x, 238); ctx.stroke(); }}
 ctx.fillStyle = "#23302C"; ctx.font = "15px system-ui"; ctx.fillText(demo.title.slice(0, 62), 24, 28);
 ctx.font = "12px monospace"; ctx.fillText(`control: ${{v}}`, 28, 226); ctx.fillText(`primary: ${{m.primary.toFixed(1)}}`, 160, 226); ctx.fillText(`evidence: ${{m.secondary.toFixed(1)}}`, 310, 226); ctx.fillText(`risk: ${{m.risk.toFixed(1)}}`, 500, 226);
}}
function drawLocalization(ctx, v, m) {{
 ctx.fillStyle = "#DCEBE8"; ctx.fillRect(42, 54, 590, 132);
 [["object",70,76,140,78],["part",252,92,90,52],["distractor",432,82,122,72]].forEach(([name,x,y,w,h],i) => {{ ctx.strokeStyle = i === 2 && v > 60 ? "#B37A1E" : "#0E7C86"; ctx.lineWidth = i === 0 ? 4 : 2; ctx.strokeRect(x,y,w,h); ctx.fillStyle = "#23302C"; ctx.font = "11px monospace"; ctx.fillText(name, x, y - 6); }});
}}
function drawGeometry(ctx, v, m) {{
 for (let i = 0; i < 9; i++) {{ const shade = 230 - i * 14; ctx.fillStyle = `rgb(${{shade}},${{shade + 8}},${{shade + 10}})`; ctx.fillRect(52 + i * 62, 60 + i * 6, 58, 130 - i * 7); }}
 ctx.strokeStyle = "#5B6E7D"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(70, 190); ctx.lineTo(70 + v * 4.8, 74); ctx.stroke(); ctx.fillStyle = "#5B6E7D"; ctx.fillText("baseline -> lower scale ambiguity", 84, 64);
}}
function drawSplats(ctx, v, m) {{
 for (let i = 0; i < 70; i++) {{ const x = 60 + (i * 47) % 540; const y = 74 + ((i * 31) % 100); const r = 3 + ((i + v) % 12) / 2; ctx.globalAlpha = .22 + m.secondary / 180; ctx.fillStyle = i % 3 ? "#4472C4" : "#0E7C86"; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); }}
 ctx.globalAlpha = 1; ctx.fillStyle = "#23302C"; ctx.fillText("soft 3D blobs render the scene", 60, 196);
}}
function drawTemporal(ctx, v, m) {{
 for (let i = 0; i < 6; i++) {{ ctx.fillStyle = "#FFFFFF"; ctx.fillRect(44 + i * 98, 58, 76, 92); ctx.strokeStyle = "#B23A7A"; ctx.strokeRect(44 + i * 98, 58, 76, 92); ctx.fillStyle = "#B23A7A"; ctx.beginPath(); ctx.arc(68 + i * 98 + i * (100 - v) / 22, 100 + Math.sin(i) * 14, 14, 0, Math.PI * 2); ctx.fill(); }}
 ctx.fillStyle = "#23302C"; ctx.fillText("identity drift grows when memory is weak", 52, 188);
}}
function drawEditing(ctx, v, m) {{
 ctx.fillStyle = "#FFFFFF"; ctx.fillRect(54, 58, 220, 126); ctx.fillRect(364, 58, 220, 126); ctx.fillStyle = "#9A5B13"; ctx.fillRect(82, 92, 110, 52); ctx.globalAlpha = v / 140; ctx.fillStyle = "#B37A1E"; ctx.fillRect(390, 78, 150, 88); ctx.globalAlpha = 1; ctx.strokeStyle = "#23302C"; ctx.strokeRect(54,58,220,126); ctx.strokeRect(364,58,220,126); ctx.fillText("before", 64, 202); ctx.fillText("edited output", 374, 202);
}}
function drawRestoration(ctx, v, m) {{
 for (let i = 0; i < 24; i++) {{ ctx.fillStyle = i % 2 ? "#BFC8C6" : "#FFFFFF"; ctx.fillRect(44 + i * 12, 64, 10, 116); }}
 ctx.fillStyle = "#FFFFFF"; ctx.fillRect(370, 64, 220, 116); ctx.strokeStyle = "#B37A1E"; ctx.strokeRect(370, 64, 220, 116); ctx.globalAlpha = (100 - v) / 100; ctx.fillStyle = "#59656A"; for (let i = 0; i < 42; i++) ctx.fillRect(382 + (i * 17) % 196, 72 + (i * 29) % 92, 5, 5); ctx.globalAlpha = 1; ctx.fillStyle = "#23302C"; ctx.fillText("degraded input", 52, 202); ctx.fillText("restored with fidelity gate", 378, 202);
}}
function drawMedical(ctx, v, m) {{
 ctx.strokeStyle = "#8E3B46"; ctx.lineWidth = 3; for (let i = 0; i < 7; i++) {{ ctx.beginPath(); ctx.ellipse(110 + i * 70, 122, 28 + i * 3, 44 - i * 2, i * .2, 0, Math.PI * 2); ctx.stroke(); }}
 ctx.fillStyle = m.risk > 24 ? "#9B2D2D" : "#2F7A4F"; ctx.fillRect(510, 70, 70, 92); ctx.fillStyle = "#23302C"; ctx.fillText("review queue", 502, 184);
}}
function drawSafety(ctx, v, m) {{
 ctx.strokeStyle = "#59656A"; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(160, 210); ctx.lineTo(285, 54); ctx.moveTo(420, 210); ctx.lineTo(318, 54); ctx.stroke(); ctx.fillStyle = "#C0392B"; ctx.fillRect(286, 150 - v * .45, 42, 72); ctx.fillStyle = m.risk > 35 ? "#9B2D2D" : "#2F7A4F"; ctx.fillRect(472, 86, 82, 42); ctx.fillStyle = "#23302C"; ctx.fillText("action gate", 476, 152);
}}
function drawEfficiency(ctx, v, m) {{
 for (let i = 0; i < 96; i++) {{ const keep = i < v * .96; ctx.fillStyle = keep ? "#6B8E23" : "#D7DCD9"; ctx.fillRect(48 + (i % 16) * 28, 58 + Math.floor(i / 16) * 22, 18, 14); }}
 ctx.fillStyle = "#23302C"; ctx.fillText("kept tokens vs removed visual compute", 52, 214);
}}
function drawTrust(ctx, v, m) {{
 ctx.fillStyle = "#FFFFFF"; ctx.fillRect(58, 58, 210, 126); ctx.fillStyle = "#7D3C98"; for (let i = 0; i < 36; i++) {{ ctx.globalAlpha = .15 + v / 160; ctx.fillRect(70 + (i * 31) % 180, 70 + (i * 17) % 96, 10, 10); }} ctx.globalAlpha = 1;
 ctx.strokeStyle = m.risk > 35 ? "#9B2D2D" : "#2F7A4F"; ctx.lineWidth = 5; ctx.strokeRect(380, 74, 170, 86); ctx.fillStyle = "#23302C"; ctx.fillText("provenance detector", 390, 184);
}}
function draw(section) {{
 const demo = demos.find((row) => row.slug === section.dataset.demo);
 const v = Number(section.querySelector("input").value);
 const m = scoreDemo(demo, v);
 const c = section.querySelector("canvas"), ctx = c.getContext("2d");
 drawBase(ctx, c, demo, m, v);
 const mode = demo.visualMode || demo.mode;
 if (mode === "geometry") drawGeometry(ctx, v, m);
 else if (mode === "splats") drawSplats(ctx, v, m);
 else if (mode === "temporal") drawTemporal(ctx, v, m);
 else if (mode === "editing") drawEditing(ctx, v, m);
 else if (mode === "restoration") drawRestoration(ctx, v, m);
 else if (mode === "medical") drawMedical(ctx, v, m);
 else if (mode === "safety") drawSafety(ctx, v, m);
 else if (mode === "efficiency") drawEfficiency(ctx, v, m);
 else if (mode === "trust") drawTrust(ctx, v, m);
 else drawLocalization(ctx, v, m);
 ctx.strokeStyle = m.risk > 35 ? "#9B2D2D" : "#2F7A4F"; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(36, 198); ctx.lineTo(36 + (m.secondary * 5.8), 198); ctx.stroke();
 const d = decision(m); section.querySelector("output").value = v;
 section.querySelector(".primary").textContent = m.primary.toFixed(1); section.querySelector(".secondary").textContent = m.secondary.toFixed(1); section.querySelector(".risk").textContent = m.risk.toFixed(1);
 const db = section.querySelector(".decision"); db.textContent = d; db.className = `decision ${{d}}`;
}}
document.querySelectorAll(".demo").forEach((section) => {{ section.querySelector("input").addEventListener("input", () => draw(section)); draw(section); }});
</script></body></html>"""
    write(ROOT / "cvpr-demo-lab.html", page)


def main():
    demos = all_demos()
    build_package(demos)
    build_registry(demos)
    build_page(demos)
    print(f"wrote cvpr-demo-lab.html: {len(demos)} interactive demos ({len(stage_demos())} stage demos)")


if __name__ == "__main__":
    main()

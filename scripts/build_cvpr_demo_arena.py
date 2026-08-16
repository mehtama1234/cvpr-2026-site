"""Build the CVPR Demo Arena.

The arena turns the demo lab into an evaluation surface: every interactive
demo is scored across deployment scenarios, ranked, and tied to failure modes.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-demo-arena"
ANALYSIS = ROOT / "analysis/cvpr_demo_arena"
DEMO_FIXTURES = ROOT / "source-code/learning/cvpr-demo-lab/src/fixtures.js"

SCENARIOS = [
    {
        "id": "baseline-readiness",
        "title": "Baseline readiness",
        "difficulty": 34,
        "brief": "Normal deployment pressure with balanced evidence, quality, and risk.",
        "pressures": {"trust": 0.16, "safety": 0.18, "medical": 0.15},
    },
    {
        "id": "long-tail-open-world",
        "title": "Long-tail open world",
        "difficulty": 61,
        "brief": "Rare categories, domain drift, ambiguous labels, and weak priors.",
        "pressures": {"localization": 0.34, "grounding": 0.23, "medical": 0.20, "trust": 0.18},
    },
    {
        "id": "noisy-restoration",
        "title": "Noisy sensor recovery",
        "difficulty": 58,
        "brief": "Blur, compression, low light, and downstream fidelity pressure.",
        "pressures": {"restoration": 0.36, "medical": 0.22, "localization": 0.16},
    },
    {
        "id": "temporal-rollout",
        "title": "Temporal rollout stress",
        "difficulty": 66,
        "brief": "Long-horizon identity, state, causality, and future-prediction stress.",
        "pressures": {"temporal": 0.38, "safety": 0.20, "grounding": 0.16},
    },
    {
        "id": "compute-constrained",
        "title": "Compute constrained serving",
        "difficulty": 54,
        "brief": "Latency, token budgets, quantization, and escalation routing.",
        "pressures": {"efficiency": 0.38, "grounding": 0.18, "splats": 0.14},
    },
    {
        "id": "clinical-shift",
        "title": "Clinical and scientific shift",
        "difficulty": 70,
        "brief": "Site, scanner, cohort, measurement, and expert-review pressure.",
        "pressures": {"medical": 0.42, "restoration": 0.20, "trust": 0.18},
    },
    {
        "id": "safety-critical-action",
        "title": "Safety-critical action",
        "difficulty": 76,
        "brief": "Closed-loop action under future risk and scene-grounding uncertainty.",
        "pressures": {"safety": 0.44, "temporal": 0.22, "grounding": 0.20, "trust": 0.16},
    },
    {
        "id": "adversarial-media",
        "title": "Adversarial media and provenance",
        "difficulty": 73,
        "brief": "Perturbations, generated media, watermarking, and unlearning leakage.",
        "pressures": {"trust": 0.44, "grounding": 0.20, "localization": 0.14, "editing": 0.16},
    },
]


CORE = """import { scoreDemo } from "../../cvpr-demo-lab/src/core.js";

export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, value));
}

export function scenarioPressure(demo, scenario) {
  const mode = demo.visualMode || demo.mode || "unknown";
  const explicit = scenario.pressures?.[mode];
  const kindPressure = demo.kind === "stage" ? 0.12 : 0.08;
  return explicit ?? kindPressure;
}

export function adjustedMetrics(demo, scenario, difficulty = scenario.difficulty) {
  const base = scoreDemo(demo, demo.value);
  const pressure = scenarioPressure(demo, scenario);
  const difficultyLoad = Number(difficulty) * pressure;
  const evidencePenalty = difficultyLoad * 0.52;
  const qualityPenalty = difficultyLoad * 0.46;
  const riskLift = difficultyLoad * 0.62;
  const readiness = clamp(
    base.primary * 0.38 + base.secondary * 0.34 + (100 - base.risk) * 0.28 - difficultyLoad * 0.58
  );
  return {
    primary: clamp(base.primary - qualityPenalty),
    evidence: clamp(base.secondary - evidencePenalty),
    risk: clamp(base.risk + riskLift),
    readiness,
    pressure: Number(pressure.toFixed(2)),
    difficulty: Number(difficulty)
  };
}

export function failureMode(demo, metrics) {
  const mode = demo.visualMode || demo.mode;
  if (metrics.risk >= 45) return `risk gate: ${mode} uncertainty is too high`;
  if (metrics.evidence < 45) return `evidence gap: ${mode} signal is too weak`;
  if (metrics.primary < 52) return `quality gap: ${mode} output is not stable enough`;
  if (metrics.readiness < 62) return `deployment gap: ${mode} needs review before release`;
  return `ready: ${mode} clears the scenario gate`;
}

export function arenaDecision(metrics) {
  if (metrics.readiness >= 72 && metrics.risk <= 30 && metrics.evidence >= 58) return "release";
  if (metrics.readiness >= 55 && metrics.risk <= 45) return "review";
  return "block";
}

export function evaluateDemo(demo, scenario, difficulty = scenario.difficulty) {
  const metrics = adjustedMetrics(demo, scenario, difficulty);
  return {
    id: `${scenario.id}:${demo.slug}`,
    scenario: scenario.id,
    demo: demo.slug,
    title: demo.title,
    kind: demo.kind,
    theme: demo.theme,
    cluster: demo.cluster,
    system: demo.system,
    sourceStage: demo.sourceStage,
    visualMode: demo.visualMode,
    readiness: metrics.readiness,
    metrics,
    decision: arenaDecision(metrics),
    failureMode: failureMode(demo, metrics),
    sourcePage: demo.sourcePage || "cvpr-demo-lab.html"
  };
}

export function rankScenario(demos, scenario, difficulty = scenario.difficulty) {
  return demos
    .map((demo) => evaluateDemo(demo, scenario, difficulty))
    .sort((a, b) => b.readiness - a.readiness || a.title.localeCompare(b.title));
}

export function clusterScenarioMatrix(demos, scenarios) {
  const clusters = [...new Set(demos.map((demo) => demo.cluster))].sort();
  return clusters.map((cluster) => {
    const clusterDemos = demos.filter((demo) => demo.cluster === cluster);
    const cells = scenarios.map((scenario) => {
      const rows = clusterDemos.map((demo) => evaluateDemo(demo, scenario));
      const readiness = rows.reduce((sum, row) => sum + row.readiness, 0) / rows.length;
      const risk = rows.reduce((sum, row) => sum + row.metrics.risk, 0) / rows.length;
      const releases = rows.filter((row) => row.decision === "release").length;
      const blocks = rows.filter((row) => row.decision === "block").length;
      const weakest = [...rows].sort((a, b) => a.readiness - b.readiness)[0];
      return {
        scenario: scenario.id,
        readiness: Number(readiness.toFixed(1)),
        risk: Number(risk.toFixed(1)),
        releaseRate: Number((releases / rows.length).toFixed(2)),
        blockRate: Number((blocks / rows.length).toFixed(2)),
        weakestDemo: weakest.demo,
        weakestTitle: weakest.title,
        failureMode: weakest.failureMode
      };
    });
    const averageReadiness = cells.reduce((sum, cell) => sum + cell.readiness, 0) / cells.length;
    const worstCell = [...cells].sort((a, b) => a.readiness - b.readiness)[0];
    return {
      cluster,
      demos: clusterDemos.length,
      visualMode: clusterDemos[0]?.visualMode,
      averageReadiness: Number(averageReadiness.toFixed(1)),
      worstScenario: worstCell.scenario,
      worstReadiness: worstCell.readiness,
      cells
    };
  });
}

export function recommendNextBuilds(demos, scenarios, limit = 8) {
  return clusterScenarioMatrix(demos, scenarios)
    .map((row) => {
      const worst = row.cells.find((cell) => cell.scenario === row.worstScenario);
      return {
        cluster: row.cluster,
        visualMode: row.visualMode,
        scenario: row.worstScenario,
        readiness: row.worstReadiness,
        averageReadiness: row.averageReadiness,
        nextBuild: worst.failureMode,
        weakestDemo: worst.weakestTitle
      };
    })
    .sort((a, b) => a.readiness - b.readiness || a.averageReadiness - b.averageReadiness)
    .slice(0, limit);
}

export function summarizeArena(demos, scenarios) {
  const evaluations = scenarios.flatMap((scenario) => rankScenario(demos, scenario));
  const decisions = evaluations.reduce((acc, row) => {
    acc[row.decision] = (acc[row.decision] || 0) + 1;
    return acc;
  }, {});
  return {
    demos: demos.length,
    scenarios: scenarios.length,
    pairings: evaluations.length,
    themes: new Set(demos.map((demo) => demo.theme)).size,
    clusters: new Set(demos.map((demo) => demo.cluster)).size,
    systems: new Set(demos.filter((demo) => demo.kind === "stage").map((demo) => demo.system)).size,
    visualModes: new Set(demos.map((demo) => demo.visualMode)).size,
    release: decisions.release || 0,
    review: decisions.review || 0,
    block: decisions.block || 0,
    leaders: scenarios.map((scenario) => rankScenario(demos, scenario)[0]),
    matrix: clusterScenarioMatrix(demos, scenarios),
    recommendations: recommendNextBuilds(demos, scenarios),
    evaluations
  };
}
"""


TEST = """import assert from "node:assert/strict";
import { demos } from "../../cvpr-demo-lab/src/fixtures.js";
import { scenarios } from "../src/scenarios.js";
import {
  adjustedMetrics,
  arenaDecision,
  evaluateDemo,
  clusterScenarioMatrix,
  recommendNextBuilds,
  rankScenario,
  scenarioPressure,
  summarizeArena
} from "../src/core.js";

assert.equal(scenarios.length, 8);
assert.ok(demos.length >= 41);

for (const scenario of scenarios) {
  const ranked = rankScenario(demos, scenario);
  assert.equal(ranked.length, demos.length);
  assert.ok(ranked[0].readiness >= ranked.at(-1).readiness);
  assert.match(ranked[0].decision, /^(release|review|block)$/);
}

for (const demo of demos) {
  for (const scenario of scenarios) {
    const pressure = scenarioPressure(demo, scenario);
    assert.ok(pressure >= 0.08 && pressure <= 0.44);
    const metrics = adjustedMetrics(demo, scenario);
    assert.ok(metrics.primary >= 0 && metrics.primary <= 100);
    assert.ok(metrics.evidence >= 0 && metrics.evidence <= 100);
    assert.ok(metrics.risk >= 0 && metrics.risk <= 100);
    assert.ok(metrics.readiness >= 0 && metrics.readiness <= 100);
    assert.match(arenaDecision(metrics), /^(release|review|block)$/);
    const row = evaluateDemo(demo, scenario);
    assert.equal(row.demo, demo.slug);
    assert.ok(row.failureMode.includes(demo.visualMode));
  }
}

const summary = summarizeArena(demos, scenarios);
assert.equal(summary.pairings, summary.demos * summary.scenarios);
assert.ok(summary.demos >= 41);
assert.equal(summary.scenarios, 8);
assert.ok(summary.clusters >= 11);
assert.ok(summary.systems >= 11);
assert.ok(summary.visualModes >= 11);
assert.equal(summary.leaders.length, scenarios.length);
assert.equal(summary.matrix.length, summary.clusters);
assert.ok(summary.matrix.every((row) => row.cells.length === scenarios.length));
assert.ok(summary.matrix.every((row) => row.averageReadiness >= 0 && row.averageReadiness <= 100));
assert.ok(summary.recommendations.length >= 8);
assert.ok(summary.recommendations[0].nextBuild.includes(":"));
assert.equal(summary.release + summary.review + summary.block, summary.pairings);

const matrix = clusterScenarioMatrix(demos, scenarios);
const recommendations = recommendNextBuilds(demos, scenarios, 5);
assert.equal(matrix.length, summary.clusters);
assert.equal(recommendations.length, 5);
assert.ok(recommendations[0].readiness <= recommendations.at(-1).readiness);
console.log("ok cvpr-demo-arena:", summary.demos, "demos x", summary.scenarios, "scenarios =", summary.pairings, "evaluations");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_demos():
    text = DEMO_FIXTURES.read_text(encoding="utf-8").strip()
    prefix = "export const demos = "
    if not text.startswith(prefix):
        raise RuntimeError("unexpected demo fixtures format")
    return json.loads(text[len(prefix):].rstrip(";"))


def scenario_pressure(demo, scenario):
    return scenario.get("pressures", {}).get(demo.get("visualMode"), 0.12 if demo["kind"] == "stage" else 0.08)


def score_demo(demo):
    v = float(demo["value"])
    if demo["kind"] == "stage":
        base = float(demo.get("baseScore", v))
        risk = float(demo.get("baseRisk", 25))
        evidence = float(demo.get("evidenceDepth", 60))
        return {
            "primary": max(0, min(100, base * 0.62 + v * 0.38)),
            "evidence": max(0, min(100, evidence * 0.72 + v * 0.28)),
            "risk": max(0, min(100, risk * 0.68 + (100 - v) * 0.18)),
        }
    mode = demo["mode"]
    if mode == "geometry":
        return {"primary": max(0, min(100, 70 + v * 0.30)), "evidence": max(0, min(100, 84 + v * 0.10)), "risk": max(0, min(100, 16 - v * 0.08))}
    if mode == "localization":
        return {"primary": max(0, min(100, 78 + v * 0.20)), "evidence": max(0, min(100, 82 + v * 0.20)), "risk": max(0, min(100, 8 + (100 - v) * 0.04))}
    if mode == "temporal":
        return {"primary": max(0, min(100, 72 + v * 0.22)), "evidence": max(0, min(100, 84 + v * 0.16)), "risk": max(0, min(100, 8 + (100 - v) * 0.06))}
    if mode == "editing":
        return {"primary": max(0, min(100, 70 + v * 0.18)), "evidence": max(0, min(100, 76 + (100 - v) * 0.12)), "risk": max(0, min(100, 12 + v * 0.18))}
    if mode == "grounding":
        return {"primary": max(0, min(100, 70 + v * 0.20)), "evidence": max(0, min(100, 72 + v * 0.20)), "risk": max(0, min(100, 10 + (100 - v) * 0.08))}
    if mode == "safety":
        return {"primary": max(0, min(100, 92 - v * 0.10)), "evidence": max(0, min(100, 92 - v * 0.05)), "risk": max(0, min(100, 6 + v * 0.06))}
    if mode == "efficiency":
        return {"primary": max(0, min(100, 78 + v * 0.12)), "evidence": max(0, min(100, 78 + v * 0.18)), "risk": max(0, min(100, 12 + (100 - v) * 0.06))}
    if mode == "trust":
        return {"primary": max(0, min(100, 92 - v * 0.05)), "evidence": max(0, min(100, 90 + (100 - v) * 0.08)), "risk": max(0, min(100, 6 + v * 0.10))}
    return {"primary": v, "evidence": max(0, min(100, 92 - abs(68 - v) * 0.7)), "risk": max(0, min(100, 38 - v * 0.28))}


def evaluate(demo, scenario):
    base = score_demo(demo)
    pressure = scenario_pressure(demo, scenario)
    load = scenario["difficulty"] * pressure
    risk = max(0, min(100, base["risk"] + load * 0.62))
    evidence = max(0, min(100, base["evidence"] - load * 0.52))
    primary = max(0, min(100, base["primary"] - load * 0.46))
    readiness = max(0, min(100, base["primary"] * 0.38 + base["evidence"] * 0.34 + (100 - base["risk"]) * 0.28 - load * 0.58))
    decision = "release" if readiness >= 72 and risk <= 30 and evidence >= 58 else "review" if readiness >= 55 and risk <= 45 else "block"
    mode = demo["visualMode"]
    if risk >= 45:
        failure = f"risk gate: {mode} uncertainty is too high"
    elif evidence < 45:
        failure = f"evidence gap: {mode} signal is too weak"
    elif primary < 52:
        failure = f"quality gap: {mode} output is not stable enough"
    elif readiness < 62:
        failure = f"deployment gap: {mode} needs review before release"
    else:
        failure = f"ready: {mode} clears the scenario gate"
    return {
        "scenario": scenario["id"],
        "demo": demo["slug"],
        "title": demo["title"],
        "kind": demo["kind"],
        "theme": demo["theme"],
        "cluster": demo["cluster"],
        "system": demo["system"],
        "sourceStage": demo.get("sourceStage"),
        "visualMode": mode,
        "readiness": round(readiness, 1),
        "primary": round(primary, 1),
        "evidence": round(evidence, 1),
        "risk": round(risk, 1),
        "decision": decision,
        "failureMode": failure,
        "sourcePage": demo.get("sourcePage") or "cvpr-demo-lab.html",
    }


def cluster_scenario_matrix(demos, evaluations):
    rows = []
    scenario_ids = [scenario["id"] for scenario in SCENARIOS]
    for cluster in sorted({demo["cluster"] for demo in demos}):
        cluster_demos = [demo for demo in demos if demo["cluster"] == cluster]
        cells = []
        for scenario_id in scenario_ids:
            scenario_rows = [row for row in evaluations if row["scenario"] == scenario_id and row["cluster"] == cluster]
            weakest = sorted(scenario_rows, key=lambda row: row["readiness"])[0]
            cells.append(
                {
                    "scenario": scenario_id,
                    "readiness": round(sum(row["readiness"] for row in scenario_rows) / len(scenario_rows), 1),
                    "risk": round(sum(row["risk"] for row in scenario_rows) / len(scenario_rows), 1),
                    "releaseRate": round(sum(1 for row in scenario_rows if row["decision"] == "release") / len(scenario_rows), 2),
                    "blockRate": round(sum(1 for row in scenario_rows if row["decision"] == "block") / len(scenario_rows), 2),
                    "weakestDemo": weakest["demo"],
                    "weakestTitle": weakest["title"],
                    "failureMode": weakest["failureMode"],
                }
            )
        worst = sorted(cells, key=lambda cell: cell["readiness"])[0]
        rows.append(
            {
                "cluster": cluster,
                "demos": len(cluster_demos),
                "visualMode": cluster_demos[0]["visualMode"],
                "averageReadiness": round(sum(cell["readiness"] for cell in cells) / len(cells), 1),
                "worstScenario": worst["scenario"],
                "worstReadiness": worst["readiness"],
                "cells": cells,
            }
        )
    return rows


def recommend_next_builds(matrix, limit=8):
    rows = []
    for row in matrix:
        worst = next(cell for cell in row["cells"] if cell["scenario"] == row["worstScenario"])
        rows.append(
            {
                "cluster": row["cluster"],
                "visualMode": row["visualMode"],
                "scenario": row["worstScenario"],
                "readiness": row["worstReadiness"],
                "averageReadiness": row["averageReadiness"],
                "nextBuild": worst["failureMode"],
                "weakestDemo": worst["weakestTitle"],
            }
        )
    return sorted(rows, key=lambda item: (item["readiness"], item["averageReadiness"]))[:limit]


def build_package():
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/scenarios.js", "export const scenarios = " + json.dumps(SCENARIOS, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Demo Arena\n\nScenario stress testing and readiness ranking for every CVPR demo lab card.\n")


def build_registry(demos):
    evaluations = [evaluate(demo, scenario) for scenario in SCENARIOS for demo in demos]
    matrix = cluster_scenario_matrix(demos, evaluations)
    recommendations = recommend_next_builds(matrix)
    leaders = []
    for scenario in SCENARIOS:
        rows = sorted((row for row in evaluations if row["scenario"] == scenario["id"]), key=lambda row: (-row["readiness"], row["title"]))
        leaders.append(rows[0])
    summary = {
        "demos": len(demos),
        "scenarios": len(SCENARIOS),
        "pairings": len(evaluations),
        "themesCovered": len({demo["theme"] for demo in demos}),
        "clustersCovered": len({demo["cluster"] for demo in demos}),
        "systemsCovered": len({demo["system"] for demo in demos if demo["kind"] == "stage"}),
        "visualModes": len({demo["visualMode"] for demo in demos}),
        "release": sum(1 for row in evaluations if row["decision"] == "release"),
        "review": sum(1 for row in evaluations if row["decision"] == "review"),
        "block": sum(1 for row in evaluations if row["decision"] == "block"),
    }
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "scenarios": SCENARIOS,
                "leaders": leaders,
                "matrix": matrix,
                "recommendations": recommendations,
                "evaluations": evaluations,
            },
            indent=2,
        )
        + "\n",
    )
    return summary, leaders, evaluations, matrix, recommendations


def build_page(demos, summary, leaders, evaluations, matrix, recommendations):
    demos_json = json.dumps(demos)
    scenarios_json = json.dumps(SCENARIOS)
    leader_cards = "".join(
        f"""<article class="card"><span>{esc(row['scenario'])}</span><h2>{esc(row['title'])}</h2><p>{esc(row['cluster'])}</p><b>{row['readiness']}</b><small>{esc(row['decision'])}</small></article>"""
        for row in leaders
    )
    failure_rows = "".join(
        f"""<tr><td>{esc(row['scenario'])}</td><td>{esc(row['title'])}</td><td>{esc(row['visualMode'])}</td><td>{esc(row['failureMode'])}</td><td>{row['readiness']}</td></tr>"""
        for row in sorted(evaluations, key=lambda row: (row["readiness"], -row["risk"]))[:18]
    )
    matrix_head = "".join(f"<th>{esc(scenario['id'])}</th>" for scenario in SCENARIOS)
    matrix_rows = "".join(
        "<tr>"
        f"<td><b>{esc(row['cluster'])}</b><br><small>{esc(row['visualMode'])} · {row['demos']} demos</small></td>"
        + "".join(
            f"""<td class="heat {'release' if cell['readiness'] >= 72 else 'review' if cell['readiness'] >= 55 else 'block'}"><b>{cell['readiness']}</b><small>{esc(cell['weakestTitle'])}</small></td>"""
            for cell in row["cells"]
        )
        + f"<td>{row['averageReadiness']}</td><td>{esc(row['worstScenario'])}</td></tr>"
        for row in matrix
    )
    recommendation_rows = "".join(
        f"""<tr><td>{idx}</td><td>{esc(row['cluster'])}</td><td>{esc(row['scenario'])}</td><td>{row['readiness']}</td><td>{esc(row['weakestDemo'])}</td><td>{esc(row['nextBuild'])}</td></tr>"""
        for idx, row in enumerate(recommendations, 1)
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Demo Arena</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,td small,label,select,output{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats,.leaders{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.card,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span,.card span,td small{{font-size:11px;color:var(--muted)}}.arena{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:20px 0 30px}}.panel{{padding:15px;margin:16px 0}}.controls{{display:grid;gap:12px}}select,input{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.leaders{{grid-template-columns:repeat(4,minmax(0,1fr))}}.card{{padding:13px}}.card h2{{font-size:16px;margin:4px 0;min-height:46px}}.card b{{font-size:28px;display:inline-block;margin-right:8px}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}table{{width:100%;border-collapse:collapse;font-size:13px}}th{{text-align:left;color:var(--muted);font-size:11px}}td,th{{border-bottom:1px solid var(--line);padding:8px;vertical-align:top}}.matrix-wrap{{overflow:auto}}.matrix{{min-width:1120px}}.heat b{{display:block;font-size:17px}}.heat small{{display:block;max-width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}td.heat.release{{background:#E7F3EC}}td.heat.review{{background:#FBF3E2}}td.heat.block{{background:#F6E7E7}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.arena,.stats,.leaders{{grid-template-columns:1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · demo arena</div><h1>Stress-test every demo across deployment scenarios</h1><p>The arena evaluates all 41 interactive demos against eight scenario presets, ranks readiness, and exposes the failure mode that blocks release.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-playbook.html">next-build playbook</a><a href="cvpr-demo-lab.html">demo lab</a><a href="cvpr-systems-lab.html">systems lab</a><a href="cvpr-paper-to-system-gate.html">paper gate</a><a href="analysis/cvpr_demo_arena/registry.json">arena registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['demos']}</b><span>demos evaluated</span></div><div class="stat"><b>{summary['scenarios']}</b><span>scenarios</span></div><div class="stat"><b>{summary['pairings']}</b><span>demo-scenario pairings</span></div><div class="stat"><b>{summary['visualModes']}</b><span>visual modes</span></div></section>
<section class="arena"><aside class="panel controls"><label>scenario<select id="scenario"></select></label><label>difficulty<input id="difficulty" type="range" min="20" max="90" value="50"></label><output id="difficultyOut">50</output><p id="brief"></p><p><a href="cvpr-demo-lab.html">open the underlying demo lab</a></p></aside><section class="panel"><canvas id="arenaCanvas" width="760" height="360" aria-label="scenario readiness chart"></canvas></section></section>
<section><h2>Scenario Leaders</h2><div class="leaders">{leader_cards}</div></section>
<section class="panel"><h2>Cluster Scenario Matrix</h2><div class="matrix-wrap"><table class="matrix"><thead><tr><th>Cluster</th>{matrix_head}<th>Avg</th><th>Worst scenario</th></tr></thead><tbody>{matrix_rows}</tbody></table></div></section>
<section class="panel"><h2>Next Builds</h2><table><thead><tr><th>Rank</th><th>Cluster</th><th>Scenario</th><th>Ready</th><th>Weakest demo</th><th>Build reason</th></tr></thead><tbody>{recommendation_rows}</tbody></table></section>
<section class="panel"><h2>Live Ranking</h2><table><thead><tr><th>Demo</th><th>Cluster</th><th>Mode</th><th>Ready</th><th>Decision</th><th>Failure / release reason</th></tr></thead><tbody id="rankings"></tbody></table></section>
<section class="panel"><h2>Hardest Failures At Default Settings</h2><table><thead><tr><th>Scenario</th><th>Demo</th><th>Mode</th><th>Failure mode</th><th>Ready</th></tr></thead><tbody>{failure_rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_demo_arena.py · tested package under source-code/learning/cvpr-demo-arena</div></footer>
<script type="module">
import {{ rankScenario }} from "./source-code/learning/cvpr-demo-arena/src/core.js";
const demos = {demos_json};
const scenarios = {scenarios_json};
const select = document.querySelector("#scenario");
const difficulty = document.querySelector("#difficulty");
const difficultyOut = document.querySelector("#difficultyOut");
const brief = document.querySelector("#brief");
const rankings = document.querySelector("#rankings");
const canvas = document.querySelector("#arenaCanvas");
const ctx = canvas.getContext("2d");
for (const scenario of scenarios) {{
  const option = document.createElement("option");
  option.value = scenario.id;
  option.textContent = scenario.title;
  select.append(option);
}}
function cls(decision) {{ return decision === "release" ? "release" : decision === "review" ? "review" : "block"; }}
function draw(rows) {{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#EEF3F2"; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#D7DCD9";
  for (let y = 60; y <= 300; y += 60) {{ ctx.beginPath(); ctx.moveTo(54, y); ctx.lineTo(724, y); ctx.stroke(); }}
  ctx.fillStyle = "#23302C"; ctx.font = "13px ui-monospace, monospace"; ctx.fillText("readiness distribution by visual mode", 54, 32);
  const modes = [...new Set(rows.map((row) => row.visualMode))];
  modes.forEach((mode, i) => {{
    const group = rows.filter((row) => row.visualMode === mode);
    const avg = group.reduce((sum, row) => sum + row.readiness, 0) / group.length;
    const x = 60 + i * 60;
    const h = avg * 2.35;
    ctx.fillStyle = avg >= 72 ? "#2F7A4F" : avg >= 55 ? "#B37A1E" : "#9B2D2D";
    ctx.fillRect(x, 308 - h, 34, h);
    ctx.save(); ctx.translate(x + 8, 330); ctx.rotate(-Math.PI / 5); ctx.fillStyle = "#23302C"; ctx.fillText(mode, 0, 0); ctx.restore();
  }});
  rows.slice(0, 5).forEach((row, i) => {{ ctx.fillStyle = "#0E7C86"; ctx.fillText(`${{i + 1}}. ${{row.title.slice(0, 48)}} ${{row.readiness.toFixed(1)}}`, 360, 64 + i * 24); }});
}}
function render() {{
  const scenario = scenarios.find((row) => row.id === select.value) || scenarios[0];
  const diff = Number(difficulty.value);
  difficultyOut.value = diff;
  brief.textContent = scenario.brief;
  const rows = rankScenario(demos, scenario, diff);
  rankings.innerHTML = rows.slice(0, 18).map((row) => `<tr><td><a href="${{row.sourcePage}}">${{row.title}}</a><br><small>${{row.system}}</small></td><td>${{row.cluster}}</td><td>${{row.visualMode}}</td><td>${{row.readiness.toFixed(1)}}</td><td class="${{cls(row.decision)}}">${{row.decision}}</td><td>${{row.failureMode}}</td></tr>`).join("");
  draw(rows);
}}
select.addEventListener("change", render);
difficulty.addEventListener("input", render);
select.value = scenarios[0].id;
difficulty.value = scenarios[0].difficulty;
render();
</script></body></html>"""
    write(ROOT / "cvpr-demo-arena.html", page)


def main():
    demos = read_demos()
    build_package()
    summary, leaders, evaluations, matrix, recommendations = build_registry(demos)
    build_page(demos, summary, leaders, evaluations, matrix, recommendations)
    print(f"wrote cvpr-demo-arena.html: {summary['demos']} demos x {summary['scenarios']} scenarios = {summary['pairings']} evaluations")


if __name__ == "__main__":
    main()

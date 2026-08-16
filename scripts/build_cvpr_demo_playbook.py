"""Build the CVPR demo next-build playbook.

The playbook converts arena weaknesses into concrete implementation goals.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-demo-playbook"
ANALYSIS = ROOT / "analysis/cvpr_demo_playbook"
ARENA_REGISTRY = ROOT / "analysis/cvpr_demo_arena/registry.json"

MODE_SPECS = {
    "safety": {
        "title": "Closed-loop scene and action safety bench",
        "control": "hazard density, actor speed, occlusion, and action confidence",
        "instrumentation": "lane/actor grounding, time-to-collision, rule violation, and abstention traces",
        "acceptance": "raise safety-critical readiness above 62 while keeping risk below 35",
    },
    "trust": {
        "title": "Adversarial provenance evidence bench",
        "control": "attack strength, generation source, watermark visibility, and unlearning probe",
        "instrumentation": "real/edited/generated labels, perturbation heatmaps, provenance confidence, and leakage flags",
        "acceptance": "raise adversarial-media readiness above 62 with evidence above 50",
    },
    "medical": {
        "title": "Clinical shift validation bench",
        "control": "scanner/site shift, cohort mix, label noise, and review threshold",
        "instrumentation": "uncertainty calibration, domain-shift panels, triage queues, and cohort slices",
        "acceptance": "raise clinical-shift readiness above 62 with no block decisions",
    },
    "efficiency": {
        "title": "Compute budget serving bench",
        "control": "token budget, quantization level, student routing threshold, and escalation cost",
        "instrumentation": "latency, retained evidence, quality floor, and escalation counts",
        "acceptance": "raise compute-constrained readiness above 68 while preserving evidence above 55",
    },
    "localization": {
        "title": "Long-tail open-vocabulary grounding bench",
        "control": "query rarity, distractor overlap, box ambiguity, and evidence threshold",
        "instrumentation": "region proposals, text-region scores, long-tail recall, and unsupported-answer flags",
        "acceptance": "raise long-tail readiness above 68 and reduce localization evidence gaps",
    },
    "grounding": {
        "title": "Grounded VLM answer verification bench",
        "control": "visual evidence strength, question ambiguity, unsupported-claim pressure, and tool verification",
        "instrumentation": "cited regions, answer support scores, hallucination checks, and tool-route traces",
        "acceptance": "raise grounded-answer readiness above 68 while keeping unsupported claims below review",
        "implementationPage": "cvpr-vlm-answer-verification-bench.html",
    },
    "geometry": {
        "title": "Metric geometry release bench",
        "control": "camera baseline, scale ambiguity, pose evidence, and surface consistency",
        "instrumentation": "depth uncertainty, pose residuals, scale checks, and topology warnings",
        "acceptance": "raise geometry readiness above 68 with metric evidence above release floor",
    },
    "splats": {
        "title": "Gaussian Splatting release bench",
        "control": "view count, splat density, semantic attachment, and provenance visibility",
        "instrumentation": "novel-view quality, editable splat labels, provenance marks, and render latency",
        "acceptance": "raise splat-scene readiness above 68 while preserving editability and provenance",
    },
    "temporal": {
        "title": "Long-horizon world rollout bench",
        "control": "rollout length, identity density, physics violations, and memory window",
        "instrumentation": "identity tracks, contact events, drift curves, and future plausibility scores",
        "acceptance": "raise temporal-rollout readiness above 68 with drift under the review threshold",
    },
    "restoration": {
        "title": "Downstream restoration fidelity bench",
        "control": "blur, noise, compression, low light, and hallucination penalty",
        "instrumentation": "artifact maps, fidelity gates, downstream task score, and fabricated-detail warnings",
        "acceptance": "raise noisy-restoration readiness above 68 without lowering downstream utility",
    },
    "editing": {
        "title": "Constraint-preserving generation bench",
        "control": "edit strength, layout lock, identity lock, and adversarial prompt pressure",
        "instrumentation": "constraint satisfaction, identity damage, edit locality, and provenance flags",
        "acceptance": "raise adversarial-media readiness above 68 while keeping identity damage below review",
    },
}

CORE = """export function priorityBand(readiness) {
  if (readiness < 50) return "critical";
  if (readiness < 60) return "high";
  return "focused";
}

export function effortEstimate(play) {
  const base = play.priority === "critical" ? 5 : play.priority === "high" ? 4 : 3;
  const scenarioLoad = play.scenario.includes("safety") || play.scenario.includes("adversarial") || play.scenario.includes("clinical") ? 1 : 0;
  return base + scenarioLoad;
}

export function readinessLiftNeeded(play, target = 68) {
  return Number(Math.max(0, target - play.currentReadiness).toFixed(1));
}

export function acceptanceChecklist(play) {
  return [
    `interactive controls: ${play.controlSurface}`,
    `visible instrumentation: ${play.instrumentation}`,
    `arena gate: ${play.acceptanceGate}`,
    `registry link: ${play.cluster} / ${play.scenario}`,
    `test fixture: ${play.slug} readiness lift is measurable`
  ];
}

export function sequencePlaybook(plays) {
  return [...plays]
    .map((play) => ({
      ...play,
      effort: effortEstimate(play),
      liftNeeded: readinessLiftNeeded(play),
      checklist: acceptanceChecklist(play)
    }))
    .sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, focused: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority] || b.liftNeeded - a.liftNeeded || a.effort - b.effort;
    });
}

export function summarizePlaybook(plays) {
  const sequenced = sequencePlaybook(plays);
  return {
    plays: plays.length,
    critical: plays.filter((play) => play.priority === "critical").length,
    high: plays.filter((play) => play.priority === "high").length,
    focused: plays.filter((play) => play.priority === "focused").length,
    clusters: new Set(plays.map((play) => play.cluster)).size,
    scenarios: new Set(plays.map((play) => play.scenario)).size,
    totalLiftNeeded: Number(sequenced.reduce((sum, play) => sum + play.liftNeeded, 0).toFixed(1)),
    firstBuild: sequenced[0],
    sequenced
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { plays } from "../src/plays.js";
import {
  acceptanceChecklist,
  effortEstimate,
  priorityBand,
  readinessLiftNeeded,
  sequencePlaybook,
  summarizePlaybook
} from "../src/core.js";

assert.equal(priorityBand(49.9), "critical");
assert.equal(priorityBand(55), "high");
assert.equal(priorityBand(62), "focused");
assert.ok(plays.length >= 8);

for (const play of plays) {
  assert.match(play.slug, /^[a-z0-9-]+$/);
  assert.ok(play.cluster);
  assert.ok(play.scenario);
  assert.ok(play.currentReadiness >= 0 && play.currentReadiness <= 100);
  assert.ok(play.targetReadiness >= Math.min(68, play.currentReadiness));
  assert.ok(effortEstimate(play) >= 3);
  assert.ok(readinessLiftNeeded(play) >= 0);
  const checklist = acceptanceChecklist(play);
  assert.equal(checklist.length, 5);
  assert.ok(checklist.every((item) => item.includes(":")));
}

const sequenced = sequencePlaybook(plays);
assert.equal(sequenced.length, plays.length);
assert.match(sequenced[0].priority, /^(critical|high|focused)$/);
assert.ok(sequenced[0].liftNeeded >= 0);

const summary = summarizePlaybook(plays);
assert.equal(summary.plays, plays.length);
assert.ok(summary.clusters >= 8);
assert.ok(summary.scenarios >= 6);
assert.ok(summary.critical >= 0);
assert.ok(summary.totalLiftNeeded >= 0);
assert.equal(summary.firstBuild.slug, sequenced[0].slug);
console.log("ok cvpr-demo-playbook:", summary.plays, "next-build plays", summary.critical, "critical");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def slugify(text):
    return "".join(ch if ch.isalnum() else "-" for ch in text.lower()).strip("-").replace("--", "-")


def build_play(row, rank):
    spec = MODE_SPECS[row["visualMode"]]
    slug = f"{rank:02d}-{slugify(row['cluster'])}-{slugify(row['scenario'])}"
    target = 72 if row["readiness"] < 50 else 68
    implementation_pages = {
        "safety": "cvpr-driving-safety-bench.html",
        "trust": "cvpr-adversarial-provenance-bench.html",
        "medical": "cvpr-clinical-shift-bench.html",
        "efficiency": "cvpr-compute-serving-bench.html",
        "localization": "cvpr-long-tail-grounding-bench.html",
        "temporal": "cvpr-temporal-rollout-bench.html",
        "restoration": "cvpr-restoration-fidelity-bench.html",
        "editing": "cvpr-constraint-generation-bench.html",
        "grounding": "cvpr-vlm-answer-verification-bench.html",
    }
    return {
        "slug": slug,
        "rank": rank,
        "cluster": row["cluster"],
        "visualMode": row["visualMode"],
        "scenario": row["scenario"],
        "weakestDemo": row["weakestDemo"],
        "currentReadiness": row["readiness"],
        "averageReadiness": row["averageReadiness"],
        "targetReadiness": target,
        "priority": "critical" if row["readiness"] < 50 else "high" if row["readiness"] < 60 else "focused",
        "title": spec["title"],
        "controlSurface": spec["control"],
        "instrumentation": spec["instrumentation"],
        "acceptanceGate": spec["acceptance"],
        "arenaFinding": row["nextBuild"],
        "implementationPage": implementation_pages.get(row["visualMode"]),
        "deliverables": [
            f"upgrade the {row['weakestDemo']} demo with scenario controls",
            f"add visible {row['visualMode']} instrumentation and failure traces",
            "feed measured deltas back into the arena registry",
            "add a core test proving readiness lift and bounded risk",
        ],
    }


def read_recommendations():
    data = json.loads(ARENA_REGISTRY.read_text(encoding="utf-8"))
    return data["recommendations"], data["summary"]


def build_package(plays):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/plays.js", "export const plays = " + json.dumps(plays, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Demo Playbook\n\nPrioritized implementation plays generated from the CVPR Demo Arena recommendations.\n")


def build_registry(plays, arena_summary):
    summary = {
        "plays": len(plays),
        "sourceDemos": arena_summary["demos"],
        "sourceScenarios": arena_summary["scenarios"],
        "sourcePairings": arena_summary["pairings"],
        "clustersCovered": len({play["cluster"] for play in plays}),
        "scenariosCovered": len({play["scenario"] for play in plays}),
        "critical": sum(1 for play in plays if play["priority"] == "critical"),
        "high": sum(1 for play in plays if play["priority"] == "high"),
        "focused": sum(1 for play in plays if play["priority"] == "focused"),
        "targetReadinessFloor": min(play["targetReadiness"] for play in plays),
        "complete": len(plays),
        "incomplete": 0,
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "plays": plays}, indent=2) + "\n")
    return summary


def build_page(plays, summary):
    cards = "".join(
        f"""<article class="play {esc(play['priority'])}"><div><span>{play['rank']:02d} · {esc(play['priority'])} · {esc(play['scenario'])}</span><h2>{esc(play['title'])}</h2><p><b>{esc(play['cluster'])}</b> · weakest demo: {esc(play['weakestDemo'])}</p>{f'<p><a href="{esc(play["implementationPage"])}">open implemented bench</a></p>' if play.get('implementationPage') else ''}</div><div class="score"><b>{play['currentReadiness']}</b><small>now</small><b>{play['targetReadiness']}</b><small>target</small></div><h3>Build</h3><ul>{''.join(f'<li>{esc(item)}</li>' for item in play['deliverables'])}</ul><h3>Controls</h3><p>{esc(play['controlSurface'])}</p><h3>Instrumentation</h3><p>{esc(play['instrumentation'])}</p><h3>Acceptance gate</h3><p>{esc(play['acceptanceGate'])}</p><code>{esc(play['arenaFinding'])}</code></article>"""
        for play in plays
    )
    rows = "".join(
        f"""<tr><td>{play['rank']}</td><td>{esc(play['cluster'])}</td><td>{esc(play['scenario'])}</td><td>{esc(play['priority'])}</td><td>{play['currentReadiness']} -> {play['targetReadiness']}</td><td>{esc(play['weakestDemo'])}</td></tr>"""
        for play in plays
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Demo Next-Build Playbook</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1100px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,.play span,code,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.play,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:25px}}.stat span,.play span{{font-size:11px;color:var(--muted)}}.play{{border-left:5px solid var(--accent);padding:16px;margin:14px 0}}.play.critical{{border-left-color:var(--bad)}}.play.high{{border-left-color:var(--warn)}}.play.focused{{border-left-color:var(--accent)}}.play h2{{font-size:22px;margin:5px 0}}.play h3{{font-size:13px;margin:14px 0 4px;text-transform:uppercase;letter-spacing:.08em}}.score{{display:grid;grid-template-columns:auto auto;gap:2px 10px;float:right;border:1px solid var(--line);border-radius:6px;padding:8px;background:#fff}}.score b{{font-size:24px}}.score small{{font-family:var(--mono);font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal}}.panel{{padding:15px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}a{{color:#0A5A62}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:820px){{.stats{{grid-template-columns:1fr}}.score{{float:none;width:max-content;margin-bottom:10px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · next-build playbook</div><h1>Turn weak demo scenarios into buildable goals</h1><p>This page converts the Demo Arena's weakest cluster-scenario cells into concrete implementation plays with controls, instrumentation, acceptance gates, and test expectations.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-arena.html">demo arena</a><a href="cvpr-demo-lab.html">demo lab</a><a href="cvpr-systems-lab.html">systems lab</a><a href="analysis/cvpr_demo_playbook/registry.json">playbook registry</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{summary['plays']}</b><span>next-build plays</span></div><div class="stat"><b>{summary['critical']}</b><span>critical</span></div><div class="stat"><b>{summary['clustersCovered']}</b><span>clusters covered</span></div><div class="stat"><b>{summary['sourcePairings']}</b><span>arena pairings audited</span></div></section>
<section class="panel"><h2>Execution Order</h2><table><thead><tr><th>Rank</th><th>Cluster</th><th>Scenario</th><th>Priority</th><th>Lift</th><th>Weakest demo</th></tr></thead><tbody>{rows}</tbody></table></section>
{cards}</main><footer><div class="wrap">Generated by scripts/build_cvpr_demo_playbook.py from CVPR Demo Arena recommendations · tested package under source-code/learning/cvpr-demo-playbook</div></footer></body></html>"""
    write(ROOT / "cvpr-demo-playbook.html", page)


def main():
    recommendations, arena_summary = read_recommendations()
    plays = [build_play(row, index + 1) for index, row in enumerate(recommendations)]
    build_package(plays)
    summary = build_registry(plays, arena_summary)
    build_page(plays, summary)
    print(f"wrote cvpr-demo-playbook.html: {summary['plays']} plays, {summary['critical']} critical")


if __name__ == "__main__":
    main()

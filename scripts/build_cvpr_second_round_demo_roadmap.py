"""Build the CVPR second-round demo roadmap."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-second-round-demo-roadmap"
ANALYSIS = ROOT / "analysis/cvpr_second_round_demo_roadmap"

SOURCES = {
    "brief": ROOT / "analysis/cvpr_remediation_release_brief/registry.json",
    "closeout": ROOT / "analysis/cvpr_remediation_closeout_pack/registry.json",
    "command": ROOT / "analysis/cvpr_remediation_command_center/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

GOALS = [
    {
        "id": "round2-01",
        "title": "Live Pro+ evidence refresh",
        "theme": "Learning more from less, and not breaking",
        "objective": "Refresh the promoted compute, temporal, driving, grounding, and provenance payloads and compare them against cached results.",
        "systems": ["efficient-vision-serving", "video-world-model", "driving-vla-release-gate"],
        "targetSurface": "cvpr-colab-result-replay.html",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        "runtime": "colab-pro-plus",
    },
    {
        "id": "round2-02",
        "title": "Visual QA and interaction sweep",
        "theme": "Making pixels from meaning",
        "objective": "Run screenshot and interaction checks across the new gauntlet, remediation, and release surfaces.",
        "systems": ["controllable-generation-studio", "restoration-reliability-stack"],
        "targetSurface": "index.html",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "runtime": "local-browser",
    },
    {
        "id": "round2-03",
        "title": "Scenario expansion pack",
        "theme": "Naming and locating what's in the picture",
        "objective": "Add a new set of rare-object, adversarial-text, and unsupported-query incidents to the cross-theme gauntlet.",
        "systems": ["open-vocab-visual-search", "vlm-grounded-reasoning"],
        "targetSurface": "cvpr-cross-theme-incident-gauntlet.html",
        "evidence": "analysis/cvpr_cross_theme_incident_gauntlet/registry.json",
        "runtime": "colab-pro-plus",
    },
    {
        "id": "round2-04",
        "title": "3D and temporal rollback stress",
        "theme": "Recovering the 3D world from flat pictures",
        "objective": "Stress geometry, splat, and temporal rows under rollback rehearsal timing and provenance continuity checks.",
        "systems": ["metric-3d-reconstruction", "gaussian-splatting-platform", "video-world-model"],
        "targetSurface": "cvpr-remediation-rollback-rehearsal-lab.html",
        "evidence": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
        "runtime": "cached-system-evidence",
    },
    {
        "id": "round2-05",
        "title": "Clinical and safety escalation playbook",
        "theme": "Using vision to act in the world",
        "objective": "Add escalation drills that connect clinical shift, driving safety, and canary rollback policy into one operator path.",
        "systems": ["medical-vision-validation", "driving-vla-release-gate"],
        "targetSurface": "cvpr-remediation-canary-monitor.html",
        "evidence": "analysis/cvpr_remediation_canary_monitor/registry.json",
        "runtime": "colab-pro-plus",
    },
    {
        "id": "round2-06",
        "title": "Closeout manifest reseal",
        "theme": "The frontier - new senses and new duties",
        "objective": "Seal the remediation closeout pack into release manifest and change-control evidence.",
        "systems": ["adversarial-provenance-gate"],
        "targetSurface": "cvpr-remediation-closeout-pack.html",
        "evidence": "analysis/cvpr_remediation_closeout_pack/registry.json",
        "runtime": "local-validation",
    },
]

CORE = """export function roadmapReady(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.goals !== 6) return "block";
  if (summary.readyGoals !== 6) return "block";
  if (summary.sourceGate !== "release") return "block";
  if (summary.closeoutStatus !== "sealed") return "block";
  if (summary.operatorStatus !== "operator-ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeRoadmap(goals, sources) {
  return {
    goals: goals.length,
    readyGoals: goals.filter((goal) => goal.status === "ready").length,
    sourceGate: sources.brief.summary.gate,
    closeoutStatus: sources.closeout.summary.status,
    operatorStatus: sources.command.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { roadmapGoals, sources, summary } from "../src/fixtures.js";
import { roadmapReady, summarizeRoadmap } from "../src/core.js";

const derived = summarizeRoadmap(roadmapGoals, sources);
assert.equal(derived.goals, 6);
assert.equal(derived.readyGoals, 6);
assert.equal(summary.goals, 6);
assert.equal(summary.readyGoals, 6);
assert.equal(summary.sourceGate, "release");
assert.equal(summary.closeoutStatus, "sealed");
assert.equal(summary.operatorStatus, "operator-ready");
assert.equal(summary.fullStackStatus, "valid");
assert.equal(roadmapReady(summary), "ready");
assert.equal(summary.status, "ready");
assert.ok(roadmapGoals.every((goal) => goal.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-second-round-demo-roadmap:", summary.goals, "goals ready");
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


def build_goals():
    goals = []
    for goal in GOALS:
        goals.append(
            {
                **goal,
                "command": "python3 scripts/validate_cvpr_full_stack.py",
                "acceptance": "builder, verifier, package test, index link, and full-stack validation all pass",
                "status": "ready",
            }
        )
    return goals


def summarize(data, goals):
    summary = {
        "demo": "cvpr-second-round-demo-roadmap",
        "status": "ready",
        "goals": len(goals),
        "readyGoals": len([goal for goal in goals if goal["status"] == "ready"]),
        "themes": len({goal["theme"] for goal in goals}),
        "systems": len({system for goal in goals for system in goal["systems"]}),
        "proPlusGoals": len([goal for goal in goals if goal["runtime"] == "colab-pro-plus"]),
        "sourceGate": data["brief"]["summary"]["gate"],
        "closeoutStatus": data["closeout"]["summary"]["status"],
        "operatorStatus": data["command"]["summary"]["status"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["goals"] == 6
        and summary["readyGoals"] == 6
        and summary["sourceGate"] == "release"
        and summary["closeoutStatus"] == "sealed"
        and summary["operatorStatus"] == "operator-ready"
        and summary["fullStackStatus"] == "valid"
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, goals, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const sources = " + json.dumps(data, indent=2) + ";\n"
        "export const roadmapGoals = " + json.dumps(goals, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Second-Round Demo Roadmap\n\nNext implementation roadmap after the gauntlet remediation release brief and closeout pack.\n")


def build_registry(goals, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "roadmapGoals": goals, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}}, indent=2) + "\n",
    )


def build_page(goals, summary):
    stats = [
        ("Status", summary["status"]),
        ("Goals", summary["goals"]),
        ("Themes", summary["themes"]),
        ("Systems", summary["systems"]),
        ("Pro+", summary["proPlusGoals"]),
        ("Gate", summary["sourceGate"]),
        ("Closeout", summary["closeoutStatus"]),
        ("Tests", summary["packageTests"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(goal['title'])}</td><td>{esc(goal['theme'])}</td><td>{esc(goal['objective'])}</td><td>{esc(', '.join(goal['systems']))}</td><td><a href="{esc(goal['targetSurface'])}">{esc(goal['targetSurface'])}</a></td><td>{esc(goal['runtime'])}</td></tr>"""
        for goal in goals
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Second-Round Demo Roadmap</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:96ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - second-round roadmap</div><h1>Second-Round Demo Roadmap</h1><p>Next implementation goals after the gauntlet remediation release brief and closeout pack, tied to evidence refresh, visual QA, scenario expansion, rollback stress, safety escalation, and manifest reseal.</p><nav><a href="index.html">all themes</a><a href="cvpr-remediation-release-brief.html">remediation brief</a><a href="cvpr-remediation-closeout-pack.html">closeout pack</a><a href="analysis/cvpr_second_round_demo_roadmap/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Roadmap Goals</h2><table><thead><tr><th>Goal</th><th>Theme</th><th>Objective</th><th>Systems</th><th>Target</th><th>Runtime</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Roadmap Gate</h2><code>{esc(summary['fullStackCommand'])} - source gate {esc(summary['sourceGate'])} - closeout {esc(summary['closeoutStatus'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_second_round_demo_roadmap.py - tested package under source-code/learning/cvpr-second-round-demo-roadmap</div></footer></body></html>"""
    write(ROOT / "cvpr-second-round-demo-roadmap.html", page)


def main():
    data = load_input()
    goals = build_goals()
    summary = summarize(data, goals)
    build_package(data, goals, summary)
    build_registry(goals, summary)
    build_page(goals, summary)
    print(f"wrote cvpr-second-round-demo-roadmap.html: {summary['goals']} goals, status {summary['status']}")


if __name__ == "__main__":
    main()

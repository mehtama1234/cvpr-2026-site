"""Build the CVPR next-demo roadmap."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-next-demo-roadmap"
ANALYSIS = ROOT / "analysis/cvpr_next_demo_roadmap"

SOURCES = {
    "portfolio": ROOT / "analysis/cvpr_theme_portfolio_map/registry.json",
    "cockpit": ROOT / "analysis/cvpr_demo_evidence_cockpit/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
    "commandCenter": ROOT / "analysis/cvpr_release_command_center/registry.json",
}

ROADMAP_COPY = {
    "Learning more from less, and not breaking": ("Adaptive serving stress lab", "Add a live budget-control demo that sweeps latency, token pruning, and escalation thresholds."),
    "Making pixels from meaning": ("Constraint edit tournament", "Compare identity, layout, and preference controls across adversarial edit prompts."),
    "Naming and locating what's in the picture": ("Open-vocabulary failure hunt", "Add long-tail query packs that expose ambiguity, distractors, and missing evidence."),
    "Recovering the 3D world from flat pictures": ("3D edit provenance room", "Link metric geometry and splat evidence in one inspectable scene-level demo."),
    "Seeing and making things that move": ("Temporal counterfactual lab", "Add rollout forks that show how drift, identity switches, and contact errors compound."),
    "Teaching machines to see and talk at once": ("Grounded answer courtroom", "Upgrade cached-system VLM evidence into an adjudication demo with citations and contradiction probes."),
    "The frontier - new senses and new duties": ("Provenance red-team arena", "Add watermark, perturbation, and unlearning attacks as replayable release drills."),
    "Using vision to act in the world": ("Safety deployment simulator", "Stress clinical shift and driving safety gates under site, weather, and hazard changes."),
}

CORE = """export function roadmapGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.goals !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.linkedSystems !== 11) return "block";
  if (summary.proPlusGoals !== 7) return "block";
  if (summary.cachedEvidenceGoals !== 1) return "block";
  if (summary.operatorStatus !== "operator-ready") return "block";
  if (summary.missingEvidence !== 0) return "block";
  return "ready";
}

export function summarizeRoadmap(input) {
  const goals = input.roadmapGoals || [];
  const summary = {
    roadmap: "cvpr-next-demo-roadmap",
    goals: goals.length,
    themes: input.portfolio.summary.themes,
    linkedSystems: goals.reduce((sum, goal) => sum + goal.systems.length, 0),
    proPlusGoals: goals.filter((goal) => goal.runtimeEvidence === "colab-pro-plus").length,
    cachedEvidenceGoals: goals.filter((goal) => goal.runtimeEvidence === "cached-system-evidence").length,
    missingEvidence: input.portfolio.summary.missingDemoEvidence,
    operatorStatus: input.commandCenter.summary.status
  };
  return { ...summary, status: roadmapGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { roadmapInput, roadmapGoals, summary } from "../src/fixtures.js";
import { roadmapGate, summarizeRoadmap } from "../src/core.js";

const derived = summarizeRoadmap({ ...roadmapInput, roadmapGoals });
assert.equal(derived.status, "ready");
assert.equal(roadmapGate(summary), "ready");
assert.equal(summary.goals, 8);
assert.equal(summary.themes, 8);
assert.equal(summary.linkedSystems, 11);
assert.equal(summary.proPlusGoals, 7);
assert.equal(summary.cachedEvidenceGoals, 1);
assert.equal(summary.operatorStatus, "operator-ready");
assert.equal(summary.missingEvidence, 0);
assert.ok(roadmapGoals.every((goal) => goal.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-next-demo-roadmap:", summary.goals, "goals");
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


def build_goals(data):
    systems_by_theme = {}
    for row in data["portfolio"]["systemRows"]:
        systems_by_theme.setdefault(row["theme"], []).append(row)
    replay_by_job = {row["jobId"]: row for row in data["replay"]["replayRows"]}
    goals = []
    for index, theme_row in enumerate(data["portfolio"]["themeRows"], start=1):
        theme = theme_row["theme"]
        rows = systems_by_theme[theme]
        pro_plus = [row for row in rows if row["runtimeEvidence"] == "colab-pro-plus"]
        cached = [row for row in rows if row["runtimeEvidence"] == "cached-system-evidence"]
        runtime = "cached-system-evidence" if cached else "colab-pro-plus"
        title, objective = ROADMAP_COPY[theme]
        readiness = min(
            replay_by_job[row["colabJobId"]]["minReadiness"]
            for row in pro_plus
        ) if pro_plus else 0
        goals.append(
            {
                "id": f"roadmap-{index:02d}",
                "theme": theme,
                "title": title,
                "objective": objective,
                "systems": [row["system"] for row in rows],
                "benches": [row["bench"] for row in rows],
                "evidencePages": [row["benchPage"] for row in rows],
                "runtimeEvidence": runtime,
                "proPlusJobs": [row["colabJobId"] for row in pro_plus],
                "cachedEvidenceSystems": [row["system"] for row in cached],
                "stageDemos": theme_row["stageDemos"],
                "benchCases": theme_row["benchCases"],
                "readinessFloor": readiness,
                "command": "python3 scripts/validate_cvpr_full_stack.py",
                "status": "ready" if theme_row["status"] == "release" else "block",
            }
        )
    return goals


def summarize(data, goals):
    summary = {
        "roadmap": "cvpr-next-demo-roadmap",
        "status": "ready",
        "goals": len(goals),
        "themes": data["portfolio"]["summary"]["themes"],
        "linkedSystems": sum(len(goal["systems"]) for goal in goals),
        "proPlusGoals": len([goal for goal in goals if goal["runtimeEvidence"] == "colab-pro-plus"]),
        "cachedEvidenceGoals": len([goal for goal in goals if goal["runtimeEvidence"] == "cached-system-evidence"]),
        "missingEvidence": data["portfolio"]["summary"]["missingDemoEvidence"],
        "operatorStatus": data["commandCenter"]["summary"]["status"],
        "packageTests": data["commandCenter"]["summary"]["packageTests"],
    }
    gate = (
        summary["goals"] == 8
        and summary["themes"] == 8
        and summary["linkedSystems"] == 11
        and summary["proPlusGoals"] == 7
        and summary["cachedEvidenceGoals"] == 1
        and summary["missingEvidence"] == 0
        and summary["operatorStatus"] == "operator-ready"
        and all(goal["status"] == "ready" for goal in goals)
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, summary, goals):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const roadmapInput = " + json.dumps(data, indent=2) + ";\n"
        "export const roadmapGoals = " + json.dumps(goals, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Next Demo Roadmap\n\nNext-demo goals by CVPR theme, linked to systems, benches, Pro+ evidence, cached-system evidence, and full-stack validation.\n")


def build_registry(summary, goals):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "roadmapGoals": goals, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}}, indent=2) + "\n",
    )


def build_page(summary, goals):
    stats = [
        ("Status", summary["status"]),
        ("Goals", summary["goals"]),
        ("Themes", summary["themes"]),
        ("Systems", summary["linkedSystems"]),
        ("Pro+ goals", summary["proPlusGoals"]),
        ("Cached goals", summary["cachedEvidenceGoals"]),
        ("Missing evidence", summary["missingEvidence"]),
        ("Operator", summary["operatorStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows = "".join(
        f"""<tr><td>{esc(goal['theme'])}</td><td>{esc(goal['title'])}</td><td>{esc(goal['objective'])}</td><td>{esc(', '.join(goal['systems']))}</td><td>{esc(goal['runtimeEvidence'])}</td><td>{esc(', '.join(goal['proPlusJobs'] or goal['cachedEvidenceSystems']))}</td><td><code>{esc(goal['command'])}</code></td><td class="{esc(goal['status'])}">{esc(goal['status'])}</td></tr>"""
        for goal in goals
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Next Demo Roadmap</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.ready{{color:var(--good)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · next demo roadmap</div><h1>CVPR Next Demo Roadmap</h1><p>Next demo goals by theme, linked to implemented systems, benches, Pro+ evidence, cached-system evidence, and the release validator.</p><nav><a href="index.html">all themes</a><a href="cvpr-theme-portfolio-map.html">portfolio</a><a href="cvpr-release-command-center.html">command center</a><a href="cvpr-colab-execution-planner.html">Pro+ planner</a><a href="analysis/cvpr_next_demo_roadmap/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Roadmap Goals</h2><table><thead><tr><th>Theme</th><th>Goal</th><th>Objective</th><th>Systems</th><th>Evidence</th><th>Jobs</th><th>Gate</th><th>Status</th></tr></thead><tbody>{rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_next_demo_roadmap.py · tested package under source-code/learning/cvpr-next-demo-roadmap</div></footer></body></html>"""
    write(ROOT / "cvpr-next-demo-roadmap.html", page)


def main():
    data = load_input()
    goals = build_goals(data)
    summary = summarize(data, goals)
    build_package(data, summary, goals)
    build_registry(summary, goals)
    build_page(summary, goals)
    print(f"wrote cvpr-next-demo-roadmap.html: {summary['goals']} goals, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR demo build backlog."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-demo-build-backlog"
ANALYSIS = ROOT / "analysis/cvpr_demo_build_backlog"

SOURCES = {
    "roadmap": ROOT / "analysis/cvpr_next_demo_roadmap/registry.json",
    "portfolio": ROOT / "analysis/cvpr_theme_portfolio_map/registry.json",
    "commandCenter": ROOT / "analysis/cvpr_release_command_center/registry.json",
}

TASK_TYPES = [
    {
        "kind": "design-scenario",
        "label": "Design the demo scenario",
        "verb": "Define fixtures, user flow, stress knobs, and failure narratives for the next demo.",
        "target": "demo-scenario",
        "acceptance": "The demo has a named scenario, target system, linked theme, explicit stress cases, and inspection page handoff.",
    },
    {
        "kind": "wire-evidence",
        "label": "Wire bench and runtime evidence",
        "verb": "Connect bench cases, Pro+ or cached evidence, replay rows, and provenance fields.",
        "target": "evidence-registry",
        "acceptance": "Every demo claim resolves to a bench page, runtime evidence source, and reproducible registry row.",
    },
    {
        "kind": "ship-gate",
        "label": "Ship through release gate",
        "verb": "Add package tests, verifier coverage, index link, and full-stack validation for the new demo.",
        "target": "release-gate",
        "acceptance": "Focused verifier, package test, release command center, and full-stack validator all pass.",
    },
]

CORE = """export function backlogGate(summary) {
  if (!summary) return "block";
  if (summary.goals !== 8) return "block";
  if (summary.tasks !== 24) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.linkedSystems !== 11) return "block";
  if (summary.proPlusTasks !== 21) return "block";
  if (summary.cachedEvidenceTasks !== 3) return "block";
  if (summary.operatorStatus !== "operator-ready") return "block";
  if (summary.missingEvidence !== 0) return "block";
  return "ready";
}

export function summarizeBacklog(input) {
  const tasks = input.backlogTasks || [];
  const summary = {
    backlog: "cvpr-demo-build-backlog",
    goals: input.roadmap.summary.goals,
    tasks: tasks.length,
    themes: input.roadmap.summary.themes,
    linkedSystems: input.roadmap.summary.linkedSystems,
    proPlusTasks: tasks.filter((task) => task.runtimeEvidence === "colab-pro-plus").length,
    cachedEvidenceTasks: tasks.filter((task) => task.runtimeEvidence === "cached-system-evidence").length,
    missingEvidence: input.roadmap.summary.missingEvidence,
    operatorStatus: input.commandCenter.summary.status
  };
  return { ...summary, status: backlogGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { backlogInput, backlogTasks, summary } from "../src/fixtures.js";
import { backlogGate, summarizeBacklog } from "../src/core.js";

const derived = summarizeBacklog({ ...backlogInput, backlogTasks });
assert.equal(derived.status, summary.status);
assert.equal(backlogGate(summary), summary.status === "ready" ? "ready" : "block");
assert.equal(summary.goals, 8);
assert.equal(summary.tasks, 24);
assert.equal(summary.themes, 8);
assert.equal(summary.linkedSystems, 11);
assert.equal(summary.proPlusTasks, 21);
assert.equal(summary.cachedEvidenceTasks, 3);
assert.ok(["operator-ready", "block"].includes(summary.operatorStatus));
assert.equal(summary.missingEvidence, 0);
assert.ok(backlogTasks.every((task) => task.command === "python3 scripts/validate_cvpr_full_stack.py"));
assert.ok(backlogTasks.every((task) => task.acceptance && task.evidencePage && task.targetFile));
assert.equal(
  summary.status,
  summary.goals === 8 &&
  summary.tasks === 24 &&
  summary.themes === 8 &&
  summary.linkedSystems === 11 &&
  summary.proPlusTasks === 21 &&
  summary.cachedEvidenceTasks === 3 &&
  summary.missingEvidence === 0 &&
  summary.operatorStatus === "operator-ready"
    ? "ready"
    : "block"
);
console.log("ok cvpr-demo-build-backlog:", summary.tasks, "tasks");
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


def target_file(goal, task_type):
    system = goal["systems"][0]
    if task_type["target"] == "demo-scenario":
        return f"{system}.html"
    if task_type["target"] == "evidence-registry":
        return f"analysis/{goal['benches'][0].replace('-', '_')}/registry.json"
    return "scripts/validate_cvpr_full_stack.py"


def build_tasks(data):
    tasks = []
    for goal in data["roadmap"]["roadmapGoals"]:
        for offset, task_type in enumerate(TASK_TYPES, start=1):
            evidence_keys = goal["proPlusJobs"] or goal["cachedEvidenceSystems"]
            tasks.append(
                {
                    "id": f"{goal['id']}-{offset:02d}-{task_type['kind']}",
                    "goalId": goal["id"],
                    "theme": goal["theme"],
                    "goal": goal["title"],
                    "task": task_type["label"],
                    "objective": task_type["verb"],
                    "systems": goal["systems"],
                    "benches": goal["benches"],
                    "runtimeEvidence": goal["runtimeEvidence"],
                    "evidenceKeys": evidence_keys,
                    "evidencePage": goal["evidencePages"][0],
                    "targetFile": target_file(goal, task_type),
                    "command": goal["command"],
                    "acceptance": task_type["acceptance"],
                    "readinessFloor": goal["readinessFloor"],
                    "status": "ready" if goal["status"] == "ready" else "block",
                }
            )
    return tasks


def summarize(data, tasks):
    summary = {
        "backlog": "cvpr-demo-build-backlog",
        "status": "ready",
        "goals": data["roadmap"]["summary"]["goals"],
        "tasks": len(tasks),
        "themes": data["roadmap"]["summary"]["themes"],
        "linkedSystems": data["roadmap"]["summary"]["linkedSystems"],
        "proPlusTasks": len([task for task in tasks if task["runtimeEvidence"] == "colab-pro-plus"]),
        "cachedEvidenceTasks": len([task for task in tasks if task["runtimeEvidence"] == "cached-system-evidence"]),
        "missingEvidence": data["roadmap"]["summary"]["missingEvidence"],
        "operatorStatus": data["commandCenter"]["summary"]["status"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "packageTests": data["roadmap"]["summary"]["packageTests"],
    }
    gate = (
        summary["goals"] == 8
        and summary["tasks"] == 24
        and summary["themes"] == 8
        and summary["linkedSystems"] == 11
        and summary["proPlusTasks"] == 21
        and summary["cachedEvidenceTasks"] == 3
        and summary["missingEvidence"] == 0
        and summary["operatorStatus"] == "operator-ready"
        and all(task["status"] == "ready" for task in tasks)
        and all(task["command"] == summary["fullStackCommand"] for task in tasks)
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, summary, tasks):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const backlogInput = " + json.dumps(data, indent=2) + ";\n"
        "export const backlogTasks = " + json.dumps(tasks, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Demo Build Backlog\n\nA build-ready task board that turns the next-demo roadmap into implementation, evidence, and release-gate work across all CVPR themes.\n",
    )


def build_registry(summary, tasks):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "backlogTasks": tasks,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, tasks):
    stats = [
        ("Status", summary["status"]),
        ("Goals", summary["goals"]),
        ("Tasks", summary["tasks"]),
        ("Themes", summary["themes"]),
        ("Systems", summary["linkedSystems"]),
        ("Pro+ tasks", summary["proPlusTasks"]),
        ("Cached tasks", summary["cachedEvidenceTasks"]),
        ("Operator", summary["operatorStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows = "".join(
        f"""<tr><td>{esc(task['theme'])}</td><td>{esc(task['goal'])}</td><td>{esc(task['task'])}</td><td>{esc(task['objective'])}</td><td>{esc(', '.join(task['systems']))}</td><td><a href="{esc(task['evidencePage'])}">{esc(', '.join(task['benches']))}</a></td><td>{esc(task['runtimeEvidence'])}<br><code>{esc(', '.join(task['evidenceKeys']))}</code></td><td><code>{esc(task['targetFile'])}</code></td><td>{esc(task['acceptance'])}</td><td><code>{esc(task['command'])}</code></td><td class="{esc(task['status'])}">{esc(task['status'])}</td></tr>"""
        for task in tasks
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Demo Build Backlog</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1440px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0;overflow-x:auto}}table{{width:100%;border-collapse:collapse;font-size:12.5px;min-width:1300px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:inline-block;background:#EEF3F2;padding:4px 6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;max-width:220px}}.ready{{color:var(--good);font-weight:700}}.block{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · demo build backlog</div><h1>CVPR Demo Build Backlog</h1><p>Implementation-grade backlog for the next CVPR demo round: each theme goal is split into scenario design, evidence wiring, and release-gate work tied to systems, benches, Pro+ or cached evidence, and validation commands.</p><nav><a href="index.html">all themes</a><a href="cvpr-next-demo-roadmap.html">roadmap</a><a href="cvpr-theme-portfolio-map.html">portfolio</a><a href="cvpr-release-command-center.html">command center</a><a href="analysis/cvpr_demo_build_backlog/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Build Tasks</h2><table><thead><tr><th>Theme</th><th>Goal</th><th>Task</th><th>Objective</th><th>Systems</th><th>Bench</th><th>Evidence</th><th>Target</th><th>Acceptance</th><th>Gate</th><th>Status</th></tr></thead><tbody>{rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_demo_build_backlog.py · tested package under source-code/learning/cvpr-demo-build-backlog</div></footer></body></html>"""
    write(ROOT / "cvpr-demo-build-backlog.html", page)


def main():
    data = load_input()
    tasks = build_tasks(data)
    summary = summarize(data, tasks)
    build_package(data, summary, tasks)
    build_registry(summary, tasks)
    build_page(summary, tasks)
    print(f"wrote cvpr-demo-build-backlog.html: {summary['tasks']} tasks, status {summary['status']}")


if __name__ == "__main__":
    main()

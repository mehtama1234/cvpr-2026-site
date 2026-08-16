"""Build the CVPR remediation sprint plan."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-sprint-plan"
ANALYSIS = ROOT / "analysis/cvpr_remediation_sprint_plan"

BOARD = ROOT / "analysis/cvpr_remediation_board/registry.json"
FAILURE_ATLAS = ROOT / "analysis/cvpr_failure_atlas/registry.json"
PLAYBOOK = ROOT / "analysis/cvpr_demo_playbook/registry.json"
OPERATIONS = ROOT / "analysis/cvpr_colab_operations_dashboard/registry.json"

CORE = """export function sprintGate(summary) {
  if (!summary) return "block";
  if (summary.sprints !== 3) return "block";
  if (summary.tasks !== summary.sourceBlockTasks) return "block";
  if (summary.assignedTasks !== summary.tasks) return "block";
  if (summary.criticalTasks !== summary.boardCriticalTasks) return "block";
  if (summary.highTasks !== summary.boardHighTasks) return "block";
  if (summary.focusedTasks !== summary.boardFocusedTasks) return "block";
  if (summary.acceptanceChecks !== summary.tasks) return "block";
  if (summary.operationsStatus !== "ready") return "block";
  return "ready";
}

export function summarizeSprintPlan(input) {
  return {
    plan: "cvpr-remediation-sprint-plan",
    sourceBlockTasks: input.board.summary.blockTasks,
    sprints: input.sprints.length,
    tasks: input.tasks.length,
    assignedTasks: input.sprints.reduce((sum, sprint) => sum + sprint.tasks.length, 0),
    boardCriticalTasks: input.board.summary.criticalTasks,
    boardHighTasks: input.board.summary.highTasks,
    boardFocusedTasks: input.board.summary.focusedTasks,
    criticalTasks: input.tasks.filter((task) => task.priority === "critical").length,
    highTasks: input.tasks.filter((task) => task.priority === "high").length,
    focusedTasks: input.tasks.filter((task) => task.priority === "focused").length,
    acceptanceChecks: input.sprints.reduce((sum, sprint) => sum + sprint.tasks.filter((task) => task.acceptanceCheck).length, 0),
    families: new Set(input.tasks.map((task) => task.family)).size,
    systems: new Set(input.tasks.map((task) => task.system)).size,
    operationsStatus: input.operations.summary.status,
    packageTests: input.operations.summary.packageTests
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { sprintInput } from "../src/fixtures.js";
import { sprintGate, summarizeSprintPlan } from "../src/core.js";

const summary = summarizeSprintPlan(sprintInput);
assert.equal(sprintGate(summary), "ready");
assert.equal(summary.sprints, 3);
assert.equal(summary.tasks, sprintInput.board.summary.blockTasks);
assert.equal(summary.assignedTasks, summary.tasks);
assert.equal(summary.criticalTasks, sprintInput.board.summary.criticalTasks);
assert.equal(summary.highTasks, sprintInput.board.summary.highTasks);
assert.equal(summary.focusedTasks, sprintInput.board.summary.focusedTasks);
assert.equal(summary.acceptanceChecks, summary.tasks);
assert.equal(summary.operationsStatus, "ready");
for (const sprint of sprintInput.sprints) {
  assert.ok(sprint.exitCriteria.length >= 3);
  for (const task of sprint.tasks) {
    assert.ok(task.acceptanceCheck.includes(task.metric));
    assert.ok(task.page.endsWith(".html"));
  }
}
console.log("ok cvpr-remediation-sprint-plan:", summary.sprints, "sprints");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def sprint_for(task):
    if task["priority"] == "critical":
        return "critical-containment"
    if task["priority"] == "high":
        return "evidence-repair"
    return "release-polish"


def task_plan(task):
    direction = "drop" if task["direction"] == "high" else "raise"
    return {
        **task,
        "sprint": sprint_for(task),
        "acceptanceCheck": f"{direction} {task['metric']} against gate {task['threshold']} and rerun {task['bench']}",
        "validationCommand": f"python3 scripts/verify_{task['bench'].replace('-', '_')}.py",
        "evidencePath": task["registry"],
    }


def build_sprints(tasks):
    planned = [task_plan(task) for task in tasks]
    buckets = [
        (
            "critical-containment",
            "Critical containment",
            "Fix the highest-severity block cases first so unsafe demos cannot appear release-ready.",
        ),
        (
            "evidence-repair",
            "High-risk evidence repair",
            "Repair remaining high-priority evidence, drift, risk, and fidelity gaps across bench families.",
        ),
        (
            "release-polish",
            "Focused release polish",
            "Finish the lower-severity block cases and keep release gates reproducible.",
        ),
    ]
    sprints = []
    for index, (slug, title, goal) in enumerate(buckets, 1):
        rows = [task for task in planned if task["sprint"] == slug]
        sprints.append(
            {
                "slug": slug,
                "index": index,
                "title": title,
                "goal": goal,
                "tasks": rows,
                "exitCriteria": [
                    "all task acceptance checks are satisfied",
                    "affected bench verifier passes",
                    "cvpr-remediation-board and cvpr-colab-operations-dashboard rebuild cleanly",
                    "python3 scripts/validate_cvpr_full_stack.py returns valid",
                ],
            }
        )
    return sprints


def build_input():
    board = read_json(BOARD)
    failure_atlas = read_json(FAILURE_ATLAS)
    playbook = read_json(PLAYBOOK)
    operations = read_json(OPERATIONS)
    tasks = board["tasks"]
    return {
        "board": board,
        "failureAtlas": failure_atlas,
        "playbook": playbook,
        "operations": operations,
        "tasks": tasks,
        "sprints": build_sprints(tasks),
    }


def summarize(data):
    sprints = data["sprints"]
    tasks = data["tasks"]
    assigned = sum(len(sprint["tasks"]) for sprint in sprints)
    acceptance = sum(1 for sprint in sprints for task in sprint["tasks"] if task["acceptanceCheck"])
    ready = (
        len(sprints) == 3
        and len(tasks) == data["board"]["summary"]["blockTasks"]
        and assigned == len(tasks)
        and sum(1 for task in tasks if task["priority"] == "critical") == data["board"]["summary"]["criticalTasks"]
        and sum(1 for task in tasks if task["priority"] == "high") == data["board"]["summary"]["highTasks"]
        and sum(1 for task in tasks if task["priority"] == "focused") == data["board"]["summary"]["focusedTasks"]
        and acceptance == len(tasks)
        and data["operations"]["summary"]["status"] == "ready"
    )
    return {
        "plan": "cvpr-remediation-sprint-plan",
        "status": "ready" if ready else "block",
        "sourceBlockTasks": data["board"]["summary"]["blockTasks"],
        "boardCriticalTasks": data["board"]["summary"]["criticalTasks"],
        "boardHighTasks": data["board"]["summary"]["highTasks"],
        "boardFocusedTasks": data["board"]["summary"]["focusedTasks"],
        "sprints": len(sprints),
        "tasks": len(tasks),
        "assignedTasks": assigned,
        "criticalTasks": sum(1 for task in tasks if task["priority"] == "critical"),
        "highTasks": sum(1 for task in tasks if task["priority"] == "high"),
        "focusedTasks": sum(1 for task in tasks if task["priority"] == "focused"),
        "acceptanceChecks": acceptance,
        "families": len({task["family"] for task in tasks}),
        "systems": len({task["system"] for task in tasks}),
        "operationsStatus": data["operations"]["summary"]["status"],
        "packageTests": data["operations"]["summary"]["packageTests"],
    }


def build_package(data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const sprintInput = " + json.dumps(data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Sprint Plan\n\nExecution plan generated from the CVPR remediation board.\n")


def build_registry(summary, data):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "sprints": data["sprints"],
                "sourceRegistries": {
                    "board": str(BOARD.relative_to(ROOT)),
                    "failureAtlas": str(FAILURE_ATLAS.relative_to(ROOT)),
                    "playbook": str(PLAYBOOK.relative_to(ROOT)),
                    "operations": str(OPERATIONS.relative_to(ROOT)),
                },
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, sprints):
    stats = [
        ("status", summary["status"]),
        ("sprints", summary["sprints"]),
        ("tasks", summary["tasks"]),
        ("critical", summary["criticalTasks"]),
        ("high", summary["highTasks"]),
        ("focused", summary["focusedTasks"]),
        ("checks", summary["acceptanceChecks"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    sprint_html = ""
    for sprint in sprints:
        task_rows = "".join(
            f"""<tr><td>{task['rank']}</td><td><a href="{esc(task['page'])}">{esc(task['case'])}</a></td><td>{esc(task['family'])}</td><td>{esc(task['priority'])}</td><td>{esc(task['acceptanceCheck'])}</td><td><code>{esc(task['validationCommand'])}</code></td></tr>"""
            for task in sprint["tasks"]
        )
        criteria = "".join(f"<li>{esc(item)}</li>" for item in sprint["exitCriteria"])
        sprint_html += f"""<section class="panel"><h2>{sprint['index']}. {esc(sprint['title'])}</h2><p>{esc(sprint['goal'])}</p><ul>{criteria}</ul><table><thead><tr><th>Rank</th><th>Case</th><th>Family</th><th>Priority</th><th>Acceptance</th><th>Verifier</th></tr></thead><tbody>{task_rows}</tbody></table></section>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Sprint Plan</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1240px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:92ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0;overflow:auto}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · remediation sprint plan</div><h1>CVPR Remediation Sprint Plan</h1><p>Execution plan generated from the blocked-case remediation board, ordered into critical containment, evidence repair, and release polish.</p><nav><a href="cvpr-remediation-board.html">remediation board</a><a href="cvpr-failure-atlas.html">failure atlas</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-colab-operations-dashboard.html">operations</a><a href="analysis/cvpr_remediation_sprint_plan/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>{sprint_html}</main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_sprint_plan.py · tested package under source-code/learning/cvpr-remediation-sprint-plan</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-sprint-plan.html", page)


def main():
    data = build_input()
    summary = summarize(data)
    build_package(data)
    build_registry(summary, data)
    build_page(summary, data["sprints"])
    print(f"wrote cvpr-remediation-sprint-plan.html: {summary['sprints']} sprints, status {summary['status']}")


if __name__ == "__main__":
    main()

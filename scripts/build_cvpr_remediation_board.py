"""Build the CVPR remediation board."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-board"
ANALYSIS = ROOT / "analysis/cvpr_remediation_board"

FAILURE_ATLAS = ROOT / "analysis/cvpr_failure_atlas/registry.json"
PLAYBOOK = ROOT / "analysis/cvpr_demo_playbook/registry.json"
MISSION = ROOT / "analysis/cvpr_mission_control/registry.json"
THEME_MATRIX = ROOT / "analysis/cvpr_theme_release_matrix/registry.json"
RECEIPT = ROOT / "analysis/cvpr_colab_run_receipt/registry.json"

CORE = """export function boardGate(summary) {
  if (!summary) return "block";
  if (summary.blockTasks !== summary.sourceBlockTasks) return "block";
  if (summary.unownedTasks !== 0) return "block";
  if (summary.controlledTasks !== summary.blockTasks) return "block";
  if (summary.playbookPlays !== 8) return "block";
  if (summary.coveredThemes !== 8) return "block";
  if (summary.receiptStatus !== "ready") return "block";
  return "ready";
}

export function summarizeBoard(input) {
  return {
    board: "cvpr-remediation-board",
    sourceBlockTasks: input.failureAtlas.summary.block,
    blockTasks: input.tasks.length,
    criticalTasks: input.tasks.filter((task) => task.priority === "critical").length,
    highTasks: input.tasks.filter((task) => task.priority === "high").length,
    unownedTasks: input.tasks.filter((task) => !task.owner || !task.page).length,
    controlledTasks: input.tasks.filter((task) => task.controls.length > 0 && task.acceptanceAction).length,
    families: new Set(input.tasks.map((task) => task.family)).size,
    systems: new Set(input.tasks.map((task) => task.system)).size,
    playbookPlays: input.playbook.summary.plays,
    coveredThemes: input.themeMatrix.summary.coveredThemes,
    receiptStatus: input.receipt.summary.status,
    receiptArtifacts: input.receipt.summary.evidenceArtifacts
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { boardInput } from "../src/fixtures.js";
import { boardGate, summarizeBoard } from "../src/core.js";

const summary = summarizeBoard(boardInput);
assert.equal(boardGate(summary), "ready");
assert.equal(summary.blockTasks, boardInput.failureAtlas.summary.block);
assert.equal(summary.unownedTasks, 0);
assert.equal(summary.controlledTasks, summary.blockTasks);
assert.ok(summary.criticalTasks >= 0);
assert.equal(summary.playbookPlays, 8);
assert.equal(summary.coveredThemes, 8);
assert.equal(summary.receiptStatus, "ready");
assert.equal(summary.receiptArtifacts, 7);
for (const task of boardInput.tasks) {
  assert.equal(task.decision, "block");
  assert.ok(task.owner);
  assert.ok(task.page.endsWith(".html"));
  assert.ok(task.controls.length > 0);
  assert.ok(task.acceptanceAction.includes(task.metric));
}
console.log("ok cvpr-remediation-board:", summary.blockTasks, "block tasks");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def priority(row):
    if row["severity"] >= 45:
        return "critical"
    if row["severity"] >= 28:
        return "high"
    return "focused"


def action_for(row):
    direction = "below" if row["direction"] == "high" else "above"
    return f"move {row['metric']} {direction} {row['threshold']} and lift readiness above 62"


def build_tasks(atlas, mission):
    action_by_system = {row["sourceSystem"]: row for row in mission["benches"]}
    tasks = []
    for rank, row in enumerate([item for item in atlas["rankedFailures"] if item["decision"] == "block"], 1):
        owner = action_by_system.get(row["system"], {})
        controls = sorted(row.get("controls", {}).keys())
        tasks.append(
            {
                "rank": rank,
                "id": row["id"],
                "bench": row["bench"],
                "family": row["family"],
                "system": row["system"],
                "cluster": row["cluster"],
                "case": row["case"],
                "metric": row["metric"],
                "metricValue": row["metricValue"],
                "threshold": row["threshold"],
                "direction": row["direction"],
                "readiness": row["readiness"],
                "severity": row["severity"],
                "decision": row["decision"],
                "priority": priority(row),
                "owner": owner.get("playbookSource", row["system"]),
                "page": row["page"],
                "registry": row["registry"],
                "controls": controls,
                "acceptanceAction": action_for(row),
            }
        )
    return tasks


def build_input():
    atlas = read_json(FAILURE_ATLAS)
    playbook = read_json(PLAYBOOK)
    mission = read_json(MISSION)
    theme_matrix = read_json(THEME_MATRIX)
    receipt = read_json(RECEIPT)
    return {
        "failureAtlas": atlas,
        "playbook": playbook,
        "mission": mission,
        "themeMatrix": theme_matrix,
        "receipt": receipt,
        "tasks": build_tasks(atlas, mission),
    }


def summarize(data):
    tasks = data["tasks"]
    unowned = sum(1 for task in tasks if not task["owner"] or not task["page"])
    controlled = sum(1 for task in tasks if task["controls"] and task["acceptanceAction"])
    ready = (
        len(tasks) == data["failureAtlas"]["summary"]["block"]
        and unowned == 0
        and controlled == len(tasks)
        and data["playbook"]["summary"]["plays"] == 8
        and data["themeMatrix"]["summary"]["coveredThemes"] == 8
        and data["receipt"]["summary"]["status"] == "ready"
    )
    return {
        "board": "cvpr-remediation-board",
        "status": "ready" if ready else "block",
        "sourceBlockTasks": data["failureAtlas"]["summary"]["block"],
        "blockTasks": len(tasks),
        "criticalTasks": sum(1 for task in tasks if task["priority"] == "critical"),
        "highTasks": sum(1 for task in tasks if task["priority"] == "high"),
        "focusedTasks": sum(1 for task in tasks if task["priority"] == "focused"),
        "unownedTasks": unowned,
        "controlledTasks": controlled,
        "families": len({task["family"] for task in tasks}),
        "systems": len({task["system"] for task in tasks}),
        "playbookPlays": data["playbook"]["summary"]["plays"],
        "coveredThemes": data["themeMatrix"]["summary"]["coveredThemes"],
        "receiptStatus": data["receipt"]["summary"]["status"],
        "receiptArtifacts": data["receipt"]["summary"]["evidenceArtifacts"],
        "maxSeverity": max((task["severity"] for task in tasks), default=0),
    }


def build_package(data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const boardInput = " + json.dumps(data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Board\n\nPrioritized remediation queue for blocked CVPR bench cases.\n")


def build_registry(summary, data):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "tasks": data["tasks"],
                "sourceRegistries": {
                    "failureAtlas": str(FAILURE_ATLAS.relative_to(ROOT)),
                    "playbook": str(PLAYBOOK.relative_to(ROOT)),
                    "mission": str(MISSION.relative_to(ROOT)),
                    "themeMatrix": str(THEME_MATRIX.relative_to(ROOT)),
                    "receipt": str(RECEIPT.relative_to(ROOT)),
                },
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, tasks):
    stats = [
        ("status", summary["status"]),
        ("block tasks", summary["blockTasks"]),
        ("critical", summary["criticalTasks"]),
        ("families", summary["families"]),
        ("systems", summary["systems"]),
        ("receipt", summary["receiptStatus"]),
        ("max severity", summary["maxSeverity"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows = "".join(
        f"""<tr><td>{task['rank']}</td><td class="{esc(task['priority'])}">{esc(task['priority'])}</td><td><a href="{esc(task['page'])}">{esc(task['case'])}</a><br><small>{esc(task['cluster'])}</small></td><td>{esc(task['family'])}</td><td>{esc(task['metric'])}</td><td>{task['metricValue']} / {task['threshold']}</td><td>{task['severity']}</td><td>{esc(', '.join(task['controls']))}</td><td>{esc(task['acceptanceAction'])}</td></tr>"""
        for task in tasks
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Board</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--bad:#9B2D2D;--warn:#B37A1E;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1240px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,td small{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:92ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span,td small{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0;overflow:auto}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}.critical{{color:var(--bad);font-weight:700}}.high{{color:var(--warn);font-weight:700}}.focused{{color:var(--accent);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · remediation board</div><h1>CVPR Remediation Board</h1><p>Prioritized production queue for the blocked CVPR bench cases, tied to the failure atlas, playbook, theme matrix, and Colab Pro+ run receipt.</p><nav><a href="cvpr-failure-atlas.html">failure atlas</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-theme-release-matrix.html">theme matrix</a><a href="cvpr-colab-run-receipt.html">run receipt</a><a href="cvpr-remediation-sprint-plan.html">sprint plan</a><a href="cvpr-colab-operations-dashboard.html">operations</a><a href="analysis/cvpr_remediation_board/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Blocked Case Queue</h2><table><thead><tr><th>Rank</th><th>Priority</th><th>Case</th><th>Family</th><th>Metric</th><th>Value / Gate</th><th>Severity</th><th>Controls</th><th>Acceptance Action</th></tr></thead><tbody>{rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_board.py · tested package under source-code/learning/cvpr-remediation-board</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-board.html", page)


def main():
    data = build_input()
    summary = summarize(data)
    build_package(data)
    build_registry(summary, data)
    build_page(summary, data["tasks"])
    print(f"wrote cvpr-remediation-board.html: {summary['blockTasks']} block tasks, status {summary['status']}")


if __name__ == "__main__":
    main()

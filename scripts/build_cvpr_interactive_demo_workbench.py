"""Build the CVPR interactive demo workbench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PORTFOLIO = ROOT / "analysis/cvpr_deep_viewer_portfolio/registry.json"
REHYDRATION = ROOT / "analysis/cvpr_artifact_rehydration_queue/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_demo_workbench"
BASE = ROOT / "source-code/learning/cvpr-interactive-demo-workbench"

CORE = """export function interactionReady(row) {
  return row.mode === "interactive-cached" &&
    row.controls.length === 5 &&
    row.runtimeState.activeDemo === row.demoId &&
    row.runtimeState.availablePanels.length === 5 &&
    row.selectedPanel === "output" &&
    row.artifactDiff.status === "local-backed" &&
    row.failureProbe.verdict === "probe-ready" &&
    row.releaseAction === "promote-interactive-demo" &&
    row.replayCommand.includes(row.jobId);
}

export function workbenchGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "workbench-ready") return "block";
  if (summary.demos !== 8) return "block";
  if (summary.readyInteractions !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.controls !== 40) return "block";
  if (summary.localArtifacts !== 24) return "block";
  if (summary.runtimeControllers !== 8) return "block";
  if (summary.promoteInteractive !== 8) return "block";
  if (summary.holdInteractive !== 0) return "block";
  return "workbench-ready";
}

export function summarizeWorkbench(rows) {
  return {
    demos: rows.length,
    readyInteractions: rows.filter(interactionReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    controls: rows.reduce((sum, row) => sum + row.controls.length, 0),
    localArtifacts: rows.reduce((sum, row) => sum + row.artifactDiff.localArtifacts, 0),
    runtimeControllers: rows.filter((row) => row.runtimeState && row.runtimeState.activeDemo === row.demoId).length,
    promoteInteractive: rows.filter((row) => row.releaseAction === "promote-interactive-demo").length,
    holdInteractive: rows.filter((row) => row.releaseAction === "hold-interactive-demo").length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { workbenchRows, summary } from "../src/fixtures.js";
import { interactionReady, summarizeWorkbench, workbenchGate } from "../src/core.js";

assert.equal(workbenchRows.length, 8);
assert.equal(new Set(workbenchRows.map((row) => row.theme)).size, 8);
assert.equal(workbenchRows.every(interactionReady), true);
assert.equal(workbenchRows.every((row) => row.controls.length === 5), true);
assert.equal(workbenchRows.every((row) => row.runtimeState.availablePanels.length === 5), true);
assert.equal(workbenchRows.every((row) => row.artifactDiff.localArtifacts === 3), true);
assert.equal(workbenchRows.every((row) => row.failureProbe.verdict === "probe-ready"), true);
const derived = summarizeWorkbench(workbenchRows);
assert.equal(derived.readyInteractions, summary.readyInteractions);
assert.equal(derived.localArtifacts, summary.localArtifacts);
assert.equal(derived.runtimeControllers, summary.runtimeControllers);
assert.equal(workbenchGate(summary), "workbench-ready");
console.log("ok cvpr-interactive-demo-workbench:", summary.demos, "demos");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def artifact_map(artifact_rows):
    by_job = {}
    for row in artifact_rows:
        by_job.setdefault(row["jobId"], []).append(row)
    return by_job


def build_rows(portfolio, rehydration):
    artifacts_by_job = artifact_map(rehydration["artifactRows"])
    rows = []
    for viewer in portfolio["deepViewers"]:
        summary = viewer["summary"]
        artifacts = artifacts_by_job[viewer["jobId"]]
        controls = [
            {"id": "input", "label": "Input", "state": "selectable", "value": viewer["sampleInput"]},
            {"id": "output", "label": "Output", "state": "selected", "value": viewer["outputFixture"]},
            {"id": "failure", "label": "Failure Probe", "state": "available", "value": viewer["failureProbe"]},
            {"id": "artifacts", "label": "Artifacts", "state": "local-backed", "value": f"{len(artifacts)} local artifacts"},
            {"id": "replay", "label": "Replay", "state": "available", "value": viewer["replayCommand"]},
        ]
        row = {
            "demoId": f"interactive-{viewer['theme']}-{viewer['repoName'].lower().replace('_', '-').replace('.', '-')}",
            "jobId": viewer["jobId"],
            "theme": viewer["theme"],
            "repo": viewer["repoName"],
            "page": viewer["page"],
            "mode": "interactive-cached",
            "selectedPanel": "output",
            "controls": controls,
            "inputFixture": {
                "label": viewer["sampleInput"],
                "status": "loaded",
            },
            "outputFixture": {
                "label": viewer["expectedOutput"],
                "cached": viewer["outputFixture"],
                "status": "render-ready",
            },
            "artifactDiff": {
                "status": "local-backed",
                "localArtifacts": len([artifact for artifact in artifacts if artifact["status"] == "rehydrated"]),
                "paths": [artifact["path"] for artifact in artifacts],
            },
            "failureProbe": {
                "label": viewer["failureProbe"],
                "verdict": viewer["failureProbeVerdict"],
                "operatorAction": "compare cached output against failure probe before release",
            },
            "runtimeState": {
                "activeDemo": f"interactive-{viewer['theme']}-{viewer['repoName'].lower().replace('_', '-').replace('.', '-')}",
                "activePanel": "output",
                "availablePanels": [control["id"] for control in controls],
                "panelTarget": "workbench-panel",
                "artifactTarget": "workbench-artifacts",
            },
            "replayCommand": viewer["replayCommand"],
            "releaseAction": "promote-interactive-demo" if summary["artifactLocalPaths"] == 3 else "hold-interactive-demo",
        }
        rows.append(row)
    return rows


def summarize(rows, portfolio, rehydration):
    summary = {
        "workbench": "cvpr-interactive-demo-workbench",
        "status": "workbench-ready",
        "sourcePortfolio": "analysis/cvpr_deep_viewer_portfolio/registry.json",
        "sourceRehydration": "analysis/cvpr_artifact_rehydration_queue/registry.json",
        "portfolioStatus": portfolio["summary"]["status"],
        "rehydrationStatus": rehydration["summary"]["status"],
        "demos": len(rows),
        "readyInteractions": len([row for row in rows if row["releaseAction"] == "promote-interactive-demo"]),
        "themes": len({row["theme"] for row in rows}),
        "controls": sum(len(row["controls"]) for row in rows),
        "localArtifacts": sum(row["artifactDiff"]["localArtifacts"] for row in rows),
        "runtimeControllers": len([row for row in rows if row["runtimeState"]["activeDemo"] == row["demoId"]]),
        "promoteInteractive": len([row for row in rows if row["releaseAction"] == "promote-interactive-demo"]),
        "holdInteractive": len([row for row in rows if row["releaseAction"] == "hold-interactive-demo"]),
        "validator": "scripts/verify_cvpr_interactive_demo_workbench.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["portfolioStatus"] == "portfolio-ready"
        and summary["rehydrationStatus"] == "rehydrated"
        and summary["demos"] == 8
        and summary["readyInteractions"] == 8
        and summary["themes"] == 8
        and summary["controls"] == 40
        and summary["localArtifacts"] == 24
        and summary["runtimeControllers"] == 8
        and summary["holdInteractive"] == 0
    )
    summary["status"] = "workbench-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const workbenchRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Demo Workbench\n\nInteractive-cached workbench state for eight CVPR deep viewers with selectable controls, local artifact diffs, failure probes, replay commands, and release actions.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "workbenchRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Demos", summary["demos"]),
        ("Themes", summary["themes"]),
        ("Controls", summary["controls"]),
        ("Artifacts", summary["localArtifacts"]),
        ("Runtime", summary["runtimeControllers"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    cards = ""
    for row in rows:
        controls = "".join(f"<button type=\"button\" class=\"{esc(control['state'])}\" data-demo=\"{esc(row['demoId'])}\" data-panel=\"{esc(control['id'])}\">{esc(control['label'])}</button>" for control in row["controls"])
        artifacts = "".join(f"<li>{esc(path)}</li>" for path in row["artifactDiff"]["paths"])
        cards += f"""<article class="demo" data-demo-card="{esc(row['demoId'])}"><div class="meta">{esc(row['theme'])} / <span data-release>{esc(row['releaseAction'])}</span> / {esc(row['mode'])}</div><h2>{esc(row['repo'])}</h2><div class="controls">{controls}</div><section class="runtime-panel" data-panel-output>{esc(row['outputFixture']['cached'])}</section><dl><dt>input</dt><dd>{esc(row['inputFixture']['label'])}</dd><dt>failure</dt><dd>{esc(row['failureProbe']['label'])} / {esc(row['failureProbe']['verdict'])}</dd></dl><ul data-artifact-list>{artifacts}</ul><code data-replay>{esc(row['replayCommand'])}</code><a href="{esc(row['page'])}">open deep viewer</a></article>"""
    payload = json.dumps(rows)
    runtime = """<script id="workbench-data" type="application/json">__PAYLOAD__</script><script>
const workbenchRows = JSON.parse(document.getElementById("workbench-data").textContent);
const byDemo = new Map(workbenchRows.map((row) => [row.demoId, row]));
function renderPanel(card, row, panel) {
  const target = card.querySelector("[data-panel-output]");
  const artifacts = card.querySelector("[data-artifact-list]");
  const replay = card.querySelector("[data-replay]");
  const values = {
    input: row.inputFixture.label,
    output: row.outputFixture.cached,
    failure: `${row.failureProbe.label} / ${row.failureProbe.verdict}`,
    artifacts: `${row.artifactDiff.localArtifacts} local artifacts`,
    replay: row.replayCommand
  };
  target.textContent = values[panel] || row.outputFixture.cached;
  artifacts.innerHTML = row.artifactDiff.paths.map((path) => `<li>${path}</li>`).join("");
  replay.textContent = row.replayCommand;
  card.querySelectorAll("button[data-panel]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.panel === panel);
  });
  card.dataset.activePanel = panel;
}
document.querySelectorAll("button[data-demo][data-panel]").forEach((button) => {
  button.addEventListener("click", () => {
    const row = byDemo.get(button.dataset.demo);
    const card = button.closest("[data-demo-card]");
    renderPanel(card, row, button.dataset.panel);
  });
});
document.querySelectorAll("[data-demo-card]").forEach((card) => {
  const row = byDemo.get(card.dataset.demoCard);
  renderPanel(card, row, row.selectedPanel);
});
</script>""".replace("__PAYLOAD__", payload.replace("</script", "<\\/script"))
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Demo Workbench</title><style>:root{{--ink:#111719;--paper:#F5F6F2;--panel:#fff;--line:#D8DEDA;--muted:#5C6664;--accent:#255D68;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#142326;color:#F2F7F6;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,button,dt,li,.runtime-panel{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D7}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CBDAD8}}nav a{{color:#D7F1EE;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.demo{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.demo{{padding:16px}}.demo h2{{font-size:23px;margin:4px 0 10px}}.controls{{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}}button{{border:1px solid var(--line);background:#F7F9F7;border-radius:6px;padding:8px 10px;color:var(--ink)}}button.selected{{background:#DDEDEB;border-color:#8AB9B6}}button.local-backed,button.available{{background:#EEF5EA}}.runtime-panel{{min-height:72px;background:#EDF2F0;border-radius:6px;padding:10px;overflow-wrap:anywhere}}dl{{display:grid;grid-template-columns:92px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}li{{font-size:12px;margin:3px 0;overflow-wrap:anywhere}}code{{display:block;background:#EDF2F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive cached demos</div><h1>Interactive Demo Workbench</h1><p>Eight local-artifact-backed CVPR demo states with selectable controls, cached output fixtures, failure probes, artifact diffs, replay commands, and release actions.</p><nav><a href="index.html">all demos</a><a href="cvpr-deep-viewer-portfolio.html">deep viewer portfolio</a><a href="cvpr-artifact-rehydration-queue.html">artifact rehydration</a><a href="analysis/cvpr_interactive_demo_workbench/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{cards}</section><section class="demo"><h2>Workbench Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main>{runtime}<footer><div class="wrap">Generated by scripts/build_cvpr_interactive_demo_workbench.py - package: source-code/learning/cvpr-interactive-demo-workbench</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-demo-workbench.html", page)


def main():
    portfolio = read_json(PORTFOLIO)
    rehydration = read_json(REHYDRATION)
    rows = build_rows(portfolio, rehydration)
    summary = summarize(rows, portfolio, rehydration)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-demo-workbench.html: {summary['demos']} demos, status {summary['status']}")


if __name__ == "__main__":
    main()

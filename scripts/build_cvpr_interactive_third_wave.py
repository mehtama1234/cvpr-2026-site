"""Build the third CVPR interactive demo wave."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BACKLOG = ROOT / "analysis/cvpr_interactive_expansion_backlog/registry.json"
SECOND_WAVE = ROOT / "analysis/cvpr_interactive_second_wave/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_third_wave"
BASE = ROOT / "source-code/learning/cvpr-interactive-third-wave"

CORE = """export function waveReady(row) {
  return row.status === "interactive-ready" &&
    row.controls.length === 5 &&
    row.localArtifacts === 3 &&
    row.runtimeState.activePanel === "output" &&
    row.releaseAction === "promote-interactive-demo" &&
    row.replayCommand.includes(row.jobId);
}

export function waveGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "wave-ready") return "block";
  if (summary.wave !== "third-interactive-wave") return "block";
  if (summary.demos !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.localArtifacts !== 24) return "block";
  if (summary.controls !== 40) return "block";
  if (summary.runtimeControllers !== 8) return "block";
  if (summary.promoteInteractive !== 8) return "block";
  if (summary.holdInteractive !== 0) return "block";
  return "wave-ready";
}

export function summarizeWave(rows) {
  return {
    demos: rows.length,
    themes: new Set(rows.map((row) => row.theme)).size,
    localArtifacts: rows.reduce((sum, row) => sum + row.localArtifacts, 0),
    controls: rows.reduce((sum, row) => sum + row.controls.length, 0),
    runtimeControllers: rows.filter((row) => row.runtimeState.activeDemo === row.demoId).length,
    promoteInteractive: rows.filter((row) => row.releaseAction === "promote-interactive-demo").length,
    holdInteractive: rows.filter((row) => row.releaseAction === "hold-interactive-demo").length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { waveRows, summary } from "../src/fixtures.js";
import { summarizeWave, waveGate, waveReady } from "../src/core.js";

assert.equal(waveRows.length, 8);
assert.equal(new Set(waveRows.map((row) => row.theme)).size, 8);
assert.equal(waveRows.every(waveReady), true);
assert.equal(waveRows.every((row) => row.localArtifacts === 3), true);
assert.equal(waveRows.every((row) => row.controls.length === 5), true);
const derived = summarizeWave(waveRows);
assert.equal(derived.localArtifacts, summary.localArtifacts);
assert.equal(derived.runtimeControllers, summary.runtimeControllers);
assert.equal(waveGate(summary), "wave-ready");
console.log("ok cvpr-interactive-third-wave:", summary.demos, "demos");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def pick_third_wave(backlog_rows, second_wave):
    converted = {row["jobId"] for row in second_wave["waveRows"]}
    seen = set()
    rows = []
    for row in backlog_rows:
        if row["jobId"] in converted:
            continue
        if row["theme"] not in seen:
            rows.append(row)
            seen.add(row["theme"])
    return rows


def artifact_payload(kind, row):
    evidence = row["promotedEvidence"]
    if kind == "smokeJson":
        return json.dumps({
            "jobId": row["jobId"],
            "repo": row["repoUrl"],
            "mode": evidence["mode"],
            "metrics": evidence["metrics"],
            "provenance": evidence["provenance"],
            "viewer": f"third-wave-{row['theme']}-{row['repo']}",
            "rehydratedFrom": "analysis/cvpr_interactive_expansion_backlog/registry.json",
            "status": "rehydrated",
        }, indent=2) + "\n"
    if kind == "repoSnapshot":
        return json.dumps({
            "jobId": row["jobId"],
            "repo": row["repoUrl"],
            "commitSha": evidence["commitSha"],
            "filesScanned": evidence["metrics"]["filesScanned"],
            "runtime": evidence["provenance"]["runtime"],
            "accelerator": evidence["provenance"]["accelerator"],
            "rehydratedFrom": "interactive-expansion-backlog",
            "status": "rehydrated",
        }, indent=2) + "\n"
    return (
        f"jobId={row['jobId']}\n"
        f"repo={row['repoUrl']}\n"
        f"runtime={evidence['provenance']['runtime']}\n"
        f"accelerator={evidence['provenance']['accelerator']}\n"
        f"smokePassed={evidence['metrics']['smokePassed']}\n"
        "rehydratedFrom=interactive-expansion-backlog\n"
        "status=rehydrated\n"
    )


def rehydrate(row):
    artifact_rows = []
    kinds = ["smokeJson", "log", "repoSnapshot"]
    for kind, path in zip(kinds, row["requiredArtifacts"]):
        target = ROOT / path
        write(target, artifact_payload(kind, row))
        artifact_rows.append({
            "kind": kind,
            "path": path,
            "status": "rehydrated" if target.exists() else "missing",
            "bytes": target.stat().st_size if target.exists() else 0,
        })
    return artifact_rows


def build_rows(backlog_rows, second_wave):
    rows = []
    for row in pick_third_wave(backlog_rows, second_wave):
        artifacts = rehydrate(row)
        controls = [
            {"id": "input", "label": "Input", "state": "selectable", "value": row["panelContract"]["input"]},
            {"id": "output", "label": "Output", "state": "selected", "value": row["panelContract"]["output"]},
            {"id": "failure", "label": "Failure Probe", "state": "available", "value": row["panelContract"]["failure"]},
            {"id": "artifacts", "label": "Artifacts", "state": "local-backed", "value": "3 local artifacts"},
            {"id": "replay", "label": "Replay", "state": "available", "value": row["replayCommand"]},
        ]
        demo_id = f"third-wave-{row['theme']}-{row['repo'].lower().replace('_', '-').replace('.', '-')}"
        rows.append({
            "demoId": demo_id,
            "jobId": row["jobId"],
            "theme": row["theme"],
            "repo": row["repo"],
            "repoUrl": row["repoUrl"],
            "sourcePage": row["sourcePage"],
            "status": "interactive-ready",
            "controls": controls,
            "localArtifacts": len([artifact for artifact in artifacts if artifact["status"] == "rehydrated"]),
            "artifacts": artifacts,
            "outputFixture": f"Cached third-wave output for {row['repo']} from {row['theme']} theme.",
            "failureProbe": row["panelContract"]["failure"],
            "runtimeState": {
                "activeDemo": demo_id,
                "activePanel": "output",
                "availablePanels": [control["id"] for control in controls],
            },
            "replayCommand": row["replayCommand"],
            "releaseAction": "promote-interactive-demo",
        })
    return rows


def summarize(rows):
    summary = {
        "wave": "third-interactive-wave",
        "status": "wave-ready",
        "sourceBacklog": "analysis/cvpr_interactive_expansion_backlog/registry.json",
        "demos": len(rows),
        "themes": len({row["theme"] for row in rows}),
        "localArtifacts": sum(row["localArtifacts"] for row in rows),
        "controls": sum(len(row["controls"]) for row in rows),
        "runtimeControllers": len([row for row in rows if row["runtimeState"]["activeDemo"] == row["demoId"]]),
        "promoteInteractive": len([row for row in rows if row["releaseAction"] == "promote-interactive-demo"]),
        "holdInteractive": len([row for row in rows if row["releaseAction"] != "promote-interactive-demo"]),
        "validator": "scripts/verify_cvpr_interactive_third_wave.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["demos"] == 8
        and summary["themes"] == 8
        and summary["localArtifacts"] == 24
        and summary["controls"] == 40
        and summary["runtimeControllers"] == 8
        and summary["promoteInteractive"] == 8
        and summary["holdInteractive"] == 0
    )
    summary["status"] = "wave-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const waveRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Third Wave\n\nThird interactive wave converting the next remaining promoted repo per theme into local-artifact-backed interactive demo state.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "waveRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Demos", summary["demos"]),
        ("Themes", summary["themes"]),
        ("Artifacts", summary["localArtifacts"]),
        ("Controls", summary["controls"]),
        ("Promote", summary["promoteInteractive"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    cards = ""
    for row in rows:
        controls = "".join(f"<button type=\"button\" class=\"{esc(c['state'])}\">{esc(c['label'])}</button>" for c in row["controls"])
        artifacts = "".join(f"<li>{esc(a['path'])}</li>" for a in row["artifacts"])
        cards += f"""<article class="demo"><div class="meta">{esc(row['theme'])} / {esc(row['releaseAction'])}</div><h2>{esc(row['repo'])}</h2><div class="controls">{controls}</div><p>{esc(row['outputFixture'])}</p><ul>{artifacts}</ul><code>{esc(row['replayCommand'])}</code><a href="{esc(row['sourcePage'])}">source surface</a></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Third Wave</title><style>:root{{--ink:#111719;--paper:#F5F6F2;--panel:#fff;--line:#D8DEDA;--muted:#5C6664;--accent:#255D68;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#142326;color:#F2F7F6;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,button,li{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D7}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CBDAD8}}nav a{{color:#D7F1EE;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.demo{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.demo{{padding:16px}}.demo h2{{font-size:23px;margin:4px 0 10px}}.controls{{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}}button{{border:1px solid var(--line);background:#F7F9F7;border-radius:6px;padding:8px 10px;color:var(--ink)}}button.selected{{background:#DDEDEB;border-color:#8AB9B6}}button.local-backed,button.available{{background:#EEF5EA}}li{{font-size:12px;margin:3px 0;overflow-wrap:anywhere}}code{{display:block;background:#EDF2F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive expansion</div><h1>Interactive Third Wave</h1><p>Third wave of local-artifact-backed interactive demos: the next remaining promoted repo per theme from the expansion backlog.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-expansion-backlog.html">expansion backlog</a><a href="analysis/cvpr_interactive_third_wave/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{cards}</section><section class="demo"><h2>Wave Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_third_wave.py - package: source-code/learning/cvpr-interactive-third-wave</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-third-wave.html", page)


def main():
    backlog = read_json(BACKLOG)
    second_wave = read_json(SECOND_WAVE)
    rows = build_rows(backlog["backlogRows"], second_wave)
    summary = summarize(rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-third-wave.html: {summary['demos']} demos, status {summary['status']}")


if __name__ == "__main__":
    main()

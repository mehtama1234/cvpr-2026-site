"""Build the CVPR repo harness promotion command center."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-repo-harness-command-center"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_command_center"

SOURCES = {
    "cached": ROOT / "analysis/cvpr_repo_gpu_harness/registry.json",
    "intake": ROOT / "analysis/cvpr_repo_harness_live_intake/registry.json",
    "planner": ROOT / "analysis/cvpr_repo_harness_wave_planner/registry.json",
    "handoff": ROOT / "analysis/cvpr_repo_harness_handoff_package/registry.json",
    "execution": ROOT / "analysis/cvpr_repo_harness_execution_dashboard/registry.json",
    "board": ROOT / "analysis/cvpr_repo_harness_promotion_board/registry.json",
    "delta": ROOT / "analysis/cvpr_repo_harness_promotion_delta/registry.json",
    "receipt": ROOT / "analysis/cvpr_repo_harness_replacement_receipt/registry.json",
}

NEXT_WAVE = [
    {
        "theme": "frontier",
        "demo": "Frontier Sensor Fusion Live Evidence Drill",
        "target": "promote live optical-SAR, remote sensing, watermark, provenance, and geospatial grounding repo outputs into inspectable artifacts",
        "surface": "cvpr-frontier-sensor-fusion-bench.html",
        "repoCount": 5,
    },
    {
        "theme": "threed",
        "demo": "3D World Reconstruction Evidence Room",
        "target": "turn promoted avatar, dynamic Gaussian, SLAM, low-light, and pruning repos into before/after geometry evidence",
        "surface": "cvpr-3d-world-repo-arena.html",
        "repoCount": 5,
    },
    {
        "theme": "video",
        "demo": "Video Temporal Failure Replay Lab",
        "target": "convert promoted temporal repos into replayable HOI, swapping, counterfactual, event, and action-boundary scenarios",
        "surface": "cvpr-video-temporal-repo-lab.html",
        "repoCount": 5,
    },
    {
        "theme": "generation",
        "demo": "Generation Control Artifact Studio",
        "target": "promote restoration, diffusion bridge, one-step SR, and artifact containment outputs into controllable demo cases",
        "surface": "cvpr-generation-control-repo-studio.html",
        "repoCount": 5,
    },
    {
        "theme": "vlm",
        "demo": "Grounded VLM Evidence Court",
        "target": "bind promoted fusion, privacy, graph reasoning, retrieval, and visual checking repos into adjudicated evidence rows",
        "surface": "cvpr-grounded-vlm-repo-court.html",
        "repoCount": 5,
    },
    {
        "theme": "perception",
        "demo": "Perception Parts Stress Bench",
        "target": "turn segmentation, pseudo-label, few-shot, panoramic, and camouflage localization repo outputs into part-level failures",
        "surface": "cvpr-perception-parts-repo-bench.html",
        "repoCount": 5,
    },
    {
        "theme": "embodied",
        "demo": "Embodied Control Policy Drill",
        "target": "convert promoted driving, visual RL, manipulation, curriculum, and GUI-agent repos into policy evidence drills",
        "surface": "cvpr-embodied-control-repo-drill.html",
        "repoCount": 5,
    },
    {
        "theme": "learning",
        "demo": "Efficient Learning Governor Replay",
        "target": "promote sparsity, pruning, forward-only adaptation, and continual drift repos into runtime governance evidence",
        "surface": "cvpr-efficient-learning-repo-governor.html",
        "repoCount": 5,
    },
]

CORE = """export function surfaceReady(row) {
  return row.actual === row.expected && row.evidence && row.surface && row.command;
}

export function targetReady(row) {
  return row.repoCount === 5 && row.surface.endsWith(".html") && row.target.length > 40;
}

export function commandGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "operator-ready") return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.readySurfaces !== 8) return "block";
  if (summary.jobs !== 40) return "block";
  if (summary.promotedRows !== 40) return "block";
  if (summary.rollbackRows !== 40) return "block";
  if (summary.nextWaveTargets !== 8) return "block";
  return "operator-ready";
}

export function summarizeCommandCenter(surfaceRows, nextWaveRows, receiptSummary) {
  const summary = {
    commandCenter: "cvpr-repo-harness-command-center",
    surfaces: surfaceRows.length,
    readySurfaces: surfaceRows.filter(surfaceReady).length,
    nextWaveTargets: nextWaveRows.filter(targetReady).length,
    jobs: receiptSummary.jobs,
    promotedRows: receiptSummary.promotedRows,
    rollbackRows: receiptSummary.rollbackRows
  };
  return { ...summary, status: commandGate({ ...summary, status: "operator-ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { nextWaveRows, receiptSummary, summary, surfaceRows } from "../src/fixtures.js";
import { commandGate, summarizeCommandCenter, surfaceReady, targetReady } from "../src/core.js";

assert.equal(surfaceRows.length, 8);
assert.equal(surfaceRows.filter(surfaceReady).length, 8);
assert.equal(nextWaveRows.length, 8);
assert.equal(nextWaveRows.filter(targetReady).length, 8);
const derived = summarizeCommandCenter(surfaceRows, nextWaveRows, receiptSummary);
assert.equal(derived.status, "operator-ready");
assert.equal(summary.status, "operator-ready");
assert.equal(commandGate(summary), "operator-ready");
assert.equal(summary.jobs, 40);
assert.equal(summary.promotedRows, 40);
assert.equal(summary.rollbackRows, 40);
console.log("ok cvpr-repo-harness-command-center:", summary.readySurfaces, "surfaces ready");
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


def summary_of(data, key):
    return data[key]["summary"]


def build_surface_rows(data):
    return [
        {
            "surface": "cvpr-repo-gpu-harness.html",
            "label": "Cached repo GPU harness",
            "actual": summary_of(data, "cached")["status"],
            "expected": "ready",
            "metric": f"{summary_of(data, 'cached')['readyJobs']} cached contracts",
            "evidence": "analysis/cvpr_repo_gpu_harness/registry.json",
            "command": "python3 scripts/verify_cvpr_repo_gpu_harness.py",
        },
        {
            "surface": "cvpr-repo-harness-live-intake.html",
            "label": "Live Colab intake",
            "actual": summary_of(data, "intake")["status"],
            "expected": "valid",
            "metric": f"{summary_of(data, 'intake')['validJobs']} valid live rows",
            "evidence": "analysis/cvpr_repo_harness_live_intake/registry.json",
            "command": "python3 scripts/verify_cvpr_repo_harness_live_intake.py",
        },
        {
            "surface": "cvpr-repo-harness-wave-planner.html",
            "label": "Wave planner",
            "actual": summary_of(data, "planner")["status"],
            "expected": "ready",
            "metric": f"{summary_of(data, 'planner')['waves']} waves / {summary_of(data, 'planner')['batchSize']} per batch",
            "evidence": "analysis/cvpr_repo_harness_wave_planner/registry.json",
            "command": "python3 scripts/verify_cvpr_repo_harness_wave_planner.py",
        },
        {
            "surface": "cvpr-repo-harness-handoff-package.html",
            "label": "Colab handoff package",
            "actual": summary_of(data, "handoff")["status"],
            "expected": "ready",
            "metric": f"{len(summary_of(data, 'handoff')['zipEntries'])} zip entries",
            "evidence": "analysis/cvpr_repo_harness_handoff_package/registry.json",
            "command": "python3 scripts/verify_cvpr_repo_harness_handoff_package.py",
        },
        {
            "surface": "cvpr-repo-harness-execution-dashboard.html",
            "label": "Execution dashboard",
            "actual": summary_of(data, "execution")["status"],
            "expected": "ready",
            "metric": f"{summary_of(data, 'execution')['readyWaves']} ready waves",
            "evidence": "analysis/cvpr_repo_harness_execution_dashboard/registry.json",
            "command": "python3 scripts/verify_cvpr_repo_harness_execution_dashboard.py",
        },
        {
            "surface": "cvpr-repo-harness-promotion-board.html",
            "label": "Promotion board",
            "actual": summary_of(data, "board")["status"],
            "expected": "ready",
            "metric": f"{summary_of(data, 'board')['promote']} promote / {summary_of(data, 'board')['hold']} hold",
            "evidence": "analysis/cvpr_repo_harness_promotion_board/registry.json",
            "command": "python3 scripts/verify_cvpr_repo_harness_promotion_board.py",
        },
        {
            "surface": "cvpr-repo-harness-promotion-delta.html",
            "label": "Promotion delta",
            "actual": summary_of(data, "delta")["status"],
            "expected": "ready",
            "metric": f"{summary_of(data, 'delta')['readyRows']} ready replacements",
            "evidence": "analysis/cvpr_repo_harness_promotion_delta/registry.json",
            "command": "python3 scripts/verify_cvpr_repo_harness_promotion_delta.py",
        },
        {
            "surface": "cvpr-repo-harness-replacement-receipt.html",
            "label": "Replacement receipt",
            "actual": summary_of(data, "receipt")["status"],
            "expected": "ready",
            "metric": f"{summary_of(data, 'receipt')['promotedRows']} promoted / {summary_of(data, 'receipt')['rollbackRows']} rollback",
            "evidence": "analysis/cvpr_repo_harness_replacement_receipt/registry.json",
            "command": "python3 scripts/verify_cvpr_repo_harness_replacement_receipt.py",
        },
    ]


def summarize(data, rows, next_wave_rows):
    receipt = summary_of(data, "receipt")
    ready = len([row for row in rows if row["actual"] == row["expected"]])
    summary = {
        "commandCenter": "cvpr-repo-harness-command-center",
        "status": "operator-ready",
        "surfaces": len(rows),
        "readySurfaces": ready,
        "jobs": receipt["jobs"],
        "repos": summary_of(data, "cached")["repos"],
        "waves": summary_of(data, "planner")["waves"],
        "liveValid": summary_of(data, "intake")["validJobs"],
        "intakeIssues": summary_of(data, "intake")["issues"],
        "promoteWaves": summary_of(data, "board")["promote"],
        "holdWaves": summary_of(data, "board")["hold"],
        "deltaReadyRows": summary_of(data, "delta")["readyRows"],
        "promotedRows": receipt["promotedRows"],
        "rollbackRows": receipt["rollbackRows"],
        "nextWaveTargets": len(next_wave_rows),
        "promotedArtifact": receipt["promotedArtifact"],
        "rollbackArtifact": receipt["rollbackArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["surfaces"] == 8
        and summary["readySurfaces"] == 8
        and summary["jobs"] == 40
        and summary["repos"] == 40
        and summary["waves"] == 8
        and summary["liveValid"] == 40
        and summary["intakeIssues"] == 0
        and summary["promoteWaves"] == 8
        and summary["holdWaves"] == 0
        and summary["deltaReadyRows"] == 40
        and summary["promotedRows"] == 40
        and summary["rollbackRows"] == 40
        and summary["nextWaveTargets"] == 8
    )
    summary["status"] = "operator-ready" if gate else "block"
    return summary


def build_package(rows, next_wave_rows, summary, receipt_summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const surfaceRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const nextWaveRows = " + json.dumps(next_wave_rows, indent=2) + ";\n"
        "export const receiptSummary = " + json.dumps(receipt_summary, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness Command Center\n\nOperator command center for the repo harness chain, from cached contracts and live Colab intake through promotion, rollback, and next-wave demo targets.\n")


def build_registry(rows, next_wave_rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "surfaceRows": rows,
                "nextWaveRows": next_wave_rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(rows, next_wave_rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Surfaces", summary["surfaces"]),
        ("Jobs", summary["jobs"]),
        ("Promoted", summary["promotedRows"]),
        ("Rollback", summary["rollbackRows"]),
        ("Targets", summary["nextWaveTargets"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['surface'])}">{esc(row['label'])}</a></td><td>{esc(row['actual'])}</td><td>{esc(row['expected'])}</td><td>{esc(row['metric'])}</td><td>{esc(row['evidence'])}</td><td><code>{esc(row['command'])}</code></td></tr>"""
        for row in rows
    )
    wave_html = "".join(
        f"""<article class="target"><div>{esc(row['theme'])}</div><h3><a href="{esc(row['surface'])}">{esc(row['demo'])}</a></h3><p>{esc(row['target'])}</p><code>{row['repoCount']} promoted repos</code></article>"""
        for row in next_wave_rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness Command Center</title>
<style>:root{{--ink:#111719;--paper:#F6F7F2;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0E665D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:#17211F;color:#EFF7F2;padding:42px 0 34px}}.bug,nav a,.stat span,th,code,.target div{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#9ED8CD}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:110ch;color:#CBD8D3}}nav a{{font-size:12px;color:#CBEFE7;margin-right:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel,.target{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span,.target div{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F0;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.targets{{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px}}.target{{padding:14px}}.target h3{{font-size:17px;margin:5px 0 8px}}.target p{{font-size:13px;color:#34403B}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:1000px){{.stats,.targets{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}@media(max-width:620px){{.stats,.targets{{grid-template-columns:1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - repo harness command</div><h1>Repo Harness Command Center</h1><p>One operator surface for the CVPR repo execution chain: cached contracts, live Colab intake, wave plan, handoff, execution status, promotion decisions, replacement delta, rollback state, and the next round of demo targets.</p><nav><a href="index.html">all themes</a><a href="cvpr-repo-harness-replacement-receipt.html">replacement receipt</a><a href="cvpr-repo-harness-promotion-delta.html">promotion delta</a><a href="cvpr-repo-harness-execution-dashboard.html">execution</a><a href="analysis/cvpr_repo_harness_command_center/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Execution Surfaces</h2><table><thead><tr><th>Surface</th><th>Actual</th><th>Expected</th><th>Metric</th><th>Evidence</th><th>Verifier</th></tr></thead><tbody>{rows_html}</tbody></table></section><h2>Next Demo Wave</h2><section class="targets">{wave_html}</section><section class="panel"><h2>Operator Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['promotedArtifact'])}</code><code>rollback: {esc(summary['rollbackArtifact'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_command_center.py - tested package under source-code/learning/cvpr-repo-harness-command-center</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-command-center.html", page)


def main():
    data = load_input()
    rows = build_surface_rows(data)
    summary = summarize(data, rows, NEXT_WAVE)
    build_package(rows, NEXT_WAVE, summary, summary_of(data, "receipt"))
    build_registry(rows, NEXT_WAVE, summary)
    build_page(rows, NEXT_WAVE, summary)
    print(f"wrote cvpr-repo-harness-command-center.html: {summary['readySurfaces']} surfaces, {summary['nextWaveTargets']} targets, status {summary['status']}")


if __name__ == "__main__":
    main()

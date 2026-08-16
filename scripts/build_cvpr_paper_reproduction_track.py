"""Build the CVPR paper reproduction demo track."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COMMAND = ROOT / "analysis/cvpr_live_evidence_command_center/registry.json"
MANIFEST = ROOT / "analysis/cvpr_live_evidence_release_manifest/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_paper_reproduction_track"
BASE = ROOT / "source-code/learning/cvpr-paper-reproduction-track"

THEME_ORDER = ["frontier", "threed", "video", "generation", "vlm", "perception", "embodied", "learning"]

SCENARIOS = {
    "frontier": {
        "title": "Frontier Sensor Fusion Reproduction",
        "demoQuestion": "Can the repo evidence support a non-RGB perception demo with provenance and modality-shift checks?",
        "sampleInput": "optical/SAR pair, event burst, or geospatial tile with degraded RGB evidence",
        "expectedOutput": "cross-modal readiness card with artifact link, smoke result, failure probe, and replay command",
        "failureProbe": "sensor mismatch, occlusion, and provenance loss",
    },
    "threed": {
        "title": "3D World Reconstruction Reproduction",
        "demoQuestion": "Can the repo evidence support a geometry demo that exposes reconstruction assumptions and failure cases?",
        "sampleInput": "multi-view image set, avatar frame, LiDAR fragment, or 4D scene snippet",
        "expectedOutput": "geometry readiness card with snapshot artifact, runtime gate, and rollback target",
        "failureProbe": "pose drift, missing views, geometry collapse, and identity leakage",
    },
    "video": {
        "title": "Video Temporal Reproduction",
        "demoQuestion": "Can the repo evidence support temporal generation or tracking demos without hiding drift?",
        "sampleInput": "short clip, frame sequence, or prompt-conditioned motion seed",
        "expectedOutput": "temporal output contract with artifact replay, drift probe, and review threshold",
        "failureProbe": "long-horizon drift, identity swap, hallucinated motion, and dropped objects",
    },
    "generation": {
        "title": "Generation Control Reproduction",
        "demoQuestion": "Can the repo evidence support a controllable generation demo with measurable constraints?",
        "sampleInput": "prompt, degraded image, restoration target, or preference-control request",
        "expectedOutput": "generation comparison panel with constraint status, artifact trace, and promotion decision",
        "failureProbe": "prompt leakage, over-smoothing, restoration hallucination, and reward gaming",
    },
    "vlm": {
        "title": "Grounded VLM Reproduction",
        "demoQuestion": "Can the repo evidence support grounded answer checks instead of unverified captions?",
        "sampleInput": "image plus question, retrieval context, graph prompt, or privacy-sensitive visual evidence",
        "expectedOutput": "answer/evidence verdict with source artifact, grounding notes, and escalation gate",
        "failureProbe": "ungrounded answer, private attribute leak, graph shortcut, and retrieval mismatch",
    },
    "perception": {
        "title": "Perception Parts Reproduction",
        "demoQuestion": "Can the repo evidence support part, mask, or detection demos on difficult visual regimes?",
        "sampleInput": "open-vocabulary scene, panoramic frame, camouflaged object, or few-shot support set",
        "expectedOutput": "mask/detection readiness panel with artifact-backed smoke result and failure tag",
        "failureProbe": "small object miss, class synonym drift, pseudo-label collapse, and occlusion",
    },
    "embodied": {
        "title": "Embodied Control Reproduction",
        "demoQuestion": "Can the repo evidence support an action demo that exposes policy safety and recovery?",
        "sampleInput": "driving scene, GUI task, manipulation state, or visual RL observation",
        "expectedOutput": "policy readiness card with action trace, artifact evidence, and safety review path",
        "failureProbe": "unsafe action, reward shortcut, recovery failure, and scene distribution shift",
    },
    "learning": {
        "title": "Efficient Learning Reproduction",
        "demoQuestion": "Can the repo evidence support an efficiency demo that preserves quality under compression or adaptation?",
        "sampleInput": "few-shot batch, continual stream, pruning target, or token budget",
        "expectedOutput": "cost/quality tradeoff card with promoted artifact, runtime gate, and rollback path",
        "failureProbe": "quality cliff, adaptation drift, memory blow-up, and stale calibration",
    },
}

CORE = """export function reproductionScore(row) {
  const readiness = Number(row.readiness ?? 0);
  const smoke = row.smokePassed ? 24 : -50;
  const artifacts = row.artifactsComplete ? 18 : -20;
  const scenario = row.sampleInput && row.expectedOutput && row.failureProbe ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 14 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifacts + scenario + replay)).toFixed(1));
}

export function reproductionDecision(row) {
  const score = reproductionScore(row);
  if (score >= 88) return "build-interactive-demo";
  if (score >= 72) return "build-cached-demo";
  if (score >= 60) return "needs-repro-pass";
  return "hold";
}

export function trackGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "track-ready") return "block";
  if (summary.reproductions !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.liveRows !== 8) return "block";
  if (summary.smokePassed !== 8) return "block";
  if (summary.artifactsComplete !== 8) return "block";
  if (summary.hold !== 0) return "block";
  if (summary.minReproductionScore < 72) return "block";
  return "track-ready";
}

export function summarizeTrack(rows) {
  const scored = rows.map((row) => ({ ...row, reproductionScore: reproductionScore(row), decision: reproductionDecision(row) }));
  return {
    reproductions: scored.length,
    themes: new Set(scored.map((row) => row.theme)).size,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifactsComplete: scored.filter((row) => row.artifactsComplete).length,
    interactive: scored.filter((row) => row.decision === "build-interactive-demo").length,
    cached: scored.filter((row) => row.decision === "build-cached-demo").length,
    needsReproPass: scored.filter((row) => row.decision === "needs-repro-pass").length,
    hold: scored.filter((row) => row.decision === "hold").length,
    minReproductionScore: Math.min(...scored.map((row) => row.reproductionScore)),
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { reproductionRows, summary } from "../src/fixtures.js";
import { reproductionDecision, reproductionScore, summarizeTrack, trackGate } from "../src/core.js";

assert.equal(reproductionRows.length, 8);
assert.equal(new Set(reproductionRows.map((row) => row.theme)).size, 8);
assert.equal(reproductionRows.every((row) => row.mode === "live-colab"), true);
assert.equal(reproductionRows.every((row) => row.smokePassed), true);
assert.equal(reproductionRows.every((row) => row.artifactsComplete), true);
assert.equal(reproductionRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.equal(reproductionRows.every((row) => row.demoQuestion.length > 40), true);
assert.ok(reproductionRows.every((row) => reproductionScore(row) >= 72));
assert.equal(reproductionRows.every((row) => reproductionDecision(row) !== "hold"), true);
const derived = summarizeTrack(reproductionRows);
assert.equal(derived.reproductions, summary.reproductions);
assert.equal(derived.themes, summary.themes);
assert.equal(trackGate(summary), "track-ready");
console.log("ok cvpr-paper-reproduction-track:", summary.reproductions, "reproductions");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def repo_name(repo):
    return repo.rstrip("/").split("/")[-1]


def first_by_theme(rows):
    selected = {}
    for row in rows:
        theme = row["jobId"].split("-")[0]
        if theme not in selected:
            selected[theme] = row
    return [selected[theme] for theme in THEME_ORDER]


def artifacts_complete(row):
    artifacts = row["artifacts"]
    return all(artifacts.get(key) for key in ("smokeJson", "log", "repoSnapshot")) and row["evidenceArtifact"].endswith(".json")


def build_rows(promoted):
    rows = []
    for result in first_by_theme(promoted):
        theme = result["jobId"].split("-")[0]
        scenario = SCENARIOS[theme]
        artifacts = result["artifacts"]
        row = {
            "jobId": result["jobId"],
            "theme": theme,
            "repo": result["repo"],
            "repoName": repo_name(result["repo"]),
            "mode": result["mode"],
            "page": result["page"],
            "title": scenario["title"],
            "demoQuestion": scenario["demoQuestion"],
            "sampleInput": scenario["sampleInput"],
            "expectedOutput": scenario["expectedOutput"],
            "failureProbe": scenario["failureProbe"],
            "readiness": result["metrics"]["readiness"],
            "smokePassed": result["metrics"]["smokePassed"],
            "runtimeSeconds": result["metrics"]["runtimeSeconds"],
            "accelerator": result["provenance"]["accelerator"],
            "evidenceArtifact": result["evidenceArtifact"],
            "smokeJson": artifacts["smokeJson"],
            "log": artifacts["log"],
            "repoSnapshot": artifacts["repoSnapshot"],
            "artifactsComplete": artifacts_complete(result),
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
            "nextImplementation": f"Build cached output viewer, input selector, artifact diff, failure probe, and promotion notes for {repo_name(result['repo'])}.",
        }
        row["reproductionScore"] = reproduction_score(row)
        row["decision"] = reproduction_decision(row)
        rows.append(row)
    return rows


def reproduction_score(row):
    readiness = float(row["readiness"])
    smoke = 24 if row["smokePassed"] else -50
    artifacts = 18 if row["artifactsComplete"] else -20
    scenario = 16 if row["sampleInput"] and row["expectedOutput"] and row["failureProbe"] else 0
    replay = 14 if row["jobId"] in row["replayCommand"] else 0
    return round(max(0, min(100, readiness + smoke + artifacts + scenario + replay)), 1)


def reproduction_decision(row):
    score = reproduction_score(row)
    if score >= 88:
        return "build-interactive-demo"
    if score >= 72:
        return "build-cached-demo"
    if score >= 60:
        return "needs-repro-pass"
    return "hold"


def summarize(rows, command, manifest):
    summary = {
        "track": "cvpr-paper-reproduction-track",
        "status": "track-ready",
        "commandStatus": command["summary"]["status"],
        "manifestStatus": manifest["summary"]["status"],
        "sourcePromotedResults": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
        "sourceCommandCenter": "analysis/cvpr_live_evidence_command_center/registry.json",
        "sourceManifest": "analysis/cvpr_live_evidence_release_manifest/registry.json",
        "reproductions": len(rows),
        "themes": len({row["theme"] for row in rows}),
        "liveRows": len([row for row in rows if row["mode"] == "live-colab"]),
        "smokePassed": len([row for row in rows if row["smokePassed"]]),
        "artifactsComplete": len([row for row in rows if row["artifactsComplete"]]),
        "interactive": len([row for row in rows if row["decision"] == "build-interactive-demo"]),
        "cached": len([row for row in rows if row["decision"] == "build-cached-demo"]),
        "needsReproPass": len([row for row in rows if row["decision"] == "needs-repro-pass"]),
        "hold": len([row for row in rows if row["decision"] == "hold"]),
        "minReproductionScore": min(row["reproductionScore"] for row in rows),
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["commandStatus"] == "operator-ready"
        and summary["manifestStatus"] == "manifest-ready"
        and summary["reproductions"] == 8
        and summary["themes"] == 8
        and summary["liveRows"] == 8
        and summary["smokePassed"] == 8
        and summary["artifactsComplete"] == 8
        and summary["hold"] == 0
        and summary["minReproductionScore"] >= 72
    )
    summary["status"] = "track-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const reproductionRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Paper Reproduction Track\n\nEight promoted CVPR repo rows, one per theme, converted into concrete reproduction demo contracts with sample inputs, expected outputs, failure probes, artifact links, and replay commands.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "reproductionRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Repros", summary["reproductions"]),
        ("Themes", summary["themes"]),
        ("Smoke", summary["smokePassed"]),
        ("Cached", summary["cached"]),
        ("Interactive", summary["interactive"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<article class="case"><div class="meta">{esc(row['theme'])} / {esc(row['decision'])} / score {row['reproductionScore']}</div><h2>{esc(row['title'])}</h2><p>{esc(row['demoQuestion'])}</p><a href="{esc(row['repo'])}">{esc(row['repoName'])}</a><dl><dt>sample input</dt><dd>{esc(row['sampleInput'])}</dd><dt>expected output</dt><dd>{esc(row['expectedOutput'])}</dd><dt>failure probe</dt><dd>{esc(row['failureProbe'])}</dd><dt>next build</dt><dd>{esc(row['nextImplementation'])}</dd></dl><code>{esc(row['evidenceArtifact'])}</code><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Paper Reproduction Track</title><style>:root{{--ink:#111719;--paper:#F5F6F2;--panel:#fff;--line:#D8DED8;--muted:#5E6665;--accent:#24606B;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#162427;color:#F2F7F6;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9DD6D5}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CBDAD8}}nav a{{color:#D5F0ED;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#243133}}dl{{display:grid;grid-template-columns:130px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}code{{display:block;background:#EDF2F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - paper-to-demo reproduction</div><h1>Paper Reproduction Track</h1><p>Eight promoted CVPR repos, one per theme, converted into concrete demo reproduction contracts with sample inputs, expected outputs, failure probes, evidence artifacts, replay commands, and next implementation tasks.</p><nav><a href="index.html">all demos</a><a href="cvpr-paper-repo-demo-forge.html">demo forge</a><a href="cvpr-live-evidence-command-center.html">live command center</a><a href="analysis/cvpr_paper_reproduction_track/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Track Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_paper_reproduction_track.py - package: source-code/learning/cvpr-paper-reproduction-track</div></footer></body></html>"""
    write(ROOT / "cvpr-paper-reproduction-track.html", page)


def main():
    promoted = read_json(PROMOTED)
    command = read_json(COMMAND)
    manifest = read_json(MANIFEST)
    rows = build_rows(promoted)
    summary = summarize(rows, command, manifest)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-paper-reproduction-track.html: {summary['reproductions']} reproductions, status {summary['status']}")


if __name__ == "__main__":
    main()

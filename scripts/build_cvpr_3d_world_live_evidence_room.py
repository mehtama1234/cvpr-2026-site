"""Build the CVPR 3D world live evidence room."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARENA = ROOT / "analysis/cvpr_3d_world_repo_arena/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COMMAND = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_3d_world_live_evidence_room"
BASE = ROOT / "source-code/learning/cvpr-3d-world-live-evidence-room"

SCENARIOS = {
    "threed-01-github-com-deepinsight-insightfa": {
        "caseIndex": 0,
        "scenario": "Metric avatar identity consistency room",
        "artifactQuestion": "Does the promoted run establish enough repo readiness to inspect metric face and texture consistency?",
        "geometryProbe": "identity-preserving face geometry under one-shot avatar generation",
    },
    "threed-02-github-com-myniuuu-mad-avatar": {
        "caseIndex": 1,
        "scenario": "Dynamic Gaussian avatar deblur room",
        "artifactQuestion": "Does the live artifact support view-agreement checks for deblurred Gaussian avatars?",
        "geometryProbe": "multi-view avatar geometry under deblur and motion pressure",
    },
    "threed-03-github-com-akumar005-l2dgs": {
        "caseIndex": 2,
        "scenario": "Low-light dynamic splat separation room",
        "artifactQuestion": "Does the promoted result carry evidence for separating illumination change from geometry change?",
        "geometryProbe": "low-light Gaussian geometry with illumination-shift confounders",
    },
    "threed-04-github-com-wangys16-flow4dgs-sla": {
        "caseIndex": 3,
        "scenario": "Dynamic SLAM motion separation room",
        "artifactQuestion": "Does the live row give enough evidence to replay camera-motion versus scene-motion separation?",
        "geometryProbe": "dynamic SLAM trajectory consistency under moving objects",
    },
    "threed-05-github-com-wanghaoran16-prune-wi": {
        "caseIndex": 4,
        "scenario": "Gaussian pruning fidelity room",
        "artifactQuestion": "Does the promoted artifact support pruning checks where sharp details must survive compression?",
        "geometryProbe": "detail retention after Gaussian pruning under memory pressure",
    },
}

CORE = """export function geometryEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 24 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.geometryRisk ?? 0) - 55) * 0.22;
  const reviewCredit = row.baseDecision === "review" ? 4 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + reviewCredit - riskPenalty)).toFixed(1));
}

export function roomDecision(row) {
  const score = geometryEvidenceScore(row);
  if (score >= 80 && row.smokePassed) return "promote-demo";
  if (score >= 56 && row.smokePassed) return "geometry-review";
  return "hold-demo";
}

export function summarizeRoom(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: geometryEvidenceScore(row), decision: roomDecision(row) }));
  return {
    room: "cvpr-3d-world-live-evidence-room",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    geometryReview: scored.filter((row) => row.decision === "geometry-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { roomRows, summary } from "../src/fixtures.js";
import { geometryEvidenceScore, roomDecision, summarizeRoom } from "../src/core.js";

assert.equal(roomRows.length, 5);
assert.equal(roomRows.every((row) => row.mode === "live-colab"), true);
assert.equal(roomRows.every((row) => row.smokePassed), true);
assert.equal(roomRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(roomRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(roomRows.every((row) => geometryEvidenceScore(row) >= 56));
assert.ok(roomRows.every((row) => roomDecision(row) !== "hold-demo"));
const derived = summarizeRoom(roomRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "threed");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-3d-world-live-evidence-room:", summary.rows, "rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def evidence_score(row):
    readiness = float(row["liveReadiness"])
    smoke = 24 if row["smokePassed"] else -45
    artifact = 16 if row["evidenceArtifact"].endswith(".json") else 0
    replay = 12 if row["jobId"] in row["replayCommand"] else 0
    risk_penalty = max(0, float(row["geometryRisk"]) - 55) * 0.22
    review_credit = 4 if row["baseDecision"] == "review" else 0
    return round(max(0, min(100, readiness + smoke + artifact + replay + review_credit - risk_penalty)), 1)


def decide(row):
    score = evidence_score(row)
    if score >= 80 and row["smokePassed"]:
        return "promote-demo"
    if score >= 56 and row["smokePassed"]:
        return "geometry-review"
    return "hold-demo"


def build_rows(arena, promoted):
    cases = arena["demoRows"]
    rows = []
    for result in [row for row in promoted if row["jobId"].startswith("threed-")]:
        scenario = SCENARIOS[result["jobId"]]
        base = cases[scenario["caseIndex"]]
        row = {
            "jobId": result["jobId"],
            "caseId": base["id"],
            "scenario": scenario["scenario"],
            "repo": result["repo"],
            "mode": result["mode"],
            "page": result["page"],
            "paperTitle": base["paperTitle"],
            "baseDecision": base["decision"],
            "geometryRisk": max(base["metrics"]["primaryRisk"], base["metrics"]["evidenceRisk"], base["metrics"]["runtimeRisk"]),
            "liveReadiness": result["metrics"]["readiness"],
            "smokePassed": result["metrics"]["smokePassed"],
            "runtimeSeconds": result["metrics"]["runtimeSeconds"],
            "accelerator": result["provenance"]["accelerator"],
            "evidenceArtifact": result["evidenceArtifact"],
            "artifactQuestion": scenario["artifactQuestion"],
            "geometryProbe": scenario["geometryProbe"],
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
        }
        row["evidenceScore"] = evidence_score(row)
        row["decision"] = decide(row)
        rows.append(row)
    return rows


def summarize(rows, command):
    return {
        "room": "cvpr-3d-world-live-evidence-room",
        "status": "ready" if len(rows) == 5 and all(row["decision"] != "hold-demo" for row in rows) else "block",
        "theme": "threed",
        "rows": len(rows),
        "liveRows": len([row for row in rows if row["mode"] == "live-colab"]),
        "smokePassed": len([row for row in rows if row["smokePassed"] is True]),
        "artifacts": len([row for row in rows if row["evidenceArtifact"]]),
        "promoteDemo": len([row for row in rows if row["decision"] == "promote-demo"]),
        "geometryReview": len([row for row in rows if row["decision"] == "geometry-review"]),
        "holdDemo": len([row for row in rows if row["decision"] == "hold-demo"]),
        "minEvidenceScore": min(row["evidenceScore"] for row in rows),
        "maxGeometryRisk": max(row["geometryRisk"] for row in rows),
        "sourceArena": "analysis/cvpr_3d_world_repo_arena/registry.json",
        "sourceCommandCenter": "analysis/cvpr_repo_harness_command_center/registry.json",
        "sourcePromotedResults": command["summary"]["promotedArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const roomRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR 3D World Live Evidence Room\n\nLive-backed 3D evidence room using promoted Colab repo rows for avatar consistency, dynamic Gaussian deblur, low-light splats, SLAM motion separation, and pruning fidelity.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "roomRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Live", summary["liveRows"]),
        ("Smoke", summary["smokePassed"]),
        ("Promote", summary["promoteDemo"]),
        ("Review", summary["geometryReview"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / score {row['evidenceScore']} / {esc(row['accelerator'])}</div><h2>{esc(row['scenario'])}</h2><p>{esc(row['artifactQuestion'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><dl><dt>geometry probe</dt><dd>{esc(row['geometryProbe'])}</dd><dt>base decision</dt><dd>{esc(row['baseDecision'])} / risk {row['geometryRisk']}</dd><dt>live readiness</dt><dd>{row['liveReadiness']} / smoke {esc(row['smokePassed'])}</dd></dl><code>{esc(row['evidenceArtifact'])}</code><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR 3D World Live Evidence Room</title><style>:root{{--ink:#101719;--paper:#F6F7F3;--panel:#fff;--line:#D9DED8;--muted:#5C6767;--accent:#176573;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#182126;color:#EEF7F4;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8E0}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:110ch;color:#CDD9D7}}nav a{{color:#D4EFF2;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#263235}}dl{{display:grid;grid-template-columns:130px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}code{{display:block;background:#EEF3F3;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - 3D live evidence</div><h1>3D World Live Evidence Room</h1><p>Live-backed evidence room for the second promoted repo wave: five 3D-world repos, their promoted Colab result rows, geometry probes, evidence artifacts, and replay commands.</p><nav><a href="index.html">all demos</a><a href="cvpr-3d-world-repo-arena.html">3D repo arena</a><a href="cvpr-repo-harness-command-center.html">repo command center</a><a href="analysis/cvpr_3d_world_live_evidence_room/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Geometry Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_3d_world_live_evidence_room.py - package: source-code/learning/cvpr-3d-world-live-evidence-room</div></footer></body></html>"""
    write(ROOT / "cvpr-3d-world-live-evidence-room.html", page)


def main():
    arena = read_json(ARENA)
    promoted = read_json(PROMOTED)
    command = read_json(COMMAND)
    rows = build_rows(arena, promoted)
    summary = summarize(rows, command)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-3d-world-live-evidence-room.html: {summary['rows']} live rows, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR generation control live evidence studio."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STUDIO = ROOT / "analysis/cvpr_generation_control_repo_studio/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COMMAND = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_generation_control_live_evidence_studio"
BASE = ROOT / "source-code/learning/cvpr-generation-control-live-evidence-studio"

SCENARIOS = {
    "generation-01-github-com-joyies-gdpo": {
        "caseIndex": 0,
        "scenario": "One-step SR texture evidence replay",
        "artifactQuestion": "Does the promoted run provide enough repo evidence to inspect whether one-step SR sharpens texture without inventing structure?",
        "artifactProbe": "texture hallucination under one-step super-resolution",
    },
    "generation-02-github-com-chanson94-codsr": {
        "caseIndex": 1,
        "scenario": "Controllable restoration fidelity replay",
        "artifactQuestion": "Does the live artifact support fidelity versus perceptual realism checks for controllable SR?",
        "artifactProbe": "fidelity-realism tradeoff under restoration controls",
    },
    "generation-03-github-com-gyr02-nadb": {
        "caseIndex": 2,
        "scenario": "Diffusion bridge endpoint replay",
        "artifactQuestion": "Does the promoted result carry enough evidence to inspect endpoint correction in a diffusion bridge?",
        "artifactProbe": "endpoint drift across diffusion bridge correction",
    },
    "generation-04-github-com-jf-tan-lrdm": {
        "caseIndex": 3,
        "scenario": "Low-rank residual repair replay",
        "artifactQuestion": "Does the live row support checking whether residual diffusion repairs only the intended residual?",
        "artifactProbe": "local edit leakage under low-rank residual repair",
    },
    "generation-05-github-com-mililab-rdbm": {
        "caseIndex": 4,
        "scenario": "Universal restoration repaint replay",
        "artifactQuestion": "Does the promoted artifact support checks that universal restoration avoids repainting already-clean regions?",
        "artifactProbe": "over-restoration and clean-region repainting",
    },
}

CORE = """export function generationEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 24 : -50;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 18 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 14 : 0;
  const riskPenalty = Math.max(0, Number(row.artifactRisk ?? 0) - 58) * 0.18;
  const blockCredit = row.baseDecision === "block" ? 8 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + blockCredit - riskPenalty)).toFixed(1));
}

export function studioDecision(row) {
  const score = generationEvidenceScore(row);
  if (score >= 84 && row.smokePassed && row.baseDecision !== "block") return "promote-demo";
  if (score >= 58 && row.smokePassed) return "artifact-review";
  return "hold-demo";
}

export function summarizeStudio(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: generationEvidenceScore(row), decision: studioDecision(row) }));
  return {
    studio: "cvpr-generation-control-live-evidence-studio",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    artifactReview: scored.filter((row) => row.decision === "artifact-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { studioRows, summary } from "../src/fixtures.js";
import { generationEvidenceScore, studioDecision, summarizeStudio } from "../src/core.js";

assert.equal(studioRows.length, 5);
assert.equal(studioRows.every((row) => row.mode === "live-colab"), true);
assert.equal(studioRows.every((row) => row.smokePassed), true);
assert.equal(studioRows.every((row) => row.baseDecision === "block"), true);
assert.equal(studioRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(studioRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(studioRows.every((row) => generationEvidenceScore(row) >= 58));
assert.equal(studioRows.every((row) => studioDecision(row) === "artifact-review"), true);
const derived = summarizeStudio(studioRows);
assert.equal(derived.rows, 5);
assert.equal(derived.artifactReview, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "generation");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-generation-control-live-evidence-studio:", summary.rows, "rows");
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
    smoke = 24 if row["smokePassed"] else -50
    artifact = 18 if row["evidenceArtifact"].endswith(".json") else 0
    replay = 14 if row["jobId"] in row["replayCommand"] else 0
    risk_penalty = max(0, float(row["artifactRisk"]) - 58) * 0.18
    block_credit = 8 if row["baseDecision"] == "block" else 0
    return round(max(0, min(100, readiness + smoke + artifact + replay + block_credit - risk_penalty)), 1)


def decide(row):
    score = evidence_score(row)
    if score >= 84 and row["smokePassed"] and row["baseDecision"] != "block":
        return "promote-demo"
    if score >= 58 and row["smokePassed"]:
        return "artifact-review"
    return "hold-demo"


def build_rows(studio, promoted):
    cases = studio["demoRows"]
    rows = []
    for result in [row for row in promoted if row["jobId"].startswith("generation-")]:
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
            "artifactRisk": max(base["metrics"]["primaryRisk"], base["metrics"]["evidenceRisk"], base["metrics"]["runtimeRisk"]),
            "liveReadiness": result["metrics"]["readiness"],
            "smokePassed": result["metrics"]["smokePassed"],
            "runtimeSeconds": result["metrics"]["runtimeSeconds"],
            "accelerator": result["provenance"]["accelerator"],
            "evidenceArtifact": result["evidenceArtifact"],
            "artifactQuestion": scenario["artifactQuestion"],
            "artifactProbe": scenario["artifactProbe"],
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
        }
        row["evidenceScore"] = evidence_score(row)
        row["decision"] = decide(row)
        rows.append(row)
    return rows


def summarize(rows, command):
    return {
        "studio": "cvpr-generation-control-live-evidence-studio",
        "status": "ready" if len(rows) == 5 and all(row["decision"] == "artifact-review" for row in rows) else "block",
        "theme": "generation",
        "rows": len(rows),
        "liveRows": len([row for row in rows if row["mode"] == "live-colab"]),
        "smokePassed": len([row for row in rows if row["smokePassed"] is True]),
        "artifacts": len([row for row in rows if row["evidenceArtifact"]]),
        "promoteDemo": len([row for row in rows if row["decision"] == "promote-demo"]),
        "artifactReview": len([row for row in rows if row["decision"] == "artifact-review"]),
        "holdDemo": len([row for row in rows if row["decision"] == "hold-demo"]),
        "minEvidenceScore": min(row["evidenceScore"] for row in rows),
        "maxArtifactRisk": max(row["artifactRisk"] for row in rows),
        "sourceGenerationStudio": "analysis/cvpr_generation_control_repo_studio/registry.json",
        "sourceCommandCenter": "analysis/cvpr_repo_harness_command_center/registry.json",
        "sourcePromotedResults": command["summary"]["promotedArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const studioRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Generation Control Live Evidence Studio\n\nLive-backed generation evidence studio using promoted Colab repo rows for one-step SR, controllable restoration, diffusion bridges, residual repair, and universal restoration artifact review.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "studioRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Live", summary["liveRows"]),
        ("Smoke", summary["smokePassed"]),
        ("Artifact review", summary["artifactReview"]),
        ("Hold", summary["holdDemo"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / score {row['evidenceScore']} / {esc(row['accelerator'])}</div><h2>{esc(row['scenario'])}</h2><p>{esc(row['artifactQuestion'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><dl><dt>artifact probe</dt><dd>{esc(row['artifactProbe'])}</dd><dt>base decision</dt><dd>{esc(row['baseDecision'])} / risk {row['artifactRisk']}</dd><dt>live readiness</dt><dd>{row['liveReadiness']} / smoke {esc(row['smokePassed'])}</dd></dl><code>{esc(row['evidenceArtifact'])}</code><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Generation Control Live Evidence Studio</title><style>:root{{--ink:#121617;--paper:#F7F5F1;--panel:#fff;--line:#DDD8D1;--muted:#67615E;--accent:#8A4B24;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#261C17;color:#F8F1EA;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#E0AD87}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#DED1C8}}nav a{{color:#F0CDB8;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#332B28}}dl{{display:grid;grid-template-columns:130px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}code{{display:block;background:#F2EDE7;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - generation live evidence</div><h1>Generation Control Live Evidence Studio</h1><p>Live-backed evidence studio for the fourth promoted repo wave. These rows prove repo evidence exists, then keep high-risk generation artifacts in review instead of releasing hallucination-prone outputs.</p><nav><a href="index.html">all demos</a><a href="cvpr-generation-control-repo-studio.html">generation repo studio</a><a href="cvpr-repo-harness-command-center.html">repo command center</a><a href="analysis/cvpr_generation_control_live_evidence_studio/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Artifact Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_generation_control_live_evidence_studio.py - package: source-code/learning/cvpr-generation-control-live-evidence-studio</div></footer></body></html>"""
    write(ROOT / "cvpr-generation-control-live-evidence-studio.html", page)


def main():
    studio = read_json(STUDIO)
    promoted = read_json(PROMOTED)
    command = read_json(COMMAND)
    rows = build_rows(studio, promoted)
    summary = summarize(rows, command)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-generation-control-live-evidence-studio.html: {summary['rows']} live rows, status {summary['status']}")


if __name__ == "__main__":
    main()

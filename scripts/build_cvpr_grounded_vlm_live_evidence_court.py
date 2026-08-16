"""Build the CVPR grounded VLM live evidence court."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURT = ROOT / "analysis/cvpr_grounded_vlm_repo_court/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COMMAND = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_grounded_vlm_live_evidence_court"
BASE = ROOT / "source-code/learning/cvpr-grounded-vlm-live-evidence-court"

SCENARIOS = {
    "vlm-01-github-com-chao2433-fedafd": {
        "caseIndex": 0,
        "scenario": "Federated multimodal fusion hearing",
        "artifactQuestion": "Does the promoted run provide enough repo evidence to adjudicate mismatched client modalities and feature fusion?",
        "groundingProbe": "client evidence alignment under federated modality mismatch",
    },
    "vlm-02-github-com-dige945-ppa-cvpr26": {
        "caseIndex": 1,
        "scenario": "Privacy-preserving re-ID hearing",
        "artifactQuestion": "Does the live artifact support checking structure preservation while identity details stay private?",
        "groundingProbe": "visible-infrared structure evidence under privacy pressure",
    },
    "vlm-03-github-com-oamyjin-graphvlm": {
        "caseIndex": 2,
        "scenario": "Graph VLM node-link evidence hearing",
        "artifactQuestion": "Does the promoted result carry enough evidence to inspect graph node-link grounding instead of fluent captioning?",
        "groundingProbe": "node-link visual evidence for graph reasoning claims",
    },
    "vlm-04-github-com-remrico-recall": {
        "caseIndex": 3,
        "scenario": "Composed retrieval compression hearing",
        "artifactQuestion": "Does the live row support tests that composed retrieval keeps relations instead of collapsing into one embedding?",
        "groundingProbe": "relational retrieval evidence under compression pressure",
    },
    "vlm-05-github-com-uuuuzyc-see-it-say-it": {
        "caseIndex": 4,
        "scenario": "Training-free visual evidence hearing",
        "artifactQuestion": "Does the promoted artifact support repeated visual checks before accepting training-free reasoning?",
        "groundingProbe": "visual evidence re-checks under hallucination pressure",
    },
}

CORE = """export function groundingEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 23 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 17 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 13 : 0;
  const riskPenalty = Math.max(0, Number(row.groundingRisk ?? 0) - 56) * 0.20;
  const reviewCredit = row.baseDecision === "review" ? 5 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + reviewCredit - riskPenalty)).toFixed(1));
}

export function courtVerdict(row) {
  const score = groundingEvidenceScore(row);
  if (score >= 82 && row.smokePassed) return "promote-demo";
  if (score >= 58 && row.smokePassed) return "grounding-review";
  return "hold-demo";
}

export function summarizeCourt(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: groundingEvidenceScore(row), verdict: courtVerdict(row) }));
  return {
    court: "cvpr-grounded-vlm-live-evidence-court",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.verdict === "promote-demo").length,
    groundingReview: scored.filter((row) => row.verdict === "grounding-review").length,
    holdDemo: scored.filter((row) => row.verdict === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { courtRows, summary } from "../src/fixtures.js";
import { courtVerdict, groundingEvidenceScore, summarizeCourt } from "../src/core.js";

assert.equal(courtRows.length, 5);
assert.equal(courtRows.every((row) => row.mode === "live-colab"), true);
assert.equal(courtRows.every((row) => row.smokePassed), true);
assert.equal(courtRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(courtRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(courtRows.every((row) => groundingEvidenceScore(row) >= 58));
assert.ok(courtRows.every((row) => courtVerdict(row) !== "hold-demo"));
const derived = summarizeCourt(courtRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "vlm");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-grounded-vlm-live-evidence-court:", summary.rows, "rows");
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
    smoke = 23 if row["smokePassed"] else -45
    artifact = 17 if row["evidenceArtifact"].endswith(".json") else 0
    replay = 13 if row["jobId"] in row["replayCommand"] else 0
    risk_penalty = max(0, float(row["groundingRisk"]) - 56) * 0.20
    review_credit = 5 if row["baseDecision"] == "review" else 0
    return round(max(0, min(100, readiness + smoke + artifact + replay + review_credit - risk_penalty)), 1)


def decide(row):
    score = evidence_score(row)
    if score >= 82 and row["smokePassed"]:
        return "promote-demo"
    if score >= 58 and row["smokePassed"]:
        return "grounding-review"
    return "hold-demo"


def build_rows(court, promoted):
    cases = court["demoRows"]
    rows = []
    for result in [row for row in promoted if row["jobId"].startswith("vlm-")]:
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
            "groundingRisk": max(base["metrics"]["primaryRisk"], base["metrics"]["evidenceRisk"], base["metrics"]["runtimeRisk"]),
            "liveReadiness": result["metrics"]["readiness"],
            "smokePassed": result["metrics"]["smokePassed"],
            "runtimeSeconds": result["metrics"]["runtimeSeconds"],
            "accelerator": result["provenance"]["accelerator"],
            "evidenceArtifact": result["evidenceArtifact"],
            "artifactQuestion": scenario["artifactQuestion"],
            "groundingProbe": scenario["groundingProbe"],
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
        }
        row["evidenceScore"] = evidence_score(row)
        row["verdict"] = decide(row)
        rows.append(row)
    return rows


def summarize(rows, command):
    return {
        "court": "cvpr-grounded-vlm-live-evidence-court",
        "status": "ready" if len(rows) == 5 and all(row["verdict"] != "hold-demo" for row in rows) else "block",
        "theme": "vlm",
        "rows": len(rows),
        "liveRows": len([row for row in rows if row["mode"] == "live-colab"]),
        "smokePassed": len([row for row in rows if row["smokePassed"] is True]),
        "artifacts": len([row for row in rows if row["evidenceArtifact"]]),
        "promoteDemo": len([row for row in rows if row["verdict"] == "promote-demo"]),
        "groundingReview": len([row for row in rows if row["verdict"] == "grounding-review"]),
        "holdDemo": len([row for row in rows if row["verdict"] == "hold-demo"]),
        "minEvidenceScore": min(row["evidenceScore"] for row in rows),
        "maxGroundingRisk": max(row["groundingRisk"] for row in rows),
        "sourceGroundedCourt": "analysis/cvpr_grounded_vlm_repo_court/registry.json",
        "sourceCommandCenter": "analysis/cvpr_repo_harness_command_center/registry.json",
        "sourcePromotedResults": command["summary"]["promotedArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const courtRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Grounded VLM Live Evidence Court\n\nLive-backed VLM evidence court using promoted Colab repo rows for federated fusion, privacy re-ID, graph VLM reasoning, composed retrieval, and training-free visual checking.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "courtRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Live", summary["liveRows"]),
        ("Smoke", summary["smokePassed"]),
        ("Promote", summary["promoteDemo"]),
        ("Review", summary["groundingReview"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<article class="case"><div class="meta">{esc(row['verdict'])} / score {row['evidenceScore']} / {esc(row['accelerator'])}</div><h2>{esc(row['scenario'])}</h2><p>{esc(row['artifactQuestion'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><dl><dt>grounding probe</dt><dd>{esc(row['groundingProbe'])}</dd><dt>base decision</dt><dd>{esc(row['baseDecision'])} / risk {row['groundingRisk']}</dd><dt>live readiness</dt><dd>{row['liveReadiness']} / smoke {esc(row['smokePassed'])}</dd></dl><code>{esc(row['evidenceArtifact'])}</code><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Grounded VLM Live Evidence Court</title><style>:root{{--ink:#111718;--paper:#F6F7F4;--panel:#fff;--line:#D8DDD8;--muted:#5E6764;--accent:#235F6B;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#182224;color:#EFF7F5;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8DF}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CDDAD9}}nav a{{color:#D4EEF2;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#263235}}dl{{display:grid;grid-template-columns:130px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}code{{display:block;background:#EEF3F3;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - VLM live evidence</div><h1>Grounded VLM Live Evidence Court</h1><p>Live-backed adjudication court for the fifth promoted repo wave: federated fusion, privacy-preserving re-ID, graph VLM reasoning, composed retrieval, and training-free visual evidence checks.</p><nav><a href="index.html">all demos</a><a href="cvpr-grounded-vlm-repo-court.html">VLM repo court</a><a href="cvpr-repo-harness-command-center.html">repo command center</a><a href="analysis/cvpr_grounded_vlm_live_evidence_court/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Grounding Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_grounded_vlm_live_evidence_court.py - package: source-code/learning/cvpr-grounded-vlm-live-evidence-court</div></footer></body></html>"""
    write(ROOT / "cvpr-grounded-vlm-live-evidence-court.html", page)


def main():
    court = read_json(COURT)
    promoted = read_json(PROMOTED)
    command = read_json(COMMAND)
    rows = build_rows(court, promoted)
    summary = summarize(rows, command)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-grounded-vlm-live-evidence-court.html: {summary['rows']} live rows, status {summary['status']}")


if __name__ == "__main__":
    main()

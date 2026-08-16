"""Build the CVPR video temporal live evidence lab."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LAB = ROOT / "analysis/cvpr_video_temporal_repo_lab/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COMMAND = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_video_temporal_live_evidence_lab"
BASE = ROOT / "source-code/learning/cvpr-video-temporal-live-evidence-lab"

SCENARIOS = {
    "video-01-github-com-black-forest-labs-flu": {
        "caseIndex": 0,
        "scenario": "HOI contact continuity replay",
        "artifactQuestion": "Does the promoted run provide enough repo evidence to inspect hand-object contact across generated frames?",
        "temporalProbe": "hand-object contact drift through pose-appearance-motion generation",
    },
    "video-02-github-com-deepfakes-face": {
        "caseIndex": 1,
        "scenario": "Face-swap identity boundary replay",
        "artifactQuestion": "Does the live artifact support identity-boundary checks under source-video realism pressure?",
        "temporalProbe": "identity preservation and boundary leakage across swapped video frames",
    },
    "video-03-github-com-modelscope-diffsynth": {
        "caseIndex": 2,
        "scenario": "Counterfactual video plausibility replay",
        "artifactQuestion": "Does the promoted result carry enough evidence to test whether changed videos remain temporally plausible?",
        "temporalProbe": "counterfactual consistency under edited action trajectories",
    },
    "video-04-github-com-arturxe2-adaspot": {
        "caseIndex": 3,
        "scenario": "Sparse event spotting replay",
        "artifactQuestion": "Does the live row support checking whether resolution is spent only where action occurs?",
        "temporalProbe": "event localization under sparse action windows and resolution budgets",
    },
    "video-05-github-com-dmirlab-group-hal": {
        "caseIndex": 4,
        "scenario": "Weak-transcript action boundary replay",
        "artifactQuestion": "Does the promoted artifact support reliable action-boundary checks from weak transcript evidence?",
        "temporalProbe": "temporal boundary drift when language supervision is weak",
    },
}

CORE = """export function temporalEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 23 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.temporalRisk ?? 0) - 55) * 0.20;
  const reviewCredit = row.baseDecision === "review" ? 5 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + reviewCredit - riskPenalty)).toFixed(1));
}

export function labDecision(row) {
  const score = temporalEvidenceScore(row);
  if (score >= 80 && row.smokePassed) return "promote-demo";
  if (score >= 56 && row.smokePassed) return "temporal-review";
  return "hold-demo";
}

export function summarizeLab(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: temporalEvidenceScore(row), decision: labDecision(row) }));
  return {
    lab: "cvpr-video-temporal-live-evidence-lab",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    temporalReview: scored.filter((row) => row.decision === "temporal-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { labRows, summary } from "../src/fixtures.js";
import { labDecision, summarizeLab, temporalEvidenceScore } from "../src/core.js";

assert.equal(labRows.length, 5);
assert.equal(labRows.every((row) => row.mode === "live-colab"), true);
assert.equal(labRows.every((row) => row.smokePassed), true);
assert.equal(labRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(labRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(labRows.every((row) => temporalEvidenceScore(row) >= 56));
assert.ok(labRows.every((row) => labDecision(row) !== "hold-demo"));
const derived = summarizeLab(labRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "video");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-video-temporal-live-evidence-lab:", summary.rows, "rows");
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
    artifact = 16 if row["evidenceArtifact"].endswith(".json") else 0
    replay = 12 if row["jobId"] in row["replayCommand"] else 0
    risk_penalty = max(0, float(row["temporalRisk"]) - 55) * 0.20
    review_credit = 5 if row["baseDecision"] == "review" else 0
    return round(max(0, min(100, readiness + smoke + artifact + replay + review_credit - risk_penalty)), 1)


def decide(row):
    score = evidence_score(row)
    if score >= 80 and row["smokePassed"]:
        return "promote-demo"
    if score >= 56 and row["smokePassed"]:
        return "temporal-review"
    return "hold-demo"


def build_rows(lab, promoted):
    cases = lab["demoRows"]
    rows = []
    for result in [row for row in promoted if row["jobId"].startswith("video-")]:
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
            "temporalRisk": max(base["metrics"]["primaryRisk"], base["metrics"]["evidenceRisk"], base["metrics"]["runtimeRisk"]),
            "liveReadiness": result["metrics"]["readiness"],
            "smokePassed": result["metrics"]["smokePassed"],
            "runtimeSeconds": result["metrics"]["runtimeSeconds"],
            "accelerator": result["provenance"]["accelerator"],
            "evidenceArtifact": result["evidenceArtifact"],
            "artifactQuestion": scenario["artifactQuestion"],
            "temporalProbe": scenario["temporalProbe"],
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
        }
        row["evidenceScore"] = evidence_score(row)
        row["decision"] = decide(row)
        rows.append(row)
    return rows


def summarize(rows, command):
    return {
        "lab": "cvpr-video-temporal-live-evidence-lab",
        "status": "ready" if len(rows) == 5 and all(row["decision"] != "hold-demo" for row in rows) else "block",
        "theme": "video",
        "rows": len(rows),
        "liveRows": len([row for row in rows if row["mode"] == "live-colab"]),
        "smokePassed": len([row for row in rows if row["smokePassed"] is True]),
        "artifacts": len([row for row in rows if row["evidenceArtifact"]]),
        "promoteDemo": len([row for row in rows if row["decision"] == "promote-demo"]),
        "temporalReview": len([row for row in rows if row["decision"] == "temporal-review"]),
        "holdDemo": len([row for row in rows if row["decision"] == "hold-demo"]),
        "minEvidenceScore": min(row["evidenceScore"] for row in rows),
        "maxTemporalRisk": max(row["temporalRisk"] for row in rows),
        "sourceVideoLab": "analysis/cvpr_video_temporal_repo_lab/registry.json",
        "sourceCommandCenter": "analysis/cvpr_repo_harness_command_center/registry.json",
        "sourcePromotedResults": command["summary"]["promotedArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const labRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Video Temporal Live Evidence Lab\n\nLive-backed video evidence lab using promoted Colab repo rows for HOI generation, face swapping, counterfactual video, sparse event spotting, and action boundary checks.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "labRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Live", summary["liveRows"]),
        ("Smoke", summary["smokePassed"]),
        ("Promote", summary["promoteDemo"]),
        ("Review", summary["temporalReview"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / score {row['evidenceScore']} / {esc(row['accelerator'])}</div><h2>{esc(row['scenario'])}</h2><p>{esc(row['artifactQuestion'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><dl><dt>temporal probe</dt><dd>{esc(row['temporalProbe'])}</dd><dt>base decision</dt><dd>{esc(row['baseDecision'])} / risk {row['temporalRisk']}</dd><dt>live readiness</dt><dd>{row['liveReadiness']} / smoke {esc(row['smokePassed'])}</dd></dl><code>{esc(row['evidenceArtifact'])}</code><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Video Temporal Live Evidence Lab</title><style>:root{{--ink:#121617;--paper:#F7F6F1;--panel:#fff;--line:#DDDAD1;--muted:#67625E;--accent:#776118;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#251F16;color:#F8F3EA;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#E0CC87}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#DED5C8}}nav a{{color:#F0E3B8;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#332E28}}dl{{display:grid;grid-template-columns:130px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}code{{display:block;background:#F2EFE7;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - video live evidence</div><h1>Video Temporal Live Evidence Lab</h1><p>Live-backed evidence lab for the third promoted repo wave: HOI generation, face swapping, counterfactual video, sparse event spotting, and weak-transcript action boundary checks.</p><nav><a href="index.html">all demos</a><a href="cvpr-video-temporal-repo-lab.html">video repo lab</a><a href="cvpr-repo-harness-command-center.html">repo command center</a><a href="analysis/cvpr_video_temporal_live_evidence_lab/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Temporal Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_video_temporal_live_evidence_lab.py - package: source-code/learning/cvpr-video-temporal-live-evidence-lab</div></footer></body></html>"""
    write(ROOT / "cvpr-video-temporal-live-evidence-lab.html", page)


def main():
    lab = read_json(LAB)
    promoted = read_json(PROMOTED)
    command = read_json(COMMAND)
    rows = build_rows(lab, promoted)
    summary = summarize(rows, command)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-video-temporal-live-evidence-lab.html: {summary['rows']} live rows, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR efficient learning live evidence governor."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GOVERNOR = ROOT / "analysis/cvpr_efficient_learning_repo_governor/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COMMAND = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_efficient_learning_live_evidence_governor"
BASE = ROOT / "source-code/learning/cvpr-efficient-learning-live-evidence-governor"

SCENARIOS = {
    "learning-01-github-com-eit-nlp-embedlens": {
        "caseIndex": 0,
        "scenario": "Token sparsity saliency audit",
        "artifactQuestion": "Does the promoted run provide enough repo evidence to inspect sparse-token coverage before serving savings are trusted?",
        "efficiencyProbe": "saliency preservation under visual token sparsity",
    },
    "learning-02-github-com-cgcl-codes-nuwa": {
        "caseIndex": 1,
        "scenario": "Pruning accuracy canary audit",
        "artifactQuestion": "Does the live artifact support checking prune-ratio savings against accuracy regression?",
        "efficiencyProbe": "accuracy floor under structured pruning and edge memory pressure",
    },
    "learning-03-github-com-evi-group-scu-fozo": {
        "caseIndex": 2,
        "scenario": "Forward-only adaptation audit",
        "artifactQuestion": "Does the promoted result carry enough evidence to inspect forward-only adaptation without hidden backward updates?",
        "efficiencyProbe": "adaptation quality under forward-only update constraints",
    },
    "learning-04-github-com-savadikarc-cheem": {
        "caseIndex": 3,
        "scenario": "Continual drift serving audit",
        "artifactQuestion": "Does the live row support checking serving behavior as client or domain drift accumulates?",
        "efficiencyProbe": "continual adaptation under domain-shift and client-drift pressure",
    },
    "learning-05-github-com-liwenwang919-bpfedctt": {
        "caseIndex": 4,
        "scenario": "Federated CTTA budget audit",
        "artifactQuestion": "Does the promoted artifact support evidence checks for federated test-time adaptation under tight communication budgets?",
        "efficiencyProbe": "federated continual test-time adaptation under bandwidth and drift limits",
    },
}

CORE = """export function efficiencyEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 22 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.efficiencyRisk ?? 0) - 56) * 0.18;
  const canaryCredit = row.baseDecision === "canary" ? 6 : 0;
  const holdCredit = row.baseDecision === "hold" ? 4 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + canaryCredit + holdCredit - riskPenalty)).toFixed(1));
}

export function governorDecision(row) {
  const score = efficiencyEvidenceScore(row);
  if (score >= 84 && row.smokePassed && row.baseDecision === "canary") return "canary-demo";
  if (score >= 60 && row.smokePassed) return "efficiency-review";
  return "hold-demo";
}

export function summarizeGovernor(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: efficiencyEvidenceScore(row), decision: governorDecision(row) }));
  return {
    governor: "cvpr-efficient-learning-live-evidence-governor",
    rows: scored.length,
    canaryDemo: scored.filter((row) => row.decision === "canary-demo").length,
    efficiencyReview: scored.filter((row) => row.decision === "efficiency-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { governorRows, summary } from "../src/fixtures.js";
import { efficiencyEvidenceScore, governorDecision, summarizeGovernor } from "../src/core.js";

assert.equal(governorRows.length, 5);
assert.equal(governorRows.every((row) => row.mode === "live-colab"), true);
assert.equal(governorRows.every((row) => row.smokePassed), true);
assert.equal(governorRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(governorRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(governorRows.every((row) => efficiencyEvidenceScore(row) >= 60));
assert.ok(governorRows.every((row) => governorDecision(row) !== "hold-demo"));
const derived = summarizeGovernor(governorRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "learning");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-efficient-learning-live-evidence-governor:", summary.rows, "rows");
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
    smoke = 22 if row["smokePassed"] else -45
    artifact = 16 if row["evidenceArtifact"].endswith(".json") else 0
    replay = 12 if row["jobId"] in row["replayCommand"] else 0
    risk_penalty = max(0, float(row["efficiencyRisk"]) - 56) * 0.18
    canary_credit = 6 if row["baseDecision"] == "canary" else 0
    hold_credit = 4 if row["baseDecision"] == "hold" else 0
    return round(max(0, min(100, readiness + smoke + artifact + replay + canary_credit + hold_credit - risk_penalty)), 1)


def decide(row):
    score = evidence_score(row)
    if score >= 84 and row["smokePassed"] and row["baseDecision"] == "canary":
        return "canary-demo"
    if score >= 60 and row["smokePassed"]:
        return "efficiency-review"
    return "hold-demo"


def build_rows(governor, promoted):
    cases = governor["governorRows"]
    rows = []
    for result in [row for row in promoted if row["jobId"].startswith("learning-")]:
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
            "efficiencyRisk": max(base["metrics"]["accuracyRisk"], base["metrics"]["adaptationRisk"], base["metrics"]["servingCost"]),
            "liveReadiness": result["metrics"]["readiness"],
            "smokePassed": result["metrics"]["smokePassed"],
            "runtimeSeconds": result["metrics"]["runtimeSeconds"],
            "accelerator": result["provenance"]["accelerator"],
            "evidenceArtifact": result["evidenceArtifact"],
            "artifactQuestion": scenario["artifactQuestion"],
            "efficiencyProbe": scenario["efficiencyProbe"],
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
        }
        row["evidenceScore"] = evidence_score(row)
        row["decision"] = decide(row)
        rows.append(row)
    return rows


def summarize(rows, command):
    return {
        "governor": "cvpr-efficient-learning-live-evidence-governor",
        "status": "ready" if len(rows) == 5 and all(row["decision"] != "hold-demo" for row in rows) else "block",
        "theme": "learning",
        "rows": len(rows),
        "liveRows": len([row for row in rows if row["mode"] == "live-colab"]),
        "smokePassed": len([row for row in rows if row["smokePassed"] is True]),
        "artifacts": len([row for row in rows if row["evidenceArtifact"]]),
        "canaryDemo": len([row for row in rows if row["decision"] == "canary-demo"]),
        "efficiencyReview": len([row for row in rows if row["decision"] == "efficiency-review"]),
        "holdDemo": len([row for row in rows if row["decision"] == "hold-demo"]),
        "minEvidenceScore": min(row["evidenceScore"] for row in rows),
        "maxEfficiencyRisk": max(row["efficiencyRisk"] for row in rows),
        "sourceLearningGovernor": "analysis/cvpr_efficient_learning_repo_governor/registry.json",
        "sourceCommandCenter": "analysis/cvpr_repo_harness_command_center/registry.json",
        "sourcePromotedResults": command["summary"]["promotedArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const governorRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Efficient Learning Live Evidence Governor\n\nLive-backed efficient learning governor using promoted Colab repo rows for token sparsity, pruning, forward-only adaptation, continual drift, and federated test-time adaptation evidence.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "governorRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Live", summary["liveRows"]),
        ("Smoke", summary["smokePassed"]),
        ("Canary", summary["canaryDemo"]),
        ("Review", summary["efficiencyReview"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / score {row['evidenceScore']} / {esc(row['accelerator'])}</div><h2>{esc(row['scenario'])}</h2><p>{esc(row['artifactQuestion'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><dl><dt>efficiency probe</dt><dd>{esc(row['efficiencyProbe'])}</dd><dt>base decision</dt><dd>{esc(row['baseDecision'])} / risk {row['efficiencyRisk']}</dd><dt>live readiness</dt><dd>{row['liveReadiness']} / smoke {esc(row['smokePassed'])}</dd></dl><code>{esc(row['evidenceArtifact'])}</code><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Efficient Learning Live Evidence Governor</title><style>:root{{--ink:#111718;--paper:#F5F7F3;--panel:#fff;--line:#D8DDD6;--muted:#5F6763;--accent:#2F6650;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#19231F;color:#EFF7F2;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8C3}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CEDAD4}}nav a{{color:#D1F0E0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#27322E}}dl{{display:grid;grid-template-columns:140px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}code{{display:block;background:#EEF3EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - efficient learning live evidence</div><h1>Efficient Learning Live Evidence Governor</h1><p>Live-backed evidence governor for the eighth promoted repo wave: token sparsity, pruning, forward-only adaptation, continual drift, and federated test-time adaptation under runtime governance.</p><nav><a href="index.html">all demos</a><a href="cvpr-efficient-learning-repo-governor.html">efficient learning governor</a><a href="cvpr-repo-harness-command-center.html">repo command center</a><a href="analysis/cvpr_efficient_learning_live_evidence_governor/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Efficiency Evidence Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_efficient_learning_live_evidence_governor.py - package: source-code/learning/cvpr-efficient-learning-live-evidence-governor</div></footer></body></html>"""
    write(ROOT / "cvpr-efficient-learning-live-evidence-governor.html", page)


def main():
    governor = read_json(GOVERNOR)
    promoted = read_json(PROMOTED)
    command = read_json(COMMAND)
    rows = build_rows(governor, promoted)
    summary = summarize(rows, command)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-efficient-learning-live-evidence-governor.html: {summary['rows']} live rows, status {summary['status']}")


if __name__ == "__main__":
    main()

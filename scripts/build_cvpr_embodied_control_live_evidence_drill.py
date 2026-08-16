"""Build the CVPR embodied control live evidence drill."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DRILL = ROOT / "analysis/cvpr_embodied_control_repo_drill/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COMMAND = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_embodied_control_live_evidence_drill"
BASE = ROOT / "source-code/learning/cvpr-embodied-control-live-evidence-drill"

SCENARIOS = {
    "embodied-01-github-com-szu-ai-safe-driving-d": {
        "caseIndex": 0,
        "scenario": "Safety-aware driving transfer replay",
        "artifactQuestion": "Does the promoted run provide enough repo evidence to inspect town and weather transfer before policy release?",
        "policyProbe": "uncertainty-aware driving policy under rain and town transfer",
    },
    "embodied-02-github-com-bofusun-srcp": {
        "caseIndex": 1,
        "scenario": "Visual RL constraint replay",
        "artifactQuestion": "Does the live artifact support checking constraint satisfaction for a visually grounded RL policy?",
        "policyProbe": "policy action constraints under visual state mismatch",
    },
    "embodied-03-github-com-codeshop715-energyact": {
        "caseIndex": 2,
        "scenario": "Energy-aware action selection replay",
        "artifactQuestion": "Does the promoted result carry enough evidence to inspect energy-aware action choice under reward sparsity?",
        "policyProbe": "energy and action tradeoff when visual rewards are sparse",
    },
    "embodied-04-github-com-hrtan-diem": {
        "caseIndex": 3,
        "scenario": "Curriculum adaptation replay",
        "artifactQuestion": "Does the live row support checking curriculum-driven adaptation before deployment on harder scenes?",
        "policyProbe": "curriculum transfer from easy visual tasks to harder embodied scenes",
    },
    "embodied-05-github-com-jiutian-vl-hiconagent": {
        "caseIndex": 4,
        "scenario": "GUI-agent grounding replay",
        "artifactQuestion": "Does the promoted artifact support evidence checks for grounded GUI-agent actions and instruction following?",
        "policyProbe": "visual grounding and action sequencing in GUI-agent control",
    },
}

CORE = """export function policyEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 22 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.policyRisk ?? 0) - 56) * 0.18;
  const shadowCredit = row.baseDecision === "shadow" ? 6 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + shadowCredit - riskPenalty)).toFixed(1));
}

export function drillDecision(row) {
  const score = policyEvidenceScore(row);
  if (score >= 84 && row.smokePassed && row.baseDecision !== "shadow") return "promote-demo";
  if (score >= 60 && row.smokePassed) return "policy-shadow";
  return "hold-demo";
}

export function summarizeDrill(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: policyEvidenceScore(row), decision: drillDecision(row) }));
  return {
    drill: "cvpr-embodied-control-live-evidence-drill",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    policyShadow: scored.filter((row) => row.decision === "policy-shadow").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { drillRows, summary } from "../src/fixtures.js";
import { drillDecision, policyEvidenceScore, summarizeDrill } from "../src/core.js";

assert.equal(drillRows.length, 5);
assert.equal(drillRows.every((row) => row.mode === "live-colab"), true);
assert.equal(drillRows.every((row) => row.smokePassed), true);
assert.equal(drillRows.every((row) => row.baseDecision === "shadow"), true);
assert.equal(drillRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(drillRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(drillRows.every((row) => policyEvidenceScore(row) >= 60));
assert.equal(drillRows.every((row) => drillDecision(row) === "policy-shadow"), true);
const derived = summarizeDrill(drillRows);
assert.equal(derived.rows, 5);
assert.equal(derived.policyShadow, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "embodied");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-embodied-control-live-evidence-drill:", summary.rows, "rows");
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
    risk_penalty = max(0, float(row["policyRisk"]) - 56) * 0.18
    shadow_credit = 6 if row["baseDecision"] == "shadow" else 0
    return round(max(0, min(100, readiness + smoke + artifact + replay + shadow_credit - risk_penalty)), 1)


def decide(row):
    score = evidence_score(row)
    if score >= 84 and row["smokePassed"] and row["baseDecision"] != "shadow":
        return "promote-demo"
    if score >= 60 and row["smokePassed"]:
        return "policy-shadow"
    return "hold-demo"


def build_rows(drill, promoted):
    cases = drill["drillRows"]
    rows = []
    for result in [row for row in promoted if row["jobId"].startswith("embodied-")]:
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
            "policyRisk": max(base["metrics"]["perceptionStress"], base["metrics"]["actionStress"], base["metrics"]["transferRisk"], base["metrics"]["monitorNeed"]),
            "liveReadiness": result["metrics"]["readiness"],
            "smokePassed": result["metrics"]["smokePassed"],
            "runtimeSeconds": result["metrics"]["runtimeSeconds"],
            "accelerator": result["provenance"]["accelerator"],
            "evidenceArtifact": result["evidenceArtifact"],
            "artifactQuestion": scenario["artifactQuestion"],
            "policyProbe": scenario["policyProbe"],
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
        }
        row["evidenceScore"] = evidence_score(row)
        row["decision"] = decide(row)
        rows.append(row)
    return rows


def summarize(rows, command):
    return {
        "drill": "cvpr-embodied-control-live-evidence-drill",
        "status": "ready" if len(rows) == 5 and all(row["decision"] == "policy-shadow" for row in rows) else "block",
        "theme": "embodied",
        "rows": len(rows),
        "liveRows": len([row for row in rows if row["mode"] == "live-colab"]),
        "smokePassed": len([row for row in rows if row["smokePassed"] is True]),
        "artifacts": len([row for row in rows if row["evidenceArtifact"]]),
        "promoteDemo": len([row for row in rows if row["decision"] == "promote-demo"]),
        "policyShadow": len([row for row in rows if row["decision"] == "policy-shadow"]),
        "holdDemo": len([row for row in rows if row["decision"] == "hold-demo"]),
        "minEvidenceScore": min(row["evidenceScore"] for row in rows),
        "maxPolicyRisk": max(row["policyRisk"] for row in rows),
        "sourceEmbodiedDrill": "analysis/cvpr_embodied_control_repo_drill/registry.json",
        "sourceCommandCenter": "analysis/cvpr_repo_harness_command_center/registry.json",
        "sourcePromotedResults": command["summary"]["promotedArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const drillRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Embodied Control Live Evidence Drill\n\nLive-backed embodied control evidence drill using promoted Colab repo rows for driving transfer, visual RL constraints, energy-aware action, curriculum adaptation, and GUI-agent grounding.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "drillRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Live", summary["liveRows"]),
        ("Smoke", summary["smokePassed"]),
        ("Shadow", summary["policyShadow"]),
        ("Hold", summary["holdDemo"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / score {row['evidenceScore']} / {esc(row['accelerator'])}</div><h2>{esc(row['scenario'])}</h2><p>{esc(row['artifactQuestion'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><dl><dt>policy probe</dt><dd>{esc(row['policyProbe'])}</dd><dt>base decision</dt><dd>{esc(row['baseDecision'])} / risk {row['policyRisk']}</dd><dt>live readiness</dt><dd>{row['liveReadiness']} / smoke {esc(row['smokePassed'])}</dd></dl><code>{esc(row['evidenceArtifact'])}</code><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Embodied Control Live Evidence Drill</title><style>:root{{--ink:#121617;--paper:#F6F6F1;--panel:#fff;--line:#DDDAD1;--muted:#67625E;--accent:#6A5B1D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#242117;color:#F7F4EA;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#DFD18B}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#DCD8C8}}nav a{{color:#EEE6B8;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#332F28}}dl{{display:grid;grid-template-columns:130px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}code{{display:block;background:#F2F0E7;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - embodied live evidence</div><h1>Embodied Control Live Evidence Drill</h1><p>Live-backed evidence drill for the seventh promoted repo wave. All policy rows stay in shadow mode: the live artifacts prove replayability, not direct policy release.</p><nav><a href="index.html">all demos</a><a href="cvpr-embodied-control-repo-drill.html">embodied repo drill</a><a href="cvpr-repo-harness-command-center.html">repo command center</a><a href="analysis/cvpr_embodied_control_live_evidence_drill/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Policy Evidence Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_embodied_control_live_evidence_drill.py - package: source-code/learning/cvpr-embodied-control-live-evidence-drill</div></footer></body></html>"""
    write(ROOT / "cvpr-embodied-control-live-evidence-drill.html", page)


def main():
    drill = read_json(DRILL)
    promoted = read_json(PROMOTED)
    command = read_json(COMMAND)
    rows = build_rows(drill, promoted)
    summary = summarize(rows, command)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-embodied-control-live-evidence-drill.html: {summary['rows']} live rows, status {summary['status']}")


if __name__ == "__main__":
    main()

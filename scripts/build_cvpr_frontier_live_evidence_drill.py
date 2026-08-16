"""Build the CVPR frontier sensor fusion live evidence drill."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FRONTIER = ROOT / "analysis/cvpr_frontier_sensor_fusion_bench/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COMMAND = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_frontier_live_evidence_drill"
BASE = ROOT / "source-code/learning/cvpr-frontier-live-evidence-drill"

SCENARIOS = {
    "frontier-01-github-com-yjzhao1019-mos": {
        "caseId": "optical-sar-ship-match",
        "scenario": "Optical-SAR maritime identity replay",
        "artifactQuestion": "Does the promoted smoke artifact prove cross-modal repository readiness before ship identity evidence is trusted?",
        "failureProbe": "visibility loss plus modality mismatch",
    },
    "frontier-02-github-com-earth-insights-segear": {
        "caseId": "language-remote-segmentation",
        "scenario": "Language-grounded geospatial segmentation replay",
        "artifactQuestion": "Does the live export preserve the language-conditioned remote sensing path needed for nested region checks?",
        "failureProbe": "hierarchical place language drift",
    },
    "frontier-03-github-com-fahadshamshad-raven": {
        "caseId": "watermark-view-synthesis",
        "scenario": "Watermark and provenance stress replay",
        "artifactQuestion": "Does the promoted run carry enough evidence to block novel-view synthesis when authentication traces are at risk?",
        "failureProbe": "watermark erasure under generated view synthesis",
    },
    "frontier-04-github-com-jimmyxichen-mm-ovseg": {
        "caseId": "optical-sar-open-vocab",
        "scenario": "Open-vocabulary optical-SAR mask replay",
        "artifactQuestion": "Does the live repo result support SAR-backed vocabulary masks when cloudy optical evidence collapses?",
        "failureProbe": "open-vocabulary mask transfer under cloud occlusion",
    },
    "frontier-05-github-com-zhang-peirong-geovis": {
        "caseId": "geospatial-visual-search",
        "scenario": "Tiny-target geospatial search replay",
        "artifactQuestion": "Does the promoted artifact support retrieval evidence tied to road, river, and relative-position context?",
        "failureProbe": "small target retrieval with contextual distractors",
    },
}

CORE = """export function evidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 22 : -40;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.baseRisk ?? 0) - 50) * 0.25;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay - riskPenalty)).toFixed(1));
}

export function drillDecision(row) {
  const score = evidenceScore(row);
  if (score >= 78 && row.smokePassed) return "promote-demo";
  if (score >= 58 && row.smokePassed) return "evidence-review";
  return "hold-demo";
}

export function summarizeDrill(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: evidenceScore(row), decision: drillDecision(row) }));
  return {
    drill: "cvpr-frontier-live-evidence-drill",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    evidenceReview: scored.filter((row) => row.decision === "evidence-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { drillRows, summary } from "../src/fixtures.js";
import { drillDecision, evidenceScore, summarizeDrill } from "../src/core.js";

assert.equal(drillRows.length, 5);
assert.equal(drillRows.every((row) => row.mode === "live-colab"), true);
assert.equal(drillRows.every((row) => row.smokePassed), true);
assert.equal(drillRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(drillRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(drillRows.every((row) => evidenceScore(row) > 55));
assert.ok(drillRows.every((row) => drillDecision(row) !== "hold-demo"));
const derived = summarizeDrill(drillRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "frontier");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-frontier-live-evidence-drill:", summary.rows, "rows");
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
    smoke = 22 if row["smokePassed"] else -40
    artifact = 16 if row["evidenceArtifact"].endswith(".json") else 0
    replay = 12 if row["jobId"] in row["replayCommand"] else 0
    risk_penalty = max(0, float(row["baseRisk"]) - 50) * 0.25
    return round(max(0, min(100, readiness + smoke + artifact + replay - risk_penalty)), 1)


def decide(row):
    score = evidence_score(row)
    if score >= 78 and row["smokePassed"]:
        return "promote-demo"
    if score >= 58 and row["smokePassed"]:
        return "evidence-review"
    return "hold-demo"


def build_rows(frontier, promoted):
    cases_by_id = {row["id"]: row for row in frontier["fusionRows"]}
    rows = []
    for result in [row for row in promoted if row["jobId"].startswith("frontier-")]:
        scenario = SCENARIOS[result["jobId"]]
        base = cases_by_id[scenario["caseId"]]
        row = {
            "jobId": result["jobId"],
            "caseId": scenario["caseId"],
            "scenario": scenario["scenario"],
            "repo": result["repo"],
            "mode": result["mode"],
            "page": result["page"],
            "paperTitle": base["paperTitle"],
            "baseDecision": base["decision"],
            "baseRisk": max(base["metrics"]["fusionRisk"], base["metrics"]["provenanceRisk"]),
            "liveReadiness": result["metrics"]["readiness"],
            "smokePassed": result["metrics"]["smokePassed"],
            "runtimeSeconds": result["metrics"]["runtimeSeconds"],
            "accelerator": result["provenance"]["accelerator"],
            "evidenceArtifact": result["evidenceArtifact"],
            "artifactQuestion": scenario["artifactQuestion"],
            "failureProbe": scenario["failureProbe"],
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
        }
        row["evidenceScore"] = evidence_score(row)
        row["decision"] = decide(row)
        rows.append(row)
    return rows


def summarize(rows, command):
    return {
        "drill": "cvpr-frontier-live-evidence-drill",
        "status": "ready" if len(rows) == 5 and all(row["decision"] != "hold-demo" for row in rows) else "block",
        "theme": "frontier",
        "rows": len(rows),
        "liveRows": len([row for row in rows if row["mode"] == "live-colab"]),
        "smokePassed": len([row for row in rows if row["smokePassed"] is True]),
        "artifacts": len([row for row in rows if row["evidenceArtifact"]]),
        "promoteDemo": len([row for row in rows if row["decision"] == "promote-demo"]),
        "evidenceReview": len([row for row in rows if row["decision"] == "evidence-review"]),
        "holdDemo": len([row for row in rows if row["decision"] == "hold-demo"]),
        "minEvidenceScore": min(row["evidenceScore"] for row in rows),
        "maxBaseRisk": max(row["baseRisk"] for row in rows),
        "sourceFrontierBench": "analysis/cvpr_frontier_sensor_fusion_bench/registry.json",
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
    write(BASE / "README.md", "# CVPR Frontier Live Evidence Drill\n\nLive-backed frontier sensor fusion drill using the five promoted Colab repo rows, evidence artifacts, replay commands, and base fusion bench risks.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "drillRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Live", summary["liveRows"]),
        ("Smoke", summary["smokePassed"]),
        ("Promote", summary["promoteDemo"]),
        ("Review", summary["evidenceReview"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / score {row['evidenceScore']} / {esc(row['accelerator'])}</div><h2>{esc(row['scenario'])}</h2><p>{esc(row['artifactQuestion'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><dl><dt>failure probe</dt><dd>{esc(row['failureProbe'])}</dd><dt>base decision</dt><dd>{esc(row['baseDecision'])} / risk {row['baseRisk']}</dd><dt>live readiness</dt><dd>{row['liveReadiness']} / smoke {esc(row['smokePassed'])}</dd></dl><code>{esc(row['evidenceArtifact'])}</code><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Frontier Live Evidence Drill</title><style>:root{{--ink:#111716;--paper:#F6F7F1;--panel:#fff;--line:#D9DED4;--muted:#5E6760;--accent:#496E27;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#1F2518;color:#F4F8EC;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#BEDD8E}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:110ch;color:#D6DECA}}nav a{{color:#EDF4C3;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#26312C}}dl{{display:grid;grid-template-columns:130px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}code{{display:block;background:#EEF2EC;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - frontier live evidence</div><h1>Frontier Live Evidence Drill</h1><p>Live-backed evidence drill for the first promoted repo wave: five frontier sensor-fusion repos, their promoted Colab result rows, evidence artifacts, failure probes, and replay commands.</p><nav><a href="index.html">all demos</a><a href="cvpr-frontier-sensor-fusion-bench.html">frontier bench</a><a href="cvpr-repo-harness-command-center.html">repo command center</a><a href="analysis/cvpr_frontier_live_evidence_drill/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Live Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_frontier_live_evidence_drill.py - package: source-code/learning/cvpr-frontier-live-evidence-drill</div></footer></body></html>"""
    write(ROOT / "cvpr-frontier-live-evidence-drill.html", page)


def main():
    frontier = read_json(FRONTIER)
    promoted = read_json(PROMOTED)
    command = read_json(COMMAND)
    rows = build_rows(frontier, promoted)
    summary = summarize(rows, command)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-frontier-live-evidence-drill.html: {summary['rows']} live rows, status {summary['status']}")


if __name__ == "__main__":
    main()

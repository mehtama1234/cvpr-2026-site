"""Build the CVPR perception parts live evidence bench."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BENCH = ROOT / "analysis/cvpr_perception_parts_repo_bench/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COMMAND = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_perception_parts_live_evidence_bench"
BASE = ROOT / "source-code/learning/cvpr-perception-parts-live-evidence-bench"

SCENARIOS = {
    "perception-01-github-com-primebo1-fob": {
        "caseIndex": 0,
        "scenario": "Background-ablation medical mask review",
        "artifactQuestion": "Does the promoted run provide enough repo evidence to inspect background reliance before trusting foreground masks?",
        "partProbe": "few-shot medical segmentation under background cue ablation",
    },
    "perception-02-github-com-zzzphaethon-dapass": {
        "caseIndex": 1,
        "scenario": "Pseudo-label adaptation drift review",
        "artifactQuestion": "Does the live artifact support checks for pseudo-label noise during domain-adaptive part segmentation?",
        "partProbe": "pseudo-label drift across adaptation domains",
    },
    "perception-03-github-com-hzz-yy-tf-ssd": {
        "caseIndex": 2,
        "scenario": "Few-shot tiny target localization review",
        "artifactQuestion": "Does the promoted result carry enough evidence to inspect few-shot small-object localization failures?",
        "partProbe": "tiny foreground detection under sparse support examples",
    },
    "perception-04-github-com-yvogao-tape": {
        "caseIndex": 3,
        "scenario": "Panoramic seam part-boundary review",
        "artifactQuestion": "Does the live row support checking boundary stability across panoramic projection seams?",
        "partProbe": "part-boundary continuity across wide-field seam distortion",
    },
    "perception-05-github-com-jsliam94-erecu": {
        "caseIndex": 4,
        "scenario": "Camouflage boundary recovery review",
        "artifactQuestion": "Does the promoted artifact support evidence checks for boundary recovery when object and background textures merge?",
        "partProbe": "camouflaged object boundary recovery under texture ambiguity",
    },
}

CORE = """export function partEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 23 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 17 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 13 : 0;
  const riskPenalty = Math.max(0, Number(row.partRisk ?? 0) - 54) * 0.18;
  const reviewCredit = row.baseDecision === "review" ? 5 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + reviewCredit - riskPenalty)).toFixed(1));
}

export function benchDecision(row) {
  const score = partEvidenceScore(row);
  if (score >= 82 && row.smokePassed) return "promote-demo";
  if (score >= 58 && row.smokePassed) return "part-review";
  return "hold-demo";
}

export function summarizeBench(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: partEvidenceScore(row), decision: benchDecision(row) }));
  return {
    bench: "cvpr-perception-parts-live-evidence-bench",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    partReview: scored.filter((row) => row.decision === "part-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { benchRows, summary } from "../src/fixtures.js";
import { benchDecision, partEvidenceScore, summarizeBench } from "../src/core.js";

assert.equal(benchRows.length, 5);
assert.equal(benchRows.every((row) => row.mode === "live-colab"), true);
assert.equal(benchRows.every((row) => row.smokePassed), true);
assert.equal(benchRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(benchRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(benchRows.every((row) => partEvidenceScore(row) >= 58));
assert.ok(benchRows.every((row) => benchDecision(row) !== "hold-demo"));
const derived = summarizeBench(benchRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "perception");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-perception-parts-live-evidence-bench:", summary.rows, "rows");
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
    risk_penalty = max(0, float(row["partRisk"]) - 54) * 0.18
    review_credit = 5 if row["baseDecision"] == "review" else 0
    return round(max(0, min(100, readiness + smoke + artifact + replay + review_credit - risk_penalty)), 1)


def decide(row):
    score = evidence_score(row)
    if score >= 82 and row["smokePassed"]:
        return "promote-demo"
    if score >= 58 and row["smokePassed"]:
        return "part-review"
    return "hold-demo"


def build_rows(bench, promoted):
    cases = bench["benchRows"]
    rows = []
    for result in [row for row in promoted if row["jobId"].startswith("perception-")]:
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
            "partRisk": max(base["metrics"]["localizationRisk"], base["metrics"]["adaptationRisk"], base["metrics"]["evidenceNeed"]),
            "liveReadiness": result["metrics"]["readiness"],
            "smokePassed": result["metrics"]["smokePassed"],
            "runtimeSeconds": result["metrics"]["runtimeSeconds"],
            "accelerator": result["provenance"]["accelerator"],
            "evidenceArtifact": result["evidenceArtifact"],
            "artifactQuestion": scenario["artifactQuestion"],
            "partProbe": scenario["partProbe"],
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
        }
        row["evidenceScore"] = evidence_score(row)
        row["decision"] = decide(row)
        rows.append(row)
    return rows


def summarize(rows, command):
    return {
        "bench": "cvpr-perception-parts-live-evidence-bench",
        "status": "ready" if len(rows) == 5 and all(row["decision"] != "hold-demo" for row in rows) else "block",
        "theme": "perception",
        "rows": len(rows),
        "liveRows": len([row for row in rows if row["mode"] == "live-colab"]),
        "smokePassed": len([row for row in rows if row["smokePassed"] is True]),
        "artifacts": len([row for row in rows if row["evidenceArtifact"]]),
        "promoteDemo": len([row for row in rows if row["decision"] == "promote-demo"]),
        "partReview": len([row for row in rows if row["decision"] == "part-review"]),
        "holdDemo": len([row for row in rows if row["decision"] == "hold-demo"]),
        "minEvidenceScore": min(row["evidenceScore"] for row in rows),
        "maxPartRisk": max(row["partRisk"] for row in rows),
        "sourcePerceptionBench": "analysis/cvpr_perception_parts_repo_bench/registry.json",
        "sourceCommandCenter": "analysis/cvpr_repo_harness_command_center/registry.json",
        "sourcePromotedResults": command["summary"]["promotedArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const benchRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Perception Parts Live Evidence Bench\n\nLive-backed part-localization evidence bench using promoted Colab repo rows for segmentation, pseudo-label drift, few-shot tiny targets, panoramic seams, and camouflage boundary recovery.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "benchRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Live", summary["liveRows"]),
        ("Smoke", summary["smokePassed"]),
        ("Promote", summary["promoteDemo"]),
        ("Review", summary["partReview"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<article class="case"><div class="meta">{esc(row['decision'])} / score {row['evidenceScore']} / {esc(row['accelerator'])}</div><h2>{esc(row['scenario'])}</h2><p>{esc(row['artifactQuestion'])}</p><a href="{esc(row['repo'])}">{esc(row['paperTitle'])}</a><dl><dt>part probe</dt><dd>{esc(row['partProbe'])}</dd><dt>base decision</dt><dd>{esc(row['baseDecision'])} / risk {row['partRisk']}</dd><dt>live readiness</dt><dd>{row['liveReadiness']} / smoke {esc(row['smokePassed'])}</dd></dl><code>{esc(row['evidenceArtifact'])}</code><code>{esc(row['replayCommand'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Perception Parts Live Evidence Bench</title><style>:root{{--ink:#111718;--paper:#F6F7F3;--panel:#fff;--line:#D9DDD6;--muted:#5F6763;--accent:#38642D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#1B241A;color:#F0F7EE;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,dt{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#B5DA9D}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#D2DDCD}}nav a{{color:#DDF1D1;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.case{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta,dt{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.case{{padding:16px}}.case h2{{font-size:22px;margin:4px 0 8px}}.case p{{color:#2A3328}}dl{{display:grid;grid-template-columns:130px 1fr;gap:4px 10px;margin:12px 0}}dd{{margin:0}}code{{display:block;background:#EEF3EC;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}dl{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - perception live evidence</div><h1>Perception Parts Live Evidence Bench</h1><p>Live-backed evidence bench for the sixth promoted repo wave: segmentation, pseudo-label drift, few-shot tiny targets, panoramic seams, and camouflage boundary recovery.</p><nav><a href="index.html">all demos</a><a href="cvpr-perception-parts-repo-bench.html">perception parts bench</a><a href="cvpr-repo-harness-command-center.html">repo command center</a><a href="analysis/cvpr_perception_parts_live_evidence_bench/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="case"><h2>Part Evidence Gate</h2><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_perception_parts_live_evidence_bench.py - package: source-code/learning/cvpr-perception-parts-live-evidence-bench</div></footer></body></html>"""
    write(ROOT / "cvpr-perception-parts-live-evidence-bench.html", page)


def main():
    bench = read_json(BENCH)
    promoted = read_json(PROMOTED)
    command = read_json(COMMAND)
    rows = build_rows(bench, promoted)
    summary = summarize(rows, command)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-perception-parts-live-evidence-bench.html: {summary['rows']} live rows, status {summary['status']}")


if __name__ == "__main__":
    main()

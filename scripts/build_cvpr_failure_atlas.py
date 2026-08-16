"""Build the CVPR cross-theme failure atlas."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-failure-atlas"
ANALYSIS = ROOT / "analysis/cvpr_failure_atlas"

BENCH_REGISTRIES = [
    ROOT / "analysis/cvpr_driving_safety_bench/registry.json",
    ROOT / "analysis/cvpr_adversarial_provenance_bench/registry.json",
    ROOT / "analysis/cvpr_clinical_shift_bench/registry.json",
    ROOT / "analysis/cvpr_compute_serving_bench/registry.json",
    ROOT / "analysis/cvpr_long_tail_grounding_bench/registry.json",
    ROOT / "analysis/cvpr_temporal_rollout_bench/registry.json",
    ROOT / "analysis/cvpr_restoration_fidelity_bench/registry.json",
    ROOT / "analysis/cvpr_constraint_generation_bench/registry.json",
    ROOT / "analysis/cvpr_vlm_answer_verification_bench/registry.json",
    ROOT / "analysis/cvpr_metric_geometry_bench/registry.json",
    ROOT / "analysis/cvpr_gaussian_splatting_bench/registry.json",
]

FAILURE_SPECS = {
    "cvpr-driving-safety-bench": {"family": "safety risk", "metric": "risk", "direction": "high", "threshold": 35},
    "cvpr-adversarial-provenance-bench": {"family": "provenance gap", "metric": "evidence", "direction": "low", "threshold": 50},
    "cvpr-clinical-shift-bench": {"family": "clinical shift", "metric": "residualRisk", "direction": "high", "threshold": 50},
    "cvpr-compute-serving-bench": {"family": "evidence loss", "metric": "retainedEvidence", "direction": "low", "threshold": 55},
    "cvpr-long-tail-grounding-bench": {"family": "localization gap", "metric": "localizedEvidence", "direction": "low", "threshold": 55},
    "cvpr-temporal-rollout-bench": {"family": "temporal drift", "metric": "drift", "direction": "high", "threshold": 42},
    "cvpr-restoration-fidelity-bench": {"family": "fabricated detail", "metric": "fabricatedDetailRisk", "direction": "high", "threshold": 42},
    "cvpr-constraint-generation-bench": {"family": "identity damage", "metric": "identityDamage", "direction": "high", "threshold": 38},
    "cvpr-vlm-answer-verification-bench": {"family": "unsupported answer", "metric": "unsupportedClaimRisk", "direction": "high", "threshold": 35},
    "cvpr-metric-geometry-bench": {"family": "metric geometry drift", "metric": "scaleDrift", "direction": "high", "threshold": 35},
    "cvpr-gaussian-splatting-bench": {"family": "splat edit leakage", "metric": "editLeakageRisk", "direction": "high", "threshold": 35},
}

CORE = """export function severityScore(row) {
  const gap = row.direction === "high" ? row.metricValue - row.threshold : row.threshold - row.metricValue;
  const decisionWeight = row.decision === "block" ? 20 : row.decision === "review" ? 8 : 0;
  return Number(Math.max(0, gap + decisionWeight).toFixed(1));
}

export function rankFailures(rows) {
  return [...rows]
    .map((row) => ({ ...row, severity: severityScore(row) }))
    .sort((a, b) => b.severity - a.severity || a.family.localeCompare(b.family));
}

export function summarizeFamilies(rows) {
  const families = new Map();
  for (const row of rows) {
    const current = families.get(row.family) || { family: row.family, cases: 0, release: 0, review: 0, block: 0, maxSeverity: 0 };
    current.cases += 1;
    current[row.decision] += 1;
    current.maxSeverity = Math.max(current.maxSeverity, severityScore(row));
    families.set(row.family, current);
  }
  return [...families.values()].sort((a, b) => b.block - a.block || b.maxSeverity - a.maxSeverity);
}

export function summarizeAtlas(rows) {
  const ranked = rankFailures(rows);
  return {
    cases: rows.length,
    families: new Set(rows.map((row) => row.family)).size,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    maxSeverity: ranked[0]?.severity ?? 0,
    topFailure: ranked[0],
    familyRows: summarizeFamilies(rows),
    ranked
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { failureRows } from "../src/fixtures.js";
import { rankFailures, severityScore, summarizeAtlas, summarizeFamilies } from "../src/core.js";

assert.equal(failureRows.length, 44);
assert.ok(failureRows.every((row) => row.family));
assert.ok(failureRows.every((row) => row.metric in row.metrics));
assert.ok(failureRows.every((row) => row.decision !== "block"));
const firstReview = failureRows.find((row) => row.decision === "review");
if (firstReview) assert.ok(severityScore(firstReview) >= 0);

const ranked = rankFailures(failureRows);
assert.equal(ranked.length, failureRows.length);
assert.ok(ranked[0].severity >= ranked.at(-1).severity);

const families = summarizeFamilies(failureRows);
assert.equal(families.length, 11);
assert.ok(families.every((row) => row.block === 0));

const summary = summarizeAtlas(failureRows);
assert.equal(summary.cases, 44);
assert.equal(summary.families, 11);
assert.equal(summary.block, 0);
assert.equal(summary.review, 0);
assert.equal(summary.release, 44);
assert.equal(summary.maxSeverity, 0);
console.log("ok cvpr-failure-atlas:", summary.cases, "cases", summary.families, "families");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def severity(row):
    gap = row["metricValue"] - row["threshold"] if row["direction"] == "high" else row["threshold"] - row["metricValue"]
    weight = 20 if row["decision"] == "block" else 8 if row["decision"] == "review" else 0
    return round(max(0, gap + weight), 1)


def load_rows():
    rows = []
    for path in BENCH_REGISTRIES:
        data = json.loads(path.read_text(encoding="utf-8"))
        summary = data["summary"]
        spec = FAILURE_SPECS[summary["bench"]]
        for record in data["records"]:
            metric_value = record["metrics"][spec["metric"]]
            row = {
                "id": f"{summary['bench']}/{record['id']}",
                "bench": summary["bench"],
                "page": summary["bench"] + ".html",
                "registry": str(path.relative_to(ROOT)),
                "system": record["system"],
                "cluster": record["cluster"],
                "case": record["title"],
                "family": spec["family"],
                "metric": spec["metric"],
                "metricValue": metric_value,
                "threshold": spec["threshold"],
                "direction": spec["direction"],
                "decision": record["decision"],
                "readiness": record["metrics"]["readiness"],
                "controls": record["controls"],
                "metrics": record["metrics"],
                "severity": 0,
            }
            row["severity"] = severity(row)
            rows.append(row)
    return rows


def summarize(rows):
    ranked = sorted(rows, key=lambda row: (-row["severity"], row["family"]))
    family_map = {}
    for row in rows:
        current = family_map.setdefault(row["family"], {"family": row["family"], "cases": 0, "release": 0, "review": 0, "block": 0, "maxSeverity": 0})
        current["cases"] += 1
        current[row["decision"]] += 1
        current["maxSeverity"] = max(current["maxSeverity"], row["severity"])
    families = sorted(family_map.values(), key=lambda row: (-row["block"], -row["maxSeverity"]))
    return {
        "cases": len(rows),
        "families": len(families),
        "release": sum(1 for row in rows if row["decision"] == "release"),
        "review": sum(1 for row in rows if row["decision"] == "review"),
        "block": sum(1 for row in rows if row["decision"] == "block"),
        "maxSeverity": ranked[0]["severity"],
        "topFailure": ranked[0]["id"],
        "status": "interactive",
    }, families, ranked


def build_package(rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const failureRows = " + json.dumps(rows, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Failure Atlas\n\nCross-theme failure normalization for all CVPR production-readiness benches.\n")


def build_registry(summary, families, ranked):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "families": families, "rankedFailures": ranked}, indent=2) + "\n")


def build_page(summary, families, ranked):
    stats = [
        ("Cases", summary["cases"]),
        ("Families", summary["families"]),
        ("Release", summary["release"]),
        ("Review", summary["review"]),
        ("Block", summary["block"]),
        ("Max severity", summary["maxSeverity"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    family_html = "".join(
        f"""<tr><td>{esc(row['family'])}</td><td>{row['cases']}</td><td class="release">{row['release']}</td><td class="review">{row['review']}</td><td class="block">{row['block']}</td><td>{row['maxSeverity']}</td></tr>"""
        for row in families
    )
    failure_html = "".join(
        f"""<tr><td><a href="{esc(row['page'])}">{esc(row['case'])}</a><br><small>{esc(row['cluster'])}</small></td><td>{esc(row['family'])}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td><td>{esc(row['metric'])}</td><td>{row['metricValue']}</td><td>{row['threshold']}</td><td>{row['severity']}</td><td>{row['readiness']}</td></tr>"""
        for row in ranked
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Failure Atlas</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,td small{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:26px}}.stat span,td small{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}.release{{color:var(--good)}}.review{{color:var(--warn)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · failure atlas</div><h1>Cross-theme failure atlas</h1><p>Ranks every bench case across safety, provenance, clinical shift, evidence loss, localization, temporal drift, restoration hallucination, and identity damage.</p><nav><a href="cvpr-mission-control.html">mission control</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-demo-arena.html">arena</a><a href="analysis/cvpr_failure_atlas/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Failure Families</h2><table><thead><tr><th>Family</th><th>Cases</th><th>Release</th><th>Review</th><th>Block</th><th>Max severity</th></tr></thead><tbody>{family_html}</tbody></table></section>
<section class="panel"><h2>Ranked Failure Cases</h2><table><thead><tr><th>Case</th><th>Family</th><th>Decision</th><th>Metric</th><th>Value</th><th>Gate</th><th>Severity</th><th>Readiness</th></tr></thead><tbody>{failure_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_failure_atlas.py · tested package under source-code/learning/cvpr-failure-atlas</div></footer></body></html>"""
    write(ROOT / "cvpr-failure-atlas.html", page)


def main():
    rows = load_rows()
    build_package(rows)
    summary, families, ranked = summarize(rows)
    build_registry(summary, families, ranked)
    build_page(summary, families, ranked)
    print(f"wrote cvpr-failure-atlas.html: {summary['cases']} cases, {summary['families']} families")


if __name__ == "__main__":
    main()

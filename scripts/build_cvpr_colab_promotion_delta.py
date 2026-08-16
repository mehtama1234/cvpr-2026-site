"""Build the CVPR Colab promotion delta report."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-colab-promotion-delta"
ANALYSIS = ROOT / "analysis/cvpr_colab_promotion_delta"
CANONICAL = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"
PROMOTED = ROOT / "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json"
PROMOTION = ROOT / "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json"

CORE = """export function deltaGate(summary) {
  if (!summary) return "block";
  if (summary.cases !== 40) return "block";
  if (summary.jobs !== 10) return "block";
  if (summary.missing !== 0) return "block";
  if (summary.modeMismatches !== 0) return "block";
  if (summary.regressions !== 0) return "block";
  if (summary.maxReadinessDrop < -0.5) return "block";
  return "release";
}

export function summarizeDelta(input) {
  const regressions = input.rows.filter((row) => row.regression).length;
  const maxReadinessDrop = Math.min(...input.rows.map((row) => row.readinessDelta));
  return {
    delta: "cvpr-colab-promotion-delta",
    cases: input.rows.length,
    jobs: new Set(input.rows.map((row) => row.jobId)).size,
    missing: input.missing.length,
    modeMismatches: input.modeMismatches.length,
    regressions,
    maxReadinessDrop
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { deltaInput } from "../src/fixtures.js";
import { deltaGate, summarizeDelta } from "../src/core.js";

const summary = summarizeDelta(deltaInput);
assert.equal(deltaGate(summary), "release");
assert.equal(summary.cases, 40);
assert.equal(summary.jobs, 10);
assert.equal(summary.missing, 0);
assert.equal(summary.modeMismatches, 0);
assert.equal(summary.regressions, 0);
assert.equal(summary.maxReadinessDrop, 0);
console.log("ok cvpr-colab-promotion-delta:", summary.cases, "cases");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def keyed(rows):
    return {(row["jobId"], row["caseId"]): row for row in rows}


def numeric_metric_delta(before, after):
    deltas = {}
    before_metrics = before.get("metrics", {})
    after_metrics = after.get("metrics", {})
    for key in sorted(set(before_metrics) & set(after_metrics)):
        if isinstance(before_metrics[key], (int, float)) and isinstance(after_metrics[key], (int, float)):
            deltas[key] = round(after_metrics[key] - before_metrics[key], 3)
    return deltas


def compare(canonical, promoted):
    before = keyed(canonical)
    after = keyed(promoted)
    missing = []
    mode_mismatches = []
    rows = []
    for key in sorted(before):
        if key not in after:
            missing.append({"jobId": key[0], "caseId": key[1]})
            continue
        source = before[key]
        target = after[key]
        if source.get("mode") != "cached-real" or target.get("mode") != "cached-real":
            mode_mismatches.append({"jobId": key[0], "caseId": key[1], "sourceMode": source.get("mode"), "targetMode": target.get("mode")})
        deltas = numeric_metric_delta(source, target)
        readiness_delta = deltas.get("readiness", 0)
        rows.append({
            "jobId": key[0],
            "caseId": key[1],
            "readinessBefore": source.get("metrics", {}).get("readiness"),
            "readinessAfter": target.get("metrics", {}).get("readiness"),
            "readinessDelta": readiness_delta,
            "metricDeltas": deltas,
            "promotedFrom": target.get("provenance", {}).get("promotedFrom"),
            "regression": readiness_delta < -0.5,
        })
    for key in sorted(set(after) - set(before)):
        missing.append({"jobId": key[0], "caseId": key[1], "extra": True})
    return rows, missing, mode_mismatches


def build_package(input_data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const deltaInput = " + json.dumps(input_data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Colab Promotion Delta\n\nMetric regression checks for promoted Colab Pro+ evidence.\n")


def build_page(summary, rows):
    stats = [
        ("status", summary["status"]),
        ("cases", summary["cases"]),
        ("jobs", summary["jobs"]),
        ("regressions", summary["regressions"]),
        ("max drop", summary["maxReadinessDrop"]),
        ("mode mismatches", summary["modeMismatches"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    row_html = "".join(
        f"""<tr><td>{esc(row['jobId'])}</td><td>{esc(row['caseId'])}</td><td>{row['readinessBefore']}</td><td>{row['readinessAfter']}</td><td>{row['readinessDelta']}</td><td>{esc(row['promotedFrom'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Colab Promotion Delta</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · Colab promotion delta</div><h1>CVPR Colab Promotion Delta</h1><p>Regression check between canonical cached evidence and the promoted Colab evidence artifact.</p><nav><a href="cvpr-colab-live-intake.html">live intake</a><a href="cvpr-colab-evidence-ledger.html">evidence ledger</a><a href="cvpr-colab-operations-dashboard.html">operations</a><a href="analysis/cvpr_colab_promotion_delta/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Regression Gate</h2><code>block if missing cases, mode mismatches, or readiness drop below -0.5</code></section>
<section class="panel"><h2>Case Deltas</h2><table><thead><tr><th>Job</th><th>Case</th><th>Before</th><th>After</th><th>Delta</th><th>Provenance</th></tr></thead><tbody>{row_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_colab_promotion_delta.py · tested package under source-code/learning/cvpr-colab-promotion-delta</div></footer></body></html>"""
    write(ROOT / "cvpr-colab-promotion-delta.html", page)


def main():
    canonical = load_json(CANONICAL)
    promoted = load_json(PROMOTED)
    promotion = load_json(PROMOTION)
    rows, missing, mode_mismatches = compare(canonical, promoted)
    regressions = [row for row in rows if row["regression"]]
    max_drop = min((row["readinessDelta"] for row in rows), default=0)
    summary = {
        "delta": "cvpr-colab-promotion-delta",
        "status": "release" if not missing and not mode_mismatches and not regressions else "block",
        "cases": len(rows),
        "jobs": len({row["jobId"] for row in rows}),
        "missing": len(missing),
        "modeMismatches": len(mode_mismatches),
        "regressions": len(regressions),
        "maxReadinessDrop": max_drop,
        "canonicalArtifact": str(CANONICAL.relative_to(ROOT)),
        "promotedArtifact": str(PROMOTED.relative_to(ROOT)),
        "promotionStatus": promotion["summary"]["status"],
    }
    input_data = {"summary": summary, "rows": rows, "missing": missing, "modeMismatches": mode_mismatches, "regressions": regressions}
    build_package(input_data)
    write(ANALYSIS / "registry.json", json.dumps(input_data, indent=2) + "\n")
    build_page(summary, rows)
    print(f"wrote cvpr-colab-promotion-delta.html: {summary['cases']} cases, {summary['regressions']} regressions")


if __name__ == "__main__":
    main()

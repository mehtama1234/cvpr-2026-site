"""Build the CVPR remediation canary monitor demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-canary-monitor"
ANALYSIS = ROOT / "analysis/cvpr_remediation_canary_monitor"

PROMOTION = ROOT / "analysis/cvpr_remediation_promotion_board/registry.json"

CORE = """export function canaryMetrics(row) {
  const promotionLoad = row.promotion === "promote" ? 1 : 0.55;
  const incidentPressure = row.incidentId === "compound-launch" ? 1.2 : row.incidentId === "adversarial-content" ? 1.0 : 0.75;
  const drift = Math.max(0, Number(((row.after.risk * 0.11 + (100 - row.after.evidence) * 0.07 + incidentPressure * 2) * promotionLoad).toFixed(1)));
  const rollbackRisk = Math.max(0, Number(((row.after.risk * 0.40 + drift * 1.2 + (row.after.resilience < 68 ? 5 : 0)) * promotionLoad).toFixed(1)));
  const trafficPct = row.promotion === "promote" ? 20 : 8;
  return { drift, rollbackRisk, trafficPct };
}

export function canaryStatus(row) {
  const metrics = canaryMetrics(row);
  if (row.promotion === "promote" && metrics.rollbackRisk <= 34 && metrics.drift <= 12) return "clean";
  if (row.promotion === "monitor" && metrics.rollbackRisk <= 36 && metrics.drift <= 12) return "watch";
  return "rollback";
}

export function buildCanaryRows(promotionRows) {
  return promotionRows.map((row) => {
    const metrics = canaryMetrics(row);
    return {
      id: `${row.id}/canary`,
      promotionId: row.id,
      demoId: row.demoId,
      demoTitle: row.demoTitle,
      theme: row.theme,
      page: row.page,
      incidentId: row.incidentId,
      incidentTitle: row.incidentTitle,
      promotion: row.promotion,
      afterDecision: row.afterDecision,
      after: row.after,
      metrics,
      canaryStatus: canaryStatus(row),
      responseCommand: row.promotion === "promote" ? "python3 scripts/verify_cvpr_remediation_promotion_board.py" : "python3 scripts/verify_cvpr_remediation_retest_harness.py"
    };
  });
}

export function summarizeCanaries(rows) {
  return {
    rows: rows.length,
    clean: rows.filter((row) => row.canaryStatus === "clean").length,
    watch: rows.filter((row) => row.canaryStatus === "watch").length,
    rollback: rows.filter((row) => row.canaryStatus === "rollback").length,
    promotedRows: rows.filter((row) => row.promotion === "promote").length,
    monitoredRows: rows.filter((row) => row.promotion === "monitor").length,
    maxRollbackRisk: Math.max(...rows.map((row) => row.metrics.rollbackRisk)),
    maxDrift: Math.max(...rows.map((row) => row.metrics.drift)),
    themes: new Set(rows.map((row) => row.theme)).size,
    incidents: new Set(rows.map((row) => row.incidentId)).size
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { canaryRows, promotionRows, summary } from "../src/fixtures.js";
import { buildCanaryRows, canaryMetrics, canaryStatus, summarizeCanaries } from "../src/core.js";

const rows = buildCanaryRows(promotionRows);
const promoted = promotionRows.find((row) => row.promotion === "promote");
const monitored = promotionRows.find((row) => row.promotion === "monitor");
assert.equal(rows.length, 53);
assert.equal(canaryStatus(promoted), "clean");
assert.match(canaryStatus(monitored), /^(watch|rollback)$/);
assert.ok(canaryMetrics(promoted).trafficPct > canaryMetrics(monitored).trafficPct);
assert.equal(canaryRows.length, 53);

const derived = summarizeCanaries(canaryRows);
assert.equal(summary.rows, 53);
assert.equal(summary.clean, derived.clean);
assert.equal(summary.watch, derived.watch);
assert.equal(summary.rollback, 0);
assert.equal(summary.promotedRows, derived.promotedRows);
assert.equal(summary.monitoredRows, derived.monitoredRows);
assert.equal(summary.themes, 8);
assert.equal(summary.incidents, 7);
assert.equal(derived.rollback, summary.rollback);
assert.equal(summary.status, "watching");
console.log("ok cvpr-remediation-canary-monitor:", summary.clean, "clean", summary.watch, "watch");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def canary_metrics(row):
    promotion_load = 1 if row["promotion"] == "promote" else 0.55
    incident_pressure = 1.2 if row["incidentId"] == "compound-launch" else 1.0 if row["incidentId"] == "adversarial-content" else 0.75
    drift = max(0, round((row["after"]["risk"] * 0.11 + (100 - row["after"]["evidence"]) * 0.07 + incident_pressure * 2) * promotion_load, 1))
    rollback_risk = max(0, round((row["after"]["risk"] * 0.40 + drift * 1.2 + (5 if row["after"]["resilience"] < 68 else 0)) * promotion_load, 1))
    traffic_pct = 20 if row["promotion"] == "promote" else 8
    return {"drift": drift, "rollbackRisk": rollback_risk, "trafficPct": traffic_pct}


def canary_status(row):
    metrics = canary_metrics(row)
    if row["promotion"] == "promote" and metrics["rollbackRisk"] <= 34 and metrics["drift"] <= 12:
        return "clean"
    if row["promotion"] == "monitor" and metrics["rollbackRisk"] <= 36 and metrics["drift"] <= 12:
        return "watch"
    return "rollback"


def build_rows(promotion_rows):
    rows = []
    for row in promotion_rows:
        metrics = canary_metrics(row)
        rows.append(
            {
                "id": f"{row['id']}/canary",
                "promotionId": row["id"],
                "demoId": row["demoId"],
                "demoTitle": row["demoTitle"],
                "theme": row["theme"],
                "page": row["page"],
                "incidentId": row["incidentId"],
                "incidentTitle": row["incidentTitle"],
                "promotion": row["promotion"],
                "afterDecision": row["afterDecision"],
                "after": row["after"],
                "metrics": metrics,
                "canaryStatus": canary_status(row),
                "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py" if row["promotion"] == "promote" else "python3 scripts/verify_cvpr_remediation_retest_harness.py",
            }
        )
    return rows


def summarize(data, rows):
    summary = {
        "demo": "cvpr-remediation-canary-monitor",
        "status": "watching",
        "sourceDemo": "cvpr-remediation-promotion-board",
        "rows": len(rows),
        "sourcePromotions": data["summary"]["rows"],
        "clean": len([row for row in rows if row["canaryStatus"] == "clean"]),
        "watch": len([row for row in rows if row["canaryStatus"] == "watch"]),
        "rollback": len([row for row in rows if row["canaryStatus"] == "rollback"]),
        "promotedRows": len([row for row in rows if row["promotion"] == "promote"]),
        "monitoredRows": len([row for row in rows if row["promotion"] == "monitor"]),
        "maxRollbackRisk": max(row["metrics"]["rollbackRisk"] for row in rows),
        "maxDrift": max(row["metrics"]["drift"] for row in rows),
        "themes": len({row["theme"] for row in rows}),
        "incidents": len({row["incidentId"] for row in rows}),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["rows"] == summary["sourcePromotions"] == 53
        and summary["promotedRows"] == len([row for row in rows if row["promotion"] == "promote"])
        and summary["monitoredRows"] == len([row for row in rows if row["promotion"] == "monitor"])
        and summary["clean"] == len([row for row in rows if row["canaryStatus"] == "clean"])
        and summary["watch"] == len([row for row in rows if row["canaryStatus"] == "watch"])
        and summary["rollback"] == 0
        and summary["maxRollbackRisk"] <= 36
        and summary["maxDrift"] <= 12
        and summary["themes"] == 8
        and summary["incidents"] == 7
    )
    summary["status"] = "watching" if gate else "alert"
    return summary


def build_package(promotion_rows, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const promotionRows = " + json.dumps(promotion_rows, indent=2) + ";\n"
        "export const canaryRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Canary Monitor\n\nPost-promotion canary monitor for patched gauntlet rows, tracking drift, rollback risk, traffic exposure, and response commands.\n")


def build_registry(promotion_rows, rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "canaryRows": rows,
                "promotionRows": promotion_rows,
                "sources": {"promotion": str(PROMOTION.relative_to(ROOT))},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Clean", summary["clean"]),
        ("Watch", summary["watch"]),
        ("Rollback", summary["rollback"]),
        ("Promoted", summary["promotedRows"]),
        ("Max risk", summary["maxRollbackRisk"]),
        ("Max drift", summary["maxDrift"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['page'])}">{esc(row['demoTitle'])}</a></td><td>{esc(row['incidentTitle'])}</td><td>{esc(row['promotion'])}</td><td>{row['metrics']['trafficPct']}%</td><td>{row['metrics']['drift']}</td><td>{row['metrics']['rollbackRisk']}</td><td class="{esc(row['canaryStatus'])}">{esc(row['canaryStatus'])}</td><td><code>{esc(row['responseCommand'])}</code></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Canary Monitor</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.clean{{color:var(--good);font-weight:700}}.watch{{color:var(--warn);font-weight:700}}.rollback,.alert{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · remediation canary</div><h1>Remediation Canary Monitor</h1><p>Track promoted and monitored remediation rows after launch with traffic exposure, drift, rollback risk, and response commands tied back to the retest and promotion gates.</p><nav><a href="index.html">all themes</a><a href="cvpr-remediation-promotion-board.html">promotion board</a><a href="cvpr-remediation-retest-harness.html">retest harness</a><a href="cvpr-post-launch-monitoring.html">post-launch monitoring</a><a href="analysis/cvpr_remediation_canary_monitor/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Canary Queue</h2><table><thead><tr><th>Demo</th><th>Incident</th><th>Promotion</th><th>Traffic</th><th>Drift</th><th>Rollback risk</th><th>Status</th><th>Response</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Monitoring Gate</h2><code>{esc(summary['fullStackCommand'])} · rollback count {summary['rollback']} · promote rows must stay clean · monitored rows must stay watch-only</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_canary_monitor.py · tested package under source-code/learning/cvpr-remediation-canary-monitor</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-canary-monitor.html", page)


def main():
    data = read_json(PROMOTION)
    rows = build_rows(data["promotionRows"])
    summary = summarize(data, rows)
    build_package(data["promotionRows"], rows, summary)
    build_registry(data["promotionRows"], rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-remediation-canary-monitor.html: {summary['clean']} clean, {summary['watch']} watch, status {summary['status']}")


if __name__ == "__main__":
    main()

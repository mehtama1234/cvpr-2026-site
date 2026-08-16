"""Build the CVPR remediation promotion board demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-promotion-board"
ANALYSIS = ROOT / "analysis/cvpr_remediation_promotion_board"

RETEST = ROOT / "analysis/cvpr_remediation_retest_harness/registry.json"

CORE = """export function promotionDecision(row) {
  if (row.afterDecision === "release" && row.after.risk <= 42 && row.after.evidence >= 60 && row.after.resilience >= 68) return "promote";
  if (row.afterDecision === "review" && row.after.risk <= 58 && row.after.evidence >= 58 && row.after.resilience >= 58) return "monitor";
  return "hold";
}

export function promotionReason(row) {
  const decision = promotionDecision(row);
  if (decision === "promote") return "release retest meets risk, evidence, and resilience promotion thresholds";
  if (decision === "monitor") return "block cleared or review improved, but still requires launch monitoring";
  return "post-retest metrics remain outside promotion thresholds";
}

export function buildPromotionRows(retestRows) {
  return retestRows.map((row) => ({
    id: `${row.id}/promotion`,
    retestId: row.id,
    demoId: row.demoId,
    demoTitle: row.demoTitle,
    theme: row.theme,
    page: row.page,
    incidentId: row.incidentId,
    incidentTitle: row.incidentTitle,
    priority: row.priority,
    beforeDecision: row.beforeDecision,
    afterDecision: row.afterDecision,
    after: row.after,
    clearedBlock: row.clearedBlock,
    promotedRelease: row.promotedRelease,
    promotion: promotionDecision(row),
    reason: promotionReason(row),
    verificationCommand: "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  }));
}

export function summarizePromotion(rows) {
  return {
    rows: rows.length,
    promote: rows.filter((row) => row.promotion === "promote").length,
    monitor: rows.filter((row) => row.promotion === "monitor").length,
    hold: rows.filter((row) => row.promotion === "hold").length,
    clearedBlocks: rows.filter((row) => row.clearedBlock).length,
    promotedRelease: rows.filter((row) => row.promotedRelease).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    incidents: new Set(rows.map((row) => row.incidentId)).size,
    maxPromotedRisk: Math.max(...rows.filter((row) => row.promotion === "promote").map((row) => row.after.risk)),
    minPromotedEvidence: Math.min(...rows.filter((row) => row.promotion === "promote").map((row) => row.after.evidence))
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { promotionRows, retestRows, summary } from "../src/fixtures.js";
import { buildPromotionRows, promotionDecision, promotionReason, summarizePromotion } from "../src/core.js";

const rows = buildPromotionRows(retestRows);
const promoted = rows.find((row) => row.promotion === "promote");
const monitored = rows.find((row) => row.promotion === "monitor");
assert.equal(rows.length, 29);
assert.equal(promotionDecision(retestRows.find((row) => row.id === promoted.retestId)), "promote");
assert.ok(promotionReason(retestRows.find((row) => row.id === monitored.retestId)).includes("monitoring"));
assert.equal(promotionRows.length, 29);

const derived = summarizePromotion(promotionRows);
assert.equal(summary.rows, 29);
assert.equal(summary.promote, 12);
assert.equal(summary.monitor, 17);
assert.equal(summary.hold, 0);
assert.equal(summary.clearedBlocks, 14);
assert.equal(summary.themes, 8);
assert.equal(summary.incidents, 4);
assert.equal(derived.promote, summary.promote);
assert.equal(summary.status, "release");
console.log("ok cvpr-remediation-promotion-board:", summary.promote, "promote", summary.monitor, "monitor");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def promotion_decision(row):
    if row["afterDecision"] == "release" and row["after"]["risk"] <= 42 and row["after"]["evidence"] >= 60 and row["after"]["resilience"] >= 68:
        return "promote"
    if row["afterDecision"] == "review" and row["after"]["risk"] <= 58 and row["after"]["evidence"] >= 58 and row["after"]["resilience"] >= 58:
        return "monitor"
    return "hold"


def promotion_reason(row):
    decision = promotion_decision(row)
    if decision == "promote":
        return "release retest meets risk, evidence, and resilience promotion thresholds"
    if decision == "monitor":
        return "block cleared or review improved, but still requires launch monitoring"
    return "post-retest metrics remain outside promotion thresholds"


def build_rows(retest_rows):
    rows = []
    for row in retest_rows:
        rows.append(
            {
                "id": f"{row['id']}/promotion",
                "retestId": row["id"],
                "demoId": row["demoId"],
                "demoTitle": row["demoTitle"],
                "theme": row["theme"],
                "page": row["page"],
                "incidentId": row["incidentId"],
                "incidentTitle": row["incidentTitle"],
                "priority": row["priority"],
                "beforeDecision": row["beforeDecision"],
                "afterDecision": row["afterDecision"],
                "after": row["after"],
                "clearedBlock": row["clearedBlock"],
                "promotedRelease": row["promotedRelease"],
                "promotion": promotion_decision(row),
                "reason": promotion_reason(row),
                "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
            }
        )
    return rows


def summarize(retest_data, rows):
    promoted = [row for row in rows if row["promotion"] == "promote"]
    summary = {
        "demo": "cvpr-remediation-promotion-board",
        "status": "release",
        "sourceDemo": "cvpr-remediation-retest-harness",
        "rows": len(rows),
        "sourceRetests": retest_data["summary"]["retestRows"],
        "promote": len(promoted),
        "monitor": len([row for row in rows if row["promotion"] == "monitor"]),
        "hold": len([row for row in rows if row["promotion"] == "hold"]),
        "clearedBlocks": len([row for row in rows if row["clearedBlock"]]),
        "promotedRelease": len([row for row in rows if row["promotedRelease"]]),
        "themes": len({row["theme"] for row in rows}),
        "incidents": len({row["incidentId"] for row in rows}),
        "maxPromotedRisk": max(row["after"]["risk"] for row in promoted),
        "minPromotedEvidence": min(row["after"]["evidence"] for row in promoted),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["rows"] == summary["sourceRetests"] == 29
        and summary["promote"] == 12
        and summary["monitor"] == 17
        and summary["hold"] == 0
        and summary["clearedBlocks"] == 14
        and summary["promotedRelease"] == 12
        and summary["themes"] == 8
        and summary["incidents"] == 4
        and summary["maxPromotedRisk"] <= 42
        and summary["minPromotedEvidence"] >= 60
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(retest_rows, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const retestRows = " + json.dumps(retest_rows, indent=2) + ";\n"
        "export const promotionRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Promotion Board\n\nClassifies remediation retest rows into promote, monitor, and hold decisions with conservative post-retest thresholds.\n")


def build_registry(retest_rows, rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "promotionRows": rows,
                "retestRows": retest_rows,
                "sources": {"retest": str(RETEST.relative_to(ROOT))},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Promote", summary["promote"]),
        ("Monitor", summary["monitor"]),
        ("Hold", summary["hold"]),
        ("Cleared", summary["clearedBlocks"]),
        ("Max risk", summary["maxPromotedRisk"]),
        ("Min evidence", summary["minPromotedEvidence"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['page'])}">{esc(row['demoTitle'])}</a></td><td>{esc(row['incidentTitle'])}</td><td>{esc(row['afterDecision'])}</td><td>{row['after']['risk']}</td><td>{row['after']['evidence']}</td><td>{row['after']['resilience']}</td><td class="{esc(row['promotion'])}">{esc(row['promotion'])}</td><td>{esc(row['reason'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Promotion Board</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:100ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1120px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.promote{{color:var(--good);font-weight:700}}.monitor{{color:var(--warn);font-weight:700}}.hold{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · remediation promotion</div><h1>Remediation Promotion Board</h1><p>Classify every remediation retest into promote, monitor, or hold decisions using the same risk, evidence, and resilience thresholds that govern the incident gauntlet release flow.</p><nav><a href="index.html">all themes</a><a href="cvpr-remediation-retest-harness.html">retest harness</a><a href="cvpr-gauntlet-remediation-sprint.html">remediation sprint</a><a href="cvpr-validation-center.html">validation center</a><a href="analysis/cvpr_remediation_promotion_board/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Promotion Queue</h2><table><thead><tr><th>Demo</th><th>Incident</th><th>Retest</th><th>Risk</th><th>Evidence</th><th>Resilience</th><th>Promotion</th><th>Reason</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · promote only post-release rows with risk <= 42, evidence >= 60, and resilience >= 68 · monitor all remaining cleared rows</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_promotion_board.py · tested package under source-code/learning/cvpr-remediation-promotion-board</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-promotion-board.html", page)


def main():
    data = read_json(RETEST)
    rows = build_rows(data["retestRows"])
    summary = summarize(data, rows)
    build_package(data["retestRows"], rows, summary)
    build_registry(data["retestRows"], rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-remediation-promotion-board.html: {summary['promote']} promote, {summary['monitor']} monitor, status {summary['status']}")


if __name__ == "__main__":
    main()

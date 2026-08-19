"""Build the CVPR repo harness live replacement receipt."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DELTA = ROOT / "analysis/cvpr_repo_harness_promotion_delta/registry.json"
CACHED = ROOT / "analysis/cvpr_repo_gpu_harness/cached_harness_results.json"
LIVE = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_replacement_receipt"
PROMOTED = ANALYSIS / "cvpr_repo_harness_results.promoted.json"
ROLLBACK = ANALYSIS / "cvpr_repo_harness_results.rollback.json"
BASE = ROOT / "source-code/learning/cvpr-repo-harness-replacement-receipt"

CORE = """export function receiptReady(row) {
  return row.beforeMode === "cached-harness-contract" &&
    row.afterMode === "live-colab" &&
    row.rollbackMode === "cached-harness-contract" &&
    row.repoMatch === true &&
    row.evidenceCarried === true &&
    row.promotionDecision === "promote";
}

export function summarizeReceipt(rows) {
  const readyRows = rows.filter(receiptReady).length;
  const summary = {
    receipt: "cvpr-repo-harness-replacement-receipt",
    jobs: rows.length,
    readyRows,
    promotedRows: rows.filter((row) => row.afterMode === "live-colab").length,
    rollbackRows: rows.filter((row) => row.rollbackMode === "cached-harness-contract").length,
    carriedEvidence: rows.filter((row) => row.evidenceCarried === true).length,
    promotedFromCached: rows.filter((row) => row.beforeMode !== row.afterMode).length
  };
  return { ...summary, status: summary.jobs === 40 && readyRows === 40 ? "ready" : "block" };
}
"""

TEST = """import assert from "node:assert/strict";
import { receiptRows, summary } from "../src/fixtures.js";
import { receiptReady, summarizeReceipt } from "../src/core.js";

assert.equal(receiptRows.length, 40);
assert.equal(receiptRows.every(receiptReady), true);
const derived = summarizeReceipt(receiptRows);
assert.equal(derived.status, "ready");
assert.equal(derived.promotedRows, 40);
assert.equal(derived.rollbackRows, 40);
assert.equal(derived.carriedEvidence, 40);
assert.equal(summary.status, "ready");
assert.equal(summary.promotedArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-repo-harness-replacement-receipt:", summary.jobs, "jobs");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def format_delta(value):
    value = float(value)
    if value.is_integer():
        return f"{value:+.0f}"
    return f"{value:+.1f}"


def build_promoted_results(live, delta_rows):
    delta_by_job = {row["jobId"]: row for row in delta_rows}
    promoted = []
    for live_row in live:
        delta = delta_by_job[live_row["jobId"]]
        promoted_row = dict(live_row)
        promoted_row["page"] = delta["page"]
        promoted_row["evidenceArtifact"] = live_row["artifacts"]["smokeJson"]
        promoted_row["promotion"] = {
            "receipt": "cvpr-repo-harness-replacement-receipt",
            "promotedFrom": delta["cachedMode"],
            "promotedTo": delta["liveMode"],
            "promotionDecision": delta["promotionDecision"],
            "sourceDelta": "analysis/cvpr_repo_harness_promotion_delta/registry.json",
            "rollbackArtifact": str(ROLLBACK.relative_to(ROOT)),
        }
        promoted.append(promoted_row)
    return promoted


def build_rollback_results(cached):
    return {
        "results": cached["results"],
        "rollback": {
            "receipt": "cvpr-repo-harness-replacement-receipt",
            "source": "analysis/cvpr_repo_gpu_harness/cached_harness_results.json",
            "restoresMode": "cached-harness-contract",
        },
    }


def build_rows(delta_rows, promoted, rollback):
    promoted_by_job = {row["jobId"]: row for row in promoted}
    rollback_by_job = {row["jobId"]: row for row in rollback["results"]}
    rows = []
    for delta in delta_rows:
        promoted_row = promoted_by_job[delta["jobId"]]
        rollback_row = rollback_by_job[delta["jobId"]]
        rows.append(
            {
                "jobId": delta["jobId"],
                "theme": delta["theme"],
                "wave": delta["wave"],
                "repo": delta["repo"],
                "repoMatch": promoted_row["repo"] == rollback_row["repo"] == delta["repo"],
                "page": delta["page"],
                "beforeMode": delta["cachedMode"],
                "afterMode": promoted_row["mode"],
                "rollbackMode": rollback_row["mode"],
                "beforeReadiness": delta["cachedReadiness"],
                "afterReadiness": promoted_row["metrics"]["readiness"],
                "rollbackReadiness": rollback_row["metrics"]["readiness"],
                "readinessDelta": promoted_row["metrics"]["readiness"] - rollback_row["metrics"]["readiness"],
                "promotionDecision": delta["promotionDecision"],
                "evidenceCarried": promoted_row["evidenceArtifact"] == delta["liveEvidenceArtifact"],
                "promotedEvidenceArtifact": promoted_row["evidenceArtifact"],
                "rollbackEvidenceArtifact": rollback_row["evidenceArtifact"],
                "validator": "scripts/validate_cvpr_repo_harness_results.py",
            }
        )
    return rows


def summarize(rows):
    ready = [
        row
        for row in rows
        if row["beforeMode"] == "cached-harness-contract"
        and row["afterMode"] == "live-colab"
        and row["rollbackMode"] == "cached-harness-contract"
        and row["repoMatch"] is True
        and row["evidenceCarried"] is True
        and row["promotionDecision"] == "promote"
    ]
    return {
        "receipt": "cvpr-repo-harness-replacement-receipt",
        "status": "ready" if len(rows) == 40 and len(ready) == 40 else "block",
        "jobs": len(rows),
        "readyRows": len(ready),
        "promotedRows": len([row for row in rows if row["afterMode"] == "live-colab"]),
        "rollbackRows": len([row for row in rows if row["rollbackMode"] == "cached-harness-contract"]),
        "carriedEvidence": len([row for row in rows if row["evidenceCarried"] is True]),
        "promotedFromCached": len([row for row in rows if row["beforeMode"] != row["afterMode"]]),
        "readinessChanged": len([row for row in rows if row["readinessDelta"] != 0]),
        "promotedArtifact": str(PROMOTED.relative_to(ROOT)),
        "rollbackArtifact": str(ROLLBACK.relative_to(ROOT)),
        "sourceDelta": "analysis/cvpr_repo_harness_promotion_delta/registry.json",
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const receiptRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness Replacement Receipt\n\nTransaction receipt for replacing cached repo harness contracts with validated live Colab Pro+ rows while preserving rollback state.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "receiptRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Jobs", summary["jobs"]),
        ("Promoted", summary["promotedRows"]),
        ("Rollback", summary["rollbackRows"]),
        ("Evidence", summary["carriedEvidence"]),
        ("Changed", summary["readinessChanged"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    row_html = ""
    for row in rows:
        row_html += f"""<tr><td><a href="{esc(row['page'])}">{esc(row['jobId'])}</a><span>{esc(row['theme'])} / wave {row['wave']}</span></td><td>{esc(row['beforeMode'])}<br><small>{row['beforeReadiness']}</small></td><td>{esc(row['afterMode'])}<br><small>{row['afterReadiness']}</small></td><td>{esc(row['rollbackMode'])}<br><small>{row['rollbackReadiness']}</small></td><td>{format_delta(row['readinessDelta'])}</td><td>{esc(row['promotedEvidenceArtifact'])}</td></tr>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness Replacement Receipt</title><style>:root{{--ink:#111719;--paper:#F7F6F0;--panel:#fff;--line:#DCDDD4;--muted:#5F6760;--accent:#256453;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:#1B211C;color:#F4F8F0;padding:42px 0 34px}}.bug,nav a,code,.stat span,td,th,small{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8D7BE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:110ch;color:#D4DDD2}}nav a{{color:#D7F0DF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,small{{font-size:11px;color:var(--muted)}}.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px;margin-bottom:24px;overflow:hidden}}.panel h2{{font-size:18px;margin:16px}}table{{width:100%;border-collapse:collapse}}th,td{{text-align:left;vertical-align:top;border-top:1px solid var(--line);padding:10px;font-size:12px}}th{{background:#EEF1EA;color:#334039}}td:first-child{{min-width:300px}}td span{{display:block;color:var(--muted);margin-top:3px}}code{{display:block;background:#EEF2ED;padding:9px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:980px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}.panel{{overflow-x:auto}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - repo harness replacement</div><h1>Repo Harness Replacement Receipt</h1><p>Transaction receipt for replacing <strong>cached-harness-contract</strong> rows with validated <strong>live-colab</strong> rows while preserving a rollback artifact for every repo job. The promoted result store remains validator-compatible as a plain result list.</p><nav><a href="index.html">all themes</a><a href="cvpr-repo-harness-promotion-delta.html">promotion delta</a><a href="cvpr-repo-harness-promotion-board.html">promotion board</a><a href="analysis/cvpr_repo_harness_replacement_receipt/registry.json">registry</a><a href="analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json">promoted results</a><a href="analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json">rollback</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Replacement Transaction</h2><table><thead><tr><th>Job</th><th>Before</th><th>After</th><th>Rollback</th><th>Delta</th><th>Promoted Evidence</th></tr></thead><tbody>{row_html}</tbody></table></section><section class="panel"><h2>Artifacts</h2><div style="padding:0 16px 16px"><code>promoted: {esc(summary['promotedArtifact'])}</code><code>rollback: {esc(summary['rollbackArtifact'])}</code><code>source delta: {esc(summary['sourceDelta'])}</code><code>gate: {esc(summary['validator'])} --results {esc(summary['promotedArtifact'])}</code></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_replacement_receipt.py - package: source-code/learning/cvpr-repo-harness-replacement-receipt</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-replacement-receipt.html", page)


def main():
    delta = read_json(DELTA)
    cached = read_json(CACHED)
    live = read_json(LIVE)
    promoted = build_promoted_results(live, delta["deltaRows"])
    rollback = build_rollback_results(cached)
    write(PROMOTED, json.dumps(promoted, indent=2) + "\n")
    write(ROLLBACK, json.dumps(rollback, indent=2) + "\n")
    rows = build_rows(delta["deltaRows"], promoted, rollback)
    summary = summarize(rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-repo-harness-replacement-receipt.html: {summary['jobs']} jobs, {summary['promotedRows']} promoted, status {summary['status']}")


if __name__ == "__main__":
    main()

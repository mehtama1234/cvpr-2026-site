"""Build the CVPR repo harness promotion delta ledger."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHED = ROOT / "analysis/cvpr_repo_gpu_harness/cached_harness_results.json"
LIVE = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json"
BOARD = ROOT / "analysis/cvpr_repo_harness_promotion_board/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_promotion_delta"
BASE = ROOT / "source-code/learning/cvpr-repo-harness-promotion-delta"

CORE = """export function deltaReady(row) {
  return row.cachedMode === "cached-harness-contract" &&
    row.liveMode === "live-colab" &&
    row.repoMatch === true &&
    row.replaceable === true &&
    row.liveSmokePassed === true &&
    row.promotionDecision === "promote";
}

export function summarizeDelta(rows) {
  const summary = {
    delta: "cvpr-repo-harness-promotion-delta",
    jobs: rows.length,
    readyRows: rows.filter(deltaReady).length,
    modeChanges: rows.filter((row) => row.cachedMode !== row.liveMode).length,
    replaceableContracts: rows.filter((row) => row.replaceable === true).length,
    readinessChanged: rows.filter((row) => row.readinessDelta !== 0).length,
    promoteRows: rows.filter((row) => row.promotionDecision === "promote").length,
    holdRows: rows.filter((row) => row.promotionDecision !== "promote").length
  };
  return { ...summary, status: summary.readyRows === 40 && summary.jobs === 40 ? "ready" : "block" };
}
"""

TEST = """import assert from "node:assert/strict";
import { deltaRows, summary } from "../src/fixtures.js";
import { deltaReady, summarizeDelta } from "../src/core.js";

assert.equal(deltaRows.length, 40);
assert.equal(deltaRows.every(deltaReady), true);
const derived = summarizeDelta(deltaRows);
assert.equal(derived.status, "ready");
assert.equal(derived.readyRows, 40);
assert.equal(derived.modeChanges, 40);
assert.equal(derived.replaceableContracts, 40);
assert.equal(derived.promoteRows, 40);
assert.equal(summary.status, "ready");
assert.equal(summary.validator, "scripts/validate_cvpr_repo_harness_results.py");
console.log("ok cvpr-repo-harness-promotion-delta:", summary.jobs, "jobs");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_wave_index(board):
    index = {}
    for row in board["promotionRows"]:
        for job_id in row["jobIds"]:
            index[job_id] = {
                "wave": row["wave"],
                "theme": row["theme"],
                "promotionDecision": row["decision"],
                "executionState": row["executionState"],
            }
    return index


def build_rows(cached, live, board):
    live_by_job = {row["jobId"]: row for row in live}
    wave_index = build_wave_index(board)
    rows = []
    for cached_row in cached["results"]:
        job_id = cached_row["jobId"]
        live_row = live_by_job[job_id]
        wave = wave_index[job_id]
        cached_readiness = cached_row["metrics"]["readiness"]
        live_readiness = live_row["metrics"]["readiness"]
        rows.append(
            {
                "jobId": job_id,
                "wave": wave["wave"],
                "theme": wave["theme"],
                "repo": cached_row["repo"],
                "repoMatch": cached_row["repo"] == live_row["repo"],
                "page": cached_row["page"],
                "cachedMode": cached_row["mode"],
                "liveMode": live_row["mode"],
                "cachedReadiness": cached_readiness,
                "liveReadiness": live_readiness,
                "readinessDelta": live_readiness - cached_readiness,
                "cachedHarnessScore": cached_row["metrics"]["harnessScore"],
                "liveSmokePassed": live_row["metrics"]["smokePassed"],
                "replaceable": cached_row["provenance"]["replaceWithLiveExport"],
                "cachedRuntime": cached_row["provenance"]["runtime"],
                "liveRuntime": live_row["provenance"]["runtime"],
                "liveAccelerator": live_row["provenance"]["accelerator"],
                "promotionDecision": wave["promotionDecision"],
                "executionState": wave["executionState"],
                "cachedEvidenceArtifact": cached_row["evidenceArtifact"],
                "liveEvidenceArtifact": live_row["artifacts"]["smokeJson"],
                "validator": "scripts/validate_cvpr_repo_harness_results.py",
            }
        )
    return rows


def summarize(rows, board):
    ready_rows = [
        row
        for row in rows
        if row["cachedMode"] == "cached-harness-contract"
        and row["liveMode"] == "live-colab"
        and row["repoMatch"] is True
        and row["replaceable"] is True
        and row["liveSmokePassed"] is True
        and row["promotionDecision"] == "promote"
    ]
    return {
        "delta": "cvpr-repo-harness-promotion-delta",
        "status": "ready" if len(rows) == 40 and len(ready_rows) == 40 else "block",
        "jobs": len(rows),
        "waves": board["summary"]["waves"],
        "liveRows": len(rows),
        "cachedRows": len(rows),
        "readyRows": len(ready_rows),
        "replaceableContracts": len([row for row in rows if row["replaceable"] is True]),
        "modeChanges": len([row for row in rows if row["cachedMode"] != row["liveMode"]]),
        "readinessChanged": len([row for row in rows if row["readinessDelta"] != 0]),
        "promoteWaves": board["summary"]["promote"],
        "holdWaves": board["summary"]["hold"],
        "promoteRows": len([row for row in rows if row["promotionDecision"] == "promote"]),
        "holdRows": len([row for row in rows if row["promotionDecision"] != "promote"]),
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "sourceBoard": "analysis/cvpr_repo_harness_promotion_board/registry.json",
        "cachedArtifact": "analysis/cvpr_repo_gpu_harness/cached_harness_results.json",
        "liveArtifact": "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const deltaRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness Promotion Delta\n\nPer-job delta ledger comparing cached repo harness contracts with validated live Colab Pro+ exports before replacement.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "deltaRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Jobs", summary["jobs"]),
        ("Ready rows", summary["readyRows"]),
        ("Mode changes", summary["modeChanges"]),
        ("Replaceable", summary["replaceableContracts"]),
        ("Readiness changed", summary["readinessChanged"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    row_html = ""
    for row in rows:
        row_html += f"""<tr><td><a href="{esc(row['page'])}">{esc(row['jobId'])}</a><span>{esc(row['theme'])} / wave {row['wave']}</span></td><td>{esc(row['cachedMode'])}<br><small>{row['cachedReadiness']}</small></td><td>{esc(row['liveMode'])}<br><small>{row['liveReadiness']}</small></td><td>{row['readinessDelta']:+d}</td><td>{esc(row['liveAccelerator'])}</td><td>{esc(row['promotionDecision'])}</td><td>{esc(row['liveEvidenceArtifact'])}</td></tr>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness Promotion Delta</title><style>:root{{--ink:#111719;--paper:#F7F7F2;--panel:#fff;--line:#D9DED5;--muted:#5E6764;--accent:#0E6B60;--good:#0D6B3F;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:#17201D;color:#F0F7F2;padding:42px 0 34px}}.bug,nav a,code,.stat span,td,th,small{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8C9}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:108ch;color:#CFD9D4}}nav a{{color:#CBEFE7;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,small{{font-size:11px;color:var(--muted)}}.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px;margin-bottom:24px;overflow:hidden}}.panel h2{{font-size:18px;margin:16px}}table{{width:100%;border-collapse:collapse}}th,td{{text-align:left;vertical-align:top;border-top:1px solid var(--line);padding:10px;font-size:12px}}th{{background:#EDF2ED;color:#31413B}}td:first-child{{min-width:300px}}td span{{display:block;color:var(--muted);margin-top:3px}}code{{display:block;background:#EEF2EF;padding:9px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:980px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}.panel{{overflow-x:auto}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - repo harness promotion delta</div><h1>Repo Harness Promotion Delta</h1><p>Per-job replacement ledger for moving from <strong>cached-harness-contract</strong> results to validated <strong>live-colab</strong> exports. Every row carries replaceWithLiveExport, live smoke status, readiness delta, promotion-board decision, and the validator needed before replacement.</p><nav><a href="index.html">all themes</a><a href="cvpr-repo-harness-promotion-board.html">promotion board</a><a href="cvpr-repo-harness-live-intake.html">live intake</a><a href="cvpr-repo-harness-execution-dashboard.html">execution</a><a href="analysis/cvpr_repo_harness_promotion_delta/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Replacement Rows</h2><table><thead><tr><th>Job</th><th>Cached</th><th>Live</th><th>Delta</th><th>GPU</th><th>Decision</th><th>Evidence</th></tr></thead><tbody>{row_html}</tbody></table></section><section class="panel"><h2>Gate</h2><div style="padding:0 16px 16px"><code>{esc(summary['validator'])} --results {esc(summary['liveArtifact'])}</code><code>source board: {esc(summary['sourceBoard'])}</code><code>replaceWithLiveExport: {summary['replaceableContracts']} / {summary['jobs']}</code></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_promotion_delta.py - package: source-code/learning/cvpr-repo-harness-promotion-delta</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-promotion-delta.html", page)


def main():
    rows = build_rows(read_json(CACHED), read_json(LIVE), read_json(BOARD))
    summary = summarize(rows, read_json(BOARD))
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-repo-harness-promotion-delta.html: {summary['jobs']} jobs, {summary['readyRows']} ready, status {summary['status']}")


if __name__ == "__main__":
    main()

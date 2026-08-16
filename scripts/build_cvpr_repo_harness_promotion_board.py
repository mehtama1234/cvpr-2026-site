"""Build the CVPR repo harness promotion board."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WAVES = ROOT / "analysis/cvpr_repo_harness_wave_planner/registry.json"
INTAKE = ROOT / "analysis/cvpr_repo_harness_live_intake/registry.json"
CACHED = ROOT / "analysis/cvpr_repo_gpu_harness/cached_harness_results.json"
LIVE = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json"
DASHBOARD = ROOT / "analysis/cvpr_repo_harness_execution_dashboard/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_promotion_board"
BASE = ROOT / "source-code/learning/cvpr-repo-harness-promotion-board"

CORE = """export function promoteDecision(row) {
  if (row.liveValid !== row.jobs) return "hold";
  if (row.cachedContracts !== row.jobs) return "repair-cache";
  if (row.intakeIssues !== 0) return "hold";
  return "promote";
}

export function boardGate(summary) {
  if (!summary) return "block";
  if (summary.waves !== 8) return "block";
  if (summary.jobs !== 40) return "block";
  if (summary.promote !== 8) return "block";
  if (summary.hold !== 0) return "block";
  return "ready";
}

export function summarizeBoard(rows) {
  const summary = {
    board: "cvpr-repo-harness-promotion-board",
    waves: rows.length,
    jobs: rows.reduce((sum, row) => sum + row.jobs, 0),
    promote: rows.filter((row) => promoteDecision(row) === "promote").length,
    hold: rows.filter((row) => promoteDecision(row) === "hold").length,
    repairCache: rows.filter((row) => promoteDecision(row) === "repair-cache").length
  };
  return { ...summary, status: boardGate(summary) };
}
"""

TEST = """import assert from "node:assert/strict";
import { promotionRows, summary } from "../src/fixtures.js";
import { boardGate, promoteDecision, summarizeBoard } from "../src/core.js";

assert.equal(promotionRows.length, 8);
assert.equal(promotionRows.every((row) => promoteDecision(row) === "promote"), true);
assert.equal(promotionRows.reduce((sum, row) => sum + row.jobs, 0), 40);
const derived = summarizeBoard(promotionRows);
assert.equal(derived.status, "ready");
assert.equal(boardGate(summary), "ready");
assert.equal(summary.promote, 8);
assert.equal(summary.hold, 0);
console.log("ok cvpr-repo-harness-promotion-board:", summary.waves, "waves");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_rows(waves, intake, cached, live, dashboard):
    live_by_job = {row["jobId"]: row for row in live}
    cached_by_job = {row["jobId"]: row for row in cached["results"]}
    rows = []
    for wave in waves["waves"]:
        job_ids = wave["jobIds"]
        live_valid = sum(1 for job_id in job_ids if live_by_job.get(job_id, {}).get("mode") == "live-colab" and live_by_job.get(job_id, {}).get("metrics", {}).get("smokePassed") is True)
        cached_contracts = sum(1 for job_id in job_ids if cached_by_job.get(job_id, {}).get("mode") == "cached-harness-contract" and cached_by_job.get(job_id, {}).get("provenance", {}).get("replaceWithLiveExport") is True)
        row = {
            "wave": wave["wave"],
            "theme": wave["theme"],
            "jobs": wave["jobs"],
            "jobIds": job_ids,
            "liveValid": live_valid,
            "cachedContracts": cached_contracts,
            "intakeIssues": intake["summary"]["issues"],
            "executionState": dashboard["executionRows"][wave["wave"]]["state"],
            "promotionCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results {intake['summary']['incomingArtifact']}",
        }
        row["decision"] = "promote" if live_valid == wave["jobs"] and cached_contracts == wave["jobs"] and row["intakeIssues"] == 0 else "hold"
        rows.append(row)
    return rows


def summarize(rows):
    return {
        "board": "cvpr-repo-harness-promotion-board",
        "status": "ready" if len(rows) == 8 and all(row["decision"] == "promote" for row in rows) else "block",
        "waves": len(rows),
        "jobs": sum(row["jobs"] for row in rows),
        "promote": len([row for row in rows if row["decision"] == "promote"]),
        "hold": len([row for row in rows if row["decision"] == "hold"]),
        "liveValid": sum(row["liveValid"] for row in rows),
        "cachedContracts": sum(row["cachedContracts"] for row in rows),
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const promotionRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness Promotion Board\n\nPromotion decisions for repo harness live exports replacing cached contracts.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "promotionRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [("Status", summary["status"]), ("Waves", summary["waves"]), ("Jobs", summary["jobs"]), ("Promote", summary["promote"]), ("Hold", summary["hold"]), ("Live valid", summary["liveValid"])]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    row_html = ""
    for row in rows:
        jobs = "".join(f"<li>{esc(job)}</li>" for job in row["jobIds"])
        row_html += f"""<article class="wave"><div class="meta">wave {row['wave']} / {esc(row['decision'])}</div><h2>{esc(row['theme'])}</h2><p>{row['liveValid']} live-valid, {row['cachedContracts']} cached contracts, state {esc(row['executionState'])}</p><code>{esc(row['promotionCommand'])}</code><ul>{jobs}</ul></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness Promotion Board</title><style>:root{{--ink:#111719;--paper:#F6F7F3;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0F6672;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:#162126;color:#EFF7F2;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#93D6D8}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#CBD7D2}}nav a{{color:#C9EEF0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.wave{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px}}.wave{{padding:16px}}.wave h2{{font-size:20px;margin:4px 0 8px}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:6px 0}}li{{font-size:12px;margin:4px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - repo harness promotion</div><h1>Repo Harness Promotion Board</h1><p>Promotion decisions for replacing cached repo-harness contracts with validated live Colab Pro+ smoke-test exports.</p><nav><a href="cvpr-repo-harness-execution-dashboard.html">execution</a><a href="cvpr-repo-harness-live-intake.html">intake</a><a href="cvpr-repo-harness-handoff-package.html">handoff</a><a href="analysis/cvpr_repo_harness_promotion_board/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{row_html}</section></main><footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_promotion_board.py - package: source-code/learning/cvpr-repo-harness-promotion-board</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-promotion-board.html", page)


def main():
    rows = build_rows(read_json(WAVES), read_json(INTAKE), read_json(CACHED), read_json(LIVE), read_json(DASHBOARD))
    summary = summarize(rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-repo-harness-promotion-board.html: {summary['waves']} waves, {summary['promote']} promote, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR interactive demo expansion backlog."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
WORKBENCH = ROOT / "analysis/cvpr_interactive_demo_workbench/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_expansion_backlog"
BASE = ROOT / "source-code/learning/cvpr-interactive-expansion-backlog"

CORE = """export function backlogReady(row) {
  return row.status === "queued" &&
    row.requiredControls.length === 5 &&
    row.requiredArtifacts.length === 3 &&
    row.promotedEvidence.mode === "live-colab" &&
    row.promotedEvidence.metrics.smokePassed === true &&
    row.replayCommand.includes(row.jobId);
}

export function backlogGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "backlog-ready") return "block";
  if (summary.remainingRepos !== 32) return "block";
  if (summary.coveredRepos !== 8) return "block";
  if (summary.totalPromotedRepos !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.queuedRows !== 32) return "block";
  if (summary.requiredControls !== 160) return "block";
  if (summary.requiredArtifacts !== 96) return "block";
  if (summary.holdRows !== 0) return "block";
  return "backlog-ready";
}

export function summarizeBacklog(rows, coveredRepos, totalPromotedRepos) {
  return {
    remainingRepos: rows.length,
    coveredRepos,
    totalPromotedRepos,
    themes: new Set(rows.map((row) => row.theme)).size,
    queuedRows: rows.filter(backlogReady).length,
    requiredControls: rows.reduce((sum, row) => sum + row.requiredControls.length, 0),
    requiredArtifacts: rows.reduce((sum, row) => sum + row.requiredArtifacts.length, 0),
    holdRows: rows.filter((row) => !backlogReady(row)).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { backlogRows, summary } from "../src/fixtures.js";
import { backlogGate, backlogReady, summarizeBacklog } from "../src/core.js";

assert.equal(backlogRows.length, 32);
assert.equal(new Set(backlogRows.map((row) => row.theme)).size, 8);
assert.equal(backlogRows.every(backlogReady), true);
assert.equal(backlogRows.every((row) => row.requiredControls.length === 5), true);
assert.equal(backlogRows.every((row) => row.requiredArtifacts.length === 3), true);
const derived = summarizeBacklog(backlogRows, summary.coveredRepos, summary.totalPromotedRepos);
assert.equal(derived.remainingRepos, summary.remainingRepos);
assert.equal(derived.requiredArtifacts, summary.requiredArtifacts);
assert.equal(backlogGate(summary), "backlog-ready");
console.log("ok cvpr-interactive-expansion-backlog:", summary.remainingRepos, "remaining repos");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def repo_name(repo):
    return repo.rstrip("/").split("/")[-1]


def theme_from_job(job_id):
    return job_id.split("-")[0]


def build_rows(promoted, workbench):
    covered = {row["jobId"] for row in workbench["workbenchRows"]}
    rows = []
    for result in promoted:
        if result["jobId"] in covered:
            continue
        theme = theme_from_job(result["jobId"])
        repo = repo_name(result["repo"])
        row = {
            "backlogId": f"expand-{result['jobId']}",
            "jobId": result["jobId"],
            "theme": theme,
            "repo": repo,
            "repoUrl": result["repo"],
            "sourcePage": result["page"],
            "status": "queued",
            "wave": f"{theme}-interactive-expansion",
            "requiredControls": ["input", "output", "failure", "artifacts", "replay"],
            "requiredArtifacts": [
                result["artifacts"]["smokeJson"],
                result["artifacts"]["log"],
                result["artifacts"]["repoSnapshot"],
            ],
            "panelContract": {
                "input": f"Build selectable cached input fixture for {repo}.",
                "output": f"Render cached output summary for {repo}.",
                "failure": f"Attach failure probe from {theme} theme surface.",
                "artifacts": "Rehydrate smoke JSON, run log, and repo snapshot.",
                "replay": "Bind promoted-results validator command.",
            },
            "promotedEvidence": result,
            "replayCommand": f"python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json --job {result['jobId']}",
            "promotionGate": "local artifacts + runtime controller + panel smoke + full-stack validation",
        }
        rows.append(row)
    return rows


def summarize(rows, promoted, workbench):
    summary = {
        "backlog": "cvpr-interactive-expansion-backlog",
        "status": "backlog-ready",
        "sourcePromotedResults": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
        "sourceWorkbench": "analysis/cvpr_interactive_demo_workbench/registry.json",
        "totalPromotedRepos": len(promoted),
        "coveredRepos": len(workbench["workbenchRows"]),
        "remainingRepos": len(rows),
        "themes": len({row["theme"] for row in rows}),
        "queuedRows": len([row for row in rows if row["status"] == "queued"]),
        "requiredControls": sum(len(row["requiredControls"]) for row in rows),
        "requiredArtifacts": sum(len(row["requiredArtifacts"]) for row in rows),
        "holdRows": len([row for row in rows if row["status"] != "queued"]),
        "validator": "scripts/verify_cvpr_interactive_expansion_backlog.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["totalPromotedRepos"] == 40
        and summary["coveredRepos"] == 8
        and summary["remainingRepos"] == 32
        and summary["themes"] == 8
        and summary["queuedRows"] == 32
        and summary["requiredControls"] == 160
        and summary["requiredArtifacts"] == 96
        and summary["holdRows"] == 0
    )
    summary["status"] = "backlog-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const backlogRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Expansion Backlog\n\nBacklog for converting the 32 promoted CVPR repos not yet in the interactive workbench into local-artifact-backed interactive demos.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "backlogRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Remaining", summary["remainingRepos"]),
        ("Covered", summary["coveredRepos"]),
        ("Themes", summary["themes"]),
        ("Controls", summary["requiredControls"]),
        ("Artifacts", summary["requiredArtifacts"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    table = ""
    for row in rows:
        table += f"""<tr><td>{esc(row['theme'])}</td><td>{esc(row['repo'])}</td><td>{esc(row['status'])}</td><td>{esc(row['wave'])}</td><td>{esc(row['sourcePage'])}</td><td>{esc(row['promotionGate'])}</td></tr>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Expansion Backlog</title><style>:root{{--ink:#111719;--paper:#F5F6F2;--panel:#fff;--line:#D8DEDA;--muted:#5C6664;--accent:#255D68;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#142326;color:#F2F7F6;padding:42px 0 34px}}.bug,nav a,code,.stat span,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D7}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CBDAD8}}nav a{{color:#D7F1EE;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.surface{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.surface{{padding:16px;margin-bottom:20px;overflow-x:auto}}table{{width:100%;border-collapse:collapse}}td,th{{border-top:1px solid var(--line);padding:8px;text-align:left;font-size:12px;vertical-align:top}}code{{display:block;background:#EDF2F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive expansion</div><h1>Interactive Expansion Backlog</h1><p>Concrete queue for converting the remaining 32 promoted repos into local-artifact-backed interactive demos.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-demo-workbench.html">interactive workbench</a><a href="analysis/cvpr_interactive_expansion_backlog/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="surface"><table><thead><tr><th>theme</th><th>repo</th><th>status</th><th>wave</th><th>source page</th><th>gate</th></tr></thead><tbody>{table}</tbody></table></section><section class="surface"><h2>Backlog Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_expansion_backlog.py - package: source-code/learning/cvpr-interactive-expansion-backlog</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-expansion-backlog.html", page)


def main():
    promoted = read_json(PROMOTED)
    workbench = read_json(WORKBENCH)
    rows = build_rows(promoted, workbench)
    summary = summarize(rows, promoted, workbench)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-expansion-backlog.html: {summary['remainingRepos']} remaining repos, status {summary['status']}")


if __name__ == "__main__":
    main()

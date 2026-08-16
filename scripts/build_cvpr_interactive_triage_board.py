"""Build the CVPR interactive scenario triage board."""
import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "analysis/cvpr_interactive_scenario_runner/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_triage_board"
BASE = ROOT / "source-code/learning/cvpr-interactive-triage-board"

CORE = """export function decisionReady(row) {
  return row.decision === "promote" &&
    row.caseCount === 3 &&
    row.passCount === 3 &&
    row.blockCount === 0 &&
    row.risks.length === 3 &&
    row.localArtifacts === 3 &&
    row.controls === 5 &&
    row.replayCommand.includes(row.jobId);
}

export function summarizeDecisions(rows) {
  return {
    decisions: rows.length,
    demos: new Set(rows.map((row) => row.jobId)).size,
    themes: new Set(rows.map((row) => row.theme)).size,
    waves: new Set(rows.map((row) => row.wave)).size,
    promote: rows.filter((row) => row.decision === "promote").length,
    monitor: rows.filter((row) => row.decision === "monitor").length,
    retest: rows.filter((row) => row.decision === "retest").length,
    passingCases: rows.reduce((sum, row) => sum + row.passCount, 0),
    blockedCases: rows.reduce((sum, row) => sum + row.blockCount, 0)
  };
}

export function filterDecisions(rows, filters = {}) {
  const decision = filters.decision || "all";
  const theme = filters.theme || "all";
  return rows.filter((row) =>
    (decision === "all" || row.decision === decision) &&
    (theme === "all" || row.theme === theme)
  );
}

export function triageGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "triage-ready") return "block";
  if (summary.sourceCases !== 120) return "block";
  if (summary.decisions !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.waves !== 5) return "block";
  if (summary.promote !== 40) return "block";
  if (summary.monitor !== 0) return "block";
  if (summary.retest !== 0) return "block";
  if (summary.passingCases !== 120) return "block";
  if (summary.blockedCases !== 0) return "block";
  return "triage-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { decisionRows, summary } from "../src/fixtures.js";
import { decisionReady, filterDecisions, summarizeDecisions, triageGate } from "../src/core.js";

assert.equal(decisionRows.length, 40);
assert.equal(decisionRows.every(decisionReady), true);
assert.equal(filterDecisions(decisionRows, { decision: "promote" }).length, 40);
assert.equal(filterDecisions(decisionRows, { theme: "frontier" }).length, 5);
const derived = summarizeDecisions(decisionRows);
assert.equal(derived.decisions, summary.decisions);
assert.equal(derived.passingCases, summary.passingCases);
assert.equal(derived.blockedCases, 0);
assert.equal(triageGate(summary), "triage-ready");
console.log("ok cvpr-interactive-triage-board:", summary.decisions, "decisions");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_source():
    return json.loads(SOURCE.read_text(encoding="utf-8"))


def decide(cases):
    block_count = len([case for case in cases if case["status"] != "pass"])
    if block_count:
        return "retest"
    if len(cases) < 3:
        return "monitor"
    return "promote"


def build_decision_rows(cases):
    by_job = defaultdict(list)
    for case in cases:
        by_job[case["jobId"]].append(case)
    rows = []
    for job_id, group in sorted(by_job.items(), key=lambda item: (item[1][0]["theme"], item[1][0]["wave"], item[0])):
        first = group[0]
        rows.append({
            "jobId": job_id,
            "theme": first["theme"],
            "wave": first["wave"],
            "repo": first["repo"],
            "page": first["page"],
            "wavePage": first["wavePage"],
            "sourceRegistry": first["sourceRegistry"],
            "decision": decide(group),
            "caseCount": len(group),
            "passCount": len([case for case in group if case["status"] == "pass"]),
            "blockCount": len([case for case in group if case["status"] != "pass"]),
            "risks": sorted({case["risk"] for case in group}),
            "scenarios": sorted({case["scenario"] for case in group}),
            "localArtifacts": first["localArtifacts"],
            "controls": first["controls"],
            "artifactPaths": first["artifactPaths"],
            "replayCommand": first["replayCommand"],
            "action": "ship-interactive-demo" if decide(group) == "promote" else "open-retest-ticket",
        })
    return rows


def summarize(rows, source_summary):
    summary = {
        "board": "cvpr-interactive-triage-board",
        "status": "triage-ready",
        "sourceRunner": "analysis/cvpr_interactive_scenario_runner/registry.json",
        "sourceCases": source_summary["cases"],
        "decisions": len(rows),
        "themes": len({row["theme"] for row in rows}),
        "waves": len({row["wave"] for row in rows}),
        "promote": len([row for row in rows if row["decision"] == "promote"]),
        "monitor": len([row for row in rows if row["decision"] == "monitor"]),
        "retest": len([row for row in rows if row["decision"] == "retest"]),
        "passingCases": sum(row["passCount"] for row in rows),
        "blockedCases": sum(row["blockCount"] for row in rows),
        "riskTypes": len({risk for row in rows for risk in row["risks"]}),
        "validator": "scripts/verify_cvpr_interactive_triage_board.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["sourceCases"] == 120
        and summary["decisions"] == 40
        and summary["themes"] == 8
        and summary["waves"] == 5
        and summary["promote"] == 40
        and summary["monitor"] == 0
        and summary["retest"] == 0
        and summary["passingCases"] == 120
        and summary["blockedCases"] == 0
        and summary["riskTypes"] == 3
    )
    summary["status"] = "triage-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const decisionRows = "
        + json.dumps(rows, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Interactive Triage Board\n\nAggregates 120 interactive scenario cases into 40 repo-level release decisions across promote, monitor, and retest queues.\n",
    )


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "decisionRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Decisions", summary["decisions"]),
        ("Promote", summary["promote"]),
        ("Monitor", summary["monitor"]),
        ("Retest", summary["retest"]),
        ("Cases", summary["passingCases"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    table_rows = ""
    for row in rows:
        risks = ", ".join(row["risks"])
        table_rows += (
            "<tr>"
            f"<td>{esc(row['decision'])}<span>{esc(row['action'])}</span></td>"
            f"<td>{esc(row['theme'])}<span>{esc(row['wave'])}</span></td>"
            f"<td>{esc(row['repo'])}<span>{esc(row['jobId'])}</span></td>"
            f"<td>{esc(row['passCount'])}/{esc(row['caseCount'])}<span>{esc(risks)}</span></td>"
            f"<td>{esc(row['localArtifacts'])} artifacts / {esc(row['controls'])} controls</td>"
            f"<td><a href=\"{esc(row['page'])}\">source</a> <a href=\"{esc(row['wavePage'])}\">wave</a></td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Triage Board</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1380px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:900px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - scenario triage</div><h1>Interactive Triage Board</h1><p>Aggregates the 120 scenario-runner cases into repo-level release decisions across promote, monitor, and retest queues.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-scenario-runner.html">scenario runner</a><a href="analysis/cvpr_interactive_triage_board/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Triage Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>source: {esc(summary['sourceRunner'])}</code></section><section class="panel"><h2>Release Decisions</h2><div class="table-wrap"><table><thead><tr><th>Decision</th><th>Theme / Wave</th><th>Repo</th><th>Cases / Risks</th><th>Evidence</th><th>Links</th></tr></thead><tbody>{table_rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_triage_board.py - package: source-code/learning/cvpr-interactive-triage-board</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-triage-board.html", page)


def main():
    source = read_source()
    rows = build_decision_rows(source["runnerCases"])
    summary = summarize(rows, source["summary"])
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-triage-board.html: {summary['decisions']} decisions, status {summary['status']}")


if __name__ == "__main__":
    main()

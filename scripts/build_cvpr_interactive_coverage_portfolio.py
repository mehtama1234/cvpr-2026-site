"""Build the consolidated CVPR interactive coverage portfolio."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_interactive_coverage_portfolio"
BASE = ROOT / "source-code/learning/cvpr-interactive-coverage-portfolio"

WAVE_SOURCES = [
    {
        "wave": "first",
        "registry": ROOT / "analysis/cvpr_interactive_demo_workbench/registry.json",
        "rowsKey": "workbenchRows",
        "wavePage": "cvpr-interactive-demo-workbench.html",
    },
    {
        "wave": "second",
        "registry": ROOT / "analysis/cvpr_interactive_second_wave/registry.json",
        "rowsKey": "waveRows",
        "wavePage": "cvpr-interactive-second-wave.html",
    },
    {
        "wave": "third",
        "registry": ROOT / "analysis/cvpr_interactive_third_wave/registry.json",
        "rowsKey": "waveRows",
        "wavePage": "cvpr-interactive-third-wave.html",
    },
    {
        "wave": "fourth",
        "registry": ROOT / "analysis/cvpr_interactive_fourth_wave/registry.json",
        "rowsKey": "waveRows",
        "wavePage": "cvpr-interactive-fourth-wave.html",
    },
    {
        "wave": "fifth",
        "registry": ROOT / "analysis/cvpr_interactive_fifth_wave/registry.json",
        "rowsKey": "waveRows",
        "wavePage": "cvpr-interactive-fifth-wave.html",
    },
]

CORE = """export function rowReady(row) {
  return row.status === "interactive-ready" &&
    row.controls === 5 &&
    row.localArtifacts === 3 &&
    row.runtimeController === true &&
    row.releaseAction === "promote-interactive-demo" &&
    row.replayCommand.includes(row.jobId);
}

export function portfolioGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "coverage-ready") return "block";
  if (summary.portfolio !== "cvpr-interactive-coverage-portfolio") return "block";
  if (summary.totalDemos !== 40) return "block";
  if (summary.waves !== 5) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.localArtifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.runtimeControllers !== 40) return "block";
  if (summary.promoteInteractive !== 40) return "block";
  if (summary.holdInteractive !== 0) return "block";
  if (summary.duplicateJobs !== 0) return "block";
  return "coverage-ready";
}

export function summarizePortfolio(rows) {
  return {
    totalDemos: rows.length,
    waves: new Set(rows.map((row) => row.wave)).size,
    themes: new Set(rows.map((row) => row.theme)).size,
    localArtifacts: rows.reduce((sum, row) => sum + row.localArtifacts, 0),
    controls: rows.reduce((sum, row) => sum + row.controls, 0),
    runtimeControllers: rows.filter((row) => row.runtimeController).length,
    promoteInteractive: rows.filter((row) => row.releaseAction === "promote-interactive-demo").length,
    holdInteractive: rows.filter((row) => row.releaseAction === "hold-interactive-demo").length,
    duplicateJobs: rows.length - new Set(rows.map((row) => row.jobId)).size
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { portfolioRows, summary } from "../src/fixtures.js";
import { portfolioGate, rowReady, summarizePortfolio } from "../src/core.js";

assert.equal(portfolioRows.length, 40);
assert.equal(new Set(portfolioRows.map((row) => row.theme)).size, 8);
assert.equal(new Set(portfolioRows.map((row) => row.wave)).size, 5);
assert.equal(portfolioRows.every(rowReady), true);
assert.equal(portfolioRows.every((row) => row.localArtifacts === 3), true);
assert.equal(portfolioRows.every((row) => row.controls === 5), true);
const derived = summarizePortfolio(portfolioRows);
assert.equal(derived.totalDemos, summary.totalDemos);
assert.equal(derived.localArtifacts, summary.localArtifacts);
assert.equal(derived.controls, summary.controls);
assert.equal(derived.runtimeControllers, summary.runtimeControllers);
assert.equal(derived.duplicateJobs, 0);
assert.equal(portfolioGate(summary), "coverage-ready");
console.log("ok cvpr-interactive-coverage-portfolio:", summary.totalDemos, "demos");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def local_artifacts(row):
    if "localArtifacts" in row:
        return row["localArtifacts"]
    return row.get("artifactDiff", {}).get("localArtifacts", 0)


def artifact_paths(row):
    if "artifacts" in row:
        return [artifact["path"] for artifact in row["artifacts"]]
    return row.get("artifactDiff", {}).get("paths", [])


def row_page(row):
    return row.get("sourcePage") or row.get("page") or ""


def normalize_row(row, source):
    controls = row.get("controls", [])
    return {
        "wave": source["wave"],
        "jobId": row["jobId"],
        "theme": row["theme"],
        "repo": row["repo"],
        "page": row_page(row),
        "wavePage": source["wavePage"],
        "status": row["status"] if "status" in row else "interactive-ready",
        "controls": len(controls),
        "localArtifacts": local_artifacts(row),
        "artifactPaths": artifact_paths(row),
        "runtimeController": row["runtimeState"]["activeDemo"] == row["demoId"],
        "releaseAction": row["releaseAction"],
        "replayCommand": row["replayCommand"],
        "sourceRegistry": str(source["registry"].relative_to(ROOT)),
    }


def build_rows():
    rows = []
    for source in WAVE_SOURCES:
        data = read_json(source["registry"])
        rows.extend(normalize_row(row, source) for row in data[source["rowsKey"]])
    return rows


def summarize(rows):
    duplicate_jobs = len(rows) - len({row["jobId"] for row in rows})
    summary = {
        "portfolio": "cvpr-interactive-coverage-portfolio",
        "status": "coverage-ready",
        "waves": len({row["wave"] for row in rows}),
        "totalDemos": len(rows),
        "themes": len({row["theme"] for row in rows}),
        "localArtifacts": sum(row["localArtifacts"] for row in rows),
        "controls": sum(row["controls"] for row in rows),
        "runtimeControllers": len([row for row in rows if row["runtimeController"]]),
        "promoteInteractive": len([row for row in rows if row["releaseAction"] == "promote-interactive-demo"]),
        "holdInteractive": len([row for row in rows if row["releaseAction"] != "promote-interactive-demo"]),
        "duplicateJobs": duplicate_jobs,
        "sourceRegistries": len({row["sourceRegistry"] for row in rows}),
        "validator": "scripts/verify_cvpr_interactive_coverage_portfolio.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["waves"] == 5
        and summary["totalDemos"] == 40
        and summary["themes"] == 8
        and summary["localArtifacts"] == 120
        and summary["controls"] == 200
        and summary["runtimeControllers"] == 40
        and summary["promoteInteractive"] == 40
        and summary["holdInteractive"] == 0
        and summary["duplicateJobs"] == 0
        and summary["sourceRegistries"] == 5
    )
    summary["status"] = "coverage-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const portfolioRows = "
        + json.dumps(rows, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Interactive Coverage Portfolio\n\nConsolidated gate across the original workbench and waves two through five: 40 interactive demos, 8 themes, 120 local artifacts, 200 controls, and zero holds.\n",
    )


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "portfolioRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Demos", summary["totalDemos"]),
        ("Waves", summary["waves"]),
        ("Artifacts", summary["localArtifacts"]),
        ("Controls", summary["controls"]),
        ("Holds", summary["holdInteractive"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    body_rows = ""
    for row in rows:
        body_rows += (
            "<tr>"
            f"<td>{esc(row['wave'])}</td>"
            f"<td>{esc(row['theme'])}</td>"
            f"<td class=\"repo\">{esc(row['repo'])}<span>{esc(row['jobId'])}</span></td>"
            f"<td>{esc(row['status'])}</td>"
            f"<td>{esc(row['localArtifacts'])} / {esc(row['controls'])}</td>"
            f"<td><a href=\"{esc(row['wavePage'])}\">wave</a> <a href=\"{esc(row['page'])}\">source</a></td>"
            "</tr>"
        )
    registries = "".join(
        f"<li><a href=\"{esc(source['registry'].relative_to(ROOT))}\">{esc(source['registry'].relative_to(ROOT))}</a></li>"
        for source in WAVE_SOURCES
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Coverage Portfolio</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#24606B;--accent2:#496F45;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:42px 0 34px}}.bug,nav a,.stat span,td,th,code,li{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:24px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:21px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:860px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td.repo{{font-family:var(--sans);font-weight:700}}td.repo span{{display:block;font-family:var(--mono);font-weight:400;color:var(--muted);font-size:10px;margin-top:2px}}td a{{margin-right:8px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}ul{{margin:8px 0 0;padding-left:18px}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - all interactive waves</div><h1>Interactive Coverage Portfolio</h1><p>One coverage gate across the original workbench and waves two through five: every promoted repo is now represented as a local-artifact-backed interactive demo state.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-demo-workbench.html">workbench</a><a href="cvpr-interactive-fifth-wave.html">fifth wave</a><a href="analysis/cvpr_interactive_coverage_portfolio/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Coverage Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><ul>{registries}</ul></section><section class="panel"><h2>Demo Coverage</h2><div class="table-wrap"><table><thead><tr><th>Wave</th><th>Theme</th><th>Repo</th><th>Status</th><th>Artifacts / Controls</th><th>Source</th></tr></thead><tbody>{body_rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_coverage_portfolio.py - package: source-code/learning/cvpr-interactive-coverage-portfolio</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-coverage-portfolio.html", page)


def main():
    rows = build_rows()
    summary = summarize(rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-coverage-portfolio.html: {summary['totalDemos']} demos, status {summary['status']}")


if __name__ == "__main__":
    main()

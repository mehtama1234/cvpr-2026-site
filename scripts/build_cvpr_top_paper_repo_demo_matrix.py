"""Build the CVPR top paper repo demo matrix."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FORGE = ROOT / "analysis/cvpr_paper_repo_demo_forge/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
COVERAGE = ROOT / "analysis/cvpr_interactive_coverage_portfolio/registry.json"
DEEP = ROOT / "analysis/cvpr_deep_viewer_portfolio/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_top_paper_repo_demo_matrix"
BASE = ROOT / "source-code/learning/cvpr-top-paper-repo-demo-matrix"

THEME_ALIASES = {"emerging": "frontier", "threed": "threed"}

CORE = """export function matrixRowReady(row) {
  return row.status === "demo-linked" &&
    row.promotedEvidence === true &&
    row.interactiveReady === true &&
    row.artifactCount === 3 &&
    row.controls === 5 &&
    row.subthemes.length >= 5;
}

export function summarizeMatrix(rows) {
  const themes = new Set(rows.map((row) => row.theme)).size;
  const deepViewers = rows.filter((row) => row.deepViewerReady).length;
  return {
    rows: rows.length,
    themes,
    readyRows: rows.filter(matrixRowReady).length,
    promotedEvidence: rows.filter((row) => row.promotedEvidence).length,
    interactiveReady: rows.filter((row) => row.interactiveReady).length,
    deepViewers,
    artifacts: rows.reduce((sum, row) => sum + row.artifactCount, 0),
    controls: rows.reduce((sum, row) => sum + row.controls, 0)
  };
}

export function matrixGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "matrix-ready") return "block";
  if (summary.topPaperRepos !== 40) return "block";
  if (summary.readyRows !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.promotedEvidenceRows !== 40) return "block";
  if (summary.interactiveRows !== 40) return "block";
  if (summary.deepViewerRows !== 8) return "block";
  if (summary.artifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.holds !== 0) return "block";
  return "matrix-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { matrixRows, summary } from "../src/fixtures.js";
import { matrixGate, matrixRowReady, summarizeMatrix } from "../src/core.js";

assert.equal(matrixRows.length, 40);
assert.equal(matrixRows.every(matrixRowReady), true);
const derived = summarizeMatrix(matrixRows);
assert.equal(derived.themes, 8);
assert.equal(derived.readyRows, summary.readyRows);
assert.equal(derived.promotedEvidence, summary.promotedEvidenceRows);
assert.equal(derived.interactiveReady, summary.interactiveRows);
assert.equal(derived.deepViewers, summary.deepViewerRows);
assert.equal(derived.artifacts, 120);
assert.equal(derived.controls, 200);
assert.equal(summary.holds, 0);
assert.equal(matrixGate(summary), "matrix-ready");
console.log("ok cvpr-top-paper-repo-demo-matrix:", summary.topPaperRepos, "repos");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def repo_name(repo_url):
    return repo_url.rstrip("/").split("/")[-1]


def normalized_theme(theme):
    return THEME_ALIASES.get(theme, theme)


def build_rows(forge, promoted, coverage, deep):
    promoted_by_repo = {row["repo"].lower(): row for row in promoted}
    coverage_by_job = {row["jobId"]: row for row in coverage["portfolioRows"]}
    deep_by_job = {row["jobId"]: row for row in deep["portfolioRows"]}
    rows = []
    rank = 1
    for blueprint in forge["blueprintRows"]:
        theme = normalized_theme(blueprint["theme"])
        for paper in blueprint["seedPapers"]:
            promoted_row = promoted_by_repo.get(paper["repo"].lower())
            job_id = promoted_row["jobId"] if promoted_row else ""
            coverage_row = coverage_by_job.get(job_id, {})
            deep_row = deep_by_job.get(job_id)
            subthemes = paper["tags"][:6]
            row = {
                "rank": rank,
                "theme": theme,
                "themeName": blueprint["themeName"],
                "blueprint": blueprint["title"],
                "paperTitle": paper["title"],
                "repo": repo_name(paper["repo"]),
                "repoUrl": paper["repo"],
                "subthemes": subthemes,
                "problem": paper["problem"],
                "jobId": job_id,
                "promotedEvidence": promoted_row is not None,
                "readiness": promoted_row["metrics"]["readiness"] if promoted_row else 0,
                "accelerator": promoted_row["provenance"]["accelerator"] if promoted_row else "missing",
                "interactiveReady": coverage_row.get("status") == "interactive-ready",
                "wave": coverage_row.get("wave", "missing"),
                "demoPage": coverage_row.get("page", blueprint["demoSurface"]),
                "wavePage": coverage_row.get("wavePage", ""),
                "controls": coverage_row.get("controls", 0),
                "artifactCount": coverage_row.get("localArtifacts", 0),
                "deepViewerReady": bool(deep_row and deep_row["status"] == "deep-viewer-ready"),
                "deepViewerPage": deep_row["page"] if deep_row else "",
                "replayCommand": coverage_row.get("replayCommand", ""),
                "status": "demo-linked" if promoted_row and coverage_row.get("status") == "interactive-ready" else "gap",
            }
            rows.append(row)
            rank += 1
    return rows


def summarize(rows, forge, coverage, deep):
    summary = {
        "matrix": "cvpr-top-paper-repo-demo-matrix",
        "status": "matrix-ready",
        "sourceForge": "analysis/cvpr_paper_repo_demo_forge/registry.json",
        "sourcePromotedResults": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
        "sourceInteractiveCoverage": "analysis/cvpr_interactive_coverage_portfolio/registry.json",
        "sourceDeepViewers": "analysis/cvpr_deep_viewer_portfolio/registry.json",
        "topPaperRepos": len(rows),
        "readyRows": len([row for row in rows if row["status"] == "demo-linked"]),
        "themes": len({row["theme"] for row in rows}),
        "blueprints": forge["summary"]["blueprints"],
        "subthemeTags": sum(len(row["subthemes"]) for row in rows),
        "promotedEvidenceRows": len([row for row in rows if row["promotedEvidence"]]),
        "interactiveRows": len([row for row in rows if row["interactiveReady"]]),
        "deepViewerRows": len([row for row in rows if row["deepViewerReady"]]),
        "artifacts": sum(row["artifactCount"] for row in rows),
        "controls": sum(row["controls"] for row in rows),
        "coverageDemos": coverage["summary"]["totalDemos"],
        "coverageWaves": coverage["summary"]["waves"],
        "deepViewerPortfolioRows": deep["summary"]["deepViewers"],
        "holds": len([row for row in rows if row["status"] != "demo-linked"]),
        "validator": "scripts/verify_cvpr_top_paper_repo_demo_matrix.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["topPaperRepos"] == 40
        and summary["readyRows"] == 40
        and summary["themes"] == 8
        and summary["blueprints"] == 8
        and summary["promotedEvidenceRows"] == 40
        and summary["interactiveRows"] == 40
        and summary["deepViewerRows"] == 8
        and summary["artifacts"] == 120
        and summary["controls"] == 200
        and summary["coverageDemos"] == 40
        and summary["coverageWaves"] == 5
        and summary["holds"] == 0
    )
    summary["status"] = "matrix-ready" if gate else "block"
    return summary


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "matrixRows": rows}, indent=2) + "\n")


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const matrixRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Top Paper Repo Demo Matrix\n\nJoins top paper repo blueprints, promoted Colab evidence, interactive coverage, and deep viewer readiness into one demo matrix.\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Top repos", summary["topPaperRepos"]),
        ("Themes", summary["themes"]),
        ("Interactive", summary["interactiveRows"]),
        ("Deep viewers", summary["deepViewerRows"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    row_html = ""
    for row in rows:
        subthemes = ", ".join(row["subthemes"])
        deep_link = f"<a href=\"{esc(row['deepViewerPage'])}\">deep viewer</a>" if row["deepViewerPage"] else "theme surface"
        row_html += (
            "<tr>"
            f"<td>{esc(row['rank'])}</td>"
            f"<td>{esc(row['theme'])}<span>{esc(row['blueprint'])}</span></td>"
            f"<td><a href=\"{esc(row['repoUrl'])}\">{esc(row['repo'])}</a><span>{esc(row['paperTitle'])}</span></td>"
            f"<td>{esc(subthemes)}</td>"
            f"<td><a href=\"{esc(row['demoPage'])}\">{esc(row['demoPage'])}</a><span>{esc(row['wave'])} / {deep_link}</span></td>"
            f"<td>{esc(row['readiness'])}<span>{esc(row['accelerator'])}</span></td>"
            f"<td>{esc(row['controls'])} controls<br>{esc(row['artifactCount'])} artifacts</td>"
            f"<td>{esc(row['status'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Top Paper Repo Demo Matrix</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1480px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:40px 0 34px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:44px;line-height:1.05;margin:10px 0}}header p{{max-width:116ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:1260px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px;max-width:54ch}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - top paper repo demo matrix</div><h1>Top Paper Repo Demo Matrix</h1><p>End-to-end map from each top paper repo blueprint to its promoted Colab evidence row, interactive demo surface, subtheme tags, local artifacts, controls, and deep-viewer readiness.</p><nav><a href="index.html">all demos</a><a href="cvpr-paper-repo-demo-forge.html">paper repo forge</a><a href="cvpr-interactive-coverage-portfolio.html">interactive coverage</a><a href="cvpr-deep-viewer-portfolio.html">deep viewers</a><a href="analysis/cvpr_top_paper_repo_demo_matrix/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Matrix Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>subthemeTags={esc(summary['subthemeTags'])} artifacts={esc(summary['artifacts'])} controls={esc(summary['controls'])}</code></section><section class="panel"><h2>Repo Demo Rows</h2><div class="table-wrap"><table><thead><tr><th>#</th><th>Theme</th><th>Repo / paper</th><th>Subthemes</th><th>Demo surface</th><th>Readiness</th><th>Coverage</th><th>Status</th></tr></thead><tbody>{row_html}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_top_paper_repo_demo_matrix.py - package: source-code/learning/cvpr-top-paper-repo-demo-matrix</div></footer></body></html>"""
    write(ROOT / "cvpr-top-paper-repo-demo-matrix.html", page)


def main():
    forge = read_json(FORGE)
    promoted = read_json(PROMOTED)
    coverage = read_json(COVERAGE)
    deep = read_json(DEEP)
    rows = build_rows(forge, promoted, coverage, deep)
    summary = summarize(rows, forge, coverage, deep)
    build_registry(rows, summary)
    build_package(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-top-paper-repo-demo-matrix.html: {summary['topPaperRepos']} repos, status {summary['status']}")


if __name__ == "__main__":
    main()

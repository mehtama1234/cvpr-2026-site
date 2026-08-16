"""Build the CVPR live evidence portfolio closeout."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_live_evidence_portfolio"
BASE = ROOT / "source-code/learning/cvpr-live-evidence-portfolio"

SURFACES = [
    {
        "theme": "frontier",
        "label": "Frontier Live Evidence Drill",
        "page": "cvpr-frontier-live-evidence-drill.html",
        "registry": "analysis/cvpr_frontier_live_evidence_drill/registry.json",
        "rowsKey": "drillRows",
        "reviewKey": "evidenceReview",
        "specialKey": None,
    },
    {
        "theme": "threed",
        "label": "3D World Live Evidence Room",
        "page": "cvpr-3d-world-live-evidence-room.html",
        "registry": "analysis/cvpr_3d_world_live_evidence_room/registry.json",
        "rowsKey": "roomRows",
        "reviewKey": "geometryReview",
        "specialKey": None,
    },
    {
        "theme": "video",
        "label": "Video Temporal Live Evidence Lab",
        "page": "cvpr-video-temporal-live-evidence-lab.html",
        "registry": "analysis/cvpr_video_temporal_live_evidence_lab/registry.json",
        "rowsKey": "labRows",
        "reviewKey": "temporalReview",
        "specialKey": None,
    },
    {
        "theme": "generation",
        "label": "Generation Control Live Evidence Studio",
        "page": "cvpr-generation-control-live-evidence-studio.html",
        "registry": "analysis/cvpr_generation_control_live_evidence_studio/registry.json",
        "rowsKey": "studioRows",
        "reviewKey": "artifactReview",
        "specialKey": None,
    },
    {
        "theme": "vlm",
        "label": "Grounded VLM Live Evidence Court",
        "page": "cvpr-grounded-vlm-live-evidence-court.html",
        "registry": "analysis/cvpr_grounded_vlm_live_evidence_court/registry.json",
        "rowsKey": "courtRows",
        "reviewKey": "groundingReview",
        "specialKey": None,
    },
    {
        "theme": "perception",
        "label": "Perception Parts Live Evidence Bench",
        "page": "cvpr-perception-parts-live-evidence-bench.html",
        "registry": "analysis/cvpr_perception_parts_live_evidence_bench/registry.json",
        "rowsKey": "benchRows",
        "reviewKey": "partReview",
        "specialKey": None,
    },
    {
        "theme": "embodied",
        "label": "Embodied Control Live Evidence Drill",
        "page": "cvpr-embodied-control-live-evidence-drill.html",
        "registry": "analysis/cvpr_embodied_control_live_evidence_drill/registry.json",
        "rowsKey": "drillRows",
        "reviewKey": None,
        "specialKey": "policyShadow",
    },
    {
        "theme": "learning",
        "label": "Efficient Learning Live Evidence Governor",
        "page": "cvpr-efficient-learning-live-evidence-governor.html",
        "registry": "analysis/cvpr_efficient_learning_live_evidence_governor/registry.json",
        "rowsKey": "governorRows",
        "reviewKey": "efficiencyReview",
        "specialKey": "canaryDemo",
    },
]

CORE = """export function surfaceReady(row) {
  return row.status === "ready" &&
    row.rows === 5 &&
    row.liveRows === 5 &&
    row.smokePassed === 5 &&
    row.artifacts === 5 &&
    row.holdDemo === 0 &&
    row.registry.endsWith("registry.json") &&
    row.page.endsWith(".html");
}

export function portfolioGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "portfolio-ready") return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.readySurfaces !== 8) return "block";
  if (summary.rows !== 40) return "block";
  if (summary.liveRows !== 40) return "block";
  if (summary.smokePassed !== 40) return "block";
  if (summary.artifacts !== 40) return "block";
  if (summary.holdDemo !== 0) return "block";
  return "portfolio-ready";
}

export function summarizePortfolio(surfaceRows) {
  const summary = {
    portfolio: "cvpr-live-evidence-portfolio",
    surfaces: surfaceRows.length,
    readySurfaces: surfaceRows.filter(surfaceReady).length,
    rows: surfaceRows.reduce((sum, row) => sum + row.rows, 0),
    liveRows: surfaceRows.reduce((sum, row) => sum + row.liveRows, 0),
    smokePassed: surfaceRows.reduce((sum, row) => sum + row.smokePassed, 0),
    artifacts: surfaceRows.reduce((sum, row) => sum + row.artifacts, 0),
    promoteDemo: surfaceRows.reduce((sum, row) => sum + row.promoteDemo, 0),
    reviewRows: surfaceRows.reduce((sum, row) => sum + row.reviewRows, 0),
    policyShadow: surfaceRows.reduce((sum, row) => sum + row.policyShadow, 0),
    canaryDemo: surfaceRows.reduce((sum, row) => sum + row.canaryDemo, 0),
    holdDemo: surfaceRows.reduce((sum, row) => sum + row.holdDemo, 0)
  };
  return { ...summary, status: summary.surfaces === 8 && summary.readySurfaces === 8 && summary.rows === 40 && summary.holdDemo === 0 ? "portfolio-ready" : "block" };
}
"""

TEST = """import assert from "node:assert/strict";
import { summary, surfaceRows } from "../src/fixtures.js";
import { portfolioGate, summarizePortfolio, surfaceReady } from "../src/core.js";

assert.equal(surfaceRows.length, 8);
assert.equal(surfaceRows.every(surfaceReady), true);
const derived = summarizePortfolio(surfaceRows);
assert.equal(derived.status, "portfolio-ready");
assert.equal(derived.rows, 40);
assert.equal(derived.liveRows, 40);
assert.equal(derived.smokePassed, 40);
assert.equal(derived.artifacts, 40);
assert.equal(derived.holdDemo, 0);
assert.equal(portfolioGate(summary), "portfolio-ready");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-live-evidence-portfolio:", summary.rows, "rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_surface_rows():
    rows = []
    for spec in SURFACES:
        data = read_json(ROOT / spec["registry"])
        summary = data["summary"]
        row_count = len(data[spec["rowsKey"]])
        row = {
            "theme": spec["theme"],
            "label": spec["label"],
            "page": spec["page"],
            "registry": spec["registry"],
            "status": summary["status"],
            "rows": summary["rows"],
            "actualRows": row_count,
            "liveRows": summary["liveRows"],
            "smokePassed": summary["smokePassed"],
            "artifacts": summary["artifacts"],
            "promoteDemo": summary.get("promoteDemo", 0),
            "reviewRows": summary.get(spec["reviewKey"], 0) if spec["reviewKey"] else 0,
            "policyShadow": summary.get("policyShadow", 0),
            "canaryDemo": summary.get("canaryDemo", 0),
            "holdDemo": summary["holdDemo"],
            "minEvidenceScore": summary["minEvidenceScore"],
            "validator": summary["validator"],
        }
        rows.append(row)
    return rows


def summarize(rows):
    ready = [
        row
        for row in rows
        if row["status"] == "ready"
        and row["rows"] == 5
        and row["actualRows"] == 5
        and row["liveRows"] == 5
        and row["smokePassed"] == 5
        and row["artifacts"] == 5
        and row["holdDemo"] == 0
    ]
    return {
        "portfolio": "cvpr-live-evidence-portfolio",
        "status": "portfolio-ready" if len(rows) == 8 and len(ready) == 8 and sum(row["rows"] for row in rows) == 40 else "block",
        "surfaces": len(rows),
        "readySurfaces": len(ready),
        "rows": sum(row["rows"] for row in rows),
        "liveRows": sum(row["liveRows"] for row in rows),
        "smokePassed": sum(row["smokePassed"] for row in rows),
        "artifacts": sum(row["artifacts"] for row in rows),
        "promoteDemo": sum(row["promoteDemo"] for row in rows),
        "reviewRows": sum(row["reviewRows"] for row in rows),
        "policyShadow": sum(row["policyShadow"] for row in rows),
        "canaryDemo": sum(row["canaryDemo"] for row in rows),
        "holdDemo": sum(row["holdDemo"] for row in rows),
        "minEvidenceScore": min(row["minEvidenceScore"] for row in rows),
        "sourcePromotedResults": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
        "sourceCommandCenter": "analysis/cvpr_repo_harness_command_center/registry.json",
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const surfaceRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Live Evidence Portfolio\n\nPortfolio closeout proving all eight promoted CVPR repo waves are represented by live-backed evidence demos with 40 promoted rows and no held rows.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "surfaceRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Surfaces", summary["surfaces"]),
        ("Rows", summary["rows"]),
        ("Promote", summary["promoteDemo"]),
        ("Review", summary["reviewRows"]),
        ("Shadow", summary["policyShadow"]),
        ("Canary", summary["canaryDemo"]),
        ("Hold", summary["holdDemo"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<tr><td><a href="{esc(row['page'])}">{esc(row['label'])}</a><span>{esc(row['theme'])}</span></td><td>{esc(row['status'])}</td><td>{row['rows']} / {row['actualRows']}</td><td>{row['promoteDemo']}</td><td>{row['reviewRows']}</td><td>{row['policyShadow']}</td><td>{row['canaryDemo']}</td><td>{row['minEvidenceScore']}</td><td><code>{esc(row['registry'])}</code></td></tr>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Live Evidence Portfolio</title><style>:root{{--ink:#111718;--paper:#F6F7F4;--panel:#fff;--line:#D8DDD8;--muted:#5E6764;--accent:#245F65;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#172223;color:#EFF7F5;padding:42px 0 34px}}.bug,nav a,code,.stat span,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D6}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CEDAD8}}nav a{{color:#D2EFEC;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(8,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:22px;overflow-wrap:anywhere}}.stat span,td span{{font-size:11px;color:var(--muted)}}.panel{{overflow-x:auto;margin-bottom:24px}}.panel h2{{font-size:18px;margin:16px}}table{{width:100%;border-collapse:collapse;min-width:1100px}}td,th{{border-top:1px solid var(--line);padding:9px;text-align:left;vertical-align:top;font-size:12px}}th{{background:#EEF3F2;color:#33413F}}td span{{display:block}}code{{display:block;background:#EEF3F0;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:1000px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - live evidence portfolio</div><h1>Live Evidence Portfolio</h1><p>Portfolio closeout for the CVPR repo harness: all eight promoted waves, all forty live Colab rows, all evidence artifacts, and the decision mix across promote, review, shadow, and canary postures.</p><nav><a href="index.html">all demos</a><a href="cvpr-repo-harness-command-center.html">repo command center</a><a href="analysis/cvpr_live_evidence_portfolio/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Live Evidence Surfaces</h2><table><thead><tr><th>Surface</th><th>Status</th><th>Rows</th><th>Promote</th><th>Review</th><th>Shadow</th><th>Canary</th><th>Min Score</th><th>Registry</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Gate</h2><div style="padding:0 16px 16px"><code>{esc(summary['validator'])} --results {esc(summary['sourcePromotedResults'])}</code><code>{esc(summary['fullStackCommand'])}</code></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_live_evidence_portfolio.py - package: source-code/learning/cvpr-live-evidence-portfolio</div></footer></body></html>"""
    write(ROOT / "cvpr-live-evidence-portfolio.html", page)


def main():
    rows = build_surface_rows()
    summary = summarize(rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-live-evidence-portfolio.html: {summary['surfaces']} surfaces, {summary['rows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

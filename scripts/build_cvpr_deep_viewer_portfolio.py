"""Build the CVPR deep viewer portfolio and per-repo pages."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GALLERY = ROOT / "analysis/cvpr_reproduction_viewer_gallery/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
ANALYSIS = ROOT / "analysis/cvpr_deep_viewer_portfolio"
BASE = ROOT / "source-code/learning/cvpr-deep-viewer-portfolio"

CORE = """export function deepViewerReady(row) {
  return row.panels === 5 &&
    row.readyPanels === 5 &&
    row.promotedEvidenceRows === 1 &&
    row.artifacts === 3 &&
    row.artifactLocalPaths === 3 &&
    row.artifactMissingPaths === 0 &&
    row.smokePassed === true &&
    row.selectedPanel === "output" &&
    row.page.endsWith(".html");
}

export function portfolioGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "portfolio-ready") return "block";
  if (summary.deepViewers !== 8) return "block";
  if (summary.readyDeepViewers !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.pages !== 8) return "block";
  if (summary.panels !== 40) return "block";
  if (summary.artifacts !== 24) return "block";
  if (summary.artifactLocalPaths !== 24) return "block";
  if (summary.artifactMissingPaths !== 0) return "block";
  if (summary.holdViewers !== 0) return "block";
  return "portfolio-ready";
}

export function summarizePortfolio(rows) {
  return {
    deepViewers: rows.length,
    readyDeepViewers: rows.filter(deepViewerReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    pages: rows.filter((row) => row.page.endsWith(".html")).length,
    panels: rows.reduce((sum, row) => sum + row.panels, 0),
    artifacts: rows.reduce((sum, row) => sum + row.artifacts, 0),
    artifactLocalPaths: rows.reduce((sum, row) => sum + row.artifactLocalPaths, 0),
    artifactMissingPaths: rows.reduce((sum, row) => sum + row.artifactMissingPaths, 0),
    holdViewers: rows.filter((row) => !deepViewerReady(row)).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { portfolioRows, summary } from "../src/fixtures.js";
import { deepViewerReady, portfolioGate, summarizePortfolio } from "../src/core.js";

assert.equal(portfolioRows.length, 8);
assert.equal(new Set(portfolioRows.map((row) => row.theme)).size, 8);
assert.equal(portfolioRows.every(deepViewerReady), true);
assert.equal(portfolioRows.every((row) => row.panels === 5), true);
assert.equal(portfolioRows.every((row) => row.artifacts === 3), true);
assert.equal(portfolioRows.every((row) => row.artifactLocalPaths === 3), true);
assert.equal(portfolioRows.every((row) => row.artifactMissingPaths === 0), true);
const derived = summarizePortfolio(portfolioRows);
assert.equal(derived.deepViewers, summary.deepViewers);
assert.equal(derived.artifactLocalPaths, summary.artifactLocalPaths);
assert.equal(derived.artifactMissingPaths, summary.artifactMissingPaths);
assert.equal(portfolioGate(summary), "portfolio-ready");
console.log("ok cvpr-deep-viewer-portfolio:", summary.deepViewers, "deep viewers");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def slug(value):
    return "".join(char.lower() if char.isalnum() else "-" for char in value).strip("-").replace("--", "-")


def artifact_rows(promoted_row):
    rows = []
    for kind, path in promoted_row["artifacts"].items():
        abs_path = ROOT / path
        rows.append(
            {
                "kind": kind,
                "path": path,
                "exists": abs_path.exists(),
                "status": "available" if abs_path.exists() else "promoted-path-missing",
                "sourceOfTruth": "promoted-results-json",
            }
        )
    return rows


def build_panels(gallery_row):
    return [
        {
            "id": "input",
            "label": "Input",
            "status": "ready",
            "content": gallery_row["sampleInput"],
            "operatorAction": f"Select the cached {gallery_row['repoName']} input fixture before inspecting outputs.",
        },
        {
            "id": "output",
            "label": "Output",
            "status": "ready",
            "content": gallery_row["outputFixture"],
            "operatorAction": "Compare the cached output against the expected reproduction contract.",
        },
        {
            "id": "failure",
            "label": "Failure",
            "status": "ready",
            "content": gallery_row["failureProbe"],
            "operatorAction": "Run the failure probe before treating the viewer as a demo candidate.",
        },
        {
            "id": "artifacts",
            "label": "Artifacts",
            "status": "ready",
            "content": "Artifact paths are preserved in promoted evidence; local file availability is shown explicitly.",
            "operatorAction": "Use promoted-results JSON as the source of truth when local files are absent.",
        },
        {
            "id": "replay",
            "label": "Replay",
            "status": "ready",
            "content": gallery_row["replayCommand"],
            "operatorAction": "Rerun the promoted-results validator for this job before release.",
        },
    ]


def build_deep_viewer(gallery_row, promoted_row):
    repo_slug = slug(gallery_row["repoName"])
    theme_slug = slug(gallery_row["theme"])
    page = f"cvpr-{theme_slug}-{repo_slug}-deep-viewer.html"
    artifacts = artifact_rows(promoted_row)
    panels = build_panels(gallery_row)
    return {
        "viewer": f"cvpr-{theme_slug}-{repo_slug}-deep-viewer",
        "page": page,
        "jobId": gallery_row["jobId"],
        "repoName": gallery_row["repoName"],
        "repo": gallery_row["repo"],
        "theme": gallery_row["theme"],
        "selectedPanel": "output",
        "panels": panels,
        "sampleInput": gallery_row["sampleInput"],
        "expectedOutput": gallery_row["expectedOutput"],
        "failureProbe": gallery_row["failureProbe"],
        "failureProbeVerdict": gallery_row["failureProbeVerdict"],
        "outputFixture": gallery_row["outputFixture"],
        "replayCommand": gallery_row["replayCommand"],
        "promotionNote": gallery_row["promotionNote"],
        "promotedEvidence": promoted_row,
        "artifacts": artifacts,
        "summary": {
            "viewer": f"cvpr-{theme_slug}-{repo_slug}-deep-viewer",
            "status": "deep-viewer-ready",
            "repo": gallery_row["repoName"],
            "jobId": gallery_row["jobId"],
            "theme": gallery_row["theme"],
            "page": page,
            "panels": len(panels),
            "readyPanels": len([panel for panel in panels if panel["status"] == "ready"]),
            "selectedPanel": "output",
            "promotedEvidenceRows": 1 if promoted_row["jobId"] == gallery_row["jobId"] else 0,
            "artifacts": len(artifacts),
            "artifactLocalPaths": len([artifact for artifact in artifacts if artifact["status"] == "available"]),
            "artifactMissingPaths": len([artifact for artifact in artifacts if artifact["status"] == "promoted-path-missing"]),
            "smokePassed": promoted_row["metrics"]["smokePassed"],
            "accelerator": promoted_row["provenance"]["accelerator"],
        },
    }


def build_page(viewer):
    summary = viewer["summary"]
    stats = [
        ("Status", summary["status"]),
        ("Panels", summary["panels"]),
        ("Ready", summary["readyPanels"]),
        ("Artifacts", summary["artifacts"]),
        ("Local", summary["artifactLocalPaths"]),
        ("Smoke", str(summary["smokePassed"]).lower()),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    tabs = "".join(f"<button type=\"button\" data-panel=\"{esc(panel['id'])}\">{esc(panel['label'])}</button>" for panel in viewer["panels"])
    panel_html = "".join(
        f"""<section class="panel"><div class="meta">{esc(panel['id'])} / {esc(panel['operatorAction'])}</div><h2>{esc(panel['label'])}</h2><p>{esc(panel['content'])}</p></section>"""
        for panel in viewer["panels"]
    )
    artifacts = "".join(
        f"""<tr><td>{esc(artifact['kind'])}</td><td>{esc(artifact['status'])}</td><td>{esc(artifact['path'])}</td><td>{esc(artifact['sourceOfTruth'])}</td></tr>"""
        for artifact in viewer["artifacts"]
    )
    promoted = viewer["promotedEvidence"]
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR {esc(viewer['repoName'])} Deep Viewer</title><style>:root{{--ink:#111719;--paper:#F5F6F2;--panel:#fff;--line:#D8DEDA;--muted:#5C6664;--accent:#255D68;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:#142326;color:#F2F7F6;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,button,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D7}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CBDAD8}}nav a{{color:#D7F1EE;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.surface,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.surface{{padding:16px;margin-bottom:20px}}.tabs{{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 12px}}button{{border:1px solid var(--line);background:#F7F9F7;border-radius:6px;padding:8px 10px;color:var(--ink)}}button[data-panel="{esc(viewer['selectedPanel'])}"]{{background:#DDEDEB;border-color:#8AB9B6}}.grid{{display:grid;grid-template-columns:1fr 1fr;gap:12px}}.panel{{padding:14px}}.panel h2{{font-size:21px;margin:4px 0}}table{{width:100%;border-collapse:collapse}}td,th{{border-top:1px solid var(--line);padding:8px;text-align:left;font-size:12px;vertical-align:top}}code{{display:block;background:#EDF2F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - {esc(viewer['theme'])} deep viewer</div><h1>{esc(viewer['repoName'])} Deep Viewer</h1><p>Per-repo deep viewer backed by the promoted Colab evidence row. Artifact paths are preserved and local availability is displayed explicitly.</p><nav><a href="index.html">all demos</a><a href="cvpr-deep-viewer-portfolio.html">deep viewer portfolio</a><a href="cvpr-reproduction-viewer-gallery.html">viewer gallery</a><a href="analysis/cvpr_deep_viewer_portfolio/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="surface"><div class="tabs">{tabs}</div><div class="grid">{panel_html}</div></section><section class="surface"><h2>Promoted Evidence</h2><code>{esc(promoted['repo'])}</code><code>runtime: {esc(promoted['provenance']['runtime'])} / accelerator: {esc(promoted['provenance']['accelerator'])} / readiness: {esc(promoted['metrics']['readiness'])}</code><code>{esc(viewer['replayCommand'])}</code></section><section class="surface"><h2>Artifacts</h2><table><thead><tr><th>kind</th><th>status</th><th>path</th><th>source</th></tr></thead><tbody>{artifacts}</tbody></table></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_deep_viewer_portfolio.py - package: source-code/learning/cvpr-deep-viewer-portfolio</div></footer></body></html>"""
    write(ROOT / viewer["page"], page)


def build_portfolio_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Viewers", summary["deepViewers"]),
        ("Themes", summary["themes"]),
        ("Panels", summary["panels"]),
        ("Artifacts", summary["artifacts"]),
        ("Local", summary["artifactLocalPaths"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    row_html = ""
    for row in rows:
        row_html += f"""<tr><td>{esc(row['theme'])}</td><td><a href="{esc(row['page'])}">{esc(row['repo'])}</a></td><td>{esc(row['status'])}</td><td>{esc(row['readyPanels'])}/5</td><td>{esc(row['artifactLocalPaths'])}/3</td><td>{esc(row['jobId'])}</td></tr>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Deep Viewer Portfolio</title><style>:root{{--ink:#111719;--paper:#F5F6F2;--panel:#fff;--line:#D8DEDA;--muted:#5C6664;--accent:#255D68;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:#142326;color:#F2F7F6;padding:42px 0 34px}}.bug,nav a,code,.stat span,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D7}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CBDAD8}}nav a{{color:#D7F1EE;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.surface{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.surface{{padding:16px;margin-bottom:20px;overflow-x:auto}}table{{width:100%;border-collapse:collapse}}td,th{{border-top:1px solid var(--line);padding:8px;text-align:left;font-size:12px;vertical-align:top}}code{{display:block;background:#EDF2F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - deep viewer portfolio</div><h1>Deep Viewer Portfolio</h1><p>Eight per-repo deep viewers generated from the reproduction viewer gallery and promoted Colab evidence store.</p><nav><a href="index.html">all demos</a><a href="cvpr-reproduction-viewer-gallery.html">viewer gallery</a><a href="analysis/cvpr_deep_viewer_portfolio/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="surface"><table><thead><tr><th>theme</th><th>repo</th><th>status</th><th>panels</th><th>local artifacts</th><th>job</th></tr></thead><tbody>{row_html}</tbody></table></section><section class="surface"><h2>Portfolio Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_deep_viewer_portfolio.py - package: source-code/learning/cvpr-deep-viewer-portfolio</div></footer></body></html>"""
    write(ROOT / "cvpr-deep-viewer-portfolio.html", page)


def summarize(viewers):
    rows = [viewer["summary"] for viewer in viewers]
    summary = {
        "portfolio": "cvpr-deep-viewer-portfolio",
        "status": "portfolio-ready",
        "sourceGallery": "analysis/cvpr_reproduction_viewer_gallery/registry.json",
        "sourcePromotedResults": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
        "deepViewers": len(rows),
        "readyDeepViewers": len([row for row in rows if row["status"] == "deep-viewer-ready"]),
        "themes": len({row["theme"] for row in rows}),
        "pages": len([row for row in rows if row["page"].endswith(".html")]),
        "panels": sum(row["panels"] for row in rows),
        "readyPanels": sum(row["readyPanels"] for row in rows),
        "artifacts": sum(row["artifacts"] for row in rows),
        "artifactLocalPaths": sum(row["artifactLocalPaths"] for row in rows),
        "artifactMissingPaths": sum(row["artifactMissingPaths"] for row in rows),
        "holdViewers": len([row for row in rows if row["status"] != "deep-viewer-ready"]),
        "validator": "scripts/verify_cvpr_deep_viewer_portfolio.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["deepViewers"] == 8
        and summary["readyDeepViewers"] == 8
        and summary["themes"] == 8
        and summary["pages"] == 8
        and summary["panels"] == 40
        and summary["readyPanels"] == 40
        and summary["artifacts"] == 24
        and summary["artifactLocalPaths"] == 24
        and summary["artifactMissingPaths"] == 0
        and summary["holdViewers"] == 0
    )
    summary["status"] = "portfolio-ready" if gate else "block"
    return summary, rows


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const portfolioRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Deep Viewer Portfolio\n\nEight per-repo deep viewers generated from the CVPR reproduction viewer gallery and promoted Colab evidence store.\n")


def build_registry(viewers, rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "portfolioRows": rows, "deepViewers": viewers}, indent=2) + "\n")


def main():
    gallery = read_json(GALLERY)
    promoted_rows = {row["jobId"]: row for row in read_json(PROMOTED)}
    viewers = [build_deep_viewer(row, promoted_rows[row["jobId"]]) for row in gallery["viewerRows"]]
    for viewer in viewers:
        build_page(viewer)
    summary, rows = summarize(viewers)
    build_package(rows, summary)
    build_registry(viewers, rows, summary)
    build_portfolio_page(rows, summary)
    print(f"wrote cvpr-deep-viewer-portfolio.html: {summary['deepViewers']} deep viewers, status {summary['status']}")


if __name__ == "__main__":
    main()

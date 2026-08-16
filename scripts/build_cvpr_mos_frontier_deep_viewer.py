"""Build the MOS frontier per-repo deep viewer."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GALLERY = ROOT / "analysis/cvpr_reproduction_viewer_gallery/registry.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
ANALYSIS = ROOT / "analysis/cvpr_mos_frontier_deep_viewer"
BASE = ROOT / "source-code/learning/cvpr-mos-frontier-deep-viewer"

CORE = """export function artifactAvailability(row) {
  return row.artifacts.filter((artifact) => artifact.status === "available").length;
}

export function panelReady(row) {
  return row.panels.length === 5 &&
    row.panels.every((panel) => panel.status === "ready") &&
    row.selectedPanel === "output" &&
    row.promotedEvidence.jobId === row.jobId &&
    row.replayCommand.includes(row.jobId);
}

export function viewerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "deep-viewer-ready") return "block";
  if (summary.repo !== "MOS") return "block";
  if (summary.panels !== 5) return "block";
  if (summary.readyPanels !== 5) return "block";
  if (summary.promotedEvidenceRows !== 1) return "block";
  if (summary.artifacts !== 3) return "block";
  if (summary.artifactLocalPaths !== 3) return "block";
  if (summary.artifactMissingPaths !== 0) return "block";
  if (summary.smokePassed !== true) return "block";
  return "deep-viewer-ready";
}

export function summarizeViewer(row) {
  return {
    repo: row.repoName,
    panels: row.panels.length,
    readyPanels: row.panels.filter((panel) => panel.status === "ready").length,
    promotedEvidenceRows: row.promotedEvidence ? 1 : 0,
    artifacts: row.artifacts.length,
    artifactLocalPaths: artifactAvailability(row),
    artifactMissingPaths: row.artifacts.filter((artifact) => artifact.status === "promoted-path-missing").length,
    smokePassed: row.promotedEvidence.metrics.smokePassed,
    panelReady: panelReady(row)
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { deepViewer, summary } from "../src/fixtures.js";
import { artifactAvailability, panelReady, summarizeViewer, viewerGate } from "../src/core.js";

assert.equal(deepViewer.repoName, "MOS");
assert.equal(deepViewer.jobId, "frontier-01-github-com-yjzhao1019-mos");
assert.equal(deepViewer.panels.length, 5);
assert.equal(deepViewer.panels.every((panel) => panel.status === "ready"), true);
assert.equal(deepViewer.selectedPanel, "output");
assert.equal(deepViewer.promotedEvidence.metrics.smokePassed, true);
assert.equal(deepViewer.artifacts.length, 3);
assert.equal(artifactAvailability(deepViewer), 3);
assert.equal(panelReady(deepViewer), true);
const derived = summarizeViewer(deepViewer);
assert.equal(derived.readyPanels, summary.readyPanels);
assert.equal(derived.artifactLocalPaths, summary.artifactLocalPaths);
assert.equal(derived.artifactMissingPaths, summary.artifactMissingPaths);
assert.equal(viewerGate(summary), "deep-viewer-ready");
console.log("ok cvpr-mos-frontier-deep-viewer:", summary.repo, summary.status);
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


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


def build_deep_viewer(gallery_row, promoted_row):
    panels = [
        {
            "id": "input",
            "label": "Input",
            "status": "ready",
            "content": gallery_row["sampleInput"],
            "operatorAction": "Select a cross-modal MOS input fixture before switching to output.",
        },
        {
            "id": "output",
            "label": "Output",
            "status": "ready",
            "content": gallery_row["outputFixture"],
            "operatorAction": "Inspect readiness, smoke status, accelerator, and promotion decision together.",
        },
        {
            "id": "failure",
            "label": "Failure",
            "status": "ready",
            "content": gallery_row["failureProbe"],
            "operatorAction": "Replay sensor mismatch, occlusion, and provenance-loss notes before shipping.",
        },
        {
            "id": "artifacts",
            "label": "Artifacts",
            "status": "ready",
            "content": "Artifact paths are preserved in promoted evidence; local files are explicitly marked by availability.",
            "operatorAction": "Use promoted JSON as authoritative when local artifact files are absent.",
        },
        {
            "id": "replay",
            "label": "Replay",
            "status": "ready",
            "content": gallery_row["replayCommand"],
            "operatorAction": "Rerun the promoted-results validator with the MOS job filter before promotion.",
        },
    ]
    return {
        "viewer": "cvpr-mos-frontier-deep-viewer",
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
        "artifacts": artifact_rows(promoted_row),
        "sourceGallery": "analysis/cvpr_reproduction_viewer_gallery/registry.json",
        "sourcePromotedResults": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
    }


def summarize(deep_viewer):
    summary = {
        "viewer": "cvpr-mos-frontier-deep-viewer",
        "status": "deep-viewer-ready",
        "repo": deep_viewer["repoName"],
        "jobId": deep_viewer["jobId"],
        "theme": deep_viewer["theme"],
        "panels": len(deep_viewer["panels"]),
        "readyPanels": len([panel for panel in deep_viewer["panels"] if panel["status"] == "ready"]),
        "selectedPanel": deep_viewer["selectedPanel"],
        "promotedEvidenceRows": 1 if deep_viewer["promotedEvidence"]["jobId"] == deep_viewer["jobId"] else 0,
        "artifacts": len(deep_viewer["artifacts"]),
        "artifactLocalPaths": len([artifact for artifact in deep_viewer["artifacts"] if artifact["status"] == "available"]),
        "artifactMissingPaths": len([artifact for artifact in deep_viewer["artifacts"] if artifact["status"] == "promoted-path-missing"]),
        "smokePassed": deep_viewer["promotedEvidence"]["metrics"]["smokePassed"],
        "accelerator": deep_viewer["promotedEvidence"]["provenance"]["accelerator"],
        "sourceGallery": deep_viewer["sourceGallery"],
        "sourcePromotedResults": deep_viewer["sourcePromotedResults"],
        "validator": "scripts/verify_cvpr_mos_frontier_deep_viewer.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["repo"] == "MOS"
        and summary["panels"] == 5
        and summary["readyPanels"] == 5
        and summary["selectedPanel"] == "output"
        and summary["promotedEvidenceRows"] == 1
        and summary["artifacts"] == 3
        and summary["artifactLocalPaths"] == 3
        and summary["artifactMissingPaths"] == 0
        and summary["smokePassed"] is True
    )
    summary["status"] = "deep-viewer-ready" if gate else "block"
    return summary


def build_package(deep_viewer, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const deepViewer = " + json.dumps(deep_viewer, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR MOS Frontier Deep Viewer\n\nPer-repo deep viewer for the MOS frontier reproduction demo. The promoted results JSON is treated as authoritative when local artifact files are absent.\n")


def build_registry(deep_viewer, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "deepViewer": deep_viewer}, indent=2) + "\n")


def build_page(deep_viewer, summary):
    stats = [
        ("Status", summary["status"]),
        ("Panels", summary["panels"]),
        ("Ready", summary["readyPanels"]),
        ("Artifacts", summary["artifacts"]),
        ("Local", summary["artifactLocalPaths"]),
        ("Smoke", str(summary["smokePassed"]).lower()),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    tabs = "".join(f"<button type=\"button\" data-panel=\"{esc(panel['id'])}\">{esc(panel['label'])}</button>" for panel in deep_viewer["panels"])
    panel_html = "".join(
        f"""<section class="panel" id="panel-{esc(panel['id'])}"><div class="meta">{esc(panel['status'])} / {esc(panel['operatorAction'])}</div><h2>{esc(panel['label'])}</h2><p>{esc(panel['content'])}</p></section>"""
        for panel in deep_viewer["panels"]
    )
    artifacts = "".join(
        f"""<tr><td>{esc(artifact['kind'])}</td><td>{esc(artifact['status'])}</td><td>{esc(artifact['path'])}</td><td>{esc(artifact['sourceOfTruth'])}</td></tr>"""
        for artifact in deep_viewer["artifacts"]
    )
    promoted = deep_viewer["promotedEvidence"]
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR MOS Frontier Deep Viewer</title><style>:root{{--ink:#111719;--paper:#F5F6F2;--panel:#fff;--line:#D8DEDA;--muted:#5C6664;--accent:#255D68;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:#142326;color:#F2F7F6;padding:42px 0 34px}}.bug,.meta,nav a,code,.stat span,button,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D7}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CBDAD8}}nav a{{color:#D7F1EE;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.surface,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.surface{{padding:16px;margin-bottom:20px}}.tabs{{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 12px}}button{{border:1px solid var(--line);background:#F7F9F7;border-radius:6px;padding:8px 10px;color:var(--ink)}}button[data-panel="{esc(deep_viewer['selectedPanel'])}"]{{background:#DDEDEB;border-color:#8AB9B6}}.grid{{display:grid;grid-template-columns:1fr 1fr;gap:12px}}.panel{{padding:14px}}.panel h2{{font-size:21px;margin:4px 0}}table{{width:100%;border-collapse:collapse}}td,th{{border-top:1px solid var(--line);padding:8px;text-align:left;font-size:12px;vertical-align:top}}code{{display:block;background:#EDF2F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - frontier deep viewer</div><h1>MOS Frontier Deep Viewer</h1><p>Per-repo deep viewer for the MOS reproduction demo. The promoted JSON row is authoritative, and local artifact availability is displayed explicitly.</p><nav><a href="index.html">all demos</a><a href="cvpr-reproduction-viewer-gallery.html">viewer gallery</a><a href="cvpr-paper-reproduction-track.html">reproduction track</a><a href="analysis/cvpr_mos_frontier_deep_viewer/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="surface"><div class="tabs">{tabs}</div><div class="grid">{panel_html}</div></section><section class="surface"><h2>Promoted Evidence</h2><code>{esc(promoted['repo'])}</code><code>runtime: {esc(promoted['provenance']['runtime'])} / accelerator: {esc(promoted['provenance']['accelerator'])} / readiness: {esc(promoted['metrics']['readiness'])}</code><code>{esc(deep_viewer['replayCommand'])}</code></section><section class="surface"><h2>Artifacts</h2><table><thead><tr><th>kind</th><th>status</th><th>path</th><th>source</th></tr></thead><tbody>{artifacts}</tbody></table></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_mos_frontier_deep_viewer.py - package: source-code/learning/cvpr-mos-frontier-deep-viewer</div></footer></body></html>"""
    write(ROOT / "cvpr-mos-frontier-deep-viewer.html", page)


def main():
    gallery = read_json(GALLERY)
    promoted = read_json(PROMOTED)
    gallery_row = next(row for row in gallery["viewerRows"] if row["jobId"] == "frontier-01-github-com-yjzhao1019-mos")
    promoted_row = next(row for row in promoted if row["jobId"] == gallery_row["jobId"])
    deep_viewer = build_deep_viewer(gallery_row, promoted_row)
    summary = summarize(deep_viewer)
    build_package(deep_viewer, summary)
    build_registry(deep_viewer, summary)
    build_page(deep_viewer, summary)
    print(f"wrote cvpr-mos-frontier-deep-viewer.html: {summary['repo']} {summary['status']}, {summary['readyPanels']} panels")


if __name__ == "__main__":
    main()

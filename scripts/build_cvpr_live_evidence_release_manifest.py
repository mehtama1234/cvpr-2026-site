"""Build the CVPR live evidence release manifest."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PORTFOLIO = ROOT / "analysis/cvpr_live_evidence_portfolio/registry.json"
BRIEF = ROOT / "analysis/cvpr_live_evidence_release_brief/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_live_evidence_release_manifest"
MANIFEST = ANALYSIS / "cvpr_live_evidence_release_manifest.json"
BASE = ROOT / "source-code/learning/cvpr-live-evidence-release-manifest"

CORE = """export function manifestReady(summary) {
  return summary.status === "manifest-ready" &&
    summary.surfaces === 8 &&
    summary.rows === 40 &&
    summary.liveRows === 40 &&
    summary.artifacts === 40 &&
    summary.holdDemo === 0 &&
    summary.packageCount === 8 &&
    summary.verifierCount === 8;
}

export function artifactReady(row) {
  return row.page.endsWith(".html") &&
    row.registry.endsWith("registry.json") &&
    row.packagePath.startsWith("source-code/learning/") &&
    row.verifier.startsWith("scripts/verify_") &&
    row.rows === 5 &&
    row.holdDemo === 0;
}

export function summarizeManifest(rows) {
  return {
    surfaces: rows.length,
    rows: rows.reduce((sum, row) => sum + row.rows, 0),
    liveRows: rows.reduce((sum, row) => sum + row.liveRows, 0),
    artifacts: rows.reduce((sum, row) => sum + row.artifacts, 0),
    holdDemo: rows.reduce((sum, row) => sum + row.holdDemo, 0),
    packageCount: rows.filter((row) => row.packagePath).length,
    verifierCount: rows.filter((row) => row.verifier).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { manifest, summary, surfaceArtifacts } from "../src/fixtures.js";
import { artifactReady, manifestReady, summarizeManifest } from "../src/core.js";

assert.equal(surfaceArtifacts.length, 8);
assert.equal(surfaceArtifacts.every(artifactReady), true);
const derived = summarizeManifest(surfaceArtifacts);
assert.equal(derived.rows, 40);
assert.equal(derived.liveRows, 40);
assert.equal(derived.artifacts, 40);
assert.equal(derived.holdDemo, 0);
assert.equal(manifestReady(summary), true);
assert.equal(manifest.promotedArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
assert.equal(manifest.rollbackArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json");
console.log("ok cvpr-live-evidence-release-manifest:", summary.rows, "rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def verifier_for(page):
    stem = page.removesuffix(".html").replace("-", "_")
    return f"scripts/verify_{stem}.py"


def package_for(page):
    return f"source-code/learning/{page.removesuffix('.html')}"


def build_surface_artifacts(portfolio):
    rows = []
    for row in portfolio["surfaceRows"]:
        rows.append(
            {
                "theme": row["theme"],
                "label": row["label"],
                "page": row["page"],
                "registry": row["registry"],
                "packagePath": package_for(row["page"]),
                "verifier": verifier_for(row["page"]),
                "rows": row["rows"],
                "liveRows": row["liveRows"],
                "artifacts": row["artifacts"],
                "promoteDemo": row["promoteDemo"],
                "reviewRows": row["reviewRows"],
                "policyShadow": row["policyShadow"],
                "canaryDemo": row["canaryDemo"],
                "holdDemo": row["holdDemo"],
                "minEvidenceScore": row["minEvidenceScore"],
            }
        )
    return rows


def summarize(rows, brief):
    bs = brief["summary"]
    return {
        "manifest": "cvpr-live-evidence-release-manifest",
        "status": "manifest-ready" if len(rows) == 8 and sum(row["rows"] for row in rows) == 40 and bs["status"] == "release-ready" else "block",
        "releaseBriefStatus": bs["status"],
        "surfaces": len(rows),
        "rows": sum(row["rows"] for row in rows),
        "liveRows": sum(row["liveRows"] for row in rows),
        "artifacts": sum(row["artifacts"] for row in rows),
        "holdDemo": sum(row["holdDemo"] for row in rows),
        "packageCount": len([row for row in rows if row["packagePath"]]),
        "verifierCount": len([row for row in rows if row["verifier"]]),
        "promotedArtifact": bs["promotedArtifact"],
        "rollbackArtifact": bs["rollbackArtifact"],
        "releaseBrief": "analysis/cvpr_live_evidence_release_brief/registry.json",
        "portfolioRegistry": "analysis/cvpr_live_evidence_portfolio/registry.json",
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_manifest(rows, summary):
    manifest = {
        "manifest": summary["manifest"],
        "status": summary["status"],
        "summary": summary,
        "surfaceArtifacts": rows,
        "promotedArtifact": summary["promotedArtifact"],
        "rollbackArtifact": summary["rollbackArtifact"],
        "commands": {
            "validatePromotedResults": f"{summary['validator']} --results {summary['promotedArtifact']}",
            "fullStack": summary["fullStackCommand"],
        },
    }
    write(MANIFEST, json.dumps(manifest, indent=2) + "\n")
    return manifest


def build_package(rows, summary, manifest):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const surfaceArtifacts = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\nexport const manifest = " + json.dumps(manifest, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Live Evidence Release Manifest\n\nMachine-readable release manifest for live-backed CVPR evidence demos, packages, verifiers, promoted results, rollback state, and validation commands.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "surfaceArtifacts": rows, "manifestArtifact": str(MANIFEST.relative_to(ROOT))}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Surfaces", summary["surfaces"]),
        ("Rows", summary["rows"]),
        ("Packages", summary["packageCount"]),
        ("Verifiers", summary["verifierCount"]),
        ("Hold", summary["holdDemo"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<tr><td><a href="{esc(row['page'])}">{esc(row['label'])}</a><span>{esc(row['theme'])}</span></td><td>{row['rows']}</td><td><code>{esc(row['registry'])}</code></td><td><code>{esc(row['packagePath'])}</code></td><td><code>{esc(row['verifier'])}</code></td></tr>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Live Evidence Release Manifest</title><style>:root{{--ink:#111718;--paper:#F6F7F4;--panel:#fff;--line:#D8DDD8;--muted:#5E6764;--accent:#245F65;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#172223;color:#EFF7F5;padding:42px 0 34px}}.bug,nav a,code,.stat span,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D6}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CEDAD8}}nav a{{color:#D2EFEC;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:22px}}.stat span,td span{{font-size:11px;color:var(--muted)}}.panel{{overflow-x:auto;margin-bottom:24px}}.panel h2{{font-size:18px;margin:16px}}table{{width:100%;border-collapse:collapse;min-width:1120px}}td,th{{border-top:1px solid var(--line);padding:9px;text-align:left;vertical-align:top;font-size:12px}}th{{background:#EEF3F2;color:#33413F}}td span{{display:block}}code{{display:block;background:#EEF3F0;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:1000px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - live evidence manifest</div><h1>Live Evidence Release Manifest</h1><p>Machine-readable handoff for live-backed CVPR evidence demos: pages, registries, packages, verifiers, promoted result store, rollback state, and validation commands.</p><nav><a href="index.html">all demos</a><a href="cvpr-live-evidence-release-brief.html">release brief</a><a href="analysis/cvpr_live_evidence_release_manifest/registry.json">registry</a><a href="analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json">manifest json</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Artifacts</h2><table><thead><tr><th>Surface</th><th>Rows</th><th>Registry</th><th>Package</th><th>Verifier</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Commands</h2><div style="padding:0 16px 16px"><code>{esc(summary['validator'])} --results {esc(summary['promotedArtifact'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>rollback: {esc(summary['rollbackArtifact'])}</code></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_live_evidence_release_manifest.py - package: source-code/learning/cvpr-live-evidence-release-manifest</div></footer></body></html>"""
    write(ROOT / "cvpr-live-evidence-release-manifest.html", page)


def main():
    portfolio = read_json(PORTFOLIO)
    brief = read_json(BRIEF)
    rows = build_surface_artifacts(portfolio)
    summary = summarize(rows, brief)
    manifest = build_manifest(rows, summary)
    build_package(rows, summary, manifest)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-live-evidence-release-manifest.html: {summary['surfaces']} surfaces, {summary['rows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

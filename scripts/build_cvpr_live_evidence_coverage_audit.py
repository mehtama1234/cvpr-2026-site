"""Build the CVPR live evidence coverage audit."""
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json"
PROMOTED = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json"
ANALYSIS = ROOT / "analysis/cvpr_live_evidence_coverage_audit"
BASE = ROOT / "source-code/learning/cvpr-live-evidence-coverage-audit"

CORE = """export function themeCovered(row) {
  return row.manifestRows === 5 &&
    row.promotedRows === 5 &&
    row.pageExists === true &&
    row.registryExists === true &&
    row.packageExists === true &&
    row.verifierExists === true;
}

export function auditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "coverage-complete") return "block";
  if (summary.themes !== 8) return "block";
  if (summary.coveredThemes !== 8) return "block";
  if (summary.manifestRows !== 40) return "block";
  if (summary.promotedRows !== 40) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  return "coverage-complete";
}

export function summarizeAudit(rows) {
  const summary = {
    audit: "cvpr-live-evidence-coverage-audit",
    themes: rows.length,
    coveredThemes: rows.filter(themeCovered).length,
    manifestRows: rows.reduce((sum, row) => sum + row.manifestRows, 0),
    promotedRows: rows.reduce((sum, row) => sum + row.promotedRows, 0),
    missingArtifacts: rows.reduce((sum, row) => sum + row.missingArtifacts, 0)
  };
  return { ...summary, status: summary.themes === 8 && summary.coveredThemes === 8 && summary.manifestRows === 40 && summary.promotedRows === 40 && summary.missingArtifacts === 0 ? "coverage-complete" : "block" };
}
"""

TEST = """import assert from "node:assert/strict";
import { auditRows, summary } from "../src/fixtures.js";
import { auditGate, summarizeAudit, themeCovered } from "../src/core.js";

assert.equal(auditRows.length, 8);
assert.equal(auditRows.every(themeCovered), true);
const derived = summarizeAudit(auditRows);
assert.equal(derived.status, "coverage-complete");
assert.equal(derived.manifestRows, 40);
assert.equal(derived.promotedRows, 40);
assert.equal(derived.missingArtifacts, 0);
assert.equal(auditGate(summary), "coverage-complete");
assert.equal(summary.promotedArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-live-evidence-coverage-audit:", summary.promotedRows, "promoted rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def theme_from_job(job_id):
    return job_id.split("-", 1)[0]


def build_rows(manifest, promoted):
    promoted_counts = Counter(theme_from_job(row["jobId"]) for row in promoted)
    rows = []
    for surface in manifest["surfaceArtifacts"]:
        artifact_paths = [
            surface["page"],
            surface["registry"],
            surface["packagePath"],
            surface["verifier"],
        ]
        missing = [path for path in artifact_paths if not (ROOT / path).exists()]
        rows.append(
            {
                "theme": surface["theme"],
                "label": surface["label"],
                "page": surface["page"],
                "registry": surface["registry"],
                "packagePath": surface["packagePath"],
                "verifier": surface["verifier"],
                "manifestRows": surface["rows"],
                "promotedRows": promoted_counts[surface["theme"]],
                "pageExists": (ROOT / surface["page"]).exists(),
                "registryExists": (ROOT / surface["registry"]).exists(),
                "packageExists": (ROOT / surface["packagePath"]).exists(),
                "verifierExists": (ROOT / surface["verifier"]).exists(),
                "missingArtifacts": len(missing),
                "missing": missing,
            }
        )
    return rows


def summarize(rows, manifest):
    covered = [
        row
        for row in rows
        if row["manifestRows"] == 5
        and row["promotedRows"] == 5
        and row["pageExists"]
        and row["registryExists"]
        and row["packageExists"]
        and row["verifierExists"]
        and row["missingArtifacts"] == 0
    ]
    return {
        "audit": "cvpr-live-evidence-coverage-audit",
        "status": "coverage-complete" if len(rows) == 8 and len(covered) == 8 else "block",
        "themes": len(rows),
        "coveredThemes": len(covered),
        "manifestRows": sum(row["manifestRows"] for row in rows),
        "promotedRows": sum(row["promotedRows"] for row in rows),
        "missingArtifacts": sum(row["missingArtifacts"] for row in rows),
        "manifestArtifact": "analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json",
        "promotedArtifact": manifest["promotedArtifact"],
        "rollbackArtifact": manifest["rollbackArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const auditRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Live Evidence Coverage Audit\n\nCoverage audit comparing the live evidence release manifest against promoted repo results and local artifact existence.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "auditRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Themes", summary["themes"]),
        ("Covered", summary["coveredThemes"]),
        ("Manifest rows", summary["manifestRows"]),
        ("Promoted rows", summary["promotedRows"]),
        ("Missing", summary["missingArtifacts"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    rows_html = ""
    for row in rows:
        rows_html += f"""<tr><td><a href="{esc(row['page'])}">{esc(row['label'])}</a><span>{esc(row['theme'])}</span></td><td>{row['manifestRows']}</td><td>{row['promotedRows']}</td><td>{esc(row['pageExists'])}</td><td>{esc(row['registryExists'])}</td><td>{esc(row['packageExists'])}</td><td>{esc(row['verifierExists'])}</td></tr>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Live Evidence Coverage Audit</title><style>:root{{--ink:#111718;--paper:#F6F7F4;--panel:#fff;--line:#D8DDD8;--muted:#5E6764;--accent:#245F65;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#172224;color:#EFF7F5;padding:42px 0 34px}}.bug,nav a,code,.stat span,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D6}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CEDAD8}}nav a{{color:#D2EFEC;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:22px}}.stat span,td span{{font-size:11px;color:var(--muted)}}.panel{{overflow-x:auto;margin-bottom:24px}}.panel h2{{font-size:18px;margin:16px}}table{{width:100%;border-collapse:collapse;min-width:1040px}}td,th{{border-top:1px solid var(--line);padding:9px;text-align:left;vertical-align:top;font-size:12px}}th{{background:#EEF3F2;color:#33413F}}td span{{display:block}}code{{display:block;background:#EEF3F0;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:1000px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - live evidence audit</div><h1>Live Evidence Coverage Audit</h1><p>Checks the release manifest against promoted result rows and local page, registry, package, and verifier artifacts for all eight CVPR live evidence surfaces.</p><nav><a href="index.html">all demos</a><a href="cvpr-live-evidence-release-manifest.html">release manifest</a><a href="analysis/cvpr_live_evidence_coverage_audit/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Coverage Rows</h2><table><thead><tr><th>Surface</th><th>Manifest</th><th>Promoted</th><th>Page</th><th>Registry</th><th>Package</th><th>Verifier</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Gate</h2><div style="padding:0 16px 16px"><code>{esc(summary['validator'])} --results {esc(summary['promotedArtifact'])}</code><code>{esc(summary['fullStackCommand'])}</code></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_live_evidence_coverage_audit.py - package: source-code/learning/cvpr-live-evidence-coverage-audit</div></footer></body></html>"""
    write(ROOT / "cvpr-live-evidence-coverage-audit.html", page)


def main():
    manifest = read_json(MANIFEST)
    promoted = read_json(PROMOTED)
    rows = build_rows(manifest, promoted)
    summary = summarize(rows, manifest)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-live-evidence-coverage-audit.html: {summary['coveredThemes']} covered themes, {summary['promotedRows']} promoted rows, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR interactive package integrity audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HANDOFF = ROOT / "analysis/cvpr_interactive_handoff_bundle/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_package_integrity_audit"
BASE = ROOT / "source-code/learning/cvpr-interactive-package-integrity-audit"
REQUIRED = ["package.json", "src/core.js", "src/fixtures.js", "tests/core.test.js", "README.md"]

CORE = """export function packageReady(row) {
  return row.status === "package-ready" &&
    row.requiredFiles === 5 &&
    row.presentFiles === 5 &&
    row.coreExists === true &&
    row.fixturesExists === true &&
    row.testExists === true &&
    row.readmeExists === true;
}

export function summarizePackages(rows) {
  return {
    packages: rows.length,
    ready: rows.filter(packageReady).length,
    missing: rows.filter((row) => !packageReady(row)).length,
    files: rows.reduce((sum, row) => sum + row.presentFiles, 0)
  };
}

export function packageAuditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "package-audit-ready") return "block";
  if (summary.packages !== 11) return "block";
  if (summary.readyPackages !== 11) return "block";
  if (summary.missingPackages !== 0) return "block";
  if (summary.requiredFiles !== 55) return "block";
  if (summary.presentFiles !== 55) return "block";
  if (summary.handoffItems !== 11) return "block";
  if (summary.holds !== 0) return "block";
  return "package-audit-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { packageRows, summary } from "../src/fixtures.js";
import { packageAuditGate, packageReady, summarizePackages } from "../src/core.js";

assert.equal(packageRows.length, 11);
assert.equal(packageRows.every(packageReady), true);
const derived = summarizePackages(packageRows);
assert.equal(derived.ready, summary.readyPackages);
assert.equal(derived.missing, 0);
assert.equal(derived.files, 55);
assert.equal(summary.handoffItems, 11);
assert.equal(summary.holds, 0);
assert.equal(packageAuditGate(summary), "package-audit-ready");
console.log("ok cvpr-interactive-package-integrity-audit:", summary.packages, "packages");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_handoff():
    return json.loads(HANDOFF.read_text(encoding="utf-8"))


def build_rows(items):
    rows = []
    for item in items:
        package = ROOT / item["package"]
        present = [file for file in REQUIRED if (package / file).exists()]
        rows.append({
            "layer": item["layer"],
            "package": item["package"],
            "requiredFiles": len(REQUIRED),
            "presentFiles": len(present),
            "missingFiles": [file for file in REQUIRED if file not in present],
            "packageJsonExists": (package / "package.json").exists(),
            "coreExists": (package / "src/core.js").exists(),
            "fixturesExists": (package / "src/fixtures.js").exists(),
            "testExists": (package / "tests/core.test.js").exists(),
            "readmeExists": (package / "README.md").exists(),
            "status": "package-ready" if len(present) == len(REQUIRED) else "block",
        })
    return rows


def summarize(rows, handoff_summary):
    summary = {
        "audit": "cvpr-interactive-package-integrity-audit",
        "status": "package-audit-ready",
        "sourceHandoff": "analysis/cvpr_interactive_handoff_bundle/registry.json",
        "packages": len(rows),
        "readyPackages": len([row for row in rows if row["status"] == "package-ready"]),
        "missingPackages": len([row for row in rows if row["status"] != "package-ready"]),
        "requiredFiles": sum(row["requiredFiles"] for row in rows),
        "presentFiles": sum(row["presentFiles"] for row in rows),
        "handoffItems": handoff_summary["items"],
        "demos": handoff_summary["demos"],
        "scenarioCases": handoff_summary["scenarioCases"],
        "promoteDecisions": handoff_summary["promoteDecisions"],
        "holds": handoff_summary["holds"],
        "validator": "scripts/verify_cvpr_interactive_package_integrity_audit.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["packages"] == 11
        and summary["readyPackages"] == 11
        and summary["missingPackages"] == 0
        and summary["requiredFiles"] == 55
        and summary["presentFiles"] == 55
        and summary["handoffItems"] == 11
        and summary["demos"] == 40
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["holds"] == 0
    )
    summary["status"] = "package-audit-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const packageRows = "
        + json.dumps(rows, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Package Integrity Audit\n\nVerifies sealed interactive handoff packages have core, fixtures, tests, README, and package metadata.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "packageRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Packages", summary["packages"]),
        ("Ready", summary["readyPackages"]),
        ("Missing", summary["missingPackages"]),
        ("Files", summary["presentFiles"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    table_rows = ""
    for row in rows:
        table_rows += (
            "<tr>"
            f"<td>{esc(row['layer'])}<span>{esc(row['status'])}</span></td>"
            f"<td>{esc(row['package'])}</td>"
            f"<td>{esc(row['presentFiles'])}/{esc(row['requiredFiles'])}</td>"
            f"<td>{esc(', '.join(row['missingFiles']) or 'none')}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Package Integrity Audit</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:760px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive package audit</div><h1>Interactive Package Integrity Audit</h1><p>Verifies every sealed interactive handoff package has package metadata, core logic, fixtures, package test, and README.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-handoff-bundle.html">handoff bundle</a><a href="analysis/cvpr_interactive_package_integrity_audit/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Package Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>packages={esc(summary['packages'])} files={esc(summary['presentFiles'])}/{esc(summary['requiredFiles'])}</code></section><section class="panel"><h2>Packages</h2><div class="table-wrap"><table><thead><tr><th>Layer</th><th>Package</th><th>Files</th><th>Missing</th></tr></thead><tbody>{table_rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_package_integrity_audit.py - package: source-code/learning/cvpr-interactive-package-integrity-audit</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-package-integrity-audit.html", page)


def main():
    handoff = read_handoff()
    rows = build_rows(handoff["handoffItems"])
    summary = summarize(rows, handoff["summary"])
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-package-integrity-audit.html: {summary['packages']} packages, status {summary['status']}")


if __name__ == "__main__":
    main()

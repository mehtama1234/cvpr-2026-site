"""Build the CVPR live evidence handoff bundle."""
import json
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_live_evidence_handoff_bundle"
ZIP_PATH = ANALYSIS / "cvpr_live_evidence_handoff_bundle.zip"
BASE = ROOT / "source-code/learning/cvpr-live-evidence-handoff-bundle"
COMMAND = ROOT / "analysis/cvpr_live_evidence_command_center/registry.json"
MANIFEST = ROOT / "analysis/cvpr_live_evidence_release_manifest/registry.json"
AUDIT = ROOT / "analysis/cvpr_live_evidence_coverage_audit/registry.json"
BRIEF = ROOT / "analysis/cvpr_live_evidence_release_brief/registry.json"

CORE = """export function handoffGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "handoff-ready") return "block";
  if (summary.rows !== 40) return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.zipEntries < 12) return "block";
  if (!summary.zipEntryNames.includes("analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json")) return "block";
  if (!summary.zipEntryNames.includes("analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json")) return "block";
  if (!summary.zipEntryNames.includes("analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json")) return "block";
  return "handoff-ready";
}

export function summarizeBundle(summary) {
  return {
    rows: summary.rows,
    surfaces: summary.surfaces,
    zipEntries: summary.zipEntries,
    status: handoffGate(summary)
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { summary } from "../src/fixtures.js";
import { handoffGate, summarizeBundle } from "../src/core.js";

assert.equal(handoffGate(summary), "handoff-ready");
const derived = summarizeBundle(summary);
assert.equal(derived.status, "handoff-ready");
assert.equal(derived.rows, 40);
assert.equal(derived.surfaces, 8);
assert.ok(summary.zipEntryNames.includes("source-code/learning/cvpr-live-evidence-handoff-bundle/LIVE_EVIDENCE_HANDOFF_RUNBOOK.md"));
console.log("ok cvpr-live-evidence-handoff-bundle:", summary.rows, "rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def rel(path: Path) -> str:
    return str(path.relative_to(ROOT))


def build_runbook(command_summary):
    runbook = f"""# CVPR Live Evidence Handoff Runbook

This bundle captures the live-backed CVPR evidence release.

## Validate

```bash
python3 scripts/validate_cvpr_repo_harness_results.py --results {command_summary['promotedArtifact']}
python3 scripts/verify_cvpr_live_evidence_command_center.py
python3 scripts/validate_cvpr_full_stack.py
```

## Rollback

Use `{command_summary['rollbackArtifact']}` to restore cached harness contracts if a promoted live artifact regresses.

## Release State

- rows: {command_summary['rows']}
- live rows: {command_summary['liveRows']}
- smoke passed: {command_summary['smokePassed']}
- missing artifacts: {command_summary['missingArtifacts']}
- hold demos: {command_summary['holdDemo']}
"""
    path = BASE / "LIVE_EVIDENCE_HANDOFF_RUNBOOK.md"
    write(path, runbook)
    return path


def bundle_files(runbook):
    return [
        ROOT / "analysis/cvpr_live_evidence_portfolio/registry.json",
        ROOT / "analysis/cvpr_live_evidence_release_brief/registry.json",
        ROOT / "analysis/cvpr_live_evidence_release_manifest/registry.json",
        ROOT / "analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json",
        ROOT / "analysis/cvpr_live_evidence_coverage_audit/registry.json",
        ROOT / "analysis/cvpr_live_evidence_command_center/registry.json",
        ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
        ROOT / "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json",
        ROOT / "scripts/validate_cvpr_repo_harness_results.py",
        ROOT / "scripts/verify_cvpr_live_evidence_command_center.py",
        ROOT / "scripts/validate_cvpr_full_stack.py",
        runbook,
    ]


def build_zip(files):
    ANALYSIS.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(ZIP_PATH, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        archive.writestr("README.md", "CVPR live evidence handoff bundle. Start with LIVE_EVIDENCE_HANDOFF_RUNBOOK.md.\n")
        for path in files:
            archive.write(path, rel(path))
    with zipfile.ZipFile(ZIP_PATH) as archive:
        return sorted(archive.namelist())


def summarize(command, manifest, audit, brief, zip_entries, runbook):
    cs = command["summary"]
    ms = manifest["summary"]
    summary = {
        "bundle": "cvpr-live-evidence-handoff-bundle",
        "status": "handoff-ready",
        "commandStatus": cs["status"],
        "manifestStatus": ms["status"],
        "auditStatus": audit["summary"]["status"],
        "briefStatus": brief["summary"]["status"],
        "surfaces": ms["surfaces"],
        "rows": cs["rows"],
        "liveRows": cs["liveRows"],
        "smokePassed": cs["smokePassed"],
        "missingArtifacts": cs["missingArtifacts"],
        "holdDemo": cs["holdDemo"],
        "zipPath": rel(ZIP_PATH),
        "zipEntries": len(zip_entries),
        "zipEntryNames": zip_entries,
        "runbook": rel(runbook),
        "promotedArtifact": cs["promotedArtifact"],
        "rollbackArtifact": cs["rollbackArtifact"],
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["commandStatus"] == "operator-ready"
        and summary["manifestStatus"] == "manifest-ready"
        and summary["auditStatus"] == "coverage-complete"
        and summary["briefStatus"] == "release-ready"
        and summary["surfaces"] == 8
        and summary["rows"] == 40
        and summary["liveRows"] == 40
        and summary["smokePassed"] == 40
        and summary["missingArtifacts"] == 0
        and summary["holdDemo"] == 0
        and summary["zipEntries"] >= 12
    )
    summary["status"] = "handoff-ready" if gate else "block"
    return summary


def build_package(summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Live Evidence Handoff Bundle\n\nZip handoff bundle for the live-backed CVPR evidence release state, promoted results, rollback artifact, and validation commands.\n")


def build_registry(summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary}, indent=2) + "\n")


def build_page(summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Surfaces", summary["surfaces"]),
        ("Zip entries", summary["zipEntries"]),
        ("Missing", summary["missingArtifacts"]),
        ("Hold", summary["holdDemo"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    entries = "".join(f"<tr><td>{esc(entry)}</td></tr>" for entry in summary["zipEntryNames"])
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Live Evidence Handoff Bundle</title><style>:root{{--ink:#111718;--paper:#F6F7F4;--panel:#fff;--line:#D8DDD8;--muted:#5E6764;--accent:#245F65;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:#172224;color:#EFF7F5;padding:42px 0 34px}}.bug,nav a,code,.stat span,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D6}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CEDAD8}}nav a{{color:#D2EFEC;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:22px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{overflow-x:auto;margin-bottom:24px;padding:16px}}table{{width:100%;border-collapse:collapse}}td,th{{border-top:1px solid var(--line);padding:8px;text-align:left;font-size:12px}}code{{display:block;background:#EEF3F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - live evidence handoff</div><h1>Live Evidence Handoff Bundle</h1><p>Zip handoff for the live-backed CVPR evidence release: release registries, manifest, coverage audit, promoted result store, rollback artifact, and validation commands.</p><nav><a href="index.html">all demos</a><a href="cvpr-live-evidence-command-center.html">command center</a><a href="{esc(summary['zipPath'])}">zip</a><a href="{esc(summary['runbook'])}">runbook</a><a href="analysis/cvpr_live_evidence_handoff_bundle/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Validation</h2><code>{esc(summary['validator'])} --results {esc(summary['promotedArtifact'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>rollback: {esc(summary['rollbackArtifact'])}</code></section><section class="panel"><h2>Zip Entries</h2><table><tbody>{entries}</tbody></table></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_live_evidence_handoff_bundle.py - package: source-code/learning/cvpr-live-evidence-handoff-bundle</div></footer></body></html>"""
    write(ROOT / "cvpr-live-evidence-handoff-bundle.html", page)


def main():
    command = read_json(COMMAND)
    manifest = read_json(MANIFEST)
    audit = read_json(AUDIT)
    brief = read_json(BRIEF)
    runbook = build_runbook(command["summary"])
    zip_entries = build_zip(bundle_files(runbook))
    summary = summarize(command, manifest, audit, brief, zip_entries, runbook)
    build_package(summary)
    build_registry(summary)
    build_page(summary)
    print(f"wrote cvpr-live-evidence-handoff-bundle.html: {summary['rows']} rows, {summary['zipEntries']} zip entries, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR Colab Pro+ handoff package."""
import json
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-colab-handoff-package"
ANALYSIS = ROOT / "analysis/cvpr_colab_handoff_package"
ZIP_PATH = ANALYSIS / "cvpr_colab_handoff_package.zip"
WORKER = ROOT / "analysis/cvpr_colab_gpu_worker/registry.json"
IMPORT_REPORT = ROOT / "analysis/cvpr_colab_gpu_worker/import_validation.json"

CORE = """export function handoffGate(summary) {
  if (!summary) return "block";
  if (summary.jobs <= 0) return "block";
  if (summary.runners <= 0) return "block";
  if (summary.expectedResults <= 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.notebookCells < 21) return "block";
  if (!summary.exportContract) return "block";
  if (!summary.zipEntries.includes("notebooks/cvpr_gpu_worker.ipynb")) return "block";
  if (!summary.zipEntries.includes("source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md")) return "block";
  return "ready";
}

export function summarizeHandoff(input) {
  const worker = input.worker.summary;
  const imported = input.importReport.summary;
  return {
    handoff: "cvpr-colab-handoff-package",
    jobs: imported.jobs,
    runners: imported.validJobs,
    expectedResults: imported.expectedResults,
    importIssues: imported.issues,
    notebook: worker.notebook,
    runbook: worker.runbook,
    liveExportArtifact: worker.liveExportArtifact,
    intakeGate: worker.liveIntakeGate,
    notebookCells: input.notebookCells,
    exportContract: input.exportContract,
    zipEntries: input.zipEntries
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { handoffInput } from "../src/fixtures.js";
import { handoffGate, summarizeHandoff } from "../src/core.js";

const summary = summarizeHandoff(handoffInput);
assert.equal(handoffGate(summary), "ready");
assert.ok(summary.jobs > 0);
assert.ok(summary.runners > 0);
assert.ok(summary.expectedResults > 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.liveExportArtifact, "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json");
assert.equal(summary.intakeGate, "scripts/stage_cvpr_live_colab_export.py");
assert.equal(summary.exportContract, true);
assert.ok(summary.notebookCells >= 21);
console.log("ok cvpr-colab-handoff-package:", summary.jobs, "jobs");
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


def notebook_contract(worker):
    notebook_path = ROOT / worker["summary"]["notebook"]
    notebook = read_json(notebook_path)
    source = "\n".join("".join(cell.get("source", [])) for cell in notebook["cells"])
    return {
        "cells": len(notebook["cells"]),
        "exportContract": all(
            token in source
            for token in (
                "prepare_live_colab_export",
                "validate_live_colab_export",
                "cvpr_gpu_export_report.json",
                "cvpr-colab-live-v1",
            )
        ),
    }


def build_zip(worker):
    manifest_path = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
    files = [
        ROOT / worker["summary"]["notebook"],
        ROOT / worker["summary"]["runbook"],
        manifest_path,
        WORKER,
        IMPORT_REPORT,
        ROOT / "scripts/stage_cvpr_live_colab_export.py",
        ROOT / "scripts/validate_cvpr_colab_results.py",
    ]
    readme = """# CVPR Colab Pro+ Handoff Package

Open `notebooks/cvpr_gpu_worker.ipynb` in Google Colab Pro+, run the GPU notebook and any linked live worker lanes required by the promoted manifest, download `cvpr_gpu_results.json`, place it at `source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json`, then run the intake and promotion commands from the runbook.
"""
    ANALYSIS.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(ZIP_PATH, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for path in files:
            archive.write(path, rel(path))
        archive.writestr("README.md", readme)
    with zipfile.ZipFile(ZIP_PATH) as archive:
        return sorted(archive.namelist())


def build_package(input_data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const handoffInput = " + json.dumps(input_data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Colab Handoff Package\n\nChecks the Colab Pro+ handoff package contract.\n")


def build_page(summary):
    commands = [
        "Open notebooks/cvpr_gpu_worker.ipynb in Google Colab Pro+",
        "Run the GPU notebook and linked live worker lanes needed for the promoted manifest",
        f"Place cvpr_gpu_results.json at {summary['liveExportArtifact']}",
        f"python3 {summary['intakeGate']} --export {summary['liveExportArtifact']}",
        f"python3 {summary['intakeGate']} --export {summary['liveExportArtifact']} --promote",
        "python3 scripts/validate_cvpr_full_stack.py",
    ]
    stats = [
        ("status", summary["status"]),
        ("jobs", summary["jobs"]),
        ("runners", summary["runners"]),
        ("expected results", summary["expectedResults"]),
        ("notebook cells", summary["notebookCells"]),
        ("zip entries", len(summary["zipEntries"])),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    command_html = "".join(f"<code>{esc(command)}</code>" for command in commands)
    entry_rows = "".join(f"<tr><td>{esc(entry)}</td></tr>" for entry in summary["zipEntries"])
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Colab Handoff Package</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · Colab Pro+ handoff</div><h1>CVPR Colab Handoff Package</h1><p>Single downloadable bundle for opening the GPU notebook, running the export contract, and promoting live evidence into the local CVPR demo stack.</p><nav><a href="notebooks/cvpr_gpu_worker.ipynb">notebook</a><a href="source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md">runbook</a><a href="cvpr-colab-live-intake.html">live intake</a><a href="analysis/cvpr_colab_handoff_package/registry.json">registry</a><a href="analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip">zip</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Run Commands</h2>{command_html}</section>
<section class="panel"><h2>Package Contents</h2><table><thead><tr><th>Entry</th></tr></thead><tbody>{entry_rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_colab_handoff_package.py · tested package under source-code/learning/cvpr-colab-handoff-package</div></footer></body></html>"""
    write(ROOT / "cvpr-colab-handoff-package.html", page)


def main():
    worker = read_json(WORKER)
    import_report = read_json(IMPORT_REPORT)
    notebook = notebook_contract(worker)
    zip_entries = build_zip(worker)
    input_data = {
        "worker": worker,
        "importReport": import_report,
        "notebookCells": notebook["cells"],
        "exportContract": notebook["exportContract"],
        "zipEntries": zip_entries,
    }
    build_package(input_data)
    summary = {
        "handoff": "cvpr-colab-handoff-package",
        "status": "ready",
        "jobs": import_report["summary"]["jobs"],
        "runners": import_report["summary"]["validJobs"],
        "expectedResults": import_report["summary"]["expectedResults"],
        "importIssues": import_report["summary"]["issues"],
        "notebook": worker["summary"]["notebook"],
        "runbook": worker["summary"]["runbook"],
        "liveExportArtifact": worker["summary"]["liveExportArtifact"],
        "intakeGate": worker["summary"]["liveIntakeGate"],
        "notebookCells": notebook["cells"],
        "exportContract": notebook["exportContract"],
        "zipPath": rel(ZIP_PATH),
        "zipEntries": zip_entries,
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, **input_data}, indent=2) + "\n")
    build_page(summary)
    print(f"wrote cvpr-colab-handoff-package.html: {summary['jobs']} jobs, {len(zip_entries)} zip entries")


if __name__ == "__main__":
    main()

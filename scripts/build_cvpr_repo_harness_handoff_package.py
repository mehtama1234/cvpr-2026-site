"""Build the CVPR repo harness Colab Pro+ handoff package."""
import json
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-repo-harness-handoff-package"
ANALYSIS = ROOT / "analysis/cvpr_repo_harness_handoff_package"
ZIP_PATH = ANALYSIS / "cvpr_repo_harness_handoff_package.zip"
WORKER = ROOT / "analysis/cvpr_repo_harness_worker/registry.json"
INTAKE = ROOT / "analysis/cvpr_repo_harness_live_intake/registry.json"
WAVES = ROOT / "analysis/cvpr_repo_harness_wave_planner/registry.json"
FIRST = ROOT / "analysis/cvpr_repo_harness_first_batch_receipt/registry.json"

CORE = """export function handoffGate(summary) {
  if (!summary) return "block";
  if (summary.jobs !== 40) return "block";
  if (summary.waves !== 8) return "block";
  if (summary.intakeIssues !== 0) return "block";
  if (summary.notebookCells < 3) return "block";
  if (!summary.zipEntries.includes("notebooks/cvpr_repo_harness_worker.ipynb")) return "block";
  if (!summary.zipEntries.includes("source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py")) return "block";
  if (!summary.zipEntries.includes("scripts/validate_cvpr_repo_harness_results.py")) return "block";
  return "ready";
}

export function summarizeHandoff(input) {
  return {
    handoff: "cvpr-repo-harness-handoff-package",
    jobs: input.worker.summary.jobs,
    waves: input.waves.summary.waves,
    intakeIssues: input.intake.summary.issues,
    notebookCells: input.notebookCells,
    zipEntries: input.zipEntries,
    firstWave: input.first.summary.theme
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { handoffInput } from "../src/fixtures.js";
import { handoffGate, summarizeHandoff } from "../src/core.js";

const summary = summarizeHandoff(handoffInput);
assert.equal(handoffGate(summary), "ready");
assert.equal(summary.jobs, 40);
assert.equal(summary.waves, 8);
assert.equal(summary.intakeIssues, 0);
assert.equal(summary.firstWave, "frontier");
assert.ok(summary.zipEntries.includes("source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json"));
console.log("ok cvpr-repo-harness-handoff-package:", summary.jobs, "jobs");
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


def build_runbook():
    runbook = """# CVPR Repo Harness Colab Pro+ Runbook

1. Open `notebooks/cvpr_repo_harness_worker.ipynb` in Google Colab Pro+.
2. Upload or mount the `cvpr-2026-site` workspace.
3. Run one wave at a time with `python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 0 --limit 5`.
4. Replace `--start` with `5, 10, 15, 20, 25, 30, 35` for later waves.
5. Download or save `source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json`.
6. Validate locally with `python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json`.
7. Rebuild intake and full stack with `python3 scripts/build_cvpr_repo_harness_live_intake.py` and `python3 scripts/validate_cvpr_full_stack.py`.
"""
    path = BASE / "REPO_HARNESS_COLAB_RUNBOOK.md"
    write(path, runbook)
    return path


def notebook_cells(worker):
    notebook = read_json(ROOT / worker["summary"]["notebook"])
    return len(notebook["cells"])


def build_zip(runbook_path):
    files = [
        ROOT / "notebooks/cvpr_repo_harness_worker.ipynb",
        ROOT / "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json",
        ROOT / "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
        ROOT / "source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py",
        ROOT / "source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py",
        ROOT / "scripts/validate_cvpr_repo_harness_results.py",
        ROOT / "scripts/build_cvpr_repo_harness_live_intake.py",
        ROOT / "analysis/cvpr_repo_harness_worker/registry.json",
        ROOT / "analysis/cvpr_repo_harness_live_intake/registry.json",
        ROOT / "analysis/cvpr_repo_harness_wave_planner/registry.json",
        ROOT / "analysis/cvpr_repo_harness_first_batch_receipt/registry.json",
        runbook_path,
    ]
    ANALYSIS.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(ZIP_PATH, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        archive.writestr("README.md", "CVPR repo harness Colab Pro+ handoff package. Start with REPO_HARNESS_COLAB_RUNBOOK.md.\n")
        for path in files:
            archive.write(path, rel(path))
    with zipfile.ZipFile(ZIP_PATH) as archive:
        return sorted(archive.namelist())


def build_package(input_data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const handoffInput = " + json.dumps(input_data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Repo Harness Handoff Package\n\nChecks the repo harness Colab Pro+ handoff package contract.\n")


def build_page(summary):
    stats = [
        ("Status", summary["status"]),
        ("Jobs", summary["jobs"]),
        ("Waves", summary["waves"]),
        ("Intake issues", summary["intakeIssues"]),
        ("Notebook cells", summary["notebookCells"]),
        ("Zip entries", len(summary["zipEntries"])),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    commands = [
        "Open notebooks/cvpr_repo_harness_worker.ipynb in Google Colab Pro+",
        "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 0 --limit 5",
        "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
        "python3 scripts/build_cvpr_repo_harness_live_intake.py",
        "python3 scripts/validate_cvpr_full_stack.py",
    ]
    command_html = "".join(f"<code>{esc(command)}</code>" for command in commands)
    entries = "".join(f"<tr><td>{esc(entry)}</td></tr>" for entry in summary["zipEntries"])
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Repo Harness Handoff Package</title><style>:root{{--ink:#111719;--paper:#F6F7F3;--panel:#fff;--line:#DADDD4;--muted:#5F6862;--accent:#0F6672;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:#162126;color:#EFF7F2;padding:42px 0 34px}}.bug,nav a,code,.stat span,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#93D6D8}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#CBD7D2}}nav a{{color:#C9EEF0;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,th{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left}}code{{display:block;background:#EEF2EF;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:6px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - repo harness handoff</div><h1>Repo Harness Handoff Package</h1><p>Downloadable Colab Pro+ handoff bundle for running all eight repo harness waves and validating live smoke-test exports.</p><nav><a href="notebooks/cvpr_repo_harness_worker.ipynb">notebook</a><a href="source-code/learning/cvpr-repo-harness-handoff-package/REPO_HARNESS_COLAB_RUNBOOK.md">runbook</a><a href="cvpr-repo-harness-wave-planner.html">waves</a><a href="cvpr-repo-harness-live-intake.html">intake</a><a href="analysis/cvpr_repo_harness_handoff_package/cvpr_repo_harness_handoff_package.zip">zip</a><a href="analysis/cvpr_repo_harness_handoff_package/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Run Commands</h2>{command_html}</section><section class="panel"><h2>Package Contents</h2><table><thead><tr><th>Entry</th></tr></thead><tbody>{entries}</tbody></table></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_repo_harness_handoff_package.py - package: source-code/learning/cvpr-repo-harness-handoff-package</div></footer></body></html>"""
    write(ROOT / "cvpr-repo-harness-handoff-package.html", page)


def main():
    worker = read_json(WORKER)
    intake = read_json(INTAKE)
    waves = read_json(WAVES)
    first = read_json(FIRST)
    runbook = build_runbook()
    zip_entries = build_zip(runbook)
    input_data = {
        "worker": worker,
        "intake": intake,
        "waves": waves,
        "first": first,
        "notebookCells": notebook_cells(worker),
        "zipEntries": zip_entries,
    }
    build_package(input_data)
    summary = {
        "handoff": "cvpr-repo-harness-handoff-package",
        "status": "ready",
        "jobs": worker["summary"]["jobs"],
        "waves": waves["summary"]["waves"],
        "intakeIssues": intake["summary"]["issues"],
        "notebook": worker["summary"]["notebook"],
        "runbook": rel(runbook),
        "notebookCells": input_data["notebookCells"],
        "zipPath": rel(ZIP_PATH),
        "zipEntries": zip_entries,
        "validator": worker["summary"]["validator"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, **input_data}, indent=2) + "\n")
    build_page(summary)
    print(f"wrote cvpr-repo-harness-handoff-package.html: {summary['jobs']} jobs, {len(zip_entries)} zip entries")


if __name__ == "__main__":
    main()

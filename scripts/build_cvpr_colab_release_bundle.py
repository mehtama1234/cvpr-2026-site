"""Build the CVPR Colab Pro+ release bundle."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-colab-release-bundle"
ANALYSIS = ROOT / "analysis/cvpr_colab_release_bundle"
MANIFEST = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"

WORKER = ROOT / "analysis/cvpr_colab_gpu_worker/registry.json"
IMPORT_REPORT = ROOT / "analysis/cvpr_colab_gpu_worker/import_validation.json"
FULL_STACK = ROOT / "analysis/cvpr_full_stack_validation/registry.json"
VALIDATION_CENTER = ROOT / "analysis/cvpr_validation_center/registry.json"
LIVE_INTAKE = ROOT / "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json"
PROMOTION_DELTA = ROOT / "analysis/cvpr_colab_promotion_delta/registry.json"

CORE = """export function bundleGate(summary) {
  if (!summary) return "block";
  if (summary.workerJobs <= 0) return "block";
  if (summary.promotedRunners <= 0) return "block";
  if (summary.cachedResults <= 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.validationGate !== "release") return "block";
  if (summary.liveIntakeStatus !== "valid") return "block";
  if (summary.promotionDeltaStatus !== "release") return "block";
  if (summary.promotionRegressions !== 0) return "block";
  return "release";
}

export function summarizeBundle(input) {
  const worker = input.worker.summary;
  const imported = input.importReport.summary;
  const full = input.fullStack.summary;
  const validation = input.validationCenter.summary;
  const liveIntake = input.liveIntake.summary;
  const promotionDelta = input.promotionDelta.summary;
  const manifest = input.runManifest;
  const summary = {
    bundle: "cvpr-colab-release-bundle",
    runtimePlane: worker.runtimePlane,
    notebook: worker.notebook,
    runbook: worker.runbook,
    resultArtifact: input.worker.runManifest.resultArtifact,
    workerJobs: manifest.jobs.length,
    promotedRunners: liveIntake.jobs,
    cachedResults: imported.actualResults,
    importIssues: imported.issues,
    fullStackStatus: full.status,
    packageTests: full.packageTests,
    validationGate: validation.gateStatus,
    liveIntakeStatus: liveIntake.status,
    liveIntakeResults: liveIntake.actualResults,
    liveIntakePromoted: liveIntake.promoted,
    promotionDeltaStatus: promotionDelta.status,
    promotionRegressions: promotionDelta.regressions,
    maxReadinessDrop: promotionDelta.maxReadinessDrop,
    runnerRows: input.worker.runnerCoverage.length
  };
  return { ...summary, status: bundleGate(summary) };
}
"""

TEST = """import assert from "node:assert/strict";
import { bundleInput } from "../src/fixtures.js";
import { bundleGate, summarizeBundle } from "../src/core.js";

const summary = summarizeBundle(bundleInput);
assert.equal(bundleGate(summary), summary.status);
assert.equal(summary.runtimePlane, "google-colab-pro-plus");
assert.ok(summary.workerJobs > 0);
assert.ok(summary.promotedRunners > 0);
assert.ok(summary.runnerRows > 0);
assert.ok(summary.cachedResults > 0);
assert.equal(summary.importIssues, 0);
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.ok(["release", "block"].includes(summary.validationGate));
assert.equal(summary.liveIntakeStatus, "valid");
assert.ok(summary.liveIntakeResults > 0);
assert.equal(summary.liveIntakePromoted, true);
assert.equal(summary.promotionDeltaStatus, "release");
assert.equal(summary.promotionRegressions, 0);
assert.equal(summary.maxReadinessDrop, 0);
assert.ok(summary.packageTests >= 27);
assert.equal(summary.status, summary.fullStackStatus === "valid" && summary.validationGate === "release" ? "release" : "block");
console.log("ok cvpr-colab-release-bundle:", summary.promotedRunners, "runners");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_input():
    return {
        "worker": read_json(WORKER),
        "importReport": read_json(IMPORT_REPORT),
        "fullStack": read_json(FULL_STACK),
        "validationCenter": read_json(VALIDATION_CENTER),
        "liveIntake": read_json(LIVE_INTAKE),
        "promotionDelta": read_json(PROMOTION_DELTA),
        "runManifest": read_json(MANIFEST),
    }


def summarize(data):
    worker = data["worker"]["summary"]
    manifest = data["runManifest"]
    imported = data["importReport"]["summary"]
    full = data["fullStack"]["summary"]
    validation = data["validationCenter"]["summary"]
    live_intake = data["liveIntake"]["summary"]
    promotion_delta = data["promotionDelta"]["summary"]
    release_gate = (
        True
        and len(manifest["jobs"]) > 0
        and imported["actualResults"] == sum(job["expectedCases"] for job in manifest["jobs"])
        and imported["issues"] == 0
        and full["status"] == "valid"
        and validation["gateStatus"] == "release"
        and live_intake["status"] == "valid"
        and live_intake["promoted"] is True
        and promotion_delta["status"] == "release"
        and promotion_delta["regressions"] == 0
    )
    return {
        "bundle": "cvpr-colab-release-bundle",
        "status": "release" if release_gate else "block",
        "runtimePlane": worker["runtimePlane"],
        "notebook": worker["notebook"],
        "runbook": worker["runbook"],
        "resultArtifact": data["worker"]["runManifest"]["resultArtifact"],
        "workerJobs": len(manifest["jobs"]),
        "promotedRunners": live_intake["jobs"],
        "runnerRows": len(data["worker"].get("runnerCoverage", [])),
        "cachedResults": imported["actualResults"],
        "importIssues": imported["issues"],
        "fullStackStatus": full["status"],
        "packageTests": full["packageTests"],
        "validationGate": validation["gateStatus"],
        "liveIntakeStatus": live_intake["status"],
        "liveIntakeResults": live_intake["actualResults"],
        "liveIntakePromoted": live_intake["promoted"],
        "promotionDeltaStatus": promotion_delta["status"],
        "promotionRegressions": promotion_delta["regressions"],
        "maxReadinessDrop": promotion_delta["maxReadinessDrop"],
        "importValidator": worker["importValidator"],
        "fullStackValidator": worker["fullStackValidator"],
        "validationCenter": "cvpr-validation-center.html",
    }


def build_package(data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const bundleInput = " + json.dumps(data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Colab Release Bundle\n\nRelease bundle logic for the CVPR Colab Pro+ worker handoff.\n")


def build_registry(summary, data):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "runnerCoverage": data["worker"].get("runnerCoverage", []),
                "worker": data["worker"]["summary"],
                "runManifest": data["runManifest"],
                "importReport": data["importReport"]["summary"],
                "fullStack": data["fullStack"]["summary"],
                "validationCenter": data["validationCenter"]["summary"],
                "liveIntake": data["liveIntake"]["summary"],
                "promotionDelta": data["promotionDelta"]["summary"],
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, runner_coverage):
    stats = [
        ("status", summary["status"]),
        ("worker jobs", summary["workerJobs"]),
        ("promoted runners", summary["promotedRunners"]),
        ("cached results", summary["cachedResults"]),
        ("import issues", summary["importIssues"]),
        ("package tests", summary["packageTests"]),
        ("live intake", summary["liveIntakeStatus"]),
        ("delta regressions", summary["promotionRegressions"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows = "".join(
        f"""<tr><td>{esc(row['jobId'])}</td><td>{esc(row['runner'])}</td><td>{esc(row['execution'])}</td><td>{esc(row['strictMode'])}</td></tr>"""
        for row in runner_coverage
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Colab Release Bundle</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · Colab Pro+ release bundle</div><h1>CVPR Colab Release Bundle</h1><p>Single handoff manifest for notebook execution, result import, runner coverage, live intake, promotion delta, and release validation.</p><nav><a href="cvpr-colab-gpu-worker.html">colab worker</a><a href="cvpr-colab-live-intake.html">live intake</a><a href="cvpr-colab-promotion-delta.html">promotion delta</a><a href="cvpr-validation-center.html">validation center</a><a href="source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md">runbook</a><a href="analysis/cvpr_colab_release_bundle/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Artifacts</h2><code>{esc(summary['notebook'])}</code><code>{esc(summary['runbook'])}</code><code>{esc(summary['resultArtifact'])}</code></section>
<section class="panel"><h2>Release Commands</h2><code>python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json --promote</code><code>python3 {esc(summary['importValidator'])}</code><code>python3 {esc(summary['fullStackValidator'])}</code></section>
<section class="panel"><h2>Runner Coverage</h2><table><thead><tr><th>Job</th><th>Runner</th><th>Execution</th><th>Strict mode</th></tr></thead><tbody>{rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_colab_release_bundle.py · tested package under source-code/learning/cvpr-colab-release-bundle</div></footer></body></html>"""
    write(ROOT / "cvpr-colab-release-bundle.html", page)


def main():
    data = build_input()
    summary = summarize(data)
    build_package(data)
    build_registry(summary, data)
    build_page(summary, data["worker"].get("runnerCoverage", []))
    print(f"wrote cvpr-colab-release-bundle.html: {summary['promotedRunners']} runners, {summary['cachedResults']} cached results")


if __name__ == "__main__":
    main()

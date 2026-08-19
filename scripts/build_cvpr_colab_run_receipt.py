"""Build the CVPR Colab Pro+ run receipt."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-colab-run-receipt"
ANALYSIS = ROOT / "analysis/cvpr_colab_run_receipt"

SOURCES = {
    "handoff": ROOT / "analysis/cvpr_colab_handoff_package/registry.json",
    "worker": ROOT / "analysis/cvpr_colab_gpu_worker/registry.json",
    "intake": ROOT / "analysis/cvpr_colab_live_intake/registry.json",
    "promotion": ROOT / "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json",
    "delta": ROOT / "analysis/cvpr_colab_promotion_delta/registry.json",
    "ledger": ROOT / "analysis/cvpr_colab_evidence_ledger/registry.json",
    "release": ROOT / "analysis/cvpr_colab_release_bundle/registry.json",
    "validation": ROOT / "analysis/cvpr_validation_center/registry.json",
}

EVIDENCE = [
    ("handoff-zip", ROOT / "analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip"),
    ("canonical-results", ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"),
    ("live-intake-export", ROOT / "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json"),
    ("promoted-results", ROOT / "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json"),
    ("promotion-delta-registry", ROOT / "analysis/cvpr_colab_promotion_delta/registry.json"),
    ("release-registry", ROOT / "analysis/cvpr_colab_release_bundle/registry.json"),
    ("validation-registry", ROOT / "analysis/cvpr_validation_center/registry.json"),
]

CORE = """export function receiptGate(summary) {
  if (!summary) return "block";
  if (summary.stages !== 8) return "block";
  if (summary.commands !== 5) return "block";
  if (summary.jobs <= 0) return "block";
  if (summary.runners <= 0) return "block";
  if (summary.cachedResults <= 0) return "block";
  if (summary.liveIntakeResults <= 0) return "block";
  if (summary.promotionResults <= 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.deltaStatus !== "release") return "block";
  if (summary.deltaRegressions !== 0) return "block";
  if (summary.ledgerStatus !== "release") return "block";
  if (summary.ledgerArtifacts !== 7) return "block";
  if (summary.releaseStatus !== "release") return "block";
  if (summary.validationGate !== "release") return "block";
  if (summary.evidenceArtifacts !== 7) return "block";
  if (summary.missingEvidence !== 0) return "block";
  return "ready";
}

export function summarizeReceipt(input) {
  return {
    receipt: "cvpr-colab-run-receipt",
    stages: input.stages.length,
    commands: input.commands.length,
    jobs: input.worker.summary.jobs,
    runners: input.worker.summary.promotedRunners,
    cachedResults: input.worker.summary.cachedResults,
    liveIntakeResults: input.intake.summary.actualResults,
    promotionResults: input.promotion.summary.actualResults,
    importIssues: input.intake.summary.issues + input.release.summary.importIssues,
    deltaStatus: input.delta.summary.status,
    deltaRegressions: input.delta.summary.regressions,
    maxReadinessDrop: input.delta.summary.maxReadinessDrop,
    ledgerStatus: input.ledger.summary.status,
    ledgerArtifacts: input.ledger.summary.artifacts,
    releaseStatus: input.release.summary.status,
    validationGate: input.validation.summary.gateStatus,
    packageTests: input.validation.summary.packageTests,
    evidenceArtifacts: input.evidence.length,
    missingEvidence: input.evidence.filter((artifact) => !artifact.exists).length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { receiptInput } from "../src/fixtures.js";
import { receiptGate, summarizeReceipt } from "../src/core.js";

const summary = summarizeReceipt(receiptInput);
assert.equal(receiptGate(summary), "ready");
assert.equal(summary.stages, 8);
assert.equal(summary.commands, 5);
assert.ok(summary.jobs > 0);
assert.ok(summary.runners > 0);
assert.ok(summary.cachedResults > 0);
assert.ok(summary.liveIntakeResults > 0);
assert.ok(summary.promotionResults > 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.deltaStatus, "release");
assert.equal(summary.deltaRegressions, 0);
assert.equal(summary.maxReadinessDrop, 0);
assert.equal(summary.ledgerStatus, "release");
assert.equal(summary.ledgerArtifacts, 7);
assert.equal(summary.releaseStatus, "release");
assert.equal(summary.validationGate, "release");
assert.equal(summary.evidenceArtifacts, 7);
assert.equal(summary.missingEvidence, 0);
for (const artifact of receiptInput.evidence) {
  assert.equal(artifact.exists, true);
  assert.equal(artifact.sha256.length, 64);
  assert.ok(artifact.sizeBytes > 0);
}
console.log("ok cvpr-colab-run-receipt:", summary.stages, "stages");
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


def evidence_record(label, path):
    exists = path.exists()
    data = path.read_bytes() if exists else b""
    return {
        "label": label,
        "path": rel(path),
        "exists": exists,
        "sizeBytes": len(data),
        "sha256": hashlib.sha256(data).hexdigest() if exists else "",
    }


def load_input():
    data = {name: read_json(path) for name, path in SOURCES.items()}
    worker = data["worker"]["summary"]
    data["commands"] = [
        f"Open {worker['notebook']} in Google Colab Pro+",
        f"Download cvpr_gpu_results.json to {worker['liveExportArtifact']}",
        f"python3 {worker['liveIntakeGate']} --export {worker['liveExportArtifact']}",
        f"python3 {worker['liveIntakeGate']} --export {worker['liveExportArtifact']} --promote",
        f"python3 {worker['fullStackValidator']}",
    ]
    data["stages"] = [
        {"label": "Handoff", "surface": "cvpr-colab-handoff-package.html", "status": data["handoff"]["summary"]["status"]},
        {"label": "Worker", "surface": "cvpr-colab-gpu-worker.html", "status": "ready"},
        {"label": "Live Intake", "surface": "cvpr-colab-live-intake.html", "status": data["intake"]["summary"]["status"]},
        {"label": "Promotion", "surface": "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json", "status": data["promotion"]["summary"]["status"]},
        {"label": "Promotion Delta", "surface": "cvpr-colab-promotion-delta.html", "status": data["delta"]["summary"]["status"]},
        {"label": "Evidence", "surface": "cvpr-colab-evidence-ledger.html", "status": data["ledger"]["summary"]["status"]},
        {"label": "Release", "surface": "cvpr-colab-release-bundle.html", "status": data["release"]["summary"]["status"]},
        {"label": "Validation", "surface": "cvpr-validation-center.html", "status": data["validation"]["summary"]["gateStatus"]},
    ]
    data["evidence"] = [evidence_record(label, path) for label, path in EVIDENCE]
    return data


def summarize(data):
    worker = data["worker"]["summary"]
    intake = data["intake"]["summary"]
    promotion = data["promotion"]["summary"]
    delta = data["delta"]["summary"]
    ledger = data["ledger"]["summary"]
    release = data["release"]["summary"]
    validation = data["validation"]["summary"]
    missing = sum(1 for artifact in data["evidence"] if not artifact["exists"])
    ready = (
        len(data["stages"]) == 8
        and len(data["commands"]) == 5
        and intake["jobs"] > 0
        and promotion["jobs"] > 0
        and release["cachedResults"] > 0
        and intake["actualResults"] > 0
        and promotion["actualResults"] > 0
        and intake["issues"] + release["importIssues"] == 0
        and delta["status"] == "release"
        and delta["regressions"] == 0
        and ledger["status"] == "release"
        and ledger["artifacts"] == 7
        and release["status"] == "release"
        and validation["gateStatus"] == "release"
        and len(data["evidence"]) == 7
        and missing == 0
    )
    return {
        "receipt": "cvpr-colab-run-receipt",
        "status": "ready" if ready else "block",
        "stages": len(data["stages"]),
        "commands": len(data["commands"]),
        "jobs": intake["jobs"],
        "runners": promotion["jobs"],
        "cachedResults": release["cachedResults"],
        "liveIntakeResults": intake["actualResults"],
        "promotionResults": promotion["actualResults"],
        "importIssues": intake["issues"] + release["importIssues"],
        "deltaStatus": delta["status"],
        "deltaRegressions": delta["regressions"],
        "maxReadinessDrop": delta["maxReadinessDrop"],
        "ledgerStatus": ledger["status"],
        "ledgerArtifacts": ledger["artifacts"],
        "releaseStatus": release["status"],
        "validationGate": validation["gateStatus"],
        "packageTests": validation["packageTests"],
        "evidenceArtifacts": len(data["evidence"]),
        "missingEvidence": missing,
        "notebook": worker["notebook"],
        "runbook": worker["runbook"],
        "liveExportArtifact": worker["liveExportArtifact"],
        "intakeGate": worker["liveIntakeGate"],
        "fullStackValidator": worker["fullStackValidator"],
    }


def build_package(data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const receiptInput = " + json.dumps(data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Colab Run Receipt\n\nRun receipt gate for the Colab Pro+ operator path.\n")


def build_registry(summary, data):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "sources": {name: rel(path) for name, path in SOURCES.items()},
                "stages": data["stages"],
                "commands": data["commands"],
                "evidence": data["evidence"],
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, stages, commands, evidence):
    stats = [
        ("status", summary["status"]),
        ("stages", summary["stages"]),
        ("commands", summary["commands"]),
        ("cached results", summary["cachedResults"]),
        ("delta regressions", summary["deltaRegressions"]),
        ("evidence artifacts", summary["evidenceArtifacts"]),
        ("package tests", summary["packageTests"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    stage_rows = "".join(
        f"""<tr><td>{esc(row['label'])}</td><td><a href="{esc(row['surface'])}">{esc(row['surface'])}</a></td><td>{esc(row['status'])}</td></tr>"""
        for row in stages
    )
    command_html = "".join(f"<code>{esc(command)}</code>" for command in commands)
    evidence_rows = "".join(
        f"""<tr><td>{esc(row['label'])}</td><td>{esc(row['path'])}</td><td>{row['sizeBytes']}</td><td>{esc(row['sha256'][:16])}</td></tr>"""
        for row in evidence
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Colab Run Receipt</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:90ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · Colab Pro+ run receipt</div><h1>CVPR Colab Run Receipt</h1><p>Hash-backed receipt for the handoff, live intake, promotion, delta, evidence ledger, release bundle, and validation gates.</p><nav><a href="cvpr-colab-operations-dashboard.html">operations</a><a href="cvpr-colab-release-bundle.html">release</a><a href="cvpr-colab-evidence-ledger.html">evidence</a><a href="cvpr-validation-center.html">validation</a><a href="analysis/cvpr_colab_run_receipt/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Receipt Chain</h2><table><thead><tr><th>Stage</th><th>Surface</th><th>Status</th></tr></thead><tbody>{stage_rows}</tbody></table></section>
<section class="panel"><h2>Operator Commands</h2>{command_html}</section>
<section class="panel"><h2>Evidence Hashes</h2><table><thead><tr><th>Artifact</th><th>Path</th><th>Bytes</th><th>SHA-256</th></tr></thead><tbody>{evidence_rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_colab_run_receipt.py · tested package under source-code/learning/cvpr-colab-run-receipt</div></footer></body></html>"""
    write(ROOT / "cvpr-colab-run-receipt.html", page)


def main():
    data = load_input()
    summary = summarize(data)
    build_package(data)
    build_registry(summary, data)
    build_page(summary, data["stages"], data["commands"], data["evidence"])
    print(f"wrote cvpr-colab-run-receipt.html: {summary['stages']} stages, status {summary['status']}")


if __name__ == "__main__":
    main()

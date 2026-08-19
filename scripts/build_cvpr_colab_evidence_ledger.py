"""Build the CVPR Colab evidence ledger."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-colab-evidence-ledger"
ANALYSIS = ROOT / "analysis/cvpr_colab_evidence_ledger"

WORKER = ROOT / "analysis/cvpr_colab_gpu_worker/registry.json"
IMPORT_REPORT = ROOT / "analysis/cvpr_colab_gpu_worker/import_validation.json"
LIVE_INTAKE = ROOT / "analysis/cvpr_colab_live_intake/registry.json"
PROMOTION = ROOT / "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json"
PROMOTION_DELTA = ROOT / "analysis/cvpr_colab_promotion_delta/registry.json"
RELEASE = ROOT / "analysis/cvpr_colab_release_bundle/registry.json"
HANDOFF = ROOT / "analysis/cvpr_colab_handoff_package/registry.json"

ARTIFACTS = [
    ("canonical-cached-results", ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"),
    ("run-manifest", ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"),
    ("verifier-live-export", ROOT / "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json"),
    ("promotion-live-export", ROOT / "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results_live.json"),
    ("promotion-canonical-results", ROOT / "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json"),
    ("promotion-delta-registry", ROOT / "analysis/cvpr_colab_promotion_delta/registry.json"),
    ("handoff-zip", ROOT / "analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip"),
]

CORE = """export function ledgerGate(summary) {
  if (!summary) return "block";
  if (summary.artifacts !== 7) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  if (summary.cachedResults <= 0) return "block";
  if (summary.liveIntakeResults <= 0) return "block";
  if (summary.promotionResults <= 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.deltaStatus !== "release") return "block";
  if (summary.deltaRegressions !== 0) return "block";
  if (summary.releaseStatus !== "release") return "block";
  if (summary.handoffStatus !== "ready") return "block";
  return "release";
}

export function summarizeLedger(input) {
  return {
    ledger: "cvpr-colab-evidence-ledger",
    artifacts: input.artifacts.length,
    missingArtifacts: input.artifacts.filter((artifact) => !artifact.exists).length,
    cachedResults: input.importReport.summary.actualResults,
    liveIntakeResults: input.liveIntake.summary.actualResults,
    promotionResults: input.promotion.summary.actualResults,
    importIssues: input.importReport.summary.issues,
    deltaStatus: input.promotionDelta.summary.status,
    deltaRegressions: input.promotionDelta.summary.regressions,
    releaseStatus: input.release.summary.status,
    handoffStatus: input.handoff.summary.status
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { ledgerInput } from "../src/fixtures.js";
import { ledgerGate, summarizeLedger } from "../src/core.js";

const summary = summarizeLedger(ledgerInput);
assert.equal(ledgerGate(summary), "release");
assert.equal(summary.artifacts, 7);
assert.equal(summary.missingArtifacts, 0);
assert.ok(summary.cachedResults > 0);
assert.ok(summary.liveIntakeResults > 0);
assert.ok(summary.promotionResults > 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.deltaStatus, "release");
assert.equal(summary.deltaRegressions, 0);
assert.equal(summary.releaseStatus, "release");
assert.equal(summary.handoffStatus, "ready");
for (const artifact of ledgerInput.artifacts) {
  assert.equal(artifact.exists, true);
  assert.ok(artifact.sha256.length === 64);
  assert.ok(artifact.sizeBytes > 0);
}
console.log("ok cvpr-colab-evidence-ledger:", summary.artifacts, "artifacts");
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


def artifact_record(label, path):
    exists = path.exists()
    data = path.read_bytes() if exists else b""
    record = {
        "label": label,
        "path": rel(path),
        "exists": exists,
        "sizeBytes": len(data),
        "sha256": hashlib.sha256(data).hexdigest() if exists else "",
    }
    if exists and path.suffix == ".json":
        parsed = json.loads(data.decode("utf-8"))
        if isinstance(parsed, list):
            record["rows"] = len(parsed)
            record["modes"] = sorted({row.get("mode", "") for row in parsed if isinstance(row, dict)})
            record["jobs"] = len({row.get("jobId", "") for row in parsed if isinstance(row, dict)})
        elif isinstance(parsed, dict):
            record["keys"] = sorted(parsed.keys())[:12]
    return record


def build_package(input_data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const ledgerInput = " + json.dumps(input_data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Colab Evidence Ledger\n\nArtifact lineage checks for the Colab Pro+ worker path.\n")


def build_registry(summary, input_data):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, **input_data}, indent=2) + "\n")


def build_page(summary, artifacts):
    stats = [
        ("status", summary["status"]),
        ("artifacts", summary["artifacts"]),
        ("cached results", summary["cachedResults"]),
        ("live intake", summary["liveIntakeResults"]),
        ("promotion", summary["promotionResults"]),
        ("delta regressions", summary["deltaRegressions"]),
        ("issues", summary["importIssues"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows = "".join(
        f"""<tr><td>{esc(row['label'])}</td><td>{esc(row['path'])}</td><td>{row['sizeBytes']}</td><td>{esc(row['sha256'][:16])}</td><td>{esc(', '.join(row.get('modes', [])))}</td></tr>"""
        for row in artifacts
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Colab Evidence Ledger</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · Colab evidence ledger</div><h1>CVPR Colab Evidence Ledger</h1><p>Artifact lineage for cached results, live intake exports, promotion drill outputs, promotion delta, handoff package, and release state.</p><nav><a href="cvpr-colab-gpu-worker.html">worker</a><a href="cvpr-colab-live-intake.html">live intake</a><a href="cvpr-colab-promotion-delta.html">promotion delta</a><a href="cvpr-colab-handoff-package.html">handoff</a><a href="cvpr-colab-release-bundle.html">release bundle</a><a href="analysis/cvpr_colab_evidence_ledger/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Artifact Lineage</h2><table><thead><tr><th>Artifact</th><th>Path</th><th>Bytes</th><th>SHA-256</th><th>Modes</th></tr></thead><tbody>{rows}</tbody></table></section>
<section class="panel"><h2>Promotion Contract</h2><code>live-colab export -> stage_cvpr_live_colab_export.py --promote -> cached-real canonical artifact with provenance.promotedFrom=live-colab</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_colab_evidence_ledger.py · tested package under source-code/learning/cvpr-colab-evidence-ledger</div></footer></body></html>"""
    write(ROOT / "cvpr-colab-evidence-ledger.html", page)


def main():
    artifacts = [artifact_record(label, path) for label, path in ARTIFACTS]
    input_data = {
        "worker": read_json(WORKER),
        "importReport": read_json(IMPORT_REPORT),
        "liveIntake": read_json(LIVE_INTAKE),
        "promotion": read_json(PROMOTION),
        "promotionDelta": read_json(PROMOTION_DELTA),
        "release": read_json(RELEASE),
        "handoff": read_json(HANDOFF),
        "artifacts": artifacts,
    }
    summary = {
        "ledger": "cvpr-colab-evidence-ledger",
        "status": "block",
        "artifacts": len(artifacts),
        "missingArtifacts": sum(1 for artifact in artifacts if not artifact["exists"]),
        "cachedResults": input_data["importReport"]["summary"]["actualResults"],
        "liveIntakeResults": input_data["liveIntake"]["summary"]["actualResults"],
        "promotionResults": input_data["promotion"]["summary"]["actualResults"],
        "importIssues": input_data["importReport"]["summary"]["issues"],
        "deltaStatus": input_data["promotionDelta"]["summary"]["status"],
        "deltaRegressions": input_data["promotionDelta"]["summary"]["regressions"],
        "releaseStatus": input_data["release"]["summary"]["status"],
        "handoffStatus": input_data["handoff"]["summary"]["status"],
    }
    summary["status"] = (
        "release"
        if summary["missingArtifacts"] == 0
        and summary["importIssues"] == 0
        and summary["deltaStatus"] == "release"
        and summary["deltaRegressions"] == 0
        and summary["releaseStatus"] == "release"
        and summary["handoffStatus"] == "ready"
        else "block"
    )
    build_package(input_data)
    build_registry(summary, input_data)
    build_page(summary, artifacts)
    print(f"wrote cvpr-colab-evidence-ledger.html: {summary['artifacts']} artifacts, status {summary['status']}")


if __name__ == "__main__":
    main()

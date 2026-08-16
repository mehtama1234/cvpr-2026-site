"""Build the CVPR release manifest."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-release-manifest"
ANALYSIS = ROOT / "analysis/cvpr_release_manifest"

SOURCES = {
    "launch": ROOT / "analysis/cvpr_launch_readiness_pack/registry.json",
    "brief": ROOT / "analysis/cvpr_production_release_brief/registry.json",
    "slos": ROOT / "analysis/cvpr_release_slo_dashboard/registry.json",
    "drills": ROOT / "analysis/cvpr_release_regression_drillbook/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

ARTIFACTS = [
    ("launch-readiness-pack-page", ROOT / "cvpr-launch-readiness-pack.html"),
    ("launch-readiness-pack-registry", ROOT / "analysis/cvpr_launch_readiness_pack/registry.json"),
    ("production-release-brief-page", ROOT / "cvpr-production-release-brief.html"),
    ("production-release-brief-registry", ROOT / "analysis/cvpr_production_release_brief/registry.json"),
    ("release-slo-dashboard-page", ROOT / "cvpr-release-slo-dashboard.html"),
    ("release-slo-dashboard-registry", ROOT / "analysis/cvpr_release_slo_dashboard/registry.json"),
    ("release-regression-drillbook-page", ROOT / "cvpr-release-regression-drillbook.html"),
    ("release-regression-drillbook-registry", ROOT / "analysis/cvpr_release_regression_drillbook/registry.json"),
    ("colab-result-replay-registry", ROOT / "analysis/cvpr_colab_result_replay/registry.json"),
    ("demo-evidence-cockpit-registry", ROOT / "analysis/cvpr_demo_evidence_cockpit/registry.json"),
    ("full-stack-validation-registry", ROOT / "analysis/cvpr_full_stack_validation/registry.json"),
    ("full-stack-validator", ROOT / "scripts/validate_cvpr_full_stack.py"),
    ("site-index", ROOT / "index.html"),
]

CORE = """export function manifestGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "sealed") return "block";
  if (summary.artifacts !== 13) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  if (summary.launchStatus !== "launch-ready") return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.sloStatus !== "release") return "block";
  if (summary.drillbookStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.packageTests < 47) return "block";
  return "sealed";
}

export function summarizeManifest(input) {
  const summary = {
    manifest: "cvpr-release-manifest",
    artifacts: input.artifacts.length,
    missingArtifacts: input.artifacts.filter((artifact) => !artifact.exists).length,
    launchStatus: input.launch.summary.status,
    releaseGate: input.brief.summary.gate,
    sloStatus: input.slos.summary.status,
    drillbookStatus: input.drills.summary.status,
    fullStackStatus: input.validation.summary.status,
    packageTests: input.validation.summary.packageTests
  };
  return { ...summary, status: manifestGate({ ...summary, status: "sealed" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { manifestInput, summary } from "../src/fixtures.js";
import { manifestGate, summarizeManifest } from "../src/core.js";

const derived = summarizeManifest(manifestInput);
assert.equal(derived.status, "sealed");
assert.equal(manifestGate(summary), "sealed");
assert.equal(summary.artifacts, 13);
assert.equal(summary.missingArtifacts, 0);
assert.equal(summary.launchStatus, "launch-ready");
assert.equal(summary.releaseGate, "release");
assert.equal(summary.sloStatus, "release");
assert.equal(summary.drillbookStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(summary.packageTests >= 47);
assert.ok(manifestInput.artifacts.every((artifact) => artifact.exists && artifact.sha256.length === 64 && artifact.sizeBytes > 0));
console.log("ok cvpr-release-manifest:", summary.artifacts, "artifacts sealed");
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
        if isinstance(parsed, dict) and "summary" in parsed:
            record["summaryKeys"] = sorted(parsed["summary"].keys())
    return record


def load_input(artifacts):
    data = {name: read_json(path) for name, path in SOURCES.items()}
    data["artifacts"] = artifacts
    return data


def summarize(data):
    summary = {
        "manifest": "cvpr-release-manifest",
        "status": "sealed",
        "artifacts": len(data["artifacts"]),
        "missingArtifacts": sum(1 for artifact in data["artifacts"] if not artifact["exists"]),
        "launchStatus": data["launch"]["summary"]["status"],
        "releaseGate": data["brief"]["summary"]["gate"],
        "sloStatus": data["slos"]["summary"]["status"],
        "drillbookStatus": data["drills"]["summary"]["status"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
        "commands": data["validation"]["summary"]["commands"],
        "steps": data["validation"]["summary"]["steps"],
    }
    gate = (
        summary["artifacts"] == 13
        and summary["missingArtifacts"] == 0
        and summary["launchStatus"] == "launch-ready"
        and summary["releaseGate"] == "release"
        and summary["sloStatus"] == "release"
        and summary["drillbookStatus"] == "ready"
        and summary["fullStackStatus"] == "valid"
        and summary["packageTests"] >= 47
    )
    summary["status"] = "sealed" if gate else "block"
    return summary


def build_package(data, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const manifestInput = " + json.dumps(data, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Release Manifest\n\nFingerprinted release manifest for launch pages, registries, validators, and top-level handoff artifacts.\n")


def build_registry(summary, artifacts):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "artifacts": artifacts,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, artifacts):
    stats = [
        ("Status", summary["status"]),
        ("Artifacts", summary["artifacts"]),
        ("Missing", summary["missingArtifacts"]),
        ("Launch", summary["launchStatus"]),
        ("Release", summary["releaseGate"]),
        ("SLOs", summary["sloStatus"]),
        ("Full stack", summary["fullStackStatus"]),
        ("Package tests", summary["packageTests"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['label'])}</td><td><a href="{esc(row['path'])}">{esc(row['path'])}</a></td><td>{row['sizeBytes']}</td><td><code>{esc(row['sha256'])}</code></td><td class="{'present' if row['exists'] else 'missing'}">{'present' if row['exists'] else 'missing'}</td></tr>"""
        for row in artifacts
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Release Manifest</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1240px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;overflow-wrap:anywhere;white-space:normal}}.sealed,.present,.release,.ready,.valid,.launch-ready{{color:var(--good)}}.block,.missing{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · release manifest</div><h1>CVPR Release Manifest</h1><p>Fingerprinted manifest for the launch-ready CVPR production stack, including release pages, registries, validators, and the top-level site handoff.</p><nav><a href="index.html">all themes</a><a href="cvpr-launch-readiness-pack.html">launch pack</a><a href="cvpr-production-release-brief.html">release brief</a><a href="cvpr-validation-center.html">validation</a><a href="analysis/cvpr_release_manifest/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Fingerprinted Artifacts</h2><table><thead><tr><th>Artifact</th><th>Path</th><th>Bytes</th><th>SHA-256</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_release_manifest.py · tested package under source-code/learning/cvpr-release-manifest</div></footer></body></html>"""
    write(ROOT / "cvpr-release-manifest.html", page)


def main():
    artifacts = [artifact_record(label, path) for label, path in ARTIFACTS]
    data = load_input(artifacts)
    summary = summarize(data)
    build_package(data, summary)
    build_registry(summary, artifacts)
    build_page(summary, artifacts)
    print(f"wrote cvpr-release-manifest.html: {summary['artifacts']} artifacts, status {summary['status']}")


if __name__ == "__main__":
    main()

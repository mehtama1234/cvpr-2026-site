"""Build the CVPR release change-control board."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-release-change-control"
ANALYSIS = ROOT / "analysis/cvpr_release_change_control"

SOURCES = {
    "manifest": ROOT / "analysis/cvpr_release_manifest/registry.json",
    "launch": ROOT / "analysis/cvpr_launch_readiness_pack/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

CONTROL_MAP = {
    "launch-readiness-pack": ("cvpr-launch-readiness-pack.html", "scripts/build_cvpr_launch_readiness_pack.py", "scripts/verify_cvpr_launch_readiness_pack.py"),
    "production-release-brief": ("cvpr-production-release-brief.html", "scripts/build_cvpr_production_release_brief.py", "scripts/verify_cvpr_production_release_brief.py"),
    "release-slo-dashboard": ("cvpr-release-slo-dashboard.html", "scripts/build_cvpr_release_slo_dashboard.py", "scripts/verify_cvpr_release_slo_dashboard.py"),
    "release-regression-drillbook": ("cvpr-release-regression-drillbook.html", "scripts/build_cvpr_release_regression_drillbook.py", "scripts/verify_cvpr_release_regression_drillbook.py"),
    "colab-result-replay": ("cvpr-colab-result-replay.html", "scripts/build_cvpr_colab_result_replay.py", "scripts/verify_cvpr_colab_result_replay.py"),
    "demo-evidence-cockpit": ("cvpr-demo-evidence-cockpit.html", "scripts/build_cvpr_demo_evidence_cockpit.py", "scripts/verify_cvpr_demo_evidence_cockpit.py"),
    "full-stack-validation": ("cvpr-validation-center.html", "scripts/validate_cvpr_full_stack.py", "scripts/validate_cvpr_full_stack.py"),
    "full-stack-validator": ("cvpr-validation-center.html", "scripts/validate_cvpr_full_stack.py", "scripts/validate_cvpr_full_stack.py"),
    "site-index": ("index.html", "python3 scripts/validate_cvpr_full_stack.py", "python3 scripts/validate_cvpr_full_stack.py"),
}

CORE = """export function controlReady(row) {
  return Boolean(row.ownerSurface && row.rebuildCommand && row.verifyCommand && row.resealCommand && row.currentSha256);
}

export function changeControlGate(summary) {
  if (!summary) return "block";
  if (summary.artifacts !== 13) return "block";
  if (summary.controlRows !== 13) return "block";
  if (summary.readyRows !== 13) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  if (summary.launchStatus !== "launch-ready") return "block";
  if (summary.manifestStatus !== "sealed") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "controlled";
}

export function summarizeChangeControl(input) {
  const rows = input.controlRows || [];
  const summary = {
    board: "cvpr-release-change-control",
    artifacts: input.manifest.summary.artifacts,
    controlRows: rows.length,
    readyRows: rows.filter(controlReady).length,
    missingArtifacts: input.manifest.summary.missingArtifacts,
    launchStatus: input.launch.summary.status,
    manifestStatus: input.manifest.summary.status,
    fullStackStatus: input.validation.summary.status,
    packageTests: input.validation.summary.packageTests
  };
  return { ...summary, status: changeControlGate({ ...summary, status: "controlled" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { changeInput, controlRows, summary } from "../src/fixtures.js";
import { changeControlGate, controlReady, summarizeChangeControl } from "../src/core.js";

const derived = summarizeChangeControl({ ...changeInput, controlRows });
assert.equal(derived.status, summary.status);
assert.equal(changeControlGate(summary), summary.status === "controlled" ? "controlled" : "block");
assert.equal(summary.artifacts, 13);
assert.equal(summary.controlRows, 13);
assert.equal(summary.readyRows, 13);
assert.equal(summary.missingArtifacts, 0);
assert.ok(["launch-ready", "block"].includes(summary.launchStatus));
assert.ok(["sealed", "block"].includes(summary.manifestStatus));
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.ok(summary.packageTests >= 48);
assert.equal(controlRows.filter(controlReady).length, 13);
assert.ok(controlRows.every((row) => row.resealCommand === "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py"));
assert.equal(
  summary.status,
  summary.artifacts === 13 &&
  summary.controlRows === 13 &&
  summary.readyRows === 13 &&
  summary.missingArtifacts === 0 &&
  summary.launchStatus === "launch-ready" &&
  summary.manifestStatus === "sealed" &&
  summary.fullStackStatus === "valid"
    ? "controlled"
    : "block"
);
console.log("ok cvpr-release-change-control:", summary.readyRows, "rows controlled");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def load_input():
    return {name: read_json(path) for name, path in SOURCES.items()}


def control_for(label):
    for key, control in CONTROL_MAP.items():
        if label.startswith(key):
            return control
    return ("cvpr-release-manifest.html", "scripts/build_cvpr_release_manifest.py", "scripts/verify_cvpr_release_manifest.py")


def command(script):
    return script if script.startswith("python3 ") else f"python3 {script}"


def build_control_rows(data):
    rows = []
    for artifact in data["manifest"]["artifacts"]:
        surface, build_script, verify_script = control_for(artifact["label"])
        rows.append(
            {
                "artifact": artifact["label"],
                "path": artifact["path"],
                "ownerSurface": surface,
                "currentSha256": artifact["sha256"],
                "sizeBytes": artifact["sizeBytes"],
                "rebuildCommand": command(build_script),
                "verifyCommand": command(verify_script),
                "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
                "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
                "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
                "status": "controlled" if artifact["exists"] and artifact["sha256"] else "block",
            }
        )
    return rows


def summarize(data, rows):
    summary = {
        "board": "cvpr-release-change-control",
        "status": "controlled",
        "artifacts": data["manifest"]["summary"]["artifacts"],
        "controlRows": len(rows),
        "readyRows": len([row for row in rows if row["status"] == "controlled"]),
        "missingArtifacts": data["manifest"]["summary"]["missingArtifacts"],
        "launchStatus": data["launch"]["summary"]["status"],
        "manifestStatus": data["manifest"]["summary"]["status"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
    }
    gate = (
        summary["artifacts"] == 13
        and summary["controlRows"] == 13
        and summary["readyRows"] == 13
        and summary["missingArtifacts"] == 0
        and summary["launchStatus"] == "launch-ready"
        and summary["manifestStatus"] == "sealed"
        and summary["fullStackStatus"] == "valid"
    )
    summary["status"] = "controlled" if gate else "block"
    return summary


def build_package(data, summary, rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const changeInput = " + json.dumps(data, indent=2) + ";\n"
        "export const controlRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Release Change Control\n\nChange-control board for fingerprinted release artifacts, owner surfaces, rebuild commands, verifiers, full-stack validation, and manifest resealing.\n")


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "controlRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Artifacts", summary["artifacts"]),
        ("Rows", f"{summary['readyRows']}/{summary['controlRows']}"),
        ("Missing", summary["missingArtifacts"]),
        ("Launch", summary["launchStatus"]),
        ("Manifest", summary["manifestStatus"]),
        ("Full stack", summary["fullStackStatus"]),
        ("Package tests", summary["packageTests"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['artifact'])}</td><td><a href="{esc(row['path'])}">{esc(row['path'])}</a></td><td><a href="{esc(row['ownerSurface'])}">{esc(row['ownerSurface'])}</a></td><td><code>{esc(row['currentSha256'][:16])}</code></td><td><code>{esc(row['rebuildCommand'])}</code><code>{esc(row['verifyCommand'])}</code><code>{esc(row['fullStackCommand'])}</code><code>{esc(row['resealCommand'])}</code></td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Release Change Control</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1260px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:0 0 5px}}.controlled,.sealed,.launch-ready,.valid{{color:var(--good)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · release change control</div><h1>CVPR Release Change Control</h1><p>Controlled-change board for fingerprinted launch artifacts: owner surface, rebuild command, verifier, full-stack validation, and manifest resealing.</p><nav><a href="index.html">all themes</a><a href="cvpr-release-manifest.html">manifest</a><a href="cvpr-launch-readiness-pack.html">launch pack</a><a href="cvpr-validation-center.html">validation</a><a href="analysis/cvpr_release_change_control/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Controlled Artifacts</h2><table><thead><tr><th>Artifact</th><th>Path</th><th>Owner</th><th>SHA</th><th>Required Commands</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_release_change_control.py · tested package under source-code/learning/cvpr-release-change-control</div></footer></body></html>"""
    write(ROOT / "cvpr-release-change-control.html", page)


def main():
    data = load_input()
    rows = build_control_rows(data)
    summary = summarize(data, rows)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(summary, rows)
    print(f"wrote cvpr-release-change-control.html: {summary['readyRows']}/{summary['controlRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

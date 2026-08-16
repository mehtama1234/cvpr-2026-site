"""Build the CVPR interactive closeout seal."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_interactive_closeout_seal"
BASE = ROOT / "source-code/learning/cvpr-interactive-closeout-seal"

LAYERS = [
    ("coverage", "cvpr-interactive-coverage-portfolio.html", "analysis/cvpr_interactive_coverage_portfolio/registry.json", "source-code/learning/cvpr-interactive-coverage-portfolio", "coverage-ready"),
    ("console", "cvpr-interactive-console.html", "analysis/cvpr_interactive_console/registry.json", "source-code/learning/cvpr-interactive-console", "console-ready"),
    ("scenario-runner", "cvpr-interactive-scenario-runner.html", "analysis/cvpr_interactive_scenario_runner/registry.json", "source-code/learning/cvpr-interactive-scenario-runner", "runner-ready"),
    ("triage-board", "cvpr-interactive-triage-board.html", "analysis/cvpr_interactive_triage_board/registry.json", "source-code/learning/cvpr-interactive-triage-board", "triage-ready"),
    ("release-pack", "cvpr-interactive-release-pack.html", "analysis/cvpr_interactive_release_pack/registry.json", "source-code/learning/cvpr-interactive-release-pack", "release-pack-ready"),
    ("audit-ledger", "cvpr-interactive-audit-ledger.html", "analysis/cvpr_interactive_audit_ledger/registry.json", "source-code/learning/cvpr-interactive-audit-ledger", "ledger-ready"),
    ("command-center", "cvpr-interactive-command-center.html", "analysis/cvpr_interactive_command_center/registry.json", "source-code/learning/cvpr-interactive-command-center", "command-center-ready"),
    ("health-monitor", "cvpr-interactive-health-monitor.html", "analysis/cvpr_interactive_health_monitor/registry.json", "source-code/learning/cvpr-interactive-health-monitor", "monitor-ready"),
    ("drift-sentinel", "cvpr-interactive-drift-sentinel.html", "analysis/cvpr_interactive_drift_sentinel/registry.json", "source-code/learning/cvpr-interactive-drift-sentinel", "sentinel-ready"),
    ("rollback-drillbook", "cvpr-interactive-rollback-drillbook.html", "analysis/cvpr_interactive_rollback_drillbook/registry.json", "source-code/learning/cvpr-interactive-rollback-drillbook", "drillbook-ready"),
    ("rollback-rehearsal", "cvpr-interactive-rollback-rehearsal-lab.html", "analysis/cvpr_interactive_rollback_rehearsal_lab/registry.json", "source-code/learning/cvpr-interactive-rollback-rehearsal-lab", "rehearsal-ready"),
]

CORE = """export function layerSealed(layer) {
  return layer.status === layer.readyStatus &&
    layer.pageExists === true &&
    layer.registryExists === true &&
    layer.packageExists === true &&
    layer.validatorExists === true &&
    layer.packageTestExists === true;
}

export function summarizeSeal(layers) {
  return {
    layers: layers.length,
    sealed: layers.filter(layerSealed).length,
    pages: layers.filter((layer) => layer.pageExists).length,
    registries: layers.filter((layer) => layer.registryExists).length,
    packages: layers.filter((layer) => layer.packageExists).length,
    validators: layers.filter((layer) => layer.validatorExists).length,
    packageTests: layers.filter((layer) => layer.packageTestExists).length
  };
}

export function closeoutGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "closeout-ready") return "block";
  if (summary.layers !== 11) return "block";
  if (summary.sealedLayers !== 11) return "block";
  if (summary.pages !== 11) return "block";
  if (summary.registries !== 11) return "block";
  if (summary.packages !== 11) return "block";
  if (summary.validators !== 11) return "block";
  if (summary.packageTests !== 11) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "closeout-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { closeoutLayers, summary } from "../src/fixtures.js";
import { closeoutGate, layerSealed, summarizeSeal } from "../src/core.js";

assert.equal(closeoutLayers.length, 11);
assert.equal(closeoutLayers.every(layerSealed), true);
const derived = summarizeSeal(closeoutLayers);
assert.equal(derived.sealed, summary.sealedLayers);
assert.equal(derived.packageTests, 11);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.holds, 0);
assert.equal(closeoutGate(summary), "closeout-ready");
console.log("ok cvpr-interactive-closeout-seal:", summary.layers, "layers");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_registry(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


def build_layers():
    rows = []
    for layer_id, page, registry, package, ready_status in LAYERS:
        data = read_registry(registry)
        summary = data["summary"]
        validator = summary["validator"]
        rows.append({
            "layer": layer_id,
            "status": summary["status"],
            "readyStatus": ready_status,
            "page": page,
            "registry": registry,
            "package": package,
            "validator": validator,
            "rowCount": len(data[next(key for key in data if key != "summary")]),
            "pageExists": (ROOT / page).exists(),
            "registryExists": (ROOT / registry).exists(),
            "packageExists": (ROOT / package).exists(),
            "validatorExists": (ROOT / validator).exists(),
            "packageTestExists": (ROOT / package / "tests/core.test.js").exists(),
        })
    return rows


def summarize(rows):
    release = read_registry("analysis/cvpr_interactive_release_pack/registry.json")["summary"]
    drift = read_registry("analysis/cvpr_interactive_drift_sentinel/registry.json")["summary"]
    rehearsal = read_registry("analysis/cvpr_interactive_rollback_rehearsal_lab/registry.json")["summary"]
    summary = {
        "seal": "cvpr-interactive-closeout-seal",
        "status": "closeout-ready",
        "layers": len(rows),
        "sealedLayers": len([row for row in rows if row["status"] == row["readyStatus"]]),
        "pages": len([row for row in rows if row["pageExists"]]),
        "registries": len([row for row in rows if row["registryExists"]]),
        "packages": len([row for row in rows if row["packageExists"]]),
        "validators": len([row for row in rows if row["validatorExists"]]),
        "packageTests": len([row for row in rows if row["packageTestExists"]]),
        "demos": release["demos"],
        "themes": release["themes"],
        "waves": release["waves"],
        "artifacts": release["artifacts"],
        "controls": release["controls"],
        "scenarioCases": release["scenarioCases"],
        "promoteDecisions": release["promoteDecisions"],
        "driftChecks": drift["checks"],
        "blockedChecks": drift["blockedChecks"],
        "rollbackDrills": rehearsal["armedDrills"],
        "rollbackRehearsals": rehearsal["clearRehearsals"],
        "holds": release["holds"] + drift["holds"] + rehearsal["holds"],
        "validator": "scripts/verify_cvpr_interactive_closeout_seal.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["layers"] == 11
        and summary["sealedLayers"] == 11
        and summary["pages"] == 11
        and summary["registries"] == 11
        and summary["packages"] == 11
        and summary["validators"] == 11
        and summary["packageTests"] == 11
        and summary["demos"] == 40
        and summary["themes"] == 8
        and summary["waves"] == 5
        and summary["artifacts"] == 120
        and summary["controls"] == 200
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["driftChecks"] == 18
        and summary["blockedChecks"] == 0
        and summary["rollbackDrills"] == 6
        and summary["rollbackRehearsals"] == 6
        and summary["holds"] == 0
    )
    summary["status"] = "closeout-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const closeoutLayers = "
        + json.dumps(rows, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Closeout Seal\n\nFinal closeout seal for the 40-demo interactive CVPR release-ops chain.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "closeoutLayers": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Layers", summary["layers"]),
        ("Sealed", summary["sealedLayers"]),
        ("Demos", summary["demos"]),
        ("Cases", summary["scenarioCases"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    table_rows = ""
    for row in rows:
        table_rows += (
            "<tr>"
            f"<td>{esc(row['layer'])}<span>{esc(row['status'])}</span></td>"
            f"<td>{esc(row['rowCount'])}</td>"
            f"<td><a href=\"{esc(row['page'])}\">page</a></td>"
            f"<td><a href=\"{esc(row['registry'])}\">registry</a></td>"
            f"<td>{esc(row['validator'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Closeout Seal</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:900px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive closeout</div><h1>Interactive Closeout Seal</h1><p>Final seal across the eleven-layer interactive CVPR demo release-ops chain: demos, scenarios, triage, release, audit, monitoring, drift, rollback, and rehearsal.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-rollback-rehearsal-lab.html">rehearsal lab</a><a href="analysis/cvpr_interactive_closeout_seal/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Closeout Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>demos={esc(summary['demos'])} artifacts={esc(summary['artifacts'])} controls={esc(summary['controls'])} cases={esc(summary['scenarioCases'])}</code></section><section class="panel"><h2>Sealed Layers</h2><div class="table-wrap"><table><thead><tr><th>Layer</th><th>Rows</th><th>Page</th><th>Registry</th><th>Validator</th></tr></thead><tbody>{table_rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_closeout_seal.py - package: source-code/learning/cvpr-interactive-closeout-seal</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-closeout-seal.html", page)


def main():
    rows = build_layers()
    summary = summarize(rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-closeout-seal.html: {summary['layers']} layers, status {summary['status']}")


if __name__ == "__main__":
    main()

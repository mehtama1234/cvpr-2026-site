"""Build the CVPR interactive release pack."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_interactive_release_pack"
BASE = ROOT / "source-code/learning/cvpr-interactive-release-pack"

LAYERS = [
    {
        "id": "coverage-portfolio",
        "page": "cvpr-interactive-coverage-portfolio.html",
        "registry": "analysis/cvpr_interactive_coverage_portfolio/registry.json",
        "package": "source-code/learning/cvpr-interactive-coverage-portfolio",
        "validator": "scripts/verify_cvpr_interactive_coverage_portfolio.py",
        "statusKey": "status",
        "readyStatus": "coverage-ready",
    },
    {
        "id": "interactive-console",
        "page": "cvpr-interactive-console.html",
        "registry": "analysis/cvpr_interactive_console/registry.json",
        "package": "source-code/learning/cvpr-interactive-console",
        "validator": "scripts/verify_cvpr_interactive_console.py",
        "statusKey": "status",
        "readyStatus": "console-ready",
    },
    {
        "id": "scenario-runner",
        "page": "cvpr-interactive-scenario-runner.html",
        "registry": "analysis/cvpr_interactive_scenario_runner/registry.json",
        "package": "source-code/learning/cvpr-interactive-scenario-runner",
        "validator": "scripts/verify_cvpr_interactive_scenario_runner.py",
        "statusKey": "status",
        "readyStatus": "runner-ready",
    },
    {
        "id": "triage-board",
        "page": "cvpr-interactive-triage-board.html",
        "registry": "analysis/cvpr_interactive_triage_board/registry.json",
        "package": "source-code/learning/cvpr-interactive-triage-board",
        "validator": "scripts/verify_cvpr_interactive_triage_board.py",
        "statusKey": "status",
        "readyStatus": "triage-ready",
    },
]

CORE = """export function layerReady(layer) {
  return layer.status === layer.readyStatus &&
    layer.pageExists === true &&
    layer.registryExists === true &&
    layer.packageExists === true &&
    layer.validatorExists === true &&
    layer.packageTestExists === true;
}

export function summarizeRelease(layers) {
  return {
    layers: layers.length,
    readyLayers: layers.filter(layerReady).length,
    pages: layers.filter((layer) => layer.pageExists).length,
    registries: layers.filter((layer) => layer.registryExists).length,
    packages: layers.filter((layer) => layer.packageExists).length,
    validators: layers.filter((layer) => layer.validatorExists).length
  };
}

export function releaseGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "release-pack-ready") return "block";
  if (summary.layers !== 4) return "block";
  if (summary.readyLayers !== 4) return "block";
  if (summary.pages !== 4) return "block";
  if (summary.registries !== 4) return "block";
  if (summary.packages !== 4) return "block";
  if (summary.validators !== 4) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.artifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "release-pack-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { releaseLayers, summary } from "../src/fixtures.js";
import { layerReady, releaseGate, summarizeRelease } from "../src/core.js";

assert.equal(releaseLayers.length, 4);
assert.equal(releaseLayers.every(layerReady), true);
const derived = summarizeRelease(releaseLayers);
assert.equal(derived.readyLayers, summary.readyLayers);
assert.equal(derived.pages, summary.pages);
assert.equal(derived.validators, summary.validators);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.holds, 0);
assert.equal(releaseGate(summary), "release-pack-ready");
console.log("ok cvpr-interactive-release-pack:", summary.layers, "layers");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_layers():
    layers = []
    for layer in LAYERS:
        registry_path = ROOT / layer["registry"]
        registry = read_json(registry_path)
        summary = registry["summary"]
        package_path = ROOT / layer["package"]
        rows_key = next(key for key in registry.keys() if key != "summary")
        layers.append({
            "id": layer["id"],
            "status": summary[layer["statusKey"]],
            "readyStatus": layer["readyStatus"],
            "page": layer["page"],
            "registry": layer["registry"],
            "package": layer["package"],
            "validator": layer["validator"],
            "rowsKey": rows_key,
            "rowCount": len(registry[rows_key]),
            "pageExists": (ROOT / layer["page"]).exists(),
            "registryExists": registry_path.exists(),
            "packageExists": package_path.exists(),
            "validatorExists": (ROOT / layer["validator"]).exists(),
            "packageTestExists": (package_path / "tests/core.test.js").exists(),
        })
    return layers


def summarize(layers):
    coverage = read_json(ROOT / "analysis/cvpr_interactive_coverage_portfolio/registry.json")["summary"]
    scenario = read_json(ROOT / "analysis/cvpr_interactive_scenario_runner/registry.json")["summary"]
    triage = read_json(ROOT / "analysis/cvpr_interactive_triage_board/registry.json")["summary"]
    ready_layers = len([layer for layer in layers if layer["status"] == layer["readyStatus"]])
    summary = {
        "pack": "cvpr-interactive-release-pack",
        "status": "release-pack-ready",
        "layers": len(layers),
        "readyLayers": ready_layers,
        "pages": len([layer for layer in layers if layer["pageExists"]]),
        "registries": len([layer for layer in layers if layer["registryExists"]]),
        "packages": len([layer for layer in layers if layer["packageExists"]]),
        "validators": len([layer for layer in layers if layer["validatorExists"]]),
        "packageTests": len([layer for layer in layers if layer["packageTestExists"]]),
        "demos": coverage["totalDemos"],
        "themes": coverage["themes"],
        "waves": coverage["waves"],
        "artifacts": coverage["localArtifacts"],
        "controls": coverage["controls"],
        "scenarioCases": scenario["cases"],
        "passingCases": scenario["passingCases"],
        "blockedCases": scenario["blockedCases"],
        "promoteDecisions": triage["promote"],
        "monitorDecisions": triage["monitor"],
        "retestDecisions": triage["retest"],
        "holds": coverage["holdInteractive"] + scenario["blockedCases"] + triage["monitor"] + triage["retest"],
        "validator": "scripts/verify_cvpr_interactive_release_pack.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["layers"] == 4
        and summary["readyLayers"] == 4
        and summary["pages"] == 4
        and summary["registries"] == 4
        and summary["packages"] == 4
        and summary["validators"] == 4
        and summary["packageTests"] == 4
        and summary["demos"] == 40
        and summary["themes"] == 8
        and summary["waves"] == 5
        and summary["artifacts"] == 120
        and summary["controls"] == 200
        and summary["scenarioCases"] == 120
        and summary["passingCases"] == 120
        and summary["blockedCases"] == 0
        and summary["promoteDecisions"] == 40
        and summary["monitorDecisions"] == 0
        and summary["retestDecisions"] == 0
        and summary["holds"] == 0
    )
    summary["status"] = "release-pack-ready" if gate else "block"
    return summary


def build_package(layers, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const releaseLayers = "
        + json.dumps(layers, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Interactive Release Pack\n\nSeals the interactive coverage portfolio, console, scenario runner, and triage board into one verified release handoff.\n",
    )


def build_registry(layers, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "releaseLayers": layers}, indent=2) + "\n")


def build_page(layers, summary):
    stats = [
        ("Status", summary["status"]),
        ("Layers", summary["layers"]),
        ("Demos", summary["demos"]),
        ("Scenarios", summary["scenarioCases"]),
        ("Promote", summary["promoteDecisions"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows = ""
    for layer in layers:
        rows += (
            "<tr>"
            f"<td>{esc(layer['id'])}<span>{esc(layer['status'])}</span></td>"
            f"<td>{esc(layer['rowCount'])}<span>{esc(layer['rowsKey'])}</span></td>"
            f"<td><a href=\"{esc(layer['page'])}\">page</a></td>"
            f"<td><a href=\"{esc(layer['registry'])}\">registry</a></td>"
            f"<td>{esc(layer['package'])}</td>"
            f"<td>{esc(layer['validator'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Release Pack</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1380px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:980px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive release</div><h1>Interactive Release Pack</h1><p>Seals the coverage portfolio, console, scenario runner, and triage board into one verified handoff for the 40 promoted CVPR repo demos.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-triage-board.html">triage board</a><a href="analysis/cvpr_interactive_release_pack/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>demos={esc(summary['demos'])} artifacts={esc(summary['artifacts'])} controls={esc(summary['controls'])} cases={esc(summary['scenarioCases'])}</code></section><section class="panel"><h2>Release Layers</h2><div class="table-wrap"><table><thead><tr><th>Layer</th><th>Rows</th><th>Page</th><th>Registry</th><th>Package</th><th>Validator</th></tr></thead><tbody>{rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_release_pack.py - package: source-code/learning/cvpr-interactive-release-pack</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-release-pack.html", page)


def main():
    layers = build_layers()
    summary = summarize(layers)
    build_package(layers, summary)
    build_registry(layers, summary)
    build_page(layers, summary)
    print(f"wrote cvpr-interactive-release-pack.html: {summary['layers']} layers, status {summary['status']}")


if __name__ == "__main__":
    main()

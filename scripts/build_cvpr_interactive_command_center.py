"""Build the CVPR interactive command center."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_interactive_command_center"
BASE = ROOT / "source-code/learning/cvpr-interactive-command-center"

SURFACES = [
    ("coverage", "cvpr-interactive-coverage-portfolio.html", "analysis/cvpr_interactive_coverage_portfolio/registry.json", "coverage-ready"),
    ("console", "cvpr-interactive-console.html", "analysis/cvpr_interactive_console/registry.json", "console-ready"),
    ("scenario-runner", "cvpr-interactive-scenario-runner.html", "analysis/cvpr_interactive_scenario_runner/registry.json", "runner-ready"),
    ("triage-board", "cvpr-interactive-triage-board.html", "analysis/cvpr_interactive_triage_board/registry.json", "triage-ready"),
    ("release-pack", "cvpr-interactive-release-pack.html", "analysis/cvpr_interactive_release_pack/registry.json", "release-pack-ready"),
    ("audit-ledger", "cvpr-interactive-audit-ledger.html", "analysis/cvpr_interactive_audit_ledger/registry.json", "ledger-ready"),
]

CORE = """export function surfaceReady(surface) {
  return surface.status === surface.readyStatus &&
    surface.pageExists === true &&
    surface.registryExists === true &&
    surface.validatorExists === true;
}

export function summarizeSurfaces(surfaces) {
  return {
    surfaces: surfaces.length,
    readySurfaces: surfaces.filter(surfaceReady).length,
    pages: surfaces.filter((surface) => surface.pageExists).length,
    registries: surfaces.filter((surface) => surface.registryExists).length,
    validators: surfaces.filter((surface) => surface.validatorExists).length
  };
}

export function commandGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "command-center-ready") return "block";
  if (summary.surfaces !== 6) return "block";
  if (summary.readySurfaces !== 6) return "block";
  if (summary.pages !== 6) return "block";
  if (summary.registries !== 6) return "block";
  if (summary.validators !== 6) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.artifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.auditEvents !== 5) return "block";
  if (summary.holds !== 0) return "block";
  return "command-center-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { commandSurfaces, summary } from "../src/fixtures.js";
import { commandGate, summarizeSurfaces, surfaceReady } from "../src/core.js";

assert.equal(commandSurfaces.length, 6);
assert.equal(commandSurfaces.every(surfaceReady), true);
const derived = summarizeSurfaces(commandSurfaces);
assert.equal(derived.readySurfaces, summary.readySurfaces);
assert.equal(derived.pages, summary.pages);
assert.equal(derived.validators, summary.validators);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.auditEvents, 5);
assert.equal(summary.holds, 0);
assert.equal(commandGate(summary), "command-center-ready");
console.log("ok cvpr-interactive-command-center:", summary.surfaces, "surfaces");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def surface_rows():
    rows = []
    for surface_id, page, registry, ready_status in SURFACES:
        data = read_json(ROOT / registry)
        summary = data["summary"]
        validator = summary["validator"]
        rows.append({
            "surface": surface_id,
            "status": summary["status"],
            "readyStatus": ready_status,
            "page": page,
            "registry": registry,
            "validator": validator,
            "pageExists": (ROOT / page).exists(),
            "registryExists": (ROOT / registry).exists(),
            "validatorExists": (ROOT / validator).exists(),
            "rowCount": len(data[next(key for key in data if key != "summary")]),
        })
    return rows


def summarize(rows):
    release = read_json(ROOT / "analysis/cvpr_interactive_release_pack/registry.json")["summary"]
    ledger = read_json(ROOT / "analysis/cvpr_interactive_audit_ledger/registry.json")["summary"]
    summary = {
        "commandCenter": "cvpr-interactive-command-center",
        "status": "command-center-ready",
        "surfaces": len(rows),
        "readySurfaces": len([row for row in rows if row["status"] == row["readyStatus"]]),
        "pages": len([row for row in rows if row["pageExists"]]),
        "registries": len([row for row in rows if row["registryExists"]]),
        "validators": len([row for row in rows if row["validatorExists"]]),
        "demos": release["demos"],
        "themes": release["themes"],
        "waves": release["waves"],
        "artifacts": release["artifacts"],
        "controls": release["controls"],
        "scenarioCases": release["scenarioCases"],
        "promoteDecisions": release["promoteDecisions"],
        "auditEvents": ledger["events"],
        "fingerprints": ledger["uniqueFingerprints"],
        "holds": release["holds"] + ledger["holds"],
        "validator": "scripts/verify_cvpr_interactive_command_center.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["surfaces"] == 6
        and summary["readySurfaces"] == 6
        and summary["pages"] == 6
        and summary["registries"] == 6
        and summary["validators"] == 6
        and summary["demos"] == 40
        and summary["themes"] == 8
        and summary["waves"] == 5
        and summary["artifacts"] == 120
        and summary["controls"] == 200
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["auditEvents"] == 5
        and summary["fingerprints"] == 5
        and summary["holds"] == 0
    )
    summary["status"] = "command-center-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const commandSurfaces = "
        + json.dumps(rows, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Command Center\n\nOperator command center for the sealed CVPR interactive demo chain.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "commandSurfaces": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Surfaces", summary["surfaces"]),
        ("Demos", summary["demos"]),
        ("Cases", summary["scenarioCases"]),
        ("Promote", summary["promoteDecisions"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    table_rows = ""
    for row in rows:
        table_rows += (
            "<tr>"
            f"<td>{esc(row['surface'])}<span>{esc(row['status'])}</span></td>"
            f"<td>{esc(row['rowCount'])}</td>"
            f"<td><a href=\"{esc(row['page'])}\">page</a></td>"
            f"<td><a href=\"{esc(row['registry'])}\">registry</a></td>"
            f"<td>{esc(row['validator'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Command Center</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1340px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:820px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive operations</div><h1>Interactive Command Center</h1><p>One operator surface for the sealed CVPR interactive demo chain: coverage, console, scenarios, triage, release pack, and audit ledger.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-audit-ledger.html">audit ledger</a><a href="analysis/cvpr_interactive_command_center/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Command Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>demos={esc(summary['demos'])} artifacts={esc(summary['artifacts'])} controls={esc(summary['controls'])} cases={esc(summary['scenarioCases'])}</code></section><section class="panel"><h2>Surfaces</h2><div class="table-wrap"><table><thead><tr><th>Surface</th><th>Rows</th><th>Page</th><th>Registry</th><th>Validator</th></tr></thead><tbody>{table_rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_command_center.py - package: source-code/learning/cvpr-interactive-command-center</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-command-center.html", page)


def main():
    rows = surface_rows()
    summary = summarize(rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-command-center.html: {summary['surfaces']} surfaces, status {summary['status']}")


if __name__ == "__main__":
    main()

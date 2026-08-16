"""Build the CVPR interactive handoff bundle."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CLOSEOUT = ROOT / "analysis/cvpr_interactive_closeout_seal/registry.json"
FULL_STACK = ROOT / "analysis/cvpr_full_stack_validation/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_handoff_bundle"
BASE = ROOT / "source-code/learning/cvpr-interactive-handoff-bundle"

CORE = """export function handoffItemReady(item) {
  return item.status === "sealed" &&
    item.pageExists === true &&
    item.registryExists === true &&
    item.packageExists === true &&
    item.validatorExists === true &&
    item.packageTestExists === true;
}

export function summarizeHandoff(items) {
  return {
    items: items.length,
    sealed: items.filter(handoffItemReady).length,
    pages: items.filter((item) => item.pageExists).length,
    registries: items.filter((item) => item.registryExists).length,
    packages: items.filter((item) => item.packageExists).length,
    validators: items.filter((item) => item.validatorExists).length,
    packageTests: items.filter((item) => item.packageTestExists).length
  };
}

export function handoffGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "handoff-ready") return "block";
  if (summary.items !== 11) return "block";
  if (summary.sealedItems !== 11) return "block";
  if (summary.pages !== 11) return "block";
  if (summary.registries !== 11) return "block";
  if (summary.packages !== 11) return "block";
  if (summary.validators !== 11) return "block";
  if (summary.packageTests !== 11) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.demos !== 40) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.holds !== 0) return "block";
  return "handoff-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { handoffItems, summary } from "../src/fixtures.js";
import { handoffGate, handoffItemReady, summarizeHandoff } from "../src/core.js";

assert.equal(handoffItems.length, 11);
assert.equal(handoffItems.every(handoffItemReady), true);
const derived = summarizeHandoff(handoffItems);
assert.equal(derived.sealed, summary.sealedItems);
assert.equal(derived.packageTests, 11);
assert.equal(summary.fullStackStatus, "valid");
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.holds, 0);
assert.equal(handoffGate(summary), "handoff-ready");
console.log("ok cvpr-interactive-handoff-bundle:", summary.items, "items");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_items(closeout_rows):
    items = []
    for row in closeout_rows:
        items.append({
            "layer": row["layer"],
            "status": "sealed" if row["status"] == row["readyStatus"] else "block",
            "page": row["page"],
            "registry": row["registry"],
            "package": row["package"],
            "validator": row["validator"],
            "rowCount": row["rowCount"],
            "pageExists": row["pageExists"],
            "registryExists": row["registryExists"],
            "packageExists": row["packageExists"],
            "validatorExists": row["validatorExists"],
            "packageTestExists": row["packageTestExists"],
        })
    return items


def summarize(items, closeout_summary, full_stack_summary):
    summary = {
        "bundle": "cvpr-interactive-handoff-bundle",
        "status": "handoff-ready",
        "sourceCloseout": "analysis/cvpr_interactive_closeout_seal/registry.json",
        "items": len(items),
        "sealedItems": len([item for item in items if item["status"] == "sealed"]),
        "pages": len([item for item in items if item["pageExists"]]),
        "registries": len([item for item in items if item["registryExists"]]),
        "packages": len([item for item in items if item["packageExists"]]),
        "validators": len([item for item in items if item["validatorExists"]]),
        "packageTests": len([item for item in items if item["packageTestExists"]]),
        "fullStackStatus": full_stack_summary["status"],
        "fullStackSteps": full_stack_summary["steps"],
        "fullStackPackageTests": full_stack_summary["packageTests"],
        "demos": closeout_summary["demos"],
        "themes": closeout_summary["themes"],
        "waves": closeout_summary["waves"],
        "artifacts": closeout_summary["artifacts"],
        "controls": closeout_summary["controls"],
        "scenarioCases": closeout_summary["scenarioCases"],
        "promoteDecisions": closeout_summary["promoteDecisions"],
        "rollbackDrills": closeout_summary["rollbackDrills"],
        "rollbackRehearsals": closeout_summary["rollbackRehearsals"],
        "holds": closeout_summary["holds"],
        "validator": "scripts/verify_cvpr_interactive_handoff_bundle.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["items"] == 11
        and summary["sealedItems"] == 11
        and summary["pages"] == 11
        and summary["registries"] == 11
        and summary["packages"] == 11
        and summary["validators"] == 11
        and summary["packageTests"] == 11
        and summary["fullStackStatus"] == "valid"
        and summary["demos"] == 40
        and summary["themes"] == 8
        and summary["waves"] == 5
        and summary["artifacts"] == 120
        and summary["controls"] == 200
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["rollbackDrills"] == 6
        and summary["rollbackRehearsals"] == 6
        and summary["holds"] == 0
    )
    summary["status"] = "handoff-ready" if gate else "block"
    return summary


def build_package(items, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const handoffItems = "
        + json.dumps(items, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Handoff Bundle\n\nOperator handoff bundle for the sealed eleven-layer interactive CVPR demo chain.\n")


def build_registry(items, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "handoffItems": items}, indent=2) + "\n")


def build_page(items, summary):
    stats = [
        ("Status", summary["status"]),
        ("Items", summary["items"]),
        ("Sealed", summary["sealedItems"]),
        ("Demos", summary["demos"]),
        ("Cases", summary["scenarioCases"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows = ""
    for item in items:
        rows += (
            "<tr>"
            f"<td>{esc(item['layer'])}<span>{esc(item['status'])}</span></td>"
            f"<td>{esc(item['rowCount'])}</td>"
            f"<td><a href=\"{esc(item['page'])}\">page</a></td>"
            f"<td><a href=\"{esc(item['registry'])}\">registry</a></td>"
            f"<td>{esc(item['package'])}</td>"
            f"<td>{esc(item['validator'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Handoff Bundle</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1420px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:1000px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive handoff</div><h1>Interactive Handoff Bundle</h1><p>Operator handoff for the sealed eleven-layer interactive CVPR demo chain, including pages, registries, packages, validators, tests, counts, and full-stack gate.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-closeout-seal.html">closeout seal</a><a href="analysis/cvpr_interactive_handoff_bundle/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Handoff Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>fullStack={esc(summary['fullStackStatus'])} steps={esc(summary['fullStackSteps'])} packageTests={esc(summary['fullStackPackageTests'])}</code></section><section class="panel"><h2>Handoff Items</h2><div class="table-wrap"><table><thead><tr><th>Layer</th><th>Rows</th><th>Page</th><th>Registry</th><th>Package</th><th>Validator</th></tr></thead><tbody>{rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_handoff_bundle.py - package: source-code/learning/cvpr-interactive-handoff-bundle</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-handoff-bundle.html", page)


def main():
    closeout = read_json(CLOSEOUT)
    full_stack = read_json(FULL_STACK)
    items = build_items(closeout["closeoutLayers"])
    summary = summarize(items, closeout["summary"], full_stack["summary"])
    build_package(items, summary)
    build_registry(items, summary)
    build_page(items, summary)
    print(f"wrote cvpr-interactive-handoff-bundle.html: {summary['items']} items, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR interactive navigation manifest audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HANDOFF = ROOT / "analysis/cvpr_interactive_handoff_bundle/registry.json"
INDEX = ROOT / "index.html"
ANALYSIS = ROOT / "analysis/cvpr_interactive_navigation_manifest_audit"
BASE = ROOT / "source-code/learning/cvpr-interactive-navigation-manifest-audit"

CORE = """export function navItemReady(item) {
  return item.status === "linked" &&
    item.pageExists === true &&
    item.registryExists === true &&
    item.packageExists === true &&
    item.validatorExists === true &&
    item.indexLinked === true;
}

export function summarizeNav(items) {
  return {
    items: items.length,
    linked: items.filter(navItemReady).length,
    missing: items.filter((item) => !navItemReady(item)).length
  };
}

export function navGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "nav-audit-ready") return "block";
  if (summary.items !== 11) return "block";
  if (summary.linkedItems !== 11) return "block";
  if (summary.missingItems !== 0) return "block";
  if (summary.handoffItems !== 11) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "nav-audit-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { navItems, summary } from "../src/fixtures.js";
import { navGate, navItemReady, summarizeNav } from "../src/core.js";

assert.equal(navItems.length, 11);
assert.equal(navItems.every(navItemReady), true);
const derived = summarizeNav(navItems);
assert.equal(derived.linked, summary.linkedItems);
assert.equal(derived.missing, 0);
assert.equal(summary.handoffItems, 11);
assert.equal(summary.demos, 40);
assert.equal(summary.holds, 0);
assert.equal(navGate(summary), "nav-audit-ready");
console.log("ok cvpr-interactive-navigation-manifest-audit:", summary.items, "items");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_handoff():
    return json.loads(HANDOFF.read_text(encoding="utf-8"))


def build_items(handoff_items):
    index_html = INDEX.read_text(encoding="utf-8")
    rows = []
    for item in handoff_items:
        index_linked = item["page"] in index_html
        rows.append({
            "layer": item["layer"],
            "page": item["page"],
            "registry": item["registry"],
            "package": item["package"],
            "validator": item["validator"],
            "pageExists": item["pageExists"],
            "registryExists": item["registryExists"],
            "packageExists": item["packageExists"],
            "validatorExists": item["validatorExists"],
            "packageTestExists": item["packageTestExists"],
            "indexLinked": index_linked,
            "status": "linked" if index_linked and item["status"] == "sealed" else "missing",
        })
    return rows


def summarize(items, handoff_summary):
    summary = {
        "audit": "cvpr-interactive-navigation-manifest-audit",
        "status": "nav-audit-ready",
        "sourceHandoff": "analysis/cvpr_interactive_handoff_bundle/registry.json",
        "items": len(items),
        "linkedItems": len([item for item in items if item["status"] == "linked"]),
        "missingItems": len([item for item in items if item["status"] != "linked"]),
        "handoffItems": handoff_summary["items"],
        "demos": handoff_summary["demos"],
        "scenarioCases": handoff_summary["scenarioCases"],
        "promoteDecisions": handoff_summary["promoteDecisions"],
        "holds": handoff_summary["holds"],
        "validator": "scripts/verify_cvpr_interactive_navigation_manifest_audit.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["items"] == 11
        and summary["linkedItems"] == 11
        and summary["missingItems"] == 0
        and summary["handoffItems"] == 11
        and summary["demos"] == 40
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["holds"] == 0
    )
    summary["status"] = "nav-audit-ready" if gate else "block"
    return summary


def build_package(items, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const navItems = "
        + json.dumps(items, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Navigation Manifest Audit\n\nVerifies handoff pages are locally present and linked from the homepage navigation.\n")


def build_registry(items, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "navItems": items}, indent=2) + "\n")


def build_page(items, summary):
    stats = [
        ("Status", summary["status"]),
        ("Items", summary["items"]),
        ("Linked", summary["linkedItems"]),
        ("Missing", summary["missingItems"]),
        ("Demos", summary["demos"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows = ""
    for item in items:
        rows += (
            "<tr>"
            f"<td>{esc(item['layer'])}<span>{esc(item['status'])}</span></td>"
            f"<td><a href=\"{esc(item['page'])}\">page</a></td>"
            f"<td><a href=\"{esc(item['registry'])}\">registry</a></td>"
            f"<td>{esc(item['package'])}</td>"
            f"<td>{esc(item['validator'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Navigation Manifest Audit</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1380px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:940px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive navigation</div><h1>Interactive Navigation Manifest Audit</h1><p>Verifies every sealed interactive handoff page is locally present, linked from the homepage, and backed by registry, package, and validator evidence.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-handoff-bundle.html">handoff bundle</a><a href="analysis/cvpr_interactive_navigation_manifest_audit/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Navigation Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>handoffItems={esc(summary['handoffItems'])} demos={esc(summary['demos'])} cases={esc(summary['scenarioCases'])}</code></section><section class="panel"><h2>Navigation Items</h2><div class="table-wrap"><table><thead><tr><th>Layer</th><th>Page</th><th>Registry</th><th>Package</th><th>Validator</th></tr></thead><tbody>{rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_navigation_manifest_audit.py - package: source-code/learning/cvpr-interactive-navigation-manifest-audit</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-navigation-manifest-audit.html", page)


def main():
    handoff = read_handoff()
    items = build_items(handoff["handoffItems"])
    summary = summarize(items, handoff["summary"])
    build_package(items, summary)
    build_registry(items, summary)
    build_page(items, summary)
    print(f"wrote cvpr-interactive-navigation-manifest-audit.html: {summary['items']} items, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR interactive drift sentinel."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_interactive_drift_sentinel"
BASE = ROOT / "source-code/learning/cvpr-interactive-drift-sentinel"

CORE = """export function checkReady(check) {
  return check.status === "pass" && check.left === check.right;
}

export function summarizeChecks(checks) {
  return {
    checks: checks.length,
    passing: checks.filter(checkReady).length,
    blocked: checks.filter((check) => !checkReady(check)).length,
    categories: new Set(checks.map((check) => check.category)).size
  };
}

export function sentinelGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "sentinel-ready") return "block";
  if (summary.checks !== 18) return "block";
  if (summary.passingChecks !== 18) return "block";
  if (summary.blockedChecks !== 0) return "block";
  if (summary.categories !== 3) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "sentinel-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { driftChecks, summary } from "../src/fixtures.js";
import { checkReady, sentinelGate, summarizeChecks } from "../src/core.js";

assert.equal(driftChecks.length, 18);
assert.equal(driftChecks.every(checkReady), true);
const derived = summarizeChecks(driftChecks);
assert.equal(derived.passing, summary.passingChecks);
assert.equal(derived.blocked, 0);
assert.equal(derived.categories, 3);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.holds, 0);
assert.equal(sentinelGate(summary), "sentinel-ready");
console.log("ok cvpr-interactive-drift-sentinel:", summary.checks, "checks");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_summary(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))["summary"]


def add_check(checks, category, metric, left_source, left, right_source, right):
    checks.append({
        "category": category,
        "metric": metric,
        "leftSource": left_source,
        "rightSource": right_source,
        "left": left,
        "right": right,
        "status": "pass" if left == right else "block",
    })


def build_checks():
    command = read_summary("analysis/cvpr_interactive_command_center/registry.json")
    health = read_summary("analysis/cvpr_interactive_health_monitor/registry.json")
    release = read_summary("analysis/cvpr_interactive_release_pack/registry.json")
    ledger = read_summary("analysis/cvpr_interactive_audit_ledger/registry.json")
    checks = []
    for metric in ("demos", "artifacts", "controls", "scenarioCases", "promoteDecisions", "holds"):
        add_check(checks, "command-vs-health", metric, "command-center", command[metric], "health-monitor", health[metric])
    for metric in ("demos", "artifacts", "controls", "scenarioCases", "promoteDecisions", "holds"):
        add_check(checks, "command-vs-release", metric, "command-center", command[metric], "release-pack", release[metric])
    for metric in ("demos", "artifacts", "controls", "scenarioCases", "promoteDecisions", "holds"):
        add_check(checks, "release-vs-ledger", metric, "release-pack", release[metric], "audit-ledger", ledger[metric])
    return checks


def summarize(checks):
    command = read_summary("analysis/cvpr_interactive_command_center/registry.json")
    summary = {
        "sentinel": "cvpr-interactive-drift-sentinel",
        "status": "sentinel-ready",
        "checks": len(checks),
        "passingChecks": len([check for check in checks if check["status"] == "pass"]),
        "blockedChecks": len([check for check in checks if check["status"] != "pass"]),
        "categories": len({check["category"] for check in checks}),
        "demos": command["demos"],
        "artifacts": command["artifacts"],
        "controls": command["controls"],
        "scenarioCases": command["scenarioCases"],
        "promoteDecisions": command["promoteDecisions"],
        "auditEvents": command["auditEvents"],
        "holds": command["holds"],
        "validator": "scripts/verify_cvpr_interactive_drift_sentinel.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["checks"] == 18
        and summary["passingChecks"] == 18
        and summary["blockedChecks"] == 0
        and summary["categories"] == 3
        and summary["demos"] == 40
        and summary["artifacts"] == 120
        and summary["controls"] == 200
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["holds"] == 0
    )
    summary["status"] = "sentinel-ready" if gate else "block"
    return summary


def build_package(checks, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const driftChecks = "
        + json.dumps(checks, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Drift Sentinel\n\nCompares sealed interactive counts across command, health, release, and audit registries.\n")


def build_registry(checks, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "driftChecks": checks}, indent=2) + "\n")


def build_page(checks, summary):
    stats = [
        ("Status", summary["status"]),
        ("Checks", summary["checks"]),
        ("Passing", summary["passingChecks"]),
        ("Blocked", summary["blockedChecks"]),
        ("Demos", summary["demos"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows = ""
    for check in checks:
        rows += (
            "<tr>"
            f"<td>{esc(check['category'])}</td>"
            f"<td>{esc(check['metric'])}</td>"
            f"<td>{esc(check['leftSource'])}: {esc(check['left'])}</td>"
            f"<td>{esc(check['rightSource'])}: {esc(check['right'])}</td>"
            f"<td>{esc(check['status'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Drift Sentinel</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1300px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:760px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive drift</div><h1>Interactive Drift Sentinel</h1><p>Compares sealed counts across command center, health monitor, release pack, and audit ledger before release.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-health-monitor.html">health monitor</a><a href="analysis/cvpr_interactive_drift_sentinel/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Sentinel Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>demos={esc(summary['demos'])} artifacts={esc(summary['artifacts'])} controls={esc(summary['controls'])} cases={esc(summary['scenarioCases'])}</code></section><section class="panel"><h2>Drift Checks</h2><div class="table-wrap"><table><thead><tr><th>Category</th><th>Metric</th><th>Left</th><th>Right</th><th>Status</th></tr></thead><tbody>{rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_drift_sentinel.py - package: source-code/learning/cvpr-interactive-drift-sentinel</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-drift-sentinel.html", page)


def main():
    checks = build_checks()
    summary = summarize(checks)
    build_package(checks, summary)
    build_registry(checks, summary)
    build_page(checks, summary)
    print(f"wrote cvpr-interactive-drift-sentinel.html: {summary['checks']} checks, status {summary['status']}")


if __name__ == "__main__":
    main()

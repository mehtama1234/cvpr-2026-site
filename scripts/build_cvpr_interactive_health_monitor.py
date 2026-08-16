"""Build the CVPR interactive health monitor."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COMMAND_CENTER = ROOT / "analysis/cvpr_interactive_command_center/registry.json"
FULL_STACK = ROOT / "analysis/cvpr_full_stack_validation/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_health_monitor"
BASE = ROOT / "source-code/learning/cvpr-interactive-health-monitor"

CORE = """export function probeReady(probe) {
  return probe.status === "pass" &&
    probe.observed === probe.expected;
}

export function summarizeProbes(probes) {
  return {
    probes: probes.length,
    passing: probes.filter(probeReady).length,
    blocked: probes.filter((probe) => !probeReady(probe)).length,
    surfaces: new Set(probes.map((probe) => probe.surface)).size
  };
}

export function monitorGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "monitor-ready") return "block";
  if (summary.surfaces !== 6) return "block";
  if (summary.probes !== 32) return "block";
  if (summary.passingProbes !== 32) return "block";
  if (summary.blockedProbes !== 0) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "monitor-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { monitorProbes, summary } from "../src/fixtures.js";
import { monitorGate, probeReady, summarizeProbes } from "../src/core.js";

assert.equal(monitorProbes.length, 32);
assert.equal(monitorProbes.every(probeReady), true);
const derived = summarizeProbes(monitorProbes);
assert.equal(derived.passing, summary.passingProbes);
assert.equal(derived.blocked, 0);
assert.equal(derived.surfaces, 7);
assert.equal(summary.surfaces, 6);
assert.equal(summary.demos, 40);
assert.equal(summary.holds, 0);
assert.equal(monitorGate(summary), "monitor-ready");
console.log("ok cvpr-interactive-health-monitor:", summary.probes, "probes");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def add_probe(probes, surface, probe, observed, expected):
    probes.append({
        "surface": surface,
        "probe": probe,
        "observed": observed,
        "expected": expected,
        "status": "pass" if observed == expected else "block",
    })


def build_probes(command_data, full_stack):
    probes = []
    for row in command_data["commandSurfaces"]:
        add_probe(probes, row["surface"], "ready-status", row["status"], row["readyStatus"])
        add_probe(probes, row["surface"], "page-present", row["pageExists"], True)
        add_probe(probes, row["surface"], "registry-present", row["registryExists"], True)
        add_probe(probes, row["surface"], "validator-present", row["validatorExists"], True)
        add_probe(probes, row["surface"], "rows-positive", row["rowCount"] > 0, True)
    fs = full_stack["summary"]
    add_probe(probes, "full-stack", "report-present", FULL_STACK.exists(), True)
    add_probe(probes, "full-stack", "import-issues", fs["importIssues"], 0)
    return probes


def summarize(command_data, full_stack, probes):
    command = command_data["summary"]
    fs = full_stack["summary"]
    summary = {
        "monitor": "cvpr-interactive-health-monitor",
        "status": "monitor-ready",
        "surfaces": command["surfaces"],
        "probes": len(probes),
        "passingProbes": len([probe for probe in probes if probe["status"] == "pass"]),
        "blockedProbes": len([probe for probe in probes if probe["status"] != "pass"]),
        "fullStackStatus": fs["status"],
        "fullStackSteps": fs["steps"],
        "packageTests": fs["packageTests"],
        "demos": command["demos"],
        "artifacts": command["artifacts"],
        "controls": command["controls"],
        "scenarioCases": command["scenarioCases"],
        "promoteDecisions": command["promoteDecisions"],
        "auditEvents": command["auditEvents"],
        "holds": command["holds"],
        "validator": "scripts/verify_cvpr_interactive_health_monitor.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["surfaces"] == 6
        and summary["probes"] == 32
        and summary["passingProbes"] == 32
        and summary["blockedProbes"] == 0
        and summary["demos"] == 40
        and summary["artifacts"] == 120
        and summary["controls"] == 200
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["auditEvents"] == 5
        and summary["holds"] == 0
    )
    summary["status"] = "monitor-ready" if gate else "block"
    return summary


def build_package(probes, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const monitorProbes = "
        + json.dumps(probes, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Health Monitor\n\nHealth probes for the sealed CVPR interactive command-center surfaces and full-stack validator.\n")


def build_registry(probes, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "monitorProbes": probes}, indent=2) + "\n")


def build_page(probes, summary):
    stats = [
        ("Status", summary["status"]),
        ("Surfaces", summary["surfaces"]),
        ("Probes", summary["probes"]),
        ("Passing", summary["passingProbes"]),
        ("Full Stack", summary["fullStackStatus"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows = ""
    for probe in probes:
        rows += (
            "<tr>"
            f"<td>{esc(probe['surface'])}</td>"
            f"<td>{esc(probe['probe'])}</td>"
            f"<td>{esc(probe['observed'])}</td>"
            f"<td>{esc(probe['expected'])}</td>"
            f"<td>{esc(probe['status'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Health Monitor</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1300px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:760px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive health</div><h1>Interactive Health Monitor</h1><p>Health probes for every sealed interactive command-center surface plus the full-stack validation report.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-command-center.html">command center</a><a href="analysis/cvpr_interactive_health_monitor/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Monitor Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>steps={esc(summary['fullStackSteps'])} packageTests={esc(summary['packageTests'])} demos={esc(summary['demos'])}</code></section><section class="panel"><h2>Health Probes</h2><div class="table-wrap"><table><thead><tr><th>Surface</th><th>Probe</th><th>Observed</th><th>Expected</th><th>Status</th></tr></thead><tbody>{rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_health_monitor.py - package: source-code/learning/cvpr-interactive-health-monitor</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-health-monitor.html", page)


def main():
    command_data = read_json(COMMAND_CENTER)
    full_stack = read_json(FULL_STACK)
    probes = build_probes(command_data, full_stack)
    summary = summarize(command_data, full_stack, probes)
    build_package(probes, summary)
    build_registry(probes, summary)
    build_page(probes, summary)
    print(f"wrote cvpr-interactive-health-monitor.html: {summary['probes']} probes, status {summary['status']}")


if __name__ == "__main__":
    main()

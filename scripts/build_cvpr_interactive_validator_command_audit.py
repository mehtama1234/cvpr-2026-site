"""Build the CVPR interactive validator command audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HANDOFF = ROOT / "analysis/cvpr_interactive_handoff_bundle/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_validator_command_audit"
BASE = ROOT / "source-code/learning/cvpr-interactive-validator-command-audit"
EXTRA_TARGETS = [
    ("navigation-manifest-audit", "scripts/build_cvpr_interactive_navigation_manifest_audit.py", "scripts/verify_cvpr_interactive_navigation_manifest_audit.py"),
    ("package-integrity-audit", "scripts/build_cvpr_interactive_package_integrity_audit.py", "scripts/verify_cvpr_interactive_package_integrity_audit.py"),
]

CORE = """export function commandReady(row) {
  return row.status === "command-ready" &&
    row.builderPresent === true &&
    row.verifierPresent === true &&
    row.builderExists === true &&
    row.verifierExists === true;
}

export function summarizeCommands(rows) {
  return {
    targets: rows.length,
    ready: rows.filter(commandReady).length,
    missing: rows.filter((row) => !commandReady(row)).length,
    commands: rows.reduce((sum, row) => sum + Number(row.builderPresent) + Number(row.verifierPresent), 0)
  };
}

export function commandAuditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "command-audit-ready") return "block";
  if (summary.targets !== 13) return "block";
  if (summary.readyTargets !== 13) return "block";
  if (summary.missingTargets !== 0) return "block";
  if (summary.commandsPresent !== 26) return "block";
  if (summary.handoffItems !== 11) return "block";
  if (summary.holds !== 0) return "block";
  return "command-audit-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { commandRows, summary } from "../src/fixtures.js";
import { commandAuditGate, commandReady, summarizeCommands } from "../src/core.js";

assert.equal(commandRows.length, 13);
assert.equal(commandRows.every(commandReady), true);
const derived = summarizeCommands(commandRows);
assert.equal(derived.ready, summary.readyTargets);
assert.equal(derived.missing, 0);
assert.equal(derived.commands, 26);
assert.equal(summary.handoffItems, 11);
assert.equal(summary.holds, 0);
assert.equal(commandAuditGate(summary), "command-audit-ready");
console.log("ok cvpr-interactive-validator-command-audit:", summary.targets, "targets");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_handoff():
    return json.loads(HANDOFF.read_text(encoding="utf-8"))


def infer_builder(validator):
    return validator.replace("scripts/verify_", "scripts/build_", 1)


def build_rows(handoff):
    validator_text = (ROOT / "scripts/validate_cvpr_full_stack.py").read_text(encoding="utf-8")
    targets = [(item["layer"], infer_builder(item["validator"]), item["validator"]) for item in handoff["handoffItems"]]
    targets.extend(EXTRA_TARGETS)
    rows = []
    for target, builder, verifier in targets:
        builder_present = builder in validator_text
        verifier_present = verifier in validator_text
        rows.append({
            "target": target,
            "builder": builder,
            "verifier": verifier,
            "builderPresent": builder_present,
            "verifierPresent": verifier_present,
            "builderExists": (ROOT / builder).exists(),
            "verifierExists": (ROOT / verifier).exists(),
            "status": "command-ready" if builder_present and verifier_present and (ROOT / builder).exists() and (ROOT / verifier).exists() else "missing",
        })
    return rows


def summarize(rows, handoff_summary):
    summary = {
        "audit": "cvpr-interactive-validator-command-audit",
        "status": "command-audit-ready",
        "sourceHandoff": "analysis/cvpr_interactive_handoff_bundle/registry.json",
        "targets": len(rows),
        "readyTargets": len([row for row in rows if row["status"] == "command-ready"]),
        "missingTargets": len([row for row in rows if row["status"] != "command-ready"]),
        "commandsPresent": sum(int(row["builderPresent"]) + int(row["verifierPresent"]) for row in rows),
        "handoffItems": handoff_summary["items"],
        "demos": handoff_summary["demos"],
        "scenarioCases": handoff_summary["scenarioCases"],
        "promoteDecisions": handoff_summary["promoteDecisions"],
        "holds": handoff_summary["holds"],
        "validator": "scripts/verify_cvpr_interactive_validator_command_audit.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["targets"] == 13
        and summary["readyTargets"] == 13
        and summary["missingTargets"] == 0
        and summary["commandsPresent"] == 26
        and summary["handoffItems"] == 11
        and summary["demos"] == 40
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["holds"] == 0
    )
    summary["status"] = "command-audit-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const commandRows = "
        + json.dumps(rows, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Validator Command Audit\n\nVerifies sealed interactive builders and validators are present in the full-stack command sequence.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "commandRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Targets", summary["targets"]),
        ("Ready", summary["readyTargets"]),
        ("Missing", summary["missingTargets"]),
        ("Commands", summary["commandsPresent"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    table_rows = ""
    for row in rows:
        table_rows += (
            "<tr>"
            f"<td>{esc(row['target'])}<span>{esc(row['status'])}</span></td>"
            f"<td>{esc(row['builder'])}</td>"
            f"<td>{esc(row['verifier'])}</td>"
            f"<td>{esc(row['builderPresent'])} / {esc(row['verifierPresent'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Validator Command Audit</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1380px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:960px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive validation commands</div><h1>Interactive Validator Command Audit</h1><p>Verifies every sealed interactive builder and verifier is present in the full-stack validation command sequence.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-package-integrity-audit.html">package audit</a><a href="analysis/cvpr_interactive_validator_command_audit/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Command Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>targets={esc(summary['targets'])} commands={esc(summary['commandsPresent'])}</code></section><section class="panel"><h2>Validation Commands</h2><div class="table-wrap"><table><thead><tr><th>Target</th><th>Builder</th><th>Verifier</th><th>Present</th></tr></thead><tbody>{table_rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_validator_command_audit.py - package: source-code/learning/cvpr-interactive-validator-command-audit</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-validator-command-audit.html", page)


def main():
    handoff = read_handoff()
    rows = build_rows(handoff)
    summary = summarize(rows, handoff["summary"])
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-validator-command-audit.html: {summary['targets']} targets, status {summary['status']}")


if __name__ == "__main__":
    main()

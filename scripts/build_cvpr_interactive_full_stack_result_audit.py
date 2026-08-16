"""Build the CVPR interactive full-stack result audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COMMAND_AUDIT = ROOT / "analysis/cvpr_interactive_validator_command_audit/registry.json"
FULL_STACK = ROOT / "analysis/cvpr_full_stack_validation/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_full_stack_result_audit"
BASE = ROOT / "source-code/learning/cvpr-interactive-full-stack-result-audit"

CORE = """export function resultReady(row) {
  return row.builderReturnCode === 0 &&
    row.verifierReturnCode === 0 &&
    row.builderSeen === true &&
    row.verifierSeen === true;
}

export function summarizeResults(rows) {
  return {
    targets: rows.length,
    ready: rows.filter(resultReady).length,
    missing: rows.filter((row) => !resultReady(row)).length,
    executedCommands: rows.reduce((sum, row) => sum + Number(row.builderSeen) + Number(row.verifierSeen), 0)
  };
}

export function resultAuditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "result-audit-ready") return "block";
  if (summary.targets !== 13) return "block";
  if (summary.readyTargets !== 13) return "block";
  if (summary.missingTargets !== 0) return "block";
  if (summary.executedCommands !== 26) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.holds !== 0) return "block";
  return "result-audit-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { resultRows, summary } from "../src/fixtures.js";
import { resultAuditGate, resultReady, summarizeResults } from "../src/core.js";

assert.equal(resultRows.length, 13);
const derived = summarizeResults(resultRows);
assert.equal(derived.ready, summary.readyTargets);
assert.equal(derived.missing, summary.missingTargets);
assert.equal(derived.executedCommands, summary.executedCommands);
assert.equal(summary.readyTargets + summary.missingTargets, summary.targets);
assert.equal(summary.holds, 0);
assert.ok(["result-audit-ready", "block"].includes(summary.status));
if (summary.status === "result-audit-ready") {
  assert.equal(resultRows.every(resultReady), true);
  assert.equal(summary.fullStackStatus, "valid");
  assert.equal(resultAuditGate(summary), "result-audit-ready");
} else {
  assert.equal(resultAuditGate(summary), "block");
}
console.log("ok cvpr-interactive-full-stack-result-audit:", summary.targets, "targets");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def command_map(full_stack):
    return {step["command"]: step["returnCode"] for step in full_stack["steps"]}


def build_rows(command_rows, full_stack):
    seen = command_map(full_stack)
    rows = []
    for row in command_rows:
        builder_cmd = f"python3 {row['builder']}"
        verifier_cmd = f"python3 {row['verifier']}"
        rows.append({
            "target": row["target"],
            "builderCommand": builder_cmd,
            "verifierCommand": verifier_cmd,
            "builderSeen": builder_cmd in seen,
            "verifierSeen": verifier_cmd in seen,
            "builderReturnCode": seen.get(builder_cmd, -1),
            "verifierReturnCode": seen.get(verifier_cmd, -1),
            "status": "result-ready" if seen.get(builder_cmd) == 0 and seen.get(verifier_cmd) == 0 else "missing",
        })
    return rows


def summarize(rows, command_summary, full_stack_summary):
    summary = {
        "audit": "cvpr-interactive-full-stack-result-audit",
        "status": "result-audit-ready",
        "sourceCommandAudit": "analysis/cvpr_interactive_validator_command_audit/registry.json",
        "sourceFullStack": "analysis/cvpr_full_stack_validation/registry.json",
        "targets": len(rows),
        "readyTargets": len([row for row in rows if row["status"] == "result-ready"]),
        "missingTargets": len([row for row in rows if row["status"] != "result-ready"]),
        "executedCommands": sum(int(row["builderSeen"]) + int(row["verifierSeen"]) for row in rows),
        "fullStackStatus": full_stack_summary["status"],
        "fullStackSteps": full_stack_summary["steps"],
        "fullStackPackageTests": full_stack_summary["packageTests"],
        "commandAuditTargets": command_summary["targets"],
        "demos": command_summary["demos"],
        "scenarioCases": command_summary["scenarioCases"],
        "promoteDecisions": command_summary["promoteDecisions"],
        "holds": command_summary["holds"],
        "validator": "scripts/verify_cvpr_interactive_full_stack_result_audit.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["targets"] == 13
        and summary["readyTargets"] == 13
        and summary["missingTargets"] == 0
        and summary["executedCommands"] == 26
        and summary["fullStackStatus"] == "valid"
        and summary["commandAuditTargets"] == 13
        and summary["demos"] == 40
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["holds"] == 0
    )
    summary["status"] = "result-audit-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const resultRows = " + json.dumps(rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Interactive Full-Stack Result Audit\n\nVerifies interactive validation commands executed successfully in the latest full-stack report.\n")


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "resultRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Targets", summary["targets"]),
        ("Ready", summary["readyTargets"]),
        ("Missing", summary["missingTargets"]),
        ("Commands", summary["executedCommands"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    table_rows = ""
    for row in rows:
        table_rows += (
            "<tr>"
            f"<td>{esc(row['target'])}<span>{esc(row['status'])}</span></td>"
            f"<td>{esc(row['builderReturnCode'])}</td>"
            f"<td>{esc(row['verifierReturnCode'])}</td>"
            f"<td>{esc(row['builderCommand'])}</td>"
            f"<td>{esc(row['verifierCommand'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Full-Stack Result Audit</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1420px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:1120px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive validation results</div><h1>Interactive Full-Stack Result Audit</h1><p>Verifies every interactive validation command target executed successfully in the latest full-stack validation report.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-validator-command-audit.html">command audit</a><a href="analysis/cvpr_interactive_full_stack_result_audit/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Result Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>fullStack={esc(summary['fullStackStatus'])} steps={esc(summary['fullStackSteps'])} packageTests={esc(summary['fullStackPackageTests'])}</code></section><section class="panel"><h2>Executed Commands</h2><div class="table-wrap"><table><thead><tr><th>Target</th><th>Build RC</th><th>Verify RC</th><th>Builder</th><th>Verifier</th></tr></thead><tbody>{table_rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_full_stack_result_audit.py - package: source-code/learning/cvpr-interactive-full-stack-result-audit</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-full-stack-result-audit.html", page)


def main():
    command_audit = read_json(COMMAND_AUDIT)
    full_stack = read_json(FULL_STACK)
    rows = build_rows(command_audit["commandRows"], full_stack)
    summary = summarize(rows, command_audit["summary"], full_stack["summary"])
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-full-stack-result-audit.html: {summary['targets']} targets, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the CVPR remediation closeout pack."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-closeout-pack"
ANALYSIS = ROOT / "analysis/cvpr_remediation_closeout_pack"

SOURCES = {
    "brief": ROOT / "analysis/cvpr_remediation_release_brief/registry.json",
    "command": ROOT / "analysis/cvpr_remediation_command_center/registry.json",
    "ledger": ROOT / "analysis/cvpr_remediation_audit_ledger/registry.json",
    "canary": ROOT / "analysis/cvpr_remediation_canary_monitor/registry.json",
    "rollback": ROOT / "analysis/cvpr_remediation_rollback_drillbook/registry.json",
    "rehearsal": ROOT / "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

CORE = """export function closeoutReady(row) {
  return Boolean(row.ownerSurface && row.evidence && row.verifyCommand && row.closeoutCommand && row.actual === row.expected);
}

export function closeoutGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "sealed") return "block";
  if (summary.rows !== 7) return "block";
  if (summary.readyRows !== 7) return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.postBlock !== 0) return "block";
  if (summary.canaryRollback !== 0) return "block";
  if (summary.rehearsalMisses !== 0) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "sealed";
}

export function summarizeCloseout(rows, brief) {
  return {
    rows: rows.length,
    readyRows: rows.filter(closeoutReady).length,
    releaseGate: brief.gate,
    postBlock: brief.postBlock,
    canaryRollback: brief.canaryRollback,
    rehearsalMisses: brief.rehearsalMisses,
    fullStackStatus: brief.fullStackStatus
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { closeoutRows, remediationBrief, summary } from "../src/fixtures.js";
import { closeoutGate, closeoutReady, summarizeCloseout } from "../src/core.js";

const derived = summarizeCloseout(closeoutRows, remediationBrief);
assert.equal(derived.rows, 7);
assert.equal(derived.readyRows, 7);
assert.equal(closeoutRows.filter(closeoutReady).length, 7);
assert.equal(summary.rows, 7);
assert.equal(summary.readyRows, 7);
assert.equal(summary.releaseGate, "release");
assert.equal(summary.postBlock, 0);
assert.equal(summary.canaryRollback, 0);
assert.equal(summary.rehearsalMisses, 0);
assert.equal(summary.fullStackStatus, "valid");
assert.equal(closeoutGate(summary), "sealed");
assert.equal(summary.status, "sealed");
console.log("ok cvpr-remediation-closeout-pack:", summary.readyRows, "rows sealed");
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


def build_rows(data):
    specs = [
        ("brief", "Remediation release brief", "cvpr-remediation-release-brief.html", data["brief"]["summary"]["gate"], "release", "python3 scripts/verify_cvpr_remediation_release_brief.py"),
        ("command", "Remediation command center", "cvpr-remediation-command-center.html", data["command"]["summary"]["status"], "operator-ready", "python3 scripts/verify_cvpr_remediation_command_center.py"),
        ("ledger", "Remediation audit ledger", "cvpr-remediation-audit-ledger.html", data["ledger"]["summary"]["status"], "complete", "python3 scripts/verify_cvpr_remediation_audit_ledger.py"),
        ("canary", "Remediation canary monitor", "cvpr-remediation-canary-monitor.html", data["canary"]["summary"]["status"], "watching", "python3 scripts/verify_cvpr_remediation_canary_monitor.py"),
        ("rollback", "Remediation rollback drillbook", "cvpr-remediation-rollback-drillbook.html", data["rollback"]["summary"]["status"], "ready", "python3 scripts/verify_cvpr_remediation_rollback_drillbook.py"),
        ("rehearsal", "Remediation rollback rehearsal lab", "cvpr-remediation-rollback-rehearsal-lab.html", data["rehearsal"]["summary"]["status"], "release", "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py"),
        ("validation", "Full-stack validation", "cvpr-validation-center.html", data["validation"]["summary"]["status"], "valid", "python3 scripts/validate_cvpr_full_stack.py"),
    ]
    rows = []
    for index, (key, label, surface, actual, expected, verify) in enumerate(specs, 1):
        rows.append(
            {
                "id": f"closeout-{index:02d}-{key}",
                "label": label,
                "ownerSurface": surface,
                "actual": actual,
                "expected": expected,
                "evidence": str(SOURCES[key].relative_to(ROOT)),
                "verifyCommand": verify,
                "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
                "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
                "status": "sealed" if actual == expected else "block",
            }
        )
    return rows


def summarize(data, rows):
    brief = data["brief"]["summary"]
    summary = {
        "demo": "cvpr-remediation-closeout-pack",
        "status": "sealed",
        "rows": len(rows),
        "readyRows": len([row for row in rows if row["status"] == "sealed"]),
        "releaseGate": brief["gate"],
        "posture": brief["posture"],
        "postBlock": brief["postBlock"],
        "canaryRollback": brief["canaryRollback"],
        "rehearsalMisses": brief["rehearsalMisses"],
        "promote": brief["promote"],
        "monitor": brief["monitor"],
        "rollbackDrills": brief["rollbackDrills"],
        "packageTests": data["validation"]["summary"]["packageTests"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["rows"] == 7
        and summary["readyRows"] == 7
        and summary["releaseGate"] == "release"
        and summary["postBlock"] == 0
        and summary["canaryRollback"] == 0
        and summary["rehearsalMisses"] == 0
        and summary["fullStackStatus"] == "valid"
    )
    summary["status"] = "sealed" if gate else "block"
    return summary


def build_package(data, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const remediationBrief = " + json.dumps(data["brief"]["summary"], indent=2) + ";\n"
        "export const closeoutRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Closeout Pack\n\nChange-control closeout pack sealing the remediation release brief, command center, ledger, canary, rollback, rehearsal, and validation evidence.\n")


def build_registry(rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "closeoutRows": rows, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}}, indent=2) + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Ready", summary["readyRows"]),
        ("Gate", summary["releaseGate"]),
        ("Promote", summary["promote"]),
        ("Monitor", summary["monitor"]),
        ("Rollback", summary["canaryRollback"]),
        ("Tests", summary["packageTests"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td><a href="{esc(row['ownerSurface'])}">{esc(row['label'])}</a></td><td>{esc(row['actual'])}</td><td>{esc(row['expected'])}</td><td>{esc(row['evidence'])}</td><td><code>{esc(row['verifyCommand'])}</code></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Closeout Pack</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:96ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:920px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - remediation closeout</div><h1>Remediation Closeout Pack</h1><p>Change-control closeout for the remediation release brief, command center, audit ledger, canary monitor, rollback drills, rehearsals, and full validation evidence.</p><nav><a href="index.html">all themes</a><a href="cvpr-remediation-release-brief.html">release brief</a><a href="cvpr-remediation-command-center.html">command center</a><a href="cvpr-release-change-control.html">release change control</a><a href="analysis/cvpr_remediation_closeout_pack/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Closeout Rows</h2><table><thead><tr><th>Surface</th><th>Actual</th><th>Expected</th><th>Evidence</th><th>Verifier</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Closeout Gate</h2><code>{esc(summary['fullStackCommand'])} - post-block {summary['postBlock']} - rollback alerts {summary['canaryRollback']} - rehearsal misses {summary['rehearsalMisses']}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_closeout_pack.py - tested package under source-code/learning/cvpr-remediation-closeout-pack</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-closeout-pack.html", page)


def main():
    data = load_input()
    rows = build_rows(data)
    summary = summarize(data, rows)
    build_package(data, rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-remediation-closeout-pack.html: {summary['readyRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

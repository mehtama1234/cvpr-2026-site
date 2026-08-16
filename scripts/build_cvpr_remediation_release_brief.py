"""Build the CVPR remediation release brief demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-remediation-release-brief"
ANALYSIS = ROOT / "analysis/cvpr_remediation_release_brief"

SOURCES = {
    "commandCenter": ROOT / "analysis/cvpr_remediation_command_center/registry.json",
    "ledger": ROOT / "analysis/cvpr_remediation_audit_ledger/registry.json",
    "canary": ROOT / "analysis/cvpr_remediation_canary_monitor/registry.json",
    "rollback": ROOT / "analysis/cvpr_remediation_rollback_drillbook/registry.json",
    "rehearsal": ROOT / "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

CORE = """export function releaseGate(summary) {
  return summary.status === "release" &&
    summary.commandStatus === "operator-ready" &&
    summary.ledgerStatus === "complete" &&
    summary.postBlock === 0 &&
    summary.canaryRollback === 0 &&
    summary.rehearsalMisses === 0 &&
    summary.fullStackStatus === "valid" ? "release" : "block";
}

export function riskPosture(summary) {
  if (summary.canaryRollback === 0 && summary.postBlock === 0 && summary.rehearsalMisses === 0) return "controlled-watch";
  if (summary.canaryRollback > 0 || summary.postBlock > 0) return "rollback-required";
  return "review";
}

export function outcomeLine(summary) {
  return `${summary.gauntletBlocks} gauntlet blocks · ${summary.clearedBlocks} cleared · ${summary.promote} promote · ${summary.monitor} monitor · ${summary.rollbackDrills} rollback drills`;
}
"""

TEST = """import assert from "node:assert/strict";
import { summary } from "../src/fixtures.js";
import { outcomeLine, releaseGate, riskPosture } from "../src/core.js";

assert.equal(releaseGate(summary), "release");
assert.equal(riskPosture(summary), "controlled-watch");
assert.ok(outcomeLine(summary).includes("14 cleared"));
assert.equal(summary.gate, "release");
assert.equal(summary.posture, "controlled-watch");
assert.equal(summary.commandStatus, "operator-ready");
assert.equal(summary.ledgerStatus, "complete");
assert.equal(summary.postBlock, 0);
assert.equal(summary.canaryRollback, 0);
assert.equal(summary.rehearsalMisses, 0);
assert.equal(summary.fullStackStatus, "valid");
console.log("ok cvpr-remediation-release-brief:", summary.gate, summary.posture);
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


def summarize(data):
    command = data["commandCenter"]["summary"]
    ledger = data["ledger"]["summary"]
    canary = data["canary"]["summary"]
    rollback = data["rollback"]["summary"]
    rehearsal = data["rehearsal"]["summary"]
    validation = data["validation"]["summary"]
    summary = {
        "demo": "cvpr-remediation-release-brief",
        "status": "release",
        "commandStatus": command["status"],
        "ledgerStatus": ledger["status"],
        "surfaces": command["surfaces"],
        "readySurfaces": command["readySurfaces"],
        "stages": ledger["stages"],
        "readyStages": ledger["readyStages"],
        "gauntletRows": ledger["gauntletRows"],
        "gauntletBlocks": ledger["gauntletBlocks"],
        "actionableRows": ledger["actionableRows"],
        "clearedBlocks": ledger["clearedBlocks"],
        "postBlock": ledger["postBlock"],
        "promote": ledger["promote"],
        "monitor": ledger["monitor"],
        "canaryClean": canary["clean"],
        "canaryWatch": canary["watch"],
        "canaryRollback": canary["rollback"],
        "rollbackDrills": rollback["drills"],
        "readyDrills": rollback["readyDrills"],
        "rehearsals": rehearsal["rehearsals"],
        "rehearsalMisses": rehearsal["misses"],
        "themes": ledger["themes"],
        "incidents": ledger["incidents"],
        "packageTests": validation["packageTests"],
        "fullStackStatus": validation["status"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["commandStatus"] == "operator-ready"
        and summary["ledgerStatus"] == "complete"
        and summary["readySurfaces"] == summary["surfaces"] == 7
        and summary["readyStages"] == summary["stages"] == 7
        and summary["postBlock"] == 0
        and summary["canaryRollback"] == 0
        and summary["rehearsalMisses"] == 0
        and summary["fullStackStatus"] == "valid"
    )
    summary["gate"] = "release" if gate else "block"
    summary["posture"] = "controlled-watch" if gate else "review"
    summary["outcome"] = f"{summary['gauntletBlocks']} gauntlet blocks · {summary['clearedBlocks']} cleared · {summary['promote']} promote · {summary['monitor']} monitor · {summary['rollbackDrills']} rollback drills"
    return summary


def build_package(summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Remediation Release Brief\n\nOperator handoff summarizing the remediation chain from gauntlet failures to canary monitoring and rollback rehearsal readiness.\n")


def build_registry(data, summary):
    evidence = [
        {"label": "Remediation command center", "page": "cvpr-remediation-command-center.html", "registry": "analysis/cvpr_remediation_command_center/registry.json", "status": data["commandCenter"]["summary"]["status"]},
        {"label": "Remediation audit ledger", "page": "cvpr-remediation-audit-ledger.html", "registry": "analysis/cvpr_remediation_audit_ledger/registry.json", "status": data["ledger"]["summary"]["status"]},
        {"label": "Remediation canary monitor", "page": "cvpr-remediation-canary-monitor.html", "registry": "analysis/cvpr_remediation_canary_monitor/registry.json", "status": data["canary"]["summary"]["status"]},
        {"label": "Remediation rollback drillbook", "page": "cvpr-remediation-rollback-drillbook.html", "registry": "analysis/cvpr_remediation_rollback_drillbook/registry.json", "status": data["rollback"]["summary"]["status"]},
        {"label": "Remediation rollback rehearsal lab", "page": "cvpr-remediation-rollback-rehearsal-lab.html", "registry": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json", "status": data["rehearsal"]["summary"]["status"]},
        {"label": "Full-stack validation", "page": "cvpr-validation-center.html", "registry": "analysis/cvpr_full_stack_validation/registry.json", "status": data["validation"]["summary"]["status"]},
    ]
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "evidence": evidence,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary):
    stats = [
        ("Gate", summary["gate"]),
        ("Posture", summary["posture"]),
        ("Cleared", summary["clearedBlocks"]),
        ("Promote", summary["promote"]),
        ("Monitor", summary["monitor"]),
        ("Rollback", summary["canaryRollback"]),
        ("Drills", summary["rollbackDrills"]),
        ("Tests", summary["packageTests"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    evidence_rows = [
        ("Command center", "cvpr-remediation-command-center.html", summary["commandStatus"], f"{summary['readySurfaces']}/{summary['surfaces']} surfaces"),
        ("Audit ledger", "cvpr-remediation-audit-ledger.html", summary["ledgerStatus"], f"{summary['readyStages']}/{summary['stages']} stages"),
        ("Canary monitor", "cvpr-remediation-canary-monitor.html", "watching", f"{summary['canaryClean']} clean / {summary['canaryWatch']} watch"),
        ("Rollback drillbook", "cvpr-remediation-rollback-drillbook.html", "ready", f"{summary['readyDrills']} drills"),
        ("Rehearsal lab", "cvpr-remediation-rollback-rehearsal-lab.html", "release", f"{summary['rehearsals']} rehearsals / {summary['rehearsalMisses']} misses"),
        ("Validation", "cvpr-validation-center.html", summary["fullStackStatus"], f"{summary['packageTests']} package tests"),
    ]
    rows_html = "".join(
        f"""<tr><td><a href="{esc(page)}">{esc(label)}</a></td><td>{esc(status)}</td><td>{esc(metric)}</td></tr>"""
        for label, page, status, metric in evidence_rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Remediation Release Brief</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:96ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · remediation release brief</div><h1>Remediation Release Brief</h1><p>Final operator handoff for the gauntlet remediation chain: failure count, cleared blocks, promotion split, canary posture, rollback readiness, rehearsal coverage, and validation gate.</p><nav><a href="index.html">all themes</a><a href="cvpr-remediation-command-center.html">command center</a><a href="cvpr-remediation-audit-ledger.html">audit ledger</a><a href="cvpr-production-release-brief.html">production brief</a><a href="analysis/cvpr_remediation_release_brief/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Release Position</h2><code>{esc(summary['outcome'])} · post-block {summary['postBlock']} · rehearsal misses {summary['rehearsalMisses']} · {esc(summary['fullStackCommand'])}</code></section><section class="panel"><h2>Evidence Chain</h2><table><thead><tr><th>Surface</th><th>Status</th><th>Metric</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_remediation_release_brief.py · tested package under source-code/learning/cvpr-remediation-release-brief</div></footer></body></html>"""
    write(ROOT / "cvpr-remediation-release-brief.html", page)


def main():
    data = load_input()
    summary = summarize(data)
    build_package(summary)
    build_registry(data, summary)
    build_page(summary)
    print(f"wrote cvpr-remediation-release-brief.html: {summary['gate']} gate, {summary['posture']} posture")


if __name__ == "__main__":
    main()

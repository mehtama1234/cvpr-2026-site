"""Build the CVPR interactive audit ledger."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANALYSIS = ROOT / "analysis/cvpr_interactive_audit_ledger"
BASE = ROOT / "source-code/learning/cvpr-interactive-audit-ledger"

EVENTS = [
    {
        "event": "coverage-sealed",
        "registry": "analysis/cvpr_interactive_coverage_portfolio/registry.json",
        "page": "cvpr-interactive-coverage-portfolio.html",
        "package": "source-code/learning/cvpr-interactive-coverage-portfolio",
        "validator": "scripts/verify_cvpr_interactive_coverage_portfolio.py",
        "expectedStatus": "coverage-ready",
    },
    {
        "event": "console-sealed",
        "registry": "analysis/cvpr_interactive_console/registry.json",
        "page": "cvpr-interactive-console.html",
        "package": "source-code/learning/cvpr-interactive-console",
        "validator": "scripts/verify_cvpr_interactive_console.py",
        "expectedStatus": "console-ready",
    },
    {
        "event": "scenario-runner-sealed",
        "registry": "analysis/cvpr_interactive_scenario_runner/registry.json",
        "page": "cvpr-interactive-scenario-runner.html",
        "package": "source-code/learning/cvpr-interactive-scenario-runner",
        "validator": "scripts/verify_cvpr_interactive_scenario_runner.py",
        "expectedStatus": "runner-ready",
    },
    {
        "event": "triage-sealed",
        "registry": "analysis/cvpr_interactive_triage_board/registry.json",
        "page": "cvpr-interactive-triage-board.html",
        "package": "source-code/learning/cvpr-interactive-triage-board",
        "validator": "scripts/verify_cvpr_interactive_triage_board.py",
        "expectedStatus": "triage-ready",
    },
    {
        "event": "release-pack-sealed",
        "registry": "analysis/cvpr_interactive_release_pack/registry.json",
        "page": "cvpr-interactive-release-pack.html",
        "package": "source-code/learning/cvpr-interactive-release-pack",
        "validator": "scripts/verify_cvpr_interactive_release_pack.py",
        "expectedStatus": "release-pack-ready",
    },
]

CORE = """export function eventReady(event) {
  return event.status === event.expectedStatus &&
    event.registryExists === true &&
    event.pageExists === true &&
    event.packageExists === true &&
    event.validatorExists === true &&
    event.packageTestExists === true &&
    typeof event.fingerprint === "string" &&
    event.fingerprint.length === 16;
}

export function chainReady(events) {
  return events.length === 5 &&
    events.every(eventReady) &&
    events.every((event, index) => event.sequence === index + 1);
}

export function summarizeLedger(events) {
  return {
    events: events.length,
    readyEvents: events.filter(eventReady).length,
    pages: events.filter((event) => event.pageExists).length,
    registries: events.filter((event) => event.registryExists).length,
    packages: events.filter((event) => event.packageExists).length,
    validators: events.filter((event) => event.validatorExists).length,
    uniqueFingerprints: new Set(events.map((event) => event.fingerprint)).size
  };
}

export function ledgerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ledger-ready") return "block";
  if (summary.events !== 5) return "block";
  if (summary.readyEvents !== 5) return "block";
  if (summary.pages !== 5) return "block";
  if (summary.registries !== 5) return "block";
  if (summary.packages !== 5) return "block";
  if (summary.validators !== 5) return "block";
  if (summary.uniqueFingerprints !== 5) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "ledger-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { auditEvents, summary } from "../src/fixtures.js";
import { chainReady, eventReady, ledgerGate, summarizeLedger } from "../src/core.js";

assert.equal(auditEvents.length, 5);
assert.equal(auditEvents.every(eventReady), true);
assert.equal(chainReady(auditEvents), true);
const derived = summarizeLedger(auditEvents);
assert.equal(derived.readyEvents, summary.readyEvents);
assert.equal(derived.uniqueFingerprints, 5);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.holds, 0);
assert.equal(ledgerGate(summary), "ledger-ready");
console.log("ok cvpr-interactive-audit-ledger:", summary.events, "events");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def file_fingerprint(path):
    data = path.read_bytes()
    return hashlib.sha256(data).hexdigest()[:16]


def build_events():
    rows = []
    for index, event in enumerate(EVENTS, start=1):
        registry_path = ROOT / event["registry"]
        registry = read_json(registry_path)
        registry_summary = registry["summary"]
        status = registry_summary["status"]
        package_path = ROOT / event["package"]
        fingerprint_input = "|".join([
            file_fingerprint(registry_path),
            file_fingerprint(ROOT / event["page"]),
            file_fingerprint(ROOT / event["validator"]),
        ])
        rows.append({
            "sequence": index,
            "event": event["event"],
            "status": status,
            "expectedStatus": event["expectedStatus"],
            "registry": event["registry"],
            "page": event["page"],
            "package": event["package"],
            "validator": event["validator"],
            "registryExists": registry_path.exists(),
            "pageExists": (ROOT / event["page"]).exists(),
            "packageExists": package_path.exists(),
            "validatorExists": (ROOT / event["validator"]).exists(),
            "packageTestExists": (package_path / "tests/core.test.js").exists(),
            "rowCount": len(registry[next(key for key in registry if key != "summary")]),
            "fingerprint": hashlib.sha256(fingerprint_input.encode("utf-8")).hexdigest()[:16],
        })
    return rows


def summarize(events):
    release = read_json(ROOT / "analysis/cvpr_interactive_release_pack/registry.json")["summary"]
    summary = {
        "ledger": "cvpr-interactive-audit-ledger",
        "status": "ledger-ready",
        "events": len(events),
        "readyEvents": len([event for event in events if event["status"] == event["expectedStatus"]]),
        "pages": len([event for event in events if event["pageExists"]]),
        "registries": len([event for event in events if event["registryExists"]]),
        "packages": len([event for event in events if event["packageExists"]]),
        "validators": len([event for event in events if event["validatorExists"]]),
        "packageTests": len([event for event in events if event["packageTestExists"]]),
        "uniqueFingerprints": len({event["fingerprint"] for event in events}),
        "demos": release["demos"],
        "artifacts": release["artifacts"],
        "controls": release["controls"],
        "scenarioCases": release["scenarioCases"],
        "promoteDecisions": release["promoteDecisions"],
        "holds": release["holds"],
        "validator": "scripts/verify_cvpr_interactive_audit_ledger.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["events"] == 5
        and summary["readyEvents"] == 5
        and summary["pages"] == 5
        and summary["registries"] == 5
        and summary["packages"] == 5
        and summary["validators"] == 5
        and summary["packageTests"] == 5
        and summary["uniqueFingerprints"] == 5
        and summary["demos"] == 40
        and summary["artifacts"] == 120
        and summary["controls"] == 200
        and summary["scenarioCases"] == 120
        and summary["promoteDecisions"] == 40
        and summary["holds"] == 0
    )
    summary["status"] = "ledger-ready" if gate else "block"
    return summary


def build_package(events, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const auditEvents = "
        + json.dumps(events, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Interactive Audit Ledger\n\nOrdered evidence ledger across coverage, console, scenario runner, triage board, and release pack.\n",
    )


def build_registry(events, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "auditEvents": events}, indent=2) + "\n")


def build_page(events, summary):
    stats = [
        ("Status", summary["status"]),
        ("Events", summary["events"]),
        ("Demos", summary["demos"]),
        ("Cases", summary["scenarioCases"]),
        ("Promote", summary["promoteDecisions"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows = ""
    for event in events:
        rows += (
            "<tr>"
            f"<td>{esc(event['sequence'])}</td>"
            f"<td>{esc(event['event'])}<span>{esc(event['status'])}</span></td>"
            f"<td>{esc(event['rowCount'])}</td>"
            f"<td><a href=\"{esc(event['page'])}\">page</a></td>"
            f"<td><a href=\"{esc(event['registry'])}\">registry</a></td>"
            f"<td>{esc(event['fingerprint'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Audit Ledger</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1320px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:38px 0 32px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px}}table{{width:100%;border-collapse:collapse;min-width:820px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive audit</div><h1>Interactive Audit Ledger</h1><p>Ordered evidence ledger for the interactive CVPR demo chain, from 40-demo coverage through the sealed release pack.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-release-pack.html">release pack</a><a href="analysis/cvpr_interactive_audit_ledger/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Ledger Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>demos={esc(summary['demos'])} artifacts={esc(summary['artifacts'])} controls={esc(summary['controls'])} cases={esc(summary['scenarioCases'])}</code></section><section class="panel"><h2>Audit Events</h2><div class="table-wrap"><table><thead><tr><th>Seq</th><th>Event</th><th>Rows</th><th>Page</th><th>Registry</th><th>Fingerprint</th></tr></thead><tbody>{rows}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_audit_ledger.py - package: source-code/learning/cvpr-interactive-audit-ledger</div></footer></body></html>"""
    write(ROOT / "cvpr-interactive-audit-ledger.html", page)


def main():
    events = build_events()
    summary = summarize(events)
    build_package(events, summary)
    build_registry(events, summary)
    build_page(events, summary)
    print(f"wrote cvpr-interactive-audit-ledger.html: {summary['events']} events, status {summary['status']}")


if __name__ == "__main__":
    main()

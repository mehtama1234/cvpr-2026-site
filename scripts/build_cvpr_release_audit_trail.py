"""Build the CVPR release audit trail."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-release-audit-trail"
ANALYSIS = ROOT / "analysis/cvpr_release_audit_trail"

SOURCES = {
    "launch": ROOT / "analysis/cvpr_launch_readiness_pack/registry.json",
    "manifest": ROOT / "analysis/cvpr_release_manifest/registry.json",
    "changeControl": ROOT / "analysis/cvpr_release_change_control/registry.json",
    "dependencyGraph": ROOT / "analysis/cvpr_release_dependency_graph/registry.json",
    "monitoring": ROOT / "analysis/cvpr_post_launch_monitoring/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

PASSING = {"release", "ready", "launch-ready", "sealed", "controlled", "watching", "valid", "pass"}

CORE = """export function eventReady(event) {
  return Boolean(event.evidence && event.command && event.status && event.status !== "block" && event.status !== "alert");
}

export function auditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "complete") return "block";
  if (summary.events !== 58) return "block";
  if (summary.readyEvents !== 58) return "block";
  if (summary.launchEvents !== 8) return "block";
  if (summary.manifestEvents !== 13) return "block";
  if (summary.changeEvents !== 13) return "block";
  if (summary.dependencyEvents !== 15) return "block";
  if (summary.monitorEvents !== 9) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "complete";
}

export function summarizeAudit(input) {
  const events = input.events || [];
  const summary = {
    audit: "cvpr-release-audit-trail",
    events: events.length,
    readyEvents: events.filter(eventReady).length,
    launchEvents: events.filter((event) => event.group === "launch").length,
    manifestEvents: events.filter((event) => event.group === "manifest").length,
    changeEvents: events.filter((event) => event.group === "change-control").length,
    dependencyEvents: events.filter((event) => event.group === "dependency").length,
    monitorEvents: events.filter((event) => event.group === "monitoring").length,
    fullStackStatus: input.validation.summary.status
  };
  return { ...summary, status: auditGate({ ...summary, status: "complete" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { auditInput, events, summary } from "../src/fixtures.js";
import { auditGate, eventReady, summarizeAudit } from "../src/core.js";

const derived = summarizeAudit({ ...auditInput, events });
assert.equal(derived.status, "complete");
assert.equal(auditGate(summary), "complete");
assert.equal(summary.events, 58);
assert.equal(summary.readyEvents, 58);
assert.equal(summary.launchEvents, 8);
assert.equal(summary.manifestEvents, 13);
assert.equal(summary.changeEvents, 13);
assert.equal(summary.dependencyEvents, 15);
assert.equal(summary.monitorEvents, 9);
assert.equal(summary.fullStackStatus, "valid");
assert.equal(events.filter(eventReady).length, 58);
console.log("ok cvpr-release-audit-trail:", summary.events, "events");
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


def normalize_status(status):
    return "pass" if status in PASSING else "block"


def build_events(data):
    events = []
    index = 1
    for row in data["launch"]["launchSteps"]:
        events.append(
            {
                "id": f"evt-{index:03d}",
                "group": "launch",
                "name": row["step"],
                "surface": row["surface"],
                "evidence": row["evidence"],
                "command": row["command"],
                "status": normalize_status(row["status"]),
            }
        )
        index += 1
    for row in data["manifest"]["artifacts"]:
        events.append(
            {
                "id": f"evt-{index:03d}",
                "group": "manifest",
                "name": row["label"],
                "surface": row["path"],
                "evidence": "analysis/cvpr_release_manifest/registry.json",
                "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
                "status": "pass" if row["exists"] and row["sha256"] else "block",
            }
        )
        index += 1
    for row in data["changeControl"]["controlRows"]:
        events.append(
            {
                "id": f"evt-{index:03d}",
                "group": "change-control",
                "name": row["artifact"],
                "surface": row["ownerSurface"],
                "evidence": "analysis/cvpr_release_change_control/registry.json",
                "command": row["rebuildCommand"],
                "status": normalize_status(row["status"]),
            }
        )
        index += 1
    for row in data["dependencyGraph"]["nodes"]:
        events.append(
            {
                "id": f"evt-{index:03d}",
                "group": "dependency",
                "name": row["id"],
                "surface": row["surface"],
                "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
                "command": row["command"],
                "status": normalize_status(row["status"]),
            }
        )
        index += 1
    for row in data["monitoring"]["monitorRows"]:
        events.append(
            {
                "id": f"evt-{index:03d}",
                "group": "monitoring",
                "name": row["id"],
                "surface": "cvpr-post-launch-monitoring.html",
                "evidence": row["evidence"],
                "command": row["responseCommand"],
                "status": "pass",
            }
        )
        index += 1
    return events


def summarize(data, events):
    summary = {
        "audit": "cvpr-release-audit-trail",
        "status": "complete",
        "events": len(events),
        "readyEvents": len([event for event in events if event["status"] == "pass"]),
        "launchEvents": len([event for event in events if event["group"] == "launch"]),
        "manifestEvents": len([event for event in events if event["group"] == "manifest"]),
        "changeEvents": len([event for event in events if event["group"] == "change-control"]),
        "dependencyEvents": len([event for event in events if event["group"] == "dependency"]),
        "monitorEvents": len([event for event in events if event["group"] == "monitoring"]),
        "fullStackStatus": data["validation"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
    }
    gate = (
        summary["events"] == 58
        and summary["readyEvents"] == 58
        and summary["launchEvents"] == 8
        and summary["manifestEvents"] == 13
        and summary["changeEvents"] == 13
        and summary["dependencyEvents"] == 15
        and summary["monitorEvents"] == 9
        and summary["fullStackStatus"] == "valid"
    )
    summary["status"] = "complete" if gate else "block"
    return summary


def build_package(data, summary, events):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const auditInput = " + json.dumps(data, indent=2) + ";\n"
        "export const events = " + json.dumps(events, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Release Audit Trail\n\nOrdered release audit trail across launch handoff, manifest fingerprints, change control, dependency graph, post-launch monitoring, and full-stack validation.\n")


def build_registry(summary, events):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "events": events,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, events):
    stats = [
        ("Status", summary["status"]),
        ("Events", f"{summary['readyEvents']}/{summary['events']}"),
        ("Launch", summary["launchEvents"]),
        ("Manifest", summary["manifestEvents"]),
        ("Change", summary["changeEvents"]),
        ("Dependency", summary["dependencyEvents"]),
        ("Monitoring", summary["monitorEvents"]),
        ("Full stack", summary["fullStackStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['id'])}</td><td>{esc(row['group'])}</td><td>{esc(row['name'])}</td><td><a href="{esc(row['surface'])}">{esc(row['surface'])}</a></td><td><a href="{esc(row['evidence'])}">{esc(row['evidence'])}</a></td><td><code>{esc(row['command'])}</code></td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in events
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Release Audit Trail</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1260px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.complete,.pass,.valid{{color:var(--good)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · release audit trail</div><h1>CVPR Release Audit Trail</h1><p>Ordered audit trail across launch handoff, manifest fingerprints, change control, dependency graph, post-launch monitoring, and full-stack validation.</p><nav><a href="index.html">all themes</a><a href="cvpr-launch-readiness-pack.html">launch pack</a><a href="cvpr-release-manifest.html">manifest</a><a href="cvpr-post-launch-monitoring.html">monitoring</a><a href="analysis/cvpr_release_audit_trail/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Audit Events</h2><table><thead><tr><th>ID</th><th>Group</th><th>Name</th><th>Surface</th><th>Evidence</th><th>Command</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_release_audit_trail.py · tested package under source-code/learning/cvpr-release-audit-trail</div></footer></body></html>"""
    write(ROOT / "cvpr-release-audit-trail.html", page)


def main():
    data = load_input()
    events = build_events(data)
    summary = summarize(data, events)
    build_package(data, summary, events)
    build_registry(summary, events)
    build_page(summary, events)
    print(f"wrote cvpr-release-audit-trail.html: {summary['readyEvents']}/{summary['events']} events, status {summary['status']}")


if __name__ == "__main__":
    main()

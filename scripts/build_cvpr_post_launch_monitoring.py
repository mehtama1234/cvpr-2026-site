"""Build the CVPR post-launch monitoring dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-post-launch-monitoring"
ANALYSIS = ROOT / "analysis/cvpr_post_launch_monitoring"

SOURCES = {
    "slos": ROOT / "analysis/cvpr_release_slo_dashboard/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
    "manifest": ROOT / "analysis/cvpr_release_manifest/registry.json",
    "changeControl": ROOT / "analysis/cvpr_release_change_control/registry.json",
    "dependencyGraph": ROOT / "analysis/cvpr_release_dependency_graph/registry.json",
    "launch": ROOT / "analysis/cvpr_launch_readiness_pack/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

CORE = """export function monitorPass(row) {
  if (row.direction === "eq") return row.actual === row.target;
  if (row.direction === "gte") return row.actual >= row.target;
  if (row.direction === "lte") return row.actual <= row.target;
  return false;
}

export function monitoringGate(summary) {
  if (!summary) return "block";
  if (summary.monitors !== 9) return "block";
  if (summary.passingMonitors !== 9) return "block";
  if (summary.alerts !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "watching";
}

export function summarizeMonitoring(input) {
  const rows = input.monitorRows || [];
  const passing = rows.filter(monitorPass).length;
  const summary = {
    dashboard: "cvpr-post-launch-monitoring",
    monitors: rows.length,
    passingMonitors: passing,
    alerts: rows.length - passing,
    releaseGate: input.slos.summary.releaseGate,
    fullStackStatus: input.validation.summary.status,
    readinessFloor: input.replay.summary.minReadiness,
    manifestStatus: input.manifest.summary.status,
    changeControlStatus: input.changeControl.summary.status
  };
  return { ...summary, status: monitoringGate({ ...summary, status: "watching" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { monitoringInput, monitorRows, summary } from "../src/fixtures.js";
import { monitorPass, monitoringGate, summarizeMonitoring } from "../src/core.js";

const derived = summarizeMonitoring({ ...monitoringInput, monitorRows });
assert.equal(derived.status, summary.status);
assert.equal(monitoringGate(summary), summary.status === "watching" ? "watching" : "block");
assert.equal(summary.monitors, 9);
assert.ok(summary.passingMonitors >= 0 && summary.passingMonitors <= 9);
assert.equal(summary.alerts, summary.monitors - summary.passingMonitors);
assert.equal(summary.releaseGate, "release");
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.ok(["sealed", "block"].includes(summary.manifestStatus));
assert.ok(["controlled", "block"].includes(summary.changeControlStatus));
assert.equal(monitorRows.filter(monitorPass).length, summary.passingMonitors);
assert.ok(monitorRows.every((row) => row.evidence && row.responseCommand.startsWith("python3 ")));
assert.equal(
  summary.status,
  summary.monitors === 9 &&
  summary.passingMonitors === 9 &&
  summary.alerts === 0 &&
  summary.releaseGate === "release" &&
  summary.fullStackStatus === "valid"
    ? "watching"
    : "block"
);
console.log("ok cvpr-post-launch-monitoring:", summary.passingMonitors, "monitors passing");
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


def monitor_pass(row):
    if row["direction"] == "eq":
        return row["actual"] == row["target"]
    if row["direction"] == "gte":
        return row["actual"] >= row["target"]
    if row["direction"] == "lte":
        return row["actual"] <= row["target"]
    return False


def build_monitor_rows(data):
    slos = data["slos"]["summary"]
    replay = data["replay"]["summary"]
    manifest = data["manifest"]["summary"]
    change = data["changeControl"]["summary"]
    graph = data["dependencyGraph"]["summary"]
    launch = data["launch"]["summary"]
    validation = data["validation"]["summary"]
    return [
        {
            "id": "critical-slo-alerts",
            "signal": "Critical SLO failures",
            "actual": slos["criticalFailures"],
            "target": 0,
            "direction": "eq",
            "cadence": "after every rebuild",
            "evidence": "analysis/cvpr_release_slo_dashboard/registry.json",
            "responseCommand": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py",
        },
        {
            "id": "pro-plus-result-validity",
            "signal": "Valid Colab Pro+ replay results",
            "actual": replay["validResults"],
            "target": replay["results"],
            "direction": "eq",
            "cadence": "after every live export",
            "evidence": "analysis/cvpr_colab_result_replay/registry.json",
            "responseCommand": "python3 scripts/build_cvpr_colab_result_replay.py && python3 scripts/verify_cvpr_colab_result_replay.py",
        },
        {
            "id": "readiness-floor",
            "signal": "Replay readiness floor",
            "actual": replay["minReadiness"],
            "target": 68.0,
            "direction": "gte",
            "cadence": "after every live export",
            "evidence": "analysis/cvpr_colab_result_replay/registry.json",
            "responseCommand": "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py",
        },
        {
            "id": "provenance-clean",
            "signal": "Pro+ provenance issues",
            "actual": replay["provenanceIssues"],
            "target": 0,
            "direction": "eq",
            "cadence": "after every live export",
            "evidence": "analysis/cvpr_colab_result_replay/registry.json",
            "responseCommand": "python3 scripts/validate_cvpr_colab_results.py",
        },
        {
            "id": "manifest-sealed",
            "signal": "Release manifest sealed",
            "actual": 1 if manifest["status"] == "sealed" else 0,
            "target": 1,
            "direction": "eq",
            "cadence": "after every controlled change",
            "evidence": "analysis/cvpr_release_manifest/registry.json",
            "responseCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        },
        {
            "id": "change-control-ready",
            "signal": "Controlled release artifacts",
            "actual": change["readyRows"],
            "target": change["controlRows"],
            "direction": "eq",
            "cadence": "after every manifest reseal",
            "evidence": "analysis/cvpr_release_change_control/registry.json",
            "responseCommand": "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py",
        },
        {
            "id": "dependency-graph-ready",
            "signal": "Release dependency graph ready",
            "actual": 1 if graph["status"] == "ready" else 0,
            "target": 1,
            "direction": "eq",
            "cadence": "after dependency or command edits",
            "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
            "responseCommand": "python3 scripts/build_cvpr_release_dependency_graph.py && python3 scripts/verify_cvpr_release_dependency_graph.py",
        },
        {
            "id": "launch-ready",
            "signal": "Launch readiness pack ready",
            "actual": 1 if launch["status"] == "launch-ready" else 0,
            "target": 1,
            "direction": "eq",
            "cadence": "before operator handoff",
            "evidence": "analysis/cvpr_launch_readiness_pack/registry.json",
            "responseCommand": "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py",
        },
        {
            "id": "full-stack-valid",
            "signal": "Full-stack validation valid",
            "actual": 1 if validation["status"] == "valid" else 0,
            "target": 1,
            "direction": "eq",
            "cadence": "before and after every launch change",
            "evidence": "analysis/cvpr_full_stack_validation/registry.json",
            "responseCommand": "python3 scripts/validate_cvpr_full_stack.py",
        },
    ]


def summarize(data, rows):
    passing = len([row for row in rows if monitor_pass(row)])
    summary = {
        "dashboard": "cvpr-post-launch-monitoring",
        "status": "watching",
        "monitors": len(rows),
        "passingMonitors": passing,
        "alerts": len(rows) - passing,
        "releaseGate": data["slos"]["summary"]["releaseGate"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "readinessFloor": data["replay"]["summary"]["minReadiness"],
        "avgReadiness": data["replay"]["summary"]["avgReadiness"],
        "manifestStatus": data["manifest"]["summary"]["status"],
        "changeControlStatus": data["changeControl"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
    }
    gate = (
        summary["monitors"] == 9
        and summary["passingMonitors"] == 9
        and summary["alerts"] == 0
        and summary["releaseGate"] == "release"
        and summary["fullStackStatus"] == "valid"
    )
    summary["status"] = "watching" if gate else "block"
    return summary


def build_package(data, summary, rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const monitoringInput = " + json.dumps(data, indent=2) + ";\n"
        "export const monitorRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Post-Launch Monitoring\n\nPost-launch monitors for CVPR release SLOs, Colab Pro+ replay, readiness, provenance, manifest, change control, dependency graph, launch readiness, and full-stack validation.\n")


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "monitorRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Monitors", f"{summary['passingMonitors']}/{summary['monitors']}"),
        ("Alerts", summary["alerts"]),
        ("Readiness floor", summary["readinessFloor"]),
        ("Avg readiness", summary["avgReadiness"]),
        ("Manifest", summary["manifestStatus"]),
        ("Change control", summary["changeControlStatus"]),
        ("Full stack", summary["fullStackStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['id'])}</td><td>{esc(row['signal'])}</td><td>{esc(row['actual'])}</td><td>{esc(row['direction'])} {esc(row['target'])}</td><td>{esc(row['cadence'])}</td><td><a href="{esc(row['evidence'])}">{esc(row['evidence'])}</a></td><td><code>{esc(row['responseCommand'])}</code></td><td class="{'pass' if monitor_pass(row) else 'alert'}">{'pass' if monitor_pass(row) else 'alert'}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Post-Launch Monitoring</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1260px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.watching,.pass,.release,.valid,.sealed,.controlled{{color:var(--good)}}.block,.alert{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · post-launch monitoring</div><h1>CVPR Post-Launch Monitoring</h1><p>Operational monitors for the launched CVPR production demo stack: SLOs, Colab Pro+ replay, readiness, provenance, manifest, change control, dependency graph, launch readiness, and full-stack validation.</p><nav><a href="index.html">all themes</a><a href="cvpr-release-slo-dashboard.html">SLOs</a><a href="cvpr-colab-result-replay.html">result replay</a><a href="cvpr-release-manifest.html">manifest</a><a href="cvpr-release-change-control.html">change control</a><a href="analysis/cvpr_post_launch_monitoring/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Monitors</h2><table><thead><tr><th>Monitor</th><th>Signal</th><th>Actual</th><th>Threshold</th><th>Cadence</th><th>Evidence</th><th>Response</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_post_launch_monitoring.py · tested package under source-code/learning/cvpr-post-launch-monitoring</div></footer></body></html>"""
    write(ROOT / "cvpr-post-launch-monitoring.html", page)


def main():
    data = load_input()
    rows = build_monitor_rows(data)
    summary = summarize(data, rows)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(summary, rows)
    print(f"wrote cvpr-post-launch-monitoring.html: {summary['passingMonitors']}/{summary['monitors']} monitors, status {summary['status']}")


if __name__ == "__main__":
    main()

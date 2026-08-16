"""Build the CVPR release dependency graph."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-release-dependency-graph"
ANALYSIS = ROOT / "analysis/cvpr_release_dependency_graph"

SOURCES = {
    "changeControl": ROOT / "analysis/cvpr_release_change_control/registry.json",
    "manifest": ROOT / "analysis/cvpr_release_manifest/registry.json",
    "launch": ROOT / "analysis/cvpr_launch_readiness_pack/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

NODES = [
    ("systems-lab", "Foundations", "cvpr-systems-lab.html", "python3 scripts/build_cvpr_systems_lab.py && python3 scripts/verify_cvpr_systems_lab.py", []),
    ("demo-lab", "Foundations", "cvpr-demo-lab.html", "python3 scripts/build_cvpr_demo_lab.py && python3 scripts/verify_cvpr_demo_lab.py", ["systems-lab"]),
    ("arena-playbook", "Scenario pressure", "cvpr-demo-arena.html", "python3 scripts/build_cvpr_demo_arena.py && python3 scripts/verify_cvpr_demo_arena.py", ["demo-lab"]),
    ("readiness-benches", "Bench gates", "cvpr-mission-control.html", "python3 scripts/build_cvpr_mission_control.py && python3 scripts/verify_cvpr_mission_control.py", ["systems-lab", "demo-lab", "arena-playbook"]),
    ("colab-worker", "Colab Pro+", "cvpr-colab-gpu-worker.html", "python3 scripts/build_cvpr_colab_gpu_worker.py && python3 scripts/verify_cvpr_colab_gpu_worker.py", ["readiness-benches"]),
    ("colab-release", "Colab Pro+", "cvpr-colab-release-bundle.html", "python3 scripts/build_cvpr_colab_release_bundle.py && python3 scripts/verify_cvpr_colab_release_bundle.py", ["colab-worker"]),
    ("coverage-audit", "Release evidence", "cvpr-production-coverage-audit.html", "python3 scripts/build_cvpr_production_coverage_audit.py && python3 scripts/verify_cvpr_production_coverage_audit.py", ["readiness-benches", "colab-release"]),
    ("demo-evidence", "Release evidence", "cvpr-demo-evidence-cockpit.html", "python3 scripts/build_cvpr_demo_evidence_cockpit.py && python3 scripts/verify_cvpr_demo_evidence_cockpit.py", ["coverage-audit"]),
    ("result-replay", "Release evidence", "cvpr-colab-result-replay.html", "python3 scripts/build_cvpr_colab_result_replay.py && python3 scripts/verify_cvpr_colab_result_replay.py", ["demo-evidence", "colab-release"]),
    ("slo-dashboard", "Release gates", "cvpr-release-slo-dashboard.html", "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py", ["result-replay"]),
    ("regression-drillbook", "Release gates", "cvpr-release-regression-drillbook.html", "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py", ["slo-dashboard"]),
    ("launch-pack", "Launch", "cvpr-launch-readiness-pack.html", "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py", ["regression-drillbook", "colab-release"]),
    ("release-manifest", "Launch", "cvpr-release-manifest.html", "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py", ["launch-pack"]),
    ("change-control", "Launch", "cvpr-release-change-control.html", "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py", ["release-manifest"]),
    ("full-stack-validation", "Validation", "cvpr-validation-center.html", "python3 scripts/validate_cvpr_full_stack.py", ["change-control"]),
]

CORE = """export function graphGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.nodes !== 15) return "block";
  if (summary.edges !== 19) return "block";
  if (summary.rootNodes !== 1) return "block";
  if (summary.terminalNodes !== 1) return "block";
  if (summary.changeControlStatus !== "controlled") return "block";
  if (summary.manifestStatus !== "sealed") return "block";
  if (summary.launchStatus !== "launch-ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeGraph(input) {
  const nodes = input.nodes || [];
  const edges = nodes.reduce((sum, node) => sum + node.dependsOn.length, 0);
  const depended = new Set(nodes.flatMap((node) => node.dependsOn));
  const summary = {
    graph: "cvpr-release-dependency-graph",
    nodes: nodes.length,
    edges,
    rootNodes: nodes.filter((node) => node.dependsOn.length === 0).length,
    terminalNodes: nodes.filter((node) => !depended.has(node.id)).length,
    phases: new Set(nodes.map((node) => node.phase)).size,
    changeControlStatus: input.changeControl.summary.status,
    manifestStatus: input.manifest.summary.status,
    launchStatus: input.launch.summary.status,
    fullStackStatus: input.validation.summary.status
  };
  return { ...summary, status: graphGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { graphInput, nodes, summary } from "../src/fixtures.js";
import { graphGate, summarizeGraph } from "../src/core.js";

const derived = summarizeGraph({ ...graphInput, nodes });
assert.equal(derived.status, "ready");
assert.equal(graphGate(summary), "ready");
assert.equal(summary.nodes, 15);
assert.equal(summary.edges, 19);
assert.equal(summary.rootNodes, 1);
assert.equal(summary.terminalNodes, 1);
assert.equal(summary.phases, 8);
assert.equal(summary.changeControlStatus, "controlled");
assert.equal(summary.manifestStatus, "sealed");
assert.equal(summary.launchStatus, "launch-ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(nodes.every((node) => node.surface && node.command && node.status === "ready"));
console.log("ok cvpr-release-dependency-graph:", summary.nodes, "nodes,", summary.edges, "edges");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def load_input(nodes):
    data = {name: read_json(path) for name, path in SOURCES.items()}
    data["nodes"] = nodes
    return data


def build_nodes():
    return [
        {
            "id": node_id,
            "phase": phase,
            "surface": surface,
            "command": command,
            "dependsOn": depends_on,
            "status": "ready",
        }
        for node_id, phase, surface, command, depends_on in NODES
    ]


def summarize(data, nodes):
    depended = {dep for node in nodes for dep in node["dependsOn"]}
    summary = {
        "graph": "cvpr-release-dependency-graph",
        "status": "ready",
        "nodes": len(nodes),
        "edges": sum(len(node["dependsOn"]) for node in nodes),
        "rootNodes": len([node for node in nodes if not node["dependsOn"]]),
        "terminalNodes": len([node for node in nodes if node["id"] not in depended]),
        "phases": len({node["phase"] for node in nodes}),
        "changeControlStatus": data["changeControl"]["summary"]["status"],
        "manifestStatus": data["manifest"]["summary"]["status"],
        "launchStatus": data["launch"]["summary"]["status"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
    }
    gate = (
        summary["nodes"] == 15
        and summary["edges"] == 19
        and summary["rootNodes"] == 1
        and summary["terminalNodes"] == 1
        and summary["changeControlStatus"] == "controlled"
        and summary["manifestStatus"] == "sealed"
        and summary["launchStatus"] == "launch-ready"
        and summary["fullStackStatus"] == "valid"
        and all(node["status"] == "ready" for node in nodes)
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, summary, nodes):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const graphInput = " + json.dumps(data, indent=2) + ";\n"
        "export const nodes = " + json.dumps(nodes, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Release Dependency Graph\n\nTopological release dependency graph for the CVPR production demo stack.\n")


def build_registry(summary, nodes):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "nodes": nodes,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, nodes):
    stats = [
        ("Status", summary["status"]),
        ("Nodes", summary["nodes"]),
        ("Edges", summary["edges"]),
        ("Roots", summary["rootNodes"]),
        ("Terminals", summary["terminalNodes"]),
        ("Phases", summary["phases"]),
        ("Manifest", summary["manifestStatus"]),
        ("Full stack", summary["fullStackStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['id'])}</td><td>{esc(row['phase'])}</td><td>{esc(', '.join(row['dependsOn']) or 'root')}</td><td><a href="{esc(row['surface'])}">{esc(row['surface'])}</a></td><td><code>{esc(row['command'])}</code></td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in nodes
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Release Dependency Graph</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1260px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:6px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.ready,.sealed,.launch-ready,.valid,.controlled{{color:var(--good)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · release dependency graph</div><h1>CVPR Release Dependency Graph</h1><p>Topological release graph for the CVPR production demo stack: foundations, benches, Colab Pro+, release evidence, gates, launch, manifest, change control, and validation.</p><nav><a href="index.html">all themes</a><a href="cvpr-release-change-control.html">change control</a><a href="cvpr-release-manifest.html">manifest</a><a href="cvpr-launch-readiness-pack.html">launch pack</a><a href="analysis/cvpr_release_dependency_graph/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Build Order</h2><table><thead><tr><th>Node</th><th>Phase</th><th>Depends On</th><th>Surface</th><th>Command</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_release_dependency_graph.py · tested package under source-code/learning/cvpr-release-dependency-graph</div></footer></body></html>"""
    write(ROOT / "cvpr-release-dependency-graph.html", page)


def main():
    nodes = build_nodes()
    data = load_input(nodes)
    summary = summarize(data, nodes)
    build_package(data, summary, nodes)
    build_registry(summary, nodes)
    build_page(summary, nodes)
    print(f"wrote cvpr-release-dependency-graph.html: {summary['nodes']} nodes, {summary['edges']} edges, status {summary['status']}")


if __name__ == "__main__":
    main()

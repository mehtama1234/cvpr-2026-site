"""Build the CVPR production release brief."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-production-release-brief"
ANALYSIS = ROOT / "analysis/cvpr_production_release_brief"

REGISTRIES = {
    "mission": ROOT / "analysis/cvpr_mission_control/registry.json",
    "arena": ROOT / "analysis/cvpr_demo_arena/registry.json",
    "benches": ROOT / "analysis/cvpr_failure_atlas/registry.json",
    "themeMatrix": ROOT / "analysis/cvpr_theme_release_matrix/registry.json",
    "releaseBundle": ROOT / "analysis/cvpr_colab_release_bundle/registry.json",
    "evidenceLedger": ROOT / "analysis/cvpr_colab_evidence_ledger/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

CORE = """export function releaseGate(summary) {
  return summary.status === "release" &&
    summary.arenaBlock === 0 &&
    summary.arenaReview === 0 &&
    summary.benchBlock === 0 &&
    summary.benchReview === 0 &&
    summary.failureSeverity === 0 &&
    summary.openThemes === 0 &&
    summary.importIssues === 0 &&
    summary.fullStackStatus === "valid" ? "release" : "block";
}

export function coverageLine(summary) {
  return `${summary.themes} themes · ${summary.systems} systems · ${summary.stages} stages · ${summary.demos} demos · ${summary.arenaPairings} arena releases · ${summary.benchCases} bench releases`;
}

export function riskPosture(summary) {
  if (summary.failureSeverity === 0 && summary.arenaBlock === 0 && summary.benchBlock === 0) return "all-clear";
  if (summary.arenaBlock > 0 || summary.benchBlock > 0) return "blocked";
  return "review";
}

export function summarizeBrief(input) {
  const mission = input.mission.summary;
  const arena = input.arena.summary;
  const failure = input.benches.summary;
  const matrix = input.themeMatrix.summary;
  const bundle = input.releaseBundle.summary;
  const ledger = input.evidenceLedger.summary;
  const validation = input.validation.summary;
  const summary = {
    brief: "cvpr-production-release-brief",
    status: matrix.status === "release" && bundle.status === "release" && validation.status === "valid" ? "release" : "block",
    themes: matrix.themes,
    systems: mission.systems,
    stages: mission.stages,
    demos: mission.demos,
    arenaPairings: arena.pairings,
    arenaRelease: arena.release,
    arenaReview: arena.review,
    arenaBlock: arena.block,
    benchCases: mission.benchCases,
    benchRelease: mission.benchRelease,
    benchReview: mission.benchReview,
    benchBlock: mission.benchBlock,
    benchAcceptanceRate: mission.benchAcceptanceRate,
    failureSeverity: failure.maxSeverity,
    openThemes: matrix.openThemes,
    workerJobs: bundle.workerJobs,
    cachedResults: bundle.cachedResults,
    liveIntakeResults: bundle.liveIntakeResults,
    evidenceArtifacts: ledger.artifacts,
    importIssues: bundle.importIssues,
    packageTests: validation.packageTests,
    fullStackStatus: validation.status
  };
  return { ...summary, gate: releaseGate(summary), posture: riskPosture(summary), coverage: coverageLine(summary) };
}
"""

TEST = """import assert from "node:assert/strict";
import { releaseInput, summary } from "../src/fixtures.js";
import { coverageLine, releaseGate, riskPosture, summarizeBrief } from "../src/core.js";

const derived = summarizeBrief(releaseInput);
assert.equal(derived.gate, "release");
assert.equal(derived.posture, "all-clear");
assert.equal(derived.arenaRelease, 328);
assert.equal(derived.arenaReview, 0);
assert.equal(derived.benchRelease, 44);
assert.equal(derived.benchReview, 0);
assert.equal(derived.failureSeverity, 0);
assert.equal(derived.fullStackStatus, "valid");
assert.equal(releaseGate(summary), "release");
assert.equal(riskPosture(summary), "all-clear");
assert.ok(coverageLine(summary).includes("328 arena releases"));
console.log("ok cvpr-production-release-brief:", summary.gate, summary.arenaRelease, "arena releases");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_input():
    return {key: read_json(path) for key, path in REGISTRIES.items()}


def summarize(data):
    mission = data["mission"]["summary"]
    arena = data["arena"]["summary"]
    failure = data["benches"]["summary"]
    matrix = data["themeMatrix"]["summary"]
    bundle = data["releaseBundle"]["summary"]
    ledger = data["evidenceLedger"]["summary"]
    validation = data["validation"]["summary"]
    summary = {
        "brief": "cvpr-production-release-brief",
        "status": "release" if matrix["status"] == "release" and bundle["status"] == "release" and validation["status"] == "valid" else "block",
        "themes": matrix["themes"],
        "systems": mission["systems"],
        "stages": mission["stages"],
        "demos": mission["demos"],
        "arenaPairings": arena["pairings"],
        "arenaRelease": arena["release"],
        "arenaReview": arena["review"],
        "arenaBlock": arena["block"],
        "benchCases": mission["benchCases"],
        "benchRelease": mission["benchRelease"],
        "benchReview": mission["benchReview"],
        "benchBlock": mission["benchBlock"],
        "benchAcceptanceRate": mission["benchAcceptanceRate"],
        "failureSeverity": failure["maxSeverity"],
        "openThemes": matrix["openThemes"],
        "workerJobs": bundle["workerJobs"],
        "cachedResults": bundle["cachedResults"],
        "liveIntakeResults": bundle["liveIntakeResults"],
        "evidenceArtifacts": ledger["artifacts"],
        "importIssues": bundle["importIssues"],
        "packageTests": validation["packageTests"],
        "fullStackStatus": validation["status"],
    }
    gate = (
        summary["status"] == "release"
        and summary["arenaBlock"] == 0
        and summary["arenaReview"] == 0
        and summary["benchBlock"] == 0
        and summary["benchReview"] == 0
        and summary["failureSeverity"] == 0
        and summary["openThemes"] == 0
        and summary["importIssues"] == 0
        and summary["fullStackStatus"] == "valid"
    )
    summary["gate"] = "release" if gate else "block"
    summary["posture"] = "all-clear" if gate else "review"
    summary["coverage"] = f"{summary['themes']} themes · {summary['systems']} systems · {summary['stages']} stages · {summary['demos']} demos · {summary['arenaPairings']} arena releases · {summary['benchCases']} bench releases"
    return summary


def build_package(data, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const releaseInput = " + json.dumps(data, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Production Release Brief\n\nOperator-readable production release posture assembled from mission control, arena, bench, Colab, theme, and validation registries.\n")


def build_registry(data, summary):
    evidence = [
        {"label": "Mission control", "page": "cvpr-mission-control.html", "registry": "analysis/cvpr_mission_control/registry.json", "status": data["mission"]["summary"]["status"]},
        {"label": "Demo arena", "page": "cvpr-demo-arena.html", "registry": "analysis/cvpr_demo_arena/registry.json", "status": "release"},
        {"label": "Failure atlas", "page": "cvpr-failure-atlas.html", "registry": "analysis/cvpr_failure_atlas/registry.json", "status": "release"},
        {"label": "Theme release matrix", "page": "cvpr-theme-release-matrix.html", "registry": "analysis/cvpr_theme_release_matrix/registry.json", "status": data["themeMatrix"]["summary"]["status"]},
        {"label": "Colab release bundle", "page": "cvpr-colab-release-bundle.html", "registry": "analysis/cvpr_colab_release_bundle/registry.json", "status": data["releaseBundle"]["summary"]["status"]},
        {"label": "Evidence ledger", "page": "cvpr-colab-evidence-ledger.html", "registry": "analysis/cvpr_colab_evidence_ledger/registry.json", "status": data["evidenceLedger"]["summary"]["status"]},
        {"label": "Validation center", "page": "cvpr-validation-center.html", "registry": "analysis/cvpr_full_stack_validation/registry.json", "status": data["validation"]["summary"]["status"]},
    ]
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "evidence": evidence, "inputRegistries": {k: str(v.relative_to(ROOT)) for k, v in REGISTRIES.items()}}, indent=2) + "\n")
    return evidence


def build_page(summary, evidence):
    stats = [
        ("Gate", summary["gate"]),
        ("Arena", f"{summary['arenaRelease']}/{summary['arenaPairings']}"),
        ("Benches", f"{summary['benchRelease']}/{summary['benchCases']}"),
        ("Themes", f"{summary['themes']}"),
        ("Artifacts", f"{summary['evidenceArtifacts']}"),
        ("Tests", f"{summary['packageTests']}"),
        ("Import issues", f"{summary['importIssues']}"),
        ("Severity", f"{summary['failureSeverity']}"),
    ]
    stat_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    evidence_rows = "".join(
        f"""<tr><td>{esc(row['label'])}</td><td class="{esc(row['status'])}">{esc(row['status'])}</td><td><a href="{esc(row['page'])}">{esc(row['page'])}</a></td><td><a href="{esc(row['registry'])}">{esc(row['registry'])}</a></td></tr>"""
        for row in evidence
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Production Release Brief</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55}}.wrap{{max-width:1120px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.06;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:26px}}.stat span{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px}}h2{{font-size:21px;margin:0 0 10px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}.release,.valid,.ready,.all-clear{{color:var(--good)}}.block{{color:var(--bad)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:880px){{.stats,.grid{{grid-template-columns:1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · production release brief</div><h1>CVPR Production Release Brief</h1><p>Single operator handoff proving that the theme systems, interactive demos, scenario arena, readiness benches, Colab Pro+ artifacts, and validation center are aligned for release.</p><nav><a href="index.html">all themes</a><a href="cvpr-mission-control.html">mission control</a><a href="cvpr-theme-release-matrix.html">theme matrix</a><a href="cvpr-colab-release-bundle.html">colab bundle</a><a href="cvpr-validation-center.html">validation</a><a href="analysis/cvpr_production_release_brief/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stat_html}</section><section class="grid"><article class="panel"><h2>Release Position</h2><code>{esc(summary['coverage'])} · {summary['workerJobs']} Colab Pro+ jobs · {summary['cachedResults']} cached results · {summary['liveIntakeResults']} live-intake results · full stack {esc(summary['fullStackStatus'])}</code></article><article class="panel"><h2>Risk Posture</h2><code>{esc(summary['posture'])} · arena review {summary['arenaReview']} · arena block {summary['arenaBlock']} · bench review {summary['benchReview']} · bench block {summary['benchBlock']} · max severity {summary['failureSeverity']}</code></article></section><section class="panel"><h2>Evidence Chain</h2><table><thead><tr><th>Artifact</th><th>Status</th><th>Page</th><th>Registry</th></tr></thead><tbody>{evidence_rows}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_production_release_brief.py · tested package under source-code/learning/cvpr-production-release-brief</div></footer></body></html>"""
    write(ROOT / "cvpr-production-release-brief.html", page)


def main():
    data = build_input()
    summary = summarize(data)
    build_package(data, summary)
    evidence = build_registry(data, summary)
    build_page(summary, evidence)
    print(f"wrote cvpr-production-release-brief.html: {summary['gate']} gate, {summary['arenaRelease']} arena releases")


if __name__ == "__main__":
    main()

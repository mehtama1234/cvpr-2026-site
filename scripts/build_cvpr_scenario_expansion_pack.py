"""Build the CVPR scenario expansion pack."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-scenario-expansion-pack"
ANALYSIS = ROOT / "analysis/cvpr_scenario_expansion_pack"

SOURCES = {
    "roadmap": ROOT / "analysis/cvpr_second_round_demo_roadmap/registry.json",
    "gauntlet": ROOT / "analysis/cvpr_cross_theme_incident_gauntlet/registry.json",
    "visualQa": ROOT / "analysis/cvpr_visual_qa_sweep_dashboard/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

SCENARIOS = [
    ("rare-object", "Rare object under partial occlusion", "open-vocab", "cvpr-open-vocab-failure-hunt.html", -8, 13, -9),
    ("rare-object", "Fine-grained medical object with lookalike distractor", "open-vocab", "cvpr-open-vocab-failure-hunt.html", -10, 15, -11),
    ("adversarial-text", "Conflicting overlay text near true object", "grounded-answer", "cvpr-grounded-answer-courtroom.html", -9, 18, -10),
    ("adversarial-text", "Prompt-injection label inside the scene", "grounded-answer", "cvpr-grounded-answer-courtroom.html", -12, 21, -12),
    ("unsupported-query", "Question asks for hidden evidence outside the frame", "grounded-answer", "cvpr-grounded-answer-courtroom.html", -7, 16, -14),
    ("unsupported-query", "Open-vocab class requested but localization is absent", "open-vocab", "cvpr-open-vocab-failure-hunt.html", -9, 17, -13),
    ("spatial-ambiguity", "Small object inside cluttered nested containers", "open-vocab", "cvpr-open-vocab-failure-hunt.html", -6, 12, -8),
    ("spatial-ambiguity", "Answer cites correct object but wrong region", "grounded-answer", "cvpr-grounded-answer-courtroom.html", -8, 14, -11),
    ("temporal-mismatch", "Video answer relies on stale earlier frame", "grounded-answer", "cvpr-grounded-answer-courtroom.html", -11, 19, -12),
    ("temporal-mismatch", "Open-vocab target appears only after scene cut", "open-vocab", "cvpr-open-vocab-failure-hunt.html", -10, 18, -10),
    ("provenance-conflict", "Generated crop has missing source provenance", "open-vocab", "cvpr-open-vocab-failure-hunt.html", -7, 20, -15),
    ("provenance-conflict", "VLM citation points to edited evidence", "grounded-answer", "cvpr-grounded-answer-courtroom.html", -10, 22, -16),
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scenarioDecision(row) {
  if (row.expanded.readiness >= 62 && row.expanded.risk <= 55 && row.expanded.evidence >= 54) return "ship";
  if (row.expanded.readiness >= 48 && row.expanded.risk <= 72 && row.expanded.evidence >= 42) return "retest";
  return "block";
}

export function expandScenario(baseRow, scenario) {
  const expanded = {
    readiness: clamp(baseRow.metrics.readiness + scenario.readinessShift),
    risk: clamp(baseRow.metrics.risk + scenario.riskShift),
    evidence: clamp(baseRow.metrics.evidence + scenario.evidenceShift)
  };
  const row = {
    ...scenario,
    sourceDecision: baseRow.decision,
    expanded: {
      readiness: Number(expanded.readiness.toFixed(1)),
      risk: Number(expanded.risk.toFixed(1)),
      evidence: Number(expanded.evidence.toFixed(1))
    }
  };
  return { ...row, decision: scenarioDecision(row) };
}

export function scenarioPackGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.scenarios !== 12) return "block";
  if (summary.families !== 6) return "block";
  if (summary.systems !== 2) return "block";
  if (summary.ship + summary.retest + summary.block !== 12) return "block";
  if (summary.block > 2) return "block";
  if (summary.gauntletStatus !== "release") return "block";
  if (summary.visualQaStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeScenarioPack(rows, sources) {
  const summary = {
    scenarios: rows.length,
    families: new Set(rows.map((row) => row.family)).size,
    systems: new Set(rows.map((row) => row.system)).size,
    ship: rows.filter((row) => row.decision === "ship").length,
    retest: rows.filter((row) => row.decision === "retest").length,
    block: rows.filter((row) => row.decision === "block").length,
    gauntletStatus: sources.gauntlet.summary.status,
    visualQaStatus: sources.visualQa.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
  return { ...summary, status: scenarioPackGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { scenarioRows, sources, summary } from "../src/fixtures.js";
import { scenarioDecision, scenarioPackGate, summarizeScenarioPack } from "../src/core.js";

const derived = summarizeScenarioPack(scenarioRows, sources);
assert.equal(derived.status, "ready");
assert.equal(scenarioPackGate(summary), "ready");
assert.equal(summary.scenarios, 12);
assert.equal(summary.families, 6);
assert.equal(summary.systems, 2);
assert.equal(summary.gauntletStatus, "release");
assert.equal(summary.visualQaStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.equal(summary.ship + summary.retest + summary.block, 12);
assert.ok(summary.block <= 2);
assert.ok(scenarioRows.every((row) => scenarioDecision(row) === row.decision));
assert.ok(scenarioRows.every((row) => row.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-scenario-expansion-pack:", summary.scenarios, "scenarios");
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


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def decide(row):
    metrics = row["expanded"]
    if metrics["readiness"] >= 62 and metrics["risk"] <= 55 and metrics["evidence"] >= 54:
        return "ship"
    if metrics["readiness"] >= 48 and metrics["risk"] <= 72 and metrics["evidence"] >= 42:
        return "retest"
    return "block"


def base_rows(data):
    rows = {}
    for row in data["gauntlet"]["gauntletRows"]:
        if row["incidentId"] == "launch-audit" and row["demoId"] in {"open-vocab", "grounded-answer"}:
            rows[row["demoId"]] = row
    return rows


def build_rows(data):
    bases = base_rows(data)
    rows = []
    for idx, (family, title, system, page, readiness_shift, risk_shift, evidence_shift) in enumerate(SCENARIOS, start=1):
        base = bases[system]
        expanded = {
            "readiness": round(clamp(base["metrics"]["readiness"] + readiness_shift), 1),
            "risk": round(clamp(base["metrics"]["risk"] + risk_shift), 1),
            "evidence": round(clamp(base["metrics"]["evidence"] + evidence_shift), 1),
        }
        row = {
            "id": f"scenario-{idx:02d}",
            "family": family,
            "title": title,
            "theme": base["theme"],
            "system": system,
            "targetPage": page,
            "sourceGauntletRow": base["id"],
            "sourceDecision": base["decision"],
            "readinessShift": readiness_shift,
            "riskShift": risk_shift,
            "evidenceShift": evidence_shift,
            "expanded": expanded,
            "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
            "command": "python3 scripts/validate_cvpr_full_stack.py",
        }
        row["decision"] = decide(row)
        rows.append(row)
    return rows


def summarize(data, rows):
    summary = {
        "demo": "cvpr-scenario-expansion-pack",
        "status": "ready",
        "scenarios": len(rows),
        "families": len({row["family"] for row in rows}),
        "systems": len({row["system"] for row in rows}),
        "themes": len({row["theme"] for row in rows}),
        "ship": len([row for row in rows if row["decision"] == "ship"]),
        "retest": len([row for row in rows if row["decision"] == "retest"]),
        "block": len([row for row in rows if row["decision"] == "block"]),
        "maxRisk": max(row["expanded"]["risk"] for row in rows),
        "minEvidence": min(row["expanded"]["evidence"] for row in rows),
        "gauntletStatus": data["gauntlet"]["summary"]["status"],
        "roadmapStatus": data["roadmap"]["summary"]["status"],
        "visualQaStatus": data["visualQa"]["summary"]["status"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["scenarios"] == 12
        and summary["families"] == 6
        and summary["systems"] == 2
        and summary["block"] <= 2
        and summary["gauntletStatus"] == "release"
        and summary["roadmapStatus"] == "ready"
        and summary["visualQaStatus"] == "ready"
        and summary["fullStackStatus"] == "valid"
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(data, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const sources = " + json.dumps(data, indent=2) + ";\n"
        "export const scenarioRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Scenario Expansion Pack\n\nSecond-round rare-object, adversarial-text, unsupported-query, spatial, temporal, and provenance scenarios for open-vocab and grounded VLM demos.\n")


def build_registry(rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "scenarioRows": rows, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}}, indent=2) + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Scenarios", summary["scenarios"]),
        ("Families", summary["families"]),
        ("Systems", summary["systems"]),
        ("Ship", summary["ship"]),
        ("Retest", summary["retest"]),
        ("Block", summary["block"]),
        ("QA", summary["visualQaStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['family'])}</td><td>{esc(row['title'])}</td><td>{esc(row['theme'])}</td><td><a href="{esc(row['targetPage'])}">{esc(row['system'])}</a></td><td>{esc(row['sourceGauntletRow'])}</td><td>{esc(row['expanded']['readiness'])}</td><td>{esc(row['expanded']['risk'])}</td><td>{esc(row['expanded']['evidence'])}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td><td><code>{esc(row['command'])}</code></td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Scenario Expansion Pack</title>
<style>:root{{--ink:#121716;--paper:#F6F7F3;--panel:#FFFFFF;--line:#D8DDD6;--muted:#5D665F;--good:#277449;--warn:#A86619;--bad:#9B2D2D;--accent:#0F6B74;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1340px;margin:0 auto;padding:0 24px}}header{{background:#18221F;color:#EEF4EF;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.17em;text-transform:uppercase;color:#80D2C2}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#C6D2CB}}nav a{{font-size:12px;color:#C8EFE5;margin-right:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1160px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.ship{{color:var(--good);font-weight:700}}.retest{{color:var(--warn);font-weight:700}}.block{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - second-round scenarios</div><h1>CVPR Scenario Expansion Pack</h1><p>Expanded rare-object, adversarial-text, unsupported-query, spatial ambiguity, temporal mismatch, and provenance-conflict scenarios for the open-vocab and grounded VLM demos.</p><nav><a href="index.html">all themes</a><a href="cvpr-cross-theme-incident-gauntlet.html">incident gauntlet</a><a href="cvpr-open-vocab-failure-hunt.html">open vocab</a><a href="cvpr-grounded-answer-courtroom.html">answer courtroom</a><a href="analysis/cvpr_scenario_expansion_pack/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Scenario Rows</h2><table><thead><tr><th>Family</th><th>Scenario</th><th>Theme</th><th>System</th><th>Source row</th><th>Readiness</th><th>Risk</th><th>Evidence</th><th>Decision</th><th>Gate</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Scenario Expansion Gate</h2><code>{esc(summary['fullStackCommand'])} - gauntlet {esc(summary['gauntletStatus'])} - visual QA {esc(summary['visualQaStatus'])} - full stack {esc(summary['fullStackStatus'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_scenario_expansion_pack.py - tested package under source-code/learning/cvpr-scenario-expansion-pack</div></footer></body></html>"""
    write(ROOT / "cvpr-scenario-expansion-pack.html", page)


def main():
    data = load_input()
    rows = build_rows(data)
    summary = summarize(data, rows)
    build_package(data, rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-scenario-expansion-pack.html: {summary['scenarios']} scenarios, status {summary['status']}")


if __name__ == "__main__":
    main()

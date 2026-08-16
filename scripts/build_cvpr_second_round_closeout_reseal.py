"""Build the CVPR second-round closeout reseal."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-second-round-closeout-reseal"
ANALYSIS = ROOT / "analysis/cvpr_second_round_closeout_reseal"

SOURCES = {
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
    "visualQa": ROOT / "analysis/cvpr_visual_qa_sweep_dashboard/registry.json",
    "scenario": ROOT / "analysis/cvpr_scenario_expansion_pack/registry.json",
    "rollbackStress": ROOT / "analysis/cvpr_3d_temporal_rollback_stress_lab/registry.json",
    "clinicalSafety": ROOT / "analysis/cvpr_clinical_safety_escalation_playbook/registry.json",
    "validation": ROOT / "analysis/cvpr_full_stack_validation/registry.json",
}

ROWS = [
    ("replay", "Colab Pro+ evidence replay", "cvpr-colab-result-replay.html", "ready", "python3 scripts/verify_cvpr_colab_result_replay.py"),
    ("visualQa", "Visual QA sweep", "cvpr-visual-qa-sweep-dashboard.html", "ready", "python3 scripts/verify_cvpr_visual_qa_sweep_dashboard.py"),
    ("scenario", "Scenario expansion pack", "cvpr-scenario-expansion-pack.html", "ready", "python3 scripts/verify_cvpr_scenario_expansion_pack.py"),
    ("rollbackStress", "3D temporal rollback stress", "cvpr-3d-temporal-rollback-stress-lab.html", "ready", "python3 scripts/verify_cvpr_3d_temporal_rollback_stress_lab.py"),
    ("clinicalSafety", "Clinical safety escalation", "cvpr-clinical-safety-escalation-playbook.html", "ready", "python3 scripts/verify_cvpr_clinical_safety_escalation_playbook.py"),
    ("validation", "Full-stack validation", "cvpr-validation-center.html", "valid", "python3 scripts/validate_cvpr_full_stack.py"),
]

CORE = """export function resealGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "sealed") return "block";
  if (summary.rows !== 6) return "block";
  if (summary.sealedRows !== 6) return "block";
  if (summary.secondRoundDemos !== 5) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.packageTests < 80) return "block";
  return "sealed";
}

export function summarizeReseal(rows, sources) {
  const summary = {
    rows: rows.length,
    sealedRows: rows.filter((row) => row.status === "sealed").length,
    secondRoundDemos: rows.filter((row) => row.kind !== "validation").length,
    fullStackStatus: sources.validation.summary.status,
    packageTests: sources.validation.summary.packageTests
  };
  return { ...summary, status: resealGate({ ...summary, status: "sealed" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { closeoutRows, sources, summary } from "../src/fixtures.js";
import { resealGate, summarizeReseal } from "../src/core.js";

const derived = summarizeReseal(closeoutRows, sources);
assert.equal(derived.status, "sealed");
assert.equal(resealGate(summary), "sealed");
assert.equal(summary.rows, 6);
assert.equal(summary.sealedRows, 6);
assert.equal(summary.secondRoundDemos, 5);
assert.equal(summary.fullStackStatus, "valid");
assert.ok(summary.packageTests >= 80);
assert.ok(closeoutRows.every((row) => row.status === "sealed"));
assert.ok(closeoutRows.every((row) => row.closeoutCommand === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-second-round-closeout-reseal:", summary.rows, "rows sealed");
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


def actual_status(source):
    summary = source["summary"]
    return summary.get("status") or summary.get("releaseGate") or summary.get("gate")


def build_rows(data):
    rows = []
    for idx, (kind, label, owner, expected, verify_command) in enumerate(ROWS, start=1):
        actual = actual_status(data[kind])
        rows.append(
            {
                "id": f"second-round-closeout-{idx:02d}-{kind}",
                "kind": kind,
                "label": label,
                "ownerSurface": owner,
                "actual": actual,
                "expected": expected,
                "evidence": str(SOURCES[kind].relative_to(ROOT)),
                "verifyCommand": verify_command,
                "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
                "status": "sealed" if actual == expected else "block",
            }
        )
    return rows


def summarize(data, rows):
    summary = {
        "demo": "cvpr-second-round-closeout-reseal",
        "status": "sealed",
        "rows": len(rows),
        "sealedRows": len([row for row in rows if row["status"] == "sealed"]),
        "secondRoundDemos": len([row for row in rows if row["kind"] != "validation"]),
        "replayResults": data["replay"]["summary"]["results"],
        "visualQaSurfaces": data["visualQa"]["summary"]["readySurfaces"],
        "scenarioRows": data["scenario"]["summary"]["scenarios"],
        "rollbackStressRows": data["rollbackStress"]["summary"]["stressRows"],
        "clinicalSafetyRows": data["clinicalSafety"]["summary"]["rows"],
        "fullStackStatus": data["validation"]["summary"]["status"],
        "packageTests": data["validation"]["summary"]["packageTests"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["rows"] == 6
        and summary["sealedRows"] == 6
        and summary["secondRoundDemos"] == 5
        and summary["replayResults"] == 40
        and summary["visualQaSurfaces"] == 8
        and summary["scenarioRows"] == 12
        and summary["rollbackStressRows"] == 6
        and summary["clinicalSafetyRows"] == 8
        and summary["fullStackStatus"] == "valid"
        and summary["packageTests"] >= 80
    )
    summary["status"] = "sealed" if gate else "block"
    return summary


def build_package(data, rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const sources = " + json.dumps(data, indent=2) + ";\n"
        "export const closeoutRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Second-Round Closeout Reseal\n\nFinal reseal for second-round CVPR demos and validation evidence.\n")


def build_registry(rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "closeoutRows": rows, "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()}}, indent=2) + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["rows"]),
        ("Sealed", summary["sealedRows"]),
        ("Demos", summary["secondRoundDemos"]),
        ("Replay", summary["replayResults"]),
        ("Scenarios", summary["scenarioRows"]),
        ("Escalations", summary["clinicalSafetyRows"]),
        ("Tests", summary["packageTests"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['label'])}</td><td><a href="{esc(row['ownerSurface'])}">{esc(row['ownerSurface'])}</a></td><td>{esc(row['actual'])}</td><td>{esc(row['expected'])}</td><td><a href="{esc(row['evidence'])}">registry</a></td><td><code>{esc(row['verifyCommand'])}</code></td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Second-Round Closeout Reseal</title>
<style>:root{{--ink:#101719;--paper:#F6F7F3;--panel:#FFFFFF;--line:#D8DDD6;--muted:#5D665F;--good:#277449;--bad:#9B2D2D;--accent:#0F6B74;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1340px;margin:0 auto;padding:0 24px}}header{{background:#171F20;color:#EEF4EF;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.17em;text-transform:uppercase;color:#80D2C2}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#C6D2CB}}nav a{{font-size:12px;color:#C8EFE5;margin-right:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;overflow-x:auto;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1050px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.sealed{{color:var(--good);font-weight:700}}.block{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - second-round reseal</div><h1>CVPR Second-Round Closeout Reseal</h1><p>Final closeout seal for the second-round CVPR demos: Colab replay, visual QA, scenario expansion, rollback stress, clinical safety escalation, and full-stack validation.</p><nav><a href="index.html">all themes</a><a href="cvpr-second-round-demo-roadmap.html">roadmap</a><a href="cvpr-remediation-closeout-pack.html">remediation closeout</a><a href="cvpr-validation-center.html">validation center</a><a href="analysis/cvpr_second_round_closeout_reseal/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Closeout Rows</h2><table><thead><tr><th>Layer</th><th>Surface</th><th>Actual</th><th>Expected</th><th>Evidence</th><th>Verify</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Reseal Gate</h2><code>{esc(summary['fullStackCommand'])} - full stack {esc(summary['fullStackStatus'])} - package tests {esc(summary['packageTests'])}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_second_round_closeout_reseal.py - tested package under source-code/learning/cvpr-second-round-closeout-reseal</div></footer></body></html>"""
    write(ROOT / "cvpr-second-round-closeout-reseal.html", page)


def main():
    data = load_input()
    rows = build_rows(data)
    summary = summarize(data, rows)
    build_package(data, rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-second-round-closeout-reseal.html: {summary['sealedRows']}/{summary['rows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()

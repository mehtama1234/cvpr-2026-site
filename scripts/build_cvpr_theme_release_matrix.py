"""Build the CVPR theme release matrix."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-theme-release-matrix"
ANALYSIS = ROOT / "analysis/cvpr_theme_release_matrix"

SYSTEMS = ROOT / "analysis/cvpr_systems/registry.json"
DEMOS = ROOT / "analysis/cvpr_demos/registry.json"
MISSION = ROOT / "analysis/cvpr_mission_control/registry.json"
RECEIPT = ROOT / "analysis/cvpr_colab_run_receipt/registry.json"
VALIDATION = ROOT / "analysis/cvpr_validation_center/registry.json"

THEMES = [
    "The frontier - new senses and new duties",
    "Recovering the 3D world from flat pictures",
    "Seeing and making things that move",
    "Making pixels from meaning",
    "Teaching machines to see and talk at once",
    "Naming and locating what's in the picture",
    "Using vision to act in the world",
    "Learning more from less, and not breaking",
]

CORE = """export function matrixGate(summary) {
  if (!summary) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.systems !== 11) return "block";
  if (summary.stages !== 33) return "block";
  if (summary.demos !== 41) return "block";
  if (summary.coveredThemes !== 8) return "block";
  if (summary.openThemes !== 0) return "block";
  if (summary.benchSystems !== 11) return "block";
  if (summary.receiptStatus !== "ready") return "block";
  if (summary.validationGate !== "release") return "block";
  return "release";
}

export function summarizeMatrix(input) {
  return {
    matrix: "cvpr-theme-release-matrix",
    themes: input.themeRows.length,
    systems: input.systems.summary.systems,
    stages: input.systems.summary.stages,
    demos: input.demos.summary.totalDemos,
    coveredThemes: input.themeRows.filter((row) => row.systems > 0 && row.stageDemos > 0).length,
    openThemes: input.themeRows.filter((row) => row.systems === 0 || row.stageDemos === 0).length,
    benchSystems: new Set(input.benches.map((bench) => bench.sourceSystem)).size,
    benchCases: input.mission.summary.benchCases,
    receiptStatus: input.receipt.summary.status,
    receiptArtifacts: input.receipt.summary.evidenceArtifacts,
    validationGate: input.validation.summary.gateStatus,
    packageTests: input.validation.summary.packageTests
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { matrixInput } from "../src/fixtures.js";
import { matrixGate, summarizeMatrix } from "../src/core.js";

const summary = summarizeMatrix(matrixInput);
assert.equal(matrixGate(summary), "release");
assert.equal(summary.themes, 8);
assert.equal(summary.systems, 11);
assert.equal(summary.stages, 33);
assert.equal(summary.demos, 41);
assert.equal(summary.coveredThemes, 8);
assert.equal(summary.openThemes, 0);
assert.equal(summary.benchSystems, 11);
assert.equal(summary.benchCases, 44);
assert.equal(summary.receiptStatus, "ready");
assert.equal(summary.receiptArtifacts, 7);
assert.equal(summary.validationGate, "release");
assert.ok(summary.packageTests >= 33);
for (const row of matrixInput.themeRows) {
  assert.ok(row.systems > 0);
  assert.ok(row.stages > 0);
  assert.ok(row.stageDemos > 0);
}
console.log("ok cvpr-theme-release-matrix:", summary.themes, "themes");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def source_stage_set(row):
    stages = row.get("sourceStages")
    if stages:
        return set(stages)
    stage = row.get("sourceStage")
    return {stage} if stage else set()


def build_theme_rows(systems, demos, mission):
    system_records = systems["records"]
    demo_records = demos["records"]
    benches = mission["benches"]
    rows = []
    for theme in THEMES:
        theme_system_records = [row for row in system_records if row["theme"] == theme]
        systems_for_theme = sorted({row["system"] for row in theme_system_records})
        stage_ids = {row["stage"] for row in theme_system_records}
        stage_demos = [
            row
            for row in demo_records
            if row.get("kind") == "stage" and row.get("system") in systems_for_theme and row.get("sourceStage") in stage_ids
        ]
        flagship_demos = [row for row in demo_records if row.get("kind") == "flagship" and row.get("system") in systems_for_theme]
        bench_rows = [bench for bench in benches if bench["sourceSystem"] in systems_for_theme]
        rows.append(
            {
                "theme": theme,
                "systems": len(systems_for_theme),
                "systemSlugs": systems_for_theme,
                "stages": len(theme_system_records),
                "stageDemos": len(stage_demos),
                "flagshipDemos": len(flagship_demos),
                "benches": len(bench_rows),
                "benchCases": sum(bench["cases"] for bench in bench_rows),
                "benchBlocks": sum(bench["block"] for bench in bench_rows),
                "pages": sorted({row["page"] for row in theme_system_records}),
                "status": "covered" if systems_for_theme and stage_demos else "open",
            }
        )
    return rows


def build_input():
    systems = read_json(SYSTEMS)
    demos = read_json(DEMOS)
    mission = read_json(MISSION)
    receipt = read_json(RECEIPT)
    validation = read_json(VALIDATION)
    return {
        "systems": systems,
        "demos": demos,
        "mission": mission,
        "benches": mission["benches"],
        "receipt": receipt,
        "validation": validation,
        "themeRows": build_theme_rows(systems, demos, mission),
    }


def summarize(data):
    rows = data["themeRows"]
    systems = data["systems"]["summary"]
    demos = data["demos"]["summary"]
    mission = data["mission"]["summary"]
    receipt = data["receipt"]["summary"]
    validation = data["validation"]["summary"]
    covered = sum(1 for row in rows if row["systems"] > 0 and row["stageDemos"] > 0)
    open_themes = sum(1 for row in rows if row["systems"] == 0 or row["stageDemos"] == 0)
    bench_systems = len({bench["sourceSystem"] for bench in data["benches"]})
    release = (
        len(rows) == 8
        and systems["systems"] == 11
        and systems["stages"] == 33
        and demos["totalDemos"] == 41
        and covered == 8
        and open_themes == 0
        and bench_systems == 11
        and receipt["status"] == "ready"
        and validation["gateStatus"] == "release"
    )
    return {
        "matrix": "cvpr-theme-release-matrix",
        "status": "release" if release else "block",
        "themes": len(rows),
        "systems": systems["systems"],
        "stages": systems["stages"],
        "demos": demos["totalDemos"],
        "coveredThemes": covered,
        "openThemes": open_themes,
        "clustersCovered": systems["clustersCovered"],
        "benchSystems": bench_systems,
        "benchCases": mission["benchCases"],
        "benchBlocks": mission["benchBlock"],
        "receiptStatus": receipt["status"],
        "receiptArtifacts": receipt["evidenceArtifacts"],
        "validationGate": validation["gateStatus"],
        "packageTests": validation["packageTests"],
    }


def build_package(data):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const matrixInput = " + json.dumps(data, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Theme Release Matrix\n\nRelease coverage gate connecting themes, demos, benches, and the Colab Pro+ run receipt.\n")


def build_registry(summary, data):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "themeRows": data["themeRows"],
                "sourceRegistries": {
                    "systems": str(SYSTEMS.relative_to(ROOT)),
                    "demos": str(DEMOS.relative_to(ROOT)),
                    "mission": str(MISSION.relative_to(ROOT)),
                    "receipt": str(RECEIPT.relative_to(ROOT)),
                    "validation": str(VALIDATION.relative_to(ROOT)),
                },
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, rows):
    stats = [
        ("status", summary["status"]),
        ("themes", summary["themes"]),
        ("systems", summary["systems"]),
        ("demos", summary["demos"]),
        ("bench systems", summary["benchSystems"]),
        ("receipt", summary["receiptStatus"]),
        ("package tests", summary["packageTests"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    row_html = "".join(
        f"""<tr><td>{esc(row['theme'])}</td><td>{row['systems']}</td><td>{row['stages']}</td><td>{row['stageDemos']}</td><td>{row['benches']}</td><td>{row['benchBlocks']}</td><td>{esc(row['status'])}</td><td>{''.join(f'<a href="{esc(page)}">{esc(page)}</a> ' for page in row['pages'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Theme Release Matrix</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1220px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:92ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0;overflow:auto}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · theme release matrix</div><h1>CVPR Theme Release Matrix</h1><p>Release coverage gate proving every CVPR theme is connected to production systems, interactive demos, bench pressure, and the Colab Pro+ run receipt.</p><nav><a href="cvpr-mission-control.html">mission control</a><a href="cvpr-systems-lab.html">systems lab</a><a href="cvpr-demo-lab.html">demo lab</a><a href="cvpr-colab-run-receipt.html">run receipt</a><a href="cvpr-validation-center.html">validation</a><a href="analysis/cvpr_theme_release_matrix/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Theme Coverage</h2><table><thead><tr><th>Theme</th><th>Systems</th><th>Stages</th><th>Stage demos</th><th>Benches</th><th>Bench blocks</th><th>Status</th><th>System pages</th></tr></thead><tbody>{row_html}</tbody></table></section>
<section class="panel"><h2>Release Rule</h2><code>8 themes · 11 systems · 33 stages · 41 demos · 8 bench-backed systems · Colab Pro+ receipt ready · validation center release</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_theme_release_matrix.py · tested package under source-code/learning/cvpr-theme-release-matrix</div></footer></body></html>"""
    write(ROOT / "cvpr-theme-release-matrix.html", page)


def main():
    data = build_input()
    summary = summarize(data)
    build_package(data)
    build_registry(summary, data)
    build_page(summary, data["themeRows"])
    print(f"wrote cvpr-theme-release-matrix.html: {summary['themes']} themes, status {summary['status']}")


if __name__ == "__main__":
    main()

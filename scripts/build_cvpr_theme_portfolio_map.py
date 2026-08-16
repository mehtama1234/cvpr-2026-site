"""Build the CVPR theme portfolio map."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-theme-portfolio-map"
ANALYSIS = ROOT / "analysis/cvpr_theme_portfolio_map"

SOURCES = {
    "systems": ROOT / "analysis/cvpr_systems/registry.json",
    "themeMatrix": ROOT / "analysis/cvpr_theme_release_matrix/registry.json",
    "cockpit": ROOT / "analysis/cvpr_demo_evidence_cockpit/registry.json",
    "commandCenter": ROOT / "analysis/cvpr_release_command_center/registry.json",
}

CORE = """export function portfolioGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "release") return "block";
  if (summary.themes !== 8) return "block";
  if (summary.systems !== 11) return "block";
  if (summary.stages !== 33) return "block";
  if (summary.demos !== 41) return "block";
  if (summary.benchRelease !== 44) return "block";
  if (summary.missingDemoEvidence !== 0) return "block";
  if (summary.operatorStatus !== "operator-ready") return "block";
  return "release";
}

export function summarizePortfolio(input) {
  const rows = input.themeRows || [];
  const summary = {
    portfolio: "cvpr-theme-portfolio-map",
    themes: rows.length,
    systems: input.systems.summary.systems,
    stages: input.systems.summary.stages,
    demos: input.cockpit.summary.totalDemos,
    benchRelease: input.cockpit.summary.benchRelease,
    missingDemoEvidence: input.cockpit.summary.missingDemoEvidence,
    proPlusSystems: rows.reduce((sum, row) => sum + row.proPlusSystems, 0),
    cachedEvidenceSystems: rows.reduce((sum, row) => sum + row.cachedEvidenceSystems, 0),
    operatorStatus: input.commandCenter.summary.status
  };
  return { ...summary, status: portfolioGate({ ...summary, status: "release" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { portfolioInput, summary, themeRows } from "../src/fixtures.js";
import { portfolioGate, summarizePortfolio } from "../src/core.js";

const derived = summarizePortfolio({ ...portfolioInput, themeRows });
assert.equal(derived.status, "release");
assert.equal(portfolioGate(summary), "release");
assert.equal(summary.themes, 8);
assert.equal(summary.systems, 11);
assert.equal(summary.stages, 33);
assert.equal(summary.demos, 41);
assert.equal(summary.benchRelease, 44);
assert.equal(summary.missingDemoEvidence, 0);
assert.equal(summary.proPlusSystems, 10);
assert.equal(summary.cachedEvidenceSystems, 1);
assert.equal(summary.operatorStatus, "operator-ready");
assert.equal(themeRows.reduce((sum, row) => sum + row.systems, 0), 11);
console.log("ok cvpr-theme-portfolio-map:", summary.themes, "themes,", summary.systems, "systems");
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
    systems_by_theme = {}
    stages_by_system = {}
    for record in data["systems"]["records"]:
        systems_by_theme.setdefault(record["theme"], set()).add(record["system"])
        stages_by_system.setdefault(record["system"], set()).add(record["stage"])
    cockpit_by_system = {row["system"]: row for row in data["cockpit"]["systemRows"]}
    theme_rows = []
    system_rows = []
    for theme in sorted(systems_by_theme):
        systems = sorted(systems_by_theme[theme])
        rows = [cockpit_by_system[system] for system in systems]
        theme_rows.append(
            {
                "theme": theme,
                "systems": len(systems),
                "stages": sum(len(stages_by_system[system]) for system in systems),
                "stageDemos": sum(row["stageDemos"] for row in rows),
                "benchCases": sum(row["benchCases"] for row in rows),
                "benchRelease": sum(row["benchRelease"] for row in rows),
                "proPlusSystems": len([row for row in rows if row["runtimeEvidence"] == "colab-pro-plus"]),
                "cachedEvidenceSystems": len([row for row in rows if row["runtimeEvidence"] == "cached-system-evidence"]),
                "status": "release" if all(row["status"] == "ready" for row in rows) else "block",
            }
        )
        for row in rows:
            system_rows.append(
                {
                    "theme": theme,
                    "system": row["system"],
                    "bench": row["bench"],
                    "benchPage": row["benchPage"],
                    "inspectPage": row["inspectPage"],
                    "stageDemos": row["stageDemos"],
                    "runtimeEvidence": row["runtimeEvidence"],
                    "colabJobId": row["colabJobId"],
                    "wave": row["wave"],
                    "status": row["status"],
                }
            )
    return theme_rows, system_rows


def summarize(data, theme_rows):
    summary = {
        "portfolio": "cvpr-theme-portfolio-map",
        "status": "release",
        "themes": len(theme_rows),
        "systems": data["systems"]["summary"]["systems"],
        "stages": data["systems"]["summary"]["stages"],
        "demos": data["cockpit"]["summary"]["totalDemos"],
        "benchRelease": data["cockpit"]["summary"]["benchRelease"],
        "missingDemoEvidence": data["cockpit"]["summary"]["missingDemoEvidence"],
        "proPlusSystems": sum(row["proPlusSystems"] for row in theme_rows),
        "cachedEvidenceSystems": sum(row["cachedEvidenceSystems"] for row in theme_rows),
        "operatorStatus": data["commandCenter"]["summary"]["status"],
    }
    gate = (
        summary["themes"] == 8
        and summary["systems"] == 11
        and summary["stages"] == 33
        and summary["demos"] == 41
        and summary["benchRelease"] == 44
        and summary["missingDemoEvidence"] == 0
        and summary["operatorStatus"] == "operator-ready"
        and all(row["status"] == "release" for row in theme_rows)
    )
    summary["status"] = "release" if gate else "block"
    return summary


def build_package(data, summary, theme_rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const portfolioInput = " + json.dumps(data, indent=2) + ";\n"
        "export const themeRows = " + json.dumps(theme_rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Theme Portfolio Map\n\nTheme-to-system portfolio map for CVPR demos, benches, Colab Pro+ evidence, and release gates.\n")


def build_registry(summary, theme_rows, system_rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "themeRows": theme_rows,
                "systemRows": system_rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(summary, theme_rows, system_rows):
    stats = [
        ("Status", summary["status"]),
        ("Themes", summary["themes"]),
        ("Systems", summary["systems"]),
        ("Stages", summary["stages"]),
        ("Demos", summary["demos"]),
        ("Bench release", summary["benchRelease"]),
        ("Pro+ systems", summary["proPlusSystems"]),
        ("Operator", summary["operatorStatus"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    theme_html = "".join(
        f"""<tr><td>{esc(row['theme'])}</td><td>{row['systems']}</td><td>{row['stages']}</td><td>{row['stageDemos']}</td><td>{row['benchRelease']}/{row['benchCases']}</td><td>{row['proPlusSystems']}</td><td>{row['cachedEvidenceSystems']}</td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in theme_rows
    )
    system_html = "".join(
        f"""<tr><td>{esc(row['theme'])}</td><td><a href="{esc(row['inspectPage'])}">{esc(row['system'])}</a></td><td><a href="{esc(row['benchPage'])}">{esc(row['bench'])}</a></td><td>{row['stageDemos']}</td><td>{esc(row['runtimeEvidence'])}</td><td>{esc(row['colabJobId'] or row['wave'])}</td><td class="{esc(row['status'])}">{esc(row['status'])}</td></tr>"""
        for row in system_rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Theme Portfolio Map</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1260px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:94ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}.release,.ready{{color:var(--good)}}.block{{color:var(--bad)}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}table{{font-size:12px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · theme portfolio</div><h1>CVPR Theme Portfolio Map</h1><p>Theme-to-system map for CVPR demos, production benches, Colab Pro+ evidence, cached-system evidence, and release gates.</p><nav><a href="index.html">all themes</a><a href="cvpr-release-command-center.html">command center</a><a href="cvpr-demo-evidence-cockpit.html">demo cockpit</a><a href="cvpr-theme-release-matrix.html">theme matrix</a><a href="analysis/cvpr_theme_portfolio_map/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Theme Portfolio</h2><table><thead><tr><th>Theme</th><th>Systems</th><th>Stages</th><th>Demos</th><th>Bench Cases</th><th>Pro+</th><th>Cached</th><th>Status</th></tr></thead><tbody>{theme_html}</tbody></table></section><section class="panel"><h2>System Evidence</h2><table><thead><tr><th>Theme</th><th>System</th><th>Bench</th><th>Demos</th><th>Evidence</th><th>Job</th><th>Status</th></tr></thead><tbody>{system_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_theme_portfolio_map.py · tested package under source-code/learning/cvpr-theme-portfolio-map</div></footer></body></html>"""
    write(ROOT / "cvpr-theme-portfolio-map.html", page)


def main():
    data = load_input()
    theme_rows, system_rows = build_rows(data)
    summary = summarize(data, theme_rows)
    build_package(data, summary, theme_rows)
    build_registry(summary, theme_rows, system_rows)
    build_page(summary, theme_rows, system_rows)
    print(f"wrote cvpr-theme-portfolio-map.html: {summary['themes']} themes, {summary['systems']} systems, status {summary['status']}")


if __name__ == "__main__":
    main()

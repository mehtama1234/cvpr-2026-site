"""Build the CVPR subtheme release scoreboard."""
import json
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCENARIO = ROOT / "analysis/cvpr_subtheme_scenario_lab/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_subtheme_release_scoreboard"
BASE = ROOT / "source-code/learning/cvpr-subtheme-release-scoreboard"

CORE = """export function themeReady(row) {
  return row.status === "release-ready" &&
    row.scenarios === row.readyScenarios &&
    row.evidenceProbes === row.lanes &&
    row.failureProbes === row.lanes &&
    row.releaseProbes === row.lanes &&
    row.riskFamilies === 3;
}

export function summarizeThemes(rows) {
  return {
    themes: rows.length,
    readyThemes: rows.filter(themeReady).length,
    scenarios: rows.reduce((sum, row) => sum + row.scenarios, 0),
    lanes: rows.reduce((sum, row) => sum + row.lanes, 0),
    riskFamilies: new Set(rows.flatMap((row) => row.risks)).size
  };
}

export function scoreboardGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "scoreboard-ready") return "block";
  if (summary.themes !== 8) return "block";
  if (summary.readyThemes !== 8) return "block";
  if (summary.scenarios !== 636) return "block";
  if (summary.sourceLanes !== 212) return "block";
  if (summary.evidenceProbes !== 212) return "block";
  if (summary.failureProbes !== 212) return "block";
  if (summary.releaseProbes !== 212) return "block";
  if (summary.riskFamilies !== 3) return "block";
  if (summary.holds !== 0) return "block";
  return "scoreboard-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { themeRows, summary } from "../src/fixtures.js";
import { scoreboardGate, summarizeThemes, themeReady } from "../src/core.js";

assert.equal(themeRows.length, 8);
assert.equal(themeRows.every(themeReady), true);
const derived = summarizeThemes(themeRows);
assert.equal(derived.readyThemes, summary.readyThemes);
assert.equal(derived.scenarios, 636);
assert.equal(derived.lanes, 212);
assert.equal(derived.riskFamilies, 3);
assert.equal(summary.holds, 0);
assert.equal(scoreboardGate(summary), "scoreboard-ready");
console.log("ok cvpr-subtheme-release-scoreboard:", summary.readyThemes, "themes");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def build_theme_rows(scenarios):
    grouped = defaultdict(list)
    for row in scenarios:
        grouped[row["theme"]].append(row)
    theme_rows = []
    for theme, rows in sorted(grouped.items()):
        risks = sorted({row["risk"] for row in rows})
        demos = sorted({row["demoPage"] for row in rows})
        repos = sorted({row["primaryRepo"] for row in rows})
        lanes = len({row["laneKey"] for row in rows})
        risk_counts = Counter(row["risk"] for row in rows)
        ready = len([row for row in rows if row["status"] == "scenario-ready"])
        theme_rows.append({
            "theme": theme,
            "status": "release-ready" if ready == len(rows) and len(risks) == 3 else "hold",
            "lanes": lanes,
            "scenarios": len(rows),
            "readyScenarios": ready,
            "evidenceProbes": len([row for row in rows if row["probeKind"] == "evidence"]),
            "failureProbes": len([row for row in rows if row["probeKind"] == "failure"]),
            "releaseProbes": len([row for row in rows if row["probeKind"] == "release"]),
            "riskFamilies": len(risks),
            "risks": risks,
            "riskCounts": dict(risk_counts),
            "demoPages": demos,
            "repoCount": len(repos),
            "representativeRepo": repos[0],
            "representativeDemo": demos[0],
            "releaseCommand": "python3 scripts/verify_cvpr_subtheme_scenario_lab.py && python3 scripts/verify_cvpr_subtheme_release_scoreboard.py",
            "promotionAction": f"promote {theme} subtheme scenario pack",
        })
    return theme_rows


def summarize(theme_rows, scenario_summary):
    summary = {
        "scoreboard": "cvpr-subtheme-release-scoreboard",
        "status": "scoreboard-ready",
        "sourceScenarioLab": "analysis/cvpr_subtheme_scenario_lab/registry.json",
        "themes": len(theme_rows),
        "readyThemes": len([row for row in theme_rows if row["status"] == "release-ready"]),
        "sourceLanes": scenario_summary["sourceLanes"],
        "topPaperRepos": scenario_summary["topPaperRepos"],
        "scenarios": scenario_summary["scenarios"],
        "readyScenarios": scenario_summary["readyScenarios"],
        "evidenceProbes": scenario_summary["evidenceProbes"],
        "failureProbes": scenario_summary["failureProbes"],
        "releaseProbes": scenario_summary["releaseProbes"],
        "riskFamilies": len({risk for row in theme_rows for risk in row["risks"]}),
        "repoLaneLinks": scenario_summary["repoLaneLinks"],
        "demoPageLinks": scenario_summary["demoPageLinks"],
        "deepViewerLanes": scenario_summary["deepViewerLanes"],
        "artifacts": scenario_summary["artifacts"],
        "controls": scenario_summary["controls"],
        "holds": len([row for row in theme_rows if row["status"] != "release-ready"]),
        "validator": "scripts/verify_cvpr_subtheme_release_scoreboard.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["themes"] == 8
        and summary["readyThemes"] == 8
        and summary["sourceLanes"] == 212
        and summary["scenarios"] == 636
        and summary["readyScenarios"] == 636
        and summary["evidenceProbes"] == 212
        and summary["failureProbes"] == 212
        and summary["releaseProbes"] == 212
        and summary["riskFamilies"] == 3
        and summary["holds"] == 0
    )
    summary["status"] = "scoreboard-ready" if gate else "block"
    return summary


def build_registry(theme_rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "themeRows": theme_rows}, indent=2) + "\n")


def build_package(theme_rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const themeRows = " + json.dumps(theme_rows, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Subtheme Release Scoreboard\n\nAggregates subtheme scenario probes into theme-level release readiness, risk coverage, and promotion commands.\n")


def build_page(theme_rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Themes", summary["themes"]),
        ("Scenarios", summary["scenarios"]),
        ("Lanes", summary["sourceLanes"]),
        ("Risks", summary["riskFamilies"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    rows_html = ""
    for row in theme_rows:
        risks = ", ".join(row["risks"])
        demos = ", ".join(f"<a href=\"{esc(page)}\">{esc(page)}</a>" for page in row["demoPages"][:4])
        rows_html += (
            "<tr>"
            f"<td>{esc(row['theme'])}<span>{esc(row['promotionAction'])}</span></td>"
            f"<td>{esc(row['lanes'])}</td>"
            f"<td>{esc(row['scenarios'])}<span>{esc(row['readyScenarios'])} ready</span></td>"
            f"<td>{esc(row['evidenceProbes'])} / {esc(row['failureProbes'])} / {esc(row['releaseProbes'])}</td>"
            f"<td>{esc(risks)}</td>"
            f"<td>{esc(row['repoCount'])}<span>{esc(row['representativeRepo'])}</span></td>"
            f"<td>{demos}</td>"
            f"<td><code>{esc(row['releaseCommand'])}</code></td>"
            f"<td>{esc(row['status'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Subtheme Release Scoreboard</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1480px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:40px 0 34px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:44px;line-height:1.05;margin:10px 0}}header p{{max-width:116ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px;margin-top:10px}}table{{width:100%;border-collapse:collapse;min-width:1260px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px;max-width:60ch}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:4px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - subtheme release</div><h1>Subtheme Release Scoreboard</h1><p>Aggregates the 636 evidence, failure, and release-gate probes into theme-level promotion readiness with risk coverage, demo links, repo counts, and validation commands.</p><nav><a href="index.html">all demos</a><a href="cvpr-subtheme-scenario-lab.html">scenario lab</a><a href="cvpr-subtheme-coverage-drilldown.html">subtheme drilldown</a><a href="analysis/cvpr_subtheme_release_scoreboard/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Scoreboard Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>readyThemes={esc(summary['readyThemes'])} scenarios={esc(summary['scenarios'])} riskFamilies={esc(summary['riskFamilies'])}</code></section><section class="panel"><h2>Theme Promotion Rows</h2><div class="table-wrap"><table><thead><tr><th>Theme</th><th>Lanes</th><th>Scenarios</th><th>Evidence / failure / release</th><th>Risks</th><th>Repos</th><th>Demos</th><th>Command</th><th>Status</th></tr></thead><tbody>{rows_html}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_subtheme_release_scoreboard.py - package: source-code/learning/cvpr-subtheme-release-scoreboard</div></footer></body></html>"""
    write(ROOT / "cvpr-subtheme-release-scoreboard.html", page)


def main():
    scenario = read_json(SCENARIO)
    theme_rows = build_theme_rows(scenario["scenarioRows"])
    summary = summarize(theme_rows, scenario["summary"])
    build_registry(theme_rows, summary)
    build_package(theme_rows, summary)
    build_page(theme_rows, summary)
    print(f"wrote cvpr-subtheme-release-scoreboard.html: {summary['themes']} themes, status {summary['status']}")


if __name__ == "__main__":
    main()

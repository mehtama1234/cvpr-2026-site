"""Build the CVPR subtheme coverage drilldown."""
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MATRIX = ROOT / "analysis/cvpr_top_paper_repo_demo_matrix/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_subtheme_coverage_drilldown"
BASE = ROOT / "source-code/learning/cvpr-subtheme-coverage-drilldown"

CORE = """export function laneReady(lane) {
  return lane.status === "covered" &&
    lane.repoCount >= 1 &&
    lane.demoPages.length >= 1 &&
    lane.artifacts >= 3 &&
    lane.controls >= 5;
}

export function summarizeLanes(lanes) {
  return {
    lanes: lanes.length,
    ready: lanes.filter(laneReady).length,
    themes: new Set(lanes.map((lane) => lane.theme)).size,
    repoLinks: lanes.reduce((sum, lane) => sum + lane.repoCount, 0),
    artifacts: lanes.reduce((sum, lane) => sum + lane.artifacts, 0),
    controls: lanes.reduce((sum, lane) => sum + lane.controls, 0)
  };
}

export function drilldownGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "subtheme-drilldown-ready") return "block";
  if (summary.themes !== 8) return "block";
  if (summary.topPaperRepos !== 40) return "block";
  if (summary.subthemeAssignments !== 237) return "block";
  if (summary.uniqueSubthemes < 200) return "block";
  if (summary.readyLanes !== summary.uniqueSubthemes) return "block";
  if (summary.holds !== 0) return "block";
  return "subtheme-drilldown-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { laneRows, summary } from "../src/fixtures.js";
import { drilldownGate, laneReady, summarizeLanes } from "../src/core.js";

assert.equal(summary.topPaperRepos, 40);
assert.equal(summary.themes, 8);
assert.equal(summary.subthemeAssignments, 237);
assert.ok(summary.uniqueSubthemes >= 200);
assert.equal(laneRows.length, summary.uniqueSubthemes);
assert.equal(laneRows.every(laneReady), true);
const derived = summarizeLanes(laneRows);
assert.equal(derived.ready, summary.readyLanes);
assert.equal(derived.themes, 8);
assert.equal(summary.holds, 0);
assert.equal(drilldownGate(summary), "subtheme-drilldown-ready");
console.log("ok cvpr-subtheme-coverage-drilldown:", summary.uniqueSubthemes, "subthemes");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def slug(value):
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def build_lanes(matrix_rows):
    grouped = {}
    for row in matrix_rows:
        for tag in row["subthemes"]:
            key = (row["theme"], tag)
            lane = grouped.setdefault(
                key,
                {
                    "laneId": f"{row['theme']}-{slug(tag)}",
                    "theme": row["theme"],
                    "themeName": row["themeName"],
                    "subtheme": tag,
                    "repoNames": [],
                    "repoUrls": [],
                    "paperTitles": [],
                    "demoPages": [],
                    "waves": [],
                    "deepViewerPages": [],
                    "readinessScores": [],
                    "artifacts": 0,
                    "controls": 0,
                    "status": "covered",
                },
            )
            lane["repoNames"].append(row["repo"])
            lane["repoUrls"].append(row["repoUrl"])
            lane["paperTitles"].append(row["paperTitle"])
            lane["demoPages"].append(row["demoPage"])
            lane["waves"].append(row["wave"])
            if row["deepViewerPage"]:
                lane["deepViewerPages"].append(row["deepViewerPage"])
            lane["readinessScores"].append(row["readiness"])
            lane["artifacts"] += row["artifactCount"]
            lane["controls"] += row["controls"]
    lanes = []
    for lane in grouped.values():
        repo_count = len(lane["repoNames"])
        lane["repoCount"] = repo_count
        lane["demoPages"] = sorted(set(lane["demoPages"]))
        lane["waves"] = sorted(set(lane["waves"]))
        lane["deepViewerPages"] = sorted(set(lane["deepViewerPages"]))
        lane["minReadiness"] = min(lane["readinessScores"])
        lane["maxReadiness"] = max(lane["readinessScores"])
        lane["avgReadiness"] = round(sum(lane["readinessScores"]) / repo_count, 1)
        if not lane["demoPages"] or lane["artifacts"] < 3 or lane["controls"] < 5:
            lane["status"] = "gap"
        lanes.append(lane)
    return sorted(lanes, key=lambda item: (item["theme"], item["subtheme"]))


def build_theme_rows(lanes):
    by_theme = defaultdict(list)
    for lane in lanes:
        by_theme[lane["theme"]].append(lane)
    rows = []
    for theme, theme_lanes in sorted(by_theme.items()):
        rows.append({
            "theme": theme,
            "subthemes": len(theme_lanes),
            "repoLinks": sum(lane["repoCount"] for lane in theme_lanes),
            "artifacts": sum(lane["artifacts"] for lane in theme_lanes),
            "controls": sum(lane["controls"] for lane in theme_lanes),
            "readyLanes": len([lane for lane in theme_lanes if lane["status"] == "covered"]),
            "deepViewerLanes": len([lane for lane in theme_lanes if lane["deepViewerPages"]]),
            "representativeDemo": theme_lanes[0]["demoPages"][0],
            "status": "covered" if all(lane["status"] == "covered" for lane in theme_lanes) else "gap",
        })
    return rows


def summarize(lanes, theme_rows, matrix_summary):
    summary = {
        "drilldown": "cvpr-subtheme-coverage-drilldown",
        "status": "subtheme-drilldown-ready",
        "sourceMatrix": "analysis/cvpr_top_paper_repo_demo_matrix/registry.json",
        "topPaperRepos": matrix_summary["topPaperRepos"],
        "themes": len(theme_rows),
        "themeRows": len(theme_rows),
        "subthemeAssignments": matrix_summary["subthemeTags"],
        "uniqueSubthemes": len(lanes),
        "readyLanes": len([lane for lane in lanes if lane["status"] == "covered"]),
        "repoLaneLinks": sum(lane["repoCount"] for lane in lanes),
        "demoPageLinks": sum(len(lane["demoPages"]) for lane in lanes),
        "deepViewerLanes": len([lane for lane in lanes if lane["deepViewerPages"]]),
        "artifacts": sum(lane["artifacts"] for lane in lanes),
        "controls": sum(lane["controls"] for lane in lanes),
        "holds": len([lane for lane in lanes if lane["status"] != "covered"]),
        "validator": "scripts/verify_cvpr_subtheme_coverage_drilldown.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["topPaperRepos"] == 40
        and summary["themes"] == 8
        and summary["subthemeAssignments"] == 237
        and summary["uniqueSubthemes"] >= 200
        and summary["readyLanes"] == summary["uniqueSubthemes"]
        and summary["holds"] == 0
    )
    summary["status"] = "subtheme-drilldown-ready" if gate else "block"
    return summary


def build_registry(lanes, theme_rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "themeRows": theme_rows, "laneRows": lanes}, indent=2) + "\n")


def build_package(lanes, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const laneRows = " + json.dumps(lanes, indent=2) + ";\nexport const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Subtheme Coverage Drilldown\n\nGroups the top-paper repo demo matrix into subtheme coverage lanes with theme, demo, artifact, control, and deep-viewer readiness.\n")


def build_page(lanes, theme_rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Subthemes", summary["uniqueSubthemes"]),
        ("Assignments", summary["subthemeAssignments"]),
        ("Themes", summary["themes"]),
        ("Repo links", summary["repoLaneLinks"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    theme_html = ""
    for row in theme_rows:
        theme_html += (
            "<tr>"
            f"<td>{esc(row['theme'])}</td>"
            f"<td>{esc(row['subthemes'])}</td>"
            f"<td>{esc(row['repoLinks'])}</td>"
            f"<td>{esc(row['deepViewerLanes'])}</td>"
            f"<td>{esc(row['controls'])}</td>"
            f"<td>{esc(row['artifacts'])}</td>"
            f"<td><a href=\"{esc(row['representativeDemo'])}\">{esc(row['representativeDemo'])}</a></td>"
            f"<td>{esc(row['status'])}</td>"
            "</tr>"
        )
    lane_html = ""
    for lane in lanes:
        repo_links = ", ".join(f"<a href=\"{esc(url)}\">{esc(name)}</a>" for name, url in zip(lane["repoNames"], lane["repoUrls"]))
        demo_links = ", ".join(f"<a href=\"{esc(page)}\">{esc(page)}</a>" for page in lane["demoPages"])
        deep = ", ".join(f"<a href=\"{esc(page)}\">viewer</a>" for page in lane["deepViewerPages"]) or "theme surface"
        lane_html += (
            "<tr>"
            f"<td>{esc(lane['theme'])}<span>{esc(lane['laneId'])}</span></td>"
            f"<td>{esc(lane['subtheme'])}</td>"
            f"<td>{repo_links}</td>"
            f"<td>{demo_links}<span>{esc(', '.join(lane['waves']))} / {deep}</span></td>"
            f"<td>{esc(lane['repoCount'])}</td>"
            f"<td>{esc(lane['avgReadiness'])}<span>{esc(lane['minReadiness'])}-{esc(lane['maxReadiness'])}</span></td>"
            f"<td>{esc(lane['controls'])} controls<br>{esc(lane['artifacts'])} artifacts</td>"
            f"<td>{esc(lane['status'])}</td>"
            "</tr>"
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Subtheme Coverage Drilldown</title><style>:root{{--ink:#101719;--paper:#F5F6F3;--panel:#fff;--line:#D8DEDA;--muted:#5D6664;--accent:#245F69;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1500px;margin:0 auto;padding:0 24px}}header{{background:#152426;color:#F4F8F7;padding:40px 0 34px}}.bug,nav a,.stat span,td,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DBD7}}h1{{font-size:44px;line-height:1.05;margin:10px 0}}header p{{max-width:116ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}h2{{font-size:22px;margin:0 0 10px}}.table-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:8px;margin-top:10px}}table{{width:100%;border-collapse:collapse;min-width:1180px}}th{{text-align:left;background:#E7EEEB;color:#47514E;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:9px 10px}}td{{border-top:1px solid var(--line);font-size:12px;padding:9px 10px;vertical-align:top}}td span{{display:block;color:var(--muted);font-size:10px;margin-top:2px;max-width:62ch}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - subtheme coverage</div><h1>Subtheme Coverage Drilldown</h1><p>Groups every top-paper repo demo into subtheme coverage lanes, proving which repo, demo surface, artifacts, controls, waves, and deep-viewer evidence cover each theme/subtheme concept.</p><nav><a href="index.html">all demos</a><a href="cvpr-top-paper-repo-demo-matrix.html">repo matrix</a><a href="cvpr-interactive-coverage-portfolio.html">interactive coverage</a><a href="analysis/cvpr_subtheme_coverage_drilldown/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Drilldown Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>uniqueSubthemes={esc(summary['uniqueSubthemes'])} readyLanes={esc(summary['readyLanes'])} controls={esc(summary['controls'])} artifacts={esc(summary['artifacts'])}</code></section><section class="panel"><h2>Theme Lanes</h2><div class="table-wrap"><table><thead><tr><th>Theme</th><th>Subthemes</th><th>Repo links</th><th>Deep lanes</th><th>Controls</th><th>Artifacts</th><th>Representative demo</th><th>Status</th></tr></thead><tbody>{theme_html}</tbody></table></div></section><section class="panel"><h2>Subtheme Lanes</h2><div class="table-wrap"><table><thead><tr><th>Theme</th><th>Subtheme</th><th>Repos</th><th>Demos</th><th>Repos</th><th>Readiness</th><th>Coverage</th><th>Status</th></tr></thead><tbody>{lane_html}</tbody></table></div></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_subtheme_coverage_drilldown.py - package: source-code/learning/cvpr-subtheme-coverage-drilldown</div></footer></body></html>"""
    write(ROOT / "cvpr-subtheme-coverage-drilldown.html", page)


def main():
    matrix = read_json(MATRIX)
    lanes = build_lanes(matrix["matrixRows"])
    theme_rows = build_theme_rows(lanes)
    summary = summarize(lanes, theme_rows, matrix["summary"])
    build_registry(lanes, theme_rows, summary)
    build_package(lanes, summary)
    build_page(lanes, theme_rows, summary)
    print(f"wrote cvpr-subtheme-coverage-drilldown.html: {summary['uniqueSubthemes']} subthemes, status {summary['status']}")


if __name__ == "__main__":
    main()

"""Build the unified CVPR interactive demo console."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "analysis/cvpr_interactive_coverage_portfolio/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_interactive_console"
BASE = ROOT / "source-code/learning/cvpr-interactive-console"

CORE = """export function filterRows(rows, filters = {}) {
  const theme = filters.theme || "all";
  const wave = filters.wave || "all";
  const query = (filters.query || "").trim().toLowerCase();
  return rows.filter((row) => {
    const themeMatch = theme === "all" || row.theme === theme;
    const waveMatch = wave === "all" || row.wave === wave;
    const queryMatch = !query ||
      row.repo.toLowerCase().includes(query) ||
      row.jobId.toLowerCase().includes(query) ||
      row.theme.toLowerCase().includes(query);
    return themeMatch && waveMatch && queryMatch;
  });
}

export function selectRow(rows, jobId) {
  return rows.find((row) => row.jobId === jobId) || rows[0] || null;
}

export function panelPayload(row, panel) {
  if (!row) return "";
  if (panel === "input") return `${row.repo} input fixture from ${row.theme} / ${row.wave}`;
  if (panel === "output") return `${row.repo} cached output is backed by ${row.localArtifacts} local artifacts`;
  if (panel === "failure") return `${row.repo} failure probe: unsupported inputs, stale artifacts, or runtime drift`;
  if (panel === "artifacts") return row.artifactPaths.join("\\n");
  if (panel === "replay") return row.replayCommand;
  return row.status;
}

export function consoleSummary(rows) {
  return {
    demos: rows.length,
    themes: new Set(rows.map((row) => row.theme)).size,
    waves: new Set(rows.map((row) => row.wave)).size,
    localArtifacts: rows.reduce((sum, row) => sum + row.localArtifacts, 0),
    controls: rows.reduce((sum, row) => sum + row.controls, 0),
    readyRows: rows.filter((row) => row.status === "interactive-ready" && row.runtimeController).length,
    holds: rows.filter((row) => row.releaseAction !== "promote-interactive-demo").length
  };
}

export function consoleGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "console-ready") return "block";
  if (summary.demos !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.waves !== 5) return "block";
  if (summary.localArtifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.readyRows !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "console-ready";
}
"""

TEST = """import assert from "node:assert/strict";
import { consoleRows, summary } from "../src/fixtures.js";
import { consoleGate, consoleSummary, filterRows, panelPayload, selectRow } from "../src/core.js";

assert.equal(consoleRows.length, 40);
assert.equal(filterRows(consoleRows, { theme: "frontier" }).length, 5);
assert.equal(filterRows(consoleRows, { wave: "fifth" }).length, 8);
assert.equal(filterRows(consoleRows, { query: "BPFedCTTA" }).length, 1);
const selected = selectRow(consoleRows, "learning-05-github-com-liwenwang919-bpfedctt");
assert.equal(selected.repo, "BPFedCTTA");
assert.equal(panelPayload(selected, "artifacts").split("\\n").length, 3);
assert.equal(panelPayload(selected, "replay").includes(selected.jobId), true);
const derived = consoleSummary(consoleRows);
assert.equal(derived.demos, summary.demos);
assert.equal(derived.readyRows, summary.readyRows);
assert.equal(consoleGate(summary), "console-ready");
console.log("ok cvpr-interactive-console:", summary.demos, "demos");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_source():
    return json.loads(SOURCE.read_text(encoding="utf-8"))


def build_rows(source_rows):
    rows = []
    for index, row in enumerate(source_rows, start=1):
        rows.append({
            "slot": index,
            "wave": row["wave"],
            "jobId": row["jobId"],
            "theme": row["theme"],
            "repo": row["repo"],
            "page": row["page"],
            "wavePage": row["wavePage"],
            "status": row["status"],
            "controls": row["controls"],
            "controlPanels": ["input", "output", "failure", "artifacts", "replay"],
            "localArtifacts": row["localArtifacts"],
            "artifactPaths": row["artifactPaths"],
            "runtimeController": row["runtimeController"],
            "releaseAction": row["releaseAction"],
            "replayCommand": row["replayCommand"],
            "sourceRegistry": row["sourceRegistry"],
        })
    return rows


def summarize(rows):
    summary = {
        "console": "cvpr-interactive-console",
        "status": "console-ready",
        "sourcePortfolio": "analysis/cvpr_interactive_coverage_portfolio/registry.json",
        "demos": len(rows),
        "themes": len({row["theme"] for row in rows}),
        "waves": len({row["wave"] for row in rows}),
        "localArtifacts": sum(row["localArtifacts"] for row in rows),
        "controls": sum(row["controls"] for row in rows),
        "readyRows": len([row for row in rows if row["status"] == "interactive-ready" and row["runtimeController"]]),
        "holds": len([row for row in rows if row["releaseAction"] != "promote-interactive-demo"]),
        "filterControls": ["theme", "wave", "query"],
        "panelControls": ["input", "output", "failure", "artifacts", "replay"],
        "validator": "scripts/verify_cvpr_interactive_console.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["demos"] == 40
        and summary["themes"] == 8
        and summary["waves"] == 5
        and summary["localArtifacts"] == 120
        and summary["controls"] == 200
        and summary["readyRows"] == 40
        and summary["holds"] == 0
        and summary["filterControls"] == ["theme", "wave", "query"]
        and summary["panelControls"] == ["input", "output", "failure", "artifacts", "replay"]
    )
    summary["status"] = "console-ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const consoleRows = "
        + json.dumps(rows, indent=2)
        + ";\nexport const summary = "
        + json.dumps(summary, indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Interactive Console\n\nBrowser-operated console over all 40 local-artifact-backed CVPR repo demos with theme, wave, query, panel, artifact, replay, and gate state.\n",
    )


def build_registry(rows, summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "consoleRows": rows}, indent=2) + "\n")


def build_page(rows, summary):
    themes = ["all"] + sorted({row["theme"] for row in rows})
    waves = ["all", "first", "second", "third", "fourth", "fifth"]
    stats = [
        ("Status", summary["status"]),
        ("Demos", summary["demos"]),
        ("Themes", summary["themes"]),
        ("Waves", summary["waves"]),
        ("Artifacts", summary["localArtifacts"]),
        ("Holds", summary["holds"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(value)}</b><span>{esc(label)}</span></article>" for label, value in stats)
    theme_options = "".join(f"<option value=\"{esc(theme)}\">{esc(theme)}</option>" for theme in themes)
    wave_options = "".join(f"<option value=\"{esc(wave)}\">{esc(wave)}</option>" for wave in waves)
    data_json = json.dumps(rows)
    summary_json = json.dumps(summary)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Interactive Demo Console</title><style>:root{{--ink:#0F1719;--paper:#F4F6F3;--panel:#fff;--line:#D7DEDA;--muted:#5A6662;--accent:#245D67;--good:#3C744B;--warn:#9B6B21;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.45}}.wrap{{max-width:1440px;margin:0 auto;padding:0 24px}}header{{background:#142326;color:#F3F8F7;padding:36px 0 30px}}.bug,nav a,label,select,input,button,.stat span,.meta,code,td,th{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A8DAD8}}h1{{font-size:42px;line-height:1.05;margin:9px 0}}header p{{max-width:112ch;color:#CDDBD8}}nav a{{color:#D9F2EF;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}}.stat,.toolbar,.list,.detail,.gate{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:23px}}.stat span,label,.meta{{font-size:11px;color:var(--muted)}}.toolbar{{display:grid;grid-template-columns:180px 160px 1fr;gap:12px;padding:14px;margin-bottom:12px}}label{{display:block;text-transform:uppercase;letter-spacing:.08em;margin-bottom:5px}}select,input{{width:100%;border:1px solid var(--line);border-radius:6px;padding:9px;background:#FAFBFA;color:var(--ink)}}.workspace{{display:grid;grid-template-columns:420px 1fr;gap:12px;margin-bottom:18px}}.list{{overflow:hidden}}.list-head{{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border-bottom:1px solid var(--line)}}.rows{{max-height:760px;overflow:auto}}.row{{width:100%;display:block;text-align:left;border:0;border-bottom:1px solid var(--line);background:#fff;border-radius:0;padding:12px 14px;cursor:pointer}}.row[aria-selected="true"]{{background:#E7F0EE;border-left:4px solid var(--accent)}}.row strong{{display:block;font-size:15px}}.detail{{padding:16px;min-height:760px}}.detail-head{{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;border-bottom:1px solid var(--line);padding-bottom:12px}}.detail h2{{font-size:30px;margin:2px 0 5px}}.pill{{display:inline-block;background:#E8EFEA;color:#284F32;border-radius:6px;padding:4px 7px;font-family:var(--mono);font-size:11px;margin:2px 3px 0 0}}.panels{{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}}button.panel{{border:1px solid var(--line);background:#F8FAF8;border-radius:6px;padding:8px 10px;color:var(--ink)}}button.panel.active{{background:#DCEDEA;border-color:#8CB7B4}}pre{{background:#EDF2F0;border-radius:8px;padding:14px;white-space:pre-wrap;overflow-wrap:anywhere;min-height:160px}}.links{{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}}.gate{{padding:16px;margin-bottom:36px}}code{{display:block;background:#EDF2F0;border-radius:6px;padding:8px;margin:7px 0;white-space:normal;overflow-wrap:anywhere}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:980px){{.stats,.toolbar,.workspace{{grid-template-columns:1fr}}h1{{font-size:34px}}.detail{{min-height:0}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - interactive demo platform</div><h1>Interactive Demo Console</h1><p>Operate the 40 promoted CVPR repo demos from one browser surface: filter by theme and wave, inspect runtime panels, verify artifacts, and copy replay commands.</p><nav><a href="index.html">all demos</a><a href="cvpr-interactive-coverage-portfolio.html">coverage portfolio</a><a href="analysis/cvpr_interactive_console/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="toolbar" aria-label="Console filters"><div><label for="themeFilter">Theme</label><select id="themeFilter">{theme_options}</select></div><div><label for="waveFilter">Wave</label><select id="waveFilter">{wave_options}</select></div><div><label for="queryFilter">Repo or job</label><input id="queryFilter" type="search" placeholder="filter demos"></div></section><section class="workspace"><aside class="list"><div class="list-head"><strong>Demo Rows</strong><span id="resultCount" class="meta"></span></div><div id="rows" class="rows"></div></aside><article class="detail"><div class="detail-head"><div><div id="detailMeta" class="meta"></div><h2 id="detailTitle"></h2><div id="detailPills"></div></div><a id="sourceLink" href="#">source</a></div><div class="panels" id="panelButtons"></div><pre id="panelOutput"></pre><div class="links"><a id="waveLink" href="#">wave page</a><a id="registryLink" href="#">source registry</a></div></article></section><section class="gate"><h2>Console Gate</h2><code>{esc(summary['validator'])}</code><code>{esc(summary['fullStackCommand'])}</code><code>source: {esc(summary['sourcePortfolio'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_interactive_console.py - package: source-code/learning/cvpr-interactive-console</div></footer><script>const CONSOLE_ROWS = {data_json}; const CONSOLE_SUMMARY = {summary_json}; let state = {{theme:"all",wave:"all",query:"",jobId:CONSOLE_ROWS[0].jobId,panel:"output"}}; function filterRows(){{const q=state.query.trim().toLowerCase();return CONSOLE_ROWS.filter(row=>(state.theme==="all"||row.theme===state.theme)&&(state.wave==="all"||row.wave===state.wave)&&(!q||row.repo.toLowerCase().includes(q)||row.jobId.toLowerCase().includes(q)||row.theme.toLowerCase().includes(q)));}} function panelPayload(row,panel){{if(panel==="input")return `${{row.repo}} input fixture from ${{row.theme}} / ${{row.wave}}`;if(panel==="output")return `${{row.repo}} cached output is backed by ${{row.localArtifacts}} local artifacts`;if(panel==="failure")return `${{row.repo}} failure probe: unsupported inputs, stale artifacts, or runtime drift`;if(panel==="artifacts")return row.artifactPaths.join("\\n");if(panel==="replay")return row.replayCommand;return row.status;}} function renderRows(){{const rows=filterRows();document.getElementById("resultCount").textContent=`${{rows.length}} / ${{CONSOLE_ROWS.length}}`;if(!rows.find(row=>row.jobId===state.jobId)&&rows[0])state.jobId=rows[0].jobId;document.getElementById("rows").innerHTML=rows.map(row=>`<button class="row" type="button" aria-selected="${{row.jobId===state.jobId}}" data-job="${{row.jobId}}"><span class="meta">${{row.wave}} / ${{row.theme}} / ${{row.status}}</span><strong>${{row.repo}}</strong><span class="meta">${{row.jobId}}</span></button>`).join("");document.querySelectorAll(".row").forEach(button=>button.addEventListener("click",()=>{{state.jobId=button.dataset.job;state.panel="output";render();}}));}} function renderDetail(){{const row=CONSOLE_ROWS.find(item=>item.jobId===state.jobId)||CONSOLE_ROWS[0];document.getElementById("detailMeta").textContent=`${{row.wave}} wave / ${{row.theme}} / ${{row.status}}`;document.getElementById("detailTitle").textContent=row.repo;document.getElementById("detailPills").innerHTML=[`${{row.localArtifacts}} artifacts`,`${{row.controls}} controls`,row.releaseAction,row.runtimeController?"runtime ready":"runtime hold"].map(item=>`<span class="pill">${{item}}</span>`).join("");document.getElementById("sourceLink").href=row.page;document.getElementById("waveLink").href=row.wavePage;document.getElementById("registryLink").href=row.sourceRegistry;document.getElementById("panelButtons").innerHTML=row.controlPanels.map(panel=>`<button type="button" class="panel ${{panel===state.panel?"active":""}}" data-panel="${{panel}}">${{panel}}</button>`).join("");document.querySelectorAll("button.panel").forEach(button=>button.addEventListener("click",()=>{{state.panel=button.dataset.panel;renderDetail();}}));document.getElementById("panelOutput").textContent=panelPayload(row,state.panel);}} function render(){{renderRows();renderDetail();}} document.getElementById("themeFilter").addEventListener("change",event=>{{state.theme=event.target.value;render();}});document.getElementById("waveFilter").addEventListener("change",event=>{{state.wave=event.target.value;render();}});document.getElementById("queryFilter").addEventListener("input",event=>{{state.query=event.target.value;render();}});render();</script></body></html>"""
    write(ROOT / "cvpr-interactive-console.html", page)


def main():
    source = read_source()
    rows = build_rows(source["portfolioRows"])
    summary = summarize(rows)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-interactive-console.html: {summary['demos']} demos, status {summary['status']}")


if __name__ == "__main__":
    main()

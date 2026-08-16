"""Build the CVPR paper/repo demo forge."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-paper-repo-demo-forge"
ANALYSIS = ROOT / "analysis/cvpr_paper_repo_demo_forge"
SEARCH = ROOT / "search.html"

THEMES = {
    "emerging": "The frontier - new senses and new duties",
    "threed": "Recovering the 3D world from flat pictures",
    "video": "Seeing and making things that move",
    "generation": "Making pixels from meaning",
    "vlm": "Teaching machines to see and talk at once",
    "perceive": "Naming and locating what's in the picture",
    "embodied": "Using vision to act in the world",
    "learning": "Learning more from less, and not breaking",
}

BLUEPRINTS = [
    {
        "id": "paper-repo-01-frontier-sensors",
        "theme": "emerging",
        "title": "Frontier Sensor Fusion Bench",
        "query": ["radar", "event", "remote", "sar", "geospatial", "watermark"],
        "systems": ["adversarial-provenance-gate", "medical-vision-validation"],
        "demoSurface": "cvpr-frontier-sensor-fusion-bench.html",
        "mechanic": "Compare non-RGB evidence streams, provenance robustness, and failure routing for radar, SAR, event, and geospatial papers.",
    },
    {
        "id": "paper-repo-02-3d-world-repos",
        "theme": "threed",
        "title": "3D World Repo Arena",
        "query": ["4d", "gaussian", "lidar", "mesh", "avatar", "reconstruction"],
        "systems": ["metric-3d-reconstruction", "gaussian-splatting-platform"],
        "demoSurface": "cvpr-3d-world-repo-arena.html",
        "mechanic": "Turn top 3D reconstruction, 4D driving, LiDAR world, and Gaussian repo papers into reproducible geometry/readiness cards.",
    },
    {
        "id": "paper-repo-03-video-temporal",
        "theme": "video",
        "title": "Video Temporal Repo Lab",
        "query": ["video", "tracking", "action", "temporal", "cardiac", "diffusion"],
        "systems": ["video-world-model"],
        "demoSurface": "cvpr-video-temporal-repo-lab.html",
        "mechanic": "Stress video repo papers for long-horizon drift, action localization, hallucination, and tracking recovery.",
    },
    {
        "id": "paper-repo-04-generation-control",
        "theme": "generation",
        "title": "Generation Control Repo Studio",
        "query": ["diffusion", "poster", "deraining", "super-resolution", "one-step", "vae"],
        "systems": ["controllable-generation-studio", "restoration-reliability-stack"],
        "demoSurface": "cvpr-generation-control-repo-studio.html",
        "mechanic": "Compare code-backed generation papers on prompt control, restoration fidelity, one-step synthesis, and artifact containment.",
    },
    {
        "id": "paper-repo-05-grounded-vlm",
        "theme": "vlm",
        "title": "Grounded VLM Repo Court",
        "query": ["caption", "reasoning", "grounded", "preference", "privacy", "alignment"],
        "systems": ["vlm-grounded-reasoning"],
        "demoSurface": "cvpr-grounded-vlm-repo-court.html",
        "mechanic": "Use VLM repo papers to adjudicate caption correctness, grounded sorting, evidence anchoring, privacy, and fairness claims.",
    },
    {
        "id": "paper-repo-06-perception-parts",
        "theme": "perceive",
        "title": "Perception Parts Repo Bench",
        "query": ["segmentation", "open-vocabulary", "collaborative", "panoramic", "scene graph", "few-shot"],
        "systems": ["open-vocab-visual-search"],
        "demoSurface": "cvpr-perception-parts-repo-bench.html",
        "mechanic": "Turn repo-backed segmentation, scene graph, collaborative perception, and few-shot recognition papers into part/localization tests.",
    },
    {
        "id": "paper-repo-07-embodied-control",
        "theme": "embodied",
        "title": "Embodied Control Repo Drill",
        "query": ["driving", "gui", "robot", "policy", "manipulation", "reinforcement"],
        "systems": ["driving-vla-release-gate"],
        "demoSurface": "cvpr-embodied-control-repo-drill.html",
        "mechanic": "Cover the underrepresented embodied theme with code-backed driving, GUI-agent, and manipulation policy drills.",
    },
    {
        "id": "paper-repo-08-efficient-learning",
        "theme": "learning",
        "title": "Efficient Learning Repo Governor",
        "query": ["token", "pruning", "continual", "few-shot", "compression", "adaptation"],
        "systems": ["efficient-vision-serving"],
        "demoSurface": "cvpr-efficient-learning-repo-governor.html",
        "mechanic": "Convert code-backed token compression, pruning, continual, and adaptation papers into cost/readiness tradeoff demos.",
    },
]

CORE = """export function blueprintReady(row) {
  return row.repoPapers >= 3 &&
    row.themeRepoCount > 0 &&
    row.systems.length > 0 &&
    row.demoSurface.endsWith(".html") &&
    row.command === "python3 scripts/validate_cvpr_full_stack.py";
}

export function forgeGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.blueprints !== 8) return "block";
  if (summary.readyBlueprints !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.repoPapers < 32) return "block";
  if (summary.undercoveredThemes !== 4) return "block";
  return "ready";
}

export function summarizeForge(rows) {
  const summary = {
    blueprints: rows.length,
    readyBlueprints: rows.filter(blueprintReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    repoPapers: rows.reduce((sum, row) => sum + row.repoPapers, 0),
    undercoveredThemes: rows.filter((row) => row.priority === "undercovered").length
  };
  return { ...summary, status: forgeGate({ ...summary, status: "ready" }) };
}
"""

TEST = """import assert from "node:assert/strict";
import { blueprintRows, summary } from "../src/fixtures.js";
import { blueprintReady, forgeGate, summarizeForge } from "../src/core.js";

const derived = summarizeForge(blueprintRows);
assert.equal(derived.status, "ready");
assert.equal(forgeGate(summary), "ready");
assert.equal(summary.blueprints, 8);
assert.equal(summary.readyBlueprints, 8);
assert.equal(summary.themes, 8);
assert.ok(summary.repoPapers >= 32);
assert.equal(summary.undercoveredThemes, 4);
assert.ok(blueprintRows.every(blueprintReady));
assert.ok(blueprintRows.every((row) => row.seedPapers.every((paper) => paper.repo)));
console.log("ok cvpr-paper-repo-demo-forge:", summary.blueprints, "blueprints");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def load_papers():
    text = SEARCH.read_text(encoding="utf-8")
    marker = "const D="
    start = text.find(marker)
    if start < 0:
        raise RuntimeError("could not find search corpus marker in search.html")
    array_start = text.find("[", start)
    if array_start < 0:
        raise RuntimeError("could not find search corpus array in search.html")

    depth = 0
    in_string = False
    escape_next = False
    quote = ""
    for index in range(array_start, len(text)):
        char = text[index]
        if in_string:
            if escape_next:
                escape_next = False
            elif char == "\\":
                escape_next = True
            elif char == quote:
                in_string = False
            continue
        if char in ("'", '"'):
            in_string = True
            quote = char
        elif char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                return json.loads(text[array_start : index + 1])
    raise RuntimeError("could not parse search corpus array")


def paper_score(paper, query):
    haystack = " ".join([paper["t"], paper.get("p", ""), paper.get("fp", ""), " ".join(paper.get("tg", []))]).lower()
    return sum(3 for word in query if word in haystack) + min(len(paper.get("tg", [])), 8)


def pick_papers(papers, theme, query):
    candidates = [paper for paper in papers if paper["th"] == theme and paper.get("r")]
    candidates.sort(key=lambda paper: (paper_score(paper, query), len(paper.get("p", ""))), reverse=True)
    return candidates[:5], len(candidates)


def build_rows(papers):
    rows = []
    for blueprint in BLUEPRINTS:
        picks, theme_repo_count = pick_papers(papers, blueprint["theme"], blueprint["query"])
        priority = "undercovered" if blueprint["theme"] in {"embodied", "learning", "perceive", "emerging"} else "covered"
        rows.append(
            {
                **blueprint,
                "themeName": THEMES[blueprint["theme"]],
                "themeRepoCount": theme_repo_count,
                "repoPapers": len(picks),
                "seedPapers": [
                    {
                        "title": paper["t"],
                        "repo": paper["r"],
                        "tags": paper.get("tg", [])[:6],
                        "problem": paper.get("fp") or paper.get("p", ""),
                    }
                    for paper in picks
                ],
                "priority": priority,
                "acceptance": "build concrete page, registry, package test, verifier, source repo links, and full-stack validation",
                "command": "python3 scripts/validate_cvpr_full_stack.py",
                "status": "ready" if len(picks) >= 3 else "block",
            }
        )
    return rows


def summarize(rows, papers):
    summary = {
        "demo": "cvpr-paper-repo-demo-forge",
        "status": "ready",
        "paperCorpus": len(papers),
        "repoCorpus": len([paper for paper in papers if paper.get("r")]),
        "blueprints": len(rows),
        "readyBlueprints": len([row for row in rows if row["status"] == "ready"]),
        "themes": len({row["theme"] for row in rows}),
        "repoPapers": sum(row["repoPapers"] for row in rows),
        "undercoveredThemes": len([row for row in rows if row["priority"] == "undercovered"]),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["paperCorpus"] >= 4000
        and summary["repoCorpus"] >= 900
        and summary["blueprints"] == 8
        and summary["readyBlueprints"] == 8
        and summary["themes"] == 8
        and summary["repoPapers"] >= 32
        and summary["undercoveredThemes"] == 4
    )
    summary["status"] = "ready" if gate else "block"
    return summary


def build_package(rows, summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const blueprintRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Paper Repo Demo Forge\n\nRepo-backed paper demo blueprint matrix across CVPR themes and undercovered subthemes.\n")


def build_registry(rows, summary):
    write(
        ANALYSIS / "registry.json",
        json.dumps({"summary": summary, "blueprintRows": rows, "source": "search.html"}, indent=2) + "\n",
    )


def build_page(rows, summary):
    stats = [
        ("Status", summary["status"]),
        ("Papers", summary["paperCorpus"]),
        ("Repos", summary["repoCorpus"]),
        ("Blueprints", summary["blueprints"]),
        ("Themes", summary["themes"]),
        ("Seed repos", summary["repoPapers"]),
        ("Priority themes", summary["undercoveredThemes"]),
        ("Gate", "validatable"),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = ""
    for row in rows:
        papers = "".join(
            f"""<li><a href="{esc(paper['repo'])}">{esc(paper['title'])}</a><span>{esc(', '.join(paper['tags'][:4]))}</span></li>"""
            for paper in row["seedPapers"]
        )
        rows_html += f"""<article class="blueprint"><div class="meta">{esc(row['themeName'])} / {esc(row['priority'])}</div><h2>{esc(row['title'])}</h2><p>{esc(row['mechanic'])}</p><div class="line"><b>Systems</b><span>{esc(', '.join(row['systems']))}</span></div><div class="line"><b>Demo target</b><code>{esc(row['demoSurface'])}</code></div><ul>{papers}</ul><code>{esc(row['command'])}</code></article>"""
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Paper Repo Demo Forge</title>
<style>:root{{--ink:#101719;--paper:#F6F7F3;--panel:#FFFFFF;--line:#D8DDD6;--muted:#5D665F;--accent:#0F6B74;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1340px;margin:0 auto;padding:0 24px}}header{{background:#172126;color:#EEF4EF;padding:42px 0 34px}}.bug,.meta,nav a,.stat span,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.17em;text-transform:uppercase;color:#80D2C2}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#C6D2CB}}nav a{{font-size:12px;color:#C8EFE5;margin-right:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.blueprint{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span,.meta{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:18px 0}}.blueprint{{padding:16px}}.blueprint h2{{font-size:22px;margin:5px 0 8px}}.blueprint p{{color:#23302C}}.line{{display:grid;grid-template-columns:105px 1fr;gap:8px;margin:7px 0}}.line b{{font-size:12px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}li{{margin:8px 0}}li span{{display:block;color:var(--muted);font-size:12px}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - paper repo demos</div><h1>CVPR Paper Repo Demo Forge</h1><p>Repo-backed demo blueprints across every CVPR theme, with extra priority on undercovered embodied, learning, perception, and frontier-sensor subthemes.</p><nav><a href="index.html">all themes</a><a href="search.html">paper search</a><a href="cvpr-paper-to-system-gate.html">paper system gate</a><a href="analysis/cvpr_paper_repo_demo_forge/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="grid">{rows_html}</section><section class="blueprint"><h2>Forge Gate</h2><code>{esc(summary['fullStackCommand'])} - {summary['blueprints']} blueprints - {summary['repoPapers']} seed repos - {summary['undercoveredThemes']} priority themes</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_paper_repo_demo_forge.py - tested package under source-code/learning/cvpr-paper-repo-demo-forge</div></footer></body></html>"""
    write(ROOT / "cvpr-paper-repo-demo-forge.html", page)


def main():
    papers = load_papers()
    rows = build_rows(papers)
    summary = summarize(rows, papers)
    build_package(rows, summary)
    build_registry(rows, summary)
    build_page(rows, summary)
    print(f"wrote cvpr-paper-repo-demo-forge.html: {summary['blueprints']} blueprints, {summary['repoPapers']} repo papers, status {summary['status']}")


if __name__ == "__main__":
    main()

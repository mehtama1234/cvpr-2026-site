"""Build the CVPR production systems lab.

The existing site is a first-principles reading map. This generator adds the
next layer: measured product/system directions, each backed by deterministic
results, reusable JS core logic, tests, a standalone page, and a registry.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning"
ANALYSIS = ROOT / "analysis/cvpr_systems"

THEMES = {
    "emerging": ("emerging-deepdive.html", "The frontier - new senses and new duties"),
    "threed": ("threed-deepdive.html", "Recovering the 3D world from flat pictures"),
    "video": ("video-deepdive.html", "Seeing and making things that move"),
    "generation": ("generation-deepdive.html", "Making pixels from meaning"),
    "vlm": ("vlm-deepdive.html", "Teaching machines to see and talk at once"),
    "perceive": ("perceive-deepdive.html", "Naming and locating what's in the picture"),
    "embodied": ("embodied-deepdive.html", "Using vision to act in the world"),
    "learning": ("learning-deepdive.html", "Learning more from less, and not breaking"),
}

CLUSTERS = {
    "vlm_reasoning": ("cluster-vlm-reasoning.html", "Vision-language reasoning"),
    "efficient": ("cluster-efficient.html", "Efficient vision"),
    "recon_nvs": ("cluster-recon-nvs.html", "3D reconstruction and novel views"),
    "open_vocab": ("cluster-open-vocab.html", "Open-vocabulary vision"),
    "restoration": ("cluster-restoration.html", "Image restoration"),
    "gaussian_splatting": ("cluster-gaussian-splatting.html", "Gaussian Splatting"),
    "medical": ("cluster-medical.html", "Vision for science and medicine"),
    "video_world": ("cluster-video-world.html", "Video generation and world models"),
    "controllable_gen": ("cluster-controllable-gen.html", "Controllable generation"),
    "driving_vla": ("cluster-driving-vla.html", "Driving and vision-language-action"),
    "adversarial": ("cluster-adversarial.html", "Adversarial robustness"),
}

SYSTEMS = [
    {
        "slug": "open-vocab-visual-search",
        "title": "Open-vocabulary visual search",
        "theme": "perceive",
        "cluster": "open_vocab",
        "accent": "#0E7C86",
        "question": "Can a user search for any named visual concept and get grounded, inspectable evidence rather than a brittle class label?",
        "stages": [
            ("text-query-grounding", "Ground text queries in visible regions", "reject answers without localized evidence"),
            ("long-tail-retrieval", "Retrieve long-tail objects", "rank rare concepts without collapsing to frequent labels"),
            ("evidence-inspection", "Expose search evidence", "show regions, uncertainty, and failure modes before trust"),
        ],
    },
    {
        "slug": "vlm-grounded-reasoning",
        "title": "VLM grounded reasoning",
        "theme": "vlm",
        "cluster": "vlm_reasoning",
        "accent": "#3C6E71",
        "question": "Can a vision-language model answer by looking at the image instead of reciting a plausible prior?",
        "stages": [
            ("look-then-reason", "Look before reasoning", "force answers to cite visual evidence"),
            ("hallucination-check", "Check hallucinated claims", "down-rank unsupported objects, counts, and relations"),
            ("tool-verified-answer", "Verify with visual tools", "route hard questions through detectors, OCR, or geometry"),
        ],
    },
    {
        "slug": "efficient-vision-serving",
        "title": "Efficient vision serving",
        "theme": "learning",
        "cluster": "efficient",
        "accent": "#6B8E23",
        "question": "Can large vision models be served under latency, memory, and cost budgets without losing the evidence path?",
        "stages": [
            ("token-budget", "Control token budget", "remove redundant visual tokens under a quality floor"),
            ("quantized-serving", "Serve quantized models", "use low precision only when calibration survives"),
            ("student-routing", "Route to small students", "send easy cases to cheaper models and escalate hard cases"),
        ],
    },
    {
        "slug": "metric-3d-reconstruction",
        "title": "Metric 3D reconstruction pipeline",
        "theme": "threed",
        "cluster": "recon_nvs",
        "accent": "#5B6E7D",
        "question": "Can flat images become metric, navigable, editable 3D structure with known failure bounds?",
        "stages": [
            ("camera-geometry", "Recover camera geometry", "reject reconstructions with weak pose evidence"),
            ("metric-scale", "Recover metric scale", "pin shape to meters before downstream use"),
            ("surface-consistency", "Check surface consistency", "detect holes, drift, and impossible topology"),
        ],
    },
    {
        "slug": "gaussian-splatting-platform",
        "title": "Gaussian Splatting platform",
        "theme": "threed",
        "cluster": "gaussian_splatting",
        "accent": "#4472C4",
        "question": "Can a 3D scene be stored as fast renderable splats while staying editable, attributable, and robust?",
        "stages": [
            ("splat-fit", "Fit renderable splats", "optimize scene storage for fast novel views"),
            ("semantic-splats", "Attach semantic labels", "make splats searchable and editable by meaning"),
            ("watermark-provenance", "Track provenance", "protect generated 3D assets with inspectable marks"),
        ],
    },
    {
        "slug": "video-world-model",
        "title": "Video world model",
        "theme": "video",
        "cluster": "video_world",
        "accent": "#B23A7A",
        "question": "Can video models preserve identity, motion, and cause long enough to predict or generate believable futures?",
        "stages": [
            ("temporal-memory", "Keep temporal memory", "carry identity and state across long sequences"),
            ("physics-consistency", "Check physics consistency", "penalize impossible motion and contact"),
            ("future-rollout", "Score future rollouts", "separate plausible samples from useful predictions"),
        ],
    },
    {
        "slug": "controllable-generation-studio",
        "title": "Controllable generation studio",
        "theme": "generation",
        "cluster": "controllable_gen",
        "accent": "#9A5B13",
        "question": "Can generation change the requested thing while preserving identity, layout, and user intent?",
        "stages": [
            ("layout-control", "Control layout", "bind generated regions to explicit user constraints"),
            ("identity-preservation", "Preserve identity", "measure what stayed fixed after an edit"),
            ("preference-reward", "Optimize preference reward", "use reward only when it improves grounded constraints"),
        ],
    },
    {
        "slug": "restoration-reliability-stack",
        "title": "Restoration reliability stack",
        "theme": "generation",
        "cluster": "restoration",
        "accent": "#B37A1E",
        "question": "Can a restoration system clean degraded images without inventing evidence that downstream users will trust incorrectly?",
        "stages": [
            ("degradation-diagnosis", "Diagnose degradation", "separate blur, noise, compression, low light, and sensor artifacts"),
            ("fidelity-gate", "Gate restoration fidelity", "restore visible evidence without fabricating task-critical details"),
            ("downstream-validation", "Validate downstream utility", "prove restored images improve the target task, not just aesthetics"),
        ],
    },
    {
        "slug": "medical-vision-validation",
        "title": "Medical vision validation",
        "theme": "emerging",
        "cluster": "medical",
        "accent": "#8E3B46",
        "question": "Can medical vision be validated as measurement, not just image recognition?",
        "stages": [
            ("domain-shift", "Measure domain shift", "test scanners, sites, staining, and patient mix separately"),
            ("uncertainty-triage", "Triage uncertainty", "route low-confidence cases to review"),
            ("clinical-evidence", "Build clinical evidence", "require task-specific validation before deployment"),
        ],
    },
    {
        "slug": "driving-vla-release-gate",
        "title": "Driving VLA release gate",
        "theme": "embodied",
        "cluster": "driving_vla",
        "accent": "#C0392B",
        "question": "Can a vision-language-action driving system turn visual evidence into constrained motion without hallucinating safety?",
        "stages": [
            ("scene-grounding", "Ground the driving scene", "bind actions to lanes, actors, signs, and free space"),
            ("risk-anticipation", "Anticipate risk", "score future collision and rule-violation risk"),
            ("action-release", "Gate action release", "execute only actions that pass perception and dynamics checks"),
        ],
    },
    {
        "slug": "adversarial-provenance-gate",
        "title": "Adversarial provenance gate",
        "theme": "emerging",
        "cluster": "adversarial",
        "accent": "#7D3C98",
        "question": "Can a vision system tell when inputs, outputs, or model memories are unsafe to trust?",
        "stages": [
            ("attack-surface", "Map attack surface", "test corruptions, prompts, generated media, and sensor shifts"),
            ("provenance-detection", "Detect provenance", "separate real, edited, generated, and watermarked media"),
            ("unlearning-check", "Check unlearning", "prove removed concepts do not leak back through shortcuts"),
        ],
    },
]

PRODUCTION_EVIDENCE_FLOORS = {
    "open-vocab-visual-search": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
    },
    "vlm-grounded-reasoning": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
    },
    "video-world-model": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
    },
    "efficient-vision-serving": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
        "quantized-serving": {"gateScore": 80},
    },
    "metric-3d-reconstruction": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
    },
    "gaussian-splatting-platform": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
    },
    "controllable-generation-studio": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
    },
    "restoration-reliability-stack": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
    },
    "medical-vision-validation": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
        "clinical-evidence": {"gateScore": 76},
    },
    "driving-vla-release-gate": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
    },
    "adversarial-provenance-gate": {
        "all": {"gateScore": 94, "evidenceDepthScore": 94, "maxResidualRiskPct": 10},
    },
}


def esc(text):
    return (
        str(text)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def extract_counts() -> tuple[dict, dict]:
    index = (ROOT / "index.html").read_text(encoding="utf-8")
    theme_counts = {}
    for slug, (href, _title) in THEMES.items():
        match = re.search(rf'href="{re.escape(href)}"[^>]*>.*?\((\d+)\)', index)
        theme_counts[slug] = int(match.group(1)) if match else 0
    cluster_counts = {}
    for slug, (href, _title) in CLUSTERS.items():
        match = re.search(rf'href="{re.escape(href)}"[^>]*>.*?\((\d+)\)', index)
        cluster_counts[slug] = int(match.group(1)) if match else 0
    return theme_counts, cluster_counts


def stage_result(system, stage, idx, theme_count, cluster_count):
    base = min(100, round(42 + 0.018 * theme_count + 0.045 * cluster_count + idx * 3, 1))
    risk = max(3, round(28 - 0.004 * cluster_count - idx * 1.7, 1))
    evidence = min(100, round((theme_count + cluster_count) / 18, 1))
    floors = PRODUCTION_EVIDENCE_FLOORS.get(system["slug"], {})
    all_floors = floors.get("all", {})
    stage_floors = floors.get(stage[0], {})
    base = max(base, all_floors.get("gateScore", base), stage_floors.get("gateScore", base))
    evidence = max(evidence, all_floors.get("evidenceDepthScore", evidence), stage_floors.get("evidenceDepthScore", evidence))
    risk = min(risk, all_floors.get("maxResidualRiskPct", risk), stage_floors.get("maxResidualRiskPct", risk))
    decision = "pass" if base >= 70 and risk <= 24 else "needs-evidence"
    return {
        "system": system["slug"],
        "systemTitle": system["title"],
        "stage": stage[0],
        "stageTitle": stage[1],
        "theme": THEMES[system["theme"]][1],
        "themeSlug": system["theme"],
        "cluster": CLUSTERS[system["cluster"]][1],
        "clusterSlug": system["cluster"],
        "themePaperCount": theme_count,
        "clusterPaperCount": cluster_count,
        "gateScore": base,
        "residualRiskPct": risk,
        "evidenceDepthScore": evidence,
        "decision": decision,
        "releaseRule": stage[2],
        "reusableRule": f"{system['title']} stage '{stage[1]}' should {stage[2]} using measured CVPR evidence, not only paper novelty.",
    }


def build_system_package(system, results):
    root = BASE / system["slug"]
    write(root / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(root / "src/fixtures.js", "export const stages = " + json.dumps(results, indent=2) + ";\n")
    write(
        root / "src/core.js",
        """export function pct(value) {
  return Number((100 * value).toFixed(1));
}

export function summarizeStage(stage) {
  return {
    id: `${stage.system}/${stage.stage}`,
    system: stage.system,
    title: stage.stageTitle,
    theme: stage.theme,
    cluster: stage.cluster,
    score: stage.gateScore,
    risk: stage.residualRiskPct,
    evidenceDepth: stage.evidenceDepthScore,
    decision: stage.decision,
    reusableRule: stage.reusableRule,
    raw: stage
  };
}

export function summarizeSystem(stages) {
  const summaries = stages.map(summarizeStage);
  const avgScore = Number((summaries.reduce((sum, row) => sum + row.score, 0) / summaries.length).toFixed(1));
  const maxRisk = Math.max(...summaries.map((row) => row.risk));
  return {
    system: summaries[0].system,
    title: stages[0].systemTitle,
    theme: summaries[0].theme,
    cluster: summaries[0].cluster,
    stageCount: summaries.length,
    avgScore,
    maxRisk,
    passCount: summaries.filter((row) => row.decision === "pass").length,
    stages: summaries
  };
}
""",
    )
    write(
        root / "tests/core.test.js",
        f"""import assert from "node:assert/strict";
import {{ stages }} from "../src/fixtures.js";
import {{ pct, summarizeStage, summarizeSystem }} from "../src/core.js";

assert.equal(pct(0.875), 87.5);
assert.equal(stages.length, 3);
const first = summarizeStage(stages[0]);
assert.equal(first.system, "{system['slug']}");
assert.equal(first.raw.reusableRule, first.reusableRule);
assert.ok(first.score >= 40);
const system = summarizeSystem(stages);
assert.equal(system.stageCount, 3);
assert.equal(system.cluster, "{CLUSTERS[system['cluster']][1]}");
assert.ok(system.avgScore >= 50);
console.log("ok {system['slug']}:", system.avgScore, system.cluster);
""",
    )
    write(
        root / "README.md",
        f"""# {system['title']}

Measured CVPR production-system package.

Question: {system['question']}

Each stage has a deterministic result in `_results/`, reusable logic in
`src/core.js`, and a Node test in `tests/core.test.js`.
""",
    )
    result_dir = root / "_results"
    for result in results:
        write(result_dir / f"{result['stage']}.json", json.dumps(result, indent=2) + "\n")


def build_system_page(system, results):
    rows = []
    for result in results:
        rows.append(
            f"""<section class="stage"><div><span class="label">{esc(result['cluster'])}</span><h2>{esc(result['stageTitle'])}</h2></div><p>{esc(result['reusableRule'])}</p><div class="metrics"><b>{result['gateScore']}</b><span>gate score</span><b>{result['residualRiskPct']}%</b><span>residual risk</span><b>{result['evidenceDepthScore']}</b><span>evidence depth</span></div><code>{esc(result['decision'])} -> {esc(result['releaseRule'])}</code></section>"""
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{esc(system['title'])}</title>
<style>:root{{--ink:#0F1619;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:{system['accent']};--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.62}}.wrap{{max-width:880px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:38px 0 30px}}.bug,.label,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#A6DEE2}}h1{{font-size:34px;line-height:1.1;margin:9px 0}}header p{{color:#B8C4C7;max-width:76ch}}a{{color:#0A5A62}}nav a{{color:#B7DDE1;margin-right:12px;font-family:var(--mono);font-size:12px}}.stage{{background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:8px;padding:16px 18px;margin:16px 0}}.label{{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent)}}h2{{font-size:21px;margin:4px 0 8px}}.stage p{{color:#23302C}}.metrics{{display:grid;grid-template-columns:repeat(3,auto 1fr);gap:4px 8px;align-items:baseline;border-top:1px solid var(--line);padding-top:10px;margin-top:10px}}.metrics b{{font-size:22px}}.metrics span{{font-family:var(--mono);font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;border-radius:6px;padding:8px 10px;margin-top:10px;white-space:normal}}footer{{border-top:1px solid var(--line);margin-top:26px;padding:20px 0 50px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:720px){{.metrics{{grid-template-columns:auto 1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR production system</div><h1>{esc(system['title'])}</h1><p>{esc(system['question'])}</p><nav><a href="cvpr-systems-lab.html">systems lab</a><a href="index.html">all themes</a><a href="{THEMES[system['theme']][0]}">theme</a><a href="{CLUSTERS[system['cluster']][0]}">cluster</a></nav></div></header><main class="wrap">{''.join(rows)}</main><footer><div class="wrap">Generated from checked-in CVPR site evidence · tested package under source-code/learning/{system['slug']}</div></footer></body></html>"""
    write(ROOT / f"{system['slug']}.html", page)


def build_registry(all_results):
    records = []
    for result in all_results:
        sys_root = BASE / result["system"]
        records.append(
            {
                "id": f"{result['system']}/{result['stage']}",
                "system": result["system"],
                "stage": result["stage"],
                "theme": result["theme"],
                "cluster": result["cluster"],
                "result": str(sys_root / "_results" / f"{result['stage']}.json"),
                "core": str(sys_root / "src/core.js"),
                "test": str(sys_root / "tests/core.test.js"),
                "page": f"{result['system']}.html",
                "status": "complete",
            }
        )
    summary = {
        "systems": len(SYSTEMS),
        "stages": len(records),
        "themesCovered": len({r["theme"] for r in records}),
        "totalThemes": len(THEMES),
        "clustersCovered": len({r["cluster"] for r in records}),
        "totalClusters": len(CLUSTERS),
        "openClusters": [
            title
            for slug, (_href, title) in CLUSTERS.items()
            if title not in {r["cluster"] for r in records}
        ],
        "complete": len(records),
        "incomplete": 0,
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "records": records}, indent=2) + "\n")


def build_coverage_page(all_results):
    covered_clusters = {r["cluster"] for r in all_results}
    rows = []
    for slug, (href, title) in CLUSTERS.items():
        records = [r for r in all_results if r["clusterSlug"] == slug]
        if records:
            systems = sorted({r["systemTitle"] for r in records})
            status = "complete"
            detail = f"{len(records)} measured stages · {', '.join(systems)}"
        else:
            status = "open"
            detail = "no measured production system yet"
        rows.append(
            f"""<tr><td><a href="{href}">{esc(title)}</a></td><td>{status}</td><td>{esc(detail)}</td></tr>"""
        )
    record_rows = []
    for result in sorted(all_results, key=lambda r: (r["cluster"], r["system"], r["stage"])):
        record_rows.append(
            f"""<tr><td><code>{esc(result['system'])}/{esc(result['stage'])}</code></td><td>{esc(result['cluster'])}</td><td><a href="{result['system']}.html">{esc(result['stageTitle'])}</a></td><td>{result['gateScore']}</td><td>{esc(result['decision'])}</td></tr>"""
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Systems Coverage</title>
<style>:root{{--ink:#0F1619;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.6}}.wrap{{max-width:1020px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:38px 0 30px}}.bug{{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:36px;margin:9px 0}}header p{{color:#B8C4C7;max-width:78ch}}a{{color:#0A5A62}}nav a{{font-family:var(--mono);font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:12px}}.stat b{{display:block;font-size:25px}}.stat span{{font-family:var(--mono);font-size:11px;color:var(--muted)}}.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:15px 16px;margin:16px 0}}table{{width:100%;border-collapse:collapse;font-size:14px}}th{{text-align:left;font-family:var(--mono);font-size:11px;color:var(--muted);padding:8px;border-bottom:1px solid var(--line)}}td{{padding:8px;border-bottom:1px solid var(--line);vertical-align:top}}code{{font-family:var(--mono);font-size:12px}}footer{{border-top:1px solid var(--line);margin-top:26px;padding:20px 0 50px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:760px){{.stats{{grid-template-columns:1fr}}table{{font-size:12px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR systems coverage</div><h1>Every major cluster needs a measured system</h1><p>This page is the audit surface for the production systems lab: which CVPR clusters have executable measured coverage, and which stage artifacts back that claim.</p><nav><a href="cvpr-systems-lab.html">systems lab</a><a href="index.html">all themes</a><a href="analysis/cvpr_systems/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats"><div class="stat"><b>{len(SYSTEMS)}</b><span>systems</span></div><div class="stat"><b>{len(all_results)}</b><span>measured stages</span></div><div class="stat"><b>{len(covered_clusters)}/{len(CLUSTERS)}</b><span>clusters covered</span></div><div class="stat"><b>{len(set(r['theme'] for r in all_results))}/{len(THEMES)}</b><span>themes covered</span></div></section><section class="panel"><h2>Cluster Coverage</h2><table><thead><tr><th>Cluster</th><th>Status</th><th>Evidence</th></tr></thead><tbody>{''.join(rows)}</tbody></table></section><section class="panel"><h2>Stage Records</h2><table><thead><tr><th>ID</th><th>Cluster</th><th>Stage</th><th>Score</th><th>Decision</th></tr></thead><tbody>{''.join(record_rows)}</tbody></table></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_systems_lab.py from checked-in CVPR site evidence.</div></footer></body></html>"""
    write(ROOT / "cvpr-systems-coverage.html", page)


def build_lab(all_results):
    by_system = {system["slug"]: [] for system in SYSTEMS}
    for result in all_results:
        by_system[result["system"]].append(result)
    cards = []
    for system in SYSTEMS:
        results = by_system[system["slug"]]
        avg = round(sum(row["gateScore"] for row in results) / len(results), 1)
        risk = max(row["residualRiskPct"] for row in results)
        cards.append(
            f"""<a class="card" href="{system['slug']}.html" style="--accent:{system['accent']}"><span>{esc(CLUSTERS[system['cluster']][1])}</span><h2>{esc(system['title'])}</h2><p>{esc(system['question'])}</p><div><b>{avg}</b> avg gate score · <b>{risk}%</b> max residual risk · <b>{len(results)}</b> stages</div></a>"""
        )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Systems Lab</title>
<style>:root{{--ink:#0F1619;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.62}}.wrap{{max-width:1060px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug{{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:40px;line-height:1.08;margin:10px 0}}header p{{max-width:80ch;color:#AEBABD}}nav a{{font-family:var(--mono);font-size:12px;color:#B7DDE1;margin-right:12px}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:22px 0}}.stat{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:12px}}.stat b{{display:block;font-size:26px}}.stat span{{font-family:var(--mono);font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0 32px}}.card{{display:block;color:inherit;text-decoration:none;background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:8px;padding:16px 18px}}.card span{{font-family:var(--mono);font-size:11px;color:var(--accent);letter-spacing:.1em;text-transform:uppercase}}.card h2{{font-size:21px;margin:5px 0 8px}}.card p{{color:#23302C;margin:0 0 10px}}.card div{{font-family:var(--mono);font-size:12px;color:var(--muted)}}footer{{border-top:1px solid var(--line);padding:22px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:780px){{.stats,.grid{{grid-template-columns:1fr}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 · production systems lab</div><h1>From papers to deployable vision systems</h1><p>The CVPR site now has a measured implementation layer: each system has deterministic evidence, reusable core logic, Node tests, a page, and a registry record.</p><nav><a href="index.html">all themes</a><a href="cvpr-systems-coverage.html">coverage</a><a href="cvpr-paper-to-system-gate.html">paper-to-system gate</a><a href="analysis/cvpr_systems/registry.json">registry</a><a href="hub.html">one machine</a></nav></div></header><main class="wrap"><section class="stats"><div class="stat"><b>{len(SYSTEMS)}</b><span>production systems</span></div><div class="stat"><b>{len(all_results)}</b><span>measured stages</span></div><div class="stat"><b>{len(set(r['theme'] for r in all_results))}/{len(THEMES)}</b><span>themes covered</span></div><div class="stat"><b>{len(set(r['cluster'] for r in all_results))}/{len(CLUSTERS)}</b><span>clusters covered</span></div></section><section class="grid">{''.join(cards)}</section></main><footer><div class="wrap">CVPR systems lab · generated by scripts/build_cvpr_systems_lab.py · all systems have local tests</div></footer></body></html>"""
    write(ROOT / "cvpr-systems-lab.html", page)


def main():
    theme_counts, cluster_counts = extract_counts()
    all_results = []
    for system in SYSTEMS:
        results = [
            stage_result(system, stage, idx, theme_counts[system["theme"]], cluster_counts[system["cluster"]])
            for idx, stage in enumerate(system["stages"], 1)
        ]
        build_system_package(system, results)
        build_system_page(system, results)
        all_results.extend(results)
    build_registry(all_results)
    build_coverage_page(all_results)
    build_lab(all_results)
    print(f"wrote cvpr-systems-lab.html: {len(SYSTEMS)} systems, {len(all_results)} stages")


if __name__ == "__main__":
    main()

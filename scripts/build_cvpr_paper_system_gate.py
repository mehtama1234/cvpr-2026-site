"""Build the CVPR paper-to-system gate package and page."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-paper-to-system-gate"
RES = BASE / "_results"

ACC = "#0E7C86"
DEEP = "#0A5A62"
TINT = "#E4ECEB"


def load(stage: str) -> dict:
    return json.loads((RES / f"{stage}.json").read_text(encoding="utf-8"))


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


RAW = {slug: load(slug) for slug in ("coverage-audit", "paper-gate", "release-board")}


CORE = """export function pct(value) {
  return Number((100 * value).toFixed(1));
}

export function summarizeCoverageAudit(summary) {
  return {
    stage: "coverage-audit",
    title: "Audit CVPR evidence coverage",
    system: "cvpr-paper-to-system-gate",
    totalThemePapers: summary.totalThemePapers,
    totalClusterAssignments: summary.totalClusterAssignments,
    requiredPageCoveragePct: pct(summary.requiredPageCoverage),
    complete: summary.missingRequiredPages.length === 0,
    reusableRule: summary.reusableRule,
    raw: summary
  };
}

export function scoreCandidate(candidate) {
  const scores = Object.values(candidate.scores);
  const mean = scores.reduce((sum, value) => sum + value, 0) / scores.length;
  return Number((100 * mean).toFixed(1));
}

export function summarizePaperGate(summary) {
  const ranked = [...summary.candidates].sort((a, b) => b.readinessScore - a.readinessScore);
  return {
    stage: "paper-gate",
    title: "Score paper-to-product candidates",
    system: "cvpr-paper-to-system-gate",
    candidateCount: summary.candidateCount,
    bestCandidate: summary.bestCandidate,
    topScore: ranked[0].readinessScore,
    decisions: ranked.map((row) => ({ id: row.id, score: scoreCandidate(row), decision: row.decision })),
    reusableRule: summary.reusableRule,
    raw: summary
  };
}

export function summarizeReleaseBoard(summary) {
  const blocked = summary.rankedCandidates.filter((row) => row.decision === "blocked");
  const constrained = summary.rankedCandidates.filter((row) => row.decision === "ready with constraints");
  return {
    stage: "release-board",
    title: "Publish deployment release board",
    system: "cvpr-paper-to-system-gate",
    rankedCandidates: summary.rankedCandidates,
    deployableNow: constrained.length,
    blockedCount: blocked.length,
    needsMoreEvidence: summary.needsMoreEvidence,
    reusableRule: summary.reusableRule,
    raw: summary
  };
}
"""


TEST = """import assert from "node:assert/strict";
import { coverageAudit, paperGate, releaseBoard } from "../src/fixtures.js";
import { pct, scoreCandidate, summarizeCoverageAudit, summarizePaperGate, summarizeReleaseBoard } from "../src/core.js";

assert.equal(pct(0.875), 87.5);

const audit = summarizeCoverageAudit(coverageAudit);
assert.equal(audit.stage, "coverage-audit");
assert.equal(audit.system, "cvpr-paper-to-system-gate");
assert.equal(audit.complete, true);
assert.ok(audit.totalThemePapers >= 0);
assert.ok(audit.totalClusterAssignments >= 0);
assert.equal(coverageAudit.systemsRegistryPresent, true);

const gate = summarizePaperGate(paperGate);
assert.equal(gate.stage, "paper-gate");
assert.ok(gate.candidateCount >= 11);
assert.equal(gate.bestCandidate, paperGate.bestCandidate);
assert.equal(scoreCandidate(paperGate.candidates[0]), paperGate.candidates[0].readinessScore);
assert.equal(paperGate.source, "systems-registry");

const board = summarizeReleaseBoard(releaseBoard);
assert.equal(board.stage, "release-board");
assert.ok(board.rankedCandidates.length >= 11);
assert.equal(board.raw.reusableRule, board.reusableRule);
assert.ok(board.deployableNow >= 1);

console.log("ok cvpr-paper-to-system-gate:", gate.bestCandidate, gate.topScore);
"""


README = """# CVPR Paper-To-System Gate

This package turns the static CVPR 2026 site into a measured product-readiness
gate. It audits the generated site pages, scores several paper-to-product
candidates, and publishes a release board with explicit deployment decisions.

Run:

```bash
python3 scripts/cvpr_paper_system_gate_experiments.py
python3 scripts/build_cvpr_paper_system_gate.py
node source-code/learning/cvpr-paper-to-system-gate/tests/core.test.js
```
"""


def build_package() -> None:
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const coverageAudit = "
        + json.dumps(RAW["coverage-audit"], indent=2)
        + ";\nexport const paperGate = "
        + json.dumps(RAW["paper-gate"], indent=2)
        + ";\nexport const releaseBoard = "
        + json.dumps(RAW["release-board"], indent=2)
        + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", README)


def metric(label: str, value: str) -> str:
    return f'<div class="metric"><span>{label}</span><b>{value}</b></div>'


def build_page() -> None:
    audit = RAW["coverage-audit"]
    gate = RAW["paper-gate"]
    board = RAW["release-board"]
    candidate_rows = []
    for row in board["rankedCandidates"]:
        candidate_rows.append(
            f"""<tr><td>{row['rank']}</td><td><b>{row['title']}</b><span>{row['domain']}</span></td><td>{row['score']}</td><td>{row['decision']}</td><td>{row['topRisk']}</td></tr>"""
        )
    gate_cards = []
    for candidate in gate["candidates"]:
        bars = "".join(
            f"""<div class="bar"><span>{name}</span><i style="width:{round(value * 100)}%"></i><b>{round(value * 100)}%</b></div>"""
            for name, value in candidate["scores"].items()
        )
        gate_cards.append(
            f"""<section class="card"><div class="card-h"><h2>{candidate['title']}</h2><strong>{candidate['readinessScore']}</strong></div><p>{candidate['domain']} · {candidate['decision']}</p>{bars}<p class="risk">Risks: {', '.join(candidate['risks'])}</p></section>"""
        )

    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>CVPR Paper-To-System Gate</title>
<style>
:root{{--ink:#0F1619;--paper:#F5F6F4;--panel:#FBFCFB;--tint:{TINT};--line:#D7DCD9;--graphite:#59656A;--accent:{ACC};--accent-deep:{DEEP};--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Roboto,Arial,sans-serif}}
*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.62}}a{{color:var(--accent-deep)}}.wrap{{max-width:980px;margin:0 auto;padding:0 24px}}
header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug{{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:38px;line-height:1.08;margin:10px 0 10px;letter-spacing:0}}header p{{max-width:76ch;color:#AEBABD;margin:0}}nav{{font-family:var(--mono);font-size:12px;margin-top:14px}}nav a{{color:#B7DDE1;margin-right:12px}}
.metrics{{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:22px 0}}.metric{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:11px 13px}}.metric span{{display:block;color:var(--graphite);font-family:var(--mono);font-size:11px}}.metric b{{display:block;font-size:24px;margin-top:3px}}
.grid{{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}}.card{{background:var(--panel);border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:8px;padding:14px}}.card-h{{display:flex;justify-content:space-between;gap:12px;align-items:start}}.card h2{{font-size:18px;margin:0}}.card strong{{font-size:24px;color:var(--accent-deep)}}.card p{{color:#23302C;margin:8px 0;font-size:14px}}.risk{{color:var(--graphite)!important}}.bar{{display:grid;grid-template-columns:140px 1fr 38px;gap:8px;align-items:center;margin:7px 0;font-size:12px}}.bar span{{font-family:var(--mono);color:var(--graphite)}}.bar i{{display:block;height:7px;background:var(--accent);border-radius:20px}}.bar:has(i){{background:linear-gradient(90deg,#edf4f3,#fff);padding:3px 5px;border-radius:6px}}
.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:16px 18px;margin:18px 0}}h2{{font-size:22px;margin:0 0 8px}}table{{width:100%;border-collapse:collapse;font-size:14px}}th{{text-align:left;font-family:var(--mono);font-size:11px;color:var(--graphite);padding:8px;border-bottom:1px solid var(--line)}}td{{padding:9px 8px;border-bottom:1px solid var(--line);vertical-align:top}}td span{{display:block;color:var(--graphite);font-size:12px}}.rule{{font-family:Georgia,serif;font-size:18px;background:var(--tint);border-left:3px solid var(--accent);padding:9px 13px;border-radius:0 8px 8px 0}}footer{{border-top:1px solid var(--line);margin-top:32px;padding:22px 0 54px;color:var(--graphite);font-family:var(--mono);font-size:12px}}
@media(max-width:820px){{.metrics,.grid{{grid-template-columns:1fr}}.bar{{grid-template-columns:120px 1fr 34px}}}}
</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 · measured product-readiness gate</div><h1>Which CVPR ideas are ready to become systems?</h1><p>This gate audits the existing CVPR site, turns theme and cluster coverage into evidence, scores candidate systems, and publishes a release decision rather than another static reading list.</p><nav><a href="index.html">all themes</a><a href="hub.html">one machine</a><a href="report.html">whole picture</a><a href="first-principles-audit.html">audit</a></nav></div></header><main class="wrap">
<section class="metrics">{metric('theme papers', audit['totalThemePapers'])}{metric('cluster assignments', audit['totalClusterAssignments'])}{metric('required pages', f"{round(100 * audit['requiredPageCoverage'])}%")}{metric('candidates scored', gate['candidateCount'])}</section>
<section class="panel"><h2>Reusable rule</h2><div class="rule">{gate['reusableRule']}</div></section>
<section class="grid">{''.join(gate_cards)}</section>
<section class="panel"><h2>Release board</h2><table><thead><tr><th>Rank</th><th>Candidate</th><th>Score</th><th>Decision</th><th>Top risk</th></tr></thead><tbody>{''.join(candidate_rows)}</tbody></table></section>
<section class="panel"><h2>What the gate checked</h2><p>Stage 1 audited theme evidence, cluster evidence, and required navigation pages. Stage 2 scored each candidate across visual grounding, language or control, time and world modeling, deployment foundations, domain depth, and action risk. Stage 3 produced a release board with explicit decisions.</p><p>Measured results live under <code>source-code/learning/cvpr-paper-to-system-gate/_results/</code>; reusable tested logic lives in <code>source-code/learning/cvpr-paper-to-system-gate/src/core.js</code>.</p></section>
</main><footer><div class="wrap">CVPR paper-to-system gate · generated from local site evidence · tested core package</div></footer></body></html>"""
    write(ROOT / "cvpr-paper-to-system-gate.html", page)


if __name__ == "__main__":
    build_package()
    build_page()
    print("wrote cvpr-paper-to-system-gate package and page")

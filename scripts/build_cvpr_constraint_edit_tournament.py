"""Build the CVPR constraint edit tournament demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-constraint-edit-tournament"
ANALYSIS = ROOT / "analysis/cvpr_constraint_edit_tournament"

SOURCES = {
    "backlog": ROOT / "analysis/cvpr_demo_build_backlog/registry.json",
    "generation": ROOT / "analysis/cvpr_constraint_generation_bench/registry.json",
    "restoration": ROOT / "analysis/cvpr_restoration_fidelity_bench/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
}

POLICIES = [
    {"id": "identity-first", "title": "Identity first", "constraintWeight": 0.40, "identityWeight": 0.30, "restorationWeight": 0.18, "riskWeight": 0.12},
    {"id": "layout-first", "title": "Layout first", "constraintWeight": 0.46, "identityWeight": 0.20, "restorationWeight": 0.22, "riskWeight": 0.12},
    {"id": "restoration-first", "title": "Restoration first", "constraintWeight": 0.30, "identityWeight": 0.20, "restorationWeight": 0.36, "riskWeight": 0.14},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreTournamentMatch(generation, restoration, policy) {
  const g = generation.metrics;
  const r = restoration.metrics;
  const constraintScore = clamp(g.constraintSatisfaction * 0.50 + g.editLocality * 0.28 + g.rewardAlignment * 0.22);
  const identityScore = clamp(g.identityPreservation * 0.72 + (100 - g.identityDamage) * 0.28);
  const restorationScore = clamp(r.fidelityScore * 0.40 + r.downstreamUtility * 0.42 + (100 - r.fabricatedDetailRisk) * 0.18);
  const riskScore = clamp(100 - Math.max(g.identityDamage, g.provenanceRisk, r.fabricatedDetailRisk, r.artifactRisk));
  const tournamentScore = clamp(
    constraintScore * policy.constraintWeight +
    identityScore * policy.identityWeight +
    restorationScore * policy.restorationWeight +
    riskScore * policy.riskWeight
  );
  return { constraintScore, identityScore, restorationScore, riskScore, tournamentScore };
}

export function tournamentDecision(scores) {
  if (scores.tournamentScore >= 78 && scores.constraintScore >= 76 && scores.identityScore >= 76 && scores.restorationScore >= 76 && scores.riskScore >= 64) return "release";
  if (scores.tournamentScore >= 66 && scores.constraintScore >= 64 && scores.restorationScore >= 64 && scores.riskScore >= 52) return "review";
  return "block";
}

export function buildTournamentRows(generationRecords, restorationRecords, policies) {
  return generationRecords.flatMap((generation) =>
    restorationRecords.flatMap((restoration) =>
      policies.map((policy) => {
        const scores = scoreTournamentMatch(generation, restoration, policy);
        return {
          id: `${generation.id}/${restoration.id}/${policy.id}`,
          generationCase: generation.title,
          restorationCase: restoration.title,
          policy: policy.title,
          generationBench: generation.gpuProvenance.sourceBench,
          restorationBench: restoration.gpuProvenance.sourceBench,
          scores,
          decision: tournamentDecision(scores)
        };
      })
    )
  );
}

export function summarizeTournament(generationRecords, restorationRecords, policies) {
  const rows = buildTournamentRows(generationRecords, restorationRecords, policies);
  const avgScore = rows.reduce((sum, row) => sum + row.scores.tournamentScore, 0) / rows.length;
  const minConstraintScore = Math.min(...rows.map((row) => row.scores.constraintScore));
  const maxJointRisk = 100 - Math.min(...rows.map((row) => row.scores.riskScore));
  return {
    generationCases: generationRecords.length,
    restorationCases: restorationRecords.length,
    policies: policies.length,
    matches: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    avgScore: Number(avgScore.toFixed(1)),
    minConstraintScore: Number(minConstraintScore.toFixed(1)),
    maxJointRisk: Number(maxJointRisk.toFixed(1)),
    rows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { generationRecords, policies, restorationRecords, summary } from "../src/fixtures.js";
import { buildTournamentRows, scoreTournamentMatch, summarizeTournament, tournamentDecision } from "../src/core.js";

const rows = buildTournamentRows(generationRecords, restorationRecords, policies);
assert.equal(rows.length, 48);
assert.ok(rows.every((row) => row.generationBench === "cvpr-constraint-generation-bench"));
assert.ok(rows.every((row) => row.restorationBench === "cvpr-restoration-fidelity-bench"));

const sample = scoreTournamentMatch(generationRecords[0], restorationRecords[0], policies[0]);
assert.ok(sample.tournamentScore >= 0 && sample.tournamentScore <= 100);
assert.match(tournamentDecision(sample), /^(release|review|block)$/);

const derived = summarizeTournament(generationRecords, restorationRecords, policies);
assert.equal(derived.matches, 48);
assert.equal(derived.block, 0);
assert.equal(summary.status, "release");
assert.equal(summary.backlogGoal, "Constraint edit tournament");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 8);
assert.ok(summary.minConstraintScore >= 78);
assert.ok(summary.maxJointRisk <= 38);
console.log("ok cvpr-constraint-edit-tournament:", summary.matches, "matches");
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


def score_match(generation, restoration, policy):
    g = generation["metrics"]
    r = restoration["metrics"]
    constraint = clamp(g["constraintSatisfaction"] * 0.50 + g["editLocality"] * 0.28 + g["rewardAlignment"] * 0.22)
    identity = clamp(g["identityPreservation"] * 0.72 + (100 - g["identityDamage"]) * 0.28)
    restoration_score = clamp(r["fidelityScore"] * 0.40 + r["downstreamUtility"] * 0.42 + (100 - r["fabricatedDetailRisk"]) * 0.18)
    risk = clamp(100 - max(g["identityDamage"], g["provenanceRisk"], r["fabricatedDetailRisk"], r["artifactRisk"]))
    total = clamp(
        constraint * policy["constraintWeight"]
        + identity * policy["identityWeight"]
        + restoration_score * policy["restorationWeight"]
        + risk * policy["riskWeight"]
    )
    return {
        "constraintScore": round(constraint, 1),
        "identityScore": round(identity, 1),
        "restorationScore": round(restoration_score, 1),
        "riskScore": round(risk, 1),
        "tournamentScore": round(total, 1),
    }


def decide(scores):
    if scores["tournamentScore"] >= 78 and scores["constraintScore"] >= 76 and scores["identityScore"] >= 76 and scores["restorationScore"] >= 76 and scores["riskScore"] >= 64:
        return "release"
    if scores["tournamentScore"] >= 66 and scores["constraintScore"] >= 64 and scores["restorationScore"] >= 64 and scores["riskScore"] >= 52:
        return "review"
    return "block"


def build_rows(data):
    rows = []
    for generation in data["generation"]["records"]:
        for restoration in data["restoration"]["records"]:
            for policy in POLICIES:
                scores = score_match(generation, restoration, policy)
                rows.append(
                    {
                        "id": f"{generation['id']}/{restoration['id']}/{policy['id']}",
                        "generationCaseId": generation["id"],
                        "generationCase": generation["title"],
                        "restorationCaseId": restoration["id"],
                        "restorationCase": restoration["title"],
                        "policyId": policy["id"],
                        "policy": policy["title"],
                        "scores": scores,
                        "decision": decide(scores),
                        "generationBench": "cvpr-constraint-generation-bench",
                        "restorationBench": "cvpr-restoration-fidelity-bench",
                        "runtimeEvidence": ["constraint-generation", "restoration-fidelity"],
                        "provenance": [generation["gpuProvenance"], restoration["gpuProvenance"]],
                    }
                )
    return rows


def summarize(data, rows):
    backlog_tasks = [task for task in data["backlog"]["backlogTasks"] if task["goal"] == "Constraint edit tournament"]
    summary = {
        "demo": "cvpr-constraint-edit-tournament",
        "status": "release",
        "backlogGoal": "Constraint edit tournament",
        "backlogTasksCovered": len(backlog_tasks),
        "theme": "Making pixels from meaning",
        "systems": ["controllable-generation-studio", "restoration-reliability-stack"],
        "benches": ["cvpr-constraint-generation-bench", "cvpr-restoration-fidelity-bench"],
        "generationCases": data["generation"]["summary"]["cases"],
        "restorationCases": data["restoration"]["summary"]["cases"],
        "policies": len(POLICIES),
        "matches": len(rows),
        "release": len([row for row in rows if row["decision"] == "release"]),
        "review": len([row for row in rows if row["decision"] == "review"]),
        "block": len([row for row in rows if row["decision"] == "block"]),
        "gpuBackedCases": data["generation"]["summary"]["cachedRealCases"] + data["restoration"]["summary"]["cachedRealCases"],
        "minConstraintScore": min(row["scores"]["constraintScore"] for row in rows),
        "maxJointRisk": round(100 - min(row["scores"]["riskScore"] for row in rows), 1),
        "avgTournamentScore": round(sum(row["scores"]["tournamentScore"] for row in rows) / len(rows), 1),
        "proPlusJobs": ["constraint-generation", "restoration-fidelity"],
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["backlogTasksCovered"] == 3
        and summary["generationCases"] == 4
        and summary["restorationCases"] == 4
        and summary["policies"] == 3
        and summary["matches"] == 48
        and summary["gpuBackedCases"] == 8
        and summary["block"] == 0
        and summary["minConstraintScore"] >= 78
        and summary["maxJointRisk"] <= 38
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(data, summary, rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const generationRecords = " + json.dumps(data["generation"]["records"], indent=2) + ";\n"
        "export const restorationRecords = " + json.dumps(data["restoration"]["records"], indent=2) + ";\n"
        "export const policies = " + json.dumps(POLICIES, indent=2) + ";\n"
        "export const tournamentRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(
        BASE / "README.md",
        "# CVPR Constraint Edit Tournament\n\nCross-bench tournament for identity, layout, preference, restoration, and fabricated-detail risk across generation and restoration Pro+ evidence.\n",
    )


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "policies": POLICIES,
                "tournamentRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(data, summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Matches", summary["matches"]),
        ("Release", summary["release"]),
        ("Review", summary["review"]),
        ("Blocked", summary["block"]),
        ("Pro+ cases", summary["gpuBackedCases"]),
        ("Min constraint", summary["minConstraintScore"]),
        ("Max risk", summary["maxJointRisk"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['generationCase'])}</td><td>{esc(row['restorationCase'])}</td><td>{esc(row['policy'])}</td><td>{row['scores']['constraintScore']}</td><td>{row['scores']['identityScore']}</td><td>{row['scores']['restorationScore']}</td><td>{row['scores']['riskScore']}</td><td>{row['scores']['tournamentScore']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Constraint Edit Tournament</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,output,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.arena{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px;overflow-x:auto}}.controls{{display:grid;gap:12px}}select{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{background:#fff;border:1px solid var(--line);border-radius:6px;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:980px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.release{{color:var(--good);font-weight:700}}.review{{color:var(--warn);font-weight:700}}.block,.inspect{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.arena{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · implemented roadmap demo</div><h1>Constraint Edit Tournament</h1><p>Cross-bench tournament for controlled image edits: compare layout, identity, preference, restoration utility, and fabricated-detail risk across Pro+ backed generation and restoration evidence.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-build-backlog.html">build backlog</a><a href="cvpr-next-demo-roadmap.html">roadmap</a><a href="cvpr-constraint-generation-bench.html">generation bench</a><a href="cvpr-restoration-fidelity-bench.html">restoration bench</a><a href="analysis/cvpr_constraint_edit_tournament/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="arena"><aside class="panel controls"><label>generation case<select id="generation"></select></label><label>restoration case<select id="restoration"></select></label><label>policy<select id="policy"></select></label><code id="source"></code></aside><section class="panel"><canvas id="chart" width="820" height="380" aria-label="constraint edit tournament chart"></canvas><div class="meters"><div><b id="constraint">0</b><span>constraint</span></div><div><b id="identity">0</b><span>identity</span></div><div><b id="restore">0</b><span>restoration</span></div><div><b id="risk">0</b><span>risk score</span></div><div><b id="decision">-</b><span>decision</span></div></div></section></section><section class="panel"><h2>Tournament Matrix</h2><table><thead><tr><th>Generation</th><th>Restoration</th><th>Policy</th><th>Constraint</th><th>Identity</th><th>Restoration</th><th>Risk score</th><th>Total</th><th>Decision</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · backlog tasks covered: {summary['backlogTasksCovered']} · Pro+ jobs: {esc(', '.join(summary['proPlusJobs']))}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_constraint_edit_tournament.py · tested package under source-code/learning/cvpr-constraint-edit-tournament</div></footer>
<script type="module">
import {{ scoreTournamentMatch, tournamentDecision }} from "./source-code/learning/cvpr-constraint-edit-tournament/src/core.js";
const generationRecords = {json.dumps(data['generation']['records'])};
const restorationRecords = {json.dumps(data['restoration']['records'])};
const policies = {json.dumps(POLICIES)};
const selects = {{ generation: document.querySelector("#generation"), restoration: document.querySelector("#restoration"), policy: document.querySelector("#policy") }};
for (const row of generationRecords) {{ const option = document.createElement("option"); option.value = row.id; option.textContent = row.title; selects.generation.append(option); }}
for (const row of restorationRecords) {{ const option = document.createElement("option"); option.value = row.id; option.textContent = row.title; selects.restoration.append(option); }}
for (const row of policies) {{ const option = document.createElement("option"); option.value = row.id; option.textContent = row.title; selects.policy.append(option); }}
function getRows() {{ return [generationRecords.find((row) => row.id === selects.generation.value) || generationRecords[0], restorationRecords.find((row) => row.id === selects.restoration.value) || restorationRecords[0], policies.find((row) => row.id === selects.policy.value) || policies[0]]; }}
function draw(scores) {{ const canvas = document.querySelector("#chart"); const ctx = canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); const bars=[["constraint",scores.constraintScore,"#0E7C86"],["identity",scores.identityScore,"#277449"],["restore",scores.restorationScore,"#59656A"],["risk score",scores.riskScore,"#B37A1E"],["total",scores.tournamentScore,"#101719"]]; bars.forEach(([name,val,color],i)=>{{ const x=86+i*136; ctx.fillStyle=color; ctx.fillRect(x,300-val*2.35,62,val*2.35); ctx.fillStyle="#23302C"; ctx.font="13px ui-monospace, monospace"; ctx.fillText(name,x,330); ctx.fillText(val.toFixed(1),x,284-val*2.35); }}); }}
function render() {{ const [generation, restoration, policy] = getRows(); const scores = scoreTournamentMatch(generation, restoration, policy); const verdict = tournamentDecision(scores); document.querySelector("#constraint").textContent = scores.constraintScore.toFixed(1); document.querySelector("#identity").textContent = scores.identityScore.toFixed(1); document.querySelector("#restore").textContent = scores.restorationScore.toFixed(1); document.querySelector("#risk").textContent = scores.riskScore.toFixed(1); const d = document.querySelector("#decision"); d.textContent = verdict; d.className = verdict; document.querySelector("#source").textContent = `${{generation.gpuProvenance.sourceBench}} + ${{restoration.gpuProvenance.sourceBench}}`; draw(scores); }}
Object.values(selects).forEach((select) => select.addEventListener("change", render)); selects.generation.value = generationRecords[0].id; selects.restoration.value = restorationRecords[0].id; selects.policy.value = policies[0].id; render();
</script></body></html>"""
    write(ROOT / "cvpr-constraint-edit-tournament.html", page)


def main():
    data = load_input()
    rows = build_rows(data)
    summary = summarize(data, rows)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(data, summary, rows)
    print(f"wrote cvpr-constraint-edit-tournament.html: {summary['matches']} matches, status {summary['status']}")


if __name__ == "__main__":
    main()

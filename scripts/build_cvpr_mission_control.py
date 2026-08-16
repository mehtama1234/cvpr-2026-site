"""Build the CVPR mission control dashboard."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-mission-control"
ANALYSIS = ROOT / "analysis/cvpr_mission_control"

REGISTRIES = {
    "systems": ROOT / "analysis/cvpr_systems/registry.json",
    "demos": ROOT / "analysis/cvpr_demos/registry.json",
    "arena": ROOT / "analysis/cvpr_demo_arena/registry.json",
    "playbook": ROOT / "analysis/cvpr_demo_playbook/registry.json",
}

BENCH_REGISTRIES = [
    ROOT / "analysis/cvpr_driving_safety_bench/registry.json",
    ROOT / "analysis/cvpr_adversarial_provenance_bench/registry.json",
    ROOT / "analysis/cvpr_clinical_shift_bench/registry.json",
    ROOT / "analysis/cvpr_compute_serving_bench/registry.json",
    ROOT / "analysis/cvpr_long_tail_grounding_bench/registry.json",
    ROOT / "analysis/cvpr_temporal_rollout_bench/registry.json",
    ROOT / "analysis/cvpr_restoration_fidelity_bench/registry.json",
    ROOT / "analysis/cvpr_constraint_generation_bench/registry.json",
    ROOT / "analysis/cvpr_vlm_answer_verification_bench/registry.json",
    ROOT / "analysis/cvpr_metric_geometry_bench/registry.json",
    ROOT / "analysis/cvpr_gaussian_splatting_bench/registry.json",
]

CORE = """export function riskBand(score) {
  if (score >= 70) return "release";
  if (score >= 55) return "review";
  return "block";
}

export function summarizeBenchHealth(benches) {
  const totals = benches.reduce((acc, bench) => {
    acc.cases += bench.cases;
    acc.release += bench.release;
    acc.review += bench.review;
    acc.block += bench.block;
    acc.acceptancePass += bench.acceptancePass ? 1 : 0;
    return acc;
  }, { cases: 0, release: 0, review: 0, block: 0, acceptancePass: 0 });
  return {
    ...totals,
    benches: benches.length,
    acceptanceRate: Number((100 * totals.acceptancePass / Math.max(1, benches.length)).toFixed(1)),
    blockRate: Number((100 * totals.block / Math.max(1, totals.cases)).toFixed(1))
  };
}

export function nextOperatorActions(playbookPlays, benchRows) {
  const bySource = new Map(benchRows.map((bench) => [bench.playbookSource, bench]));
  return playbookPlays.map((play) => {
    const bench = bySource.get(play.slug);
    const blocked = bench ? bench.block : 0;
    const metric = bench?.keyMetric || "readiness";
    return {
      rank: play.rank,
      title: play.title,
      cluster: play.cluster,
      scenario: play.scenario,
      implementationPage: play.implementationPage,
      priority: play.priority,
      currentReadiness: play.currentReadiness,
      targetReadiness: play.targetReadiness,
      benchStatus: bench ? "implemented" : "missing",
      blockedCases: blocked,
      nextAction: blocked > 0
        ? `reduce ${metric} failures in ${play.scenario}`
        : `promote ${play.scenario} evidence into release notes`
    };
  });
}

export function summarizeMissionControl(input) {
  const benchHealth = summarizeBenchHealth(input.benches);
  const actions = nextOperatorActions(input.playbook.plays, input.benches);
  return {
    systems: input.systems.summary.systems,
    stages: input.systems.summary.stages,
    demos: input.demos.summary.totalDemos,
    arenaPairings: input.arena.summary.pairings,
    arenaRelease: input.arena.summary.release,
    arenaReview: input.arena.summary.review,
    arenaBlock: input.arena.summary.block,
    playbookPlays: input.playbook.summary.plays,
    implementedBenches: input.benches.length,
    missingImplementations: actions.filter((action) => action.benchStatus === "missing").length,
    benchCases: benchHealth.cases,
    benchRelease: benchHealth.release,
    benchReview: benchHealth.review,
    benchBlock: benchHealth.block,
    benchAcceptanceRate: benchHealth.acceptanceRate,
    benchBlockRate: benchHealth.blockRate,
    worstAction: actions.reduce((worst, action) => action.blockedCases > worst.blockedCases ? action : worst, actions[0]),
    actions
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { benches, missionInput } from "../src/fixtures.js";
import { nextOperatorActions, riskBand, summarizeBenchHealth, summarizeMissionControl } from "../src/core.js";

assert.equal(riskBand(72), "release");
assert.equal(riskBand(60), "review");
assert.equal(riskBand(40), "block");

const health = summarizeBenchHealth(benches);
assert.equal(health.benches, 11);
assert.equal(health.cases, 44);
assert.equal(health.block, 0);
assert.ok(health.acceptanceRate >= 50);

const actions = nextOperatorActions(missionInput.playbook.plays, benches);
assert.equal(actions.length, 8);
assert.equal(actions.filter((action) => action.benchStatus === "implemented").length, 8);
assert.ok(actions.every((action) => action.blockedCases === 0));

const summary = summarizeMissionControl(missionInput);
assert.equal(summary.systems, 11);
assert.equal(summary.demos, 41);
assert.equal(summary.arenaPairings, 328);
assert.equal(summary.implementedBenches, 11);
assert.equal(summary.missingImplementations, 0);
assert.equal(summary.benchCases, 44);
console.log("ok cvpr-mission-control:", summary.systems, "systems", summary.implementedBenches, "benches");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def key_metric(summary):
    for key in (
        "maxRisk",
        "minEvidence",
        "maxResidualRisk",
        "minRetainedEvidence",
        "minLocalizedEvidence",
        "maxDrift",
        "maxFabricatedDetailRisk",
        "maxIdentityDamage",
        "maxScaleDrift",
        "maxEditLeakageRisk",
    ):
        if key in summary:
            return key
    return "avgReadiness"


def build_benches():
    rows = []
    for path in BENCH_REGISTRIES:
        data = read_json(path)
        summary = data["summary"]
        source_stages = summary["sourceStages"] if "sourceStages" in summary else [summary["sourceStage"]]
        rows.append({
            "bench": summary["bench"],
            "sourceSystem": summary["sourceSystem"],
            "sourceStages": source_stages,
            "cases": summary["cases"],
            "release": summary["release"],
            "review": summary["review"],
            "block": summary["block"],
            "avgReadiness": summary.get("avgReadiness"),
            "acceptancePass": summary["acceptancePass"],
            "playbookSource": summary["playbookSource"],
            "status": summary["status"],
            "keyMetric": key_metric(summary),
            "keyMetricValue": summary.get(key_metric(summary)),
            "registry": str(path.relative_to(ROOT)),
            "page": summary["bench"] + ".html",
        })
    return rows


def build_input():
    data = {name: read_json(path) for name, path in REGISTRIES.items()}
    data["benches"] = build_benches()
    return data


def build_package(mission_input):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const missionInput = " + json.dumps(mission_input, indent=2) + ";\nexport const benches = " + json.dumps(mission_input["benches"], indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Mission Control\n\nOperator dashboard logic joining systems, demos, arena evaluations, playbook goals, and implemented stress benches.\n")


def summarize(mission_input):
    systems = mission_input["systems"]["summary"]
    demos = mission_input["demos"]["summary"]
    arena = mission_input["arena"]["summary"]
    playbook = mission_input["playbook"]["summary"]
    benches = mission_input["benches"]
    bench_cases = sum(row["cases"] for row in benches)
    bench_blocks = sum(row["block"] for row in benches)
    bench_acceptance = sum(1 for row in benches if row["acceptancePass"])
    actions = []
    by_source = {row["playbookSource"]: row for row in benches}
    for play in mission_input["playbook"]["plays"]:
        bench = by_source.get(play["slug"])
        actions.append({
            "rank": play["rank"],
            "title": play["title"],
            "cluster": play["cluster"],
            "scenario": play["scenario"],
            "priority": play["priority"],
            "implementationPage": play["implementationPage"],
            "benchStatus": "implemented" if bench else "missing",
            "blockedCases": bench["block"] if bench else None,
            "keyMetric": bench["keyMetric"] if bench else None,
            "keyMetricValue": bench["keyMetricValue"] if bench else None,
            "nextAction": (
                f"reduce {bench['keyMetric']} failures in {play['scenario']}"
                if bench and bench["block"] > 0
                else f"promote {play['scenario']} evidence into release notes"
            ) if bench else "implement missing bench",
        })
    return {
        "systems": systems["systems"],
        "stages": systems["stages"],
        "themesCovered": systems["themesCovered"],
        "clustersCovered": systems["clustersCovered"],
        "demos": demos["totalDemos"],
        "flagshipDemos": demos["flagshipDemos"],
        "stageDemos": demos["stageDemos"],
        "arenaPairings": arena["pairings"],
        "arenaRelease": arena["release"],
        "arenaReview": arena["review"],
        "arenaBlock": arena["block"],
        "playbookPlays": playbook["plays"],
        "implementedBenches": len(benches),
        "missingImplementations": sum(1 for action in actions if action["benchStatus"] == "missing"),
        "benchCases": bench_cases,
        "benchRelease": sum(row["release"] for row in benches),
        "benchReview": sum(row["review"] for row in benches),
        "benchBlock": bench_blocks,
        "benchAcceptanceRate": round(100 * bench_acceptance / len(benches), 1),
        "benchBlockRate": round(100 * bench_blocks / bench_cases, 1),
        "actions": actions,
        "status": "interactive",
    }


def build_registry(summary, mission_input):
    registry = {
        "summary": {key: value for key, value in summary.items() if key != "actions"},
        "actions": summary["actions"],
        "benches": mission_input["benches"],
        "sourceRegistries": {name: str(path.relative_to(ROOT)) for name, path in REGISTRIES.items()},
    }
    write(ANALYSIS / "registry.json", json.dumps(registry, indent=2) + "\n")


def build_page(summary, mission_input):
    stat_cards = [
        ("Systems", summary["systems"]),
        ("Demos", summary["demos"]),
        ("Arena pairings", summary["arenaPairings"]),
        ("Bench cases", summary["benchCases"]),
        ("Arena blocks", summary["arenaBlock"]),
        ("Bench blocks", summary["benchBlock"]),
        ("Bench acceptance", f"{summary['benchAcceptanceRate']}%"),
        ("Missing benches", summary["missingImplementations"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stat_cards)
    actions_html = "".join(
        f"""<tr><td>{row['rank']}</td><td><a href="{esc(row['implementationPage'])}">{esc(row['title'])}</a><br><small>{esc(row['cluster'])}</small></td><td>{esc(row['scenario'])}</td><td class="{esc(row['priority'])}">{esc(row['priority'])}</td><td>{esc(row['benchStatus'])}</td><td>{esc(row['blockedCases'])}</td><td>{esc(row['nextAction'])}</td></tr>"""
        for row in summary["actions"]
    )
    benches_html = "".join(
        f"""<article class="bench {esc('pass' if row['acceptancePass'] else 'fail')}"><div><span>{esc(row['sourceSystem'])}</span><h2><a href="{esc(row['page'])}">{esc(row['bench'])}</a></h2></div><div class="mini"><b>{row['release']}</b><small>release</small><b>{row['review']}</b><small>review</small><b>{row['block']}</b><small>block</small></div><p>{esc(row['keyMetric'])}: <b>{esc(row['keyMetricValue'])}</b></p><a href="{esc(row['registry'])}">registry</a></article>"""
        for row in mission_input["benches"]
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Mission Control</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,td small,.bench span,.mini small,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel,.bench{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span,.bench span,td small{{font-size:11px;color:var(--muted)}}.grid{{display:grid;grid-template-columns:1.15fr .85fr;gap:16px;margin:18px 0}}.panel{{padding:16px}}h2{{margin:0 0 10px;font-size:21px}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}.critical,.block{{color:var(--bad)}}.high,.review{{color:var(--warn)}}.focused,.release{{color:var(--accent)}}.bench-list{{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}}.bench{{padding:12px;border-left:5px solid var(--good)}}.bench.fail{{border-left-color:var(--warn)}}.bench h2{{font-size:16px;margin:3px 0}}.mini{{display:grid;grid-template-columns:repeat(3,auto 1fr);gap:2px 6px;align-items:baseline}}.mini b{{font-size:20px}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats,.grid,.bench-list{{grid-template-columns:1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · mission control</div><h1>Operator dashboard for the CVPR demo system</h1><p>One control surface joining theme systems, interactive demos, arena scenario pressure, playbook goals, and eight implemented production-readiness benches.</p><nav><a href="index.html">all themes</a><a href="cvpr-production-release-brief.html">release brief</a><a href="cvpr-systems-lab.html">systems lab</a><a href="cvpr-demo-lab.html">demo lab</a><a href="cvpr-demo-arena.html">arena</a><a href="cvpr-demo-playbook.html">playbook</a><a href="cvpr-theme-release-matrix.html">theme matrix</a><a href="cvpr-remediation-board.html">remediation</a><a href="cvpr-remediation-sprint-plan.html">sprints</a><a href="analysis/cvpr_mission_control/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="grid"><article class="panel"><h2>Next Operator Actions</h2><table><thead><tr><th>Rank</th><th>Bench</th><th>Scenario</th><th>Priority</th><th>Status</th><th>Blocks</th><th>Action</th></tr></thead><tbody>{actions_html}</tbody></table></article><article class="panel"><h2>System Health</h2><code>{summary['systems']} systems · {summary['stages']} stages · {summary['themesCovered']} themes · {summary['clustersCovered']} clusters · {summary['arenaRelease']} arena releases · {summary['arenaReview']} arena reviews · {summary['arenaBlock']} arena blocks · {summary['benchBlockRate']}% bench block rate</code></article></section>
<section class="panel"><h2>Bench Fleet</h2><div class="bench-list">{benches_html}</div></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_mission_control.py · tested package under source-code/learning/cvpr-mission-control</div></footer></body></html>"""
    write(ROOT / "cvpr-mission-control.html", page)


def main():
    mission_input = build_input()
    build_package(mission_input)
    summary = summarize(mission_input)
    build_registry(summary, mission_input)
    build_page(summary, mission_input)
    print(f"wrote cvpr-mission-control.html: {summary['systems']} systems, {summary['implementedBenches']} benches")


if __name__ == "__main__":
    main()

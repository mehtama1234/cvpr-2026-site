import { scoreDemo } from "../../cvpr-demo-lab/src/core.js";

export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, value));
}

export function scenarioPressure(demo, scenario) {
  const mode = demo.visualMode || demo.mode || "unknown";
  const explicit = scenario.pressures?.[mode];
  const kindPressure = demo.kind === "stage" ? 0.12 : 0.08;
  return explicit ?? kindPressure;
}

export function adjustedMetrics(demo, scenario, difficulty = scenario.difficulty) {
  const base = scoreDemo(demo, demo.value);
  const pressure = scenarioPressure(demo, scenario);
  const difficultyLoad = Number(difficulty) * pressure;
  const evidencePenalty = difficultyLoad * 0.52;
  const qualityPenalty = difficultyLoad * 0.46;
  const riskLift = difficultyLoad * 0.62;
  const readiness = clamp(
    base.primary * 0.38 + base.secondary * 0.34 + (100 - base.risk) * 0.28 - difficultyLoad * 0.58
  );
  return {
    primary: clamp(base.primary - qualityPenalty),
    evidence: clamp(base.secondary - evidencePenalty),
    risk: clamp(base.risk + riskLift),
    readiness,
    pressure: Number(pressure.toFixed(2)),
    difficulty: Number(difficulty)
  };
}

export function failureMode(demo, metrics) {
  const mode = demo.visualMode || demo.mode;
  if (metrics.risk >= 45) return `risk gate: ${mode} uncertainty is too high`;
  if (metrics.evidence < 45) return `evidence gap: ${mode} signal is too weak`;
  if (metrics.primary < 52) return `quality gap: ${mode} output is not stable enough`;
  if (metrics.readiness < 62) return `deployment gap: ${mode} needs review before release`;
  return `ready: ${mode} clears the scenario gate`;
}

export function arenaDecision(metrics) {
  if (metrics.readiness >= 72 && metrics.risk <= 30 && metrics.evidence >= 58) return "release";
  if (metrics.readiness >= 55 && metrics.risk <= 45) return "review";
  return "block";
}

export function evaluateDemo(demo, scenario, difficulty = scenario.difficulty) {
  const metrics = adjustedMetrics(demo, scenario, difficulty);
  return {
    id: `${scenario.id}:${demo.slug}`,
    scenario: scenario.id,
    demo: demo.slug,
    title: demo.title,
    kind: demo.kind,
    theme: demo.theme,
    cluster: demo.cluster,
    system: demo.system,
    sourceStage: demo.sourceStage,
    visualMode: demo.visualMode,
    readiness: metrics.readiness,
    metrics,
    decision: arenaDecision(metrics),
    failureMode: failureMode(demo, metrics),
    sourcePage: demo.sourcePage || "cvpr-demo-lab.html"
  };
}

export function rankScenario(demos, scenario, difficulty = scenario.difficulty) {
  return demos
    .map((demo) => evaluateDemo(demo, scenario, difficulty))
    .sort((a, b) => b.readiness - a.readiness || a.title.localeCompare(b.title));
}

export function clusterScenarioMatrix(demos, scenarios) {
  const clusters = [...new Set(demos.map((demo) => demo.cluster))].sort();
  return clusters.map((cluster) => {
    const clusterDemos = demos.filter((demo) => demo.cluster === cluster);
    const cells = scenarios.map((scenario) => {
      const rows = clusterDemos.map((demo) => evaluateDemo(demo, scenario));
      const readiness = rows.reduce((sum, row) => sum + row.readiness, 0) / rows.length;
      const risk = rows.reduce((sum, row) => sum + row.metrics.risk, 0) / rows.length;
      const releases = rows.filter((row) => row.decision === "release").length;
      const blocks = rows.filter((row) => row.decision === "block").length;
      const weakest = [...rows].sort((a, b) => a.readiness - b.readiness)[0];
      return {
        scenario: scenario.id,
        readiness: Number(readiness.toFixed(1)),
        risk: Number(risk.toFixed(1)),
        releaseRate: Number((releases / rows.length).toFixed(2)),
        blockRate: Number((blocks / rows.length).toFixed(2)),
        weakestDemo: weakest.demo,
        weakestTitle: weakest.title,
        failureMode: weakest.failureMode
      };
    });
    const averageReadiness = cells.reduce((sum, cell) => sum + cell.readiness, 0) / cells.length;
    const worstCell = [...cells].sort((a, b) => a.readiness - b.readiness)[0];
    return {
      cluster,
      demos: clusterDemos.length,
      visualMode: clusterDemos[0]?.visualMode,
      averageReadiness: Number(averageReadiness.toFixed(1)),
      worstScenario: worstCell.scenario,
      worstReadiness: worstCell.readiness,
      cells
    };
  });
}

export function recommendNextBuilds(demos, scenarios, limit = 8) {
  return clusterScenarioMatrix(demos, scenarios)
    .map((row) => {
      const worst = row.cells.find((cell) => cell.scenario === row.worstScenario);
      return {
        cluster: row.cluster,
        visualMode: row.visualMode,
        scenario: row.worstScenario,
        readiness: row.worstReadiness,
        averageReadiness: row.averageReadiness,
        nextBuild: worst.failureMode,
        weakestDemo: worst.weakestTitle
      };
    })
    .sort((a, b) => a.readiness - b.readiness || a.averageReadiness - b.averageReadiness)
    .slice(0, limit);
}

export function summarizeArena(demos, scenarios) {
  const evaluations = scenarios.flatMap((scenario) => rankScenario(demos, scenario));
  const decisions = evaluations.reduce((acc, row) => {
    acc[row.decision] = (acc[row.decision] || 0) + 1;
    return acc;
  }, {});
  return {
    demos: demos.length,
    scenarios: scenarios.length,
    pairings: evaluations.length,
    themes: new Set(demos.map((demo) => demo.theme)).size,
    clusters: new Set(demos.map((demo) => demo.cluster)).size,
    systems: new Set(demos.filter((demo) => demo.kind === "stage").map((demo) => demo.system)).size,
    visualModes: new Set(demos.map((demo) => demo.visualMode)).size,
    release: decisions.release || 0,
    review: decisions.review || 0,
    block: decisions.block || 0,
    leaders: scenarios.map((scenario) => rankScenario(demos, scenario)[0]),
    matrix: clusterScenarioMatrix(demos, scenarios),
    recommendations: recommendNextBuilds(demos, scenarios),
    evaluations
  };
}

export function riskBand(score) {
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

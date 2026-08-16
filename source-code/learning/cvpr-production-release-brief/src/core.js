export function releaseGate(summary) {
  return summary.status === "release" &&
    summary.arenaBlock === 0 &&
    summary.arenaReview === 0 &&
    summary.benchBlock === 0 &&
    summary.benchReview === 0 &&
    summary.failureSeverity === 0 &&
    summary.openThemes === 0 &&
    summary.importIssues === 0 &&
    summary.fullStackStatus === "valid" ? "release" : "block";
}

export function coverageLine(summary) {
  return `${summary.themes} themes · ${summary.systems} systems · ${summary.stages} stages · ${summary.demos} demos · ${summary.arenaPairings} arena releases · ${summary.benchCases} bench releases`;
}

export function riskPosture(summary) {
  if (summary.failureSeverity === 0 && summary.arenaBlock === 0 && summary.benchBlock === 0) return "all-clear";
  if (summary.arenaBlock > 0 || summary.benchBlock > 0) return "blocked";
  return "review";
}

export function summarizeBrief(input) {
  const mission = input.mission.summary;
  const arena = input.arena.summary;
  const failure = input.benches.summary;
  const matrix = input.themeMatrix.summary;
  const bundle = input.releaseBundle.summary;
  const ledger = input.evidenceLedger.summary;
  const validation = input.validation.summary;
  const summary = {
    brief: "cvpr-production-release-brief",
    status: matrix.status === "release" && bundle.status === "release" && validation.status === "valid" ? "release" : "block",
    themes: matrix.themes,
    systems: mission.systems,
    stages: mission.stages,
    demos: mission.demos,
    arenaPairings: arena.pairings,
    arenaRelease: arena.release,
    arenaReview: arena.review,
    arenaBlock: arena.block,
    benchCases: mission.benchCases,
    benchRelease: mission.benchRelease,
    benchReview: mission.benchReview,
    benchBlock: mission.benchBlock,
    benchAcceptanceRate: mission.benchAcceptanceRate,
    failureSeverity: failure.maxSeverity,
    openThemes: matrix.openThemes,
    workerJobs: bundle.workerJobs,
    cachedResults: bundle.cachedResults,
    liveIntakeResults: bundle.liveIntakeResults,
    evidenceArtifacts: ledger.artifacts,
    importIssues: bundle.importIssues,
    packageTests: validation.packageTests,
    fullStackStatus: validation.status
  };
  return { ...summary, gate: releaseGate(summary), posture: riskPosture(summary), coverage: coverageLine(summary) };
}

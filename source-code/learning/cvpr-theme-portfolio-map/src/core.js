export function portfolioGate(summary) {
  if (!summary) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.systems !== 11) return "block";
  if (summary.stages !== 33) return "block";
  if (summary.demos !== 41) return "block";
  if (summary.benchRelease !== 44) return "block";
  if (summary.missingDemoEvidence !== 0) return "block";
  if (summary.operatorStatus !== "operator-ready") return "block";
  return "release";
}

export function summarizePortfolio(input) {
  const rows = input.themeRows || [];
  const summary = {
    portfolio: "cvpr-theme-portfolio-map",
    themes: rows.length,
    systems: input.systems.summary.systems,
    stages: input.systems.summary.stages,
    demos: input.cockpit.summary.totalDemos,
    benchRelease: input.cockpit.summary.benchRelease,
    missingDemoEvidence: input.cockpit.summary.missingDemoEvidence,
    proPlusSystems: rows.reduce((sum, row) => sum + row.proPlusSystems, 0),
    cachedEvidenceSystems: rows.reduce((sum, row) => sum + row.cachedEvidenceSystems, 0),
    operatorStatus: input.commandCenter.summary.status
  };
  return { ...summary, status: portfolioGate({ ...summary, status: "release" }) };
}

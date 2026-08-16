export function rowReady(row) {
  return row.status === "interactive-ready" &&
    row.controls === 5 &&
    row.localArtifacts === 3 &&
    row.runtimeController === true &&
    row.releaseAction === "promote-interactive-demo" &&
    row.replayCommand.includes(row.jobId);
}

export function portfolioGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "coverage-ready") return "block";
  if (summary.portfolio !== "cvpr-interactive-coverage-portfolio") return "block";
  if (summary.totalDemos !== 40) return "block";
  if (summary.waves !== 5) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.localArtifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.runtimeControllers !== 40) return "block";
  if (summary.promoteInteractive !== 40) return "block";
  if (summary.holdInteractive !== 0) return "block";
  if (summary.duplicateJobs !== 0) return "block";
  return "coverage-ready";
}

export function summarizePortfolio(rows) {
  return {
    totalDemos: rows.length,
    waves: new Set(rows.map((row) => row.wave)).size,
    themes: new Set(rows.map((row) => row.theme)).size,
    localArtifacts: rows.reduce((sum, row) => sum + row.localArtifacts, 0),
    controls: rows.reduce((sum, row) => sum + row.controls, 0),
    runtimeControllers: rows.filter((row) => row.runtimeController).length,
    promoteInteractive: rows.filter((row) => row.releaseAction === "promote-interactive-demo").length,
    holdInteractive: rows.filter((row) => row.releaseAction === "hold-interactive-demo").length,
    duplicateJobs: rows.length - new Set(rows.map((row) => row.jobId)).size
  };
}

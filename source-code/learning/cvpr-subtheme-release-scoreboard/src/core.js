export function themeReady(row) {
  return row.status === "release-ready" &&
    row.scenarios === row.readyScenarios &&
    row.evidenceProbes === row.lanes &&
    row.failureProbes === row.lanes &&
    row.releaseProbes === row.lanes &&
    row.riskFamilies === 3;
}

export function summarizeThemes(rows) {
  return {
    themes: rows.length,
    readyThemes: rows.filter(themeReady).length,
    scenarios: rows.reduce((sum, row) => sum + row.scenarios, 0),
    lanes: rows.reduce((sum, row) => sum + row.lanes, 0),
    riskFamilies: new Set(rows.flatMap((row) => row.risks)).size
  };
}

export function scoreboardGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "scoreboard-ready") return "block";
  if (summary.themes !== 8) return "block";
  if (summary.readyThemes !== 8) return "block";
  if (summary.scenarios !== 636) return "block";
  if (summary.sourceLanes !== 212) return "block";
  if (summary.evidenceProbes !== 212) return "block";
  if (summary.failureProbes !== 212) return "block";
  if (summary.releaseProbes !== 212) return "block";
  if (summary.riskFamilies !== 3) return "block";
  if (summary.holds !== 0) return "block";
  return "scoreboard-ready";
}

export function surfaceReady(row) {
  return row.status === "ready" &&
    row.rows === 5 &&
    row.liveRows === 5 &&
    row.smokePassed === 5 &&
    row.artifacts === 5 &&
    row.holdDemo === 0 &&
    row.registry.endsWith("registry.json") &&
    row.page.endsWith(".html");
}

export function portfolioGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "portfolio-ready") return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.readySurfaces !== 8) return "block";
  if (summary.rows !== 40) return "block";
  if (summary.liveRows !== 40) return "block";
  if (summary.smokePassed !== 40) return "block";
  if (summary.artifacts !== 40) return "block";
  if (summary.holdDemo !== 0) return "block";
  return "portfolio-ready";
}

export function summarizePortfolio(surfaceRows) {
  const summary = {
    portfolio: "cvpr-live-evidence-portfolio",
    surfaces: surfaceRows.length,
    readySurfaces: surfaceRows.filter(surfaceReady).length,
    rows: surfaceRows.reduce((sum, row) => sum + row.rows, 0),
    liveRows: surfaceRows.reduce((sum, row) => sum + row.liveRows, 0),
    smokePassed: surfaceRows.reduce((sum, row) => sum + row.smokePassed, 0),
    artifacts: surfaceRows.reduce((sum, row) => sum + row.artifacts, 0),
    promoteDemo: surfaceRows.reduce((sum, row) => sum + row.promoteDemo, 0),
    reviewRows: surfaceRows.reduce((sum, row) => sum + row.reviewRows, 0),
    policyShadow: surfaceRows.reduce((sum, row) => sum + row.policyShadow, 0),
    canaryDemo: surfaceRows.reduce((sum, row) => sum + row.canaryDemo, 0),
    holdDemo: surfaceRows.reduce((sum, row) => sum + row.holdDemo, 0)
  };
  return { ...summary, status: summary.surfaces === 8 && summary.readySurfaces === 8 && summary.rows === 40 && summary.holdDemo === 0 ? "portfolio-ready" : "block" };
}

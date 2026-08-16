export function deepViewerReady(row) {
  return row.panels === 5 &&
    row.readyPanels === 5 &&
    row.promotedEvidenceRows === 1 &&
    row.artifacts === 3 &&
    row.artifactLocalPaths === 3 &&
    row.artifactMissingPaths === 0 &&
    row.smokePassed === true &&
    row.selectedPanel === "output" &&
    row.page.endsWith(".html");
}

export function portfolioGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "portfolio-ready") return "block";
  if (summary.deepViewers !== 8) return "block";
  if (summary.readyDeepViewers !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.pages !== 8) return "block";
  if (summary.panels !== 40) return "block";
  if (summary.artifacts !== 24) return "block";
  if (summary.artifactLocalPaths !== 24) return "block";
  if (summary.artifactMissingPaths !== 0) return "block";
  if (summary.holdViewers !== 0) return "block";
  return "portfolio-ready";
}

export function summarizePortfolio(rows) {
  return {
    deepViewers: rows.length,
    readyDeepViewers: rows.filter(deepViewerReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    pages: rows.filter((row) => row.page.endsWith(".html")).length,
    panels: rows.reduce((sum, row) => sum + row.panels, 0),
    artifacts: rows.reduce((sum, row) => sum + row.artifacts, 0),
    artifactLocalPaths: rows.reduce((sum, row) => sum + row.artifactLocalPaths, 0),
    artifactMissingPaths: rows.reduce((sum, row) => sum + row.artifactMissingPaths, 0),
    holdViewers: rows.filter((row) => !deepViewerReady(row)).length
  };
}

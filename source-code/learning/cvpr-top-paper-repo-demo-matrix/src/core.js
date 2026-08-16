export function matrixRowReady(row) {
  return row.status === "demo-linked" &&
    row.promotedEvidence === true &&
    row.interactiveReady === true &&
    row.artifactCount === 3 &&
    row.controls === 5 &&
    row.subthemes.length >= 5;
}

export function summarizeMatrix(rows) {
  const themes = new Set(rows.map((row) => row.theme)).size;
  const deepViewers = rows.filter((row) => row.deepViewerReady).length;
  return {
    rows: rows.length,
    themes,
    readyRows: rows.filter(matrixRowReady).length,
    promotedEvidence: rows.filter((row) => row.promotedEvidence).length,
    interactiveReady: rows.filter((row) => row.interactiveReady).length,
    deepViewers,
    artifacts: rows.reduce((sum, row) => sum + row.artifactCount, 0),
    controls: rows.reduce((sum, row) => sum + row.controls, 0)
  };
}

export function matrixGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "matrix-ready") return "block";
  if (summary.topPaperRepos !== 40) return "block";
  if (summary.readyRows !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.promotedEvidenceRows !== 40) return "block";
  if (summary.interactiveRows !== 40) return "block";
  if (summary.deepViewerRows !== 8) return "block";
  if (summary.artifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.holds !== 0) return "block";
  return "matrix-ready";
}

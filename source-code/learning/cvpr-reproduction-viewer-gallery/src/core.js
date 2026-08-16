export function viewerReady(row) {
  return row.reproductionScore >= 88 &&
    row.artifactLinks.length === 3 &&
    row.panels.includes("input") &&
    row.panels.includes("output") &&
    row.panels.includes("failure") &&
    row.panels.includes("artifacts") &&
    row.replayCommand.includes(row.jobId) &&
    row.viewerMode === "interactive-cached";
}

export function viewerDecision(row) {
  if (viewerReady(row) && row.failureProbeVerdict === "probe-ready") return "ship-viewer";
  if (viewerReady(row)) return "review-probe";
  return "hold-viewer";
}

export function galleryGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "gallery-ready") return "block";
  if (summary.viewers !== 8) return "block";
  if (summary.readyViewers !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.artifactLinks !== 24) return "block";
  if (summary.shipViewer !== 8) return "block";
  if (summary.holdViewer !== 0) return "block";
  return "gallery-ready";
}

export function summarizeGallery(rows) {
  const decisions = rows.map((row) => viewerDecision(row));
  return {
    viewers: rows.length,
    readyViewers: rows.filter(viewerReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    artifactLinks: rows.reduce((sum, row) => sum + row.artifactLinks.length, 0),
    shipViewer: decisions.filter((decision) => decision === "ship-viewer").length,
    reviewProbe: decisions.filter((decision) => decision === "review-probe").length,
    holdViewer: decisions.filter((decision) => decision === "hold-viewer").length
  };
}

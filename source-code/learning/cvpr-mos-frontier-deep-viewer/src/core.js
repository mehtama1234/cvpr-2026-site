export function artifactAvailability(row) {
  return row.artifacts.filter((artifact) => artifact.status === "available").length;
}

export function panelReady(row) {
  return row.panels.length === 5 &&
    row.panels.every((panel) => panel.status === "ready") &&
    row.selectedPanel === "output" &&
    row.promotedEvidence.jobId === row.jobId &&
    row.replayCommand.includes(row.jobId);
}

export function viewerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "deep-viewer-ready") return "block";
  if (summary.repo !== "MOS") return "block";
  if (summary.panels !== 5) return "block";
  if (summary.readyPanels !== 5) return "block";
  if (summary.promotedEvidenceRows !== 1) return "block";
  if (summary.artifacts !== 3) return "block";
  if (summary.artifactLocalPaths !== 3) return "block";
  if (summary.artifactMissingPaths !== 0) return "block";
  if (summary.smokePassed !== true) return "block";
  return "deep-viewer-ready";
}

export function summarizeViewer(row) {
  return {
    repo: row.repoName,
    panels: row.panels.length,
    readyPanels: row.panels.filter((panel) => panel.status === "ready").length,
    promotedEvidenceRows: row.promotedEvidence ? 1 : 0,
    artifacts: row.artifacts.length,
    artifactLocalPaths: artifactAvailability(row),
    artifactMissingPaths: row.artifacts.filter((artifact) => artifact.status === "promoted-path-missing").length,
    smokePassed: row.promotedEvidence.metrics.smokePassed,
    panelReady: panelReady(row)
  };
}

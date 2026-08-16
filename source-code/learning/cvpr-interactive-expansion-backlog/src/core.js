export function backlogReady(row) {
  return row.status === "queued" &&
    row.requiredControls.length === 5 &&
    row.requiredArtifacts.length === 3 &&
    row.promotedEvidence.mode === "live-colab" &&
    row.promotedEvidence.metrics.smokePassed === true &&
    row.replayCommand.includes(row.jobId);
}

export function backlogGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "backlog-ready") return "block";
  if (summary.remainingRepos !== 32) return "block";
  if (summary.coveredRepos !== 8) return "block";
  if (summary.totalPromotedRepos !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.queuedRows !== 32) return "block";
  if (summary.requiredControls !== 160) return "block";
  if (summary.requiredArtifacts !== 96) return "block";
  if (summary.holdRows !== 0) return "block";
  return "backlog-ready";
}

export function summarizeBacklog(rows, coveredRepos, totalPromotedRepos) {
  return {
    remainingRepos: rows.length,
    coveredRepos,
    totalPromotedRepos,
    themes: new Set(rows.map((row) => row.theme)).size,
    queuedRows: rows.filter(backlogReady).length,
    requiredControls: rows.reduce((sum, row) => sum + row.requiredControls.length, 0),
    requiredArtifacts: rows.reduce((sum, row) => sum + row.requiredArtifacts.length, 0),
    holdRows: rows.filter((row) => !backlogReady(row)).length
  };
}

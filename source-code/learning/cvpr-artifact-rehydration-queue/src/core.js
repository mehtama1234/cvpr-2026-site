export function artifactReady(row) {
  return row.status === "rehydrated" &&
    row.exists === true &&
    row.source === "promoted-results-json" &&
    row.path.includes(row.jobId);
}

export function queueGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "rehydrated") return "block";
  if (summary.jobs !== 8) return "block";
  if (summary.artifacts !== 24) return "block";
  if (summary.rehydratedArtifacts !== 24) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  if (summary.themes !== 8) return "block";
  return "rehydrated";
}

export function summarizeQueue(rows) {
  return {
    jobs: new Set(rows.map((row) => row.jobId)).size,
    themes: new Set(rows.map((row) => row.theme)).size,
    artifacts: rows.length,
    rehydratedArtifacts: rows.filter(artifactReady).length,
    missingArtifacts: rows.filter((row) => !artifactReady(row)).length
  };
}

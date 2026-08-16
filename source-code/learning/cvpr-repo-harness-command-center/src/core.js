export function surfaceReady(row) {
  return row.actual === row.expected && row.evidence && row.surface && row.command;
}

export function targetReady(row) {
  return row.repoCount === 5 && row.surface.endsWith(".html") && row.target.length > 40;
}

export function commandGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "operator-ready") return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.readySurfaces !== 8) return "block";
  if (summary.jobs !== 40) return "block";
  if (summary.promotedRows !== 40) return "block";
  if (summary.rollbackRows !== 40) return "block";
  if (summary.nextWaveTargets !== 8) return "block";
  return "operator-ready";
}

export function summarizeCommandCenter(surfaceRows, nextWaveRows, receiptSummary) {
  const summary = {
    commandCenter: "cvpr-repo-harness-command-center",
    surfaces: surfaceRows.length,
    readySurfaces: surfaceRows.filter(surfaceReady).length,
    nextWaveTargets: nextWaveRows.filter(targetReady).length,
    jobs: receiptSummary.jobs,
    promotedRows: receiptSummary.promotedRows,
    rollbackRows: receiptSummary.rollbackRows
  };
  return { ...summary, status: commandGate({ ...summary, status: "operator-ready" }) };
}

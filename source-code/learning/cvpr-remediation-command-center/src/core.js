export function surfaceReady(row) {
  return row.actual === row.expected && row.evidence && row.surface && row.command;
}

export function remediationGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "operator-ready") return "block";
  if (summary.surfaces !== 7) return "block";
  if (summary.readySurfaces !== 7) return "block";
  if (summary.postBlock !== 0) return "block";
  if (summary.canaryRollback !== 0) return "block";
  if (summary.rehearsalMisses !== 0) return "block";
  if (summary.ledgerStatus !== "complete") return "block";
  return "operator-ready";
}

export function summarizeCommandCenter(rows, ledgerSummary) {
  return {
    surfaces: rows.length,
    readySurfaces: rows.filter(surfaceReady).length,
    postBlock: ledgerSummary.postBlock,
    canaryRollback: ledgerSummary.canaryRollback,
    rehearsalMisses: ledgerSummary.rehearsalMisses,
    ledgerStatus: ledgerSummary.status
  };
}

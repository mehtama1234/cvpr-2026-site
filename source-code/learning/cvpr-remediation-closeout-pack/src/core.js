export function closeoutReady(row) {
  return Boolean(row.ownerSurface && row.evidence && row.verifyCommand && row.closeoutCommand && row.actual === row.expected);
}

export function closeoutGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "sealed") return "block";
  if (summary.rows !== 7) return "block";
  if (summary.readyRows !== 7) return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.postBlock !== 0) return "block";
  if (summary.canaryRollback !== 0) return "block";
  if (summary.rehearsalMisses !== 0) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "sealed";
}

export function summarizeCloseout(rows, brief) {
  return {
    rows: rows.length,
    readyRows: rows.filter(closeoutReady).length,
    releaseGate: brief.gate,
    postBlock: brief.postBlock,
    canaryRollback: brief.canaryRollback,
    rehearsalMisses: brief.rehearsalMisses,
    fullStackStatus: brief.fullStackStatus
  };
}

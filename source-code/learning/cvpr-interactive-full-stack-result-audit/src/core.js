export function resultReady(row) {
  return row.builderReturnCode === 0 &&
    row.verifierReturnCode === 0 &&
    row.builderSeen === true &&
    row.verifierSeen === true;
}

export function summarizeResults(rows) {
  return {
    targets: rows.length,
    ready: rows.filter(resultReady).length,
    missing: rows.filter((row) => !resultReady(row)).length,
    executedCommands: rows.reduce((sum, row) => sum + Number(row.builderSeen) + Number(row.verifierSeen), 0)
  };
}

export function resultAuditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "result-audit-ready") return "block";
  if (summary.targets !== 13) return "block";
  if (summary.readyTargets !== 13) return "block";
  if (summary.missingTargets !== 0) return "block";
  if (summary.executedCommands !== 26) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.holds !== 0) return "block";
  return "result-audit-ready";
}

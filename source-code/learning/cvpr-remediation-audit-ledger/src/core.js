export function ledgerReady(row) {
  return Boolean(row.evidence && row.command && row.status && row.status !== "inspect" && row.status !== "alert" && row.count > 0);
}

export function ledgerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "complete") return "block";
  if (summary.stages !== 7) return "block";
  if (summary.readyStages !== 7) return "block";
  if (summary.gauntletBlocks !== 14) return "block";
  if (summary.actionableRows !== 29) return "block";
  if (summary.clearedBlocks !== 14) return "block";
  if (summary.promote !== 12) return "block";
  if (summary.canaryRollback !== 0) return "block";
  if (summary.rollbackDrills !== 12) return "block";
  if (summary.rehearsalMisses !== 0) return "block";
  return "complete";
}

export function summarizeLedger(rows) {
  return {
    stages: rows.length,
    readyStages: rows.filter(ledgerReady).length
  };
}

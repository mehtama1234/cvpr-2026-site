export function promoteDecision(row) {
  if (row.liveValid !== row.jobs) return "hold";
  if (row.cachedContracts !== row.jobs) return "repair-cache";
  if (row.intakeIssues !== 0) return "hold";
  return "promote";
}

export function boardGate(summary) {
  if (!summary) return "block";
  if (summary.waves !== 8) return "block";
  if (summary.jobs !== 40) return "block";
  if (summary.promote !== 8) return "block";
  if (summary.hold !== 0) return "block";
  return "ready";
}

export function summarizeBoard(rows) {
  const summary = {
    board: "cvpr-repo-harness-promotion-board",
    waves: rows.length,
    jobs: rows.reduce((sum, row) => sum + row.jobs, 0),
    promote: rows.filter((row) => promoteDecision(row) === "promote").length,
    hold: rows.filter((row) => promoteDecision(row) === "hold").length,
    repairCache: rows.filter((row) => promoteDecision(row) === "repair-cache").length
  };
  return { ...summary, status: boardGate(summary) };
}

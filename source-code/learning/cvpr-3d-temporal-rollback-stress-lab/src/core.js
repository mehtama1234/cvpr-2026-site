export function rollbackDecision(row) {
  if (row.rollback.minutesOverTarget > 0) return "block";
  if (row.stressed.risk >= 70 || row.stressed.readiness < 58 || row.stressed.evidence < 50) return "rehearse";
  return "watch";
}

export function stressGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.stressRows !== 6) return "block";
  if (summary.systems !== 2) return "block";
  if (summary.rollbackMisses !== 0) return "block";
  if (summary.block !== 0) return "block";
  if (summary.rehearsalStatus !== "release") return "block";
  if (summary.scenarioStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeStress(rows, sources) {
  const summary = {
    stressRows: rows.length,
    systems: new Set(rows.map((row) => row.system)).size,
    watch: rows.filter((row) => row.decision === "watch").length,
    rehearse: rows.filter((row) => row.decision === "rehearse").length,
    block: rows.filter((row) => row.decision === "block").length,
    rollbackMisses: rows.filter((row) => row.rollback.minutesOverTarget > 0).length,
    rehearsalStatus: sources.rehearsal.summary.status,
    scenarioStatus: sources.scenarioPack.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
  return { ...summary, status: stressGate({ ...summary, status: "ready" }) };
}

export function escalationDecision(row) {
  if (row.escalation.rollbackRisk >= 44 || row.escalation.safetyRisk >= 76) return "rollback-rehearsal";
  if (row.escalation.safetyRisk >= 62 || row.escalation.readiness < 66) return "safety-hold";
  if (row.escalation.safetyRisk >= 48 || row.escalation.evidence < 76) return "human-review";
  return "release-watch";
}

export function escalationGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.rows !== 8) return "block";
  if (summary.systems !== 2) return "block";
  if (summary.rollbackRehearsal > 1) return "block";
  if (summary.canaryRollback !== 0) return "block";
  if (summary.rollbackStressStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeEscalation(rows, sources) {
  const summary = {
    rows: rows.length,
    systems: new Set(rows.map((row) => row.system)).size,
    releaseWatch: rows.filter((row) => row.decision === "release-watch").length,
    humanReview: rows.filter((row) => row.decision === "human-review").length,
    safetyHold: rows.filter((row) => row.decision === "safety-hold").length,
    rollbackRehearsal: rows.filter((row) => row.decision === "rollback-rehearsal").length,
    canaryRollback: sources.canary.summary.rollback,
    rollbackStressStatus: sources.rollbackStress.summary.status,
    fullStackStatus: sources.validation.summary.fullStackStatus
  };
  return { ...summary, status: escalationGate({ ...summary, status: "ready" }) };
}

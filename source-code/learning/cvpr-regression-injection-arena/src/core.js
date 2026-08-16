export function injectionDecision(row) {
  if (!row.detected || !row.routed) return "block";
  if (row.severity === "critical" && row.recoveryPath.length < 3) return "block";
  if (!row.resealCommand.includes("validate_cvpr_full_stack")) return "block";
  return "recoverable";
}

export function arenaGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.injections !== 6) return "block";
  if (summary.detected !== 6) return "block";
  if (summary.routed !== 6) return "block";
  if (summary.recoverable !== 6) return "block";
  if (summary.critical !== 2) return "block";
  if (summary.closeoutStatus !== "sealed") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeArena(rows, sources) {
  const summary = {
    injections: rows.length,
    detected: rows.filter((row) => row.detected).length,
    routed: rows.filter((row) => row.routed).length,
    recoverable: rows.filter((row) => row.decision === "recoverable").length,
    critical: rows.filter((row) => row.severity === "critical").length,
    closeoutStatus: sources.closeout.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
  return { ...summary, status: arenaGate({ ...summary, status: "ready" }) };
}

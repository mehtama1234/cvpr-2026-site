export function rehearsalReady(row) {
  return row.status === "clear" &&
    row.drillStatus === "armed" &&
    row.recoveryCommand === "python3 scripts/validate_cvpr_full_stack.py" &&
    row.durationMin <= row.budgetMin &&
    row.expectedHold === 0;
}

export function summarizeRehearsals(rows) {
  return {
    rehearsals: rows.length,
    clear: rows.filter(rehearsalReady).length,
    blocked: rows.filter((row) => !rehearsalReady(row)).length,
    maxDuration: Math.max(...rows.map((row) => row.durationMin)),
    totalDuration: rows.reduce((sum, row) => sum + row.durationMin, 0)
  };
}

export function rehearsalGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "rehearsal-ready") return "block";
  if (summary.rehearsals !== 6) return "block";
  if (summary.clearRehearsals !== 6) return "block";
  if (summary.blockedRehearsals !== 0) return "block";
  if (summary.armedDrills !== 6) return "block";
  if (summary.driftChecks !== 18) return "block";
  if (summary.holds !== 0) return "block";
  return "rehearsal-ready";
}

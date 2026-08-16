export function drillReady(drill) {
  return drill.status === "armed" &&
    drill.command.includes("python3 scripts/validate_cvpr_full_stack.py") &&
    drill.expectedHold === 0 &&
    drill.owner.length > 0;
}

export function summarizeDrills(drills) {
  return {
    drills: drills.length,
    armed: drills.filter(drillReady).length,
    categories: new Set(drills.map((drill) => drill.category)).size,
    holdBudget: drills.reduce((sum, drill) => sum + drill.expectedHold, 0)
  };
}

export function drillbookGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "drillbook-ready") return "block";
  if (summary.drills !== 6) return "block";
  if (summary.armedDrills !== 6) return "block";
  if (summary.driftChecks !== 18) return "block";
  if (summary.blockedChecks !== 0) return "block";
  if (summary.healthBlocked !== 0) return "block";
  if (summary.triageRetest !== 0) return "block";
  if (summary.holds !== 0) return "block";
  return "drillbook-ready";
}

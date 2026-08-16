export function breachScenario(row) {
  const pressure = row.incidentId === "compound-launch" ? 1.25 : row.incidentId === "adversarial-content" ? 1.1 : 0.95;
  const rollbackRisk = Number((row.metrics.rollbackRisk + 12 * pressure + (row.promotion === "promote" ? 4 : 2)).toFixed(1));
  const drift = Number((row.metrics.drift + 4 * pressure).toFixed(1));
  return { rollbackRisk, drift, trafficPct: row.metrics.trafficPct };
}

export function drillSeverity(scenario) {
  if (scenario.rollbackRisk >= 44 || scenario.drift >= 14) return "critical";
  if (scenario.rollbackRisk >= 36 || scenario.drift >= 12) return "high";
  return "focused";
}

export function buildRollbackDrill(row) {
  const scenario = breachScenario(row);
  return {
    id: `${row.demoId}/${row.incidentId}/rollback-drill`,
    demoId: row.demoId,
    demoTitle: row.demoTitle,
    theme: row.theme,
    page: row.page,
    incidentId: row.incidentId,
    incidentTitle: row.incidentTitle,
    promotion: row.promotion,
    currentStatus: row.canaryStatus,
    scenario,
    severity: drillSeverity(scenario),
    trigger: `rollback risk ${scenario.rollbackRisk} or drift ${scenario.drift}`,
    response: row.promotion === "promote" ? "freeze promoted traffic, demote to monitor, rerun retest harness" : "keep traffic capped, reopen remediation action, rerun retest harness",
    ownerSurface: row.page,
    responseCommand: row.responseCommand,
    validationCommand: "python3 scripts/validate_cvpr_full_stack.py"
  };
}

export function summarizeRollbackDrills(drills) {
  return {
    drills: drills.length,
    critical: drills.filter((drill) => drill.severity === "critical").length,
    high: drills.filter((drill) => drill.severity === "high").length,
    focused: drills.filter((drill) => drill.severity === "focused").length,
    promotedDrills: drills.filter((drill) => drill.promotion === "promote").length,
    monitoredDrills: drills.filter((drill) => drill.promotion === "monitor").length,
    themes: new Set(drills.map((drill) => drill.theme)).size,
    incidents: new Set(drills.map((drill) => drill.incidentId)).size,
    readyDrills: drills.filter((drill) => drill.ownerSurface && drill.responseCommand && drill.validationCommand).length
  };
}

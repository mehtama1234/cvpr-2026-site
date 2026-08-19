export function drillReady(drill) {
  return Boolean(drill.ownerSurface && drill.rebuildCommand && drill.verifyCommand && drill.evidence && drill.validationCommand);
}

export function drillbookGate(summary) {
  if (!summary) return "block";
  if (summary.drills !== 10) return "block";
  if (summary.readyDrills !== 10) return "block";
  if (summary.activeCriticalFailures !== 0) return "block";
  if (summary.operationsStatus !== "ready") return "block";
  if (summary.validationGate !== "release") return "block";
  if (summary.remediationStatus !== "ready") return "block";
  return "ready";
}

export function summarizeDrillbook(input) {
  const drills = input.drills || [];
  const summary = {
    drillbook: "cvpr-release-regression-drillbook",
    drills: drills.length,
    readyDrills: drills.filter(drillReady).length,
    activeCriticalFailures: input.slos.summary.criticalFailures,
    operationsStatus: input.operations.summary.status,
    validationGate: input.validation.summary.gateStatus,
    remediationStatus: input.remediation.summary.status
  };
  return { ...summary, status: drillbookGate({ ...summary, status: "ready" }) };
}

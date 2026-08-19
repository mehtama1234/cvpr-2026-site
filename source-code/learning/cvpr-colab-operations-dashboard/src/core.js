export function operationsGate(summary) {
  if (!summary) return "block";
  if (summary.jobs <= 0) return "block";
  if (summary.runners <= 0) return "block";
  if (summary.cachedResults <= 0) return "block";
  if (summary.liveIntakeResults <= 0) return "block";
  if (summary.promotionResults <= 0) return "block";
  if (summary.deltaStatus !== "release") return "block";
  if (summary.deltaRegressions !== 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.releaseStatus !== "release") return "block";
  if (summary.ledgerStatus !== "release") return "block";
  if (summary.receiptStatus !== "ready") return "block";
  if (summary.receiptArtifacts !== 7) return "block";
  if (summary.themeMatrixStatus !== "release") return "block";
  if (summary.coveredThemes !== 8) return "block";
  if (summary.remediationStatus !== "ready") return "block";
  if (summary.blockTasks !== summary.sourceBlockTasks) return "block";
  if (summary.sprintPlanStatus !== "ready") return "block";
  if (summary.sprintTasks !== summary.blockTasks) return "block";
  if (summary.validationGate !== "release") return "block";
  return "ready";
}

export function summarizeOperations(input) {
  return {
    dashboard: "cvpr-colab-operations-dashboard",
    jobs: input.worker.summary.jobs,
    runners: input.worker.summary.promotedRunners,
    cachedResults: input.worker.summary.cachedResults,
    liveIntakeResults: input.intake.summary.actualResults,
    promotionResults: input.promotion.summary.actualResults,
    deltaStatus: input.delta.summary.status,
    deltaRegressions: input.delta.summary.regressions,
    maxReadinessDrop: input.delta.summary.maxReadinessDrop,
    importIssues: input.intake.summary.issues + input.release.summary.importIssues,
    releaseStatus: input.release.summary.status,
    ledgerStatus: input.ledger.summary.status,
    receiptStatus: input.receipt.summary.status,
    receiptArtifacts: input.receipt.summary.evidenceArtifacts,
    themeMatrixStatus: input.themeMatrix.summary.status,
    coveredThemes: input.themeMatrix.summary.coveredThemes,
    remediationStatus: input.remediation.summary.status,
    blockTasks: input.remediation.summary.blockTasks,
    sourceBlockTasks: input.remediation.summary.sourceBlockTasks,
    sprintPlanStatus: input.sprintPlan.summary.status,
    sprintTasks: input.sprintPlan.summary.tasks,
    validationGate: input.validation.summary.gateStatus
  };
}

export function receiptGate(summary) {
  if (!summary) return "block";
  if (summary.stages !== 8) return "block";
  if (summary.commands !== 5) return "block";
  if (summary.jobs <= 0) return "block";
  if (summary.runners <= 0) return "block";
  if (summary.cachedResults <= 0) return "block";
  if (summary.liveIntakeResults <= 0) return "block";
  if (summary.promotionResults <= 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.deltaStatus !== "release") return "block";
  if (summary.deltaRegressions !== 0) return "block";
  if (summary.ledgerStatus !== "release") return "block";
  if (summary.ledgerArtifacts !== 7) return "block";
  if (summary.releaseStatus !== "release") return "block";
  if (summary.validationGate !== "release") return "block";
  if (summary.evidenceArtifacts !== 7) return "block";
  if (summary.missingEvidence !== 0) return "block";
  return "ready";
}

export function summarizeReceipt(input) {
  return {
    receipt: "cvpr-colab-run-receipt",
    stages: input.stages.length,
    commands: input.commands.length,
    jobs: input.worker.summary.jobs,
    runners: input.worker.summary.promotedRunners,
    cachedResults: input.worker.summary.cachedResults,
    liveIntakeResults: input.intake.summary.actualResults,
    promotionResults: input.promotion.summary.actualResults,
    importIssues: input.intake.summary.issues + input.release.summary.importIssues,
    deltaStatus: input.delta.summary.status,
    deltaRegressions: input.delta.summary.regressions,
    maxReadinessDrop: input.delta.summary.maxReadinessDrop,
    ledgerStatus: input.ledger.summary.status,
    ledgerArtifacts: input.ledger.summary.artifacts,
    releaseStatus: input.release.summary.status,
    validationGate: input.validation.summary.gateStatus,
    packageTests: input.validation.summary.packageTests,
    evidenceArtifacts: input.evidence.length,
    missingEvidence: input.evidence.filter((artifact) => !artifact.exists).length
  };
}

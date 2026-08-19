export function ledgerGate(summary) {
  if (!summary) return "block";
  if (summary.artifacts !== 7) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  if (summary.cachedResults <= 0) return "block";
  if (summary.liveIntakeResults <= 0) return "block";
  if (summary.promotionResults <= 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.deltaStatus !== "release") return "block";
  if (summary.deltaRegressions !== 0) return "block";
  if (summary.releaseStatus !== "release") return "block";
  if (summary.handoffStatus !== "ready") return "block";
  return "release";
}

export function summarizeLedger(input) {
  return {
    ledger: "cvpr-colab-evidence-ledger",
    artifacts: input.artifacts.length,
    missingArtifacts: input.artifacts.filter((artifact) => !artifact.exists).length,
    cachedResults: input.importReport.summary.actualResults,
    liveIntakeResults: input.liveIntake.summary.actualResults,
    promotionResults: input.promotion.summary.actualResults,
    importIssues: input.importReport.summary.issues,
    deltaStatus: input.promotionDelta.summary.status,
    deltaRegressions: input.promotionDelta.summary.regressions,
    releaseStatus: input.release.summary.status,
    handoffStatus: input.handoff.summary.status
  };
}

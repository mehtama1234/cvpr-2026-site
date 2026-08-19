export function bundleGate(summary) {
  if (!summary) return "block";
  if (summary.workerJobs <= 0) return "block";
  if (summary.promotedRunners <= 0) return "block";
  if (summary.cachedResults <= 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.validationGate !== "release") return "block";
  if (summary.liveIntakeStatus !== "valid") return "block";
  if (summary.promotionDeltaStatus !== "release") return "block";
  if (summary.promotionRegressions !== 0) return "block";
  return "release";
}

export function summarizeBundle(input) {
  const worker = input.worker.summary;
  const imported = input.importReport.summary;
  const full = input.fullStack.summary;
  const validation = input.validationCenter.summary;
  const liveIntake = input.liveIntake.summary;
  const promotionDelta = input.promotionDelta.summary;
  const manifest = input.runManifest;
  const summary = {
    bundle: "cvpr-colab-release-bundle",
    runtimePlane: worker.runtimePlane,
    notebook: worker.notebook,
    runbook: worker.runbook,
    resultArtifact: input.worker.runManifest.resultArtifact,
    workerJobs: manifest.jobs.length,
    promotedRunners: liveIntake.jobs,
    cachedResults: imported.actualResults,
    importIssues: imported.issues,
    fullStackStatus: full.status,
    packageTests: full.packageTests,
    validationGate: validation.gateStatus,
    liveIntakeStatus: liveIntake.status,
    liveIntakeResults: liveIntake.actualResults,
    liveIntakePromoted: liveIntake.promoted,
    promotionDeltaStatus: promotionDelta.status,
    promotionRegressions: promotionDelta.regressions,
    maxReadinessDrop: promotionDelta.maxReadinessDrop,
    runnerRows: input.worker.runnerCoverage.length
  };
  return { ...summary, status: bundleGate(summary) };
}

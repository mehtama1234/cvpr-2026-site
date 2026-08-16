export function gateStatus(report, promotionDelta) {
  if (!report || report.summary?.status !== "valid") return "block";
  if ((report.summary.importIssues ?? 0) > 0) return "block";
  if ((report.summary.promotedRunners ?? 0) < 8) return "block";
  if (!promotionDelta || promotionDelta.summary?.status !== "release") return "block";
  if ((promotionDelta.summary.regressions ?? 1) > 0) return "block";
  if ((report.summary.packageTests ?? 0) < 20) return "review";
  return "release";
}

export function summarizeValidationCenter(input) {
  const full = input.fullStack.summary;
  const imported = input.importReport.summary;
  const worker = input.worker.summary;
  const mission = input.mission.summary;
  const promotionDelta = input.promotionDelta.summary;
  const slowest = [...input.fullStack.steps].sort((a, b) => b.durationSec - a.durationSec).slice(0, 5);
  return {
    status: gateStatus(input.fullStack, input.promotionDelta),
    fullStackStatus: full.status,
    commands: full.commands,
    steps: full.steps,
    packageTests: full.packageTests,
    workerJobs: worker.jobs,
    promotedRunners: full.promotedRunners ?? worker.promotedRunners ?? 0,
    cachedResults: worker.cachedResults,
    importIssues: imported.issues,
    promotionDeltaStatus: promotionDelta.status,
    promotionRegressions: promotionDelta.regressions,
    maxReadinessDrop: promotionDelta.maxReadinessDrop,
    validImportJobs: imported.validJobs,
    implementedBenches: mission.implementedBenches,
    benchCases: mission.benchCases,
    benchBlock: mission.benchBlock,
    slowest
  };
}

export function launchGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "launch-ready") return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.sloStatus !== "release") return "block";
  if (summary.drillbookStatus !== "ready") return "block";
  if (summary.operationsStatus !== "ready") return "block";
  if (summary.validationGate !== "release") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.criticalFailures !== 0) return "block";
  if (summary.importIssues !== 0) return "block";
  return "launch-ready";
}

export function summarizeLaunch(input) {
  const release = input.releaseBrief.summary;
  const slos = input.slos.summary;
  const drillbook = input.drillbook.summary;
  const operations = input.operations.summary;
  const validation = input.validation.summary;
  const full = input.fullStack.summary;
  const summary = {
    pack: "cvpr-launch-readiness-pack",
    releaseGate: release.gate,
    sloStatus: slos.status,
    drillbookStatus: drillbook.status,
    operationsStatus: operations.status,
    validationGate: validation.gateStatus,
    fullStackStatus: full.status,
    systems: release.systems,
    demos: release.demos,
    benchRelease: release.benchRelease,
    arenaRelease: release.arenaRelease,
    workerJobs: release.workerJobs,
    cachedResults: release.cachedResults,
    packageTests: full.packageTests,
    criticalFailures: slos.criticalFailures,
    importIssues: release.importIssues
  };
  return { ...summary, status: launchGate({ ...summary, status: "launch-ready" }) };
}

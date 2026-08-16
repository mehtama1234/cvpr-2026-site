export function surfaceReady(row) {
  return row.actual === row.expected && row.evidence && row.surface && row.command;
}

export function commandCenterGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "operator-ready") return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.readySurfaces !== 8) return "block";
  if (summary.alerts !== 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.packageTests < 52) return "block";
  return "operator-ready";
}

export function summarizeCommandCenter(input) {
  const rows = input.surfaceRows || [];
  const summary = {
    center: "cvpr-release-command-center",
    surfaces: rows.length,
    readySurfaces: rows.filter(surfaceReady).length,
    alerts: input.monitoring.summary.alerts,
    importIssues: input.brief.summary.importIssues,
    fullStackStatus: input.validation.summary.status,
    packageTests: input.validation.summary.packageTests,
    systems: input.brief.summary.systems,
    demos: input.brief.summary.demos,
    workerJobs: input.brief.summary.workerJobs
  };
  return { ...summary, status: commandCenterGate({ ...summary, status: "operator-ready" }) };
}

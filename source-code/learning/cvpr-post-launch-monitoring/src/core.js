export function monitorPass(row) {
  if (row.direction === "eq") return row.actual === row.target;
  if (row.direction === "gte") return row.actual >= row.target;
  if (row.direction === "lte") return row.actual <= row.target;
  return false;
}

export function monitoringGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "watching") return "block";
  if (summary.monitors !== 9) return "block";
  if (summary.passingMonitors !== 9) return "block";
  if (summary.alerts !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "watching";
}

export function summarizeMonitoring(input) {
  const rows = input.monitorRows || [];
  const passing = rows.filter(monitorPass).length;
  const summary = {
    dashboard: "cvpr-post-launch-monitoring",
    monitors: rows.length,
    passingMonitors: passing,
    alerts: rows.length - passing,
    releaseGate: input.slos.summary.releaseGate,
    fullStackStatus: input.validation.summary.status,
    readinessFloor: input.replay.summary.minReadiness,
    manifestStatus: input.manifest.summary.status,
    changeControlStatus: input.changeControl.summary.status
  };
  return { ...summary, status: monitoringGate({ ...summary, status: "watching" }) };
}

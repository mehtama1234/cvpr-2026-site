export function passSlo(row) {
  if (row.direction === "eq") return row.actual === row.target;
  if (row.direction === "gte") return row.actual >= row.target;
  if (row.direction === "lte") return row.actual <= row.target;
  return false;
}

export function sloGate(summary) {
  if (!summary) return "block";
  if (summary.slos !== summary.passingSlos) return "block";
  if (summary.criticalFailures !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "release";
}

export function summarizeSlo(input) {
  const rows = input.sloRows || [];
  const passing = rows.filter(passSlo).length;
  const criticalFailures = rows.filter((row) => row.severity === "critical" && !passSlo(row)).length;
  const summary = {
    dashboard: "cvpr-release-slo-dashboard",
    slos: rows.length,
    passingSlos: passing,
    criticalFailures,
    readinessFloor: input.replay.summary.minReadiness,
    avgReadiness: input.replay.summary.avgReadiness,
    releaseGate: input.releaseBrief.summary.gate,
    fullStackStatus: input.validation.summary.status
  };
  return { ...summary, status: sloGate({ ...summary, status: "release" }) };
}

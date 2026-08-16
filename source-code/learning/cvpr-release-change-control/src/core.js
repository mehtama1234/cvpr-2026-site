export function controlReady(row) {
  return Boolean(row.ownerSurface && row.rebuildCommand && row.verifyCommand && row.resealCommand && row.currentSha256);
}

export function changeControlGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "controlled") return "block";
  if (summary.artifacts !== 13) return "block";
  if (summary.controlRows !== 13) return "block";
  if (summary.readyRows !== 13) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  if (summary.launchStatus !== "launch-ready") return "block";
  if (summary.manifestStatus !== "sealed") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "controlled";
}

export function summarizeChangeControl(input) {
  const rows = input.controlRows || [];
  const summary = {
    board: "cvpr-release-change-control",
    artifacts: input.manifest.summary.artifacts,
    controlRows: rows.length,
    readyRows: rows.filter(controlReady).length,
    missingArtifacts: input.manifest.summary.missingArtifacts,
    launchStatus: input.launch.summary.status,
    manifestStatus: input.manifest.summary.status,
    fullStackStatus: input.validation.summary.status,
    packageTests: input.validation.summary.packageTests
  };
  return { ...summary, status: changeControlGate({ ...summary, status: "controlled" }) };
}

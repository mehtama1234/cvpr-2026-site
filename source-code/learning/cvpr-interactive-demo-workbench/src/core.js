export function interactionReady(row) {
  return row.mode === "interactive-cached" &&
    row.controls.length === 5 &&
    row.runtimeState.activeDemo === row.demoId &&
    row.runtimeState.availablePanels.length === 5 &&
    row.selectedPanel === "output" &&
    row.artifactDiff.status === "local-backed" &&
    row.failureProbe.verdict === "probe-ready" &&
    row.releaseAction === "promote-interactive-demo" &&
    row.replayCommand.includes(row.jobId);
}

export function workbenchGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "workbench-ready") return "block";
  if (summary.demos !== 8) return "block";
  if (summary.readyInteractions !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.controls !== 40) return "block";
  if (summary.localArtifacts !== 24) return "block";
  if (summary.runtimeControllers !== 8) return "block";
  if (summary.promoteInteractive !== 8) return "block";
  if (summary.holdInteractive !== 0) return "block";
  return "workbench-ready";
}

export function summarizeWorkbench(rows) {
  return {
    demos: rows.length,
    readyInteractions: rows.filter(interactionReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    controls: rows.reduce((sum, row) => sum + row.controls.length, 0),
    localArtifacts: rows.reduce((sum, row) => sum + row.artifactDiff.localArtifacts, 0),
    runtimeControllers: rows.filter((row) => row.runtimeState && row.runtimeState.activeDemo === row.demoId).length,
    promoteInteractive: rows.filter((row) => row.releaseAction === "promote-interactive-demo").length,
    holdInteractive: rows.filter((row) => row.releaseAction === "hold-interactive-demo").length
  };
}

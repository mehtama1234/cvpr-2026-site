export function waveReady(row) {
  return row.status === "interactive-ready" &&
    row.controls.length === 5 &&
    row.localArtifacts === 3 &&
    row.runtimeState.activePanel === "output" &&
    row.releaseAction === "promote-interactive-demo" &&
    row.replayCommand.includes(row.jobId);
}

export function waveGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "wave-ready") return "block";
  if (summary.wave !== "second-interactive-wave") return "block";
  if (summary.demos !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.localArtifacts !== 24) return "block";
  if (summary.controls !== 40) return "block";
  if (summary.runtimeControllers !== 8) return "block";
  if (summary.promoteInteractive !== 8) return "block";
  if (summary.holdInteractive !== 0) return "block";
  return "wave-ready";
}

export function summarizeWave(rows) {
  return {
    demos: rows.length,
    themes: new Set(rows.map((row) => row.theme)).size,
    localArtifacts: rows.reduce((sum, row) => sum + row.localArtifacts, 0),
    controls: rows.reduce((sum, row) => sum + row.controls.length, 0),
    runtimeControllers: rows.filter((row) => row.runtimeState.activeDemo === row.demoId).length,
    promoteInteractive: rows.filter((row) => row.releaseAction === "promote-interactive-demo").length,
    holdInteractive: rows.filter((row) => row.releaseAction === "hold-interactive-demo").length
  };
}

export function waveState(wave, intakeStatus = "valid") {
  if (wave.status !== "ready") return "blocked";
  if (intakeStatus !== "valid") return "needs-intake";
  if (wave.wave === 0) return "receipt-ready";
  return "queued";
}

export function dashboardGate(summary) {
  if (!summary) return "block";
  if (summary.jobs !== 40) return "block";
  if (summary.waves !== 8) return "block";
  if (summary.readyWaves !== 8) return "block";
  if (summary.intakeIssues !== 0) return "block";
  if (summary.handoffStatus !== "ready") return "block";
  return "ready";
}

export function summarizeExecution(waves, intake, handoff) {
  const rows = waves.map((wave) => ({ ...wave, state: waveState(wave, intake.status) }));
  const summary = {
    dashboard: "cvpr-repo-harness-execution-dashboard",
    waves: rows.length,
    jobs: rows.reduce((sum, row) => sum + row.jobs, 0),
    repos: rows.reduce((sum, row) => sum + row.repos, 0),
    readyWaves: rows.filter((row) => row.status === "ready").length,
    queued: rows.filter((row) => row.state === "queued").length,
    receiptReady: rows.filter((row) => row.state === "receipt-ready").length,
    intakeIssues: intake.issues,
    handoffStatus: handoff.status
  };
  return { ...summary, status: dashboardGate(summary) };
}

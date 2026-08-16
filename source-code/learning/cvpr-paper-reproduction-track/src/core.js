export function reproductionScore(row) {
  const readiness = Number(row.readiness ?? 0);
  const smoke = row.smokePassed ? 24 : -50;
  const artifacts = row.artifactsComplete ? 18 : -20;
  const scenario = row.sampleInput && row.expectedOutput && row.failureProbe ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 14 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifacts + scenario + replay)).toFixed(1));
}

export function reproductionDecision(row) {
  const score = reproductionScore(row);
  if (score >= 88) return "build-interactive-demo";
  if (score >= 72) return "build-cached-demo";
  if (score >= 60) return "needs-repro-pass";
  return "hold";
}

export function trackGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "track-ready") return "block";
  if (summary.reproductions !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.liveRows !== 8) return "block";
  if (summary.smokePassed !== 8) return "block";
  if (summary.artifactsComplete !== 8) return "block";
  if (summary.hold !== 0) return "block";
  if (summary.minReproductionScore < 72) return "block";
  return "track-ready";
}

export function summarizeTrack(rows) {
  const scored = rows.map((row) => ({ ...row, reproductionScore: reproductionScore(row), decision: reproductionDecision(row) }));
  return {
    reproductions: scored.length,
    themes: new Set(scored.map((row) => row.theme)).size,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifactsComplete: scored.filter((row) => row.artifactsComplete).length,
    interactive: scored.filter((row) => row.decision === "build-interactive-demo").length,
    cached: scored.filter((row) => row.decision === "build-cached-demo").length,
    needsReproPass: scored.filter((row) => row.decision === "needs-repro-pass").length,
    hold: scored.filter((row) => row.decision === "hold").length,
    minReproductionScore: Math.min(...scored.map((row) => row.reproductionScore)),
  };
}

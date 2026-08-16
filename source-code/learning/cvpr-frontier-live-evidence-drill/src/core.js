export function evidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 22 : -40;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.baseRisk ?? 0) - 50) * 0.25;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay - riskPenalty)).toFixed(1));
}

export function drillDecision(row) {
  const score = evidenceScore(row);
  if (score >= 78 && row.smokePassed) return "promote-demo";
  if (score >= 58 && row.smokePassed) return "evidence-review";
  return "hold-demo";
}

export function summarizeDrill(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: evidenceScore(row), decision: drillDecision(row) }));
  return {
    drill: "cvpr-frontier-live-evidence-drill",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    evidenceReview: scored.filter((row) => row.decision === "evidence-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}

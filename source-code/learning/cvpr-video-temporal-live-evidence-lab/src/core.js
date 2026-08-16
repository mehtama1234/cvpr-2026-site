export function temporalEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 23 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.temporalRisk ?? 0) - 55) * 0.20;
  const reviewCredit = row.baseDecision === "review" ? 5 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + reviewCredit - riskPenalty)).toFixed(1));
}

export function labDecision(row) {
  const score = temporalEvidenceScore(row);
  if (score >= 80 && row.smokePassed) return "promote-demo";
  if (score >= 56 && row.smokePassed) return "temporal-review";
  return "hold-demo";
}

export function summarizeLab(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: temporalEvidenceScore(row), decision: labDecision(row) }));
  return {
    lab: "cvpr-video-temporal-live-evidence-lab",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    temporalReview: scored.filter((row) => row.decision === "temporal-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}

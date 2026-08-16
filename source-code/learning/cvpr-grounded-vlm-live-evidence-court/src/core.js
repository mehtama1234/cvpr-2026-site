export function groundingEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 23 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 17 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 13 : 0;
  const riskPenalty = Math.max(0, Number(row.groundingRisk ?? 0) - 56) * 0.20;
  const reviewCredit = row.baseDecision === "review" ? 5 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + reviewCredit - riskPenalty)).toFixed(1));
}

export function courtVerdict(row) {
  const score = groundingEvidenceScore(row);
  if (score >= 82 && row.smokePassed) return "promote-demo";
  if (score >= 58 && row.smokePassed) return "grounding-review";
  return "hold-demo";
}

export function summarizeCourt(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: groundingEvidenceScore(row), verdict: courtVerdict(row) }));
  return {
    court: "cvpr-grounded-vlm-live-evidence-court",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.verdict === "promote-demo").length,
    groundingReview: scored.filter((row) => row.verdict === "grounding-review").length,
    holdDemo: scored.filter((row) => row.verdict === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}

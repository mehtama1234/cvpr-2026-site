export function partEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 23 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 17 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 13 : 0;
  const riskPenalty = Math.max(0, Number(row.partRisk ?? 0) - 54) * 0.18;
  const reviewCredit = row.baseDecision === "review" ? 5 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + reviewCredit - riskPenalty)).toFixed(1));
}

export function benchDecision(row) {
  const score = partEvidenceScore(row);
  if (score >= 82 && row.smokePassed) return "promote-demo";
  if (score >= 58 && row.smokePassed) return "part-review";
  return "hold-demo";
}

export function summarizeBench(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: partEvidenceScore(row), decision: benchDecision(row) }));
  return {
    bench: "cvpr-perception-parts-live-evidence-bench",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    partReview: scored.filter((row) => row.decision === "part-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}

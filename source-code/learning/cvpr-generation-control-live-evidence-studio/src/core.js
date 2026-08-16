export function generationEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 24 : -50;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 18 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 14 : 0;
  const riskPenalty = Math.max(0, Number(row.artifactRisk ?? 0) - 58) * 0.18;
  const blockCredit = row.baseDecision === "block" ? 8 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + blockCredit - riskPenalty)).toFixed(1));
}

export function studioDecision(row) {
  const score = generationEvidenceScore(row);
  if (score >= 84 && row.smokePassed && row.baseDecision !== "block") return "promote-demo";
  if (score >= 58 && row.smokePassed) return "artifact-review";
  return "hold-demo";
}

export function summarizeStudio(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: generationEvidenceScore(row), decision: studioDecision(row) }));
  return {
    studio: "cvpr-generation-control-live-evidence-studio",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    artifactReview: scored.filter((row) => row.decision === "artifact-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}

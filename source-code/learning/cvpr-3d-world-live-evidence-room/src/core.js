export function geometryEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 24 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.geometryRisk ?? 0) - 55) * 0.22;
  const reviewCredit = row.baseDecision === "review" ? 4 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + reviewCredit - riskPenalty)).toFixed(1));
}

export function roomDecision(row) {
  const score = geometryEvidenceScore(row);
  if (score >= 80 && row.smokePassed) return "promote-demo";
  if (score >= 56 && row.smokePassed) return "geometry-review";
  return "hold-demo";
}

export function summarizeRoom(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: geometryEvidenceScore(row), decision: roomDecision(row) }));
  return {
    room: "cvpr-3d-world-live-evidence-room",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    geometryReview: scored.filter((row) => row.decision === "geometry-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}

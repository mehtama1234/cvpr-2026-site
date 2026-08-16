export function efficiencyEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 22 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.efficiencyRisk ?? 0) - 56) * 0.18;
  const canaryCredit = row.baseDecision === "canary" ? 6 : 0;
  const holdCredit = row.baseDecision === "hold" ? 4 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + canaryCredit + holdCredit - riskPenalty)).toFixed(1));
}

export function governorDecision(row) {
  const score = efficiencyEvidenceScore(row);
  if (score >= 84 && row.smokePassed && row.baseDecision === "canary") return "canary-demo";
  if (score >= 60 && row.smokePassed) return "efficiency-review";
  return "hold-demo";
}

export function summarizeGovernor(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: efficiencyEvidenceScore(row), decision: governorDecision(row) }));
  return {
    governor: "cvpr-efficient-learning-live-evidence-governor",
    rows: scored.length,
    canaryDemo: scored.filter((row) => row.decision === "canary-demo").length,
    efficiencyReview: scored.filter((row) => row.decision === "efficiency-review").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}

export function policyEvidenceScore(row) {
  const readiness = Number(row.liveReadiness ?? 0);
  const smoke = row.smokePassed ? 22 : -45;
  const artifact = row.evidenceArtifact && row.evidenceArtifact.endsWith(".json") ? 16 : 0;
  const replay = row.replayCommand && row.replayCommand.includes(row.jobId) ? 12 : 0;
  const riskPenalty = Math.max(0, Number(row.policyRisk ?? 0) - 56) * 0.18;
  const shadowCredit = row.baseDecision === "shadow" ? 6 : 0;
  return Number(Math.max(0, Math.min(100, readiness + smoke + artifact + replay + shadowCredit - riskPenalty)).toFixed(1));
}

export function drillDecision(row) {
  const score = policyEvidenceScore(row);
  if (score >= 84 && row.smokePassed && row.baseDecision !== "shadow") return "promote-demo";
  if (score >= 60 && row.smokePassed) return "policy-shadow";
  return "hold-demo";
}

export function summarizeDrill(rows) {
  const scored = rows.map((row) => ({ ...row, evidenceScore: policyEvidenceScore(row), decision: drillDecision(row) }));
  return {
    drill: "cvpr-embodied-control-live-evidence-drill",
    rows: scored.length,
    promoteDemo: scored.filter((row) => row.decision === "promote-demo").length,
    policyShadow: scored.filter((row) => row.decision === "policy-shadow").length,
    holdDemo: scored.filter((row) => row.decision === "hold-demo").length,
    liveRows: scored.filter((row) => row.mode === "live-colab").length,
    smokePassed: scored.filter((row) => row.smokePassed).length,
    artifacts: scored.filter((row) => row.evidenceArtifact).length
  };
}

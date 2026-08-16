export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreTournamentMatch(generation, restoration, policy) {
  const g = generation.metrics;
  const r = restoration.metrics;
  const constraintScore = clamp(g.constraintSatisfaction * 0.50 + g.editLocality * 0.28 + g.rewardAlignment * 0.22);
  const identityScore = clamp(g.identityPreservation * 0.72 + (100 - g.identityDamage) * 0.28);
  const restorationScore = clamp(r.fidelityScore * 0.40 + r.downstreamUtility * 0.42 + (100 - r.fabricatedDetailRisk) * 0.18);
  const riskScore = clamp(100 - Math.max(g.identityDamage, g.provenanceRisk, r.fabricatedDetailRisk, r.artifactRisk));
  const tournamentScore = clamp(
    constraintScore * policy.constraintWeight +
    identityScore * policy.identityWeight +
    restorationScore * policy.restorationWeight +
    riskScore * policy.riskWeight
  );
  return { constraintScore, identityScore, restorationScore, riskScore, tournamentScore };
}

export function tournamentDecision(scores) {
  if (scores.tournamentScore >= 78 && scores.constraintScore >= 76 && scores.identityScore >= 76 && scores.restorationScore >= 76 && scores.riskScore >= 64) return "release";
  if (scores.tournamentScore >= 66 && scores.constraintScore >= 64 && scores.restorationScore >= 64 && scores.riskScore >= 52) return "review";
  return "block";
}

export function buildTournamentRows(generationRecords, restorationRecords, policies) {
  return generationRecords.flatMap((generation) =>
    restorationRecords.flatMap((restoration) =>
      policies.map((policy) => {
        const scores = scoreTournamentMatch(generation, restoration, policy);
        return {
          id: `${generation.id}/${restoration.id}/${policy.id}`,
          generationCase: generation.title,
          restorationCase: restoration.title,
          policy: policy.title,
          generationBench: generation.gpuProvenance.sourceBench,
          restorationBench: restoration.gpuProvenance.sourceBench,
          scores,
          decision: tournamentDecision(scores)
        };
      })
    )
  );
}

export function summarizeTournament(generationRecords, restorationRecords, policies) {
  const rows = buildTournamentRows(generationRecords, restorationRecords, policies);
  const avgScore = rows.reduce((sum, row) => sum + row.scores.tournamentScore, 0) / rows.length;
  const minConstraintScore = Math.min(...rows.map((row) => row.scores.constraintScore));
  const maxJointRisk = 100 - Math.min(...rows.map((row) => row.scores.riskScore));
  return {
    generationCases: generationRecords.length,
    restorationCases: restorationRecords.length,
    policies: policies.length,
    matches: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    avgScore: Number(avgScore.toFixed(1)),
    minConstraintScore: Number(minConstraintScore.toFixed(1)),
    maxJointRisk: Number(maxJointRisk.toFixed(1)),
    rows
  };
}

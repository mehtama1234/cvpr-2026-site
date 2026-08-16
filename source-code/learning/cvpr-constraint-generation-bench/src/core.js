export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGenerationCase(input, stageEvidence = { layout: 67, identity: 70, reward: 73, evidenceDepth: 47 }) {
  const edit = clamp(input.editStrength);
  const layoutLock = clamp(input.layoutLock);
  const identityLock = clamp(input.identityLock);
  const pressure = clamp(input.adversarialPromptPressure);
  const editPressure = clamp(edit * 0.42 + pressure * 0.36 + (100 - layoutLock) * 0.12 + (100 - identityLock) * 0.10);
  const constraintSatisfaction = clamp(stageEvidence.layout * 0.34 + layoutLock * 0.30 + identityLock * 0.12 + (100 - pressure) * 0.14 + stageEvidence.evidenceDepth * 0.10);
  const identityPreservation = clamp(stageEvidence.identity * 0.34 + identityLock * 0.34 + (100 - edit) * 0.18 + (100 - pressure) * 0.14);
  const editLocality = clamp(layoutLock * 0.30 + identityLock * 0.18 + (100 - editPressure) * 0.28 + stageEvidence.layout * 0.24);
  const rewardAlignment = clamp(stageEvidence.reward * 0.30 + constraintSatisfaction * 0.28 + identityPreservation * 0.20 + (100 - pressure) * 0.22);
  const identityDamage = clamp(edit * 0.24 + pressure * 0.28 + (100 - identityPreservation) * 0.30 + (100 - identityLock) * 0.18);
  const provenanceRisk = clamp(pressure * 0.34 + editPressure * 0.24 + (100 - constraintSatisfaction) * 0.24 + (100 - editLocality) * 0.18);
  const readiness = clamp(constraintSatisfaction * 0.28 + identityPreservation * 0.26 + editLocality * 0.20 + rewardAlignment * 0.16 + (100 - Math.max(identityDamage, provenanceRisk)) * 0.10);
  return { editPressure, constraintSatisfaction, identityPreservation, editLocality, rewardAlignment, identityDamage, provenanceRisk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "constraint-generation" || result.mode !== "cached-real") return null;
  const editPressure = clamp(result.metrics.editPressure);
  const constraintSatisfaction = clamp(result.metrics.constraintSatisfaction);
  const identityPreservation = clamp(result.metrics.identityPreservation);
  const editLocality = clamp(result.metrics.editLocality);
  const rewardAlignment = clamp(result.metrics.rewardAlignment);
  const identityDamage = clamp(result.metrics.identityDamage);
  const provenanceRisk = clamp(result.metrics.provenanceRisk);
  const readiness = clamp(result.metrics.readiness);
  return { editPressure, constraintSatisfaction, identityPreservation, editLocality, rewardAlignment, identityDamage, provenanceRisk, readiness };
}

export function chooseGenerationMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreGenerationCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function generationDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.constraintSatisfaction >= 60 && metrics.identityDamage <= 38 && metrics.provenanceRisk <= 46) return "release";
  if (metrics.readiness >= 54 && metrics.constraintSatisfaction >= 48 && metrics.identityDamage <= 66) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseGenerationMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      editStrength: scenario.editStrength,
      layoutLock: scenario.layoutLock,
      identityLock: scenario.identityLock,
      adversarialPromptPressure: scenario.adversarialPromptPressure
    },
    metrics,
    decision: generationDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.identityDamage <= 38,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minConstraintSatisfaction = Math.min(...caseRows.map((row) => row.metrics.constraintSatisfaction));
  const maxIdentityDamage = Math.max(...caseRows.map((row) => row.metrics.identityDamage));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minConstraintSatisfaction: Number(minConstraintSatisfaction.toFixed(1)),
    maxIdentityDamage: Number(maxIdentityDamage.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}

export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRestorationCase(input, stageEvidence = { diagnosis: 73.1, fidelity: 76.1, downstream: 79.1, evidenceDepth: 54.6 }) {
  const blur = clamp(input.blur);
  const noise = clamp(input.noise);
  const compression = clamp(input.compression);
  const lowLight = clamp(input.lowLight);
  const hallucinationPenalty = clamp(input.hallucinationPenalty);
  const degradationLoad = clamp(blur * 0.24 + noise * 0.22 + compression * 0.22 + lowLight * 0.22 + hallucinationPenalty * 0.10);
  const diagnosisConfidence = clamp(stageEvidence.diagnosis * 0.34 + stageEvidence.evidenceDepth * 0.18 + (100 - Math.abs(blur - noise)) * 0.10 + (100 - degradationLoad) * 0.28 + hallucinationPenalty * 0.10);
  const fidelityScore = clamp(stageEvidence.fidelity * 0.34 + diagnosisConfidence * 0.24 + (100 - hallucinationPenalty) * 0.24 + (100 - compression) * 0.10 + (100 - blur) * 0.08);
  const artifactRisk = clamp(degradationLoad * 0.30 + hallucinationPenalty * 0.30 + compression * 0.16 + lowLight * 0.14 + (100 - fidelityScore) * 0.10);
  const downstreamUtility = clamp(stageEvidence.downstream * 0.34 + fidelityScore * 0.30 + diagnosisConfidence * 0.18 + (100 - artifactRisk) * 0.18);
  const fabricatedDetailRisk = clamp(hallucinationPenalty * 0.42 + (100 - fidelityScore) * 0.24 + lowLight * 0.14 + compression * 0.12 + blur * 0.08);
  const readiness = clamp(diagnosisConfidence * 0.22 + fidelityScore * 0.30 + downstreamUtility * 0.30 + (100 - fabricatedDetailRisk) * 0.18);
  return { degradationLoad, diagnosisConfidence, fidelityScore, artifactRisk, downstreamUtility, fabricatedDetailRisk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "restoration-fidelity" || result.mode !== "cached-real") return null;
  const fidelityScore = clamp(result.metrics.fidelityScore);
  const downstreamUtility = clamp(result.metrics.downstreamUtility);
  const fabricatedDetailRisk = clamp(result.metrics.fabricatedDetailRisk);
  const readiness = clamp(result.metrics.readiness);
  const diagnosisConfidence = clamp((fidelityScore * 0.42) + (downstreamUtility * 0.34) + ((100 - fabricatedDetailRisk) * 0.24));
  const degradationLoad = clamp(100 - diagnosisConfidence);
  const artifactRisk = clamp(fabricatedDetailRisk * 0.68 + degradationLoad * 0.32);
  return { degradationLoad, diagnosisConfidence, fidelityScore, artifactRisk, downstreamUtility, fabricatedDetailRisk, readiness };
}

export function chooseRestorationMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreRestorationCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function restorationDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.fidelityScore >= 60 && metrics.downstreamUtility >= 62 && metrics.fabricatedDetailRisk <= 42) return "release";
  if (metrics.readiness >= 54 && metrics.fidelityScore >= 48 && metrics.fabricatedDetailRisk <= 68) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseRestorationMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      blur: scenario.blur,
      noise: scenario.noise,
      compression: scenario.compression,
      lowLight: scenario.lowLight,
      hallucinationPenalty: scenario.hallucinationPenalty
    },
    metrics,
    decision: restorationDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.downstreamUtility >= 62 && metrics.fabricatedDetailRisk <= 42,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minDownstreamUtility = Math.min(...caseRows.map((row) => row.metrics.downstreamUtility));
  const maxFabricatedDetailRisk = Math.max(...caseRows.map((row) => row.metrics.fabricatedDetailRisk));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minDownstreamUtility: Number(minDownstreamUtility.toFixed(1)),
    maxFabricatedDetailRisk: Number(maxFabricatedDetailRisk.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}

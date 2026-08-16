export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGroundingCase(input, stageEvidence = { grounding: 67.9, retrieval: 70.9, inspection: 73.9, evidenceDepth: 37.7 }) {
  const rarity = clamp(input.queryRarity);
  const distractor = clamp(input.distractorOverlap);
  const ambiguity = clamp(input.boxAmbiguity);
  const threshold = clamp(input.evidenceThreshold);
  const proposalRecall = clamp(stageEvidence.retrieval * 0.34 + (100 - ambiguity) * 0.25 + (100 - distractor) * 0.20 + (100 - rarity) * 0.08 + threshold * 0.13);
  const textRegionScore = clamp(stageEvidence.grounding * 0.36 + proposalRecall * 0.24 + (100 - distractor) * 0.18 + threshold * 0.12 + stageEvidence.evidenceDepth * 0.10);
  const longTailRecall = clamp(stageEvidence.retrieval * 0.32 + rarity * 0.18 + proposalRecall * 0.22 + (100 - ambiguity) * 0.18 + threshold * 0.10);
  const localizedEvidence = clamp(stageEvidence.inspection * 0.30 + textRegionScore * 0.28 + proposalRecall * 0.22 + stageEvidence.evidenceDepth * 0.20);
  const unsupportedRisk = clamp((100 - localizedEvidence) * 0.34 + distractor * 0.24 + ambiguity * 0.22 + rarity * 0.12 - threshold * 0.10);
  const readiness = clamp(localizedEvidence * 0.34 + textRegionScore * 0.24 + longTailRecall * 0.22 + (100 - unsupportedRisk) * 0.20);
  return { proposalRecall, textRegionScore, longTailRecall, localizedEvidence, unsupportedRisk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "open-vocab-grounding" || result.mode !== "cached-real") return null;
  const localizedEvidence = clamp(result.metrics.localizedEvidence);
  const unsupportedRisk = clamp(result.metrics.unsupportedRisk);
  const readiness = clamp(result.metrics.readiness);
  const proposalRecall = clamp((result.outputs.boxes?.[0]?.score ?? 0) * 100);
  const textRegionScore = clamp(result.outputs.regionScores?.target ?? localizedEvidence);
  const longTailRecall = clamp(result.outputs.regionScores?.longTail ?? textRegionScore);
  return { proposalRecall, textRegionScore, longTailRecall, localizedEvidence, unsupportedRisk, readiness };
}

export function chooseGroundingMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreGroundingCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function groundingDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.localizedEvidence >= 55 && metrics.unsupportedRisk <= 36) return "release";
  if (metrics.readiness >= 54 && metrics.localizedEvidence >= 45 && metrics.unsupportedRisk <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseGroundingMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      queryRarity: scenario.queryRarity,
      distractorOverlap: scenario.distractorOverlap,
      boxAmbiguity: scenario.boxAmbiguity,
      evidenceThreshold: scenario.evidenceThreshold
    },
    metrics,
    decision: groundingDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.localizedEvidence >= 55,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minEvidence = Math.min(...caseRows.map((row) => row.metrics.localizedEvidence));
  const maxUnsupportedRisk = Math.max(...caseRows.map((row) => row.metrics.unsupportedRisk));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minLocalizedEvidence: Number(minEvidence.toFixed(1)),
    maxUnsupportedRisk: Number(maxUnsupportedRisk.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}

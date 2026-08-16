export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRolloutCase(input, stageEvidence = { memory: 70.6, physics: 73.6, rollout: 76.6, evidenceDepth: 56.3 }) {
  const length = clamp(input.rolloutLength);
  const density = clamp(input.identityDensity);
  const violations = clamp(input.physicsViolations);
  const memoryWindow = clamp(input.memoryWindow);
  const memoryLoad = clamp(length * 0.34 + density * 0.34 + (100 - memoryWindow) * 0.32);
  const identityStability = clamp(stageEvidence.memory * 0.36 + memoryWindow * 0.30 + (100 - density) * 0.16 + (100 - length) * 0.18);
  const contactConsistency = clamp(stageEvidence.physics * 0.42 + (100 - violations) * 0.38 + memoryWindow * 0.12 + (100 - density) * 0.08);
  const rolloutPlausibility = clamp(stageEvidence.rollout * 0.34 + contactConsistency * 0.24 + identityStability * 0.22 + (100 - length) * 0.20);
  const drift = clamp(memoryLoad * 0.30 + (100 - identityStability) * 0.30 + violations * 0.24 + length * 0.16);
  const readiness = clamp(identityStability * 0.30 + contactConsistency * 0.28 + rolloutPlausibility * 0.26 + (100 - drift) * 0.16);
  return { memoryLoad, identityStability, contactConsistency, rolloutPlausibility, drift, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "temporal-rollout" || result.mode !== "cached-real") return null;
  const memoryLoad = clamp(result.metrics.memoryLoad);
  const identityStability = clamp(result.metrics.identityStability);
  const contactConsistency = clamp(result.metrics.contactConsistency);
  const rolloutPlausibility = clamp(result.metrics.rolloutPlausibility);
  const drift = clamp(result.metrics.drift);
  const readiness = clamp(result.metrics.readiness);
  return { memoryLoad, identityStability, contactConsistency, rolloutPlausibility, drift, readiness };
}

export function chooseRolloutMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreRolloutCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function rolloutDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.identityStability >= 60 && metrics.contactConsistency >= 58 && metrics.drift <= 42) return "release";
  if (metrics.readiness >= 54 && metrics.identityStability >= 48 && metrics.drift <= 64) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseRolloutMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      rolloutLength: scenario.rolloutLength,
      identityDensity: scenario.identityDensity,
      physicsViolations: scenario.physicsViolations,
      memoryWindow: scenario.memoryWindow
    },
    metrics,
    decision: rolloutDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.drift <= 42,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const maxDrift = Math.max(...caseRows.map((row) => row.metrics.drift));
  const minIdentityStability = Math.min(...caseRows.map((row) => row.metrics.identityStability));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    maxDrift: Number(maxDrift.toFixed(1)),
    minIdentityStability: Number(minIdentityStability.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}

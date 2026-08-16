export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreServingCase(input, stageEvidence = { token: 72.4, quantized: 75.4, routing: 78.4, evidenceDepth: 37.7 }) {
  const tokens = clamp(input.tokenBudget);
  const quant = clamp(input.quantizationLevel);
  const routing = clamp(input.studentRouting);
  const escalation = clamp(input.escalationCost);
  const latency = clamp(98 - tokens * 0.34 - quant * 0.28 - routing * 0.18 + escalation * 0.12);
  const retainedEvidence = clamp(stageEvidence.evidenceDepth * 0.34 + tokens * 0.38 + (100 - quant) * 0.16 + stageEvidence.token * 0.12);
  const qualityFloor = clamp(stageEvidence.quantized * 0.30 + retainedEvidence * 0.34 + (100 - quant) * 0.22 + (100 - routing) * 0.14);
  const escalationRate = clamp((100 - qualityFloor) * 0.36 + routing * 0.32 + escalation * 0.22 + (100 - tokens) * 0.10);
  const costSaving = clamp((100 - latency) * 0.40 + quant * 0.24 + routing * 0.22 + (100 - escalationRate) * 0.14);
  const risk = clamp((100 - retainedEvidence) * 0.30 + (100 - qualityFloor) * 0.34 + escalationRate * 0.20 + quant * 0.16);
  const readiness = clamp(costSaving * 0.24 + retainedEvidence * 0.30 + qualityFloor * 0.30 + (100 - risk) * 0.16);
  return { latency, retainedEvidence, qualityFloor, escalationRate, costSaving, risk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "compute-serving" || result.mode !== "cached-real") return null;
  const latency = clamp(result.metrics.latency);
  const retainedEvidence = clamp(result.metrics.retainedEvidence);
  const qualityFloor = clamp(result.metrics.qualityFloor);
  const escalationRate = clamp(result.metrics.escalationRate);
  const costSaving = clamp(result.metrics.costSaving);
  const risk = clamp(result.metrics.risk);
  const readiness = clamp(result.metrics.readiness);
  return { latency, retainedEvidence, qualityFloor, escalationRate, costSaving, risk, readiness };
}

export function chooseServingMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreServingCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function servingDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.retainedEvidence >= 55 && metrics.qualityFloor >= 58 && metrics.risk <= 42) return "release";
  if (metrics.readiness >= 54 && metrics.retainedEvidence >= 45 && metrics.risk <= 62) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseServingMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      tokenBudget: scenario.tokenBudget,
      quantizationLevel: scenario.quantizationLevel,
      studentRouting: scenario.studentRouting,
      escalationCost: scenario.escalationCost
    },
    metrics,
    decision: servingDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.retainedEvidence >= 55,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minEvidence = Math.min(...caseRows.map((row) => row.metrics.retainedEvidence));
  const maxLatency = Math.max(...caseRows.map((row) => row.metrics.latency));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minRetainedEvidence: Number(minEvidence.toFixed(1)),
    maxLatency: Number(maxLatency.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}

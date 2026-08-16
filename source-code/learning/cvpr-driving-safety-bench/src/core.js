export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function timeToCollision(actorSpeed, hazardDensity) {
  const speed = clamp(actorSpeed);
  const hazard = clamp(hazardDensity);
  return Number(clamp(8.2 - speed * 0.045 - hazard * 0.026, 0.6, 8.5).toFixed(2));
}

export function scoreSafetyCase(input, stageEvidence = 56.2) {
  const hazard = clamp(input.hazardDensity);
  const speed = clamp(input.actorSpeed);
  const occlusion = clamp(input.occlusion);
  const confidence = clamp(input.actionConfidence);
  const ttc = timeToCollision(speed, hazard);
  const sceneGrounding = clamp(stageEvidence * 0.42 + (100 - occlusion) * 0.25 + confidence * 0.22 + (100 - hazard) * 0.11);
  const risk = clamp(hazard * 0.32 + speed * 0.24 + occlusion * 0.29 + (100 - confidence) * 0.31 + (3.2 - Math.min(ttc, 3.2)) * 9);
  const ruleViolation = clamp(risk * 0.58 + (100 - sceneGrounding) * 0.32 + (confidence > 72 && ttc < 2.4 ? 12 : 0));
  const abstention = clamp(risk * 0.55 + (100 - sceneGrounding) * 0.28 - confidence * 0.18);
  const readiness = clamp(sceneGrounding * 0.36 + (100 - risk) * 0.34 + (100 - ruleViolation) * 0.18 + abstention * 0.12);
  return {
    sceneGrounding,
    timeToCollision: ttc,
    risk,
    ruleViolation,
    abstention,
    readiness
  };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "driving-safety" || result.mode !== "cached-real") return null;
  const sceneGrounding = clamp(result.metrics.sceneGrounding);
  const timeToCollision = Number(Math.max(0, Number(result.metrics.timeToCollision)).toFixed(2));
  const risk = clamp(result.metrics.risk);
  const ruleViolation = clamp(result.metrics.ruleViolation);
  const abstention = clamp(result.metrics.abstention);
  const readiness = clamp(result.metrics.readiness);
  return { sceneGrounding, timeToCollision, risk, ruleViolation, abstention, readiness };
}

export function chooseSafetyMetrics(scenario, stageEvidence = 56.2, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreSafetyCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function releaseDecision(metrics) {
  if (metrics.risk <= 35 && metrics.sceneGrounding >= 62 && metrics.ruleViolation <= 30 && metrics.readiness >= 62) return "release";
  if (metrics.risk <= 52 && metrics.sceneGrounding >= 48 && metrics.ruleViolation <= 48) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence = 56.2, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseSafetyMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      hazardDensity: scenario.hazardDensity,
      actorSpeed: scenario.actorSpeed,
      occlusion: scenario.occlusion,
      actionConfidence: scenario.actionConfidence
    },
    metrics,
    decision: releaseDecision(metrics),
    acceptancePass: metrics.readiness >= 62 && metrics.risk < 35,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence = 56.2, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const maxRisk = Math.max(...caseRows.map((row) => row.metrics.risk));
  const minTtc = Math.min(...caseRows.map((row) => row.metrics.timeToCollision));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    maxRisk: Number(maxRisk.toFixed(1)),
    minTimeToCollision: Number(minTtc.toFixed(2)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}

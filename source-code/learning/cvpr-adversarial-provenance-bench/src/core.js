export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreProvenanceCase(input, stageEvidence = { attack: 62.7, provenance: 65.7, unlearning: 68.7, evidenceDepth: 36.7 }) {
  const attack = clamp(input.attackStrength);
  const generated = clamp(input.generationSource);
  const watermark = clamp(input.watermarkVisibility);
  const unlearning = clamp(input.unlearningProbe);
  const evidenceBase = Number(stageEvidence.evidenceDepth ?? 36.7);
  const attackCoverage = clamp(stageEvidence.attack * 0.38 + attack * 0.22 + generated * 0.16 + (100 - watermark) * 0.14 + unlearning * 0.10);
  const provenanceConfidence = clamp(stageEvidence.provenance * 0.36 + generated * 0.26 + watermark * 0.28 + (100 - attack) * 0.10);
  const leakageRisk = clamp(unlearning * 0.42 + attack * 0.26 + generated * 0.16 + (100 - watermark) * 0.16);
  const evidence = clamp(evidenceBase * 0.42 + provenanceConfidence * 0.30 + attackCoverage * 0.18 + (100 - leakageRisk) * 0.10);
  const risk = clamp(attack * 0.34 + generated * 0.20 + leakageRisk * 0.28 + (100 - evidence) * 0.24);
  const readiness = clamp(evidence * 0.42 + provenanceConfidence * 0.26 + (100 - risk) * 0.22 + attackCoverage * 0.10);
  return { attackCoverage, provenanceConfidence, leakageRisk, evidence, risk, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "adversarial-provenance" || result.mode !== "cached-real") return null;
  const attackCoverage = clamp(result.metrics.attackCoverage);
  const provenanceConfidence = clamp(result.metrics.provenanceConfidence);
  const leakageRisk = clamp(result.metrics.leakageRisk);
  const evidence = clamp(result.metrics.evidence);
  const risk = clamp(result.metrics.risk);
  const readiness = clamp(result.metrics.readiness);
  return { attackCoverage, provenanceConfidence, leakageRisk, evidence, risk, readiness };
}

export function chooseProvenanceMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreProvenanceCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function provenanceDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.evidence >= 50 && metrics.risk <= 38 && metrics.leakageRisk <= 45) return "release";
  if (metrics.readiness >= 50 && metrics.evidence >= 42 && metrics.risk <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseProvenanceMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      attackStrength: scenario.attackStrength,
      generationSource: scenario.generationSource,
      watermarkVisibility: scenario.watermarkVisibility,
      unlearningProbe: scenario.unlearningProbe
    },
    metrics,
    decision: provenanceDecision(metrics),
    acceptancePass: metrics.readiness >= 62 && metrics.evidence >= 50,
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const minEvidence = Math.min(...caseRows.map((row) => row.metrics.evidence));
  const maxLeakage = Math.max(...caseRows.map((row) => row.metrics.leakageRisk));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minEvidence: Number(minEvidence.toFixed(1)),
    maxLeakageRisk: Number(maxLeakage.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}

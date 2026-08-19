export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreClinicalCase(input, stageEvidence = { domain: 65.8, triage: 68.8, clinical: 71.8, evidenceDepth: 40.6 }) {
  const scanner = clamp(input.scannerShift);
  const cohort = clamp(input.cohortMix);
  const noise = clamp(input.labelNoise);
  const review = clamp(input.reviewThreshold);
  const shiftLoad = clamp(scanner * 0.42 + cohort * 0.38 + noise * 0.20);
  const calibration = clamp(stageEvidence.triage * 0.36 + (100 - shiftLoad) * 0.28 + review * 0.20 + (100 - noise) * 0.16);
  const domainEvidence = clamp(stageEvidence.domain * 0.38 + stageEvidence.evidenceDepth * 0.24 + (100 - scanner) * 0.20 + (100 - cohort) * 0.18);
  const triageRate = clamp(shiftLoad * 0.45 + (100 - calibration) * 0.35 + review * 0.20);
  const residualRisk = clamp(shiftLoad * 0.38 + noise * 0.26 + (100 - calibration) * 0.24 + (100 - domainEvidence) * 0.18 - triageRate * 0.18);
  const clinicalEvidence = clamp(stageEvidence.clinical * 0.42 + domainEvidence * 0.28 + calibration * 0.20 + (100 - residualRisk) * 0.10);
  const readiness = clamp(clinicalEvidence * 0.36 + calibration * 0.26 + domainEvidence * 0.22 + (100 - residualRisk) * 0.16);
  return { shiftLoad, calibration, domainEvidence, triageRate, residualRisk, clinicalEvidence, readiness };
}

export function normalizeCachedGpuResult(result) {
  if (!result || result.jobId !== "clinical-shift" || result.mode !== "cached-real") return null;
  const shiftLoad = clamp(result.metrics.shiftLoad ?? result.metrics.shiftScore);
  const calibration = clamp(result.metrics.calibration);
  const domainEvidence = clamp(result.metrics.domainEvidence ?? (100 - shiftLoad * 0.45));
  const triageRate = clamp(result.metrics.triageRate ?? result.metrics.escalationThreshold);
  const residualRisk = clamp(result.metrics.residualRisk ?? result.metrics.falseClearRisk);
  const clinicalEvidence = clamp(
    result.metrics.clinicalEvidence
    ?? (result.metrics.readiness * 0.52 + calibration * 0.24 + (100 - residualRisk) * 0.24)
  );
  const readiness = clamp(result.metrics.readiness);
  return { shiftLoad, calibration, domainEvidence, triageRate, residualRisk, clinicalEvidence, readiness };
}

export function chooseClinicalMetrics(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  if (runtimeMode === "cached-real") {
    const cached = cachedResults.find((result) => result.caseId === scenario.id);
    const metrics = normalizeCachedGpuResult(cached);
    if (metrics) return { metrics, runtimeMode: "cached-real", provenance: cached.provenance };
  }
  return { metrics: scoreClinicalCase(scenario, stageEvidence), runtimeMode: "simulated", provenance: null };
}

export function clinicalDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.clinicalEvidence >= 56 && metrics.residualRisk <= 38 && metrics.calibration >= 58) return "release";
  if (metrics.readiness >= 50 && metrics.clinicalEvidence >= 48 && metrics.residualRisk <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const selected = chooseClinicalMetrics(scenario, stageEvidence, cachedResults, runtimeMode);
  const metrics = selected.metrics;
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      scannerShift: scenario.scannerShift,
      cohortMix: scenario.cohortMix,
      labelNoise: scenario.labelNoise,
      reviewThreshold: scenario.reviewThreshold
    },
    metrics,
    decision: clinicalDecision(metrics),
    acceptancePass: metrics.readiness >= 62 && clinicalDecision(metrics) !== "block",
    runtimeMode: selected.runtimeMode,
    provenance: selected.provenance
  };
}

export function summarizeBench(scenarios, stageEvidence, cachedResults = [], runtimeMode = "simulated") {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence, cachedResults, runtimeMode));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  const maxRisk = Math.max(...caseRows.map((row) => row.metrics.residualRisk));
  const minEvidence = Math.min(...caseRows.map((row) => row.metrics.clinicalEvidence));
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    maxResidualRisk: Number(maxRisk.toFixed(1)),
    minClinicalEvidence: Number(minEvidence.toFixed(1)),
    acceptancePass: caseRows.some((row) => row.acceptancePass),
    noBlock: caseRows.every((row) => row.decision !== "block"),
    cachedRealCases: caseRows.filter((row) => row.runtimeMode === "cached-real").length,
    caseRows
  };
}

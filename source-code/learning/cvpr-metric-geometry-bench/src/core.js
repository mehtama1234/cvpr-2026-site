export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGeometryCase(input, stageEvidence = { camera: 94, scale: 94, surface: 94, evidenceDepth: 94 }) {
  const baseline = clamp(input.baseline);
  const texture = clamp(input.textureSparsity);
  const ambiguity = clamp(input.scaleAmbiguity);
  const complexity = clamp(input.surfaceComplexity);
  const poseEvidence = clamp(stageEvidence.camera * 0.34 + baseline * 0.28 + (100 - texture) * 0.18 + stageEvidence.evidenceDepth * 0.12 + (100 - ambiguity) * 0.08);
  const metricEvidence = clamp(stageEvidence.scale * 0.36 + poseEvidence * 0.22 + (100 - ambiguity) * 0.24 + baseline * 0.10 + stageEvidence.evidenceDepth * 0.08);
  const surfaceConsistency = clamp(stageEvidence.surface * 0.34 + poseEvidence * 0.18 + metricEvidence * 0.18 + (100 - complexity) * 0.20 + (100 - texture) * 0.10);
  const scaleDrift = clamp((100 - metricEvidence) * 0.38 + ambiguity * 0.24 + texture * 0.14 + complexity * 0.12 - baseline * 0.10);
  const topologyRisk = clamp((100 - surfaceConsistency) * 0.40 + complexity * 0.26 + texture * 0.14 + ambiguity * 0.10 - poseEvidence * 0.10);
  const readiness = clamp(poseEvidence * 0.26 + metricEvidence * 0.30 + surfaceConsistency * 0.26 + (100 - Math.max(scaleDrift, topologyRisk)) * 0.18);
  return { poseEvidence, metricEvidence, surfaceConsistency, scaleDrift, topologyRisk, readiness };
}

export function geometryDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.poseEvidence >= 60 && metrics.metricEvidence >= 60 && metrics.scaleDrift <= 35 && metrics.topologyRisk <= 38) return "release";
  if (metrics.readiness >= 54 && metrics.metricEvidence >= 48 && metrics.scaleDrift <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence) {
  const metrics = scoreGeometryCase(scenario, stageEvidence);
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      baseline: scenario.baseline,
      textureSparsity: scenario.textureSparsity,
      scaleAmbiguity: scenario.scaleAmbiguity,
      surfaceComplexity: scenario.surfaceComplexity
    },
    metrics,
    decision: geometryDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.scaleDrift <= 35 && metrics.topologyRisk <= 38,
    runtimeMode: "cached-system-evidence",
    provenance: {
      sourceSystem: "metric-3d-reconstruction",
      evidence: "source-code/learning/metric-3d-reconstruction/_results/*.json"
    }
  };
}

export function summarizeBench(scenarios, stageEvidence) {
  const caseRows = scenarios.map((scenario) => evaluateScenario(scenario, stageEvidence));
  const avgReadiness = caseRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / caseRows.length;
  return {
    cases: caseRows.length,
    release: caseRows.filter((row) => row.decision === "release").length,
    review: caseRows.filter((row) => row.decision === "review").length,
    block: caseRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minPoseEvidence: Number(Math.min(...caseRows.map((row) => row.metrics.poseEvidence)).toFixed(1)),
    minMetricEvidence: Number(Math.min(...caseRows.map((row) => row.metrics.metricEvidence)).toFixed(1)),
    minSurfaceConsistency: Number(Math.min(...caseRows.map((row) => row.metrics.surfaceConsistency)).toFixed(1)),
    maxScaleDrift: Number(Math.max(...caseRows.map((row) => row.metrics.scaleDrift)).toFixed(1)),
    maxTopologyRisk: Number(Math.max(...caseRows.map((row) => row.metrics.topologyRisk)).toFixed(1)),
    acceptancePass: caseRows.every((row) => row.acceptancePass),
    caseRows
  };
}

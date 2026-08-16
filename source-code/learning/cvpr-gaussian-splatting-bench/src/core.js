export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreSplatCase(input, stageEvidence = { fit: 94, semantic: 94, provenance: 94, evidenceDepth: 94 }) {
  const views = clamp(input.viewCount);
  const density = clamp(input.splatDensity);
  const entropy = clamp(input.semanticEntropy);
  const provenance = clamp(input.provenanceVisibility);
  const renderFidelity = clamp(stageEvidence.fit * 0.34 + views * 0.22 + density * 0.24 + (100 - entropy) * 0.10 + stageEvidence.evidenceDepth * 0.10);
  const semanticAttachment = clamp(stageEvidence.semantic * 0.36 + renderFidelity * 0.18 + (100 - entropy) * 0.24 + density * 0.12 + stageEvidence.evidenceDepth * 0.10);
  const provenanceTrace = clamp(stageEvidence.provenance * 0.38 + provenance * 0.28 + semanticAttachment * 0.14 + renderFidelity * 0.10 + stageEvidence.evidenceDepth * 0.10);
  const viewInstability = clamp((100 - renderFidelity) * 0.34 + (100 - views) * 0.22 + (100 - density) * 0.18 + entropy * 0.14 - provenance * 0.08);
  const editLeakageRisk = clamp((100 - semanticAttachment) * 0.34 + entropy * 0.28 + (100 - provenanceTrace) * 0.22 + (100 - density) * 0.10);
  const readiness = clamp(renderFidelity * 0.28 + semanticAttachment * 0.26 + provenanceTrace * 0.24 + (100 - Math.max(viewInstability, editLeakageRisk)) * 0.22);
  return { renderFidelity, semanticAttachment, provenanceTrace, viewInstability, editLeakageRisk, readiness };
}

export function splatDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.renderFidelity >= 62 && metrics.semanticAttachment >= 62 && metrics.provenanceTrace >= 62 && metrics.viewInstability <= 35 && metrics.editLeakageRisk <= 35) return "release";
  if (metrics.readiness >= 54 && metrics.renderFidelity >= 50 && metrics.editLeakageRisk <= 58) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence) {
  const metrics = scoreSplatCase(scenario, stageEvidence);
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      viewCount: scenario.viewCount,
      splatDensity: scenario.splatDensity,
      semanticEntropy: scenario.semanticEntropy,
      provenanceVisibility: scenario.provenanceVisibility
    },
    metrics,
    decision: splatDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.viewInstability <= 35 && metrics.editLeakageRisk <= 35,
    runtimeMode: "cached-system-evidence",
    provenance: {
      sourceSystem: "gaussian-splatting-platform",
      evidence: "source-code/learning/gaussian-splatting-platform/_results/*.json"
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
    minRenderFidelity: Number(Math.min(...caseRows.map((row) => row.metrics.renderFidelity)).toFixed(1)),
    minSemanticAttachment: Number(Math.min(...caseRows.map((row) => row.metrics.semanticAttachment)).toFixed(1)),
    minProvenanceTrace: Number(Math.min(...caseRows.map((row) => row.metrics.provenanceTrace)).toFixed(1)),
    maxViewInstability: Number(Math.max(...caseRows.map((row) => row.metrics.viewInstability)).toFixed(1)),
    maxEditLeakageRisk: Number(Math.max(...caseRows.map((row) => row.metrics.editLeakageRisk)).toFixed(1)),
    acceptancePass: caseRows.every((row) => row.acceptancePass),
    caseRows
  };
}

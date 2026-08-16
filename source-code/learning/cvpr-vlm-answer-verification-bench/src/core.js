export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreAnswerCase(input, stageEvidence = { look: 94, hallucination: 94, tools: 94, evidenceDepth: 94 }) {
  const complexity = clamp(input.questionComplexity);
  const prior = clamp(input.priorPressure);
  const toolNeed = clamp(input.toolNeed);
  const threshold = clamp(input.evidenceThreshold);
  const visualCitation = clamp(stageEvidence.look * 0.34 + threshold * 0.24 + (100 - prior) * 0.18 + stageEvidence.evidenceDepth * 0.14 + (100 - complexity) * 0.10);
  const toolAgreement = clamp(stageEvidence.tools * 0.36 + threshold * 0.22 + toolNeed * 0.16 + visualCitation * 0.16 + (100 - complexity) * 0.10);
  const contradictionCatch = clamp(stageEvidence.hallucination * 0.38 + threshold * 0.20 + prior * 0.16 + toolAgreement * 0.16 + stageEvidence.evidenceDepth * 0.10);
  const unsupportedClaimRisk = clamp((100 - contradictionCatch) * 0.36 + prior * 0.28 + complexity * 0.18 + toolNeed * 0.12 - threshold * 0.20);
  const readiness = clamp(visualCitation * 0.28 + toolAgreement * 0.26 + contradictionCatch * 0.24 + (100 - unsupportedClaimRisk) * 0.22);
  return { visualCitation, toolAgreement, contradictionCatch, unsupportedClaimRisk, readiness };
}

export function answerDecision(metrics) {
  if (metrics.readiness >= 68 && metrics.visualCitation >= 60 && metrics.toolAgreement >= 60 && metrics.unsupportedClaimRisk <= 35) return "release";
  if (metrics.readiness >= 54 && metrics.visualCitation >= 48 && metrics.unsupportedClaimRisk <= 56) return "review";
  return "block";
}

export function evaluateScenario(scenario, stageEvidence) {
  const metrics = scoreAnswerCase(scenario, stageEvidence);
  return {
    id: scenario.id,
    title: scenario.title,
    controls: {
      questionComplexity: scenario.questionComplexity,
      priorPressure: scenario.priorPressure,
      toolNeed: scenario.toolNeed,
      evidenceThreshold: scenario.evidenceThreshold
    },
    metrics,
    decision: answerDecision(metrics),
    acceptancePass: metrics.readiness >= 68 && metrics.unsupportedClaimRisk <= 35,
    runtimeMode: "cached-system-evidence",
    provenance: {
      sourceSystem: "vlm-grounded-reasoning",
      evidence: "source-code/learning/vlm-grounded-reasoning/_results/*.json"
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
    minVisualCitation: Number(Math.min(...caseRows.map((row) => row.metrics.visualCitation)).toFixed(1)),
    minToolAgreement: Number(Math.min(...caseRows.map((row) => row.metrics.toolAgreement)).toFixed(1)),
    maxUnsupportedClaimRisk: Number(Math.max(...caseRows.map((row) => row.metrics.unsupportedClaimRisk)).toFixed(1)),
    acceptancePass: caseRows.every((row) => row.acceptancePass),
    caseRows
  };
}

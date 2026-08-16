export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreCourtroomCase(controls, stageEvidence) {
  const complexity = clamp(controls.questionComplexity);
  const prior = clamp(controls.priorPressure);
  const toolNeed = clamp(controls.toolNeed);
  const threshold = clamp(controls.evidenceThreshold);
  const visualCitation = clamp(stageEvidence.look * 0.34 + threshold * 0.24 + (100 - prior) * 0.18 + stageEvidence.evidenceDepth * 0.14 + (100 - complexity) * 0.10);
  const toolAgreement = clamp(stageEvidence.tools * 0.36 + threshold * 0.22 + toolNeed * 0.16 + visualCitation * 0.16 + (100 - complexity) * 0.10);
  const contradictionCatch = clamp(stageEvidence.hallucination * 0.38 + threshold * 0.20 + prior * 0.16 + toolAgreement * 0.16 + stageEvidence.evidenceDepth * 0.10);
  const unsupportedClaimRisk = clamp((100 - contradictionCatch) * 0.36 + prior * 0.28 + complexity * 0.18 + toolNeed * 0.12 - threshold * 0.20);
  const readiness = clamp(visualCitation * 0.28 + toolAgreement * 0.26 + contradictionCatch * 0.24 + (100 - unsupportedClaimRisk) * 0.22);
  return { visualCitation, toolAgreement, contradictionCatch, unsupportedClaimRisk, readiness };
}

export function applyProbe(record, probe) {
  const c = record.controls;
  return {
    questionComplexity: clamp(c.questionComplexity + probe.complexityShift),
    priorPressure: clamp(c.priorPressure + probe.priorShift),
    toolNeed: clamp(c.toolNeed + probe.toolShift),
    evidenceThreshold: clamp(c.evidenceThreshold + probe.thresholdShift)
  };
}

export function verdict(metrics) {
  if (metrics.readiness >= 68 && metrics.visualCitation >= 60 && metrics.toolAgreement >= 60 && metrics.unsupportedClaimRisk <= 35) return "admit";
  if (metrics.readiness >= 54 && metrics.visualCitation >= 48 && metrics.unsupportedClaimRisk <= 56) return "cross-examine";
  return "sustain-objection";
}

export function evaluateProbe(record, probe, stageEvidence) {
  const controls = applyProbe(record, probe);
  const metrics = scoreCourtroomCase(controls, stageEvidence);
  return {
    id: `${record.id}/${probe.id}`,
    caseId: record.id,
    probeId: probe.id,
    caseTitle: record.title,
    probeTitle: probe.title,
    controls,
    metrics,
    citationDelta: metrics.visualCitation - record.metrics.visualCitation,
    riskDelta: metrics.unsupportedClaimRisk - record.metrics.unsupportedClaimRisk,
    verdict: verdict(metrics)
  };
}

export function summarizeCourtroom(records, probes, stageEvidence) {
  const rows = records.flatMap((record) => probes.map((probe) => evaluateProbe(record, probe, stageEvidence)));
  const maxUnsupportedClaimRisk = Math.max(...rows.map((row) => row.metrics.unsupportedClaimRisk));
  const minVisualCitation = Math.min(...rows.map((row) => row.metrics.visualCitation));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.readiness, 0) / rows.length;
  return {
    cases: records.length,
    probes: probes.length,
    courtroomRows: rows.length,
    admit: rows.filter((row) => row.verdict === "admit").length,
    crossExamine: rows.filter((row) => row.verdict === "cross-examine").length,
    sustainObjection: rows.filter((row) => row.verdict === "sustain-objection").length,
    maxUnsupportedClaimRisk: Number(maxUnsupportedClaimRisk.toFixed(1)),
    minVisualCitation: Number(minVisualCitation.toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}

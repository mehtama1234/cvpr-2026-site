export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGroundingProbe(controls, stageEvidence) {
  const rarity = clamp(controls.queryRarity);
  const distractor = clamp(controls.distractorOverlap);
  const ambiguity = clamp(controls.boxAmbiguity);
  const threshold = clamp(controls.evidenceThreshold);
  const proposalRecall = clamp(stageEvidence.retrieval * 0.34 + (100 - ambiguity) * 0.25 + (100 - distractor) * 0.20 + (100 - rarity) * 0.08 + threshold * 0.13);
  const textRegionScore = clamp(stageEvidence.grounding * 0.36 + proposalRecall * 0.24 + (100 - distractor) * 0.18 + threshold * 0.12 + stageEvidence.evidenceDepth * 0.10);
  const longTailRecall = clamp(stageEvidence.retrieval * 0.32 + rarity * 0.18 + proposalRecall * 0.22 + (100 - ambiguity) * 0.18 + threshold * 0.10);
  const localizedEvidence = clamp(stageEvidence.inspection * 0.30 + textRegionScore * 0.28 + proposalRecall * 0.22 + stageEvidence.evidenceDepth * 0.20);
  const unsupportedRisk = clamp((100 - localizedEvidence) * 0.34 + distractor * 0.24 + ambiguity * 0.22 + rarity * 0.12 - threshold * 0.10);
  const readiness = clamp(localizedEvidence * 0.34 + textRegionScore * 0.24 + longTailRecall * 0.22 + (100 - unsupportedRisk) * 0.20);
  return { proposalRecall, textRegionScore, longTailRecall, localizedEvidence, unsupportedRisk, readiness };
}

export function applyProbe(record, probe) {
  const c = record.controls;
  return {
    queryRarity: clamp(c.queryRarity + probe.rarityShift),
    distractorOverlap: clamp(c.distractorOverlap + probe.distractorShift),
    boxAmbiguity: clamp(c.boxAmbiguity + probe.ambiguityShift),
    evidenceThreshold: clamp(c.evidenceThreshold + probe.thresholdShift)
  };
}

export function failureLevel(metrics) {
  if (metrics.localizedEvidence < 55 || metrics.unsupportedRisk > 36) return "hunt";
  if (metrics.localizedEvidence < 70 || metrics.unsupportedRisk > 26) return "watch";
  return "clear";
}

export function evaluateProbe(record, probe, stageEvidence) {
  const controls = applyProbe(record, probe);
  const metrics = scoreGroundingProbe(controls, stageEvidence);
  return {
    id: `${record.id}/${probe.id}`,
    caseId: record.id,
    probeId: probe.id,
    caseTitle: record.title,
    probeTitle: probe.title,
    controls,
    metrics,
    evidenceDelta: metrics.localizedEvidence - record.metrics.localizedEvidence,
    riskDelta: metrics.unsupportedRisk - record.metrics.unsupportedRisk,
    failureLevel: failureLevel(metrics)
  };
}

export function summarizeFailureHunt(records, probes, stageEvidence) {
  const rows = records.flatMap((record) => probes.map((probe) => evaluateProbe(record, probe, stageEvidence)));
  const minLocalizedEvidence = Math.min(...rows.map((row) => row.metrics.localizedEvidence));
  const maxUnsupportedRisk = Math.max(...rows.map((row) => row.metrics.unsupportedRisk));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.readiness, 0) / rows.length;
  return {
    cases: records.length,
    probes: probes.length,
    probeRows: rows.length,
    clear: rows.filter((row) => row.failureLevel === "clear").length,
    watch: rows.filter((row) => row.failureLevel === "watch").length,
    hunt: rows.filter((row) => row.failureLevel === "hunt").length,
    minLocalizedEvidence: Number(minLocalizedEvidence.toFixed(1)),
    maxUnsupportedRisk: Number(maxUnsupportedRisk.toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}

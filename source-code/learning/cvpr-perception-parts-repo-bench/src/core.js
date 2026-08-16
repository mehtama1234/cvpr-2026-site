export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreBench(row, controls = {}) {
  const boundaryDetail = clamp(controls.boundaryDetail ?? row.boundaryDetail);
  const labelNoise = clamp(controls.labelNoise ?? row.labelNoise);
  const domainDistortion = clamp(controls.domainDistortion ?? row.domainDistortion);
  const backgroundReliance = clamp(controls.backgroundReliance ?? row.backgroundReliance);
  const fewShotPressure = clamp(controls.fewShotPressure ?? row.fewShotPressure);
  const openVocabAmbiguity = clamp(controls.openVocabAmbiguity ?? row.openVocabAmbiguity);
  const localizationRisk = clamp(boundaryDetail * 0.24 + labelNoise * 0.22 + domainDistortion * 0.20 + backgroundReliance * 0.16 + openVocabAmbiguity * 0.18);
  const adaptationRisk = clamp(labelNoise * 0.26 + domainDistortion * 0.28 + fewShotPressure * 0.22 + openVocabAmbiguity * 0.14 + backgroundReliance * 0.10);
  const evidenceNeed = clamp(boundaryDetail * 0.28 + backgroundReliance * 0.24 + fewShotPressure * 0.20 + labelNoise * 0.18 + openVocabAmbiguity * 0.10);
  const readiness = clamp(100 - localizationRisk * 0.38 - adaptationRisk * 0.30 - evidenceNeed * 0.22);
  return { boundaryDetail, labelNoise, domainDistortion, backgroundReliance, fewShotPressure, openVocabAmbiguity, localizationRisk: Number(localizationRisk.toFixed(1)), adaptationRisk: Number(adaptationRisk.toFixed(1)), evidenceNeed: Number(evidenceNeed.toFixed(1)), readiness: Number(readiness.toFixed(1)) };
}

export function benchDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.localizationRisk <= 42 && metrics.adaptationRisk <= 48) return "release";
  if (metrics.readiness >= 44 && metrics.localizationRisk <= 70) return "review";
  return "block";
}

export function evaluateCase(row, paper, controls = {}) {
  const metrics = scoreBench(row, controls);
  return { id: row.id, title: row.title, paperTitle: paper.title, repo: paper.repo, tags: paper.tags, metrics, decision: benchDecision(metrics), operatorAction: row.operatorAction };
}

export function summarizeBench(rows) {
  return {
    cases: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length,
    maxLocalizationRisk: Number(Math.max(...rows.map((row) => row.metrics.localizationRisk)).toFixed(1)),
    maxAdaptationRisk: Number(Math.max(...rows.map((row) => row.metrics.adaptationRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1))
  };
}

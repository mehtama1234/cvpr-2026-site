export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreFusion(row, controls = {}) {
  const modalityGap = clamp(controls.modalityGap ?? row.modalityGap);
  const visibilityLoss = clamp(controls.visibilityLoss ?? row.visibilityLoss);
  const geoScale = clamp(controls.geoScale ?? row.geoScale);
  const languageGrounding = clamp(controls.languageGrounding ?? row.languageGrounding);
  const watermarkAttack = clamp(controls.watermarkAttack ?? row.watermarkAttack);
  const provenanceNeed = clamp(controls.provenanceNeed ?? row.provenanceNeed);
  const fusionRisk = clamp(modalityGap * 0.30 + visibilityLoss * 0.20 + geoScale * 0.14 + languageGrounding * 0.16 + provenanceNeed * 0.10 + watermarkAttack * 0.10);
  const groundingRisk = clamp(languageGrounding * 0.32 + geoScale * 0.26 + visibilityLoss * 0.14 + modalityGap * 0.12 + provenanceNeed * 0.16);
  const provenanceRisk = clamp(watermarkAttack * 0.55 + provenanceNeed * 0.32 + modalityGap * 0.08 + visibilityLoss * 0.03 + languageGrounding * 0.02);
  const readiness = clamp(100 - fusionRisk * 0.38 - groundingRisk * 0.30 - provenanceRisk * 0.34);
  return { modalityGap, visibilityLoss, geoScale, languageGrounding, watermarkAttack, provenanceNeed, fusionRisk: Number(fusionRisk.toFixed(1)), groundingRisk: Number(groundingRisk.toFixed(1)), provenanceRisk: Number(provenanceRisk.toFixed(1)), readiness: Number(readiness.toFixed(1)) };
}

export function fusionDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.fusionRisk <= 45 && metrics.provenanceRisk <= 45) return "release";
  if (metrics.readiness >= 42 && metrics.provenanceRisk <= 78) return "review";
  return "block";
}

export function evaluateCase(row, paper, controls = {}) {
  const metrics = scoreFusion(row, controls);
  return { id: row.id, title: row.title, paperTitle: paper.title, repo: paper.repo, tags: paper.tags, metrics, decision: fusionDecision(metrics), operatorAction: row.operatorAction };
}

export function summarizeFusion(rows) {
  return {
    cases: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length,
    maxFusionRisk: Number(Math.max(...rows.map((row) => row.metrics.fusionRisk)).toFixed(1)),
    maxProvenanceRisk: Number(Math.max(...rows.map((row) => row.metrics.provenanceRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1))
  };
}

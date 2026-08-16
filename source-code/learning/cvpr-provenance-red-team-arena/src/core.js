export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRedTeam(controls, stageEvidence, clinicalRisk = 20) {
  const attack = clamp(controls.attackStrength);
  const generated = clamp(controls.generationSource);
  const watermark = clamp(controls.watermarkVisibility);
  const unlearning = clamp(controls.unlearningProbe);
  const attackCoverage = clamp(stageEvidence.attack * 0.38 + attack * 0.22 + generated * 0.16 + (100 - watermark) * 0.14 + unlearning * 0.10);
  const provenanceConfidence = clamp(stageEvidence.provenance * 0.36 + generated * 0.26 + watermark * 0.28 + (100 - attack) * 0.10);
  const leakageRisk = clamp(unlearning * 0.42 + attack * 0.26 + generated * 0.16 + (100 - watermark) * 0.16);
  const evidence = clamp(stageEvidence.evidenceDepth * 0.42 + provenanceConfidence * 0.30 + attackCoverage * 0.18 + (100 - leakageRisk) * 0.10);
  const mediaRisk = clamp(attack * 0.34 + generated * 0.20 + leakageRisk * 0.28 + (100 - evidence) * 0.24);
  const deploymentRisk = clamp(mediaRisk * 0.68 + clinicalRisk * 0.32);
  const readiness = clamp(evidence * 0.38 + provenanceConfidence * 0.24 + (100 - deploymentRisk) * 0.24 + attackCoverage * 0.14);
  return { attackCoverage, provenanceConfidence, leakageRisk, evidence, mediaRisk, deploymentRisk, readiness };
}

export function applyAttack(record, attack) {
  const c = record.controls;
  return {
    attackStrength: clamp(c.attackStrength + attack.attackShift),
    generationSource: clamp(c.generationSource),
    watermarkVisibility: clamp(c.watermarkVisibility + attack.watermarkShift),
    unlearningProbe: clamp(c.unlearningProbe + attack.unlearningShift)
  };
}

export function arenaDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.evidence >= 50 && metrics.deploymentRisk <= 42 && metrics.leakageRisk <= 48) return "release";
  if (metrics.readiness >= 50 && metrics.evidence >= 42 && metrics.deploymentRisk <= 64) return "review";
  return "block";
}

export function evaluateAttack(record, attack, stageEvidence, clinicalRisk = 20) {
  const controls = applyAttack(record, attack);
  const metrics = scoreRedTeam(controls, stageEvidence, clinicalRisk + attack.clinicalRiskShift);
  return {
    id: `${record.id}/${attack.id}`,
    caseId: record.id,
    attackId: attack.id,
    caseTitle: record.title,
    attackTitle: attack.title,
    controls,
    metrics,
    evidenceDelta: metrics.evidence - record.metrics.evidence,
    riskDelta: metrics.deploymentRisk - record.metrics.risk,
    decision: arenaDecision(metrics)
  };
}

export function summarizeArena(records, attacks, stageEvidence, clinicalRisk = 20) {
  const rows = records.flatMap((record) => attacks.map((attack) => evaluateAttack(record, attack, stageEvidence, clinicalRisk)));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.readiness, 0) / rows.length;
  return {
    cases: records.length,
    attacks: attacks.length,
    arenaRows: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    minEvidence: Number(Math.min(...rows.map((row) => row.metrics.evidence)).toFixed(1)),
    maxDeploymentRisk: Number(Math.max(...rows.map((row) => row.metrics.deploymentRisk)).toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}

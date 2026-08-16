export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function clampTtc(value) {
  return Math.max(0.6, Math.min(8.5, Number(value)));
}

export function applyContext(record, context) {
  const c = record.controls;
  return {
    hazardDensity: clamp(c.hazardDensity + context.hazardShift),
    actorSpeed: clamp(c.actorSpeed + context.speedShift),
    occlusion: clamp(c.occlusion + context.occlusionShift),
    actionConfidence: clamp(c.actionConfidence + context.confidenceShift)
  };
}

export function scoreDeployment(controls, stageEvidence = 56.2, clinicalRisk = 20) {
  const hazard = clamp(controls.hazardDensity);
  const speed = clamp(controls.actorSpeed);
  const occlusion = clamp(controls.occlusion);
  const confidence = clamp(controls.actionConfidence);
  const timeToCollision = clampTtc(8.2 - speed * 0.045 - hazard * 0.026);
  const sceneGrounding = clamp(stageEvidence * 0.42 + (100 - occlusion) * 0.25 + confidence * 0.22 + (100 - hazard) * 0.11);
  const risk = clamp(hazard * 0.32 + speed * 0.24 + occlusion * 0.29 + (100 - confidence) * 0.31 + (3.2 - Math.min(timeToCollision, 3.2)) * 9);
  const ruleViolation = clamp(risk * 0.58 + (100 - sceneGrounding) * 0.32 + (confidence > 72 && timeToCollision < 2.4 ? 12 : 0));
  const abstention = clamp(risk * 0.55 + (100 - sceneGrounding) * 0.28 - confidence * 0.18);
  const readiness = clamp(sceneGrounding * 0.36 + (100 - risk) * 0.34 + (100 - ruleViolation) * 0.18 + abstention * 0.12);
  const deploymentRisk = clamp(risk * 0.68 + clinicalRisk * 0.32);
  const deploymentReadiness = clamp(readiness * 0.70 + (100 - deploymentRisk) * 0.20 + sceneGrounding * 0.10);
  return { sceneGrounding, timeToCollision, risk, ruleViolation, abstention, readiness, deploymentRisk, deploymentReadiness };
}

export function deploymentDecision(metrics) {
  if (metrics.deploymentReadiness >= 62 && metrics.sceneGrounding >= 62 && metrics.deploymentRisk <= 42 && metrics.ruleViolation <= 36) return "release";
  if (metrics.deploymentReadiness >= 50 && metrics.sceneGrounding >= 48 && metrics.deploymentRisk <= 64) return "review";
  return "block";
}

export function evaluateDeployment(record, context, stageEvidence = 56.2, clinicalRisk = 20) {
  const controls = applyContext(record, context);
  const metrics = scoreDeployment(controls, stageEvidence, clinicalRisk + context.clinicalRiskShift);
  return {
    id: `${record.id}/${context.id}`,
    caseId: record.id,
    contextId: context.id,
    caseTitle: record.title,
    contextTitle: context.title,
    controls,
    metrics,
    riskDelta: metrics.deploymentRisk - record.metrics.risk,
    readinessDelta: metrics.deploymentReadiness - record.metrics.readiness,
    decision: deploymentDecision(metrics)
  };
}

export function summarizeDeployment(records, contexts, stageEvidence = 56.2, clinicalRisk = 20) {
  const rows = records.flatMap((record) => contexts.map((context) => evaluateDeployment(record, context, stageEvidence, clinicalRisk)));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.deploymentReadiness, 0) / rows.length;
  return {
    cases: records.length,
    contexts: contexts.length,
    deploymentRows: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    minSceneGrounding: Number(Math.min(...rows.map((row) => row.metrics.sceneGrounding)).toFixed(1)),
    maxDeploymentRisk: Number(Math.max(...rows.map((row) => row.metrics.deploymentRisk)).toFixed(1)),
    avgDeploymentReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}

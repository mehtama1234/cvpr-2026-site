export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function gauntletDecision(metrics) {
  if (metrics.resilience >= 68 && metrics.readiness >= 64 && metrics.risk <= 42 && metrics.evidence >= 60) return "release";
  if (metrics.resilience >= 52 && metrics.readiness >= 48 && metrics.risk <= 66 && metrics.evidence >= 48) return "review";
  return "block";
}

export function patchEffect(action) {
  if (action.priority === "critical") return { readiness: 32, risk: -36, evidence: 18 };
  if (action.family === "evidence-repair") return { readiness: 16, risk: -14, evidence: 24 };
  if (action.family === "readiness-recovery") return { readiness: 28, risk: -12, evidence: 14 };
  if (action.priority === "high") return { readiness: 22, risk: -20, evidence: 16 };
  return { readiness: 14, risk: -12, evidence: 12 };
}

export function recomputeResilience(metrics) {
  return clamp(metrics.readiness * 0.44 + (100 - metrics.risk) * 0.34 + metrics.evidence * 0.22);
}

export function retestAction(action, sourceRow) {
  const effect = patchEffect(action);
  const after = {
    readiness: clamp(sourceRow.metrics.readiness + effect.readiness),
    risk: clamp(sourceRow.metrics.risk + effect.risk),
    evidence: clamp(sourceRow.metrics.evidence + effect.evidence)
  };
  after.resilience = recomputeResilience(after);
  const afterDecision = gauntletDecision(after);
  return {
    id: `${action.id}/retest`,
    actionId: action.id,
    demoId: action.demoId,
    demoTitle: action.demoTitle,
    theme: action.theme,
    page: action.page,
    incidentId: action.incidentId,
    incidentTitle: action.incidentTitle,
    priority: action.priority,
    family: action.family,
    before: sourceRow.metrics,
    beforeDecision: sourceRow.decision,
    effect,
    after,
    afterDecision,
    clearedBlock: sourceRow.decision === "block" && afterDecision !== "block",
    promotedRelease: afterDecision === "release" && sourceRow.decision !== "release",
    acceptanceCheck: `retest ${action.demoId}/${action.incidentId} after ${action.family}`
  };
}

export function summarizeRetests(retestRows) {
  return {
    retestRows: retestRows.length,
    preBlock: retestRows.filter((row) => row.beforeDecision === "block").length,
    postBlock: retestRows.filter((row) => row.afterDecision === "block").length,
    postReview: retestRows.filter((row) => row.afterDecision === "review").length,
    postRelease: retestRows.filter((row) => row.afterDecision === "release").length,
    clearedBlocks: retestRows.filter((row) => row.clearedBlock).length,
    promotedRelease: retestRows.filter((row) => row.promotedRelease).length,
    maxPostRisk: Number(Math.max(...retestRows.map((row) => row.after.risk)).toFixed(1)),
    minPostEvidence: Number(Math.min(...retestRows.map((row) => row.after.evidence)).toFixed(1)),
    avgPostResilience: Number((retestRows.reduce((sum, row) => sum + row.after.resilience, 0) / retestRows.length).toFixed(1))
  };
}

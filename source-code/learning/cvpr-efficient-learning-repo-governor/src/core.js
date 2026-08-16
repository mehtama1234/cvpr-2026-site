export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreGovernor(row, controls = {}) {
  const tokenBudget = clamp(controls.tokenBudget ?? row.tokenBudget);
  const pruneRatio = clamp(controls.pruneRatio ?? row.pruneRatio);
  const edgeMemory = clamp(controls.edgeMemory ?? row.edgeMemory);
  const domainShift = clamp(controls.domainShift ?? row.domainShift);
  const clientDrift = clamp(controls.clientDrift ?? row.clientDrift);
  const adaptBudget = clamp(controls.adaptBudget ?? row.adaptBudget);
  const latencyGain = clamp(pruneRatio * 0.44 + (100 - tokenBudget) * 0.32 + edgeMemory * 0.24);
  const accuracyRisk = clamp(pruneRatio * 0.34 + (100 - tokenBudget) * 0.28 + domainShift * 0.18 + clientDrift * 0.12 - adaptBudget * 0.10);
  const adaptationRisk = clamp(domainShift * 0.30 + clientDrift * 0.36 + (100 - adaptBudget) * 0.18 + pruneRatio * 0.10 + edgeMemory * 0.06);
  const servingCost = clamp(100 - latencyGain * 0.55 - pruneRatio * 0.18 + edgeMemory * 0.22 + adaptBudget * 0.10);
  const readiness = clamp(latencyGain * 0.24 + (100 - accuracyRisk) * 0.34 + (100 - adaptationRisk) * 0.26 + (100 - servingCost) * 0.16);
  return {
    tokenBudget,
    pruneRatio,
    edgeMemory,
    domainShift,
    clientDrift,
    adaptBudget,
    latencyGain: Number(latencyGain.toFixed(1)),
    accuracyRisk: Number(accuracyRisk.toFixed(1)),
    adaptationRisk: Number(adaptationRisk.toFixed(1)),
    servingCost: Number(servingCost.toFixed(1)),
    readiness: Number(readiness.toFixed(1))
  };
}

export function governorDecision(metrics) {
  if (metrics.readiness >= 66 && metrics.accuracyRisk <= 38 && metrics.adaptationRisk <= 45) return "promote";
  if (metrics.readiness >= 50 && metrics.accuracyRisk <= 62 && metrics.adaptationRisk <= 70) return "canary";
  return "hold";
}

export function evaluateCase(row, paper, controls = {}) {
  const metrics = scoreGovernor(row, controls);
  return {
    id: row.id,
    title: row.title,
    paperTitle: paper.title,
    repo: paper.repo,
    tags: paper.tags,
    metrics,
    decision: governorDecision(metrics),
    operatorAction: row.operatorAction
  };
}

export function summarizeGovernor(rows) {
  return {
    cases: rows.length,
    promote: rows.filter((row) => row.decision === "promote").length,
    canary: rows.filter((row) => row.decision === "canary").length,
    hold: rows.filter((row) => row.decision === "hold").length,
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length,
    maxAccuracyRisk: Number(Math.max(...rows.map((row) => row.metrics.accuracyRisk)).toFixed(1)),
    maxAdaptationRisk: Number(Math.max(...rows.map((row) => row.metrics.adaptationRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1))
  };
}

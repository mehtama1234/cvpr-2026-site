export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreDrill(scenario, controls = {}) {
  const domainShift = clamp(controls.domainShift ?? scenario.domainShift);
  const occlusion = clamp(controls.occlusion ?? scenario.occlusion);
  const latency = clamp(controls.latency ?? scenario.latency);
  const memoryLoss = clamp(controls.memoryLoss ?? scenario.memoryLoss);
  const coordinationLoad = clamp(controls.coordinationLoad ?? scenario.coordinationLoad);
  const rewardSparsity = clamp(controls.rewardSparsity ?? scenario.rewardSparsity);
  const perceptionStress = clamp(occlusion * 0.46 + domainShift * 0.36 + memoryLoss * 0.18);
  const actionStress = clamp(coordinationLoad * 0.42 + latency * 0.26 + rewardSparsity * 0.20 + domainShift * 0.12);
  const transferRisk = clamp(domainShift * 0.34 + occlusion * 0.16 + latency * 0.12 + memoryLoss * 0.16 + coordinationLoad * 0.10 + rewardSparsity * 0.12);
  const monitorNeed = clamp(perceptionStress * 0.30 + actionStress * 0.24 + memoryLoss * 0.22 + rewardSparsity * 0.14 + latency * 0.10);
  const readiness = clamp(100 - transferRisk * 0.48 - monitorNeed * 0.28 - Math.max(0, actionStress - 70) * 0.24);
  return {
    domainShift,
    occlusion,
    latency,
    memoryLoss,
    coordinationLoad,
    rewardSparsity,
    perceptionStress: Number(perceptionStress.toFixed(1)),
    actionStress: Number(actionStress.toFixed(1)),
    transferRisk: Number(transferRisk.toFixed(1)),
    monitorNeed: Number(monitorNeed.toFixed(1)),
    readiness: Number(readiness.toFixed(1))
  };
}

export function drillDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.transferRisk <= 45 && metrics.monitorNeed <= 56) return "promote";
  if (metrics.readiness >= 44 && metrics.transferRisk <= 68) return "shadow";
  return "hold";
}

export function evaluateScenario(scenario, paper, controls = {}) {
  const metrics = scoreDrill(scenario, controls);
  return {
    id: scenario.id,
    title: scenario.title,
    paperTitle: paper.title,
    repo: paper.repo,
    tags: paper.tags,
    metrics,
    decision: drillDecision(metrics),
    operatorAction: scenario.operatorAction
  };
}

export function summarizeDrill(rows) {
  return {
    scenarios: rows.length,
    promote: rows.filter((row) => row.decision === "promote").length,
    shadow: rows.filter((row) => row.decision === "shadow").length,
    hold: rows.filter((row) => row.decision === "hold").length,
    maxTransferRisk: Number(Math.max(...rows.map((row) => row.metrics.transferRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1)),
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length
  };
}

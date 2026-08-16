export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreServingPolicy(controls, stageEvidence) {
  const tokens = clamp(controls.tokenBudget);
  const quant = clamp(controls.quantizationLevel);
  const routing = clamp(controls.studentRouting);
  const escalation = clamp(controls.escalationCost);
  const latency = clamp(98 - tokens * 0.34 - quant * 0.28 - routing * 0.18 + escalation * 0.12);
  const retainedEvidence = clamp(stageEvidence.evidenceDepth * 0.34 + tokens * 0.38 + (100 - quant) * 0.16 + stageEvidence.token * 0.12);
  const qualityFloor = clamp(stageEvidence.quantized * 0.30 + retainedEvidence * 0.34 + (100 - quant) * 0.22 + (100 - routing) * 0.14);
  const escalationRate = clamp((100 - qualityFloor) * 0.36 + routing * 0.32 + escalation * 0.22 + (100 - tokens) * 0.10);
  const costSaving = clamp((100 - latency) * 0.40 + quant * 0.24 + routing * 0.22 + (100 - escalationRate) * 0.14);
  const risk = clamp((100 - retainedEvidence) * 0.30 + (100 - qualityFloor) * 0.34 + escalationRate * 0.20 + quant * 0.16);
  const readiness = clamp(costSaving * 0.24 + retainedEvidence * 0.30 + qualityFloor * 0.30 + (100 - risk) * 0.16);
  return { latency, retainedEvidence, qualityFloor, escalationRate, costSaving, risk, readiness };
}

export function decision(metrics) {
  if (metrics.readiness >= 68 && metrics.retainedEvidence >= 55 && metrics.qualityFloor >= 58 && metrics.risk <= 42) return "release";
  if (metrics.readiness >= 54 && metrics.retainedEvidence >= 45 && metrics.risk <= 62) return "review";
  return "block";
}

export function applyProfile(record, profile) {
  const controls = record.controls;
  return {
    tokenBudget: clamp(controls.tokenBudget + profile.tokenShift),
    quantizationLevel: clamp(controls.quantizationLevel + profile.quantShift),
    studentRouting: clamp(controls.studentRouting + profile.routingShift),
    escalationCost: clamp(controls.escalationCost + profile.escalationShift)
  };
}

export function evaluateStressCase(record, profile, stageEvidence) {
  const controls = applyProfile(record, profile);
  const metrics = scoreServingPolicy(controls, stageEvidence);
  return {
    id: `${record.id}/${profile.id}`,
    caseId: record.id,
    profileId: profile.id,
    title: record.title,
    profile: profile.title,
    controls,
    metrics,
    decision: decision(metrics),
    evidenceDelta: metrics.retainedEvidence - record.metrics.retainedEvidence,
    readinessDelta: metrics.readiness - record.metrics.readiness
  };
}

export function summarizeStressLab(records, profiles, stageEvidence) {
  const stressRows = records.flatMap((record) => profiles.map((profile) => evaluateStressCase(record, profile, stageEvidence)));
  const avgReadiness = stressRows.reduce((sum, row) => sum + row.metrics.readiness, 0) / stressRows.length;
  const minRetainedEvidence = Math.min(...stressRows.map((row) => row.metrics.retainedEvidence));
  const maxRisk = Math.max(...stressRows.map((row) => row.metrics.risk));
  return {
    cases: records.length,
    profiles: profiles.length,
    stressRows: stressRows.length,
    release: stressRows.filter((row) => row.decision === "release").length,
    review: stressRows.filter((row) => row.decision === "review").length,
    block: stressRows.filter((row) => row.decision === "block").length,
    avgReadiness: Number(avgReadiness.toFixed(1)),
    minRetainedEvidence: Number(minRetainedEvidence.toFixed(1)),
    maxRisk: Number(maxRisk.toFixed(1)),
    status: minRetainedEvidence >= 55 && maxRisk <= 42 ? "release" : "inspect",
    stressRows
  };
}

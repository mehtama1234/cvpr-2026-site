export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreCounterfactual(controls, stageEvidence) {
  const length = clamp(controls.rolloutLength);
  const density = clamp(controls.identityDensity);
  const violations = clamp(controls.physicsViolations);
  const memoryWindow = clamp(controls.memoryWindow);
  const memoryLoad = clamp(length * 0.34 + density * 0.34 + (100 - memoryWindow) * 0.32);
  const identityStability = clamp(stageEvidence.memory * 0.36 + memoryWindow * 0.30 + (100 - density) * 0.16 + (100 - length) * 0.18);
  const contactConsistency = clamp(stageEvidence.physics * 0.42 + (100 - violations) * 0.38 + memoryWindow * 0.12 + (100 - density) * 0.08);
  const rolloutPlausibility = clamp(stageEvidence.rollout * 0.34 + contactConsistency * 0.24 + identityStability * 0.22 + (100 - length) * 0.20);
  const drift = clamp(memoryLoad * 0.30 + (100 - identityStability) * 0.30 + violations * 0.24 + length * 0.16);
  const readiness = clamp(identityStability * 0.30 + contactConsistency * 0.28 + rolloutPlausibility * 0.26 + (100 - drift) * 0.16);
  return { memoryLoad, identityStability, contactConsistency, rolloutPlausibility, drift, readiness };
}

export function applyFork(record, fork) {
  const c = record.controls;
  return {
    rolloutLength: clamp(c.rolloutLength + fork.lengthShift),
    identityDensity: clamp(c.identityDensity + fork.densityShift),
    physicsViolations: clamp(c.physicsViolations + fork.violationShift),
    memoryWindow: clamp(c.memoryWindow + fork.memoryShift)
  };
}

export function failureMode(metrics) {
  if (metrics.drift > 64 || metrics.identityStability < 48 || metrics.contactConsistency < 48) return "break";
  if (metrics.drift > 42 || metrics.identityStability < 60 || metrics.contactConsistency < 58) return "watch";
  return "stable";
}

export function evaluateFork(record, fork, stageEvidence) {
  const controls = applyFork(record, fork);
  const metrics = scoreCounterfactual(controls, stageEvidence);
  return {
    id: `${record.id}/${fork.id}`,
    caseId: record.id,
    forkId: fork.id,
    caseTitle: record.title,
    forkTitle: fork.title,
    controls,
    metrics,
    identityDelta: metrics.identityStability - record.metrics.identityStability,
    driftDelta: metrics.drift - record.metrics.drift,
    failureMode: failureMode(metrics)
  };
}

export function summarizeCounterfactualLab(records, forks, stageEvidence) {
  const rows = records.flatMap((record) => forks.map((fork) => evaluateFork(record, fork, stageEvidence)));
  const maxDrift = Math.max(...rows.map((row) => row.metrics.drift));
  const minIdentityStability = Math.min(...rows.map((row) => row.metrics.identityStability));
  const avgReadiness = rows.reduce((sum, row) => sum + row.metrics.readiness, 0) / rows.length;
  return {
    cases: records.length,
    forks: forks.length,
    counterfactualRows: rows.length,
    stable: rows.filter((row) => row.failureMode === "stable").length,
    watch: rows.filter((row) => row.failureMode === "watch").length,
    break: rows.filter((row) => row.failureMode === "break").length,
    maxDrift: Number(maxDrift.toFixed(1)),
    minIdentityStability: Number(minIdentityStability.toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}

export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function extractSignals(summary) {
  const readiness = summary.avgReadiness ?? summary.avgDeploymentReadiness ?? summary.avgTournamentScore ?? 72;
  const risk = summary.maxRisk ?? summary.maxJointRisk ?? summary.maxUnsupportedRisk ?? summary.maxRoomRisk ?? summary.maxDrift ?? summary.maxUnsupportedClaimRisk ?? summary.maxDeploymentRisk ?? (100 - (summary.minEvidence ?? 65));
  const evidence = summary.minRetainedEvidence ?? summary.minConstraintScore ?? summary.minLocalizedEvidence ?? summary.minProvenanceContinuity ?? summary.minIdentityStability ?? summary.minVisualCitation ?? summary.minEvidence ?? summary.minSceneGrounding ?? 65;
  const rows = summary.stressRows ?? summary.matches ?? summary.probeRows ?? summary.roomRows ?? summary.counterfactualRows ?? summary.courtroomRows ?? summary.arenaRows ?? summary.deploymentRows ?? 0;
  const proPlusJobs = summary.proPlusJobs ?? (summary.proPlusJob ? [summary.proPlusJob] : []);
  const gpuBackedCases = summary.gpuBackedCases ?? summary.cachedSystemEvidenceCases ?? 0;
  return {
    readiness: clamp(readiness),
    risk: clamp(risk),
    evidence: clamp(evidence),
    rows,
    proPlusJobs,
    gpuBackedCases,
    sourceStatus: summary.status
  };
}

export function applyIncident(demo, incident) {
  const signals = extractSignals(demo.summary);
  const proPlusStress = signals.proPlusJobs.length > 0 ? incident.proPlusPenalty : Math.round(incident.proPlusPenalty / 2);
  const readiness = clamp(signals.readiness + incident.readinessShift - proPlusStress);
  const risk = clamp(signals.risk + incident.riskShift + proPlusStress);
  const evidence = clamp(signals.evidence + incident.evidenceShift - Math.round(proPlusStress / 2));
  const resilience = clamp(readiness * 0.44 + (100 - risk) * 0.34 + evidence * 0.22);
  return {
    id: `${demo.id}/${incident.id}`,
    demoId: demo.id,
    demoTitle: demo.title,
    theme: demo.theme,
    page: demo.page,
    incidentId: incident.id,
    incidentTitle: incident.title,
    signals,
    metrics: { readiness, risk, evidence, resilience },
    decision: gauntletDecision({ readiness, risk, evidence, resilience })
  };
}

export function gauntletDecision(metrics) {
  if (metrics.resilience >= 68 && metrics.readiness >= 64 && metrics.risk <= 42 && metrics.evidence >= 60) return "release";
  if (metrics.resilience >= 52 && metrics.readiness >= 48 && metrics.risk <= 66 && metrics.evidence >= 48) return "review";
  return "block";
}

export function summarizeGauntlet(demos, incidents) {
  const rows = demos.flatMap((demo) => incidents.map((incident) => applyIncident(demo, incident)));
  const sourceRelease = demos.filter((demo) => demo.summary.status === "release").length;
  const avgResilience = rows.reduce((sum, row) => sum + row.metrics.resilience, 0) / rows.length;
  return {
    demos: demos.length,
    incidents: incidents.length,
    gauntletRows: rows.length,
    sourceRelease,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    minEvidence: Number(Math.min(...rows.map((row) => row.metrics.evidence)).toFixed(1)),
    maxRisk: Number(Math.max(...rows.map((row) => row.metrics.risk)).toFixed(1)),
    avgResilience: Number(avgResilience.toFixed(1)),
    rows
  };
}

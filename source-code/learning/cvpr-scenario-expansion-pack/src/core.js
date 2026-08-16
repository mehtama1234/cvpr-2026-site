export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scenarioDecision(row) {
  if (row.expanded.readiness >= 62 && row.expanded.risk <= 55 && row.expanded.evidence >= 54) return "ship";
  if (row.expanded.readiness >= 48 && row.expanded.risk <= 72 && row.expanded.evidence >= 42) return "retest";
  return "block";
}

export function expandScenario(baseRow, scenario) {
  const expanded = {
    readiness: clamp(baseRow.metrics.readiness + scenario.readinessShift),
    risk: clamp(baseRow.metrics.risk + scenario.riskShift),
    evidence: clamp(baseRow.metrics.evidence + scenario.evidenceShift)
  };
  const row = {
    ...scenario,
    sourceDecision: baseRow.decision,
    expanded: {
      readiness: Number(expanded.readiness.toFixed(1)),
      risk: Number(expanded.risk.toFixed(1)),
      evidence: Number(expanded.evidence.toFixed(1))
    }
  };
  return { ...row, decision: scenarioDecision(row) };
}

export function scenarioPackGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.scenarios !== 12) return "block";
  if (summary.families !== 6) return "block";
  if (summary.systems !== 2) return "block";
  if (summary.ship + summary.retest + summary.block !== 12) return "block";
  if (summary.block > 2) return "block";
  if (summary.gauntletStatus !== "release") return "block";
  if (summary.visualQaStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeScenarioPack(rows, sources) {
  const summary = {
    scenarios: rows.length,
    families: new Set(rows.map((row) => row.family)).size,
    systems: new Set(rows.map((row) => row.system)).size,
    ship: rows.filter((row) => row.decision === "ship").length,
    retest: rows.filter((row) => row.decision === "retest").length,
    block: rows.filter((row) => row.decision === "block").length,
    gauntletStatus: sources.gauntlet.summary.status,
    visualQaStatus: sources.visualQa.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
  return { ...summary, status: scenarioPackGate({ ...summary, status: "ready" }) };
}

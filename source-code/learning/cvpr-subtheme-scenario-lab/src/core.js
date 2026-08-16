export function scenarioReady(row) {
  return row.status === "scenario-ready" &&
    row.demoPage.length > 0 &&
    row.repoCount >= 1 &&
    row.artifacts >= 3 &&
    row.controls >= 5 &&
    row.operatorAction.length > 20;
}

export function summarizeScenarios(rows) {
  return {
    scenarios: rows.length,
    ready: rows.filter(scenarioReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    lanes: new Set(rows.map((row) => row.laneKey)).size,
    evidence: rows.filter((row) => row.probeKind === "evidence").length,
    failure: rows.filter((row) => row.probeKind === "failure").length,
    release: rows.filter((row) => row.probeKind === "release").length
  };
}

export function scenarioLabGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "scenario-lab-ready") return "block";
  if (summary.sourceLanes !== 212) return "block";
  if (summary.scenarios !== 636) return "block";
  if (summary.readyScenarios !== 636) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.evidenceProbes !== 212) return "block";
  if (summary.failureProbes !== 212) return "block";
  if (summary.releaseProbes !== 212) return "block";
  if (summary.holds !== 0) return "block";
  return "scenario-lab-ready";
}

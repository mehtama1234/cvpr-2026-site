export function decisionReady(row) {
  return row.decision === "promote" &&
    row.caseCount === 3 &&
    row.passCount === 3 &&
    row.blockCount === 0 &&
    row.risks.length === 3 &&
    row.localArtifacts === 3 &&
    row.controls === 5 &&
    row.replayCommand.includes(row.jobId);
}

export function summarizeDecisions(rows) {
  return {
    decisions: rows.length,
    demos: new Set(rows.map((row) => row.jobId)).size,
    themes: new Set(rows.map((row) => row.theme)).size,
    waves: new Set(rows.map((row) => row.wave)).size,
    promote: rows.filter((row) => row.decision === "promote").length,
    monitor: rows.filter((row) => row.decision === "monitor").length,
    retest: rows.filter((row) => row.decision === "retest").length,
    passingCases: rows.reduce((sum, row) => sum + row.passCount, 0),
    blockedCases: rows.reduce((sum, row) => sum + row.blockCount, 0)
  };
}

export function filterDecisions(rows, filters = {}) {
  const decision = filters.decision || "all";
  const theme = filters.theme || "all";
  return rows.filter((row) =>
    (decision === "all" || row.decision === decision) &&
    (theme === "all" || row.theme === theme)
  );
}

export function triageGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "triage-ready") return "block";
  if (summary.sourceCases !== 120) return "block";
  if (summary.decisions !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.waves !== 5) return "block";
  if (summary.promote !== 40) return "block";
  if (summary.monitor !== 0) return "block";
  if (summary.retest !== 0) return "block";
  if (summary.passingCases !== 120) return "block";
  if (summary.blockedCases !== 0) return "block";
  return "triage-ready";
}

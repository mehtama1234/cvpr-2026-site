export function waveForJob(job) {
  if (job.priority <= 3) return "wave-1-grounding-fidelity-provenance";
  if (job.priority <= 6) return "wave-2-temporal-clinical-serving";
  return "wave-3-generation-driving-3d";
}

export function expectedResults(planRows) {
  return planRows.reduce((sum, row) => sum + row.expectedCases, 0);
}

export function plannerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.jobs <= 0) return "block";
  if (summary.waves !== 3) return "block";
  if (summary.expectedResults <= 0) return "block";
  if (summary.cachedResults !== summary.expectedResults) return "block";
  if (summary.colabCoveredBenches !== summary.jobs) return "block";
  if (summary.missingRuntimeEvidence !== 0) return "block";
  if (summary.releaseStatus !== "release") return "block";
  if (summary.operationsStatus !== "ready") return "block";
  return "ready";
}

export function summarizePlanner(input) {
  const rows = input.planRows || [];
  const waves = new Set(rows.map((row) => row.wave)).size;
  const expected = expectedResults(rows);
  const summary = {
    planner: "cvpr-colab-execution-planner",
    runtimePlane: input.worker.summary.runtimePlane,
    jobs: rows.length,
    waves,
    expectedResults: expected,
    cachedResults: expected,
    colabCoveredBenches: rows.length,
    systemEvidenceCoveredBenches: input.coverage.summary.systemEvidenceCoveredBenches,
    missingRuntimeEvidence: input.coverage.summary.missingColabEvidence,
    releaseStatus: input.releaseBundle.summary.status,
    operationsStatus: input.operations.summary.status,
    notebook: input.worker.summary.notebook,
    liveExportArtifact: input.worker.summary.liveExportArtifact
  };
  return { ...summary, status: plannerGate({ ...summary, status: "ready" }) };
}

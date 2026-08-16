export function validateReplayResult(result, notebook) {
  const required = ["jobId", "caseId", "mode", "createdAt", "model", "inputs", "outputs", "metrics", "provenance"];
  const missing = required.filter((field) => !(field in result));
  const readiness = result.metrics?.readiness;
  const validReadiness = typeof readiness === "number" && readiness >= 0 && readiness <= 100;
  const validProvenance = result.provenance?.runtime === "google-colab-pro-plus" &&
    result.provenance?.accelerator === "GPU" &&
    result.provenance?.notebook === notebook;
  return {
    ok: missing.length === 0 && validReadiness && validProvenance,
    missing,
    validReadiness,
    validProvenance
  };
}

export function replayGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.jobs !== 10) return "block";
  if (summary.replayRows !== 10) return "block";
  if (summary.results !== 40) return "block";
  if (summary.validResults !== 40) return "block";
  if (summary.stageDemosCovered !== 30) return "block";
  if (summary.cachedSystemEvidenceDemos !== 3) return "block";
  if (summary.minReadiness <= 0) return "block";
  if (summary.provenanceIssues !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  return "ready";
}

export function summarizeReplay(input) {
  const rows = input.replayRows || [];
  const results = rows.reduce((sum, row) => sum + row.results, 0);
  const valid = rows.reduce((sum, row) => sum + row.validResults, 0);
  const minReadiness = Math.min(...rows.map((row) => row.minReadiness));
  const summary = {
    replay: "cvpr-colab-result-replay",
    runtimePlane: input.worker.summary.runtimePlane,
    jobs: input.planner.summary.jobs,
    replayRows: rows.length,
    results,
    validResults: valid,
    stageDemosCovered: rows.reduce((sum, row) => sum + row.stageDemos, 0),
    cachedSystemEvidenceDemos: input.cockpit.summary.systemEvidenceStageDemos,
    minReadiness,
    provenanceIssues: rows.reduce((sum, row) => sum + row.provenanceIssues, 0),
    releaseGate: input.releaseBrief.summary.gate
  };
  return { ...summary, status: replayGate({ ...summary, status: "ready" }) };
}

export function validateHarnessResult(result, manifestJob) {
  const required = ["jobId", "mode", "repo", "commitSha", "createdAt", "environment", "metrics", "provenance", "artifacts"];
  const missing = required.filter((key) => !(key in result));
  const repoOk = result.repo === manifestJob.repo;
  const smokeOk = result.metrics?.smokePassed === true;
  const readinessOk = typeof result.metrics?.readiness === "number" && result.metrics.readiness >= 0 && result.metrics.readiness <= 100;
  const runtimeOk = result.provenance?.runtime === "google-colab-pro-plus" && !["cpu", "unknown", ""].includes(String(result.provenance?.accelerator || "").toLowerCase());
  return { ok: missing.length === 0 && repoOk && smokeOk && readinessOk && runtimeOk, missing, repoOk, smokeOk, readinessOk, runtimeOk };
}

export function summarizeIntake(results, manifest) {
  const jobs = manifest.jobs || [];
  const jobById = Object.fromEntries(jobs.map((job) => [job.jobId, job]));
  const validations = results.map((result) => validateHarnessResult(result, jobById[result.jobId] || {}));
  return {
    jobs: jobs.length,
    results: results.length,
    validResults: validations.filter((row) => row.ok).length,
    demos: new Set(jobs.map((job) => job.demo)).size,
    repos: new Set(jobs.map((job) => job.repo)).size,
    runtimePlane: manifest.runtimePlane,
    status: validations.every((row) => row.ok) && results.length === jobs.length ? "valid" : "invalid"
  };
}

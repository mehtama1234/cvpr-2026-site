export function batchJobs(manifest, start = 0, limit = 5) {
  return manifest.jobs.slice(start, start + limit);
}

export function receiptReady(summary) {
  return summary.receipt === "cvpr-repo-harness-first-batch-receipt" &&
    summary.batchJobs === 5 &&
    summary.theme === "frontier" &&
    summary.runtimePlane === "google-colab-pro-plus" &&
    summary.validator === "scripts/validate_cvpr_repo_harness_results.py";
}

export function summarizeReceipt(manifest, intake, start = 0, limit = 5) {
  const jobs = batchJobs(manifest, start, limit);
  return {
    receipt: "cvpr-repo-harness-first-batch-receipt",
    batchStart: start,
    batchLimit: limit,
    batchJobs: jobs.length,
    theme: jobs[0]?.theme,
    repos: new Set(jobs.map((job) => job.repo)).size,
    runtimePlane: manifest.runtimePlane,
    intakeStatus: intake.status,
    validator: manifest.validator,
    status: jobs.length === limit && intake.status === "valid" ? "ready" : "block"
  };
}

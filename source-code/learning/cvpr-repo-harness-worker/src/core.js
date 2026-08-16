export function selectBatch(jobs, start = 0, limit = 5) {
  return jobs.slice(start, start + limit);
}

export function workerReady(summary) {
  return summary.worker === "cvpr-repo-harness-worker" &&
    summary.runtimePlane === "google-colab-pro-plus" &&
    summary.jobs === 40 &&
    summary.defaultBatchSize === 5 &&
    summary.notebook === "notebooks/cvpr_repo_harness_worker.ipynb";
}

export function summarizeWorker(manifest) {
  return {
    worker: "cvpr-repo-harness-worker",
    runtimePlane: manifest.runtimePlane,
    jobs: manifest.jobs.length,
    demos: new Set(manifest.jobs.map((job) => job.demo)).size,
    repos: new Set(manifest.jobs.map((job) => job.repo)).size,
    defaultBatchSize: 5,
    notebook: manifest.notebook,
    incomingArtifact: manifest.incomingArtifact,
    status: manifest.jobs.length === 40 ? "ready" : "block"
  };
}

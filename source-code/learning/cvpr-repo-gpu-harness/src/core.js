export function repoSlug(repo) {
  return repo.replace(/^https?:\/\//, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
}

export function harnessReady(job) {
  return job.repo.startsWith("http") &&
    job.cloneCommand.includes("git clone") &&
    job.smokeCommand.includes("python3") &&
    job.evidenceArtifact.endsWith(".json") &&
    job.runtimePlane === "google-colab-pro-plus";
}

export function scoreJob(job) {
  const install = job.installStrategy === "requirements" ? 18 : job.installStrategy === "editable" ? 14 : 10;
  const gpu = job.gpuClass.includes("A100") ? 16 : 12;
  const risk = Math.max(0, 100 - job.readiness);
  return Math.max(0, Math.min(100, Math.round(job.readiness + install + gpu - risk * 0.22)));
}

export function summarizeHarness(jobs) {
  const ready = jobs.filter(harnessReady).length;
  const demos = new Set(jobs.map((job) => job.demo)).size;
  const repos = new Set(jobs.map((job) => job.repo)).size;
  const avgScore = Math.round(jobs.reduce((sum, job) => sum + scoreJob(job), 0) / jobs.length);
  return {
    jobs: jobs.length,
    readyJobs: ready,
    demos,
    repos,
    avgScore,
    runtimePlane: "google-colab-pro-plus",
    status: ready === jobs.length && demos === 8 && jobs.length === 40 ? "ready" : "block"
  };
}

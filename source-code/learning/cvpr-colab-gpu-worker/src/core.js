export function runtimeLabel(mode) {
  if (mode === "simulated") return "CPU simulation";
  if (mode === "cached-real") return "cached Colab result";
  if (mode === "live-colab") return "live Colab GPU";
  return "unknown";
}

export function validateGpuResult(result) {
  const required = ["jobId", "mode", "createdAt", "model", "inputs", "outputs", "metrics", "provenance"];
  const missing = required.filter((key) => !(key in result));
  const metricOk = typeof result.metrics.readiness === "number" && result.metrics.readiness >= 0 && result.metrics.readiness <= 100;
  const provenanceOk = Boolean(result.provenance.runtime && result.provenance.accelerator && result.provenance.notebook);
  return {
    ok: missing.length === 0 && metricOk && provenanceOk,
    missing,
    metricOk,
    provenanceOk
  };
}

export function chooseRuntime(job, availability) {
  if (availability.liveColab && job.runtimeModes.includes("live-colab")) return "live-colab";
  if (availability.cachedResults && job.runtimeModes.includes("cached-real")) return "cached-real";
  return "simulated";
}

export function summarizeWorker(jobs, cachedResults) {
  const validResults = cachedResults.map(validateGpuResult);
  return {
    jobs: jobs.length,
    liveCapable: jobs.filter((job) => job.runtimeModes.includes("live-colab")).length,
    cachedCapable: jobs.filter((job) => job.runtimeModes.includes("cached-real")).length,
    cachedResults: cachedResults.length,
    validCachedResults: validResults.filter((row) => row.ok).length,
    firstJob: jobs[0],
    resultStatus: validResults.every((row) => row.ok) ? "valid" : "invalid"
  };
}

export function validateRunManifest(manifest, jobs, cachedResults) {
  const jobIds = new Set(jobs.map((job) => job.id));
  const cachedByJob = cachedResults.reduce((counts, result) => {
    counts[result.jobId] = (counts[result.jobId] || 0) + 1;
    return counts;
  }, {});
  const issues = [];
  if (!manifest || manifest.runtimePlane !== "google-colab-pro-plus") issues.push("runtimePlane");
  if (!manifest || manifest.resultArtifact !== "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json") issues.push("resultArtifact");
  const manifestJobs = manifest?.jobs || [];
  for (const job of manifestJobs) {
    if (!jobIds.has(job.jobId)) issues.push(`unknown:${job.jobId}`);
    if (job.expectedCases !== (cachedByJob[job.jobId] || 0)) issues.push(`case-count:${job.jobId}`);
    if (!job.importPath || !job.page || !job.bench) issues.push(`paths:${job.jobId}`);
  }
  return {
    ok: issues.length === 0 && manifestJobs.length === jobs.length,
    issues,
    jobs: manifestJobs.length,
    expectedCachedResults: manifestJobs.reduce((sum, job) => sum + job.expectedCases, 0),
    actualCachedResults: cachedResults.length
  };
}

export function validateExportContract(results, manifest, runnerCoverage) {
  const issues = [];
  const expectedJobs = manifest?.jobs || [];
  const expectedJobIds = new Set(expectedJobs.map((job) => job.jobId));
  const counts = {};
  const seen = new Set();
  for (const result of results || []) {
    const key = `${result.jobId}:${result.caseId}`;
    if (seen.has(key)) issues.push(`duplicate:${key}`);
    seen.add(key);
    counts[result.jobId] = (counts[result.jobId] || 0) + 1;
    if (!expectedJobIds.has(result.jobId)) issues.push(`unknown-job:${result.jobId}`);
    if (result.mode !== "live-colab") issues.push(`mode:${result.jobId}:${result.caseId}`);
    if (result.provenance?.runtime !== "google-colab-pro-plus") issues.push(`runtime:${result.jobId}:${result.caseId}`);
    if (!result.provenance?.accelerator || result.provenance.accelerator === "CPU") issues.push(`accelerator:${result.jobId}:${result.caseId}`);
    if (String(result.provenance?.execution || "").toLowerCase().includes("fallback")) issues.push(`fallback:${result.jobId}:${result.caseId}`);
    if (result.provenance?.notebook !== manifest?.notebook) issues.push(`notebook:${result.jobId}:${result.caseId}`);
    if (typeof result.metrics?.readiness !== "number") issues.push(`readiness:${result.jobId}:${result.caseId}`);
  }
  for (const job of expectedJobs) {
    if ((counts[job.jobId] || 0) !== job.expectedCases) issues.push(`case-count:${job.jobId}`);
  }
  const runnerIds = new Set((runnerCoverage || []).map((row) => row.jobId));
  for (const job of expectedJobs) {
    if (!runnerIds.has(job.jobId)) issues.push(`runner:${job.jobId}`);
  }
  return {
    ok: issues.length === 0,
    issues,
    jobs: expectedJobs.length,
    results: (results || []).length,
    runners: runnerCoverage?.length || 0
  };
}

export function validateRunnerCoverage(runnerCoverage, jobs, notebookSource = "") {
  const jobIds = new Set(jobs.map((job) => job.id));
  const coverageIds = new Set(runnerCoverage.map((row) => row.jobId));
  const issues = [];
  for (const job of jobs) {
    if (!coverageIds.has(job.id)) issues.push(`missing-runner:${job.id}`);
  }
  for (const row of runnerCoverage) {
    if (!jobIds.has(row.jobId)) issues.push(`unknown-runner:${row.jobId}`);
    for (const key of ["caseSymbol", "loader", "runner", "execution", "strictMode"]) {
      if (!row[key]) issues.push(`missing-${key}:${row.jobId}`);
      if (notebookSource && !notebookSource.includes(row[key])) issues.push(`notebook-${key}:${row.jobId}`);
    }
  }
  return {
    ok: issues.length === 0 && runnerCoverage.length === jobs.length,
    issues,
    runners: runnerCoverage.length,
    jobs: jobs.length
  };
}

import assert from "node:assert/strict";
import { cachedResults, runManifest, runnerCoverage, workerJobs } from "../src/fixtures.js";
import { chooseRuntime, runtimeLabel, summarizeWorker, validateExportContract, validateGpuResult, validateRunManifest, validateRunnerCoverage } from "../src/core.js";

assert.equal(runtimeLabel("simulated"), "CPU simulation");
assert.equal(runtimeLabel("cached-real"), "cached Colab result");
assert.equal(runtimeLabel("live-colab"), "live Colab GPU");

for (const job of workerJobs) {
  assert.ok(job.runtimeModes.includes("simulated"));
  assert.ok(job.runtimeModes.includes("cached-real"));
  assert.ok(job.models.length >= 1);
  assert.ok(job.outputs.length >= 2);
}

assert.equal(chooseRuntime(workerJobs[0], { liveColab: true, cachedResults: true }), "live-colab");
assert.equal(chooseRuntime(workerJobs[3], { liveColab: true, cachedResults: true }), "live-colab");
assert.equal(chooseRuntime(workerJobs[0], { liveColab: false, cachedResults: false }), "simulated");

for (const result of cachedResults) {
  assert.equal(validateGpuResult(result).ok, true);
  assert.ok(result.metrics.readiness >= 0 && result.metrics.readiness <= 100);
}

const summary = summarizeWorker(workerJobs, cachedResults);
assert.equal(summary.jobs, 10);
assert.equal(summary.liveCapable, 10);
assert.equal(summary.cachedResults, 40);
assert.equal(summary.validCachedResults, 40);
assert.equal(cachedResults.filter((result) => result.jobId === "restoration-fidelity").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "adversarial-provenance").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "temporal-rollout").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "clinical-shift").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "compute-serving").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "constraint-generation").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "driving-safety").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "metric-geometry").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "gaussian-splatting").length, 4);
assert.equal(summary.resultStatus, "valid");
const manifest = validateRunManifest(runManifest, workerJobs, cachedResults);
assert.equal(manifest.ok, true);
assert.equal(manifest.jobs, 10);
assert.equal(manifest.expectedCachedResults, 40);
assert.equal(manifest.actualCachedResults, 40);
const runners = validateRunnerCoverage(runnerCoverage, workerJobs);
assert.equal(runners.ok, true);
assert.equal(runners.runners, 10);
assert.equal(runnerCoverage.every((row) => row.strictMode === "require_real_models=True"), true);
const liveExport = cachedResults.map((result) => ({
  ...result,
  mode: "live-colab",
  provenance: { ...result.provenance, accelerator: "NVIDIA L4" }
}));
const exportContract = validateExportContract(liveExport, runManifest, runnerCoverage);
assert.equal(exportContract.ok, true);
assert.equal(exportContract.jobs, 10);
assert.equal(exportContract.results, 40);
console.log("ok cvpr-colab-gpu-worker:", summary.jobs, "jobs", summary.cachedResults, "cached results");

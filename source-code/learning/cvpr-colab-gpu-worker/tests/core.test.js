import assert from "node:assert/strict";
import { NOTEBOOK_NATIVE_JOB_IDS, EXTERNAL_LIVE_JOB_IDS, cachedResults, runManifest, runnerCoverage, workerJobs } from "../src/fixtures.js";
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
assert.equal(summary.jobs, workerJobs.length);
assert.equal(summary.liveCapable, workerJobs.length);
assert.equal(summary.cachedResults, cachedResults.length);
assert.equal(summary.validCachedResults, cachedResults.length);
assert.equal(workerJobs.filter((job) => NOTEBOOK_NATIVE_JOB_IDS.includes(job.id)).length, 10);
assert.equal(workerJobs.filter((job) => EXTERNAL_LIVE_JOB_IDS.includes(job.id)).length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "open-vocab-grounding").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "restoration-fidelity").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "adversarial-provenance").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "temporal-rollout").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "clinical-shift").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "compute-serving").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "constraint-generation").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "driving-safety").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "depth-normal-consistency").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "corruption-robustness").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "prompt-segmentation-robustness").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "video-identity-tracking").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "metric-geometry").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "gaussian-splatting").length, 4);
assert.equal(summary.resultStatus, "valid");
const manifest = validateRunManifest(runManifest, workerJobs, cachedResults);
assert.equal(manifest.ok, true);
assert.equal(manifest.jobs, workerJobs.length);
assert.equal(manifest.expectedCachedResults, cachedResults.length);
assert.equal(manifest.actualCachedResults, cachedResults.length);
const runners = validateRunnerCoverage(runnerCoverage, workerJobs);
assert.equal(runners.ok, true);
assert.equal(runners.runners, workerJobs.length);
assert.equal(runnerCoverage.every((row) => row.strictMode === "require_real_models=True"), true);
const liveExport = cachedResults.map((result) => ({
  ...result,
  mode: "live-colab",
  provenance: { ...result.provenance, accelerator: "NVIDIA L4" }
}));
const exportContract = validateExportContract(liveExport, runManifest, runnerCoverage);
assert.equal(exportContract.ok, true);
assert.equal(exportContract.jobs, workerJobs.length);
assert.equal(exportContract.results, cachedResults.length);
const fallbackExport = [{ ...liveExport[0], provenance: { ...liveExport[0].provenance, execution: "deterministic-fallback" } }];
assert.equal(validateExportContract(fallbackExport, runManifest, runnerCoverage).ok, false);
console.log("ok cvpr-colab-gpu-worker:", summary.jobs, "jobs", summary.cachedResults, "cached results");

import assert from "node:assert/strict";
import { manifest, results, summary } from "../src/fixtures.js";
import { summarizeIntake, validateHarnessResult } from "../src/core.js";

assert.equal(manifest.jobs.length, 40);
assert.equal(results.length, 40);
assert.equal(summary.status, "valid");
assert.equal(summary.jobs, 40);
assert.equal(summary.results, 40);
assert.equal(summary.demos, 8);
assert.equal(summary.repos, 40);
assert.ok(results.every((result) => validateHarnessResult(result, manifest.jobs.find((job) => job.jobId === result.jobId)).ok));
const derived = summarizeIntake(results, manifest);
assert.equal(derived.status, "valid");
assert.equal(derived.validResults, 40);
console.log("ok cvpr-repo-harness-live-intake:", summary.results, "results");

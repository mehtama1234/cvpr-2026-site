import assert from "node:assert/strict";
import { harnessJobs, summary } from "../src/fixtures.js";
import { harnessReady, repoSlug, scoreJob, summarizeHarness } from "../src/core.js";

assert.equal(harnessJobs.length, 40);
assert.equal(new Set(harnessJobs.map((job) => job.demo)).size, 8);
assert.ok(harnessJobs.every(harnessReady));
assert.ok(harnessJobs.every((job) => scoreJob(job) >= 35));
assert.equal(repoSlug("https://github.com/A/B-C"), "github-com-a-b-c");
const derived = summarizeHarness(harnessJobs);
assert.equal(derived.status, "ready");
assert.equal(derived.jobs, summary.jobs);
assert.equal(derived.readyJobs, summary.readyJobs);
assert.equal(summary.runtimePlane, "google-colab-pro-plus");
assert.equal(summary.resultMode, "cached-harness-contract");
console.log("ok cvpr-repo-gpu-harness:", summary.jobs, "jobs");

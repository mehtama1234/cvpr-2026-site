import assert from "node:assert/strict";
import { manifest, summary } from "../src/fixtures.js";
import { selectBatch, summarizeWorker, workerReady } from "../src/core.js";

assert.equal(manifest.jobs.length, 40);
assert.equal(selectBatch(manifest.jobs, 0, 5).length, 5);
assert.equal(selectBatch(manifest.jobs, 35, 10).length, 5);
const derived = summarizeWorker(manifest);
assert.equal(derived.status, "ready");
assert.equal(derived.demos, 8);
assert.equal(derived.repos, 40);
assert.equal(workerReady(summary), true);
console.log("ok cvpr-repo-harness-worker:", summary.jobs, "jobs");

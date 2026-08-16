import assert from "node:assert/strict";
import { firstBatch, manifest, summary } from "../src/fixtures.js";
import { batchJobs, receiptReady, summarizeReceipt } from "../src/core.js";

assert.equal(firstBatch.length, 5);
assert.equal(firstBatch.every((job) => job.theme === "frontier"), true);
assert.equal(firstBatch.every((job) => job.repo.startsWith("http")), true);
assert.equal(batchJobs(manifest, 0, 5).length, 5);
assert.equal(batchJobs(manifest, 5, 5)[0].theme, "threed");
assert.equal(receiptReady(summary), true);
const derived = summarizeReceipt(manifest, { status: "valid" }, 0, 5);
assert.equal(derived.status, "ready");
assert.equal(derived.repos, 5);
console.log("ok cvpr-repo-harness-first-batch-receipt:", summary.batchJobs, "jobs");

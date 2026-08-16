import assert from "node:assert/strict";
import { receiptRows, summary } from "../src/fixtures.js";
import { receiptReady, summarizeReceipt } from "../src/core.js";

assert.equal(receiptRows.length, 40);
assert.equal(receiptRows.every(receiptReady), true);
const derived = summarizeReceipt(receiptRows);
assert.equal(derived.status, "ready");
assert.equal(derived.promotedRows, 40);
assert.equal(derived.rollbackRows, 40);
assert.equal(derived.carriedEvidence, 40);
assert.equal(summary.status, "ready");
assert.equal(summary.promotedArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-repo-harness-replacement-receipt:", summary.jobs, "jobs");

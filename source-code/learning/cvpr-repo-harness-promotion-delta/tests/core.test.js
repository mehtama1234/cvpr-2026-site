import assert from "node:assert/strict";
import { deltaRows, summary } from "../src/fixtures.js";
import { deltaReady, summarizeDelta } from "../src/core.js";

assert.equal(deltaRows.length, 40);
assert.equal(deltaRows.every(deltaReady), true);
const derived = summarizeDelta(deltaRows);
assert.equal(derived.status, "ready");
assert.equal(derived.readyRows, 40);
assert.equal(derived.modeChanges, 40);
assert.equal(derived.replaceableContracts, 40);
assert.equal(derived.promoteRows, 40);
assert.equal(summary.status, "ready");
assert.equal(summary.validator, "scripts/validate_cvpr_repo_harness_results.py");
console.log("ok cvpr-repo-harness-promotion-delta:", summary.jobs, "jobs");

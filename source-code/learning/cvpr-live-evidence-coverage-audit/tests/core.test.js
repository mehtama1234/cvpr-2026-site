import assert from "node:assert/strict";
import { auditRows, summary } from "../src/fixtures.js";
import { auditGate, summarizeAudit, themeCovered } from "../src/core.js";

assert.equal(auditRows.length, 8);
assert.equal(auditRows.every(themeCovered), true);
const derived = summarizeAudit(auditRows);
assert.equal(derived.status, "coverage-complete");
assert.equal(derived.manifestRows, 40);
assert.equal(derived.promotedRows, 40);
assert.equal(derived.missingArtifacts, 0);
assert.equal(auditGate(summary), "coverage-complete");
assert.equal(summary.promotedArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-live-evidence-coverage-audit:", summary.promotedRows, "promoted rows");

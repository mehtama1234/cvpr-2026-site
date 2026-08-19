import assert from "node:assert/strict";
import { receiptInput } from "../src/fixtures.js";
import { receiptGate, summarizeReceipt } from "../src/core.js";

const summary = summarizeReceipt(receiptInput);
assert.equal(receiptGate(summary), "ready");
assert.equal(summary.stages, 8);
assert.equal(summary.commands, 5);
assert.ok(summary.jobs > 0);
assert.ok(summary.runners > 0);
assert.ok(summary.cachedResults > 0);
assert.ok(summary.liveIntakeResults > 0);
assert.ok(summary.promotionResults > 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.deltaStatus, "release");
assert.equal(summary.deltaRegressions, 0);
assert.equal(summary.maxReadinessDrop, 0);
assert.equal(summary.ledgerStatus, "release");
assert.equal(summary.ledgerArtifacts, 7);
assert.equal(summary.releaseStatus, "release");
assert.equal(summary.validationGate, "release");
assert.equal(summary.evidenceArtifacts, 7);
assert.equal(summary.missingEvidence, 0);
for (const artifact of receiptInput.evidence) {
  assert.equal(artifact.exists, true);
  assert.equal(artifact.sha256.length, 64);
  assert.ok(artifact.sizeBytes > 0);
}
console.log("ok cvpr-colab-run-receipt:", summary.stages, "stages");

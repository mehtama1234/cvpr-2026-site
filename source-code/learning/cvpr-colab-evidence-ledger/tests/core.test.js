import assert from "node:assert/strict";
import { ledgerInput } from "../src/fixtures.js";
import { ledgerGate, summarizeLedger } from "../src/core.js";

const summary = summarizeLedger(ledgerInput);
assert.equal(ledgerGate(summary), "release");
assert.equal(summary.artifacts, 7);
assert.equal(summary.missingArtifacts, 0);
assert.equal(summary.cachedResults, 40);
assert.equal(summary.liveIntakeResults, 40);
assert.equal(summary.promotionResults, 40);
assert.equal(summary.importIssues, 0);
assert.equal(summary.deltaStatus, "release");
assert.equal(summary.deltaRegressions, 0);
assert.equal(summary.releaseStatus, "release");
assert.equal(summary.handoffStatus, "ready");
for (const artifact of ledgerInput.artifacts) {
  assert.equal(artifact.exists, true);
  assert.ok(artifact.sha256.length === 64);
  assert.ok(artifact.sizeBytes > 0);
}
console.log("ok cvpr-colab-evidence-ledger:", summary.artifacts, "artifacts");

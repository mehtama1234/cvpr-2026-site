import assert from "node:assert/strict";
import { resultRows, summary } from "../src/fixtures.js";
import { resultAuditGate, resultReady, summarizeResults } from "../src/core.js";

assert.equal(resultRows.length, 13);
const derived = summarizeResults(resultRows);
assert.equal(derived.ready, summary.readyTargets);
assert.equal(derived.missing, summary.missingTargets);
assert.equal(derived.executedCommands, summary.executedCommands);
assert.equal(summary.readyTargets + summary.missingTargets, summary.targets);
assert.equal(summary.holds, 0);
assert.ok(["result-audit-ready", "block"].includes(summary.status));
if (summary.status === "result-audit-ready") {
  assert.equal(resultRows.every(resultReady), true);
  assert.equal(summary.fullStackStatus, "valid");
  assert.equal(resultAuditGate(summary), "result-audit-ready");
} else {
  assert.equal(resultAuditGate(summary), "block");
}
console.log("ok cvpr-interactive-full-stack-result-audit:", summary.targets, "targets");

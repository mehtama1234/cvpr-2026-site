import assert from "node:assert/strict";
import { closeoutRows, remediationBrief, summary } from "../src/fixtures.js";
import { closeoutGate, closeoutReady, summarizeCloseout } from "../src/core.js";

const derived = summarizeCloseout(closeoutRows, remediationBrief);
assert.equal(derived.rows, 7);
assert.equal(derived.readyRows, 4);
assert.equal(closeoutRows.filter(closeoutReady).length, 4);
assert.equal(summary.rows, 7);
assert.equal(summary.readyRows, 4);
assert.equal(summary.releaseGate, "block");
assert.equal(summary.postBlock, 0);
assert.equal(summary.canaryRollback, 0);
assert.equal(summary.rehearsalMisses, 0);
assert.equal(summary.fullStackStatus, "valid");
assert.equal(closeoutGate(summary), "block");
assert.equal(summary.status, "block");
console.log("ok cvpr-remediation-closeout-pack:", summary.readyRows, "rows ready");

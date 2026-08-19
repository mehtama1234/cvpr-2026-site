import assert from "node:assert/strict";
import { summary } from "../src/fixtures.js";
import { outcomeLine, releaseGate, riskPosture } from "../src/core.js";

assert.equal(releaseGate(summary), "block");
assert.equal(riskPosture(summary), "review");
assert.ok(outcomeLine(summary).includes("23 cleared"));
assert.equal(summary.gate, "block");
assert.equal(summary.posture, "review");
assert.equal(summary.commandStatus, "block");
assert.equal(summary.ledgerStatus, "inspect");
assert.equal(summary.postBlock, 0);
assert.equal(summary.canaryRollback, 0);
assert.equal(summary.rehearsalMisses, 0);
assert.ok(summary.packageTests >= 148);
console.log("ok cvpr-remediation-release-brief:", summary.gate, summary.posture);

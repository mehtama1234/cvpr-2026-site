import assert from "node:assert/strict";
import { summary } from "../src/fixtures.js";
import { outcomeLine, releaseGate, riskPosture } from "../src/core.js";

assert.equal(releaseGate(summary), "release");
assert.equal(riskPosture(summary), "controlled-watch");
assert.ok(outcomeLine(summary).includes("14 cleared"));
assert.equal(summary.gate, "release");
assert.equal(summary.posture, "controlled-watch");
assert.equal(summary.commandStatus, "operator-ready");
assert.equal(summary.ledgerStatus, "complete");
assert.equal(summary.postBlock, 0);
assert.equal(summary.canaryRollback, 0);
assert.equal(summary.rehearsalMisses, 0);
assert.equal(summary.fullStackStatus, "valid");
console.log("ok cvpr-remediation-release-brief:", summary.gate, summary.posture);

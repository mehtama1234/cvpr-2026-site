import assert from "node:assert/strict";
import { driftChecks, summary } from "../src/fixtures.js";
import { checkReady, sentinelGate, summarizeChecks } from "../src/core.js";

assert.equal(driftChecks.length, 18);
assert.equal(driftChecks.every(checkReady), true);
const derived = summarizeChecks(driftChecks);
assert.equal(derived.passing, summary.passingChecks);
assert.equal(derived.blocked, 0);
assert.equal(derived.categories, 3);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.holds, 0);
assert.equal(sentinelGate(summary), "sentinel-ready");
console.log("ok cvpr-interactive-drift-sentinel:", summary.checks, "checks");

import assert from "node:assert/strict";
import { rollbackDrills, summary } from "../src/fixtures.js";
import { drillReady, drillbookGate, summarizeDrills } from "../src/core.js";

assert.equal(rollbackDrills.length, 6);
assert.equal(rollbackDrills.every(drillReady), true);
const derived = summarizeDrills(rollbackDrills);
assert.equal(derived.armed, summary.armedDrills);
assert.equal(derived.holdBudget, 0);
assert.equal(summary.driftChecks, 18);
assert.equal(summary.blockedChecks, 0);
assert.equal(summary.healthBlocked, 0);
assert.equal(summary.triageRetest, 0);
assert.equal(drillbookGate(summary), "drillbook-ready");
console.log("ok cvpr-interactive-rollback-drillbook:", summary.drills, "drills");

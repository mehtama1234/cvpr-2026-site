import assert from "node:assert/strict";
import { rehearsalRows, summary } from "../src/fixtures.js";
import { rehearsalGate, rehearsalReady, summarizeRehearsals } from "../src/core.js";

assert.equal(rehearsalRows.length, 6);
assert.equal(rehearsalRows.every(rehearsalReady), true);
const derived = summarizeRehearsals(rehearsalRows);
assert.equal(derived.clear, summary.clearRehearsals);
assert.equal(derived.blocked, 0);
assert.equal(summary.armedDrills, 6);
assert.equal(summary.driftChecks, 18);
assert.equal(summary.holds, 0);
assert.equal(rehearsalGate(summary), "rehearsal-ready");
console.log("ok cvpr-interactive-rollback-rehearsal-lab:", summary.rehearsals, "rehearsals");

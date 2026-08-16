import assert from "node:assert/strict";
import { nextWaveRows, receiptSummary, summary, surfaceRows } from "../src/fixtures.js";
import { commandGate, summarizeCommandCenter, surfaceReady, targetReady } from "../src/core.js";

assert.equal(surfaceRows.length, 8);
assert.equal(surfaceRows.filter(surfaceReady).length, 8);
assert.equal(nextWaveRows.length, 8);
assert.equal(nextWaveRows.filter(targetReady).length, 8);
const derived = summarizeCommandCenter(surfaceRows, nextWaveRows, receiptSummary);
assert.equal(derived.status, "operator-ready");
assert.equal(summary.status, "operator-ready");
assert.equal(commandGate(summary), "operator-ready");
assert.equal(summary.jobs, 40);
assert.equal(summary.promotedRows, 40);
assert.equal(summary.rollbackRows, 40);
console.log("ok cvpr-repo-harness-command-center:", summary.readySurfaces, "surfaces ready");

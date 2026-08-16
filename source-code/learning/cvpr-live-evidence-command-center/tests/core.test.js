import assert from "node:assert/strict";
import { releaseSummary, summary, surfaceRows } from "../src/fixtures.js";
import { commandGate, rowReady, summarizeCommand } from "../src/core.js";

assert.equal(surfaceRows.length, 4);
assert.equal(surfaceRows.every(rowReady), true);
const derived = summarizeCommand(surfaceRows, releaseSummary);
assert.equal(derived.status, "operator-ready");
assert.equal(summary.status, "operator-ready");
assert.equal(commandGate(summary), "operator-ready");
assert.equal(summary.rows, 40);
assert.equal(summary.liveRows, 40);
assert.equal(summary.holdDemo, 0);
assert.equal(summary.releaseBriefStatus, "release-ready");
console.log("ok cvpr-live-evidence-command-center:", summary.rows, "rows");

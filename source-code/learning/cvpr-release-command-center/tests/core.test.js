import assert from "node:assert/strict";
import { commandCenterInput, surfaceRows, summary } from "../src/fixtures.js";
import { commandCenterGate, summarizeCommandCenter, surfaceReady } from "../src/core.js";

const derived = summarizeCommandCenter({ ...commandCenterInput, surfaceRows });
assert.equal(derived.status, "operator-ready");
assert.equal(commandCenterGate(summary), "operator-ready");
assert.equal(summary.surfaces, 8);
assert.equal(summary.readySurfaces, 8);
assert.equal(summary.alerts, 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.fullStackStatus, "valid");
assert.ok(summary.packageTests >= 52);
assert.equal(summary.systems, 11);
assert.equal(summary.demos, 41);
assert.equal(summary.workerJobs, 10);
assert.equal(surfaceRows.filter(surfaceReady).length, 8);
console.log("ok cvpr-release-command-center:", summary.readySurfaces, "surfaces ready");

import assert from "node:assert/strict";
import { commandCenterInput, surfaceRows, summary } from "../src/fixtures.js";
import { commandCenterGate, summarizeCommandCenter, surfaceReady } from "../src/core.js";

const derived = summarizeCommandCenter({ ...commandCenterInput, surfaceRows });
assert.equal(derived.status, summary.status);
assert.equal(commandCenterGate(summary), summary.status === "operator-ready" ? "operator-ready" : "block");
assert.equal(summary.surfaces, 8);
assert.ok(summary.readySurfaces >= 0 && summary.readySurfaces <= 8);
assert.ok(summary.alerts >= 0);
assert.equal(summary.importIssues, 0);
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.ok(summary.packageTests >= 52);
assert.equal(summary.systems, 11);
assert.equal(summary.demos, 41);
assert.equal(summary.workerJobs, 14);
assert.equal(summary.cachedResults, 56);
assert.equal(surfaceRows.filter(surfaceReady).length, summary.readySurfaces);
assert.equal(
  summary.status,
  summary.surfaces === 8 &&
  summary.readySurfaces === 8 &&
  summary.alerts === 0 &&
  summary.importIssues === 0 &&
  summary.fullStackStatus === "valid" &&
  summary.packageTests >= 52
    ? "operator-ready"
    : "block"
);
console.log("ok cvpr-release-command-center:", summary.readySurfaces, "surfaces ready");

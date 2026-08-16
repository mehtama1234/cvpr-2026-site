import assert from "node:assert/strict";
import { sloInput, sloRows, summary } from "../src/fixtures.js";
import { passSlo, sloGate, summarizeSlo } from "../src/core.js";

const derived = summarizeSlo({ ...sloInput, sloRows });
assert.equal(derived.status, "release");
assert.equal(sloGate(summary), "release");
assert.equal(summary.slos, 10);
assert.equal(summary.passingSlos, 10);
assert.equal(summary.criticalFailures, 0);
assert.equal(summary.readinessFloor, 68.1);
assert.equal(summary.releaseGate, "release");
assert.equal(summary.fullStackStatus, "valid");
assert.equal(sloRows.filter(passSlo).length, 10);
assert.equal(sloRows.filter((row) => row.severity === "critical").length, 10);
console.log("ok cvpr-release-slo-dashboard:", summary.passingSlos, "SLOs passing");

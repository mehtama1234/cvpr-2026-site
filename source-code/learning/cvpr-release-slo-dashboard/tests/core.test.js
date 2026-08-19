import assert from "node:assert/strict";
import { sloInput, sloRows, summary } from "../src/fixtures.js";
import { passSlo, sloGate, summarizeSlo } from "../src/core.js";

const derived = summarizeSlo({ ...sloInput, sloRows });
assert.equal(derived.status, summary.status);
assert.equal(sloGate(summary), summary.status);
assert.equal(summary.slos, 10);
assert.ok(summary.passingSlos >= 0 && summary.passingSlos <= summary.slos);
assert.ok(summary.criticalFailures >= 0);
assert.ok(summary.readinessFloor >= 0);
assert.equal(summary.releaseGate, "release");
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.equal(sloRows.filter(passSlo).length, summary.passingSlos);
assert.equal(sloRows.filter((row) => row.severity === "critical").length, 10);
assert.equal(summary.status, summary.passingSlos === summary.slos && summary.criticalFailures === 0 ? "release" : "block");
console.log("ok cvpr-release-slo-dashboard:", summary.passingSlos, "SLOs passing");

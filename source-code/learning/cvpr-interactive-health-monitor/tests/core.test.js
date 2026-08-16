import assert from "node:assert/strict";
import { monitorProbes, summary } from "../src/fixtures.js";
import { monitorGate, probeReady, summarizeProbes } from "../src/core.js";

assert.equal(monitorProbes.length, 32);
assert.equal(monitorProbes.every(probeReady), true);
const derived = summarizeProbes(monitorProbes);
assert.equal(derived.passing, summary.passingProbes);
assert.equal(derived.blocked, 0);
assert.equal(derived.surfaces, 7);
assert.equal(summary.surfaces, 6);
assert.equal(summary.demos, 40);
assert.equal(summary.holds, 0);
assert.equal(monitorGate(summary), "monitor-ready");
console.log("ok cvpr-interactive-health-monitor:", summary.probes, "probes");

import assert from "node:assert/strict";
import { demos, gauntletRows, incidents, summary } from "../src/fixtures.js";
import { applyIncident, extractSignals, gauntletDecision, summarizeGauntlet } from "../src/core.js";

const safety = demos.find((demo) => demo.id === "safety-deployment");
const launch = incidents.find((incident) => incident.id === "launch-audit");
const compound = incidents.find((incident) => incident.id === "compound-launch");
const base = applyIncident(safety, launch);
const stressed = applyIncident(safety, compound);

assert.equal(demos.length, 8);
assert.equal(incidents.length, 4);
assert.equal(gauntletRows.length, 32);
assert.ok(extractSignals(safety.summary).gpuBackedCases >= 8);
assert.ok(stressed.metrics.risk > base.metrics.risk);
assert.ok(stressed.metrics.evidence < base.metrics.evidence);
assert.match(gauntletDecision(stressed.metrics), /^(release|review|block)$/);

const derived = summarizeGauntlet(demos, incidents);
assert.equal(derived.gauntletRows, 32);
assert.equal(summary.demos, 8);
assert.equal(summary.incidents, 4);
assert.equal(summary.gauntletRows, 32);
assert.equal(summary.sourceRelease, 8);
assert.ok(summary.review >= 8);
assert.ok(summary.block >= 1);
assert.ok(summary.maxRisk >= 68);
assert.equal(summary.status, "release");
console.log("ok cvpr-cross-theme-incident-gauntlet:", summary.gauntletRows, "rows");

import assert from "node:assert/strict";
import { scenarioRows, summary } from "../src/fixtures.js";
import { scenarioLabGate, scenarioReady, summarizeScenarios } from "../src/core.js";

assert.equal(scenarioRows.length, 636);
assert.equal(scenarioRows.every(scenarioReady), true);
const derived = summarizeScenarios(scenarioRows);
assert.equal(derived.ready, summary.readyScenarios);
assert.equal(derived.themes, 8);
assert.equal(derived.lanes, 212);
assert.equal(derived.evidence, 212);
assert.equal(derived.failure, 212);
assert.equal(derived.release, 212);
assert.equal(summary.holds, 0);
assert.equal(scenarioLabGate(summary), "scenario-lab-ready");
console.log("ok cvpr-subtheme-scenario-lab:", summary.scenarios, "scenarios");

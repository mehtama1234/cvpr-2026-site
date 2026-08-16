import assert from "node:assert/strict";
import { runnerCases, summary } from "../src/fixtures.js";
import { caseReady, filterCases, runnerGate, summarizeCases } from "../src/core.js";

assert.equal(runnerCases.length, 120);
assert.equal(new Set(runnerCases.map((item) => item.jobId)).size, 40);
assert.equal(filterCases(runnerCases, { scenario: "artifact-integrity" }).length, 40);
assert.equal(filterCases(runnerCases, { theme: "frontier" }).length, 15);
assert.equal(filterCases(runnerCases, { wave: "fifth" }).length, 24);
assert.equal(runnerCases.every(caseReady), true);
const derived = summarizeCases(runnerCases);
assert.equal(derived.cases, summary.cases);
assert.equal(derived.passingCases, summary.passingCases);
assert.equal(derived.blockedCases, 0);
assert.equal(runnerGate(summary), "runner-ready");
console.log("ok cvpr-interactive-scenario-runner:", summary.cases, "cases");

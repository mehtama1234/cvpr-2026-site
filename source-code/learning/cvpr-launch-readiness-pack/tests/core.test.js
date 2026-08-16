import assert from "node:assert/strict";
import { launchInput, launchSteps, summary } from "../src/fixtures.js";
import { launchGate, summarizeLaunch } from "../src/core.js";

const derived = summarizeLaunch(launchInput);
assert.equal(derived.status, "launch-ready");
assert.equal(launchGate(summary), "launch-ready");
assert.equal(summary.systems, 11);
assert.equal(summary.demos, 41);
assert.equal(summary.benchRelease, 44);
assert.equal(summary.workerJobs, 10);
assert.equal(summary.cachedResults, 40);
assert.equal(summary.criticalFailures, 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.fullStackStatus, "valid");
assert.equal(launchSteps.length, 8);
assert.ok(launchSteps.every((step) => step.surface && step.command && step.evidence));
console.log("ok cvpr-launch-readiness-pack:", summary.status, summary.packageTests, "package tests");

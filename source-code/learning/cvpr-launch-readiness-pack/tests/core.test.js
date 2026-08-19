import assert from "node:assert/strict";
import { launchInput, launchSteps, summary } from "../src/fixtures.js";
import { launchGate, summarizeLaunch } from "../src/core.js";

const derived = summarizeLaunch(launchInput);
assert.equal(derived.status, summary.status);
assert.equal(launchGate(summary), summary.status === "launch-ready" ? "launch-ready" : "block");
assert.equal(summary.systems, 11);
assert.equal(summary.demos, 41);
assert.equal(summary.benchRelease, 44);
assert.ok(summary.workerJobs > 0);
assert.ok(summary.cachedResults > 0);
assert.equal(summary.liveIntakeResults, summary.cachedResults);
assert.ok(summary.criticalFailures >= 0);
assert.equal(summary.importIssues, 0);
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.equal(launchSteps.length, 8);
assert.ok(launchSteps.every((step) => step.surface && step.command && step.evidence));
assert.equal(
  summary.status,
  summary.releaseGate === "release" &&
  summary.sloStatus === "release" &&
  summary.drillbookStatus === "ready" &&
  summary.operationsStatus === "ready" &&
  summary.validationGate === "release" &&
  summary.fullStackStatus === "valid" &&
  summary.criticalFailures === 0 &&
  summary.importIssues === 0
    ? "launch-ready"
    : "block"
);
console.log("ok cvpr-launch-readiness-pack:", summary.status, summary.packageTests, "package tests");

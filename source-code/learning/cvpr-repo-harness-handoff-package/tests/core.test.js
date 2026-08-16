import assert from "node:assert/strict";
import { handoffInput } from "../src/fixtures.js";
import { handoffGate, summarizeHandoff } from "../src/core.js";

const summary = summarizeHandoff(handoffInput);
assert.equal(handoffGate(summary), "ready");
assert.equal(summary.jobs, 40);
assert.equal(summary.waves, 8);
assert.equal(summary.intakeIssues, 0);
assert.equal(summary.firstWave, "frontier");
assert.ok(summary.zipEntries.includes("source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json"));
console.log("ok cvpr-repo-harness-handoff-package:", summary.jobs, "jobs");

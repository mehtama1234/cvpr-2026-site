import assert from "node:assert/strict";
import { roadmapGoals, sources, summary } from "../src/fixtures.js";
import { roadmapReady, summarizeRoadmap } from "../src/core.js";

const derived = summarizeRoadmap(roadmapGoals, sources);
assert.equal(derived.goals, 6);
assert.equal(derived.readyGoals, 6);
assert.equal(summary.goals, 6);
assert.equal(summary.readyGoals, 6);
assert.equal(summary.sourceGate, "release");
assert.equal(summary.closeoutStatus, "sealed");
assert.equal(summary.operatorStatus, "operator-ready");
assert.equal(summary.fullStackStatus, "valid");
assert.equal(roadmapReady(summary), "ready");
assert.equal(summary.status, "ready");
assert.ok(roadmapGoals.every((goal) => goal.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-second-round-demo-roadmap:", summary.goals, "goals ready");

import assert from "node:assert/strict";
import { roadmapGoals, sources, summary } from "../src/fixtures.js";
import { roadmapReady, summarizeRoadmap } from "../src/core.js";

const derived = summarizeRoadmap(roadmapGoals, sources);
assert.equal(derived.goals, 6);
assert.equal(derived.readyGoals, 6);
assert.equal(summary.goals, 6);
assert.equal(summary.readyGoals, 6);
assert.equal(summary.sourceGate, "block");
assert.equal(summary.closeoutStatus, "block");
assert.equal(summary.operatorStatus, "block");
assert.equal(summary.fullStackStatus, "valid");
assert.equal(roadmapReady(summary), "block");
assert.equal(summary.status, "block");
assert.ok(roadmapGoals.every((goal) => goal.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-second-round-demo-roadmap:", summary.goals, "goals planned");

import assert from "node:assert/strict";
import { roadmapInput, roadmapGoals, summary } from "../src/fixtures.js";
import { roadmapGate, summarizeRoadmap } from "../src/core.js";

const derived = summarizeRoadmap({ ...roadmapInput, roadmapGoals });
assert.equal(derived.status, "ready");
assert.equal(roadmapGate(summary), "ready");
assert.equal(summary.goals, 8);
assert.equal(summary.themes, 8);
assert.equal(summary.linkedSystems, 11);
assert.equal(summary.proPlusGoals, 7);
assert.equal(summary.cachedEvidenceGoals, 1);
assert.equal(summary.operatorStatus, "operator-ready");
assert.equal(summary.missingEvidence, 0);
assert.ok(roadmapGoals.every((goal) => goal.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-next-demo-roadmap:", summary.goals, "goals");

import assert from "node:assert/strict";
import { roadmapInput, roadmapGoals, summary } from "../src/fixtures.js";
import { roadmapGate, summarizeRoadmap } from "../src/core.js";

const derived = summarizeRoadmap({ ...roadmapInput, roadmapGoals });
assert.equal(derived.status, summary.status);
assert.equal(roadmapGate(summary), summary.status === "ready" ? "ready" : "block");
assert.equal(summary.goals, 8);
assert.equal(summary.themes, 8);
assert.equal(summary.linkedSystems, 11);
assert.equal(summary.proPlusGoals, 7);
assert.equal(summary.cachedEvidenceGoals, 1);
assert.ok(["operator-ready", "block"].includes(summary.operatorStatus));
assert.equal(summary.missingEvidence, 0);
assert.ok(roadmapGoals.every((goal) => goal.command === "python3 scripts/validate_cvpr_full_stack.py"));
assert.equal(
  summary.status,
  summary.goals === 8 &&
  summary.themes === 8 &&
  summary.linkedSystems === 11 &&
  summary.proPlusGoals === 7 &&
  summary.cachedEvidenceGoals === 1 &&
  summary.missingEvidence === 0 &&
  summary.operatorStatus === "operator-ready"
    ? "ready"
    : "block"
);
console.log("ok cvpr-next-demo-roadmap:", summary.goals, "goals");

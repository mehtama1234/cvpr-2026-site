import assert from "node:assert/strict";
import { backlogInput, backlogTasks, summary } from "../src/fixtures.js";
import { backlogGate, summarizeBacklog } from "../src/core.js";

const derived = summarizeBacklog({ ...backlogInput, backlogTasks });
assert.equal(derived.status, summary.status);
assert.equal(backlogGate(summary), summary.status === "ready" ? "ready" : "block");
assert.equal(summary.goals, 8);
assert.equal(summary.tasks, 24);
assert.equal(summary.themes, 8);
assert.equal(summary.linkedSystems, 11);
assert.equal(summary.proPlusTasks, 21);
assert.equal(summary.cachedEvidenceTasks, 3);
assert.ok(["operator-ready", "block"].includes(summary.operatorStatus));
assert.equal(summary.missingEvidence, 0);
assert.ok(backlogTasks.every((task) => task.command === "python3 scripts/validate_cvpr_full_stack.py"));
assert.ok(backlogTasks.every((task) => task.acceptance && task.evidencePage && task.targetFile));
assert.equal(
  summary.status,
  summary.goals === 8 &&
  summary.tasks === 24 &&
  summary.themes === 8 &&
  summary.linkedSystems === 11 &&
  summary.proPlusTasks === 21 &&
  summary.cachedEvidenceTasks === 3 &&
  summary.missingEvidence === 0 &&
  summary.operatorStatus === "operator-ready"
    ? "ready"
    : "block"
);
console.log("ok cvpr-demo-build-backlog:", summary.tasks, "tasks");

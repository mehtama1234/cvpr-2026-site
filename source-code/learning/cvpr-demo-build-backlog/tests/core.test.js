import assert from "node:assert/strict";
import { backlogInput, backlogTasks, summary } from "../src/fixtures.js";
import { backlogGate, summarizeBacklog } from "../src/core.js";

const derived = summarizeBacklog({ ...backlogInput, backlogTasks });
assert.equal(derived.status, "ready");
assert.equal(backlogGate(summary), "ready");
assert.equal(summary.goals, 8);
assert.equal(summary.tasks, 24);
assert.equal(summary.themes, 8);
assert.equal(summary.linkedSystems, 11);
assert.equal(summary.proPlusTasks, 21);
assert.equal(summary.cachedEvidenceTasks, 3);
assert.equal(summary.operatorStatus, "operator-ready");
assert.equal(summary.missingEvidence, 0);
assert.ok(backlogTasks.every((task) => task.command === "python3 scripts/validate_cvpr_full_stack.py"));
assert.ok(backlogTasks.every((task) => task.acceptance && task.evidencePage && task.targetFile));
console.log("ok cvpr-demo-build-backlog:", summary.tasks, "tasks");

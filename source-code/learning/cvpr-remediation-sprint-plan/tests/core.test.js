import assert from "node:assert/strict";
import { sprintInput } from "../src/fixtures.js";
import { sprintGate, summarizeSprintPlan } from "../src/core.js";

const summary = summarizeSprintPlan(sprintInput);
assert.equal(sprintGate(summary), "ready");
assert.equal(summary.sprints, 3);
assert.equal(summary.tasks, sprintInput.board.summary.blockTasks);
assert.equal(summary.assignedTasks, summary.tasks);
assert.equal(summary.criticalTasks, sprintInput.board.summary.criticalTasks);
assert.equal(summary.highTasks, sprintInput.board.summary.highTasks);
assert.equal(summary.focusedTasks, sprintInput.board.summary.focusedTasks);
assert.equal(summary.acceptanceChecks, summary.tasks);
assert.equal(summary.operationsStatus, "ready");
for (const sprint of sprintInput.sprints) {
  assert.ok(sprint.exitCriteria.length >= 3);
  for (const task of sprint.tasks) {
    assert.ok(task.acceptanceCheck.includes(task.metric));
    assert.ok(task.page.endsWith(".html"));
  }
}
console.log("ok cvpr-remediation-sprint-plan:", summary.sprints, "sprints");

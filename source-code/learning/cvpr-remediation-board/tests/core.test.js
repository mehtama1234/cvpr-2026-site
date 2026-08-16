import assert from "node:assert/strict";
import { boardInput } from "../src/fixtures.js";
import { boardGate, summarizeBoard } from "../src/core.js";

const summary = summarizeBoard(boardInput);
assert.equal(boardGate(summary), "ready");
assert.equal(summary.blockTasks, boardInput.failureAtlas.summary.block);
assert.equal(summary.unownedTasks, 0);
assert.equal(summary.controlledTasks, summary.blockTasks);
assert.ok(summary.criticalTasks >= 0);
assert.equal(summary.playbookPlays, 8);
assert.equal(summary.coveredThemes, 8);
assert.equal(summary.receiptStatus, "ready");
assert.equal(summary.receiptArtifacts, 7);
for (const task of boardInput.tasks) {
  assert.equal(task.decision, "block");
  assert.ok(task.owner);
  assert.ok(task.page.endsWith(".html"));
  assert.ok(task.controls.length > 0);
  assert.ok(task.acceptanceAction.includes(task.metric));
}
console.log("ok cvpr-remediation-board:", summary.blockTasks, "block tasks");

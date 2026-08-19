import assert from "node:assert/strict";
import { actions, retestRows, sourceRows, summary } from "../src/fixtures.js";
import { gauntletDecision, patchEffect, retestAction, summarizeRetests } from "../src/core.js";

const critical = actions.find((action) => action.priority === "critical");
const source = sourceRows.find((row) => row.demoId === critical.demoId && row.incidentId === critical.incidentId);
const retest = retestAction(critical, source);
assert.ok(patchEffect(critical).risk < 0);
assert.ok(retest.after.risk < retest.before.risk);
assert.ok(retest.after.evidence > retest.before.evidence);
assert.notEqual(gauntletDecision(retest.after), "block");

const derived = summarizeRetests(retestRows);
assert.equal(actions.length, 53);
assert.equal(retestRows.length, 53);
assert.equal(summary.preBlock, derived.preBlock);
assert.equal(summary.postBlock, 0);
assert.equal(summary.clearedBlocks, summary.preBlock);
assert.ok(summary.postRelease >= 17);
assert.ok(summary.minPostEvidence >= 48);
assert.equal(derived.postBlock, summary.postBlock);
assert.equal(summary.status, "release");
console.log("ok cvpr-remediation-retest-harness:", summary.retestRows, "retests");

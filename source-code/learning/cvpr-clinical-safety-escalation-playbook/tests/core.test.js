import assert from "node:assert/strict";
import { escalationRows, sources, summary } from "../src/fixtures.js";
import { escalationDecision, escalationGate, summarizeEscalation } from "../src/core.js";

const derived = summarizeEscalation(escalationRows, sources);
assert.equal(derived.status, "ready");
assert.equal(escalationGate(summary), "ready");
assert.equal(summary.rows, 8);
assert.equal(summary.systems, 2);
assert.equal(summary.canaryRollback, 0);
assert.equal(summary.rollbackStressStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(summary.humanReview + summary.safetyHold + summary.rollbackRehearsal >= 3);
assert.ok(summary.rollbackRehearsal <= 1);
assert.ok(escalationRows.every((row) => escalationDecision(row) === row.decision));
assert.ok(escalationRows.every((row) => row.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-clinical-safety-escalation-playbook:", summary.rows, "rows");

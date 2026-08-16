import assert from "node:assert/strict";
import { sources, stressRows, summary } from "../src/fixtures.js";
import { rollbackDecision, stressGate, summarizeStress } from "../src/core.js";

const derived = summarizeStress(stressRows, sources);
assert.equal(derived.status, "ready");
assert.equal(stressGate(summary), "ready");
assert.equal(summary.stressRows, 6);
assert.equal(summary.systems, 2);
assert.equal(summary.rollbackMisses, 0);
assert.equal(summary.block, 0);
assert.equal(summary.rehearsalStatus, "release");
assert.equal(summary.scenarioStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(stressRows.every((row) => rollbackDecision(row) === row.decision));
assert.ok(stressRows.every((row) => row.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-3d-temporal-rollback-stress-lab:", summary.stressRows, "rows");

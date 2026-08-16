import assert from "node:assert/strict";
import { closeoutRows, sources, summary } from "../src/fixtures.js";
import { resealGate, summarizeReseal } from "../src/core.js";

const derived = summarizeReseal(closeoutRows, sources);
assert.equal(derived.status, "sealed");
assert.equal(resealGate(summary), "sealed");
assert.equal(summary.rows, 6);
assert.equal(summary.sealedRows, 6);
assert.equal(summary.secondRoundDemos, 5);
assert.equal(summary.fullStackStatus, "valid");
assert.ok(summary.packageTests >= 80);
assert.ok(closeoutRows.every((row) => row.status === "sealed"));
assert.ok(closeoutRows.every((row) => row.closeoutCommand === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-second-round-closeout-reseal:", summary.rows, "rows sealed");

import assert from "node:assert/strict";
import { injectionRows, sources, summary } from "../src/fixtures.js";
import { arenaGate, injectionDecision, summarizeArena } from "../src/core.js";

const derived = summarizeArena(injectionRows, sources);
assert.equal(derived.status, "ready");
assert.equal(arenaGate(summary), "ready");
assert.equal(summary.injections, 6);
assert.equal(summary.detected, 6);
assert.equal(summary.routed, 6);
assert.equal(summary.recoverable, 6);
assert.equal(summary.critical, 2);
assert.equal(summary.closeoutStatus, "sealed");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(injectionRows.every((row) => injectionDecision(row) === "recoverable"));
assert.ok(injectionRows.every((row) => row.resealCommand === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-regression-injection-arena:", summary.injections, "injections");

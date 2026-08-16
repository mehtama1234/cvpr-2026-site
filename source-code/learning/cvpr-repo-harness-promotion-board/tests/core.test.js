import assert from "node:assert/strict";
import { promotionRows, summary } from "../src/fixtures.js";
import { boardGate, promoteDecision, summarizeBoard } from "../src/core.js";

assert.equal(promotionRows.length, 8);
assert.equal(promotionRows.every((row) => promoteDecision(row) === "promote"), true);
assert.equal(promotionRows.reduce((sum, row) => sum + row.jobs, 0), 40);
const derived = summarizeBoard(promotionRows);
assert.equal(derived.status, "ready");
assert.equal(boardGate(summary), "ready");
assert.equal(summary.promote, 8);
assert.equal(summary.hold, 0);
console.log("ok cvpr-repo-harness-promotion-board:", summary.waves, "waves");

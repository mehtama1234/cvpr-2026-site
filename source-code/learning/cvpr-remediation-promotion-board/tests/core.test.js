import assert from "node:assert/strict";
import { promotionRows, retestRows, summary } from "../src/fixtures.js";
import { buildPromotionRows, promotionDecision, promotionReason, summarizePromotion } from "../src/core.js";

const rows = buildPromotionRows(retestRows);
const promoted = rows.find((row) => row.promotion === "promote");
const monitored = rows.find((row) => row.promotion === "monitor");
assert.equal(rows.length, 53);
assert.equal(promotionDecision(retestRows.find((row) => row.id === promoted.retestId)), "promote");
assert.ok(promotionReason(retestRows.find((row) => row.id === monitored.retestId)).includes("monitoring"));
assert.equal(promotionRows.length, 53);

const derived = summarizePromotion(promotionRows);
assert.equal(summary.rows, 53);
assert.equal(summary.promote, derived.promote);
assert.equal(summary.monitor, derived.monitor);
assert.equal(summary.hold, 0);
assert.equal(summary.clearedBlocks, derived.clearedBlocks);
assert.equal(summary.themes, 8);
assert.equal(summary.incidents, 7);
assert.equal(derived.promote, summary.promote);
assert.equal(summary.status, "release");
console.log("ok cvpr-remediation-promotion-board:", summary.promote, "promote", summary.monitor, "monitor");

import assert from "node:assert/strict";
import { summary, surfaceRows } from "../src/fixtures.js";
import { portfolioGate, summarizePortfolio, surfaceReady } from "../src/core.js";

assert.equal(surfaceRows.length, 8);
assert.equal(surfaceRows.every(surfaceReady), true);
const derived = summarizePortfolio(surfaceRows);
assert.equal(derived.status, "portfolio-ready");
assert.equal(derived.rows, 40);
assert.equal(derived.liveRows, 40);
assert.equal(derived.smokePassed, 40);
assert.equal(derived.artifacts, 40);
assert.equal(derived.holdDemo, 0);
assert.equal(portfolioGate(summary), "portfolio-ready");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-live-evidence-portfolio:", summary.rows, "rows");

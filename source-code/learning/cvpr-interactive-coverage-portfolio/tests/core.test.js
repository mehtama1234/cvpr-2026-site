import assert from "node:assert/strict";
import { portfolioRows, summary } from "../src/fixtures.js";
import { portfolioGate, rowReady, summarizePortfolio } from "../src/core.js";

assert.equal(portfolioRows.length, 40);
assert.equal(new Set(portfolioRows.map((row) => row.theme)).size, 8);
assert.equal(new Set(portfolioRows.map((row) => row.wave)).size, 5);
assert.equal(portfolioRows.every(rowReady), true);
assert.equal(portfolioRows.every((row) => row.localArtifacts === 3), true);
assert.equal(portfolioRows.every((row) => row.controls === 5), true);
const derived = summarizePortfolio(portfolioRows);
assert.equal(derived.totalDemos, summary.totalDemos);
assert.equal(derived.localArtifacts, summary.localArtifacts);
assert.equal(derived.controls, summary.controls);
assert.equal(derived.runtimeControllers, summary.runtimeControllers);
assert.equal(derived.duplicateJobs, 0);
assert.equal(portfolioGate(summary), "coverage-ready");
console.log("ok cvpr-interactive-coverage-portfolio:", summary.totalDemos, "demos");

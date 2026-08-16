import assert from "node:assert/strict";
import { portfolioInput, summary, themeRows } from "../src/fixtures.js";
import { portfolioGate, summarizePortfolio } from "../src/core.js";

const derived = summarizePortfolio({ ...portfolioInput, themeRows });
assert.equal(derived.status, "release");
assert.equal(portfolioGate(summary), "release");
assert.equal(summary.themes, 8);
assert.equal(summary.systems, 11);
assert.equal(summary.stages, 33);
assert.equal(summary.demos, 41);
assert.equal(summary.benchRelease, 44);
assert.equal(summary.missingDemoEvidence, 0);
assert.equal(summary.proPlusSystems, 10);
assert.equal(summary.cachedEvidenceSystems, 1);
assert.equal(summary.operatorStatus, "operator-ready");
assert.equal(themeRows.reduce((sum, row) => sum + row.systems, 0), 11);
console.log("ok cvpr-theme-portfolio-map:", summary.themes, "themes,", summary.systems, "systems");

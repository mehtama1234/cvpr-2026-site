import assert from "node:assert/strict";
import { portfolioRows, summary } from "../src/fixtures.js";
import { deepViewerReady, portfolioGate, summarizePortfolio } from "../src/core.js";

assert.equal(portfolioRows.length, 8);
assert.equal(new Set(portfolioRows.map((row) => row.theme)).size, 8);
assert.equal(portfolioRows.every(deepViewerReady), true);
assert.equal(portfolioRows.every((row) => row.panels === 5), true);
assert.equal(portfolioRows.every((row) => row.artifacts === 3), true);
assert.equal(portfolioRows.every((row) => row.artifactLocalPaths === 3), true);
assert.equal(portfolioRows.every((row) => row.artifactMissingPaths === 0), true);
const derived = summarizePortfolio(portfolioRows);
assert.equal(derived.deepViewers, summary.deepViewers);
assert.equal(derived.artifactLocalPaths, summary.artifactLocalPaths);
assert.equal(derived.artifactMissingPaths, summary.artifactMissingPaths);
assert.equal(portfolioGate(summary), "portfolio-ready");
console.log("ok cvpr-deep-viewer-portfolio:", summary.deepViewers, "deep viewers");

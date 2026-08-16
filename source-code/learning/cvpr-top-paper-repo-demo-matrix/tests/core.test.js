import assert from "node:assert/strict";
import { matrixRows, summary } from "../src/fixtures.js";
import { matrixGate, matrixRowReady, summarizeMatrix } from "../src/core.js";

assert.equal(matrixRows.length, 40);
assert.equal(matrixRows.every(matrixRowReady), true);
const derived = summarizeMatrix(matrixRows);
assert.equal(derived.themes, 8);
assert.equal(derived.readyRows, summary.readyRows);
assert.equal(derived.promotedEvidence, summary.promotedEvidenceRows);
assert.equal(derived.interactiveReady, summary.interactiveRows);
assert.equal(derived.deepViewers, summary.deepViewerRows);
assert.equal(derived.artifacts, 120);
assert.equal(derived.controls, 200);
assert.equal(summary.holds, 0);
assert.equal(matrixGate(summary), "matrix-ready");
console.log("ok cvpr-top-paper-repo-demo-matrix:", summary.topPaperRepos, "repos");

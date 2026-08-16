import assert from "node:assert/strict";
import { qaRows, sources, summary } from "../src/fixtures.js";
import { rowReady, summarizeVisualQa, visualQaGate } from "../src/core.js";

const derived = summarizeVisualQa(qaRows, sources);
assert.equal(derived.status, "ready");
assert.equal(visualQaGate(summary), "ready");
assert.equal(summary.surfaces, 8);
assert.equal(summary.readySurfaces, 8);
assert.equal(summary.requiredTokensMissing, 0);
assert.equal(summary.brokenLocalLinks, 0);
assert.equal(summary.highLayoutRisk, 0);
assert.equal(summary.roadmapStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(qaRows.every(rowReady));
assert.ok(qaRows.every((row) => row.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-visual-qa-sweep-dashboard:", summary.readySurfaces, "surfaces ready");

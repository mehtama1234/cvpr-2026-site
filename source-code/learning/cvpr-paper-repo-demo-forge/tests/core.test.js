import assert from "node:assert/strict";
import { blueprintRows, summary } from "../src/fixtures.js";
import { blueprintReady, forgeGate, summarizeForge } from "../src/core.js";

const derived = summarizeForge(blueprintRows);
assert.equal(derived.status, "ready");
assert.equal(forgeGate(summary), "ready");
assert.equal(summary.blueprints, 8);
assert.equal(summary.readyBlueprints, 8);
assert.equal(summary.themes, 8);
assert.ok(summary.repoPapers >= 32);
assert.equal(summary.undercoveredThemes, 4);
assert.ok(blueprintRows.every(blueprintReady));
assert.ok(blueprintRows.every((row) => row.seedPapers.every((paper) => paper.repo)));
console.log("ok cvpr-paper-repo-demo-forge:", summary.blueprints, "blueprints");

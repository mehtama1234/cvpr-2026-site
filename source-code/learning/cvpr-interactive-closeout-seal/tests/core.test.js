import assert from "node:assert/strict";
import { closeoutLayers, summary } from "../src/fixtures.js";
import { closeoutGate, layerSealed, summarizeSeal } from "../src/core.js";

assert.equal(closeoutLayers.length, 11);
assert.equal(closeoutLayers.every(layerSealed), true);
const derived = summarizeSeal(closeoutLayers);
assert.equal(derived.sealed, summary.sealedLayers);
assert.equal(derived.packageTests, 11);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.holds, 0);
assert.equal(closeoutGate(summary), "closeout-ready");
console.log("ok cvpr-interactive-closeout-seal:", summary.layers, "layers");

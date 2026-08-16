import assert from "node:assert/strict";
import { releaseLayers, summary } from "../src/fixtures.js";
import { layerReady, releaseGate, summarizeRelease } from "../src/core.js";

assert.equal(releaseLayers.length, 4);
assert.equal(releaseLayers.every(layerReady), true);
const derived = summarizeRelease(releaseLayers);
assert.equal(derived.readyLayers, summary.readyLayers);
assert.equal(derived.pages, summary.pages);
assert.equal(derived.validators, summary.validators);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.holds, 0);
assert.equal(releaseGate(summary), "release-pack-ready");
console.log("ok cvpr-interactive-release-pack:", summary.layers, "layers");

import assert from "node:assert/strict";
import { manifest, summary, waves } from "../src/fixtures.js";
import { buildWaves, summarizeWaves, waveReady } from "../src/core.js";

assert.equal(waves.length, 8);
assert.equal(waves.every(waveReady), true);
assert.equal(waves[0].theme, "frontier");
assert.equal(waves[1].theme, "threed");
assert.equal(waves[7].theme, "learning");
assert.equal(waves[7].start, 35);
assert.equal(buildWaves(manifest, 5).length, 8);
const derived = summarizeWaves(waves);
assert.equal(derived.status, "ready");
assert.equal(derived.jobs, 40);
assert.equal(summary.status, "ready");
assert.equal(summary.firstWaveReceipt, "cvpr-repo-harness-first-batch-receipt");
console.log("ok cvpr-repo-harness-wave-planner:", summary.waves, "waves");

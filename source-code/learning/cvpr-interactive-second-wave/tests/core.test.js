import assert from "node:assert/strict";
import { waveRows, summary } from "../src/fixtures.js";
import { summarizeWave, waveGate, waveReady } from "../src/core.js";

assert.equal(waveRows.length, 8);
assert.equal(new Set(waveRows.map((row) => row.theme)).size, 8);
assert.equal(waveRows.every(waveReady), true);
assert.equal(waveRows.every((row) => row.localArtifacts === 3), true);
assert.equal(waveRows.every((row) => row.controls.length === 5), true);
const derived = summarizeWave(waveRows);
assert.equal(derived.localArtifacts, summary.localArtifacts);
assert.equal(derived.runtimeControllers, summary.runtimeControllers);
assert.equal(waveGate(summary), "wave-ready");
console.log("ok cvpr-interactive-second-wave:", summary.demos, "demos");

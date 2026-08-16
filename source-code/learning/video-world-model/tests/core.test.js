import assert from "node:assert/strict";
import { stages } from "../src/fixtures.js";
import { pct, summarizeStage, summarizeSystem } from "../src/core.js";

assert.equal(pct(0.875), 87.5);
assert.equal(stages.length, 3);
const first = summarizeStage(stages[0]);
assert.equal(first.system, "video-world-model");
assert.equal(first.raw.reusableRule, first.reusableRule);
assert.ok(first.score >= 40);
const system = summarizeSystem(stages);
assert.equal(system.stageCount, 3);
assert.equal(system.cluster, "Video generation and world models");
assert.ok(system.avgScore >= 50);
console.log("ok video-world-model:", system.avgScore, system.cluster);

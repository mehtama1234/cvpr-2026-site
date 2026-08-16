import assert from "node:assert/strict";
import { stages } from "../src/fixtures.js";
import { pct, summarizeStage, summarizeSystem } from "../src/core.js";

assert.equal(pct(0.875), 87.5);
assert.equal(stages.length, 3);
const first = summarizeStage(stages[0]);
assert.equal(first.system, "open-vocab-visual-search");
assert.equal(first.raw.reusableRule, first.reusableRule);
assert.ok(first.score >= 40);
const system = summarizeSystem(stages);
assert.equal(system.stageCount, 3);
assert.equal(system.cluster, "Open-vocabulary vision");
assert.ok(system.avgScore >= 50);
console.log("ok open-vocab-visual-search:", system.avgScore, system.cluster);

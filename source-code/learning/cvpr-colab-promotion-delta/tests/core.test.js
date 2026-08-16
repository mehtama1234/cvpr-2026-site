import assert from "node:assert/strict";
import { deltaInput } from "../src/fixtures.js";
import { deltaGate, summarizeDelta } from "../src/core.js";

const summary = summarizeDelta(deltaInput);
assert.equal(deltaGate(summary), "release");
assert.equal(summary.cases, 40);
assert.equal(summary.jobs, 10);
assert.equal(summary.missing, 0);
assert.equal(summary.modeMismatches, 0);
assert.equal(summary.regressions, 0);
assert.equal(summary.maxReadinessDrop, 0);
console.log("ok cvpr-colab-promotion-delta:", summary.cases, "cases");

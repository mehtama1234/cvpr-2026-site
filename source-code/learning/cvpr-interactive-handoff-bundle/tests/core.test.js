import assert from "node:assert/strict";
import { handoffItems, summary } from "../src/fixtures.js";
import { handoffGate, handoffItemReady, summarizeHandoff } from "../src/core.js";

assert.equal(handoffItems.length, 11);
assert.equal(handoffItems.every(handoffItemReady), true);
const derived = summarizeHandoff(handoffItems);
assert.equal(derived.sealed, summary.sealedItems);
assert.equal(derived.packageTests, 11);
assert.equal(summary.fullStackStatus, "valid");
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.holds, 0);
assert.equal(handoffGate(summary), "handoff-ready");
console.log("ok cvpr-interactive-handoff-bundle:", summary.items, "items");

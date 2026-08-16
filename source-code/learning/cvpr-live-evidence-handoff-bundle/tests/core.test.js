import assert from "node:assert/strict";
import { summary } from "../src/fixtures.js";
import { handoffGate, summarizeBundle } from "../src/core.js";

assert.equal(handoffGate(summary), "handoff-ready");
const derived = summarizeBundle(summary);
assert.equal(derived.status, "handoff-ready");
assert.equal(derived.rows, 40);
assert.equal(derived.surfaces, 8);
assert.ok(summary.zipEntryNames.includes("source-code/learning/cvpr-live-evidence-handoff-bundle/LIVE_EVIDENCE_HANDOFF_RUNBOOK.md"));
console.log("ok cvpr-live-evidence-handoff-bundle:", summary.rows, "rows");

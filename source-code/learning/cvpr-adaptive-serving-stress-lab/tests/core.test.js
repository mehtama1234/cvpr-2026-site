import assert from "node:assert/strict";
import { profiles, records, stageEvidence, summary } from "../src/fixtures.js";
import { applyProfile, decision, evaluateStressCase, scoreServingPolicy, summarizeStressLab } from "../src/core.js";

const base = records[0];
const squeezed = applyProfile(base, profiles.find((profile) => profile.id === "latency-squeeze"));
assert.ok(squeezed.tokenBudget < base.controls.tokenBudget);
assert.ok(squeezed.quantizationLevel > base.controls.quantizationLevel);

const guarded = evaluateStressCase(base, profiles.find((profile) => profile.id === "quality-guard"), stageEvidence);
assert.ok(guarded.metrics.retainedEvidence >= base.metrics.retainedEvidence);
assert.match(decision(guarded.metrics), /^(release|review|block)$/);

const scored = scoreServingPolicy(base.controls, stageEvidence);
assert.ok(scored.readiness >= 0 && scored.readiness <= 100);

const derived = summarizeStressLab(records, profiles, stageEvidence);
assert.equal(derived.cases, 4);
assert.equal(derived.profiles, 3);
assert.equal(derived.stressRows.length, 12);
assert.equal(summary.stressRows, 12);
assert.equal(summary.gpuBackedCases, 4);
assert.equal(summary.backlogGoal, "Adaptive serving stress lab");
assert.equal(summary.status, "release");
assert.ok(summary.minRetainedEvidence >= 55);
assert.ok(summary.maxRisk <= 42);
console.log("ok cvpr-adaptive-serving-stress-lab:", summary.stressRows, "stress rows");

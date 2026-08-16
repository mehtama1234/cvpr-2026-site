import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseRolloutMetrics, evaluateScenario, normalizeCachedGpuResult, rolloutDecision, scoreRolloutCase, summarizeBench } from "../src/core.js";

const short = scoreRolloutCase({ rolloutLength: 20, identityDensity: 24, physicsViolations: 8, memoryWindow: 86 }, stageEvidence);
const long = scoreRolloutCase({ rolloutLength: 94, identityDensity: 88, physicsViolations: 78, memoryWindow: 30 }, stageEvidence);
assert.ok(short.identityStability > long.identityStability);
assert.ok(short.drift < long.drift);
assert.notEqual(rolloutDecision(short), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.identityStability >= 0 && row.metrics.identityStability <= 100);
  assert.ok(row.metrics.contactConsistency >= 0 && row.metrics.contactConsistency <= 100);
  assert.ok(row.metrics.drift >= 0 && row.metrics.drift <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.rolloutPlausibility > 0);
const selected = chooseRolloutMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.maxDrift < 38);
assert.ok(summary.minIdentityStability > 56);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-temporal-rollout-bench:", summary.cases, "cases", summary.maxDrift, "max drift");

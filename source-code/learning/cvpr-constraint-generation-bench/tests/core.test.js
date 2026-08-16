import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseGenerationMetrics, evaluateScenario, generationDecision, normalizeCachedGpuResult, scoreGenerationCase, summarizeBench } from "../src/core.js";

const locked = scoreGenerationCase({ editStrength: 20, layoutLock: 88, identityLock: 90, adversarialPromptPressure: 12 }, stageEvidence);
const attacked = scoreGenerationCase({ editStrength: 92, layoutLock: 26, identityLock: 22, adversarialPromptPressure: 94 }, stageEvidence);
assert.ok(locked.constraintSatisfaction > attacked.constraintSatisfaction);
assert.ok(locked.identityDamage < attacked.identityDamage);
assert.notEqual(generationDecision(locked), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.constraintSatisfaction >= 0 && row.metrics.constraintSatisfaction <= 100);
  assert.ok(row.metrics.identityPreservation >= 0 && row.metrics.identityPreservation <= 100);
  assert.ok(row.metrics.identityDamage >= 0 && row.metrics.identityDamage <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.rewardAlignment > 0);
const selected = chooseGenerationMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minConstraintSatisfaction >= 67);
assert.ok(summary.maxIdentityDamage < 35);
assert.equal(summary.block, 0);
assert.equal(summary.release, 4);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-constraint-generation-bench:", summary.cases, "cases", summary.maxIdentityDamage, "max identity damage");

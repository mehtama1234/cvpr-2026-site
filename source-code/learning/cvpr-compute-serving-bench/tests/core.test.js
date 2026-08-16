import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseServingMetrics, evaluateScenario, normalizeCachedGpuResult, scoreServingCase, servingDecision, summarizeBench } from "../src/core.js";

const rich = scoreServingCase({ tokenBudget: 82, quantizationLevel: 18, studentRouting: 35, escalationCost: 20 }, stageEvidence);
const starved = scoreServingCase({ tokenBudget: 18, quantizationLevel: 90, studentRouting: 88, escalationCost: 82 }, stageEvidence);
assert.ok(rich.retainedEvidence > starved.retainedEvidence);
assert.ok(rich.qualityFloor > starved.qualityFloor);
assert.notEqual(servingDecision(rich), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.latency >= 0 && row.metrics.latency <= 100);
  assert.ok(row.metrics.retainedEvidence >= 0 && row.metrics.retainedEvidence <= 100);
  assert.ok(row.metrics.qualityFloor >= 0 && row.metrics.qualityFloor <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.qualityFloor > 0);
const selected = chooseServingMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minRetainedEvidence > 53);
assert.ok(summary.maxLatency > 49);
assert.equal(summary.block, 0);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-compute-serving-bench:", summary.cases, "cases", summary.minRetainedEvidence, "min evidence");

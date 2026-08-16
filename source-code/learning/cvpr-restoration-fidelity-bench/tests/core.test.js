import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseRestorationMetrics, evaluateScenario, normalizeCachedGpuResult, restorationDecision, scoreRestorationCase, summarizeBench } from "../src/core.js";

const mild = scoreRestorationCase({ blur: 12, noise: 18, compression: 12, lowLight: 18, hallucinationPenalty: 24 }, stageEvidence);
const overfit = scoreRestorationCase({ blur: 86, noise: 82, compression: 78, lowLight: 84, hallucinationPenalty: 92 }, stageEvidence);
assert.ok(mild.downstreamUtility > overfit.downstreamUtility);
assert.ok(mild.fabricatedDetailRisk < overfit.fabricatedDetailRisk);
assert.notEqual(restorationDecision(mild), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.diagnosisConfidence >= 0 && row.metrics.diagnosisConfidence <= 100);
  assert.ok(row.metrics.fidelityScore >= 0 && row.metrics.fidelityScore <= 100);
  assert.ok(row.metrics.fabricatedDetailRisk >= 0 && row.metrics.fabricatedDetailRisk <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.downstreamUtility > 0);
const selected = chooseRestorationMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minDownstreamUtility > 62);
assert.ok(summary.maxFabricatedDetailRisk < 30);
assert.equal(summary.block, 0);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-restoration-fidelity-bench:", summary.cases, "cases", summary.maxFabricatedDetailRisk, "max fabricated risk");

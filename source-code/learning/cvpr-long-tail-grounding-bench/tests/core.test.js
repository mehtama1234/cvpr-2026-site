import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseGroundingMetrics, evaluateScenario, groundingDecision, normalizeCachedGpuResult, scoreGroundingCase, summarizeBench } from "../src/core.js";

const common = scoreGroundingCase({ queryRarity: 12, distractorOverlap: 10, boxAmbiguity: 16, evidenceThreshold: 60 }, stageEvidence);
const unsupported = scoreGroundingCase({ queryRarity: 90, distractorOverlap: 90, boxAmbiguity: 88, evidenceThreshold: 84 }, stageEvidence);
assert.ok(common.localizedEvidence > unsupported.localizedEvidence);
assert.ok(common.unsupportedRisk < unsupported.unsupportedRisk);
assert.notEqual(groundingDecision(common), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.proposalRecall >= 0 && row.metrics.proposalRecall <= 100);
  assert.ok(row.metrics.textRegionScore >= 0 && row.metrics.textRegionScore <= 100);
  assert.ok(row.metrics.unsupportedRisk >= 0 && row.metrics.unsupportedRisk <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.localizedEvidence > 0);
const selected = chooseGroundingMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minLocalizedEvidence > 55);
assert.ok(summary.maxUnsupportedRisk <= 24);
assert.equal(summary.release, 4);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-long-tail-grounding-bench:", summary.cases, "cases", summary.minLocalizedEvidence, "min evidence");

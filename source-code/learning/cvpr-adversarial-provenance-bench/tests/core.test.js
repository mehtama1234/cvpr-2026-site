import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseProvenanceMetrics, evaluateScenario, normalizeCachedGpuResult, provenanceDecision, scoreProvenanceCase, summarizeBench } from "../src/core.js";

const easy = scoreProvenanceCase({ attackStrength: 10, generationSource: 12, watermarkVisibility: 92, unlearningProbe: 10 }, stageEvidence);
const hard = scoreProvenanceCase({ attackStrength: 90, generationSource: 86, watermarkVisibility: 8, unlearningProbe: 84 }, stageEvidence);
assert.ok(easy.risk < hard.risk);
assert.ok(easy.evidence > hard.evidence);
assert.notEqual(provenanceDecision(easy), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.attackCoverage >= 0 && row.metrics.attackCoverage <= 100);
  assert.ok(row.metrics.provenanceConfidence >= 0 && row.metrics.provenanceConfidence <= 100);
  assert.ok(row.metrics.leakageRisk >= 0 && row.metrics.leakageRisk <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.evidence > 0);
const selected = chooseProvenanceMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.minEvidence > 51);
assert.ok(summary.maxLeakageRisk > 32);
assert.equal(summary.block, 0);
assert.equal(summary.release, 4);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
console.log("ok cvpr-adversarial-provenance-bench:", summary.cases, "cases", summary.minEvidence, "min evidence");

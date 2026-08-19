import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import { chooseClinicalMetrics, clinicalDecision, evaluateScenario, normalizeCachedGpuResult, scoreClinicalCase, summarizeBench } from "../src/core.js";

const sameSite = scoreClinicalCase({ scannerShift: 12, cohortMix: 15, labelNoise: 5, reviewThreshold: 68 }, stageEvidence);
const shifted = scoreClinicalCase({ scannerShift: 86, cohortMix: 88, labelNoise: 52, reviewThreshold: 82 }, stageEvidence);
assert.ok(sameSite.readiness > shifted.readiness);
assert.ok(sameSite.residualRisk < shifted.residualRisk);
assert.notEqual(clinicalDecision(sameSite), "block");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.calibration >= 0 && row.metrics.calibration <= 100);
  assert.ok(row.metrics.domainEvidence >= 0 && row.metrics.domainEvidence <= 100);
  assert.ok(row.metrics.triageRate >= 0 && row.metrics.triageRate <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.clinicalEvidence > 0);
const selected = chooseClinicalMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.maxResidualRisk < 38);
assert.ok(summary.minClinicalEvidence > 80);
assert.equal(summary.release, 4);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
assert.equal(summary.noBlock, true);
assert.equal(summary.review, 0);
console.log("ok cvpr-clinical-shift-bench:", summary.cases, "cases", summary.maxResidualRisk, "max risk");

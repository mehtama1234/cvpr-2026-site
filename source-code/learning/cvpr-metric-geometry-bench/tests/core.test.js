import assert from "node:assert/strict";
import { scenarios, stageEvidence } from "../src/fixtures.js";
import { evaluateScenario, geometryDecision, scoreGeometryCase, summarizeBench } from "../src/core.js";

const constrained = scoreGeometryCase({ baseline: 82, textureSparsity: 12, scaleAmbiguity: 18, surfaceComplexity: 28 }, stageEvidence);
const weak = scoreGeometryCase({ baseline: 12, textureSparsity: 88, scaleAmbiguity: 92, surfaceComplexity: 86 }, stageEvidence);
assert.ok(constrained.metricEvidence > weak.metricEvidence);
assert.ok(constrained.scaleDrift < weak.scaleDrift);
assert.equal(geometryDecision(constrained), "release");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence);
  assert.ok(row.metrics.poseEvidence >= 0 && row.metrics.poseEvidence <= 100);
  assert.ok(row.metrics.metricEvidence >= 0 && row.metrics.metricEvidence <= 100);
  assert.ok(row.metrics.surfaceConsistency >= 0 && row.metrics.surfaceConsistency <= 100);
  assert.ok(row.metrics.scaleDrift >= 0 && row.metrics.scaleDrift <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-system-evidence");
}

const summary = summarizeBench(scenarios, stageEvidence);
assert.equal(summary.cases, 4);
assert.equal(summary.release, 4);
assert.equal(summary.review, 0);
assert.equal(summary.block, 0);
assert.ok(summary.minMetricEvidence >= 70);
assert.ok(summary.maxScaleDrift <= 35);
assert.ok(summary.maxTopologyRisk <= 38);
console.log("ok cvpr-metric-geometry-bench:", summary.cases, "cases", summary.maxScaleDrift, "max scale drift");

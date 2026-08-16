import assert from "node:assert/strict";
import { cachedGpuResults, scenarios, stageEvidence } from "../src/fixtures.js";
import {
  chooseSafetyMetrics,
  evaluateScenario,
  normalizeCachedGpuResult,
  releaseDecision,
  scoreSafetyCase,
  summarizeBench,
  timeToCollision
} from "../src/core.js";

assert.ok(timeToCollision(90, 80) < timeToCollision(20, 20));
const nominal = scoreSafetyCase({ hazardDensity: 24, actorSpeed: 28, occlusion: 12, actionConfidence: 82 }, stageEvidence);
assert.ok(nominal.sceneGrounding >= 62);
assert.ok(nominal.risk < 35);
assert.equal(releaseDecision(nominal), "release");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence, cachedGpuResults, "cached-real");
  assert.ok(row.metrics.sceneGrounding >= 0 && row.metrics.sceneGrounding <= 100);
  assert.ok(row.metrics.risk >= 0 && row.metrics.risk <= 100);
  assert.ok(row.metrics.ruleViolation >= 0 && row.metrics.ruleViolation <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-real");
  assert.equal(row.provenance.runtime, "google-colab-pro-plus");
}

const cached = normalizeCachedGpuResult(cachedGpuResults[0]);
assert.ok(cached.timeToCollision > 0);
const selected = chooseSafetyMetrics(scenarios[0], stageEvidence, cachedGpuResults, "cached-real");
assert.equal(selected.runtimeMode, "cached-real");

const summary = summarizeBench(scenarios, stageEvidence, cachedGpuResults, "cached-real");
assert.equal(summary.cases, 4);
assert.ok(summary.maxRisk > 34);
assert.ok(summary.minTimeToCollision < 5);
assert.equal(summary.cachedRealCases, 4);
assert.equal(summary.block, 0);
assert.equal(summary.release, 4);
assert.equal(summary.release + summary.review + summary.block, summary.cases);
assert.equal(summary.acceptancePass, true);
console.log("ok cvpr-driving-safety-bench:", summary.cases, "cases", summary.avgReadiness, "avg readiness");

import assert from "node:assert/strict";
import { demos } from "../../cvpr-demo-lab/src/fixtures.js";
import { scenarios } from "../src/scenarios.js";
import {
  adjustedMetrics,
  arenaDecision,
  evaluateDemo,
  clusterScenarioMatrix,
  recommendNextBuilds,
  rankScenario,
  scenarioPressure,
  summarizeArena
} from "../src/core.js";

assert.equal(scenarios.length, 8);
assert.ok(demos.length >= 41);

for (const scenario of scenarios) {
  const ranked = rankScenario(demos, scenario);
  assert.equal(ranked.length, demos.length);
  assert.ok(ranked[0].readiness >= ranked.at(-1).readiness);
  assert.match(ranked[0].decision, /^(release|review|block)$/);
}

for (const demo of demos) {
  for (const scenario of scenarios) {
    const pressure = scenarioPressure(demo, scenario);
    assert.ok(pressure >= 0.08 && pressure <= 0.44);
    const metrics = adjustedMetrics(demo, scenario);
    assert.ok(metrics.primary >= 0 && metrics.primary <= 100);
    assert.ok(metrics.evidence >= 0 && metrics.evidence <= 100);
    assert.ok(metrics.risk >= 0 && metrics.risk <= 100);
    assert.ok(metrics.readiness >= 0 && metrics.readiness <= 100);
    assert.match(arenaDecision(metrics), /^(release|review|block)$/);
    const row = evaluateDemo(demo, scenario);
    assert.equal(row.demo, demo.slug);
    assert.ok(row.failureMode.includes(demo.visualMode));
  }
}

const summary = summarizeArena(demos, scenarios);
assert.equal(summary.pairings, summary.demos * summary.scenarios);
assert.ok(summary.demos >= 41);
assert.equal(summary.scenarios, 8);
assert.ok(summary.clusters >= 11);
assert.ok(summary.systems >= 11);
assert.ok(summary.visualModes >= 11);
assert.equal(summary.leaders.length, scenarios.length);
assert.equal(summary.matrix.length, summary.clusters);
assert.ok(summary.matrix.every((row) => row.cells.length === scenarios.length));
assert.ok(summary.matrix.every((row) => row.averageReadiness >= 0 && row.averageReadiness <= 100));
assert.ok(summary.recommendations.length >= 8);
assert.ok(summary.recommendations[0].nextBuild.includes(":"));
assert.equal(summary.release + summary.review + summary.block, summary.pairings);

const matrix = clusterScenarioMatrix(demos, scenarios);
const recommendations = recommendNextBuilds(demos, scenarios, 5);
assert.equal(matrix.length, summary.clusters);
assert.equal(recommendations.length, 5);
assert.ok(recommendations[0].readiness <= recommendations.at(-1).readiness);
console.log("ok cvpr-demo-arena:", summary.demos, "demos x", summary.scenarios, "scenarios =", summary.pairings, "evaluations");

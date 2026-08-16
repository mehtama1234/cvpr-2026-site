import assert from "node:assert/strict";
import { scenarios, stageEvidence } from "../src/fixtures.js";
import { evaluateScenario, scoreSplatCase, splatDecision, summarizeBench } from "../src/core.js";

const stable = scoreSplatCase({ viewCount: 90, splatDensity: 86, semanticEntropy: 12, provenanceVisibility: 86 }, stageEvidence);
const weak = scoreSplatCase({ viewCount: 16, splatDensity: 18, semanticEntropy: 90, provenanceVisibility: 12 }, stageEvidence);
assert.ok(stable.renderFidelity > weak.renderFidelity);
assert.ok(stable.editLeakageRisk < weak.editLeakageRisk);
assert.equal(splatDecision(stable), "release");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence);
  assert.ok(row.metrics.renderFidelity >= 0 && row.metrics.renderFidelity <= 100);
  assert.ok(row.metrics.semanticAttachment >= 0 && row.metrics.semanticAttachment <= 100);
  assert.ok(row.metrics.provenanceTrace >= 0 && row.metrics.provenanceTrace <= 100);
  assert.ok(row.metrics.viewInstability >= 0 && row.metrics.viewInstability <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-system-evidence");
}

const summary = summarizeBench(scenarios, stageEvidence);
assert.equal(summary.cases, 4);
assert.equal(summary.release, 4);
assert.equal(summary.review, 0);
assert.equal(summary.block, 0);
assert.ok(summary.minRenderFidelity >= 75);
assert.ok(summary.minSemanticAttachment >= 75);
assert.ok(summary.minProvenanceTrace >= 80);
assert.ok(summary.maxViewInstability <= 28);
assert.ok(summary.maxEditLeakageRisk <= 30);
console.log("ok cvpr-gaussian-splatting-bench:", summary.cases, "cases", summary.maxEditLeakageRisk, "max edit leakage");

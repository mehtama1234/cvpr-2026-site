import assert from "node:assert/strict";
import { scenarios, stageEvidence } from "../src/fixtures.js";
import { answerDecision, evaluateScenario, scoreAnswerCase, summarizeBench } from "../src/core.js";

const clean = scoreAnswerCase({ questionComplexity: 18, priorPressure: 14, toolNeed: 18, evidenceThreshold: 66 }, stageEvidence);
const trap = scoreAnswerCase({ questionComplexity: 92, priorPressure: 92, toolNeed: 90, evidenceThreshold: 52 }, stageEvidence);
assert.ok(clean.readiness > trap.readiness);
assert.ok(clean.unsupportedClaimRisk < trap.unsupportedClaimRisk);
assert.equal(answerDecision(clean), "release");

for (const scenario of scenarios) {
  const row = evaluateScenario(scenario, stageEvidence);
  assert.ok(row.metrics.visualCitation >= 0 && row.metrics.visualCitation <= 100);
  assert.ok(row.metrics.toolAgreement >= 0 && row.metrics.toolAgreement <= 100);
  assert.ok(row.metrics.unsupportedClaimRisk >= 0 && row.metrics.unsupportedClaimRisk <= 100);
  assert.match(row.decision, /^(release|review|block)$/);
  assert.equal(row.runtimeMode, "cached-system-evidence");
}

const summary = summarizeBench(scenarios, stageEvidence);
assert.equal(summary.cases, 4);
assert.equal(summary.release, 4);
assert.equal(summary.block, 0);
assert.ok(summary.minVisualCitation >= 70);
assert.ok(summary.minToolAgreement >= 70);
assert.ok(summary.maxUnsupportedClaimRisk <= 35);
console.log("ok cvpr-vlm-answer-verification-bench:", summary.cases, "cases", summary.maxUnsupportedClaimRisk, "max unsupported risk");

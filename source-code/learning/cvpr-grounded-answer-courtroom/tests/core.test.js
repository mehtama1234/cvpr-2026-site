import assert from "node:assert/strict";
import { courtroomRows, probes, records, stageEvidence, summary } from "../src/fixtures.js";
import { applyProbe, evaluateProbe, scoreCourtroomCase, summarizeCourtroom, verdict } from "../src/core.js";

const base = records[0];
const trap = probes.find((probe) => probe.id === "contradiction-trap");
const shifted = applyProbe(base, trap);
assert.ok(shifted.questionComplexity > base.controls.questionComplexity);
assert.ok(shifted.priorPressure > base.controls.priorPressure);
assert.ok(shifted.evidenceThreshold < base.controls.evidenceThreshold);

const clean = scoreCourtroomCase(base.controls, stageEvidence);
const challenged = evaluateProbe(base, trap, stageEvidence);
assert.ok(challenged.metrics.unsupportedClaimRisk > clean.unsupportedClaimRisk);
assert.match(verdict(challenged.metrics), /^(admit|cross-examine|sustain-objection)$/);

const derived = summarizeCourtroom(records, probes, stageEvidence);
assert.equal(derived.cases, 4);
assert.equal(derived.probes, 4);
assert.equal(derived.courtroomRows, 16);
assert.equal(courtroomRows.length, 16);
assert.equal(summary.backlogGoal, "Grounded answer courtroom");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.cachedSystemEvidenceCases, 4);
assert.ok(summary.crossExamine + summary.sustainObjection > 0);
assert.ok(summary.maxUnsupportedClaimRisk >= 35);
assert.equal(summary.status, "release");
console.log("ok cvpr-grounded-answer-courtroom:", summary.courtroomRows, "courtroom rows");

import assert from "node:assert/strict";
import { probes, records, stageEvidence, summary } from "../src/fixtures.js";
import { applyProbe, evaluateProbe, failureLevel, scoreGroundingProbe, summarizeFailureHunt } from "../src/core.js";

const base = records[0];
const pressure = probes.find((probe) => probe.id === "unsupported-pressure");
const shifted = applyProbe(base, pressure);
assert.ok(shifted.queryRarity > base.controls.queryRarity);
assert.ok(shifted.evidenceThreshold < base.controls.evidenceThreshold);

const clean = scoreGroundingProbe(base.controls, stageEvidence);
const stressed = evaluateProbe(base, pressure, stageEvidence);
assert.ok(stressed.metrics.localizedEvidence < clean.localizedEvidence);
assert.ok(stressed.metrics.unsupportedRisk > clean.unsupportedRisk);
assert.match(failureLevel(stressed.metrics), /^(clear|watch|hunt)$/);

const derived = summarizeFailureHunt(records, probes, stageEvidence);
assert.equal(derived.cases, 4);
assert.equal(derived.probes, 4);
assert.equal(derived.probeRows, 16);
assert.equal(summary.probeRows, 16);
assert.equal(summary.backlogGoal, "Open-vocabulary failure hunt");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 4);
assert.ok(summary.watch + summary.hunt > 0);
assert.ok(summary.maxUnsupportedRisk >= 30);
assert.equal(summary.status, "release");
console.log("ok cvpr-open-vocab-failure-hunt:", summary.probeRows, "probe rows");

import assert from "node:assert/strict";
import { counterfactualRows, forks, records, stageEvidence, summary } from "../src/fixtures.js";
import { applyFork, evaluateFork, failureMode, scoreCounterfactual, summarizeCounterfactualLab } from "../src/core.js";

const base = records[0];
const longFork = forks.find((fork) => fork.id === "long-horizon-fork");
const shifted = applyFork(base, longFork);
assert.ok(shifted.rolloutLength > base.controls.rolloutLength);
assert.ok(shifted.memoryWindow < base.controls.memoryWindow);

const baseMetrics = scoreCounterfactual(base.controls, stageEvidence);
const forked = evaluateFork(base, longFork, stageEvidence);
assert.ok(forked.metrics.drift > baseMetrics.drift);
assert.ok(forked.metrics.identityStability < baseMetrics.identityStability);
assert.match(failureMode(forked.metrics), /^(stable|watch|break)$/);

const derived = summarizeCounterfactualLab(records, forks, stageEvidence);
assert.equal(derived.cases, 4);
assert.equal(derived.forks, 4);
assert.equal(derived.counterfactualRows, 16);
assert.equal(counterfactualRows.length, 16);
assert.equal(summary.backlogGoal, "Temporal counterfactual lab");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 4);
assert.ok(summary.watch + summary.break > 0);
assert.ok(summary.maxDrift >= 45);
assert.equal(summary.status, "release");
console.log("ok cvpr-temporal-counterfactual-lab:", summary.counterfactualRows, "counterfactual rows");

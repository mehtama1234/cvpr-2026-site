import assert from "node:assert/strict";
import { clinicalRisk, contexts, deploymentRows, drivingRecords, stageEvidence, summary } from "../src/fixtures.js";
import { applyContext, deploymentDecision, evaluateDeployment, scoreDeployment, summarizeDeployment } from "../src/core.js";

const base = drivingRecords.find((record) => record.id === "urban-cut-in");
const badWeather = contexts.find((context) => context.id === "bad-weather");
const newCity = contexts.find((context) => context.id === "new-city-deploy");

const weatherControls = applyContext(base, badWeather);
assert.ok(weatherControls.occlusion > base.controls.occlusion);
assert.ok(weatherControls.actionConfidence < base.controls.actionConfidence);

const nominal = scoreDeployment(base.controls, stageEvidence, clinicalRisk);
const shifted = evaluateDeployment(base, newCity, stageEvidence, clinicalRisk);
assert.ok(shifted.metrics.deploymentRisk > nominal.deploymentRisk);
assert.ok(shifted.metrics.deploymentReadiness < nominal.deploymentReadiness);
assert.match(deploymentDecision(shifted.metrics), /^(release|review|block)$/);

const derived = summarizeDeployment(drivingRecords, contexts, stageEvidence, clinicalRisk);
assert.equal(derived.cases, 4);
assert.equal(derived.contexts, 4);
assert.equal(derived.deploymentRows, 16);
assert.equal(deploymentRows.length, 16);
assert.equal(summary.backlogGoal, "Safety deployment simulator");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 8);
assert.ok(summary.review + summary.block > 0);
assert.ok(summary.maxDeploymentRisk >= 45);
assert.equal(summary.status, "release");
console.log("ok cvpr-safety-deployment-simulator:", summary.deploymentRows, "deployment rows");

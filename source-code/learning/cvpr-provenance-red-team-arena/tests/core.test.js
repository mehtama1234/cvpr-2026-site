import assert from "node:assert/strict";
import { attacks, clinicalRisk, provenanceRecords, redTeamRows, stageEvidence, summary } from "../src/fixtures.js";
import { applyAttack, arenaDecision, evaluateAttack, scoreRedTeam, summarizeArena } from "../src/core.js";

const base = provenanceRecords[0];
const scrub = attacks.find((attack) => attack.id === "watermark-scrub");
const shifted = applyAttack(base, scrub);
assert.ok(shifted.attackStrength > base.controls.attackStrength);
assert.ok(shifted.watermarkVisibility < base.controls.watermarkVisibility);

const clean = scoreRedTeam(base.controls, stageEvidence, clinicalRisk);
const attacked = evaluateAttack(base, scrub, stageEvidence, clinicalRisk);
assert.ok(attacked.metrics.deploymentRisk > clean.deploymentRisk);
assert.ok(attacked.metrics.evidence < clean.evidence);
assert.match(arenaDecision(attacked.metrics), /^(release|review|block)$/);

const derived = summarizeArena(provenanceRecords, attacks, stageEvidence, clinicalRisk);
assert.equal(derived.cases, 4);
assert.equal(derived.attacks, 4);
assert.equal(derived.arenaRows, 16);
assert.equal(redTeamRows.length, 16);
assert.equal(summary.backlogGoal, "Provenance red-team arena");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 8);
assert.ok(summary.review + summary.block > 0);
assert.ok(summary.maxDeploymentRisk >= 50);
assert.equal(summary.status, "release");
console.log("ok cvpr-provenance-red-team-arena:", summary.arenaRows, "arena rows");

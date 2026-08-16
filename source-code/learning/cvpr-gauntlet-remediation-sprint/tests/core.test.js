import assert from "node:assert/strict";
import { actions, gauntletRows, sprints, summary } from "../src/fixtures.js";
import { buildRemediationPlan, classifyFailure, remediationAction, summarizeRemediation } from "../src/core.js";

const firstBlock = gauntletRows.find((row) => row.decision === "block");
const action = remediationAction(firstBlock);
assert.ok(["risk-containment", "evidence-repair", "readiness-recovery", "review-hardening"].includes(classifyFailure(firstBlock)));
assert.ok(action.acceptanceCheck.includes(firstBlock.incidentId));
assert.equal(action.validationCommand, "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py");

const derived = buildRemediationPlan(gauntletRows);
const derivedSummary = summarizeRemediation(gauntletRows);
assert.equal(derived.actionable.length, 29);
assert.equal(actions.length, 29);
assert.equal(sprints.length, 3);
assert.equal(summary.sourceRows, 32);
assert.equal(summary.actionableRows, 29);
assert.equal(summary.blockActions, 14);
assert.equal(summary.reviewActions, 15);
assert.equal(summary.acceptanceChecks, summary.actionableRows);
assert.equal(derivedSummary.actionableRows, summary.actionableRows);
assert.equal(summary.status, "release");
console.log("ok cvpr-gauntlet-remediation-sprint:", summary.actionableRows, "actions");

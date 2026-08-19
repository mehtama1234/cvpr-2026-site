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
assert.equal(derived.actionable.length, 53);
assert.equal(actions.length, 53);
assert.equal(sprints.length, 3);
assert.equal(summary.sourceRows, 56);
assert.equal(summary.actionableRows, 53);
assert.equal(summary.blockActions + summary.reviewActions, summary.actionableRows);
assert.equal(summary.incidents, 7);
assert.equal(summary.acceptanceChecks, summary.actionableRows);
assert.equal(derivedSummary.actionableRows, summary.actionableRows);
assert.equal(
  summary.status,
  summary.sourceRows == 56 &&
  summary.actionableRows === summary.blockActions + summary.reviewActions &&
  summary.sprints === 3 &&
  summary.themes >= 8 &&
  summary.incidents === 7 &&
  summary.acceptanceChecks === summary.actionableRows &&
  summary.criticalActions >= 3 &&
  summary.blockActions === 25 &&
  summary.reviewActions === 28
    ? "release"
    : "inspect"
);
console.log("ok cvpr-gauntlet-remediation-sprint:", summary.actionableRows, "actions");

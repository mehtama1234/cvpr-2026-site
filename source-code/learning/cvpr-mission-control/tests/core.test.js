import assert from "node:assert/strict";
import { benches, missionInput } from "../src/fixtures.js";
import { nextOperatorActions, riskBand, summarizeBenchHealth, summarizeMissionControl } from "../src/core.js";

assert.equal(riskBand(72), "release");
assert.equal(riskBand(60), "review");
assert.equal(riskBand(40), "block");

const health = summarizeBenchHealth(benches);
assert.equal(health.benches, 11);
assert.equal(health.cases, 44);
assert.equal(health.block, 0);
assert.ok(health.acceptanceRate >= 50);

const actions = nextOperatorActions(missionInput.playbook.plays, benches);
assert.equal(actions.length, 8);
assert.equal(actions.filter((action) => action.benchStatus === "implemented").length, 8);
assert.ok(actions.every((action) => action.blockedCases === 0));

const summary = summarizeMissionControl(missionInput);
assert.equal(summary.systems, 11);
assert.equal(summary.demos, 41);
assert.equal(summary.arenaPairings, 328);
assert.equal(summary.implementedBenches, 11);
assert.equal(summary.missingImplementations, 0);
assert.equal(summary.benchCases, 44);
console.log("ok cvpr-mission-control:", summary.systems, "systems", summary.implementedBenches, "benches");

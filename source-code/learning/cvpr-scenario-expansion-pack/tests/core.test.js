import assert from "node:assert/strict";
import { scenarioRows, sources, summary } from "../src/fixtures.js";
import { scenarioDecision, scenarioPackGate, summarizeScenarioPack } from "../src/core.js";

const derived = summarizeScenarioPack(scenarioRows, sources);
assert.equal(derived.status, "ready");
assert.equal(scenarioPackGate(summary), "ready");
assert.equal(summary.scenarios, 12);
assert.equal(summary.families, 6);
assert.equal(summary.systems, 2);
assert.equal(summary.gauntletStatus, "release");
assert.equal(summary.visualQaStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.equal(summary.ship + summary.retest + summary.block, 12);
assert.ok(summary.block <= 2);
assert.ok(scenarioRows.every((row) => scenarioDecision(row) === row.decision));
assert.ok(scenarioRows.every((row) => row.command === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-scenario-expansion-pack:", summary.scenarios, "scenarios");

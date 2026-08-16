import assert from "node:assert/strict";
import { drills, rehearsalRows, summary } from "../src/fixtures.js";
import { rehearseDrill, rehearsalSteps, summarizeRehearsals, targetMinutes } from "../src/core.js";

const critical = drills.find((drill) => drill.severity === "critical");
const focused = drills.find((drill) => drill.severity === "focused");
assert.ok(targetMinutes(critical) < targetMinutes(focused));
assert.equal(rehearsalSteps(critical).length, 5);
const row = rehearseDrill(critical);
assert.equal(row.rehearsalStatus, "pass");
assert.ok(row.elapsedMinutes <= row.targetMinutes);
assert.equal(row.validationCommand, "python3 scripts/validate_cvpr_full_stack.py");

const derived = summarizeRehearsals(rehearsalRows);
assert.equal(summary.rehearsals, 12);
assert.equal(summary.passing, 12);
assert.equal(summary.misses, 0);
assert.equal(summary.critical, 2);
assert.equal(summary.high, 6);
assert.equal(summary.focused, 4);
assert.equal(summary.themes, 7);
assert.equal(summary.incidents, 4);
assert.equal(derived.passing, summary.passing);
assert.equal(summary.status, "release");
console.log("ok cvpr-remediation-rollback-rehearsal-lab:", summary.passing, "rehearsals passing");

import assert from "node:assert/strict";
import { canaryRows, drills, summary } from "../src/fixtures.js";
import { breachScenario, buildRollbackDrill, drillSeverity, summarizeRollbackDrills } from "../src/core.js";

const worst = [...canaryRows].sort((a, b) => b.metrics.rollbackRisk - a.metrics.rollbackRisk)[0];
const scenario = breachScenario(worst);
const drill = buildRollbackDrill(worst);
assert.ok(scenario.rollbackRisk > worst.metrics.rollbackRisk);
assert.match(drillSeverity(scenario), /^(critical|high|focused)$/);
assert.equal(drill.validationCommand, "python3 scripts/validate_cvpr_full_stack.py");
assert.ok(drill.ownerSurface.endsWith(".html"));

const derived = summarizeRollbackDrills(drills);
assert.equal(summary.drills, 12);
assert.equal(summary.readyDrills, 12);
assert.equal(summary.critical, 2);
assert.ok(summary.high >= 6);
assert.equal(summary.focused, 1);
assert.equal(summary.promotedDrills, derived.promotedDrills);
assert.equal(summary.monitoredDrills, derived.monitoredDrills);
assert.equal(summary.themes, 8);
assert.equal(summary.incidents, 7);
assert.equal(derived.readyDrills, summary.readyDrills);
assert.equal(summary.status, "ready");
console.log("ok cvpr-remediation-rollback-drillbook:", summary.readyDrills, "drills ready");

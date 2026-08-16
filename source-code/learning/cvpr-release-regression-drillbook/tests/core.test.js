import assert from "node:assert/strict";
import { drillbookInput, drills, summary } from "../src/fixtures.js";
import { drillReady, drillbookGate, summarizeDrillbook } from "../src/core.js";

const derived = summarizeDrillbook({ ...drillbookInput, drills });
assert.equal(derived.status, "ready");
assert.equal(drillbookGate(summary), "ready");
assert.equal(summary.drills, 10);
assert.equal(summary.readyDrills, 10);
assert.equal(summary.activeCriticalFailures, 0);
assert.equal(summary.operationsStatus, "ready");
assert.equal(summary.validationGate, "release");
assert.equal(summary.remediationStatus, "ready");
assert.equal(drills.filter(drillReady).length, 10);
assert.ok(drills.every((drill) => drill.validationCommand === "python3 scripts/validate_cvpr_full_stack.py"));
console.log("ok cvpr-release-regression-drillbook:", summary.readyDrills, "drills ready");

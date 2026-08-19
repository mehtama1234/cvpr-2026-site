import assert from "node:assert/strict";
import { drillbookInput, drills, summary } from "../src/fixtures.js";
import { drillReady, drillbookGate, summarizeDrillbook } from "../src/core.js";

const derived = summarizeDrillbook({ ...drillbookInput, drills });
assert.equal(derived.status, summary.status);
assert.equal(drillbookGate(summary), summary.status === "ready" ? "ready" : "block");
assert.equal(summary.drills, 10);
assert.equal(summary.readyDrills, 10);
assert.ok(summary.activeCriticalFailures >= 0);
assert.equal(summary.operationsStatus, "ready");
assert.equal(summary.validationGate, "release");
assert.equal(summary.remediationStatus, "ready");
assert.equal(drills.filter(drillReady).length, 10);
assert.ok(drills.every((drill) => drill.validationCommand === "python3 scripts/validate_cvpr_full_stack.py"));
assert.equal(
  summary.status,
  summary.activeCriticalFailures === 0 &&
  summary.operationsStatus === "ready" &&
  summary.validationGate === "release" &&
  summary.remediationStatus === "ready"
    ? "ready"
    : "block"
);
assert.equal(
  drills.filter((drill) => drill.currentStatus === "fail").length,
  summary.activeCriticalFailures
);
console.log("ok cvpr-release-regression-drillbook:", summary.readyDrills, "drills ready");

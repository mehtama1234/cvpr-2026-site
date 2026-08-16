import assert from "node:assert/strict";
import { executionRows, summary } from "../src/fixtures.js";
import { dashboardGate, summarizeExecution, waveState } from "../src/core.js";

assert.equal(executionRows.length, 8);
assert.equal(executionRows[0].state, "receipt-ready");
assert.equal(executionRows.slice(1).every((row) => row.state === "queued"), true);
assert.equal(waveState(executionRows[0], "invalid"), "needs-intake");
assert.equal(dashboardGate(summary), "ready");
const derived = summarizeExecution(executionRows, { status: "valid", issues: 0 }, { status: "ready" });
assert.equal(derived.status, "ready");
assert.equal(derived.jobs, 40);
assert.equal(summary.handoffStatus, "ready");
console.log("ok cvpr-repo-harness-execution-dashboard:", summary.waves, "waves");

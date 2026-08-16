import assert from "node:assert/strict";
import { monitoringInput, monitorRows, summary } from "../src/fixtures.js";
import { monitorPass, monitoringGate, summarizeMonitoring } from "../src/core.js";

const derived = summarizeMonitoring({ ...monitoringInput, monitorRows });
assert.equal(derived.status, "watching");
assert.equal(monitoringGate(summary), "watching");
assert.equal(summary.monitors, 9);
assert.equal(summary.passingMonitors, 9);
assert.equal(summary.alerts, 0);
assert.equal(summary.releaseGate, "release");
assert.equal(summary.fullStackStatus, "valid");
assert.equal(summary.manifestStatus, "sealed");
assert.equal(summary.changeControlStatus, "controlled");
assert.equal(monitorRows.filter(monitorPass).length, 9);
assert.ok(monitorRows.every((row) => row.evidence && row.responseCommand.startsWith("python3 ")));
console.log("ok cvpr-post-launch-monitoring:", summary.passingMonitors, "monitors passing");

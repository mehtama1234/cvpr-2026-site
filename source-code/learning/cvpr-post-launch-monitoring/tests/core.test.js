import assert from "node:assert/strict";
import { monitoringInput, monitorRows, summary } from "../src/fixtures.js";
import { monitorPass, monitoringGate, summarizeMonitoring } from "../src/core.js";

const derived = summarizeMonitoring({ ...monitoringInput, monitorRows });
assert.equal(derived.status, summary.status);
assert.equal(monitoringGate(summary), summary.status === "watching" ? "watching" : "block");
assert.equal(summary.monitors, 9);
assert.ok(summary.passingMonitors >= 0 && summary.passingMonitors <= 9);
assert.equal(summary.alerts, summary.monitors - summary.passingMonitors);
assert.equal(summary.releaseGate, "release");
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.ok(["sealed", "block"].includes(summary.manifestStatus));
assert.ok(["controlled", "block"].includes(summary.changeControlStatus));
assert.equal(monitorRows.filter(monitorPass).length, summary.passingMonitors);
assert.ok(monitorRows.every((row) => row.evidence && row.responseCommand.startsWith("python3 ")));
assert.equal(
  summary.status,
  summary.monitors === 9 &&
  summary.passingMonitors === 9 &&
  summary.alerts === 0 &&
  summary.releaseGate === "release" &&
  summary.fullStackStatus === "valid"
    ? "watching"
    : "block"
);
console.log("ok cvpr-post-launch-monitoring:", summary.passingMonitors, "monitors passing");

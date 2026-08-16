import assert from "node:assert/strict";
import { canaryRows, promotionRows, summary } from "../src/fixtures.js";
import { buildCanaryRows, canaryMetrics, canaryStatus, summarizeCanaries } from "../src/core.js";

const rows = buildCanaryRows(promotionRows);
const promoted = promotionRows.find((row) => row.promotion === "promote");
const monitored = promotionRows.find((row) => row.promotion === "monitor");
assert.equal(rows.length, 29);
assert.equal(canaryStatus(promoted), "clean");
assert.match(canaryStatus(monitored), /^(watch|rollback)$/);
assert.ok(canaryMetrics(promoted).trafficPct > canaryMetrics(monitored).trafficPct);
assert.equal(canaryRows.length, 29);

const derived = summarizeCanaries(canaryRows);
assert.equal(summary.rows, 29);
assert.equal(summary.clean, 12);
assert.equal(summary.watch, 17);
assert.equal(summary.rollback, 0);
assert.equal(summary.promotedRows, 12);
assert.equal(summary.monitoredRows, 17);
assert.equal(summary.themes, 8);
assert.equal(summary.incidents, 4);
assert.equal(derived.rollback, summary.rollback);
assert.equal(summary.status, "watching");
console.log("ok cvpr-remediation-canary-monitor:", summary.clean, "clean", summary.watch, "watch");

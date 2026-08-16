import assert from "node:assert/strict";
import { auditInput, events, summary } from "../src/fixtures.js";
import { auditGate, eventReady, summarizeAudit } from "../src/core.js";

const derived = summarizeAudit({ ...auditInput, events });
assert.equal(derived.status, "complete");
assert.equal(auditGate(summary), "complete");
assert.equal(summary.events, 58);
assert.equal(summary.readyEvents, 58);
assert.equal(summary.launchEvents, 8);
assert.equal(summary.manifestEvents, 13);
assert.equal(summary.changeEvents, 13);
assert.equal(summary.dependencyEvents, 15);
assert.equal(summary.monitorEvents, 9);
assert.equal(summary.fullStackStatus, "valid");
assert.equal(events.filter(eventReady).length, 58);
console.log("ok cvpr-release-audit-trail:", summary.events, "events");

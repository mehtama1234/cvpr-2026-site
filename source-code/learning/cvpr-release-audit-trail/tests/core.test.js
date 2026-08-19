import assert from "node:assert/strict";
import { auditInput, events, summary } from "../src/fixtures.js";
import { auditGate, eventReady, summarizeAudit } from "../src/core.js";

const derived = summarizeAudit({ ...auditInput, events });
assert.equal(derived.status, summary.status);
assert.equal(auditGate(summary), summary.status === "complete" ? "complete" : "block");
assert.equal(summary.events, 58);
assert.ok(summary.readyEvents >= 0 && summary.readyEvents <= 58);
assert.equal(summary.launchEvents, 8);
assert.equal(summary.manifestEvents, 13);
assert.equal(summary.changeEvents, 13);
assert.equal(summary.dependencyEvents, 15);
assert.equal(summary.monitorEvents, 9);
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.equal(events.filter(eventReady).length, summary.readyEvents);
assert.equal(
  summary.status,
  summary.events === 58 &&
  summary.readyEvents === 58 &&
  summary.launchEvents === 8 &&
  summary.manifestEvents === 13 &&
  summary.changeEvents === 13 &&
  summary.dependencyEvents === 15 &&
  summary.monitorEvents === 9 &&
  summary.fullStackStatus === "valid"
    ? "complete"
    : "block"
);
console.log("ok cvpr-release-audit-trail:", summary.events, "events");

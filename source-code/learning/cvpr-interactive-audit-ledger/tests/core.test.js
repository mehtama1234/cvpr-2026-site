import assert from "node:assert/strict";
import { auditEvents, summary } from "../src/fixtures.js";
import { chainReady, eventReady, ledgerGate, summarizeLedger } from "../src/core.js";

assert.equal(auditEvents.length, 5);
assert.equal(auditEvents.every(eventReady), true);
assert.equal(chainReady(auditEvents), true);
const derived = summarizeLedger(auditEvents);
assert.equal(derived.readyEvents, summary.readyEvents);
assert.equal(derived.uniqueFingerprints, 5);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.holds, 0);
assert.equal(ledgerGate(summary), "ledger-ready");
console.log("ok cvpr-interactive-audit-ledger:", summary.events, "events");

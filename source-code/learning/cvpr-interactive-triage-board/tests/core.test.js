import assert from "node:assert/strict";
import { decisionRows, summary } from "../src/fixtures.js";
import { decisionReady, filterDecisions, summarizeDecisions, triageGate } from "../src/core.js";

assert.equal(decisionRows.length, 40);
assert.equal(decisionRows.every(decisionReady), true);
assert.equal(filterDecisions(decisionRows, { decision: "promote" }).length, 40);
assert.equal(filterDecisions(decisionRows, { theme: "frontier" }).length, 5);
const derived = summarizeDecisions(decisionRows);
assert.equal(derived.decisions, summary.decisions);
assert.equal(derived.passingCases, summary.passingCases);
assert.equal(derived.blockedCases, 0);
assert.equal(triageGate(summary), "triage-ready");
console.log("ok cvpr-interactive-triage-board:", summary.decisions, "decisions");

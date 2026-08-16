import assert from "node:assert/strict";
import { backlogRows, summary } from "../src/fixtures.js";
import { backlogGate, backlogReady, summarizeBacklog } from "../src/core.js";

assert.equal(backlogRows.length, 32);
assert.equal(new Set(backlogRows.map((row) => row.theme)).size, 8);
assert.equal(backlogRows.every(backlogReady), true);
assert.equal(backlogRows.every((row) => row.requiredControls.length === 5), true);
assert.equal(backlogRows.every((row) => row.requiredArtifacts.length === 3), true);
const derived = summarizeBacklog(backlogRows, summary.coveredRepos, summary.totalPromotedRepos);
assert.equal(derived.remainingRepos, summary.remainingRepos);
assert.equal(derived.requiredArtifacts, summary.requiredArtifacts);
assert.equal(backlogGate(summary), "backlog-ready");
console.log("ok cvpr-interactive-expansion-backlog:", summary.remainingRepos, "remaining repos");

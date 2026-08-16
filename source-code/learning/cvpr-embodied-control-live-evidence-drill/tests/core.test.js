import assert from "node:assert/strict";
import { drillRows, summary } from "../src/fixtures.js";
import { drillDecision, policyEvidenceScore, summarizeDrill } from "../src/core.js";

assert.equal(drillRows.length, 5);
assert.equal(drillRows.every((row) => row.mode === "live-colab"), true);
assert.equal(drillRows.every((row) => row.smokePassed), true);
assert.equal(drillRows.every((row) => row.baseDecision === "shadow"), true);
assert.equal(drillRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(drillRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(drillRows.every((row) => policyEvidenceScore(row) >= 60));
assert.equal(drillRows.every((row) => drillDecision(row) === "policy-shadow"), true);
const derived = summarizeDrill(drillRows);
assert.equal(derived.rows, 5);
assert.equal(derived.policyShadow, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "embodied");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-embodied-control-live-evidence-drill:", summary.rows, "rows");

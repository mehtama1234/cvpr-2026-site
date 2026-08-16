import assert from "node:assert/strict";
import { drillRows, summary } from "../src/fixtures.js";
import { drillDecision, evidenceScore, summarizeDrill } from "../src/core.js";

assert.equal(drillRows.length, 5);
assert.equal(drillRows.every((row) => row.mode === "live-colab"), true);
assert.equal(drillRows.every((row) => row.smokePassed), true);
assert.equal(drillRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(drillRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(drillRows.every((row) => evidenceScore(row) > 55));
assert.ok(drillRows.every((row) => drillDecision(row) !== "hold-demo"));
const derived = summarizeDrill(drillRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "frontier");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-frontier-live-evidence-drill:", summary.rows, "rows");

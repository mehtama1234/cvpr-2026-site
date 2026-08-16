import assert from "node:assert/strict";
import { benchRows, summary } from "../src/fixtures.js";
import { benchDecision, partEvidenceScore, summarizeBench } from "../src/core.js";

assert.equal(benchRows.length, 5);
assert.equal(benchRows.every((row) => row.mode === "live-colab"), true);
assert.equal(benchRows.every((row) => row.smokePassed), true);
assert.equal(benchRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(benchRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(benchRows.every((row) => partEvidenceScore(row) >= 58));
assert.ok(benchRows.every((row) => benchDecision(row) !== "hold-demo"));
const derived = summarizeBench(benchRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "perception");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-perception-parts-live-evidence-bench:", summary.rows, "rows");

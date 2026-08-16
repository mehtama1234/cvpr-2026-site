import assert from "node:assert/strict";
import { labRows, summary } from "../src/fixtures.js";
import { labDecision, summarizeLab, temporalEvidenceScore } from "../src/core.js";

assert.equal(labRows.length, 5);
assert.equal(labRows.every((row) => row.mode === "live-colab"), true);
assert.equal(labRows.every((row) => row.smokePassed), true);
assert.equal(labRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(labRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(labRows.every((row) => temporalEvidenceScore(row) >= 56));
assert.ok(labRows.every((row) => labDecision(row) !== "hold-demo"));
const derived = summarizeLab(labRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "video");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-video-temporal-live-evidence-lab:", summary.rows, "rows");

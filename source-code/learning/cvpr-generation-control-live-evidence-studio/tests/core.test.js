import assert from "node:assert/strict";
import { studioRows, summary } from "../src/fixtures.js";
import { generationEvidenceScore, studioDecision, summarizeStudio } from "../src/core.js";

assert.equal(studioRows.length, 5);
assert.equal(studioRows.every((row) => row.mode === "live-colab"), true);
assert.equal(studioRows.every((row) => row.smokePassed), true);
assert.equal(studioRows.every((row) => row.baseDecision === "block"), true);
assert.equal(studioRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(studioRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(studioRows.every((row) => generationEvidenceScore(row) >= 58));
assert.equal(studioRows.every((row) => studioDecision(row) === "artifact-review"), true);
const derived = summarizeStudio(studioRows);
assert.equal(derived.rows, 5);
assert.equal(derived.artifactReview, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "generation");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-generation-control-live-evidence-studio:", summary.rows, "rows");

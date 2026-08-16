import assert from "node:assert/strict";
import { courtRows, summary } from "../src/fixtures.js";
import { courtVerdict, groundingEvidenceScore, summarizeCourt } from "../src/core.js";

assert.equal(courtRows.length, 5);
assert.equal(courtRows.every((row) => row.mode === "live-colab"), true);
assert.equal(courtRows.every((row) => row.smokePassed), true);
assert.equal(courtRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(courtRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(courtRows.every((row) => groundingEvidenceScore(row) >= 58));
assert.ok(courtRows.every((row) => courtVerdict(row) !== "hold-demo"));
const derived = summarizeCourt(courtRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "vlm");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-grounded-vlm-live-evidence-court:", summary.rows, "rows");

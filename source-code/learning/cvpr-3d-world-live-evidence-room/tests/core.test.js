import assert from "node:assert/strict";
import { roomRows, summary } from "../src/fixtures.js";
import { geometryEvidenceScore, roomDecision, summarizeRoom } from "../src/core.js";

assert.equal(roomRows.length, 5);
assert.equal(roomRows.every((row) => row.mode === "live-colab"), true);
assert.equal(roomRows.every((row) => row.smokePassed), true);
assert.equal(roomRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(roomRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(roomRows.every((row) => geometryEvidenceScore(row) >= 56));
assert.ok(roomRows.every((row) => roomDecision(row) !== "hold-demo"));
const derived = summarizeRoom(roomRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "threed");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-3d-world-live-evidence-room:", summary.rows, "rows");

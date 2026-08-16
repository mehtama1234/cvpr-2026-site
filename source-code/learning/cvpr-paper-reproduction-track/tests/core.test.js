import assert from "node:assert/strict";
import { reproductionRows, summary } from "../src/fixtures.js";
import { reproductionDecision, reproductionScore, summarizeTrack, trackGate } from "../src/core.js";

assert.equal(reproductionRows.length, 8);
assert.equal(new Set(reproductionRows.map((row) => row.theme)).size, 8);
assert.equal(reproductionRows.every((row) => row.mode === "live-colab"), true);
assert.equal(reproductionRows.every((row) => row.smokePassed), true);
assert.equal(reproductionRows.every((row) => row.artifactsComplete), true);
assert.equal(reproductionRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.equal(reproductionRows.every((row) => row.demoQuestion.length > 40), true);
assert.ok(reproductionRows.every((row) => reproductionScore(row) >= 72));
assert.equal(reproductionRows.every((row) => reproductionDecision(row) !== "hold"), true);
const derived = summarizeTrack(reproductionRows);
assert.equal(derived.reproductions, summary.reproductions);
assert.equal(derived.themes, summary.themes);
assert.equal(trackGate(summary), "track-ready");
console.log("ok cvpr-paper-reproduction-track:", summary.reproductions, "reproductions");

import assert from "node:assert/strict";
import { replayInput, replayRows, summary } from "../src/fixtures.js";
import { replayGate, summarizeReplay, validateReplayResult } from "../src/core.js";

const derived = summarizeReplay({ ...replayInput, replayRows });
assert.equal(derived.status, "ready");
assert.equal(replayGate(summary), "ready");
assert.equal(summary.runtimePlane, "google-colab-pro-plus");
assert.equal(summary.jobs, 10);
assert.equal(summary.replayRows, 10);
assert.equal(summary.results, 40);
assert.equal(summary.validResults, 40);
assert.equal(summary.stageDemosCovered, 30);
assert.equal(summary.cachedSystemEvidenceDemos, 3);
assert.equal(summary.provenanceIssues, 0);
assert.equal(summary.releaseGate, "release");
assert.ok(summary.minReadiness > 0);
assert.equal(validateReplayResult(replayInput.worker.cachedResults[0], summary.notebook).ok, true);
console.log("ok cvpr-colab-result-replay:", summary.results, "results,", summary.stageDemosCovered, "stage demos");

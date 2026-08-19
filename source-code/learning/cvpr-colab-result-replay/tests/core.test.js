import assert from "node:assert/strict";
import { replayInput, replayRows, summary } from "../src/fixtures.js";
import { replayGate, summarizeReplay, validateReplayResult } from "../src/core.js";

const derived = summarizeReplay({ ...replayInput, replayRows });
assert.equal(derived.status, "ready");
assert.equal(replayGate(summary), "ready");
assert.equal(summary.runtimePlane, "google-colab-pro-plus");
assert.ok(summary.jobs > 0);
assert.equal(summary.replayRows, summary.jobs);
assert.ok(summary.results > 0);
assert.equal(summary.validResults, summary.results);
assert.ok(summary.stageDemosCovered >= 30);
assert.equal(summary.cachedSystemEvidenceDemos, 3);
assert.equal(summary.provenanceIssues, 0);
assert.equal(summary.releaseGate, "release");
assert.ok(summary.minReadiness > 0);
assert.equal(validateReplayResult(replayInput.worker.cachedResults[0], summary.notebook).ok, true);
console.log("ok cvpr-colab-result-replay:", summary.results, "results,", summary.stageDemosCovered, "stage demos");

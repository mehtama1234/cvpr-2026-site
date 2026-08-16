import assert from "node:assert/strict";
import { artifactRows, summary } from "../src/fixtures.js";
import { artifactReady, queueGate, summarizeQueue } from "../src/core.js";

assert.equal(artifactRows.length, 24);
assert.equal(new Set(artifactRows.map((row) => row.jobId)).size, 8);
assert.equal(new Set(artifactRows.map((row) => row.theme)).size, 8);
assert.equal(artifactRows.every(artifactReady), true);
const derived = summarizeQueue(artifactRows);
assert.equal(derived.rehydratedArtifacts, summary.rehydratedArtifacts);
assert.equal(derived.missingArtifacts, 0);
assert.equal(queueGate(summary), "rehydrated");
console.log("ok cvpr-artifact-rehydration-queue:", summary.rehydratedArtifacts, "artifacts");

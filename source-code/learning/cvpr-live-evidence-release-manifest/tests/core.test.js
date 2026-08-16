import assert from "node:assert/strict";
import { manifest, summary, surfaceArtifacts } from "../src/fixtures.js";
import { artifactReady, manifestReady, summarizeManifest } from "../src/core.js";

assert.equal(surfaceArtifacts.length, 8);
assert.equal(surfaceArtifacts.every(artifactReady), true);
const derived = summarizeManifest(surfaceArtifacts);
assert.equal(derived.rows, 40);
assert.equal(derived.liveRows, 40);
assert.equal(derived.artifacts, 40);
assert.equal(derived.holdDemo, 0);
assert.equal(manifestReady(summary), true);
assert.equal(manifest.promotedArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
assert.equal(manifest.rollbackArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json");
console.log("ok cvpr-live-evidence-release-manifest:", summary.rows, "rows");

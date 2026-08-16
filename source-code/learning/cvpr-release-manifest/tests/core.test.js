import assert from "node:assert/strict";
import { manifestInput, summary } from "../src/fixtures.js";
import { manifestGate, summarizeManifest } from "../src/core.js";

const derived = summarizeManifest(manifestInput);
assert.equal(derived.status, "sealed");
assert.equal(manifestGate(summary), "sealed");
assert.equal(summary.artifacts, 13);
assert.equal(summary.missingArtifacts, 0);
assert.equal(summary.launchStatus, "launch-ready");
assert.equal(summary.releaseGate, "release");
assert.equal(summary.sloStatus, "release");
assert.equal(summary.drillbookStatus, "ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(summary.packageTests >= 47);
assert.ok(manifestInput.artifacts.every((artifact) => artifact.exists && artifact.sha256.length === 64 && artifact.sizeBytes > 0));
console.log("ok cvpr-release-manifest:", summary.artifacts, "artifacts sealed");

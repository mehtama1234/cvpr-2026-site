import assert from "node:assert/strict";
import { manifestInput, summary } from "../src/fixtures.js";
import { manifestGate, summarizeManifest } from "../src/core.js";

const derived = summarizeManifest(manifestInput);
assert.equal(derived.status, summary.status);
assert.equal(manifestGate(summary), summary.status === "sealed" ? "sealed" : "block");
assert.equal(summary.artifacts, 13);
assert.equal(summary.missingArtifacts, 0);
assert.ok(["launch-ready", "block"].includes(summary.launchStatus));
assert.equal(summary.releaseGate, "release");
assert.ok(["release", "block"].includes(summary.sloStatus));
assert.ok(["ready", "block"].includes(summary.drillbookStatus));
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.ok(summary.packageTests >= 47);
assert.ok(manifestInput.artifacts.every((artifact) => artifact.exists && artifact.sha256.length === 64 && artifact.sizeBytes > 0));
assert.equal(
  summary.status,
  summary.artifacts == 13 &&
  summary.missingArtifacts === 0 &&
  summary.launchStatus === "launch-ready" &&
  summary.releaseGate === "release" &&
  summary.sloStatus === "release" &&
  summary.drillbookStatus === "ready" &&
  summary.fullStackStatus === "valid" &&
  summary.packageTests >= 47
    ? "sealed"
    : "block"
);
console.log("ok cvpr-release-manifest:", summary.artifacts, "artifacts sealed");

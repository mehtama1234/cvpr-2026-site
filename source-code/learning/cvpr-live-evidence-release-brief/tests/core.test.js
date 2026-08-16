import assert from "node:assert/strict";
import { summary } from "../src/fixtures.js";
import { releaseGate, releasePosture } from "../src/core.js";

assert.equal(releaseGate(summary), "release-ready");
const posture = releasePosture(summary);
assert.equal(posture.releaseReady, true);
assert.equal(posture.demos, 8);
assert.equal(posture.evidenceRows, 40);
assert.equal(posture.rollbackRows, 40);
assert.equal(summary.promotedArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
assert.equal(summary.rollbackArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json");
console.log("ok cvpr-live-evidence-release-brief:", summary.rows, "rows");

import assert from "node:assert/strict";
import { changeInput, controlRows, summary } from "../src/fixtures.js";
import { changeControlGate, controlReady, summarizeChangeControl } from "../src/core.js";

const derived = summarizeChangeControl({ ...changeInput, controlRows });
assert.equal(derived.status, summary.status);
assert.equal(changeControlGate(summary), summary.status === "controlled" ? "controlled" : "block");
assert.equal(summary.artifacts, 13);
assert.equal(summary.controlRows, 13);
assert.equal(summary.readyRows, 13);
assert.equal(summary.missingArtifacts, 0);
assert.ok(["launch-ready", "block"].includes(summary.launchStatus));
assert.ok(["sealed", "block"].includes(summary.manifestStatus));
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.ok(summary.packageTests >= 48);
assert.equal(controlRows.filter(controlReady).length, 13);
assert.ok(controlRows.every((row) => row.resealCommand === "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py"));
assert.equal(
  summary.status,
  summary.artifacts === 13 &&
  summary.controlRows === 13 &&
  summary.readyRows === 13 &&
  summary.missingArtifacts === 0 &&
  summary.launchStatus === "launch-ready" &&
  summary.manifestStatus === "sealed" &&
  summary.fullStackStatus === "valid"
    ? "controlled"
    : "block"
);
console.log("ok cvpr-release-change-control:", summary.readyRows, "rows controlled");

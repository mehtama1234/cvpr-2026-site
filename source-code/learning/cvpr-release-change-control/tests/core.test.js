import assert from "node:assert/strict";
import { changeInput, controlRows, summary } from "../src/fixtures.js";
import { changeControlGate, controlReady, summarizeChangeControl } from "../src/core.js";

const derived = summarizeChangeControl({ ...changeInput, controlRows });
assert.equal(derived.status, "controlled");
assert.equal(changeControlGate(summary), "controlled");
assert.equal(summary.artifacts, 13);
assert.equal(summary.controlRows, 13);
assert.equal(summary.readyRows, 13);
assert.equal(summary.missingArtifacts, 0);
assert.equal(summary.launchStatus, "launch-ready");
assert.equal(summary.manifestStatus, "sealed");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(summary.packageTests >= 48);
assert.equal(controlRows.filter(controlReady).length, 13);
assert.ok(controlRows.every((row) => row.resealCommand === "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py"));
console.log("ok cvpr-release-change-control:", summary.readyRows, "rows controlled");

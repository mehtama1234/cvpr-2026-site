import assert from "node:assert/strict";
import { releaseInput, summary } from "../src/fixtures.js";
import { coverageLine, releaseGate, riskPosture, summarizeBrief } from "../src/core.js";

const derived = summarizeBrief(releaseInput);
assert.equal(derived.gate, "release");
assert.equal(derived.posture, "all-clear");
assert.equal(derived.arenaRelease, 328);
assert.equal(derived.arenaReview, 0);
assert.equal(derived.benchRelease, 44);
assert.equal(derived.benchReview, 0);
assert.equal(derived.failureSeverity, 0);
assert.equal(derived.fullStackStatus, "valid");
assert.equal(releaseGate(summary), "release");
assert.equal(riskPosture(summary), "all-clear");
assert.ok(coverageLine(summary).includes("328 arena releases"));
console.log("ok cvpr-production-release-brief:", summary.gate, summary.arenaRelease, "arena releases");

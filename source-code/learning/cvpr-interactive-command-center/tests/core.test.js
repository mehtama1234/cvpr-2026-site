import assert from "node:assert/strict";
import { commandSurfaces, summary } from "../src/fixtures.js";
import { commandGate, summarizeSurfaces, surfaceReady } from "../src/core.js";

assert.equal(commandSurfaces.length, 6);
assert.equal(commandSurfaces.every(surfaceReady), true);
const derived = summarizeSurfaces(commandSurfaces);
assert.equal(derived.readySurfaces, summary.readySurfaces);
assert.equal(derived.pages, summary.pages);
assert.equal(derived.validators, summary.validators);
assert.equal(summary.demos, 40);
assert.equal(summary.scenarioCases, 120);
assert.equal(summary.promoteDecisions, 40);
assert.equal(summary.auditEvents, 5);
assert.equal(summary.holds, 0);
assert.equal(commandGate(summary), "command-center-ready");
console.log("ok cvpr-interactive-command-center:", summary.surfaces, "surfaces");

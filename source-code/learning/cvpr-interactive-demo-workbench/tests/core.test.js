import assert from "node:assert/strict";
import { workbenchRows, summary } from "../src/fixtures.js";
import { interactionReady, summarizeWorkbench, workbenchGate } from "../src/core.js";

assert.equal(workbenchRows.length, 8);
assert.equal(new Set(workbenchRows.map((row) => row.theme)).size, 8);
assert.equal(workbenchRows.every(interactionReady), true);
assert.equal(workbenchRows.every((row) => row.controls.length === 5), true);
assert.equal(workbenchRows.every((row) => row.runtimeState.availablePanels.length === 5), true);
assert.equal(workbenchRows.every((row) => row.artifactDiff.localArtifacts === 3), true);
assert.equal(workbenchRows.every((row) => row.failureProbe.verdict === "probe-ready"), true);
const derived = summarizeWorkbench(workbenchRows);
assert.equal(derived.readyInteractions, summary.readyInteractions);
assert.equal(derived.localArtifacts, summary.localArtifacts);
assert.equal(derived.runtimeControllers, summary.runtimeControllers);
assert.equal(workbenchGate(summary), "workbench-ready");
console.log("ok cvpr-interactive-demo-workbench:", summary.demos, "demos");

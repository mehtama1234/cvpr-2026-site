import assert from "node:assert/strict";
import { handoffInput } from "../src/fixtures.js";
import { handoffGate, summarizeHandoff } from "../src/core.js";

const summary = summarizeHandoff(handoffInput);
assert.equal(handoffGate(summary), "ready");
assert.ok(summary.jobs > 0);
assert.ok(summary.runners > 0);
assert.ok(summary.expectedResults > 0);
assert.equal(summary.importIssues, 0);
assert.equal(summary.liveExportArtifact, "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json");
assert.equal(summary.intakeGate, "scripts/stage_cvpr_live_colab_export.py");
assert.equal(summary.exportContract, true);
assert.ok(summary.notebookCells >= 21);
console.log("ok cvpr-colab-handoff-package:", summary.jobs, "jobs");

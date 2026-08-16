import assert from "node:assert/strict";
import { governorRows, summary } from "../src/fixtures.js";
import { efficiencyEvidenceScore, governorDecision, summarizeGovernor } from "../src/core.js";

assert.equal(governorRows.length, 5);
assert.equal(governorRows.every((row) => row.mode === "live-colab"), true);
assert.equal(governorRows.every((row) => row.smokePassed), true);
assert.equal(governorRows.every((row) => row.evidenceArtifact.endsWith(".json")), true);
assert.equal(governorRows.every((row) => row.replayCommand.includes(row.jobId)), true);
assert.ok(governorRows.every((row) => efficiencyEvidenceScore(row) >= 60));
assert.ok(governorRows.every((row) => governorDecision(row) !== "hold-demo"));
const derived = summarizeGovernor(governorRows);
assert.equal(derived.rows, 5);
assert.equal(derived.liveRows, 5);
assert.equal(summary.status, "ready");
assert.equal(summary.theme, "learning");
assert.equal(summary.sourcePromotedResults, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
console.log("ok cvpr-efficient-learning-live-evidence-governor:", summary.rows, "rows");

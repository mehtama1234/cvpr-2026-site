import assert from "node:assert/strict";
import { failureRows } from "../src/fixtures.js";
import { rankFailures, severityScore, summarizeAtlas, summarizeFamilies } from "../src/core.js";

assert.equal(failureRows.length, 44);
assert.ok(failureRows.every((row) => row.family));
assert.ok(failureRows.every((row) => row.metric in row.metrics));
assert.ok(failureRows.every((row) => row.decision !== "block"));
const firstReview = failureRows.find((row) => row.decision === "review");
if (firstReview) assert.ok(severityScore(firstReview) >= 0);

const ranked = rankFailures(failureRows);
assert.equal(ranked.length, failureRows.length);
assert.ok(ranked[0].severity >= ranked.at(-1).severity);

const families = summarizeFamilies(failureRows);
assert.equal(families.length, 11);
assert.ok(families.every((row) => row.block === 0));

const summary = summarizeAtlas(failureRows);
assert.equal(summary.cases, 44);
assert.equal(summary.families, 11);
assert.equal(summary.block, 0);
assert.equal(summary.review, 0);
assert.equal(summary.release, 44);
assert.equal(summary.maxSeverity, 0);
console.log("ok cvpr-failure-atlas:", summary.cases, "cases", summary.families, "families");

import assert from "node:assert/strict";
import { laneRows, summary } from "../src/fixtures.js";
import { drilldownGate, laneReady, summarizeLanes } from "../src/core.js";

assert.equal(summary.topPaperRepos, 40);
assert.equal(summary.themes, 8);
assert.equal(summary.subthemeAssignments, 237);
assert.ok(summary.uniqueSubthemes >= 200);
assert.equal(laneRows.length, summary.uniqueSubthemes);
assert.equal(laneRows.every(laneReady), true);
const derived = summarizeLanes(laneRows);
assert.equal(derived.ready, summary.readyLanes);
assert.equal(derived.themes, 8);
assert.equal(summary.holds, 0);
assert.equal(drilldownGate(summary), "subtheme-drilldown-ready");
console.log("ok cvpr-subtheme-coverage-drilldown:", summary.uniqueSubthemes, "subthemes");

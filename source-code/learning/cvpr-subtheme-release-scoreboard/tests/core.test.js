import assert from "node:assert/strict";
import { themeRows, summary } from "../src/fixtures.js";
import { scoreboardGate, summarizeThemes, themeReady } from "../src/core.js";

assert.equal(themeRows.length, 8);
assert.equal(themeRows.every(themeReady), true);
const derived = summarizeThemes(themeRows);
assert.equal(derived.readyThemes, summary.readyThemes);
assert.equal(derived.scenarios, 636);
assert.equal(derived.lanes, 212);
assert.equal(derived.riskFamilies, 3);
assert.equal(summary.holds, 0);
assert.equal(scoreboardGate(summary), "scoreboard-ready");
console.log("ok cvpr-subtheme-release-scoreboard:", summary.readyThemes, "themes");

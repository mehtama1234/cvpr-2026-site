import assert from "node:assert/strict";
import { viewerRows, summary } from "../src/fixtures.js";
import { galleryGate, summarizeGallery, viewerDecision, viewerReady } from "../src/core.js";

assert.equal(viewerRows.length, 8);
assert.equal(new Set(viewerRows.map((row) => row.theme)).size, 8);
assert.equal(viewerRows.every(viewerReady), true);
assert.equal(viewerRows.every((row) => viewerDecision(row) === "ship-viewer"), true);
assert.equal(viewerRows.every((row) => row.artifactLinks.length === 3), true);
assert.equal(viewerRows.every((row) => row.tabs.length === 5), true);
assert.equal(viewerRows.every((row) => row.viewerState.selectedPanel === "output"), true);
const derived = summarizeGallery(viewerRows);
assert.equal(derived.viewers, summary.viewers);
assert.equal(derived.readyViewers, summary.readyViewers);
assert.equal(galleryGate(summary), "gallery-ready");
console.log("ok cvpr-reproduction-viewer-gallery:", summary.viewers, "viewers");

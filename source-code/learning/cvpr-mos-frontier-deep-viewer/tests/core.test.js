import assert from "node:assert/strict";
import { deepViewer, summary } from "../src/fixtures.js";
import { artifactAvailability, panelReady, summarizeViewer, viewerGate } from "../src/core.js";

assert.equal(deepViewer.repoName, "MOS");
assert.equal(deepViewer.jobId, "frontier-01-github-com-yjzhao1019-mos");
assert.equal(deepViewer.panels.length, 5);
assert.equal(deepViewer.panels.every((panel) => panel.status === "ready"), true);
assert.equal(deepViewer.selectedPanel, "output");
assert.equal(deepViewer.promotedEvidence.metrics.smokePassed, true);
assert.equal(deepViewer.artifacts.length, 3);
assert.equal(artifactAvailability(deepViewer), 3);
assert.equal(panelReady(deepViewer), true);
const derived = summarizeViewer(deepViewer);
assert.equal(derived.readyPanels, summary.readyPanels);
assert.equal(derived.artifactLocalPaths, summary.artifactLocalPaths);
assert.equal(derived.artifactMissingPaths, summary.artifactMissingPaths);
assert.equal(viewerGate(summary), "deep-viewer-ready");
console.log("ok cvpr-mos-frontier-deep-viewer:", summary.repo, summary.status);

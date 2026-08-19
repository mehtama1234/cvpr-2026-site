import assert from "node:assert/strict";
import { demos, gauntletRows, incidents, summary } from "../src/fixtures.js";
import { applyIncident, extractSignals, gauntletDecision, summarizeGauntlet } from "../src/core.js";

const safety = demos.find((demo) => demo.id === "safety-deployment");
const launch = incidents.find((incident) => incident.id === "launch-audit");
const compound = incidents.find((incident) => incident.id === "compound-launch");
const base = applyIncident(safety, launch);
const stressed = applyIncident(safety, compound);

assert.equal(demos.length, 8);
assert.equal(incidents.length, 7);
assert.equal(gauntletRows.length, 56);
assert.ok(extractSignals(safety.summary).gpuBackedCases >= 8);
assert.ok(stressed.metrics.risk > base.metrics.risk);
assert.ok(stressed.metrics.evidence < base.metrics.evidence);
assert.ok(incidents.some((incident) => incident.id === "rare-object-distractor"));
assert.ok(incidents.some((incident) => incident.id === "adversarial-text-overlay"));
assert.ok(incidents.some((incident) => incident.id === "unsupported-query"));
assert.ok(incidents.every((incident) => incident.replayTarget));
assert.match(gauntletDecision(stressed.metrics), /^(release|review|block)$/);

const derived = summarizeGauntlet(demos, incidents);
assert.equal(derived.gauntletRows, 56);
assert.equal(summary.demos, 8);
assert.equal(summary.incidents, 7);
assert.equal(summary.gauntletRows, 56);
assert.ok(summary.sourceRelease >= 7);
assert.ok(summary.review >= 16);
assert.ok(summary.block >= 12);
assert.ok(summary.maxRisk >= 68);
assert.equal(
  summary.status,
  summary.demos === 8 &&
  summary.themes === 8 &&
  summary.incidents === 7 &&
  summary.incidentFamilies === 7 &&
  summary.replayTargets >= 6 &&
  summary.gauntletRows === 56 &&
  summary.sourceRelease === 8 &&
  summary.review >= 16 &&
  summary.block >= 12 &&
  summary.maxRisk >= 68 &&
  summary.minEvidence >= 40
    ? "release"
    : "inspect"
);
console.log("ok cvpr-cross-theme-incident-gauntlet:", summary.gauntletRows, "rows");

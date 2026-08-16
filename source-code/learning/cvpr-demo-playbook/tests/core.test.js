import assert from "node:assert/strict";
import { plays } from "../src/plays.js";
import {
  acceptanceChecklist,
  effortEstimate,
  priorityBand,
  readinessLiftNeeded,
  sequencePlaybook,
  summarizePlaybook
} from "../src/core.js";

assert.equal(priorityBand(49.9), "critical");
assert.equal(priorityBand(55), "high");
assert.equal(priorityBand(62), "focused");
assert.ok(plays.length >= 8);

for (const play of plays) {
  assert.match(play.slug, /^[a-z0-9-]+$/);
  assert.ok(play.cluster);
  assert.ok(play.scenario);
  assert.ok(play.currentReadiness >= 0 && play.currentReadiness <= 100);
  assert.ok(play.targetReadiness >= Math.min(68, play.currentReadiness));
  assert.ok(effortEstimate(play) >= 3);
  assert.ok(readinessLiftNeeded(play) >= 0);
  const checklist = acceptanceChecklist(play);
  assert.equal(checklist.length, 5);
  assert.ok(checklist.every((item) => item.includes(":")));
}

const sequenced = sequencePlaybook(plays);
assert.equal(sequenced.length, plays.length);
assert.match(sequenced[0].priority, /^(critical|high|focused)$/);
assert.ok(sequenced[0].liftNeeded >= 0);

const summary = summarizePlaybook(plays);
assert.equal(summary.plays, plays.length);
assert.ok(summary.clusters >= 8);
assert.ok(summary.scenarios >= 6);
assert.ok(summary.critical >= 0);
assert.ok(summary.totalLiftNeeded >= 0);
assert.equal(summary.firstBuild.slug, sequenced[0].slug);
console.log("ok cvpr-demo-playbook:", summary.plays, "next-build plays", summary.critical, "critical");

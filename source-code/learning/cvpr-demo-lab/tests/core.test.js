import assert from "node:assert/strict";
import { demos } from "../src/fixtures.js";
import { pct, scoreDemo, decision, summarizeDemo, summarizeLab } from "../src/core.js";

assert.equal(pct(0.875), 87.5);
assert.ok(demos.length >= 41);
assert.equal(demos.filter((demo) => demo.kind === "flagship").length, 8);
assert.ok(demos.filter((demo) => demo.kind === "stage").length >= 33);

for (const demo of demos) {
  const metrics = scoreDemo(demo, demo.value);
  assert.ok(metrics.primary >= 0 && metrics.primary <= 100);
  assert.ok(metrics.secondary >= 0 && metrics.secondary <= 100);
  assert.ok(metrics.risk >= 0 && metrics.risk <= 100);
  assert.match(decision(metrics), /^(release|review|block)$/);
  const summary = summarizeDemo(demo);
  assert.equal(summary.id, demo.slug);
  assert.equal(summary.reusableRule, demo.rule);
}

const lab = summarizeLab(demos);
assert.ok(lab.demos >= 41);
assert.equal(lab.flagshipDemos, 8);
assert.ok(lab.stageDemos >= 33);
assert.ok(lab.themes >= 8);
assert.ok(lab.clusters >= 11);
assert.ok(lab.systems >= 11);
assert.ok(lab.visualModes >= 10);
assert.ok(lab.release + lab.review + lab.block === lab.demos);
console.log("ok cvpr-demo-lab:", lab.demos, "interactive demos", lab.stageDemos, "stage demos");

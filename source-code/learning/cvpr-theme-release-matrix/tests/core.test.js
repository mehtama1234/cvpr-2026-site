import assert from "node:assert/strict";
import { matrixInput } from "../src/fixtures.js";
import { matrixGate, summarizeMatrix } from "../src/core.js";

const summary = summarizeMatrix(matrixInput);
assert.equal(matrixGate(summary), "release");
assert.equal(summary.themes, 8);
assert.equal(summary.systems, 11);
assert.equal(summary.stages, 33);
assert.equal(summary.demos, 41);
assert.equal(summary.coveredThemes, 8);
assert.equal(summary.openThemes, 0);
assert.equal(summary.benchSystems, 11);
assert.equal(summary.benchCases, 44);
assert.equal(summary.receiptStatus, "ready");
assert.equal(summary.receiptArtifacts, 7);
assert.equal(summary.validationGate, "release");
assert.ok(summary.packageTests >= 33);
for (const row of matrixInput.themeRows) {
  assert.ok(row.systems > 0);
  assert.ok(row.stages > 0);
  assert.ok(row.stageDemos > 0);
}
console.log("ok cvpr-theme-release-matrix:", summary.themes, "themes");

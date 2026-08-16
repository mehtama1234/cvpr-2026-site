import assert from "node:assert/strict";
import { packageRows, summary } from "../src/fixtures.js";
import { packageAuditGate, packageReady, summarizePackages } from "../src/core.js";

assert.equal(packageRows.length, 11);
assert.equal(packageRows.every(packageReady), true);
const derived = summarizePackages(packageRows);
assert.equal(derived.ready, summary.readyPackages);
assert.equal(derived.missing, 0);
assert.equal(derived.files, 55);
assert.equal(summary.handoffItems, 11);
assert.equal(summary.holds, 0);
assert.equal(packageAuditGate(summary), "package-audit-ready");
console.log("ok cvpr-interactive-package-integrity-audit:", summary.packages, "packages");

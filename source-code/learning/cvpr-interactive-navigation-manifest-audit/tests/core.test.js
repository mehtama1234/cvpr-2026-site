import assert from "node:assert/strict";
import { navItems, summary } from "../src/fixtures.js";
import { navGate, navItemReady, summarizeNav } from "../src/core.js";

assert.equal(navItems.length, 11);
assert.equal(navItems.every(navItemReady), true);
const derived = summarizeNav(navItems);
assert.equal(derived.linked, summary.linkedItems);
assert.equal(derived.missing, 0);
assert.equal(summary.handoffItems, 11);
assert.equal(summary.demos, 40);
assert.equal(summary.holds, 0);
assert.equal(navGate(summary), "nav-audit-ready");
console.log("ok cvpr-interactive-navigation-manifest-audit:", summary.items, "items");

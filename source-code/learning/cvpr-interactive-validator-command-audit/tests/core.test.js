import assert from "node:assert/strict";
import { commandRows, summary } from "../src/fixtures.js";
import { commandAuditGate, commandReady, summarizeCommands } from "../src/core.js";

assert.equal(commandRows.length, 13);
assert.equal(commandRows.every(commandReady), true);
const derived = summarizeCommands(commandRows);
assert.equal(derived.ready, summary.readyTargets);
assert.equal(derived.missing, 0);
assert.equal(derived.commands, 26);
assert.equal(summary.handoffItems, 11);
assert.equal(summary.holds, 0);
assert.equal(commandAuditGate(summary), "command-audit-ready");
console.log("ok cvpr-interactive-validator-command-audit:", summary.targets, "targets");

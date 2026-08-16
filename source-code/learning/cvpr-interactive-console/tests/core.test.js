import assert from "node:assert/strict";
import { consoleRows, summary } from "../src/fixtures.js";
import { consoleGate, consoleSummary, filterRows, panelPayload, selectRow } from "../src/core.js";

assert.equal(consoleRows.length, 40);
assert.equal(filterRows(consoleRows, { theme: "frontier" }).length, 5);
assert.equal(filterRows(consoleRows, { wave: "fifth" }).length, 8);
assert.equal(filterRows(consoleRows, { query: "BPFedCTTA" }).length, 1);
const selected = selectRow(consoleRows, "learning-05-github-com-liwenwang919-bpfedctt");
assert.equal(selected.repo, "BPFedCTTA");
assert.equal(panelPayload(selected, "artifacts").split("\n").length, 3);
assert.equal(panelPayload(selected, "replay").includes(selected.jobId), true);
const derived = consoleSummary(consoleRows);
assert.equal(derived.demos, summary.demos);
assert.equal(derived.readyRows, summary.readyRows);
assert.equal(consoleGate(summary), "console-ready");
console.log("ok cvpr-interactive-console:", summary.demos, "demos");

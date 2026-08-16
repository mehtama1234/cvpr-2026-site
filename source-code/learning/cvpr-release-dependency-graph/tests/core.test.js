import assert from "node:assert/strict";
import { graphInput, nodes, summary } from "../src/fixtures.js";
import { graphGate, summarizeGraph } from "../src/core.js";

const derived = summarizeGraph({ ...graphInput, nodes });
assert.equal(derived.status, "ready");
assert.equal(graphGate(summary), "ready");
assert.equal(summary.nodes, 15);
assert.equal(summary.edges, 19);
assert.equal(summary.rootNodes, 1);
assert.equal(summary.terminalNodes, 1);
assert.equal(summary.phases, 8);
assert.equal(summary.changeControlStatus, "controlled");
assert.equal(summary.manifestStatus, "sealed");
assert.equal(summary.launchStatus, "launch-ready");
assert.equal(summary.fullStackStatus, "valid");
assert.ok(nodes.every((node) => node.surface && node.command && node.status === "ready"));
console.log("ok cvpr-release-dependency-graph:", summary.nodes, "nodes,", summary.edges, "edges");

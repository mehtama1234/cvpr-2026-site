import assert from "node:assert/strict";
import { graphInput, nodes, summary } from "../src/fixtures.js";
import { graphGate, summarizeGraph } from "../src/core.js";

const derived = summarizeGraph({ ...graphInput, nodes });
assert.equal(derived.status, summary.status);
assert.equal(graphGate(summary), summary.status === "ready" ? "ready" : "block");
assert.equal(summary.nodes, 15);
assert.equal(summary.edges, 19);
assert.equal(summary.rootNodes, 1);
assert.equal(summary.terminalNodes, 1);
assert.equal(summary.phases, 8);
assert.ok(["controlled", "block"].includes(summary.changeControlStatus));
assert.ok(["sealed", "block"].includes(summary.manifestStatus));
assert.ok(["launch-ready", "block"].includes(summary.launchStatus));
assert.ok(["valid", "invalid"].includes(summary.fullStackStatus));
assert.ok(nodes.every((node) => node.surface && node.command && node.status === "ready"));
assert.equal(
  summary.status,
  summary.nodes === 15 &&
  summary.edges === 19 &&
  summary.rootNodes === 1 &&
  summary.terminalNodes === 1 &&
  summary.changeControlStatus === "controlled" &&
  summary.manifestStatus === "sealed" &&
  summary.launchStatus === "launch-ready" &&
  summary.fullStackStatus === "valid"
    ? "ready"
    : "block"
);
console.log("ok cvpr-release-dependency-graph:", summary.nodes, "nodes,", summary.edges, "edges");

import assert from "node:assert/strict";
import { cases, governorRows, papers, summary } from "../src/fixtures.js";
import { evaluateCase, governorDecision, scoreGovernor, summarizeGovernor } from "../src/core.js";

assert.equal(papers.length, 5);
assert.equal(cases.length, 5);
assert.equal(governorRows.length, 5);
assert.ok(papers.every((paper) => paper.repo.startsWith("http")));

const edge = cases.find((row) => row.id === "class-specific-edge-vit");
const base = scoreGovernor(edge);
assert.ok(base.latencyGain > 60);
assert.ok(base.accuracyRisk > 45);
assert.match(governorDecision(base), /^(promote|canary|hold)$/);

const safer = scoreGovernor(edge, { tokenBudget: 70, pruneRatio: 30, edgeMemory: 60, domainShift: 10, clientDrift: 10, adaptBudget: 60 });
assert.ok(safer.accuracyRisk < base.accuracyRisk);
assert.ok(safer.readiness > base.readiness);

const federated = evaluateCase(cases.find((row) => row.id === "federated-wild-tta"), papers[4]);
assert.equal(federated.paperTitle, "Towards Stable Federated Continual Test-Time Adaptation in Wild World");
assert.ok(federated.metrics.adaptationRisk > 55);

const derived = summarizeGovernor(governorRows);
assert.equal(derived.cases, 5);
assert.equal(derived.repoBackedRows, 5);
assert.equal(summary.demo, "cvpr-efficient-learning-repo-governor");
assert.equal(summary.theme, "Learning more from less, and not breaking");
assert.equal(summary.repoPapers, 5);
assert.ok(summary.canary + summary.hold >= 3);
assert.equal(summary.status, "ready");
console.log("ok cvpr-efficient-learning-repo-governor:", summary.cases, "cases");

import assert from "node:assert/strict";
import { drillRows, papers, scenarios, summary } from "../src/fixtures.js";
import { drillDecision, evaluateScenario, scoreDrill, summarizeDrill } from "../src/core.js";

assert.equal(papers.length, 5);
assert.equal(scenarios.length, 5);
assert.equal(drillRows.length, 5);
assert.ok(papers.every((paper) => paper.repo.startsWith("http")));

const rain = scenarios.find((scenario) => scenario.id === "town-transfer-rain");
const rainScore = scoreDrill(rain);
assert.ok(rainScore.transferRisk >= 55);
assert.match(drillDecision(rainScore), /^(promote|shadow|hold)$/);

const safer = scoreDrill(rain, { domainShift: 20, occlusion: 20, latency: 10, memoryLoss: 10, coordinationLoad: 10, rewardSparsity: 10 });
assert.ok(safer.readiness > rainScore.readiness);
assert.ok(safer.transferRisk < rainScore.transferRisk);

const gui = evaluateScenario(scenarios.find((scenario) => scenario.id === "gui-history-trap"), papers[4]);
assert.equal(gui.paperTitle, "HiconAgent: History Context-aware Policy Optimization for GUI Agents");
assert.ok(gui.metrics.monitorNeed > 45);

const derived = summarizeDrill(drillRows);
assert.equal(derived.scenarios, 5);
assert.equal(derived.repoBackedRows, 5);
assert.equal(summary.demo, "cvpr-embodied-control-repo-drill");
assert.equal(summary.theme, "Using vision to act in the world");
assert.equal(summary.repoPapers, 5);
assert.ok(summary.hold + summary.shadow >= 3);
assert.equal(summary.status, "ready");
console.log("ok cvpr-embodied-control-repo-drill:", summary.scenarios, "scenarios");

import assert from "node:assert/strict";
import { coverageAudit, paperGate, releaseBoard } from "../src/fixtures.js";
import { pct, scoreCandidate, summarizeCoverageAudit, summarizePaperGate, summarizeReleaseBoard } from "../src/core.js";

assert.equal(pct(0.875), 87.5);

const audit = summarizeCoverageAudit(coverageAudit);
assert.equal(audit.stage, "coverage-audit");
assert.equal(audit.system, "cvpr-paper-to-system-gate");
assert.equal(audit.complete, true);
assert.ok(audit.totalThemePapers >= 0);
assert.ok(audit.totalClusterAssignments >= 0);
assert.equal(coverageAudit.systemsRegistryPresent, true);

const gate = summarizePaperGate(paperGate);
assert.equal(gate.stage, "paper-gate");
assert.ok(gate.candidateCount >= 11);
assert.equal(gate.bestCandidate, paperGate.bestCandidate);
assert.equal(scoreCandidate(paperGate.candidates[0]), paperGate.candidates[0].readinessScore);
assert.equal(paperGate.source, "systems-registry");

const board = summarizeReleaseBoard(releaseBoard);
assert.equal(board.stage, "release-board");
assert.ok(board.rankedCandidates.length >= 11);
assert.equal(board.raw.reusableRule, board.reusableRule);
assert.ok(board.deployableNow >= 1);

console.log("ok cvpr-paper-to-system-gate:", gate.bestCandidate, gate.topScore);

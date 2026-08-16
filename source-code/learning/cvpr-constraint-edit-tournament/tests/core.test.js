import assert from "node:assert/strict";
import { generationRecords, policies, restorationRecords, summary } from "../src/fixtures.js";
import { buildTournamentRows, scoreTournamentMatch, summarizeTournament, tournamentDecision } from "../src/core.js";

const rows = buildTournamentRows(generationRecords, restorationRecords, policies);
assert.equal(rows.length, 48);
assert.ok(rows.every((row) => row.generationBench === "cvpr-constraint-generation-bench"));
assert.ok(rows.every((row) => row.restorationBench === "cvpr-restoration-fidelity-bench"));

const sample = scoreTournamentMatch(generationRecords[0], restorationRecords[0], policies[0]);
assert.ok(sample.tournamentScore >= 0 && sample.tournamentScore <= 100);
assert.match(tournamentDecision(sample), /^(release|review|block)$/);

const derived = summarizeTournament(generationRecords, restorationRecords, policies);
assert.equal(derived.matches, 48);
assert.equal(derived.block, 0);
assert.equal(summary.status, "release");
assert.equal(summary.backlogGoal, "Constraint edit tournament");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.gpuBackedCases, 8);
assert.ok(summary.minConstraintScore >= 78);
assert.ok(summary.maxJointRisk <= 38);
console.log("ok cvpr-constraint-edit-tournament:", summary.matches, "matches");

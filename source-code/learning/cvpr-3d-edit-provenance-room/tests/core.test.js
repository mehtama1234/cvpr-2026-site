import assert from "node:assert/strict";
import { edits, geometryRecords, roomRows, splatRecords, summary } from "../src/fixtures.js";
import { buildRoomRows, roomDecision, scoreRoomPair, summarizeRoom } from "../src/core.js";

const rows = buildRoomRows(geometryRecords, splatRecords, edits);
assert.equal(rows.length, 48);
assert.equal(roomRows.length, 48);

const inspect = scoreRoomPair(geometryRecords[0], splatRecords[0], edits[0]);
const rewrite = scoreRoomPair(geometryRecords[0], splatRecords[0], edits[2]);
assert.ok(inspect.provenanceContinuity > rewrite.provenanceContinuity);
assert.ok(inspect.roomRisk < rewrite.roomRisk);
assert.match(roomDecision(rewrite), /^(release|review|block)$/);

const derived = summarizeRoom(geometryRecords, splatRecords, edits);
assert.equal(derived.geometryCases, 4);
assert.equal(derived.splatCases, 4);
assert.equal(derived.edits, 3);
assert.equal(derived.roomRows, 48);
assert.equal(summary.backlogGoal, "3D edit provenance room");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.evidenceJobs.length, 2);
assert.equal(summary.status, "release");
assert.equal(summary.block, 4);
assert.ok(summary.minProvenanceContinuity >= 76);
assert.ok(summary.maxRoomRisk <= 44);
console.log("ok cvpr-3d-edit-provenance-room:", summary.roomRows, "room rows");

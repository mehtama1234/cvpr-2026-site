export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRoomPair(geometry, splat, edit) {
  const gm = geometry.metrics;
  const sm = splat.metrics;
  const geometryTrust = clamp(gm.poseEvidence * 0.30 + gm.metricEvidence * 0.34 + gm.surfaceConsistency * 0.24 + (100 - Math.max(gm.scaleDrift, gm.topologyRisk)) * 0.12 - edit.geometryPenalty);
  const renderTrust = clamp(sm.renderFidelity * 0.28 + sm.semanticAttachment * 0.24 + sm.provenanceTrace * 0.26 + (100 - Math.max(sm.viewInstability, sm.editLeakageRisk)) * 0.22 - edit.semanticShift * 0.16);
  const provenanceContinuity = clamp(sm.provenanceTrace * 0.42 + geometryTrust * 0.24 + renderTrust * 0.18 + (100 - edit.provenancePenalty) * 0.16);
  const editContainment = clamp((100 - sm.editLeakageRisk) * 0.34 + sm.semanticAttachment * 0.24 + gm.surfaceConsistency * 0.18 + (100 - edit.semanticShift) * 0.14 + (100 - edit.geometryPenalty) * 0.10);
  const roomRisk = clamp(Math.max(gm.scaleDrift, gm.topologyRisk, sm.editLeakageRisk, sm.viewInstability) + edit.provenancePenalty * 0.36 + edit.semanticShift * 0.18 + edit.geometryPenalty * 0.24);
  const readiness = clamp(geometryTrust * 0.28 + renderTrust * 0.26 + provenanceContinuity * 0.24 + editContainment * 0.14 + (100 - roomRisk) * 0.08);
  return { geometryTrust, renderTrust, provenanceContinuity, editContainment, roomRisk, readiness };
}

export function roomDecision(scores) {
  if (scores.readiness >= 74 && scores.geometryTrust >= 70 && scores.provenanceContinuity >= 74 && scores.editContainment >= 70 && scores.roomRisk <= 42) return "release";
  if (scores.readiness >= 64 && scores.geometryTrust >= 62 && scores.provenanceContinuity >= 64 && scores.roomRisk <= 58) return "review";
  return "block";
}

export function buildRoomRows(geometryRecords, splatRecords, edits) {
  return geometryRecords.flatMap((geometry) =>
    splatRecords.flatMap((splat) =>
      edits.map((edit) => {
        const scores = scoreRoomPair(geometry, splat, edit);
        return {
          id: `${geometry.id}/${splat.id}/${edit.id}`,
          geometryCase: geometry.title,
          splatCase: splat.title,
          edit: edit.title,
          scores,
          decision: roomDecision(scores)
        };
      })
    )
  );
}

export function summarizeRoom(geometryRecords, splatRecords, edits) {
  const rows = buildRoomRows(geometryRecords, splatRecords, edits);
  const avgReadiness = rows.reduce((sum, row) => sum + row.scores.readiness, 0) / rows.length;
  return {
    geometryCases: geometryRecords.length,
    splatCases: splatRecords.length,
    edits: edits.length,
    roomRows: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    minProvenanceContinuity: Number(Math.min(...rows.map((row) => row.scores.provenanceContinuity)).toFixed(1)),
    maxRoomRisk: Number(Math.max(...rows.map((row) => row.scores.roomRisk)).toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}

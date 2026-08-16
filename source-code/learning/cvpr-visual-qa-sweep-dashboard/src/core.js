export function rowReady(row) {
  if (!row) return false;
  return row.exists &&
    row.viewportMeta &&
    row.hasTitle &&
    row.hasPrimaryHeading &&
    row.requiredTokensPresent === row.requiredTokens &&
    row.brokenLocalLinks === 0 &&
    row.todoMarkers === 0 &&
    row.layoutRisk !== "high";
}

export function visualQaGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.readySurfaces !== 8) return "block";
  if (summary.requiredTokensMissing !== 0) return "block";
  if (summary.brokenLocalLinks !== 0) return "block";
  if (summary.highLayoutRisk !== 0) return "block";
  if (summary.roadmapStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeVisualQa(rows, sources) {
  const summary = {
    surfaces: rows.length,
    readySurfaces: rows.filter(rowReady).length,
    requiredTokensMissing: rows.reduce((sum, row) => sum + row.missingTokens.length, 0),
    brokenLocalLinks: rows.reduce((sum, row) => sum + row.brokenLocalLinks, 0),
    highLayoutRisk: rows.filter((row) => row.layoutRisk === "high").length,
    roadmapStatus: sources.roadmap.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
  return { ...summary, status: visualQaGate({ ...summary, status: "ready" }) };
}

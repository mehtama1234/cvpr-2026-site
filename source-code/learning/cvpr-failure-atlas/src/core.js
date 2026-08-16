export function severityScore(row) {
  const gap = row.direction === "high" ? row.metricValue - row.threshold : row.threshold - row.metricValue;
  const decisionWeight = row.decision === "block" ? 20 : row.decision === "review" ? 8 : 0;
  return Number(Math.max(0, gap + decisionWeight).toFixed(1));
}

export function rankFailures(rows) {
  return [...rows]
    .map((row) => ({ ...row, severity: severityScore(row) }))
    .sort((a, b) => b.severity - a.severity || a.family.localeCompare(b.family));
}

export function summarizeFamilies(rows) {
  const families = new Map();
  for (const row of rows) {
    const current = families.get(row.family) || { family: row.family, cases: 0, release: 0, review: 0, block: 0, maxSeverity: 0 };
    current.cases += 1;
    current[row.decision] += 1;
    current.maxSeverity = Math.max(current.maxSeverity, severityScore(row));
    families.set(row.family, current);
  }
  return [...families.values()].sort((a, b) => b.block - a.block || b.maxSeverity - a.maxSeverity);
}

export function summarizeAtlas(rows) {
  const ranked = rankFailures(rows);
  return {
    cases: rows.length,
    families: new Set(rows.map((row) => row.family)).size,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    maxSeverity: ranked[0]?.severity ?? 0,
    topFailure: ranked[0],
    familyRows: summarizeFamilies(rows),
    ranked
  };
}

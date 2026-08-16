export function themeCovered(row) {
  return row.manifestRows === 5 &&
    row.promotedRows === 5 &&
    row.pageExists === true &&
    row.registryExists === true &&
    row.packageExists === true &&
    row.verifierExists === true;
}

export function auditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "coverage-complete") return "block";
  if (summary.themes !== 8) return "block";
  if (summary.coveredThemes !== 8) return "block";
  if (summary.manifestRows !== 40) return "block";
  if (summary.promotedRows !== 40) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  return "coverage-complete";
}

export function summarizeAudit(rows) {
  const summary = {
    audit: "cvpr-live-evidence-coverage-audit",
    themes: rows.length,
    coveredThemes: rows.filter(themeCovered).length,
    manifestRows: rows.reduce((sum, row) => sum + row.manifestRows, 0),
    promotedRows: rows.reduce((sum, row) => sum + row.promotedRows, 0),
    missingArtifacts: rows.reduce((sum, row) => sum + row.missingArtifacts, 0)
  };
  return { ...summary, status: summary.themes === 8 && summary.coveredThemes === 8 && summary.manifestRows === 40 && summary.promotedRows === 40 && summary.missingArtifacts === 0 ? "coverage-complete" : "block" };
}

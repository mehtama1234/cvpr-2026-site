export function packageReady(row) {
  return row.status === "package-ready" &&
    row.requiredFiles === 5 &&
    row.presentFiles === 5 &&
    row.coreExists === true &&
    row.fixturesExists === true &&
    row.testExists === true &&
    row.readmeExists === true;
}

export function summarizePackages(rows) {
  return {
    packages: rows.length,
    ready: rows.filter(packageReady).length,
    missing: rows.filter((row) => !packageReady(row)).length,
    files: rows.reduce((sum, row) => sum + row.presentFiles, 0)
  };
}

export function packageAuditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "package-audit-ready") return "block";
  if (summary.packages !== 11) return "block";
  if (summary.readyPackages !== 11) return "block";
  if (summary.missingPackages !== 0) return "block";
  if (summary.requiredFiles !== 55) return "block";
  if (summary.presentFiles !== 55) return "block";
  if (summary.handoffItems !== 11) return "block";
  if (summary.holds !== 0) return "block";
  return "package-audit-ready";
}

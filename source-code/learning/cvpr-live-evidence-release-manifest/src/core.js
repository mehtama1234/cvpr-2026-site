export function manifestReady(summary) {
  return summary.status === "manifest-ready" &&
    summary.surfaces === 8 &&
    summary.rows === 40 &&
    summary.liveRows === 40 &&
    summary.artifacts === 40 &&
    summary.holdDemo === 0 &&
    summary.packageCount === 8 &&
    summary.verifierCount === 8;
}

export function artifactReady(row) {
  return row.page.endsWith(".html") &&
    row.registry.endsWith("registry.json") &&
    row.packagePath.startsWith("source-code/learning/") &&
    row.verifier.startsWith("scripts/verify_") &&
    row.rows === 5 &&
    row.holdDemo === 0;
}

export function summarizeManifest(rows) {
  return {
    surfaces: rows.length,
    rows: rows.reduce((sum, row) => sum + row.rows, 0),
    liveRows: rows.reduce((sum, row) => sum + row.liveRows, 0),
    artifacts: rows.reduce((sum, row) => sum + row.artifacts, 0),
    holdDemo: rows.reduce((sum, row) => sum + row.holdDemo, 0),
    packageCount: rows.filter((row) => row.packagePath).length,
    verifierCount: rows.filter((row) => row.verifier).length
  };
}

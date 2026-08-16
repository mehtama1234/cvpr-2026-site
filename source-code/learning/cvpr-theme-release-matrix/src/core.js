export function matrixGate(summary) {
  if (!summary) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.systems !== 11) return "block";
  if (summary.stages !== 33) return "block";
  if (summary.demos !== 41) return "block";
  if (summary.coveredThemes !== 8) return "block";
  if (summary.openThemes !== 0) return "block";
  if (summary.benchSystems !== 11) return "block";
  if (summary.receiptStatus !== "ready") return "block";
  if (summary.validationGate !== "release") return "block";
  return "release";
}

export function summarizeMatrix(input) {
  return {
    matrix: "cvpr-theme-release-matrix",
    themes: input.themeRows.length,
    systems: input.systems.summary.systems,
    stages: input.systems.summary.stages,
    demos: input.demos.summary.totalDemos,
    coveredThemes: input.themeRows.filter((row) => row.systems > 0 && row.stageDemos > 0).length,
    openThemes: input.themeRows.filter((row) => row.systems === 0 || row.stageDemos === 0).length,
    benchSystems: new Set(input.benches.map((bench) => bench.sourceSystem)).size,
    benchCases: input.mission.summary.benchCases,
    receiptStatus: input.receipt.summary.status,
    receiptArtifacts: input.receipt.summary.evidenceArtifacts,
    validationGate: input.validation.summary.gateStatus,
    packageTests: input.validation.summary.packageTests
  };
}

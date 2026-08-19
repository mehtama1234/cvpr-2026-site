export function evidenceMode(row) {
  if (row.colabJobId) return "colab-pro-plus";
  if (row.intentionalSystemEvidence) return "cached-system-evidence";
  return "missing";
}

export function auditGate(summary) {
  if (!summary) return "block";
  if (summary.systems !== summary.benchSystems) return "block";
  if (summary.missingBenchSystems !== 0) return "block";
  if (summary.missingColabEvidence !== 0) return "block";
  if (summary.benchRelease !== summary.benchCases) return "block";
  if (summary.benchReview !== 0 || summary.benchBlock !== 0) return "block";
  if (summary.colabJobs < summary.colabCoveredBenches) return "block";
  if (summary.cachedResults < summary.colabJobs * 4) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  return "release";
}

export function summarizeCoverage(input) {
  const systems = input.systems.summary;
  const demos = input.demos.summary;
  const mission = input.mission.summary;
  const worker = input.worker.summary;
  const release = input.releaseBrief.summary;
  const systemRows = input.systemRows || [];
  const missingBenchSystems = systemRows.filter((row) => !row.bench).length;
  const missingColabEvidence = systemRows.filter((row) => evidenceMode(row) === "missing").length;
  const systemEvidenceCoveredBenches = systemRows.filter((row) => row.intentionalSystemEvidence).length;
  const summary = {
    audit: "cvpr-production-coverage-audit",
    systems: systems.systems,
    stages: systems.stages,
    demos: demos.totalDemos,
    benchSystems: mission.implementedBenches,
    benchCases: mission.benchCases,
    benchRelease: mission.benchRelease,
    benchReview: mission.benchReview,
    benchBlock: mission.benchBlock,
    colabJobs: worker.jobs,
    cachedResults: worker.cachedResults,
    colabCoveredBenches: worker.jobs,
    systemEvidenceCoveredBenches,
    missingBenchSystems,
    missingColabEvidence,
    importIssues: release.importIssues,
    releaseGate: release.gate,
  };
  return { ...summary, status: auditGate(summary) };
}

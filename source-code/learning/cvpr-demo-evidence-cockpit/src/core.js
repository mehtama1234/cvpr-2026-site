export function evidenceLabel(row) {
  if (row.runtimeEvidence === "colab-pro-plus") return "GPU-backed demo evidence";
  if (row.runtimeEvidence === "cached-system-evidence") return "cached system evidence";
  return "missing evidence";
}

export function cockpitGate(summary) {
  if (!summary) return "block";
  if (summary.systems !== 11) return "block";
  if (summary.stageDemos !== 33) return "block";
  if (summary.flagshipDemos !== 8) return "block";
  if (summary.totalDemos !== 41) return "block";
  if (summary.proPlusJobs !== 14) return "block";
  if (summary.expectedLiveResults !== 56) return "block";
  if (summary.benchRelease !== 44) return "block";
  if (summary.missingDemoEvidence !== 0) return "block";
  if (summary.releaseGate !== "release") return "block";
  return "ready";
}

export function summarizeCockpit(input) {
  const demos = input.demos.summary;
  const coverage = input.coverage.summary;
  const planner = input.planner.summary;
  const mission = input.mission.summary;
  const release = input.releaseBrief.summary;
  const demoRows = input.demoRows || [];
  const summary = {
    cockpit: "cvpr-demo-evidence-cockpit",
    systems: coverage.systems,
    stageDemos: demos.stageDemos,
    flagshipDemos: demos.flagshipDemos,
    totalDemos: demos.totalDemos,
    proPlusJobs: planner.jobs,
    expectedLiveResults: planner.expectedResults,
    benchRelease: mission.benchRelease,
    missingDemoEvidence: demoRows.filter((row) => row.runtimeEvidence === "missing").length,
    releaseGate: release.gate
  };
  return { ...summary, status: cockpitGate({ ...summary, status: "ready" }) };
}

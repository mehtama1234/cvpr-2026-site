export function caseReady(item) {
  return item.status === "pass" &&
    item.releaseAction === "promote-interactive-demo" &&
    item.localArtifacts === 3 &&
    item.controls === 5 &&
    item.runtimeController === true &&
    item.replayCommand.includes(item.jobId);
}

export function filterCases(cases, filters = {}) {
  const theme = filters.theme || "all";
  const scenario = filters.scenario || "all";
  const wave = filters.wave || "all";
  return cases.filter((item) =>
    (theme === "all" || item.theme === theme) &&
    (scenario === "all" || item.scenario === scenario) &&
    (wave === "all" || item.wave === wave)
  );
}

export function summarizeCases(cases) {
  return {
    cases: cases.length,
    demos: new Set(cases.map((item) => item.jobId)).size,
    themes: new Set(cases.map((item) => item.theme)).size,
    waves: new Set(cases.map((item) => item.wave)).size,
    scenarios: new Set(cases.map((item) => item.scenario)).size,
    passingCases: cases.filter(caseReady).length,
    blockedCases: cases.filter((item) => item.status !== "pass").length,
    artifactChecks: cases.filter((item) => item.scenario === "artifact-integrity").length,
    replayChecks: cases.filter((item) => item.scenario === "replay-failure-probe").length
  };
}

export function runnerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "runner-ready") return "block";
  if (summary.cases !== 120) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.waves !== 5) return "block";
  if (summary.scenarios !== 3) return "block";
  if (summary.passingCases !== 120) return "block";
  if (summary.blockedCases !== 0) return "block";
  if (summary.artifactChecks !== 40) return "block";
  if (summary.replayChecks !== 40) return "block";
  return "runner-ready";
}

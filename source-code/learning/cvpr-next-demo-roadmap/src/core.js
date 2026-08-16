export function roadmapGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.goals !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.linkedSystems !== 11) return "block";
  if (summary.proPlusGoals !== 7) return "block";
  if (summary.cachedEvidenceGoals !== 1) return "block";
  if (summary.operatorStatus !== "operator-ready") return "block";
  if (summary.missingEvidence !== 0) return "block";
  return "ready";
}

export function summarizeRoadmap(input) {
  const goals = input.roadmapGoals || [];
  const summary = {
    roadmap: "cvpr-next-demo-roadmap",
    goals: goals.length,
    themes: input.portfolio.summary.themes,
    linkedSystems: goals.reduce((sum, goal) => sum + goal.systems.length, 0),
    proPlusGoals: goals.filter((goal) => goal.runtimeEvidence === "colab-pro-plus").length,
    cachedEvidenceGoals: goals.filter((goal) => goal.runtimeEvidence === "cached-system-evidence").length,
    missingEvidence: input.portfolio.summary.missingDemoEvidence,
    operatorStatus: input.commandCenter.summary.status
  };
  return { ...summary, status: roadmapGate({ ...summary, status: "ready" }) };
}

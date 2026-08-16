export function roadmapReady(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.goals !== 6) return "block";
  if (summary.readyGoals !== 6) return "block";
  if (summary.sourceGate !== "release") return "block";
  if (summary.closeoutStatus !== "sealed") return "block";
  if (summary.operatorStatus !== "operator-ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeRoadmap(goals, sources) {
  return {
    goals: goals.length,
    readyGoals: goals.filter((goal) => goal.status === "ready").length,
    sourceGate: sources.brief.summary.gate,
    closeoutStatus: sources.closeout.summary.status,
    operatorStatus: sources.command.summary.status,
    fullStackStatus: sources.validation.summary.status
  };
}

export function roadmapReady(summary) {
  if (!summary) return "block";
  if (summary.status !== "block") return "block";
  if (summary.goals !== 6) return "block";
  if (summary.readyGoals !== 6) return "block";
  if (summary.sourceGate !== "block") return "block";
  if (summary.closeoutStatus !== "block") return "block";
  if (summary.operatorStatus !== "block") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "block";
}

export function summarizeRoadmap(goals, sources) {
  return {
    goals: goals.length,
    readyGoals: goals.filter((goal) => goal.status === "ready").length,
    sourceGate: sources.brief.summary.gate,
    closeoutStatus: sources.closeout.summary.status,
    operatorStatus: sources.command.summary.status,
    fullStackStatus: sources.validation.summary.fullStackStatus
  };
}
